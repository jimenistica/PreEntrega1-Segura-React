import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase.config";


import ItemDetail from "../../components/ItemDetail";
import Spinner from "../../components/Spinner";

const Detail = () => {
  const { id } = useParams();
  let [item, setItem] = useState(null);
  let [loading, setLoading] = useState(false);
  let [fallback, setFallback] = useState(false);

  useEffect(() => {
    setLoading(true);
    const docRef = doc(db, "items", id);

    getDoc(docRef)
    .then((snapshot) =>
      snapshot.exists()
        ? setItem({ id: snapshot.id, ...snapshot.data() })
        : setFallback(true)
    )
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
