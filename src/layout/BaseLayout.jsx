import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from "../containers/Navbar";

const BaseLayout =({children})=>{
    
    return(
        <>
        <Navbar/>
        {children}
        <footer>footer</footer>
        </>
    );
}
export default BaseLayout