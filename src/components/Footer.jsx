import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";

import "./css/Footer.scss";

export const Footer = () => {
  return (
    <footer>
      <h3>See my other projects...</h3>
      <button
        onClick={() => {
          window.open("https://www.github.com/hnm938");
        }}
      >
        <FontAwesomeIcon icon={faGithubAlt} />
      </button>
    </footer>
  );
}