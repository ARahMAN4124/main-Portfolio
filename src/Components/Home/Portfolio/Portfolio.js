import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeEurope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Portfolio.css";
import img2 from "../../../Images/Project/Screenshot_1.jpg";
import img3 from "../../../Images/Project/Screenshot_2.jpg";
import img1 from "../../../Images/Project/Screenshot_3.jpg";
import img4 from "../../../Images/Project/Screenshot_4.jpg";
import img5 from "../../../Images/Project/Screenshot_5.jpg";
import img6 from "../../../Images/Project/Screenshot_6.jpg";
import img7 from "../../../Images/Project/Screenshot_7.jpg";

const Portfolio = () => {
  return (
    <section className="Portfolio ">
      <div className="row  m-0 Portfolio-row">
        <div className="col-md-2 p-0  portfolio-title d-flex align-items-center">
          <h2>PORTFOLIO</h2>
        </div>
        <div className="col-md-10">
          <div className="row  projects">
            <div className="col-md-4 my-2">
              <div className="projectCard">
                <a href="">
                  <img src={img1} className="img-fluid w-100" alt="" />
                </a>
                <span className="overlay"></span>
                <div className="Card-details">
                  <h2>Doctor Portal</h2>
                  <div className="tools">
                    <div>React Js</div>
                    <div>Node Js</div>
                    <div>express Js</div>
                    <div>mongodb</div>
                    <div>bootstrap</div>
                  </div>
                  <div className="links">
                    <a
                      href="https://github.com/ARahMAN4124/doctor-portal"
                      target="_blank"
                      className="codeLink"
                    >
                      {" "}
                      Code
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a
                      href="https://doctor-portal-d94cf.web.app/"
                      target="_blank"
                      className="siteLink"
                    >
                      {" "}
                      Site
                      <FontAwesomeIcon icon={faGlobeEurope} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-2">
              <div className="projectCard">
                <a href="">
                  <img src={img2} className="img-fluid rounded" alt="" />
                </a>
                <span className="overlay"></span>
                <div className="Card-details">
                  <h2>City Cab</h2>
                  <div className="tools">
                    <div>React Js</div>
                    <div>React Router</div>
                    <div>bootstrap</div>
                  </div>
                  <div className="links">
                    <a
                      href="https://github.com/ARahMAN4124"
                      target="_blank"
                      className="codeLink"
                    >
                      {" "}
                      Code
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a
                      href="https://city-cab-b3372.web.app/"
                      target="_blank"
                      className="siteLink"
                    >
                      {" "}
                      Site
                      <FontAwesomeIcon icon={faGlobeEurope} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-2">
              <div className="projectCard">
                <a href="">
                  <img src={img3} className="img-fluid rounded" alt="" />
                </a>
                <span className="overlay"></span>
                <div className="Card-details">
                  <h2>Man's Salon</h2>
                  <div className="tools">
                    <div>React Js</div>
                    <div>Node Js</div>
                    <div>express Js</div>
                    <div>mongodb</div>
                    <div>bootstrap</div>
                  </div>
                  <div className="links">
                    <a
                      href="https://github.com/ARahMAN4124/man-salon-clinet"
                      target="_blank"
                      className="codeLink"
                    >
                      {" "}
                      Code
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a
                      href="https://black-and-white-salon.web.app/"
                      target="_blank"
                      className="siteLink"
                    >
                      {" "}
                      Site
                      <FontAwesomeIcon icon={faGlobeEurope} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-2">
              <div className="projectCard">
                <a href="">
                  <img src={img4} className="img-fluid rounded" alt="" />
                </a>
                <span className="overlay"></span>
                <div className="Card-details">
                  <h2>Foods Farm</h2>
                  <div className="tools">
                    <div>React Js</div>
                    <div>Node Js</div>
                    <div>express Js</div>
                    <div>mongodb</div>
                    <div>bootstrap</div>
                  </div>
                  <div className="links">
                    <a
                      href="https://github.com/ARahMAN4124/food-farms-client"
                      target="_blank"
                      className="codeLink"
                    >
                      {" "}
                      Code
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a
                      href="https://food-farms.web.app//"
                      target="_blank"
                      className="siteLink"
                    >
                      {" "}
                      Site
                      <FontAwesomeIcon icon={faGlobeEurope} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-2">
              <div className="projectCard">
                <img src={img5} className="img-fluid rounded" alt="" />
                <span className="overlay"></span>
                <div className="Card-details">
                  <h2>Valos</h2>
                  <div className="tools">
                    <div>HTML</div>
                    <div>CSS</div>
                    <div>bootstrap</div>
                  </div>
                  <div className="links">
                    <a
                      href="https://github.com/ARahMAN4124/project-1"
                      target="_blank"
                      className="codeLink"
                    >
                      {" "}
                      Code
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a
                      href="https://arahman4124.github.io/project-1/"
                      target="_blank"
                      className="siteLink"
                    >
                      {" "}
                      Site
                      <FontAwesomeIcon icon={faGlobeEurope} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-2">
              <div className="projectCard">
                <img src={img7} className="img-fluid rounded" alt="" />
                <span className="overlay"></span>
                <div className="Card-details">
                  <h2>Bootstrap Template</h2>
                  <div className="tools">
                    <div>HTML</div>
                    <div>CSS</div>
                    <div>bootstrap</div>
                  </div>
                  <div className="links">
                    <a
                      href="https://github.com/ARahMAN4124/bootstrap-template"
                      target="_blank"
                      className="codeLink"
                    >
                      {" "}
                      Code
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a
                      href="https://arahman4124.github.io/bootstrap-template/"
                      target="_blank"
                      className="siteLink"
                    >
                      {" "}
                      Site
                      <FontAwesomeIcon icon={faGlobeEurope} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
