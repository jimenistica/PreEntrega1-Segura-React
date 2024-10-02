// import { useContext, useState } from "react";
// import { CartContext } from "../../context/cartContext";
// import { Link, useNavigate } from "react-router-dom";
// import { Icon } from "@iconify/react/dist/iconify.js";

// import Cards from "react-credit-cards-2";
// import 'react-credit-cards-2/dist/es/styles-compiled.css';
// import Modal from "react-modal";
// import Swal from 'sweetalert2';

// import { collection, addDoc } from "firebase/firestore";
// import { db } from "../../config/firebase.config"; 


// const Carrito = () => {
//   const { cartItems, removeItem, clearCart, addItem } = useContext(CartContext);
//   const totalCompra = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   const navigate = useNavigate(); // Hook para navegar al inicio después de la alerta

// Modal.setAppElement("#root");

// // Estado para manejar el modal
// const [showModal, setShowModal] = useState(false);
// const [cardInfo, setCardInfo] = useState({
//   number: "",
//   name: "",
//   expiry: "",
//   cvc: "",
//   focus: ""
// });

// // Manejar la apertura del modal
// const handleOpenModal = () => setShowModal(true);
// const handleCloseModal = () => setShowModal(false);

//  // Manejar cambios en los campos de la tarjeta
//  const handleInputChange = (e) => {
//   const { name, value } = e.target;
//   setCardInfo((prev) => ({ ...prev, [name]: value }));
// };

// const handleInputFocus = (e) => {
//   setCardInfo((prev) => ({ ...prev, focus: e.target.name }));
// };


// const pagoAprobado = async (e) => {
//   e.preventDefault(); //Así no se me re-renderiza y desaparece rápido.

//   // Obtener los datos del comprador del formulario de pago
//   const buyerData = {
//     name: cardInfo.name,
//     cardNumber: cardInfo.number,
//     expiry: cardInfo.expiry,
//     cvc: cardInfo.cvc,
//     // Añade aquí otros datos que hayas recogido
//   };

//   // Obtener los datos del carrito
//   const cartData = cartItems.map(item => ({
//     id: item.id,
//     name: item.name,
//     price: item.price,
//     quantity: item.quantity,
//   }));

//   // Crear la orden de compra
//   const order = {
//     buyer: buyerData,
//     items: cartData,
//     total: totalCompra + 2000,  // Sumar el envío
//     date: new Date().toISOString(),  // Fecha de la orden
//   };

//   try{
//     // Subir la orden a Firebase
//     const docRef = await addDoc(collection(db, "orders"), order);
//     const orderId = docRef.id; 

//     console.log("Orden creada con ID: ", docRef.id);

//     Swal.fire({
//       title: "Pago aprobado",
//       text: `Tu pago fue procesado, gracias por tu compra.
//       ID de tu orden: ${orderId}`,
//       icon: "success",
//       confirmButtonText: "Volver al inicio",
//       allowOutsideClick: false, 
//       allowEscapeKey: false,    
//       allowEnterKey: true,
//     }).then((result) => {
//       if (result.isConfirmed) {
//         clearCart(); 
//         navigate("/"); 
//       }
//       e.target.disabled = false;
//     });
//   } catch (error) {
//     console.error("Error al crear la orden: ", error);
//     Swal.fire({
//       icon: 'error',
//       title: 'Error',
//       text: 'Hubo un problema al procesar la orden. Inténtalo de nuevo.',
//     });
//   }


// };

