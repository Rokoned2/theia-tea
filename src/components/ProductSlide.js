import React from "react";

const ProductSlide = ({ img, title, price }) => {
  return (
    <div className="products__slide">
      <img className="products__slide-img" alt={title} src={img} />
      <h3 className="heading-terciary">{title}</h3>
      <p className="products__slide-price">{price}</p>
    </div>
  );
};

export default ProductSlide;
