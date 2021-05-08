import React from "react";

const ServiceCard = ({ id, title, img }) => {
  return (
    <div className="service-card" id={id}>
      <div className="service-card__img-container">
        <img className="service-card__img" src={img} alt={title} />
      </div>
      <h3 className="heading-terciary">{title}</h3>
      <div className="service-card__btn">Read More</div>
    </div>
  );
};

export default ServiceCard;
