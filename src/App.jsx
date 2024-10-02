import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseLayout from "./layout/BaseLayout";
import Home from './pages/Home/index';
import Tienda from "./pages/Tienda";
import Detail from "./pages/Detail";
import Carrito from "./pages/Carrito";
import { CartContextProvider } from "./context/cartContext";
import Contacto from './pages/Contacto/index';
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter >
        <BaseLayout>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/tienda" element={<Tienda/>}/>
            <Route path="/tienda/:category" element={<Tienda/>}/>
            <Route path="/detalle/:id" element={<Detail/>}/>
            <Route path="/contacto" element={<Contacto/>}/>
            <Route path="/carrito" element={<Carrito/>}/>
            <Route path="*" element={<ErrorPage/>}/>
          </Routes>
        </BaseLayout>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
