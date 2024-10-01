import Cards from "react-credit-cards-2";
import 'react-credit-cards-2/dist/es/styles-compiled.css';

const PaymentForm = ({ cardInfo, handleInputChange, handleInputFocus, pagoAprobado }) => {
  return (
    <div className="modal__cards">
      <Cards
        number={cardInfo.number}
        name={cardInfo.name}
        expiry={cardInfo.expiry}
        cvc={cardInfo.cvc}
        focused={cardInfo.focus}
      />
      <form className="modal__cards__form" onSubmit={pagoAprobado}>
        <input
          type="tel"
          name="number"
          placeholder="Número de tarjeta"
          value={cardInfo.number}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={cardInfo.name}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          required
        />
        <div className="modal__cards__form__div">
          <input
            type="text"
            name="expiry"
            placeholder="Fecha de expiración MM/AA"
            pattern="\d{2}/\d{2}"
            value={cardInfo.expiry}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            required
          />
          <input
            type="tel"
            name="cvc"
            placeholder="CVC"
            value={cardInfo.cvc}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            required
          />
        </div>
        <button type="submit" className="principal-button">Pagar</button>
      </form>
    </div>
  );
};

export default PaymentForm;