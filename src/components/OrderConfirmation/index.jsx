import { addDoc, collection } from 'firebase/firestore';
import Swal from 'sweetalert2';
import { db } from '../../config/firebase.config';

const OrderConfirmation = async (order, clearCart, navigate) => {
  try {
    console.log("Intentando crear la orden en Firestore...");
    const docRef = await addDoc(collection(db, "orders"), order);
    console.log("Orden creada con éxito:", docRef.id);
    const orderId = docRef.id;

    Swal.fire({
      title: "Pago aprobado",
      text: `Tu pago fue procesado, gracias por tu compra.\nID de tu orden: ${orderId}`,
      icon: "success",
      confirmButtonText: "Volver al inicio",
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: true,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        navigate("/");
      }
    });
  } catch (error) {
    console.error("Error al crear la orden:", error);
    Swal.fire({
        icon: 'error',
      title: 'Error',
      text: 'Hubo un problema al procesar la orden. Inténtalo de nuevo.',
    });
  }
};

export default OrderConfirmation;
