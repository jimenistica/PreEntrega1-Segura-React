import { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail";
import { useParams } from "react-router-dom";

const Detail =()=>{
    const {id}=useParams();
    let[item, setItem]= useState(null);

    useEffect(() => {
        fetch('/src/data/items.json')
        .then(res => res.json())
        .then(data => setItem(data.find(item => item.id==id)))
    }, []);
    return(
       <ItemDetail {...item}/>
    );
}
export default Detail;