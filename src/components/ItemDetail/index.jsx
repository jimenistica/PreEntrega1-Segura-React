import { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";
import { Link} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
    toast.info(` ${name} fue añadido al carrito!`, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      className:'toast-custom'
  })
  };

  

  return (
    <section className="item-detail">
      <picture className="item-detail__picture">
        <img
          className="item-detail__picture--img item-detail__picture--img--1"
          src={`./images${img?.principal}`}
          alt={`${name} - Principal`}
        />
        <img
          className="item-detail__picture--img item-detail__picture--img--2"
          src={`./images${img?.secundaria}`}
          alt={`${name} - Secundaria`}
        />
      </picture>
      <article className="item-detail__info">
        <div className="item-detail__nav">
          <Link to={`/tienda`}>
            <p className="item-detail__info--category">Productos/ </p>
          </Link>
          <Link to={`/tienda/${category}`}>
            <p className="item-detail__info--category">{category}/</p>
          </Link>
          <Link to={`/detalle/${id}`}><p className="item-detail__info--category"> {name}</p></Link>

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
      <ToastContainer />
    </section>
  );
};

export default ItemDetail;
