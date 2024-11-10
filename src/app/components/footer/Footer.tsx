import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title" data-aos="zoom-in">Muhammad Kashif</h1>

        <ul className="footer_list" data-aos="fade-down">
          <li>
            <a href="#about" className="footer_link" >
              About
            </a>
          </li>
          <li>
            <a href="#resume" className="footer_link">
              Resume
            </a>
          </li>
          <li>
            <a href="#projects" className="footer_link">
              Projects
            </a>
          </li>
        </ul>


        <span className="footer_copy">
          &#169; Muhammad Kashif. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
