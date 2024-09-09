import { useState, useEffect } from "react";

import ItemProduct from '../ItemProduct';

const ItemProductList =({category})=>{
    let [ items, setItems ] = useState([]);
    
    console.log(category);
    

    useEffect(() => {
        fetch('/src/data/items.json')
        .then(res => res.json())
        .then(data => {
          if (category){
            setItems(data.filter(item => item.category === category)) 
            
          }else{
            setItems(data);
          }
        })
    }, []);

    return(
      <section className="items__container container">
        {items.map((item, i) => <ItemProduct key={`item-${i}`} {...item} />)}
      </section>
    );
  
  
}

export default ItemProductList