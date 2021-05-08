import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__info">
        <div className="contact__item">
          <p className="text-primary">Dirección</p>
          <p className="text-secondary">
            523 N Fairfax Ave, Los Angeles, CA 90048
          </p>
        </div>
        <div className="contact__item">
          <p className="text-primary">Correo electrónico</p>
          <p className="text-secondary">email@email.com</p>
        </div>
        <div className="contact__item">
          <p className="text-primary">Teléfono</p>
          <p className="text-secondary">+ 123 456 789</p>
        </div>
      </div>
      <div className="contact__form">
        <input type="text" placeholder="nombre" />
        <input type="email" placeholder="correo electrónico" />
        <textarea type="text" rows="5" placeholder="mensaje" />
        <div className="btn">Enviar</div>
      </div>
    </div>
  );
};

export default Contact;
