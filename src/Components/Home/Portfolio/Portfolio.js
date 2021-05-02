import React from "react";
import "./Portfolio.css";
import ProjectCard from "./ProjectCard";
import img1 from "../../../Images/1e92cd41-5a26-496e-b31b-0e52a014aba8.png";
import img2 from "../../../Images/b6bb72d9-1da3-4333-a581-c6310e2eea8f.png";
import img3 from "../../../Images/32856145-899e-48c8-adbe-47c0a0292333.png";
import img4 from "../../../Images/18ae366c-94a6-4365-bf98-3a88cf34cef5.png";
import img5 from "../../../Images/08c3e539-5313-4f10-a458-e611c92a8f87.png";

const Portfolio = () => {
  // const project = [
  //   {
  //     title: "lorem1111",
  //     feature: {
  //       feature1: "lksdf",
  //       feature2: "lksdf",
  //       feature3: "lksdf",
  //     },
  //     technology: {
  //       technology1: "lksdf",
  //       technology2: "lksdf",
  //     },
  //   },
  //   {
  //     title: "lorem2222",
  //     feature: {
  //       feature1: "lksdf",
  //       feature2: "lksdf",
  //       feature3: "lksdf",
  //     },
  //     technology: {
  //       technology1: "lksdf",
  //       technology2: "lksdf",
  //     },
  //   },
  //   {
  //     title: "lorem333",
  //     feature: {
  //       feature1: "lksdf",
  //       feature2: "lksdf",
  //       feature3: "lksdf",
  //     },
  //     technology: {
  //       technology1: "lksdf",
  //       technology2: "lksdf",
  //     },
  //   },
  // ];
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
                  <img src={img2} className="img-fluid" alt="" />
                </a>
              </div>
            </div>
            <div className="col-md-4 my-2">
              <div className="projectCard">
                <a href="">
                  <img src={img3} className="img-fluid" alt="" />
                </a>
              </div>
            </div>
            <div className="col-md-4 my-2">
              <div className="projectCard">
                <a href="">
                  {" "}
                  <img src={img4} className="img-fluid" alt="" />
                </a>
              </div>
            </div>
            <div className="col-md-4 my-2">
              <div className="projectCard">
                <a
                  href="https://arahman4124.github.io/bootstrap-template/"
                  target="_blank"
                >
                  <img src={img5} className="img-fluid" alt="" />
                </a>
              </div>
            </div>
          </div>

          {/* <div className="row w-100">
            <div className="col-md-8  project-details"></div>
            <div className="col-md-4 project-click ">
              <div>
                <h3>PROJECT</h3>
              </div>
              <div className="row projectCard">
                {project.map((project, index) => (
                  <ProjectCard project={project} key={index + 1} />
                ))}
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
