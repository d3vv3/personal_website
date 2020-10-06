// External libraries
import React from "react";

// Theme imports
import "../styles/style.scss";

// Local imports

// Assets
// Assets
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Projects() {
  return (
    <div>
      <div className="Projects">
        <h1>My projects</h1>
        <div className="row">
          <div className="card">
            <div className="content">
              <h3>My bike</h3>
              <p>Follow your bike needs with a beautiful flutter app.</p>
              <div className="row contained">
                <a href="https://github.com/d3vv3/my_bike">
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faLink} size="lg" />
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <h3>bitpass-cli</h3>
              <p>A command line tool to import Bitwarden to Pass (Linux).</p>
              <a href="https://github.com/d3vv3/bitpass">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <h3>EuriBot</h3>
              <p>A Telegram bot to access Eurielec's camera and others...</p>
              <a href="https://www.git.eurielec.etsit.upm.es">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <h3>TimeCapsule</h3>
              <p>
                @movo: <br /> A tool to visualize a vehicle location and status
                history.
              </p>
              <div className="row contained">
                <a href="">
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
                <a href="https://capsule.movo.me">
                  <FontAwesomeIcon icon={faLink} size="lg" />
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <h3>ChatStats</h3>
              <p>A tool to visualize Telegram and Whatsapp chat statistics.</p>
              <div className="row contained">
                <a href="https://github.com/d3vv3/chatstats">
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
                <a href="https://chatstats.devve.space">
                  <FontAwesomeIcon icon={faLink} size="lg" />
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <h3>MyPage</h3>
              <p>A website to show yourself and portfolio your work. </p>
              <div className="row contained">
                <a href="https://github.com/d3vv3/my_website">
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
                <a href="https://devve.space">
                  <FontAwesomeIcon icon={faLink} size="lg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
