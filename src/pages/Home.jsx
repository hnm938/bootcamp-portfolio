// Using memo to optimize all my components with no prop or state changes
import React, { memo } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import "./css/Home.scss";

function Home() {
  return (
    <div className="Home">
      <header>
        <div id="title-container">
          <h1>Abe Hodos</h1>
          <h1>Abe Hodos</h1>
          <h1>Abe Hodos</h1>
          <h1>Abe Hodos</h1>
          <div id="subtitle-container">
            <div>
              <h2>Welcome</h2>
              <h2>to</h2>
              <h2>my</h2>
              <h2>Portfolio</h2>
            </div>
            <div>
              <h2>Back End</h2>
              <h2>Font End</h2>
              <h2>UI/UX</h2>
            </div>
          </div>
        </div>
      </header>
      <div id="social-links">
        <button
          className="btn"
          onClick={() => {
            window.open("https://www.linkedin.com/in/abe-hodos-212985270/");
          }}
        >
          <FontAwesomeIcon icon={faLinkedinIn} />  LinkedIn
        </button>
        <button
          className="btn"
          onClick={() => {
            window.open("https://www.github.com/hnm938");
          }}
        >
          <FontAwesomeIcon icon={faGithubAlt} />  GitHub
        </button>
        <button
          className="btn"
          onClick={() => {
            window.open(
              "mailto:abrahamhodos@gmail.com?subject=I want to hire you!"
            );
          }}
        >
          <FontAwesomeIcon icon={faEnvelope} />  Contact
        </button>
      </div>
    </div>
  );
}

export default memo(Home);
