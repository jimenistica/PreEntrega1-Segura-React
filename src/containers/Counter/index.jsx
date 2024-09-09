import { useState, useEffect } from "react";
import Button from "../../components/Button";

const Counter = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const handleIncrease = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAdd = () => {
    onAdd(quantity);
  };

  return (
    <div className="counter-div">
      <p>
        Cantidad <span>{quantity}</span>
      </p>
      <div className="buttons-div">
        <Button action={handleIncrease} text="+" />
        <Button action={handleDecrease} text="-" />
      </div>
      <Button action={handleAdd} disabled={!stock} text="Agregar al carrito" />
    </div>
  );
};
export default Counter;
