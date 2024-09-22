import Carrusel from "../../components/Carrusel";
import ItemProductList from "../../components/ItemProductList";
import React from 'react';
import Tienda from "../Tienda";

const Home = () => {

   const images = [
    {src:'../../../public/images/carrusel-1.jpg',
      caption: {text: 'Vestí tu cama con <strong>las mejores telas</strong>.'}
    },
    {src:'../../../public/images/carrusel-2.jpg',
      caption: {text: 'Llevá tu bebida <strong>donde quieras</strong>, sin fugas.'}
    },
    {src:'../../../public/images/carrusel-3.jpg',
      caption: {text: 'Los mejores <strong>equipos de mate</strong> para afrontar <strong>mejor</strong> los días.'}
    }, 
   ];

  return (
    <>

      <Carrusel images={images}/>
      <div className="categories-cards">
        <article>
          
        </article>

      </div>

    </>
  );
};

export default Home;
