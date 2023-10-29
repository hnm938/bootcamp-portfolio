// Using memo to optimize all my components with no prop or state changes
import { Helmet } from "react-helmet";
import React, { memo, Suspense, useEffect, useState } from "react";

import { Project } from "../components/Project";
import { Footer } from "../components/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

import "./css/Portfolio.scss";

import Projects from "./projectsDB.json";

function Portfolio() {
  return (
    <div className="Portfolio">
      <Helmet>
        <title>Portfolio || Projects</title>
      </Helmet>
      <header>
        <h1 className="page-title">my projects</h1>
      </header>
      <div id="portfolio-splitter">
        <FontAwesomeIcon icon={faSortDown} />
        <FontAwesomeIcon icon={faSortDown} />
        <FontAwesomeIcon icon={faSortDown} />
        <FontAwesomeIcon icon={faSortDown} />
        <FontAwesomeIcon icon={faSortDown} />
        <FontAwesomeIcon icon={faSortDown} />
        <FontAwesomeIcon icon={faSortDown} />
      </div>
      <div className="page-body">
        <div id="project-grid">
          {Projects.map((project) => (
            <Suspense fallback={<div>Loading...</div>}>
              <Project
                title={project.title}
                imageSrc={project.thumbnail}
                description={project.description.join("\n")}
                links={
                  project.links.map((link) => (
                    <div className="project--links-buttons">
                      <a href={link.link}>
                        <button>{link.title}</button>
                      </a>
                    </div>
                  ))
                }
              />
            </Suspense>
          ))}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export const GitHubButton = (props) => {
  return (
    <button
      onClick={() => {window.open(`https://www.github.com/hnm938/${props.projectName}`);}}
    >GitHub</button>
  );
}

export const WebsiteButton = (props) => {
  return (
    <button
      onClick={() => {window.open(`${props.url}`);}}
    >Website</button>
  );
}

export default memo(Portfolio);
