import React, { useState } from "react";
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

                <div></div>
              </div>
            </div>
            <div className="col-md-4 my-2">
              <div className="projectCard">
                <a href="">
                  <img src={img2} className="img-fluid rounded" alt="" />
                </a>
              </div>
            </div>
            <div className="col-md-4 my-2">
              <div className="projectCard">
                <a href="">
                  <img src={img3} className="img-fluid rounded" alt="" />
                </a>
              </div>
            </div>
            <div className="col-md-4 my-2">
              <div className="projectCard">
                <a href="">
                  <img src={img4} className="img-fluid rounded" alt="" />
                </a>
              </div>
            </div>
            <div className="col-md-4 my-2">
              <div className="projectCard">
                <img src={img5} className="img-fluid rounded" alt="" />
                <div className="">
                  <a
                    href="https://arahman4124.github.io/bootstrap-template/"
                    target="_blank"
                  >
                    link
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-2">
              <div className="projectCard">
                <a
                  href="https://arahman4124.github.io/bootstrap-template/"
                  target="_blank"
                >
                  <img src={img7} className="img-fluid rounded" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
