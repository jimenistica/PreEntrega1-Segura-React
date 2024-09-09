import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseLayout from "./layout/BaseLayout";
import Home from './pages/Home/index';
import Tienda from "./pages/Tienda";
import Detail from "./pages/Detail";

function App() {
  return (
    <BrowserRouter>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/tienda" element={<Tienda/>}/>
          <Route path="/tienda/category/:id" element={<Tienda/>}/>
          <Route path="/detalle/:id" element={<Detail/>}/>

        </Routes>
      </BaseLayout>
    </BrowserRouter>
  );
}

export default App;
