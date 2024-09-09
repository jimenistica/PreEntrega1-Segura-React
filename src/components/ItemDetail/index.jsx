import Counter from "../../containers/Counter";

const ItemDetail =({id, name, img, category, description, price})=>{
    return (
        <section className="item-detail">
      <picture className="item-detail__picture">
          <img className="item-detail__picture--img item-detail__picture--img--1" src={`/public/images${img?.principal}`} alt={`${name} - Principal`} />
          <img className="item-detail__picture--img item-detail__picture--img--2" src={`/public/images${img?.secundaria}`} alt={`${name} - Secundaria`} />
      </picture>
      <article className="item-detail__info">
          <p className="item-detail__info--licence">{category}</p>
          <h2 className="item-detail__info--name">{name}</h2>
          <p className="item-detail__info--description">{description}</p>
          <p className="item-detail__info--price">$ {price}</p>
          <form className="item-detail__form" action="" method="POST" encType="application/x-www-form-urlencoded">
              <div className="item-detail__form--container">
                  <button className="item-detail__form--btn" type="button">-</button>
                  <input className="item-detail__form--input" type="text" placeholder="0" />
                  <button className="item-detail__form--btn" type="button">+</button>
              </div>
              <input className="item-detail__form--submit" type="submit" value="Agregar al Carrito" />
          </form>
      </article>
    </section>

        
        // <article className="product-detail ">
        //     <header>
        //         <h2>
        //             {name}
        //         </h2>
        //     </header>
        //     <picture>
        //         <img src={img} alt={name} />
        //     </picture>
        //     <section>
        //         <p>
        //             Categoría: {category}
        //         </p>
        //         <p>
        //             Descripción: {desciption}
        //         </p>
        //         <p>
        //             Precio: ${price}
        //         </p>
        //     </section>
        //     <footer>
        //         <Counter initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada')}/>
        //     </footer>
        // </article>
    )
}

export default ItemDetail;