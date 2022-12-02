import React from "react";
import "./social.css";

import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

const Social = () => {
  return (
    <div className="social">
      <ul>
        <li>
          <a href="#" target="_blanq">
            <FiGithub className="icon" />
          </a>
        </li>
        <li>
          <a href="#" target="_blanq">
            <FiLinkedin className="icon" />
          </a>
        </li>
        <li>
          <a href="#" target="_blanq">
            <FiInstagram className="icon" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
