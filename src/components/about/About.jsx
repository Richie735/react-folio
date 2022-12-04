import React from "react";
import Me from "../../assets/me-about.jpeg";
import "./about.css";

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="numbered-heading-odd"><span>01.</span> About Me</h2>
      <div className="about_container container grid">
        <img src={Me} alt="" className="about_img" />
        <div className="about_content">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam animi aut dolorum libero, aspernatur eos at vitae. Ipsa voluptatum quod unde ut minima recusandae iure facere est, veniam repellat cum?</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi cupiditate sequi quidem ullam. Mollitia corporis, eius hic similique molestiae rem sequi quidem blanditiis iste officia, incidunt accusamus expedita nemo fugit!</p>
        </div>
      </div>
    </section>
  );
};

export default About;
