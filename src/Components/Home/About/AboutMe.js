import React from "react";
import "./AboutMe.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import SkillBar from "react-skillbars";

const AboutMe = () => {
  const SKILLS = [
    {
      type: "HTML",
      level: 90,
      color: {
        bar: "#ff9100",
        title: {
          background: "rgb(82,77,212)",
          text: "white",
        },
      },
    },
    {
      type: "CSS",
      level: 80,
      color: {
        bar: "#ff9100",
        title: {
          background: "rgb(82,77,212)",
          text: "white",
        },
      },
    },
    {
      type: "JVASCRIPT",
      level: 80,
      color: {
        bar: "#ff9100",
        title: {
          background: "rgb(82,77,212)",
          text: "white",
        },
      },
    },
    {
      type: "REACT",
      level: 80,
      color: {
        bar: "#ff9100",
        title: {
          background: "rgb(82,77,212)",
          text: "white",
        },
      },
    },
    {
      type: "MongoDB",
      level: 95,
      color: {
        bar: "#ff9100",
        title: {
          background: "rgb(82,77,212)",
          text: "white",
        },
      },
    },
  ];
  return (
    <section className="AboutMe">
      <div className="row">
        <div className="col-md-6 about-left">
          <div className="about-area">
            <div className="about-title">
              <h2>ABOUT ME</h2>
              <hr />
            </div>
            <h1>I'm a Front-end Web Developer.</h1>
            <p>
              I’m Md. Abdur Rahman. A professional Font-end Web Developer. I am
              confident about my skill and I can complete any kind of Javascript
              React, Node.js project.My focus is to be a professional full
              Stack.
            </p>
            <div className="social-link">
              <a
                href="https://www.facebook.com/abdur.rahman4124/"
                target="_blank"
              >
                <FontAwesomeIcon className="social-icon" icon={faFacebook} />
              </a>
              <a
                href="https://www.linkedin.com/in/abdur-rahman-21907a211/"
                target="_blank"
              >
                <FontAwesomeIcon className="social-icon" icon={faLinkedin} />
              </a>
              <a href="https://github.com/ARahMAN4124" target="_blank">
                <FontAwesomeIcon className="social-icon" icon={faGithub} />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 about-right">
          <div className="skill-area">
            <div className="skill-title">
              <h2 className="">SKILLS</h2>
              <hr />
            </div>
            <div className="mt-5">
              <SkillBar
                skills={SKILLS}
                height={"1.5em"}
                animationDelay={2000}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
