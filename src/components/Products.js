import React from "react";
import ProductSlide from "./ProductSlide";

import Image1 from "../img/product-1.jpeg";
import Image2 from "../img/product-2.jpeg";
import Image3 from "../img/product-3.jpeg";

const products = [
  {
    id: "1",
    img: Image1,
    title: "Product title",
    price: "6.99",
  },
  {
    id: "2",
    img: Image2,
    title: "Product title",
    price: "6.99",
  },
  {
    id: "3",
    img: Image3,
    title: "Product title",
    price: "6.99",
  },
];

const Products = () => {
  return (
    <div className="products">
      <div className="products__info">
        <div>
          <h3 className="primary-text">Sobre nosotros</h3>
          <h2 className="heading-secondary">Tea station</h2>
        </div>
        <div className="about__info-text">
          <p className="secondary-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            numquam rem eos vel consequuntur obcaecati?
          </p>
          <p className="secondary-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            numquam rem eos vel consequuntur obcaecati?
          </p>
        </div>

        <button className="btn">Leer más</button>
      </div>
      <div className="products__inventory">
        {products.map(({ id, img, title, price }) => (
          <ProductSlide id={id} img={img} title={title} price={price} />
        ))}
      </div>
    </div>
  );
};

export default Products;
