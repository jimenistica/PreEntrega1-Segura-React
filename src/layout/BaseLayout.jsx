import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from "../containers/Navbar";
import Footer from '../containers/Footer';

const BaseLayout =({children})=>{
    
    return(
        <>
        <Navbar/>
        {children}
        <Footer/>
        </>
    );
}
export default BaseLayout