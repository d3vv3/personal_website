// External libraries
import React from "react";

// Theme imports
import "../../styles/style.scss";

// Assets
import profilePicture from "../../assets/profile_picture.png";

function Me(props) {
  return (
    <div className="introduction-container">
      <img className="profile-picture" src={profilePicture} alt="This is me!" />

      <h1 className="my-name">Jaime Conde</h1>

      <p className="my-description">
        Telecommunication Engineering student while self-learning new
        technologies through research and development.
      </p>
    </div>
  );
}

export default Me;
