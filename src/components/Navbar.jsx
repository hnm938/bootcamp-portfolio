import React, { memo } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBook,
  faCircleQuestion,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import "./css/Navbar.scss";

export const Navbar = ({ setActiveComponent }) => {
  return (
    <div className="Navbar">
      <button
        className="btn"
        onClick={() => {
          document
            .querySelector(".Home")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <FontAwesomeIcon icon={faHome} />
      </button>
      <button
        className="btn"
        onClick={() => {
          setActiveComponent("portfolio");
          window.scrollTo({
            top: 960,
            behavior: "smooth",
          });
        }}
      >
        <FontAwesomeIcon icon={faBook} />
      </button>
      <button
        className="btn"
        onClick={() => {
          setActiveComponent("about");
          window.scrollTo({
            top: 960,
            behavior: "smooth",
          });
        }}
      >
        <FontAwesomeIcon icon={faCircleQuestion} />
      </button>
      <button
        className="btn"
        onClick={() => {
          setActiveComponent("contact");
          window.scrollTo({
            top: 960,
            behavior: "smooth",
          });
        }}
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </button>
    </div>
  );
};
