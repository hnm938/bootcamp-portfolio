import { useEffect} from "react";
import { Footer } from "../components/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faStackOverflow } from "@fortawesome/free-brands-svg-icons";

import "./css/Contact.scss";

export default function Contact() {
  useEffect(() => {
    document.querySelectorAll(".form-input").forEach((formInput) => {
      formInput.addEventListener("mouseleave", (input) => {
        const errorMessage = input.target.nextElementSibling;
        
        if (input.target.value === "" && errorMessage) {
          errorMessage.innerHTML = "* This field is required";
          errorMessage.style.display = "block";
          
          setTimeout(() => {
            errorMessage.innerHTML = "";
            errorMessage.style.display = "none";
          }, 3000);
        } else {
          errorMessage.innerHTML = "";
          errorMessage.style.display = "none";
        }
      })
    })
  }, []);

  return (
    <div className="Contact">
      <header>
        <h1 className="page-title">Contact</h1>
      </header>
      <div className="page-body">
        {/* !!! Not sure if I need this to actually send an email */}
        {/* Or if its just required for show */}
        <div id="form-container">
          <form>
            <div className="form-group" style={{ gridRow: "1" }}>
              <label htmlFor="name">Name</label>
              <input
                className="form-input"
                type="text"
                id="name"
                name="name"
                required
              />
              <p className="error-message" style={{ margin: "0.5rem 0 0 0" }}></p>
            </div>

            <div className="form-group" style={{ gridRow: "2" }}>
              <label htmlFor="email">Email</label>
              <input
                className="form-input"
                type="email"
                id="email"
                name="email"
                onInput={(input) => {
                  const errorMessage = input.target.nextElementSibling;
                  errorMessage.innerHTML = "Please enter a valid email";
                  errorMessage.style.display = "block";
                }}
                required
              />
              <p className="error-message" style={{ margin: "0.5rem 0 0 0" }}></p>
            </div>

            <div className="form-group" style={{ gridRow: "3" }}>
              <label htmlFor="message">Message</label>
              <textarea
                className="form-input"
                id="message"
                name="message"
                required
              />
              <p className="error-message" style={{ margin: "0.5rem 0 0 0" }}></p>
            </div>
            <button
              type="submit"
              style={{ gridRow: "4", gridColumn: "1 / span 2" }}
            >
              Submit
            </button>
          </form>
        </div>

        <h1 style={{ gridRow: "2", gridColumn: "1 / span 3" }}>My Links</h1>
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
          url="https://www.linkedin.com/in/abe-hodos-212985270/"
          style={{ gridRow: "4", gridColumn: "2 / span 2" }}
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </LinkButton>
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