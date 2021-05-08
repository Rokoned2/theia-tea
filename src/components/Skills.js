import React from "react";
import SkillSlide from "./SkillSlide";
import {
  FaMugHot,
  FaGlassCheers,
  FaBomb,
  FaMortarPestle,
} from "react-icons/fa";

const skills = [
  {
    icon: <FaMugHot className="skills__slide-icon" />,
    title: "Hecho en USA",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, sequi. ",
  },
  {
    icon: <FaGlassCheers className="skills__slide-icon" />,
    title: "Relajación",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, sequi. ",
  },
  {
    icon: <FaBomb className="skills__slide-icon" />,
    title: "Energía",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, sequi. ",
  },
  {
    icon: <FaMortarPestle className="skills__slide-icon" />,
    title: "Receta familiar",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, sequi. ",
  },
];

const Skills = () => {
  return (
    <div className="skills">
      {skills.map(({ icon, title, text }) => (
        <SkillSlide icon={icon} title={title} text={text} />
      ))}
    </div>
  );
};

export default Skills;
