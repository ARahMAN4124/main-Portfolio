import React from "react";

const ProjectCard = ({ project, handleProject }) => {
  return (
    <div className="col-md-4  mt-5">
      <div
        className="card singleProject"
        onClick={() => handleProject(project)}
      >
        <img src={project.img} className="img-fluid" alt="" />
      </div>
    </div>
  );
};

export default ProjectCard;
