import React from "react";
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__social-icons">
        <FaFacebookSquare />
        <FaInstagram />
        <FaTwitter />
      </div>
      <div className="secondary-text">
        ©2019 tea station. all rights reserved
      </div>
    </div>
  );
};

export default Footer;
