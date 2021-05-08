import React from "react";
import ServiceCard from "./ServiceCard";
import Image1 from "../img/product-1.jpeg";
import Image2 from "../img/product-2.jpeg";
import Image3 from "../img/product-3.jpeg";

const services = [
  {
    id: "1",
    title: "custom recipes service",
    img: Image1,
  },

  {
    id: "2",
    title: "home delivery service",
    img: Image2,
  },
  {
    id: "3",
    title: "tea aging service",
    img: Image3,
  },
];

const Services = () => {
  return (
    <div className="services">
      <div>
        <h3 className="text-primary">Sobre nosotros</h3>
        <h2 className="heading-secondary">Tea station</h2>
      </div>
      <div className="services__list">
        {services.map(({ id, title, img }) => (
          <ServiceCard id={id} title={title} img={img} />
        ))}
      </div>
    </div>
  );
};

export default Services;
