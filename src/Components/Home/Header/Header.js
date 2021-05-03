import React from "react";
import "./Header.css";
import headerImg from "../../../Images/hero-img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import MyPDF from "../../../Images/Abdur-Rahman-Resume PSD final Version.pdf";
import Typical from "react-typical";

const Header = () => {
  return (
    <div className="Header">
      <div className="row header-flex mine-container d-flex align-items-center justify-content-center">
        <div className="col-md-6 col-sm-12">
          <div className="hello-word">
            <h1>
              <small>Hello, I’m</small>
              <br />
              <span className="main-name">ABDUR RAHMAN</span>
            </h1>
            <Typical
              steps={[
                "Font-end Developer",
                3000,
                "Web Designer",
                3000,
                "Wordpress Expart",
                3000,
                "Learner",
                3000,
              ]}
              loop={Infinity}
              className="typeAnimationText"
              wrapper="p"
            />
            <div className="mt-4 downloadCv">
              <a
                download="My_File.pdf"
                href={MyPDF}
                className="main-btn  text-decoration-none"
              >
                Download CV <FontAwesomeIcon icon={faDownload} />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 d-flex justify-content-center mt-5 ">
          <img src={headerImg} className="img-fluid header-img" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
