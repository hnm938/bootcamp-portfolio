import React, { memo } from "react";

import "./css/Project.scss";

export const Project = memo((props) => {
  console.log(props.description);
  return (
    <div className="portfolio-project">
      <div className="project--title">
        <h1>{props.title}</h1>
        <hr />
      </div>
      {props.imageSrc && (
        <div className="project--thumbnail">
          <img src={props.imageSrc} alt="Project Thumbnail" />
        </div>
      )}
      <div>
        <pre className="project--description">{props.description}</pre>
        <div className="project--links">
          <h3>Links:</h3>
          <div>{props.links}</div>
        </div>
      </div>
      <button
        className="btn"
        onClick={(e) => {
          if (!e.target.parentElement.classList.contains("opened")) {
            e.target.innerHTML = "Show Less";
          } else {
            e.target.innerHTML = "Show More";
          }
          e.target.parentElement.classList.toggle("opened");
        }}
      >
        Show More
      </button>
    </div>
  );
});