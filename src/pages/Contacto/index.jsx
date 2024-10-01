const Contacto = () => {
  
  
  return (
    <section className="contact container">
      <h3>Envianos tu consulta o comentario.</h3>
      <form className="contact-form">
        <div className="contact-form__info">
          <div className="contact-form__info__item">
            <label for="user_name" className="contact-form__info__item__label">
              Nombre completo <strong>*</strong>
            </label>
            <div className="contact-form__info__item__div">
              <input
                type="text"
                name="user_name"
                placeholder="Nombre"
                required=""
                className="contact-form__info__item__place"
              />
              <input
                type="text"
                name="user_surname"
                placeholder="Apellido"
                required=""
                className="contact-form__info__item__place"
              />
            </div>
          </div>
          <div className="contact-form__info__item">
            <label for="user_email" className="contact-form__info__item__label">
              Correo electrónico <strong>*</strong>
            </label>
            <input
              className="contact-form__info__item__place"
              type="email"
              name="user_email"
              placeholder="Correo Electrónico"
              required=""
            />
          </div>
          <div className="contact-form__info__item">
            <label for="user_message" className="contact-form__info__item__label">
              Comentario o mensaje <strong>*</strong>
            </label>
            <textarea
              name="user_message"
              placeholder="Dejanos tu mensaje..."
              required=""
              className="contact-form__info__item__place-area"
            ></textarea>
          </div>
        </div>
        <div className="contact-submit">
          <button type="submit" className="principal-button">
            Enviar Consulta
          </button>
        </div>
      </form>
    </section>
  );
};
export default Contacto;
