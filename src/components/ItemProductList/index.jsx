import ItemProduct from '../ItemProduct';

const isNew = (date) => {
  const currentDate = new Date();
  const itemDate = date.toDate();
  const diferencia = Math.floor((currentDate - itemDate) / (1000 * 60 * 60 * 24));
  return diferencia <= 30; // Si tiene 30 días o menos, es nuevo
};

const ItemProductList =({items})=>{
   
    return(
      <section className="items__container container">
       {items.map((item, i) => (
        <ItemProduct key={`item-${i}`} {...item} isNew={isNew(item.date)}/>))}

      </section>
    );
  
  
}

export default ItemProductList;