import Carrusel from "../../components/Carrusel";
import ItemProductList from "../../components/ItemProductList";

import React, { useState , useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from './../../config/firebase.config';
import { Link } from "react-router-dom";
import  Spinner from "../../components/Spinner";


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

   const [categories, setCategories] =useState([]);
   const [newItems, setNewItems] =useState([]);
   let [loading, setLoading] = useState(false);
   let [fallback, setFallback] = useState({
    visible: false,
    mesage:'...'
  });

   useEffect(() => {
    const fetchCategories = async () => {
      try{ 
        setLoading(true);
      const itemsSnapshot = await getDocs(collection(db, "items"));
      const categoryMap = {}; // clave: categoría, valor: cantidad

      itemsSnapshot.docs.forEach((doc) => {
        const itemData = doc.data();
        const itemCategory = itemData.category;

        if (categoryMap[itemCategory]) {
          categoryMap[itemCategory] += 1;
        } else {
          categoryMap[itemCategory] = 1;
        }
      });
      
      const categoriesArray = Object.entries(categoryMap).map(([categoryName, count]) => ({
        name: categoryName,
        count
      }));
      setCategories(categoriesArray);
      setLoading(false);

    } catch (error) {
      setFallback({ visible: true, message: 'Error al cargar categorías.' });
      setLoading(false);
    }
      
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchNewItems = async () => {

      try{
        setLoading(true);
      const itemsSnapshot = await getDocs(collection(db, "items"));
      const currentDate = new Date();
      const newItems = itemsSnapshot.docs
        .map((doc) => ({ id: doc.id, ...doc.data() }))
        .filter((item) => {
          const itemDate = item.date.toDate();
          const difference = Math.floor((currentDate - itemDate) / (1000 * 60 * 60 * 24));
          return difference <= 10; // Filtrar productos con menos de 10 días
        });

      setNewItems(newItems);
      } catch (error) {
        setFallback({ visible: true, message: 'Error al cargar novedades.' });
        setLoading(false);
      }

    };
    fetchNewItems();
  }, []);

  return (
    <section className="section-home">
      <Carrusel images={images}/>

      {loading ? (
        <Spinner/>
      ): (
        <>
      <section className="categories-section">
        <h2>CATEGORÍAS</h2>
        <div className="categories-section__list">
          {categories.map((cat) => (
            <Link to={`/tienda/${cat.name}`} key={cat.name} className="categories-section__list__item">
              <span>{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2>NOVEDADES</h2>
        <ItemProductList items={newItems} />
      </section>
        
        </>
      )}
    </section>
  );
};

export default Home;
