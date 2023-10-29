import { useEffect } from "react";

import { Particle } from "../components/Particle";
import { motion } from "framer-motion";

import "./css/Home.scss";
import TextAnim from "../components/TextAnime";

export default function Home() {
  useEffect(() => {
    const parent = document.querySelector(".Home");
    const scrollYPerView = parent.clientHeight;
    if (parent) {
      parent.addEventListener("wheel", function (event) {
        event.preventDefault();
        if (event.deltaY > 0) {
          scrollDown();
        } else {
          scrollUp();
        }
      });

      function scrollUp() {
        let currentScrollY = parent.scrollTop;
        parent.scroll({
          top: currentScrollY - scrollYPerView,
          left: 0,
          behavior: "smooth",
        });
      }

      function scrollDown() {
        let currentScrollY = parent.scrollTop;
        parent.scroll({
          top: currentScrollY + scrollYPerView,
          left: 0,
          behavior: "smooth",
        });
      }
    }
  }, []);

  return (
    <div className="Home">
      <h1>Home</h1>
      <div id="particle-container">
        <Particle />
      </div>
      <section id="home--header">
        <motion.div
          id="header--title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "spring" }}
        >
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "srping", duration: 0.5, delay: 0.25 }}
          >
            Abe Hodos
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: -75 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "srping", duration: 0.5, delay: 0.5 }}
          >
            Developer
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 75 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "srping", duration: 0.5, delay: 0.75 }}
          >
            Designer
          </motion.h1>
        </motion.div>
        <motion.div
          id="header--controls"
          initial={{ opacity: 0, y: 75 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring" }}
        >
          <button className="btn">GitHub</button>
          <button className="btn">LinkedIn</button>
          <button className="btn filled">Resume</button>
        </motion.div>
        <div id="header--subtitle">
          <TextAnim
            duration={3}
            text={`18 year developer & UI/UX designer
            based in Ontario, Canada ready
            to work and show my skills`}
          />
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3 }}
            className="btn"
          >
            Contact Me
          </motion.button>
        </div>
      </section>
      <section></section>
      <section></section>
    </div>
  );
}
