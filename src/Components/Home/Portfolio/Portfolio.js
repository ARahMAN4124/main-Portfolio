import React, { useState } from "react";
import "./Portfolio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeEurope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ProjectCard from "./ProjectCard";
import img1 from "../../../Images/1e92cd41-5a26-496e-b31b-0e52a014aba8.png";
import img2 from "../../../Images/b6bb72d9-1da3-4333-a581-c6310e2eea8f.png";
import img3 from "../../../Images/32856145-899e-48c8-adbe-47c0a0292333.png";
import img4 from "../../../Images/18ae366c-94a6-4365-bf98-3a88cf34cef5.png";
import img5 from "../../../Images/08c3e539-5313-4f10-a458-e611c92a8f87.png";

const Portfolio = () => {
  const project = [
    {
      img: img1,
      LiveLink: "https://black-and-white-salon.web.app/",
      title: "Man’s Salon",
      gitLink: "https://github.com/ARahMAN4124/man-salon-clinet",
      feature: {
        feature1: "-Login Authentication (Private Route)",
        feature2: "- Admin Panel(Add Service, Delete Service,Change Status)",
        feature3:
          "- User Dashboard(Add Review, Order Parcel with Payment Gateway)",
      },
      tool: {
        technology1: "React.JS",
        technology2: "MongoDB",
        technology3: "Bootstrap",
        technology4: "Express.js",
      },
    },
    {
      img: img2,
      LiveLink: "https://food-farms.web.app/",
      title: " Food-Farms",
      gitLink: "https://github.com/ARahMAN4124/food-farms-client",
      feature: {
        feature1: "- Login Authentication (Private Route)",
        feature2: "- Admin Panel (Add Product, Delete Product)",
        feature3: "- User Dashboard (User Order List )",
      },
      tool: {
        technology1: "React.JS",
        technology2: "MongoDB",
        technology3: "Bootstrap",
        technology4: "Express",
      },
    },
    {
      img: img3,
      LiveLink: "https://black-and-white-salon.web.app/",
      title: "Other Salon",
      LiveLink: "https://black-and-white-salon.web.app/",
      gitLink: "https://github.com/ARahMAN4124/man-salon-clinet",
      feature: {
        feature1: "Full Responsive",
        feature2: "",
      },
      tool: {
        technology1: "HTML5",
        technology3: "Bootstrap",
        technology4: "CSS3",
      },
    },
    {
      img: img4,
      LiveLink: "https://black-and-white-salon.web.app/",
      title: "Man’s Salon",
      LiveLink: "https://black-and-white-salon.web.app/",
      gitLink: "https://github.com/ARahMAN4124/man-salon-clinet",
      feature: {
        feature1: "-Login Authentication (Private Route)",
        feature2: "- Admin Panel(Add Service, Delete Service,Change Status)",
        feature3:
          "- User Dashboard(Add Review, Order Parcel with Payment Gateway)",
      },
      tool: {
        technology1: "React.JS",
        technology2: "MongoDB",
        technology3: "Bootstrap",
        technology4: "Express.js",
      },
    },
    {
      img: img5,
      LiveLink: "https://black-and-white-salon.web.app/",
      title: "Man’s Salon",
      LiveLink: "https://black-and-white-salon.web.app/",
      gitLink: "https://github.com/ARahMAN4124/man-salon-clinet",
      feature: {
        feature1: "-Login Authentication (Private Route)",
        feature2: "- Admin Panel(Add Service, Delete Service,Change Status)",
        feature3:
          "- User Dashboard(Add Review, Order Parcel with Payment Gateway)",
      },
      tool: {
        technology1: "React.JS",
        technology2: "MongoDB",
        technology3: "Bootstrap",
        technology4: "Express.js",
      },
    },
  ];
  const [teamMember, setTeamMember] = useState(project[0]);
  const handleProject = (project) => {
    console.log(project);
    setTeamMember(project);
  };
  const feature = Object.values(teamMember.feature);
  const tool = Object.values(teamMember.tool);
  console.log(teamMember.LiveLink);
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
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
{
  /* <div className="row  projects">
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
          </div> */
}
{
  /* <section className="Portfolio ">
      <div className="row  m-0 Portfolio-row">
        <div className="col-md-2 p-0  portfolio-title d-flex align-items-center">
          <h2>PORTFOLIO</h2>
        </div>
        <div className="col-md-10">
          <div className="row">
            <div className="col-md-8 project-details">
              <div className="row">
                <div className="col-md-6">
                  <div className="project-details-img">
                    <img src={teamMember.img} className="img-fluid" alt="" />
                  </div>
                </div>
                <div className="col-md-6"></div>
              </div>

              <div className="project-details-text">
                <h2>{teamMember.title}</h2>
                <div className="project-subTitle">
                  <p>= Project Features</p>
                </div>
                <ul className="list-group">
                  {feature.map((feature, index) => (
                    <li className="list-group-item list-group-item-action">
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="row mt-3">
                  {tool.map((feature, index) => (
                    <div className="col-4 mb-3">
                      <div className="project-tool">
                        <h6>{feature}</h6>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="row mt-4">
                  <div className="col-6 mb-3">
                    <a
                      href={teamMember.LiveLink}
                      target="_blank"
                      className="codeLink text-decoration-none"
                    >
                      Demo <FontAwesomeIcon icon={faGlobeEurope} />
                    </a>
                  </div>
                  <div className="col-6 mb-3">
                    <a
                      href={teamMember.gitLink}
                      target="_blank"
                      className="codeLink text-decoration-none"
                    >
                      Github <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 project-click ">
              <div>
                <h3>PROJECT'S</h3>
              </div>
              <div className="row projectCard">
                {project.map((project, index) => (
                  <ProjectCard
                    project={project}
                    handleProject={handleProject}
                    key={index + 1}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */
}
