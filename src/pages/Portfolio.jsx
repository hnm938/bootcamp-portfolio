// Using memo to optimize all my components with no prop or state changes
import { Helmet } from "react-helmet";
import React, { memo, Suspense } from "react";

import { Project } from "../components/Project";
import { Footer } from "../components/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

import "./css/Portfolio.scss";

function Portfolio() {
  return (
    <div className="Portfolio">
      <Helmet>
        <title>Portfolio || Projects</title>
      </Helmet>
      <header>
        <h1 className="page-title">This is my work</h1>
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
          <Suspense fallback={<div>Loading...</div>}>
            <Project
              title="Cocktail Cabinet"
              imageSrc="https://user-images.githubusercontent.com/130527417/244220113-e5a73bde-66ae-43ed-8168-ee104aa63671.png"
              description={
                <p>
                  This project holds a special place in my journey through the
                  bootcamp—it's a personal favorite. It marked the beginning of
                  collaborative efforts within a group, and the result was
                  nothing short of outstanding.
                  <br />
                  <br />
                  At its core, the concept is elegantly simple: an app designed
                  to be your go-to source for all things cocktails and drinks.
                  It's your bartender's encyclopedia, offering step-by-step
                  recipes, ingredient lists, and fascinating tidbits about your
                  favorite libations. The Cocktail Cabinet takes it a step
                  further by also providing information on nearby bars, just in
                  case you're up for some exploration.
                  <br />
                  <br />I firmly believe in the app's potential. It's not just a
                  digital cocktail companion; it's a practical tool for those
                  planning a night out. Imagine it packed with features like
                  ride-hailing integration, real-time availability checks at
                  bars, and even intelligent dish recommendations to complement
                  your drink choice based on ingredients. With these
                  enhancements, it could transform into an indispensable,
                  user-friendly app that enhances your evening plans.
                </p>
              }
              links={
                <div className="project--links-buttons">
                  <WebsiteButton url="https://hnm938.github.io/cocktail-cabinet-bootcamp/" />
                  <GitHubButton projectName="cocktail-cabinet-bootcamp" />
                </div>
              }
            />
          </Suspense>

          <Suspense fallback={<div>Loading...</div>}>
            <Project
              title="Mode-de-Vie"
              imageSrc="https://user-images.githubusercontent.com/129299589/259270302-afbac0c8-a0cd-4454-8d6f-abd4907e9554.png"
              description={
                <p>
                  Mode-de-vie was the second project that introduced me to
                  teamwork dynamics, and it was all about setting ambitious
                  goals. Our objective was clear: develop a fully functional
                  social media app in just two weeks. As you can imagine, this
                  was an ambitious undertaking.
                  <br />
                  <br />
                  Despite the inevitable challenges that came with such a tight
                  timeline, I believe we rose to the occasion. This project
                  served as a valuable lesson for our team, highlighting the
                  importance of realistic goal-setting and thorough planning,
                  particularly during the whiteboarding phase of app
                  development.
                  <br />
                  <br />
                  It was a journey filled with learning experiences and growth
                  opportunities, proving that even the most challenging projects
                  can be conquered with the right mindset and collaboration.
                </p>
              }
              links={
                <div className="project--links-buttons">
                  <WebsiteButton url="https://warm-caverns-23380-13159eb09b79.herokuapp.com/login" />
                  <button
                    onClick={() => {
                      window.open(
                        `https://www.github.com/PythonFabi/mode-de-vie`
                      );
                    }}
                  >
                    GitHub
                  </button>
                </div>
              }
            />
          </Suspense>

          <Suspense fallback={<div>Loading...</div>}>
            <Project
              title="PWA Text Editor"
              imageSrc="https://user-images.githubusercontent.com/32249670/267177242-4edd366d-90b4-4590-bfc3-8abb47a1907e.png"
              description={
                <p>
                  Creating a text editor, while seemingly straightforward,
                  becomes more intricate when transforming it into a progressive
                  web app (PWA). My initial foray into developing a PWA text
                  editor was educational, though it required some dedicated
                  hours to grasp the concepts.
                  <br />
                  <br />
                  Developing a PWA involves unique considerations, such as
                  service workers, responsive design, and offline capabilities.
                  Understanding these intricacies demanded patience, research,
                  and troubleshooting. Over time, I gained a deeper
                  understanding of PWAs and their potential benefits.
                  <br />
                  <br />
                  Reflecting on this experience, I appreciate the initial
                  learning curve, which paved the way for a more efficient
                  development process. By leveraging the capabilities of PWAs, I
                  improved the text editor's performance and accessibility.
                  <br />
                  <br />
                  Looking back, I see this project as a valuable opportunity for
                  skill growth and exploration of modern web technologies. It
                  reinforced my commitment to staying current in the field of
                  web development and adapting to emerging trends.
                </p>
              }
              links={
                <div className="project--links-buttons">
                  <WebsiteButton url="https://pwa-notepad-938-bc2f6ce8b24c.herokuapp.com/" />
                  <GitHubButton projectName="pwa-text-editor" />
                </div>
              }
            />
          </Suspense>

          <Suspense fallback={<div>Loading...</div>}>
            <Project
              title="Password Generator"
              imageSrc="https://user-images.githubusercontent.com/32249670/236960506-5e58a7f5-b3bc-4497-8281-5b764b52bf61.png"
              description={
                <p>
                  The password generator project marked one of my initial
                  challenges, and while it may seem straightforward, it offered
                  valuable insights. While there isn't an extensive narrative to
                  share about this project, I found it surprisingly enjoyable,
                  particularly in the aspect of crafting the user interface
                  (UI).
                  <br />
                  <br />
                  Exploring the aesthetics and usability of the UI presented a
                  unique creative opportunity. Despite the project's simplicity,
                  it allowed me to experiment with design elements and gain a
                  deeper appreciation for the user experience.
                  <br />
                  <br />
                  While it may not be the most complex project in my portfolio,
                  it serves as a reminder that even seemingly straightforward
                  tasks can hold hidden gems of learning and enjoyment.
                </p>
              }
              links={
                <div className="project--links-buttons">
                  <WebsiteButton url="https://hnm938.github.io/password-generator-bootcamp/" />
                  <GitHubButton projectName="password-generator-bootcamp" />
                </div>
              }
            />
          </Suspense>

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
