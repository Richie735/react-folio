import React from "react";
import Me from "../../assets/me.png";
import "./header.css";
import HSocicals from "./HSocicals";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I´m</h5>
        <h1>Richie</h1>
        <h5 className="text-light">Software Engineer</h5>

        <HSocicals />

        <div className="me">
          <img src={Me} alt="me" />
        </div>
      </div>
    </header>
  );
};

export default Header;
