import React from "react";
import "./Header.css";
import headerImg from "../../../Images/hero-img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import MyPDF from "../../../Images/Abdur-Rahman-Resume PSD final Version.pdf";

const Header = () => {
  return (
    <div className="Header">
      <div className="row header-flex mine-container d-flex align-items-center justify-content-center">
        <div className="col">
          <h1>
            Hello, I’m
            <br />
            <span className="main-name">ABDUR RAHMAN</span>
          </h1>
          <div className="mt-3 downloadCv">
            <a
              download="My_File.pdf"
              href={MyPDF}
              className="main-btn  text-decoration-none"
            >
              Download CV <FontAwesomeIcon icon={faDownload} />
            </a>
          </div>
        </div>
        <div className="col">
          <img src={headerImg} className="img-fluid header-img" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
