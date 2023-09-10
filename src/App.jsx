import { Particle }  from "./components/Particle";
import { CustomCursor } from "./components/CustomCursor";
import { Navigator } from "./components/Navigator";
import { Navbar } from "./components/Navbar";

import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import "./App.scss"
import "./assets/global.scss";

function App() {
  return (
    <div className="App">
      <div id="particle-container">
        <Particle />
      </div>
      <Navbar />
      <Navigator />
      <CustomCursor />

      <Home />

      <div id="home-portfolio-splitter">
        <FontAwesomeIcon icon={faChevronDown} />
      </div>

      <Portfolio />
    </div>
  );
}

export default App;
