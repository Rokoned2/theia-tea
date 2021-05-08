import React from "react";
import aboutImg from "../img/about-bcg.jpeg";

const About = () => {
  return (
    <div className="about">
      <div className="about__img-container">
        <div className="about__img-border">
          <img src={aboutImg} className="about__img" alt="About img" />
        </div>
      </div>
      <div className="about__info">
        <div>
          <h3 className="text-primary">Sobre nosotros</h3>
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
    </div>
  );
};

export default About;
