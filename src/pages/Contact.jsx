import "./css/Contact.scss";

import { Footer } from "../components/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <div className="Contact">
      <header>
        <h1 className="page-title">Contact</h1>
      </header>
      <div className="page-body">
        <LinkButton
          url="mailto:abrahamhodos@gmail.com?subject=I want to hire you!"
          style={{ gridRow: "1", gridColumn: "1 / span 2" }}
        >
          <FontAwesomeIcon icon={faEnvelope} />  Email
        </LinkButton>
        <LinkButton
          url="https://www.linkedin.com/in/abe-hodos-212985270/"
          style={{ gridRow: "1", gridColumn: "3" }}
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </LinkButton>

        <h1 style={{ gridRow: "2", gridColumn: "1 / span 3" }}>Social Links</h1>
        <LinkButton
          url="https://github.com/hnm938"
          style={{ gridRow: "3", gridColumn: "1 / span 3" }}
        >
          <FontAwesomeIcon icon={faGithub} />  GitHub
        </LinkButton>
        <LinkButton
          url="https://stackoverflow.com/users/15078572/hnm938"
          style={{ gridRow: "4", gridColumn: "1" }}
        >
          <FontAwesomeIcon icon={faStackOverflow} />
        </LinkButton>
        <LinkButton
          url="https://github.com/hnm938"
          style={{
            gridRow: "4",
            gridColumn: "2 / span 2",
            borderColor: "var(--primary-color-3-3)",
            backgroundColor: "var(--primary-color-3-3)",
          }}
        ></LinkButton>
      </div>
      <Footer />
    </div>
  );
}

export const LinkButton = (props) => {
  return (
    <button
      style={props.style}
      onClick={() => {
        window.open(props.url);
      }}
    >
      {props.children}
    </button>
  );
}