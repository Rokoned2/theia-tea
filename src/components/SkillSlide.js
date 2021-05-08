import React from "react";

const SkillSlide = ({ icon, title, text }) => {
  console.log("icon", icon);
  return (
    <div className="skills__slide">
      {icon}
      <h3>{title}</h3>
      <p className="secondary-text">{text}</p>
    </div>
  );
};

export default SkillSlide;