//   return (
//     <section className="main">
//       <h2>CARRITO</h2>
//       <div className="carrito-page">
//         <div className="carrito">
//           {cartItems.length === 0 ? (
//             <>
//               <p className="carrito__mensaje">Tu carrito está vacío.</p>
//               <Link to={"/tienda"}>
//                 <button className="principal-button">Volver a la tienda</button>
//               </Link>
//             </>
//           ) : (
//             <table className="carrito__table">
//               <thead>
//                 <tr>
//                   <th> </th>
//                   <th> </th>
//                   <th>Producto</th>
//                   <th>Precio</th>
//                   <th>Cantidad</th>
//                   <th>Subtotal</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {cartItems.map((item) => (
//                   <tr key={item.id} className="carrito-item">
//                     <td>
//                       <Icon
//                         icon="ph:trash-bold"
//                         className="carrito-item__icon"
//                         onClick={() => removeItem(item.id)}
//                       />
//                     </td>
//                     <td>
//                       <picture className="carrito-item__picture">
//                         <img
//                           className="carrito-item__picture__img"
//                           src={`/public/images${item.img.principal}`}
//                           alt={item.name}
//                         />
//                       </picture>
//                     </td>
//                     <td>{item.name}</td>
//                     <td>${item.price}</td>
//                     <td>
//                       <button
//                         onClick={() => addItem({ ...item, quantity: -1 })}
//                       >
//                         -
//                       </button>
//                       <span>{item.quantity}</span>
//                       <button onClick={() => addItem({ ...item, quantity: 1 })}>
//                         +
//                       </button>
//                     </td>
//                     <td>${item.price * item.quantity}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}

//           {cartItems.length > 0 && (
            
//               <button className="principal-button carrito__button" onClick={clearCart}>Vaciar Carrito</button>
            
//           )}
//         </div>
//         {cartItems.length > 0 && (
//           <div className="resumen">
//             <h3>RESUMEN DE LA COMPRA</h3>
//             <table className="resumen__table">
//               <tbody>
//                 <tr>
//                   <th>Subtotal</th>
//                   <td>${totalCompra}</td>
//                 </tr>
//                 <tr>
//                 <th>Envío</th>
//                 <td>$2000</td>
//                 </tr>
//                 <tr>
//                 <th>Total</th>
//                 <td>${totalCompra+2000}</td>
//                 </tr>
//               </tbody>
//             </table>
//             <button className="principal-button" onClick={handleOpenModal} >Terminar compra</button>
//           </div>
//         )}
//       </div>
      
//       <Modal
//         isOpen={showModal}
//         onRequestClose={handleCloseModal}
//         contentLabel="Modal de Pago"
//         className="modal"
//         overlayClassName="overlay"
//       >
//         <div className="modal__cards">
//         <Cards
//           number={cardInfo.number}
//           name={cardInfo.name}
//           expiry={cardInfo.expiry}
//           cvc={cardInfo.cvc}
//           focused={cardInfo.focus}
//        />
//         <form className="modal__cards__form">
//           <input
//             type="tel"
//             name="number"
//             placeholder="Número de tarjeta"
//             value={cardInfo.number}
//             onChange={handleInputChange}
//             onFocus={handleInputFocus}
//           />
//           <input
//             type="text"
//             name="name"
//             placeholder="Nombre"
//             value={cardInfo.name}
//             onChange={handleInputChange}
//             onFocus={handleInputFocus}
//           />
//           <div className="modal__cards__form__div">

//           <input
//             type="text"
//             name="expiry"
//             placeholder="Fecha de expiración"
//             value={cardInfo.expiry}
//             onChange={handleInputChange}
//             onFocus={handleInputFocus}
//           />
//           <input
//             type="tel"
//             name="cvc"
//             placeholder="CVC"
//             value={cardInfo.cvc}
//             onChange={handleInputChange}
//             onFocus={handleInputFocus}
//           />
//           </div>
//           <button type="submit" className="principal-button" onClick={pagoAprobado}>Pagar</button>
//         </form>
//         </div>

//       </Modal>
//     </section>


//   );
// };

// export default Carrito;

import { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import CartItem from "../../components/CartItem";
import CartSummary from "../../components/CartSummary";
import PaymentForm from "../../components/PaymentForm";
import OrderConfirmation from "../../components/OrderConfirmation";
import Swal from "sweetalert2";


const Carrito = () => {
  const [loading, setLoading] = useState(false);
  const { cartItems, removeItem, clearCart, addItem } = useContext(CartContext);
  const totalCompra = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const navigate = useNavigate();

  Modal.setAppElement("#root");

  // Modal state

  const [showModal, setShowModal] = useState(false);
  const [cardInfo, setCardInfo] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    focus: ""
  });

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleInputChange = (e) => {
    let { name, value } = e.target;

  // Si estamos modificando el campo de expiración
  if (name === "expiry") {
    // Elimina cualquier carácter que no sea un número
    value = value.replace(/\D/g, "");
    
    // Si el usuario ingresa más de 4 dígitos (MMAA), formatearlo como MM/AA
    if (value.length === 4) {
      value = `${value.substring(0, 2)}/${value.substring(2)}`;
    }
  }

  setCardInfo({ ...cardInfo, [name]: value });
  }


  const handleInputFocus = (e) => setCardInfo({ ...cardInfo, focus: e.target.name });

  // Funciones de validación
  const validarNumeroTarjeta = (number) => {
    const regex = /^[0-9]{16}$/;
    return regex.test(number);
  };

  const validarFechaExpiracion = (expiry) => {
    // Verifica si el formato es MM/AA
  const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
  if (!regex.test(expiry)) {
    return false;
  }

  const [month, year] = expiry.split("/").map(Number);

  // Obtener el año actual en formato AA y el mes actual
  const currentYear = new Date().getFullYear() % 100; 
  const currentMonth = new Date().getMonth() + 1;

  // Validar que el mes está entre 1 y 12
  if (month < 1 || month > 12) {
    return false;
  }

  // Comparar el año y el mes con la fecha actual
  if (year < currentYear || (year === currentYear && month < currentMonth)) {
    return false;  // La tarjeta ya expiró
  }

  return true;  // La fecha es válida
  };

  const validarCVC = (cvc) => {
    const regex = /^[0-9]{3}$/;
    return regex.test(cvc);
  };

  const pagoAprobado = async (e) => {
    setLoading(true);
    console.log("Fecha de expiración ingresada:", cardInfo.expiry);
    e.preventDefault();
    if (!validarNumeroTarjeta(cardInfo.number)) {
      Swal.fire({
        icon: 'error',
        title: 'Número de tarjeta inválido',
        text: 'El número de tarjeta debe tener 16 dígitos.',
       
      });
      setLoading(false);
      return;
    }

    if (!validarFechaExpiracion(cardInfo.expiry)) {
      Swal.fire({
        icon: 'error',
        title: 'Fecha de expiración inválida',
        text: 'La fecha de expiración debe tener el formato MM/AA y ser posterior a la fecha actual.',
      });
      setLoading(false);
      return;
    }

    if (!validarCVC(cardInfo.cvc)) {
      Swal.fire({
        icon: 'error',
        title: 'CVC inválido',
        text: 'El CVC debe tener 3 dígitos.',
      });
      setLoading(false);
      return;
    }

    if (!cardInfo.name) {
      Swal.fire({
        icon: 'error',
        title: 'Nombre faltante',
        text: 'Por favor completa el nombre en la tarjeta.',
      });
      setLoading(false);
      return;
    }
    
    try{
      const order = {
        buyer: { ...cardInfo },
        items: cartItems,
        total: totalCompra + 2000,
        date: new Date().toISOString(),
      };
      OrderConfirmation(order, clearCart, navigate);

      setLoading(false);

    } catch (error) {
      // Manejar cualquier error y detener el spinner
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema con el pago. Intenta nuevamente.',
      });
      setLoading(false);
      console.log("Loading después de setLoading(false):", loading);
    }
  };

  return (
    <section className="main">
      <h2>CARRITO</h2>
      <div className="carrito-page">
        <div className="carrito">
          {cartItems.length === 0 ? (
            <>
              <p className="carrito__mensaje">Tu carrito está vacío.</p>
              <Link to={"/tienda"}>
                <button className="principal-button">Volver a la tienda</button>
              </Link>
            </>
          ) : (
            <table className="carrito__table">
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    removeItem={removeItem}
                    addItem={addItem}
                  />
                ))}
              </tbody>
            </table>
          )}
          {cartItems.length > 0 && (
            <button className="principal-button carrito__button" onClick={clearCart}>
              Vaciar Carrito
            </button>
          )}
        </div>
        {cartItems.length > 0 && (
          <CartSummary totalCompra={totalCompra} handleOpenModal={handleOpenModal} />
        )}
      </div>

      <Modal isOpen={showModal} onRequestClose={handleCloseModal} className="modal"
  overlayClassName="overlay">
        <PaymentForm
          cardInfo={cardInfo}
          handleInputChange={handleInputChange}
          handleInputFocus={handleInputFocus}
          pagoAprobado={pagoAprobado}
          loading={loading}
        />
      </Modal>
    </section>
  );
};

export default Carrito;
