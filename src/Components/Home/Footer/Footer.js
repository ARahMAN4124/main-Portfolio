import React from "react";
import "./Footer.css";
import logo from "../../../Images/MY-LOGO.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer mine-container">
      <div className=" d-flex justify-content-between flex-wrap align-items-center">
        <div>
          <a href="">
            <img
              src={logo}
              className="img-fluid"
              style={{ width: "50px" }}
              alt=""
            />
          </a>
        </div>
        <div>
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
        <div>
          <p className="text-secondary ">
            Copyright © 2021{" "}
            <a
              className="text-decoration-none"
              style={{ color: " #ff9100" }}
              href=""
            >
              Abdur Rahman
            </a>
            <br />
            All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
