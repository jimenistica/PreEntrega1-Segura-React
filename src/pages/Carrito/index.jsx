import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";

const Carrito = () => {
  const { cartItems, removeItem, clearCart, addItem } = useContext(CartContext);
  const totalCompra = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);


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
                  <th> </th>
                  <th> </th>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="carrito-item">
                    <td>
                      <Icon
                        icon="ph:trash-bold"
                        className="carrito-item__icon"
                        onClick={() => removeItem(item.id)}
                      />
                    </td>
                    <td>
                      <picture className="carrito-item__picture">
                        <img
                          className="carrito-item__picture__img"
                          src={`/public/images${item.img.principal}`}
                          alt={item.name}
                        />
                      </picture>
                    </td>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    <td>
                      <button
                        onClick={() => addItem({ ...item, quantity: -1 })}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => addItem({ ...item, quantity: 1 })}>
                        +
                      </button>
                    </td>
                    <td>${item.price * item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {cartItems.length > 0 && (
            
              <button className="principal-button carrito__button" onClick={clearCart}>Vaciar Carrito</button>
            
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="resumen">
            <h3>RESUMEN DE LA COMPRA</h3>
            <table className="resumen__table">
              <tbody>
                <tr>
                  <th>Subtotal</th>
                  <td>${totalCompra}</td>
                </tr>
                <tr>
                <th>Envío</th>
                <td>$2000</td>
                </tr>
                <tr>
                <th>Total</th>
                <td>${totalCompra+2000}</td>
                </tr>
              </tbody>
            </table>
            <button className="principal-button">Terminar compra</button>
          </div>
        )}
      </div>
    </section>

    // <section className="cart">
    //   <div className="cart__header">
    //     <h2>Tu Carrito</h2>
    //   </div>

    //   {cartItems.length === 0 ? (
    //     <p>Tu carrito está vacío.</p>

    //   ) : (
    //     <div className="cart__items">
    //       {cartItems.map((item) => (
    //         <div key={item.id} className="cart__items__item">
    //           <div className="cart__items__item--detail">
    //             <div className="cart__items__item__picture">
    //             <img
    //               className="cart__items__item__picture--img"
    //               src={`/public/images${item.img.principal}`}
    //               alt={item.name}
    //             />
    //             </div>

    //             <div className="cart__items__item__div">
    //               <div className="cart__items__item__div--info">
    //               <h3 className="cart__items__item--name">{item.name}</h3>
    //               <p className="cart__items__item--price">Precio: ${item.price}</p>
    //               <p>Total: ${item.price * item.quantity}</p>

    //               </div>
    //               <div className="cart__items__item__div--controls">
    //                 <button onClick={() => addItem({ ...item, quantity: -1 })}>
    //                   -
    //                 </button>
    //                 <span>{item.quantity}</span>
    //                 <button onClick={() => addItem({ ...item, quantity: 1 })}>
    //                   +
    //                 </button>
    //               </div>
    //               <button onClick={() => removeItem(item.id)}>Eliminar</button>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   )}

    //   {cartItems.length > 0 && (
    //     <div className="cart__footer">
    //       <button className="cart__footer--clear" onClick={clearCart}>Vaciar Carrito</button>
    //       <button className="cart__footer--end">Continuar a la compra</button>
    //     </div>
    //   )}
    // </section>
  );
};

export default Carrito;
