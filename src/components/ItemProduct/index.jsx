import { Link } from "react-router-dom";

const ItemProduct=({ name, img, price, category, id, isNew})=> {

    return(
        
      <article className="item">
        {isNew && <span className="item__new">Nuevo</span>}
      <Link to={`/detalle/${id}`}>
        <picture className="item__picture">
          <img className="item__picture--img item__picture--img--1" src={`/public/images${img.principal}`} alt={`${name} - Principal`} />
          <img className="item__picture--img item__picture--img--2" src={`/public/images${img.secundaria}`} alt={`${name} - Secundaria`} />
        </picture>
        <div className="item__info">
          <h3 className="item__info--title">{category}</h3>
          <h4 className="item__info--item">{name}</h4>
          <p className="item__info--price">$ {price} .-</p>
        </div>
      </Link>
    </article>

    );

}

export default ItemProduct