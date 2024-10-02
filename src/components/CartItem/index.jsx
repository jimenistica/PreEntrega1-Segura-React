import { Icon } from "@iconify/react/dist/iconify.js";

const CartItem = ({ item, removeItem, addItem }) => {
  return (
    <tr className="carrito-item">
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
            src={`./images${item.img.principal}`}
            alt={item.name}
          />
        </picture>
      </td>
      <td>{item.name}</td>
      <td>${item.price}</td>
      <td>
        <button onClick={() => addItem({ ...item, quantity: -1 })}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => addItem({ ...item, quantity: 1 })}>+</button>
      </td>
      <td>${item.price * item.quantity}</td>
    </tr>
  );
};

export default CartItem;
