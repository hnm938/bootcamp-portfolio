import { easeInOut, motion } from "framer-motion";

import "./css/Project.scss";
import { useEffect } from "react";

export default function Project({ title, subtitle, image, imagePosition, description, liveUrl, repoUrl }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: easeInOut }}
      className="project"
    >
      <div className="project--info">
        <div>
          <h1 className="">{title}</h1>
          <h2>{subtitle}</h2>
          <div className="info--button-container">
            <button
              className="btn"
              onClick={(e) => {
                const parent =
                  e.target.parentElement.parentElement.parentElement
                    .parentElement;
                const container = parent.parentElement;

                if (parent.classList.contains("opened")) {
                  e.target.innerHTML = "Show More";
                  container.childNodes.forEach((project) => {
                    project.style.display = "flex";
                  });
                } else {
                  container.childNodes.forEach((project) => {
                    e.target.innerHTML = "Show Less";
                    if (project !== parent) {
                      project.style.display = "none";
                    }
                  });
                }

                parent.classList.toggle("opened");
              }}
            >
              Show More
            </button>
            {liveUrl === undefined ? (
              <></>
            ) : (
              <a href={liveUrl} target="_blank">
                <button className="btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>
                </button>
              </a>
            )}
            {repoUrl === undefined ? (
              <></>
            ) : (
              <a href={repoUrl} target="_blank">
                <button className="btn">
                  <svg
                    class="h-8 w-8 text-red-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </button>
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="project--description">
        <p>{description}</p>
      </div>
      <div className="project--image">
        <img
          src={image}
          style={{ objectPosition: imagePosition }}
          alt="project"
        />
        <div className="image--tooltip">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5"
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}
