import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/firebase.config";

import ItemProductList from "../../components/ItemProductList";
import Spinner from "../../components/Spinner";

const Tienda = () => {
  const { category } = useParams();

  let [items, setItems] = useState([]);
  let [loading, setLoading] = useState(false);
  let [fallback, setFallback] = useState({
    visible: false,
    mesage:'...'
  });
  let [categories, setCategories] = useState([]); 
  let [sortOrder, setSortOrder] = useState(""); // Estado para manejar el orden

  useEffect(() => {
    setLoading(true);

    const itemsCollection= category 
    ? query(collection(db, 'items'), where('category', '==', category))
    : collection(db, 'items');
    
    getDocs(itemsCollection)
      .then((snapshot)=>{
        if (snapshot.size===0) {
          setFallback({visible:true, mesage:'No econtramos reultados'});
        }else{
          // setItems(snapshot.docs.map(doc=> ({id: doc.id, ...doc.data()})));

          const filteredItems = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        console.log(filteredItems);  // Verifica los productos filtrados
        setItems(filteredItems);

        }
       
      })
      .finally(()=> setLoading(false));
    

  }, [category]);

  useEffect(() => {
    const fetchCategories = async () => {
      const itemsSnapshot = await getDocs(collection(db, "items"));
      const categoryMap = {}; // calve: categoría, valor: cantidad

      // Contar productos por categoría
      itemsSnapshot.docs.forEach((doc) => {
        const itemData = doc.data();
        const itemCategory = itemData.category;

        if (categoryMap[itemCategory]) {
          categoryMap[itemCategory] += 1;
        } else {
          categoryMap[itemCategory] = 1;
        }
      });

      // Convertir el objeto en un array de categorías
      const categoriesArray = Object.entries(categoryMap).map(
        ([categoryName, count]) => ({
          name: categoryName,
          count
        })
      );
      setCategories(categoriesArray);
    };

    fetchCategories();
  }, []);

  // manejar el cambio en el select de orden
  const handleSortChange = (e) => {
    const order = e.target.value;
    setSortOrder(order);

    // Ordenar los productos en función del precio
    const sortedItems = [...items].sort((a, b) => {
      if (order === "price-asc") {
        return a.price - b.price; 
      } else if (order === "price-desc") {
        return b.price - a.price;
      } else if (order === "newest") {
        return b.date.toDate() - a.date.toDate(); 
      } else if (order === "oldest") {
        return a.date.toDate() - b.date.toDate(); 
      } else {
        return 0; // No hacer nada si no se ha seleccionado una opción
      }
    });

    setItems(sortedItems); // Actualizar los items ordenados
  };


  return (
    <main className="section-tienda">
      {loading ? (
        <Spinner />
      ) : fallback.visible ? (
        <p>{fallback.mesage}</p>
      ) : (
        <>
          <aside className="section-tienda__aside">
            <h3>FILTRAR POR CATEGORÍA</h3>
            {categories.map((cat) => (
                <div key={cat.name} className="section-tienda__aside__category">
                  <Link
                    className="section-tienda__aside__category__link"
                    to={`/tienda/${cat.name}`}
                  >
                    <span>{cat.name}</span>
                    <span className="section-tienda__aside__category__link__cant">
                      {cat.count}
                    </span>
                  </Link>
                </div>
              ))}
          </aside>
          <div className="section-tienda__div-principal">
          <div className="section-tienda__sort">
            <label htmlFor="sort">Ordenar por precio: </label>
            <select id="sort" value={sortOrder} onChange={handleSortChange}>
              <option value="">Selecciona</option>
              <option value="price-asc">Precio: Menor a Mayor</option>
              <option value="price-desc">Precio: Mayor a Menor</option>
              <option value="newest">Más Nuevos</option>
              <option value="oldest">Más Antiguos</option>

            </select>
          </div>
          <ItemProductList items={items} />
          </div>

        </>
      )}
    </main>
  );
};

export default Tienda;
