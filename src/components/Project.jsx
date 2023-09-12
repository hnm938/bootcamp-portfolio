import React, { memo } from "react";

import "./css/Project.scss";

export const Project = memo((props) => {
  return (
    <div className="portfolio-project">
      <h1 className="project--title">{props.title}</h1>
      <hr />
      {props.imageSrc && (
        <div className="project--thumbnail">
          <img
            src={props.imageSrc}
            alt="Project Thumbnail"
          />
        </div>
      )}
      <p className="project--description">{props.description}</p>
      <div className="project--links">
        <h3>Links:</h3>
        {props.links}
      </div>
    </div>
  );
});