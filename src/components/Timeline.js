// External libraries
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// Theme imports
import "../styles/style.scss";

// Local imports

// Assets
// Assets
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Timeline(props) {
  return (
    <div>
      <div className="Timeline">
        <h1> My recient experiences: </h1>

        <VerticalTimeline layout="2-columns">
          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2021"
            dateClassName="dates"
            dateStyle={{ color: "white" }}
            iconStyle={{
              background: "black",
              color: "#fff",
              paddingRight: 36,
            }}
            icon={<FontAwesomeIcon icon={faLaptop} size="3x" />}
          >
            <ul>
              <li> Ansible </li>
              <li> Kubernetes </li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2020"
            dateClassName="dates"
            dateStyle={{ color: "white" }}
            iconStyle={{
              background: "black",
              color: "#fff",
              paddingRight: 36,
            }}
            icon={<FontAwesomeIcon icon={faLaptop} size="3x" />}
          >
            <ul>
              <li> Reactjs </li>
              <li> Flutter </li>
              <li> Dart </li>
              <li> Full-stack developer </li>
              <li> LaTeX </li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2019"
            dateClassName="dates"
            dateStyle={{ color: "white" }}
            iconStyle={{
              background: "black",
              color: "#fff",
              paddingRight: 36,
            }}
            icon={<FontAwesomeIcon icon={faLaptop} size="3x" />}
          >
            <ul>
              <li> Docker </li>
              <li> Nodejs </li>
              <li> Google Cloud </li>
              <li> Amazon Web Services </li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2018"
            dateClassName="dates"
            dateStyle={{ color: "white" }}
            iconStyle={{
              background: "black",
              color: "#fff",
              paddingRight: 36,
            }}
            icon={<FontAwesomeIcon icon={faLaptop} size="3x" />}
          >
            <ul>
              <li> Python </li>
              <li> SQL </li>
              <li> OpenCV </li>
              <li> GNU/Linux </li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
