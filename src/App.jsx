import { Particle }  from "./components/Particle";
import { CustomCursor } from "./components/CustomCursor";
import { Navbar } from "./components/Navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import "./App.scss"
import "./assets/global.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CustomCursor />

      <div id="particle-container">
        <Particle />
      </div>
      <header>
        <div id="title-container">
          <h1>Abe Hodos</h1>
          <h1>Abe Hodos</h1>
          <h1>Abe Hodos</h1>
          <h1>Abe Hodos</h1>
          <h2>Welcome</h2>
          <h2>to</h2>
          <h2>my</h2>
          <h2>Portfolio ...</h2>
        </div>
        <div id="header--social-links">
          <button className="btn">Linkedin</button>
          <button className="btn">GitHub</button>
          <button className="btn">Email</button>
        </div>
        <button id="header-scroll">
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
      </header>
    </div>
  );
}

export default App;
