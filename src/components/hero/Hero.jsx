import React from "react";
import Me from "../../assets/me.png";
import Mail from "../header/Mail";
import Socicals from "../header/Social";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <header>
        <div className="container header_container">
          <h5>Hello I´m</h5>
          <h1>Richie</h1>
          <h5 className="text-light">Software Engineer</h5>

          <div className="me">
            <img src={Me} alt="me" />
          </div>

          <div className="cta">
            <a href="#" className="btn">
              Cv
            </a>
            <a href="#" className="btn btn-primary">
              Let´s Talk
            </a>
          </div>
        </div>
      </header>
      <Socicals />
      <Mail />
    </>
  );
};

export default Hero;
