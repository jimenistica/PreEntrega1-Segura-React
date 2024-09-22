import { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail";
import { useParams } from "react-router-dom";
import Spinner from "../../components/Spinner";

const Detail = () => {
  const { id } = useParams();
  let [item, setItem] = useState(null);
  let [items, setItems] = useState([]);
  let [loading, setLoading] = useState(false);
  let [fallback, setFallback] = useState(false);

  useEffect(() => {
    setLoading(true);
     fetch("/src/data/items.json")
       .then((res) => res.json())
       .then((data) => setItem(data.find((item) => item.id == id)))
       .catch((e) => {
         setFallback(true);
       })
       .finally(() => setLoading(false));
  }, []);

  return (
    <main className="detail-section">
      {loading ? (
        <Spinner />
      ) : fallback ? (
        <p>ERROR</p>
      ) : (
        <ItemDetail {...item} />
      )}
    </main>
  );
};
export default Detail;
