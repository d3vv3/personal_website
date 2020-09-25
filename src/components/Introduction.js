// External libraries
import React from "react";

// Theme imports
import "../styles/style.scss";

// Local imports
import Me from "./subcomponents/Me";
import SocialBar from "./subcomponents/SocialBar";

// Assets
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Introduction(props) {
  return (
    <div>
      <div className="Introduction">
        <Me />
        <SocialBar />
        <FontAwesomeIcon icon={faAngleDown} size="2x" />
      </div>
    </div>
  );
}

export default Introduction;
