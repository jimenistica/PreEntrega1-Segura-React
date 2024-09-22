import { Icon } from "@iconify/react";
import Pill from "../Pill";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

const CartWidget = () => {
  
  const { cartItems} =useContext(CartContext);

  const quantity = cartItems.length > 0 ? cartItems.map(item => item.quantity).reduce((acc,ant)=> ant+acc)
  : 0;

  console.log(cartItems);
  
  console.log(quantity);
  
  

  return (
    <div className="cart-widget">
        <Pill quantity={quantity}/>
      <Icon className="cart-widget__cart" icon="f7:cart-fill" />
    </div>
  );
};

export default CartWidget;
