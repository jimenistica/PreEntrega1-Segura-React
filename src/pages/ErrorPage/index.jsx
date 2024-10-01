import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="container error-page">
        <h2>ERROR</h2>
      <p className="error-page__mensaje">Lamentablemente no pudimos encontrar esta página.</p>
      <Link to={"/"}>
        <button className="principal-button">Volver al inicio</button>
      </Link>
    </section>
  );
};

export default ErrorPage;
