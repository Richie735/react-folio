import React from "react";
import Me from "../../assets/me-about.jpeg";
import "./about.css";

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="numbered-heading-odd">
        <span>01.</span> About Me
      </h2>

      <div className="about_container container">
        <div className="about_me">
          <img src={Me} alt="" className="about_img" />
        </div>

        <div className="about_content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            voluptatibus a dignissimos blanditiis nam nostrum tenetur et
            molestiae neque saepe asperiores debitis repellendus atque ullam
            modi explicabo quos dolore eligendi.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            omnis tenetur culpa nostrum tempore cupiditate, modi iusto
            provident, aut debitis est. Nulla quibusdam praesentium, rerum
            eveniet beatae officia quisquam esse!
          </p>

          <a href="#CV" className="btn">
            Check my CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
