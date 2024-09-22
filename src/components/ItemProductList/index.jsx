import ItemProduct from '../ItemProduct';

const ItemProductList =({items})=>{
   
    return(
      <section className="items__container container">
       {items.map((item, i) => <ItemProduct key={`item-${i}`} {...item} />)}

      </section>
    );
  
  
}

export default ItemProductList;