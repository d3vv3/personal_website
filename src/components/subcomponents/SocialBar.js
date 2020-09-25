// External libraries
import React from "react";

// Theme imports
import "../../styles/style.scss";

// Assets
import {
  faTwitch,
  faGithub,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SocialBar(props) {
  return (
    <div className="social-bar">
      <a href="https://www.linkedin.com/in/jaimecondesegovia">
        <FontAwesomeIcon icon={faLinkedin} size="lg" />
      </a>
      <a href="https://github.com/d3vv3">
        <FontAwesomeIcon icon={faGithub} size="lg" />
      </a>
      <a href="https://twitter.com/jaimeconds">
        <FontAwesomeIcon icon={faTwitter} size="lg" />
      </a>
      <a href="https://www.instagram.com/jaimeconds">
        <FontAwesomeIcon icon={faInstagram} size="lg" />
      </a>
      <a href="https://www.twitch.tv/d3vv3_">
        <FontAwesomeIcon icon={faTwitch} size="lg" />
      </a>
      <a href="mailto:jaimeconde@airmail.cc" className="compensate">
        <FontAwesomeIcon icon={faEnvelope} size="lg" />
      </a>
    </div>
  );
}

export default SocialBar;
