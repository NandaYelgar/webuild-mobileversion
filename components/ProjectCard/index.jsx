import React from "react";
import "./ProjectCard.css";

function ProjectCard(props) {
  const { rectangle62, text12, surname, className } = props;

  return (
    <div className={`project-card-3 ${className || ""}`}>
      <img className="rectangle-62" src={rectangle62} />
      <div className="group-99">
        <div className="text-7 valign-text-middle typographyheadlineh4-extrabold-24">{text12}</div>
        <p className="surname typographybodycaption-14-semi-bold">{surname}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
