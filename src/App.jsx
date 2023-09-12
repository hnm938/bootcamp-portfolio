import React, { useEffect, useState } from "react";

import { Particle }  from "./components/Particle";
import { CustomCursor } from "./components/CustomCursor";
import { Navigator } from "./components/Navigator";
import { Navbar } from "./components/Navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

import HeaderVector from "./assets/images/header-vector.svg";

import "./App.scss";
import "./assets/global.scss";

// !! IMPORTANT
// Because I am using tsparticles, re-draws are constant
// Using lazy loading I can optimize my react components
const Home = React.lazy(() => import("./pages/Home"));
const Portfolio = React.lazy(() => import("./pages/Portfolio"));
const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));

function App() {
  const [activeComponent, setActiveComponent] = useState("portfolio");
  
  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "portfolio":
        return <Portfolio />;
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      default:
        return <Portfolio />;
    }
  };

  return (
    <div className="App">
      <div id="particle-container">
        <Particle />
      </div>
      <Navbar setActiveComponent={setActiveComponent} />
      <Navigator />
      <CustomCursor />

      <React.Suspense fallback={<div>Loading...</div>}>
        <Home />
      </React.Suspense>

      <div id="home-portfolio-splitter">
        <img src={HeaderVector} alt="" />
        <div>
          <FontAwesomeIcon icon={faAnglesDown} />
          <FontAwesomeIcon icon={faAnglesDown} />
          <FontAwesomeIcon icon={faAnglesDown} />
          <FontAwesomeIcon icon={faAnglesDown} />
        </div>
      </div>

      <React.Suspense fallback={<div>Loading...</div>}>
        {renderActiveComponent()}
      </React.Suspense>
    </div>
  );
}

export default App;
