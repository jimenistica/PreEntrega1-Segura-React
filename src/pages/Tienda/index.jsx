import {useParams } from "react-router-dom";
import ItemProductList from "../../components/ItemProductList"

const Tienda =()=>{
    const {id}=useParams();

    return(<ItemProductList category={id}/>)
}

export default Tienda