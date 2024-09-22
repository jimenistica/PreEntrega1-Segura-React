import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemProductList from "../../components/ItemProductList";
import Spinner from "../../components/Spinner";

const Tienda = () => {
  const { category } = useParams();

  let [items, setItems] = useState([]);
  let [loading, setLoading] = useState(false);
  let [fallback, setFallback] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/src/data/items.json")
      .then((res) => res.json())
      .then((data) => {
        if (category) {
          setItems(data.filter((i) => i.category === category));
        } else {
          setItems(data);
        }
      })
      .catch((e) => {
        setFallback(true);
      })
      .finally(() => setLoading(false));
  }, [category]);

  return (
    <main className="section-tienda">
        
      {loading 
      ? 
      <Spinner/>
      : fallback
      ? <p>ERROR</p>
      :(
        <>
          <aside className="section-tienda__aside">
            <h3>FILTRAR POR CATEGORÍA</h3>
            <div>
              <div className="section-tienda__aside__category">
                <Link
                  className="section-tienda__aside__category__link"
                  to={`/tienda`}
                >
                  <span>Hogar</span>
                  <span className="section-tienda__aside__category__link__cant">
                    6
                  </span>
                </Link>
              </div>
              <div className="section-tienda__aside__category">
                <Link
                  className="section-tienda__aside__category__link"
                  to={`/tienda`}
                >
                  <span>Minielectro </span>
                  <span className="section-tienda__aside__category__link__cant">
                    8
                  </span>
                </Link>
              </div>
            </div>
          </aside>
          <ItemProductList items={items} />
        </>
      )}

    </main>
  );
};

export default Tienda;
