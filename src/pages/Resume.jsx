import React from "react";
import Me from "../assets/me-about.jpeg";
import "./resume.css";

const Resume = () => {
  return (
    <div className="cv">
      <div className="cv-profile">
        <h1>Ricardo Pereira</h1>
        <p><em>Software Engineer</em></p>
        <img src={Me} alt="" />
      </div>

      <div className="cv-contact">
        <h2>Contact</h2>
        <ul>
          <li><a href="">SITE</a></li>
          <li>richierichie@gmail.com</li>
          <li><a href="">937676252</a></li>
          <li>morada</li>
        </ul>
        <h2>Social</h2>
        <ul>
          <li>Linkdin</li>
          <li>GitHub</li>
          <li>Instagram</li>
        </ul>
      </div>

      <div className="r-objectives">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut enim
        architecto consequatur nemo error incidunt nobis vero, sit quod tempore
        in, magnam optio libero velit vel harum assumenda doloribus veritatis.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab nesciunt
        ut, fugiat cumque doloremque sit quos a esse perspiciatis exercitationem
        delectus mollitia officiis architecto, ex minima placeat illo. Sint,
        eligendi!
      </div>

      <div className="skills">
        <h2>Capabilities/Skills</h2>
        <ul>
          <li>
            <h3>Professional</h3>
            <ul>
              <li>Lorem.</li>
              <li>Minus.</li>
              <li>Porro?</li>
              <li>Tempora.</li>
              <li>Omnis?</li>
              <li>Accusamus!</li>
              <li>Earum!</li>
              <li>Omnis?</li>
            </ul>
          </li>
          <li>
            <h3>Personal</h3>
            <ul>
              <li>Lorem.</li>
              <li>Iste?</li>
              <li>Repellendus.</li>
              <li>Laboriosam.</li>
              <li>Aperiam?</li>
              <li>Similique?</li>
              <li>Sint.</li>
              <li>Labore?</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="education">
        <h2>Education</h2>
        <ul className="timeline">
          <li className="event">
            <span className="duration">2005-2006</span>
            <h3>Degree/Major</h3>
            <p>III Hybwerwqe</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              eligendi repellat necessitatibus error sed nemo dignissimos eius
              aliquam! Ad consequatur cupiditate atque doloribus culpa expedita
              eveniet, officia velit nulla quidem!
            </p>
            <p>CGPA: 8.5</p>
          </li>
          <li className="event">
            <span className="duration">2007-2010</span>
            <h3>Degree/Major</h3>
            <p>III Hybwerwqe</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              eligendi repellat necessitatibus error sed nemo dignissimos eius
              aliquam! Ad consequatur cupiditate atque doloribus culpa expedita
              eveniet, officia velit nulla quidem!
            </p>
            <p>CGPA: 8.5</p>
          </li>
        </ul>
      </div>

      <div className="experience">
        <ul className="timeline">
          <span className="event">20xx-20xx</span>
          <h3>Job Position</h3>
          <p>Location</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias,
            reprehenderit tempore voluptates eligendi asperiores soluta
            laboriosam nihil fugit atque. Fugiat quidem commodi amet repellendus
            voluptates in sed laudantium. Ratione, suscipit. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Adipisci sint numquam
            incidunt quas temporibus quae possimus praesentium quaerat
            laudantium labore, asperiores at? Nostrum, ea inventore quis esse
            quod sunt excepturi!
          </p>
        </ul>
      </div>
    </div>
  );
};

export default Resume;
