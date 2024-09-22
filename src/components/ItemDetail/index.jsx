import { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";


const ItemDetail = ({ id, name, img, category, description, price }) => {
  let [quantity, setQuantity] = useState(1);
  const { addItem, removeItem } = useContext(CartContext);

  const increase = () => {
    setQuantity(quantity + 1);
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAdd = () => {
    addItem({ id, name, img, category, description, price, quantity });
  };

  return (
    <section className="item-detail">
      <picture className="item-detail__picture">
        <img
          className="item-detail__picture--img item-detail__picture--img--1"
          src={`/public/images${img?.principal}`}
          alt={`${name} - Principal`}
        />
        <img
          className="item-detail__picture--img item-detail__picture--img--2"
          src={`/public/images${img?.secundaria}`}
          alt={`${name} - Secundaria`}
        />
      </picture>
      <article className="item-detail__info">
        <div className="item-detail__nav">
          <Link to={`/`}>
            <p className="item-detail__info--category">Inicio-</p>
          </Link>
          <Link to={`/tienda/${category}`}>
            <p className="item-detail__info--category">{category}</p>
          </Link>
          <Link to={`/detalle/${id}`}><p className="item-detail__info--category">-{name}</p></Link>

        </div>
        <h2 className="item-detail__info--name">{name}</h2>
        <p className="item-detail__info--description">{description}</p>
        <p className="item-detail__info--price">$ {price}</p>
        <div className="item-detail__form--container">
          <button
            className="item-detail__form--btn"
            type="button"
            onClick={decrease}
          >
            -
          </button>
          <input
            className="item-detail__form--input"
            type="text"
            value={quantity}
            readOnly
          />
          <button
            className="item-detail__form--btn"
            type="button"
            onClick={increase}
          >
            +
          </button>
        </div>
        <input
          className="principal-button"
          type="buton"
          value="Agregar al Carrito"
          readOnly
          onClick={handleAdd}
        />
      </article>
    </section>
  );
};

export default ItemDetail;
