import { motion } from "framer-motion";

import Project from "../components/Project";

import "./css/Portfolio.scss";
// import { useEffect } from "react";

export default function Portfolio() {
  // !! When scrolling, close opened project
  // useEffect(() => {
  //   document.querySelector(".Home").addEventListener("scroll", () => {
  //     document.querySelectorAll(".project").forEach((project) => {
  //       if (project.classList.contains("opened")) {
  //         project.classList.remove("opened");
  //       }
  //       project.style.display = "flex";
  //     });
  //   });
  // }, []);
  
  return (
    <section className="Portfolio">
      <motion.span
        initial={{ opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.25 }}
        id="scroll-icon"
      >
        <div id="mouse"></div>
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
            d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
          />
        </svg>
        <div style={{ filter: "brightness(1)" }}></div>
        <div style={{ filter: "brightness(0.9)" }}></div>
        <div style={{ filter: "brightness(0.7)" }}></div>
        <div style={{ filter: "brightness(0.5)" }}></div>
        <div style={{ filter: "brightness(0.3)" }}></div>
        <div style={{ filter: "brightness(0.2)" }}></div>
        <div style={{ filter: "brightness(0.1)" }}></div>
      </motion.span>

      <motion.h1
        id="portfolio--title"
        className="neon-text"
        viewport={{ once: true }}
        whileInView={{
          animation:
            "textReveal 1.5s 500ms ease forwards, neonFlickerText 3s ease infinite",
        }}
      >
        My Projects
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.25 }}
        id="project-container"
      >
        <section>
          {/* <Project
            title="Urban Sk8"
            subtitle="full-stack, next.js, mongodb, scss"
            description={`This project holds a special place in my journey through the bootcamp—it's a personal favorite. It marked the beginning of collaborative efforts within a group, and the result was nothing short of outstanding.
              
              At its core, the concept is elegantly simple: an app designed to be your go-to source for all things cocktails and drinks. It's your bartender's encyclopedia, offering step-by-step recipes, ingredient lists, and fascinating tidbits about your favorite libations. The Cocktail Cabinet takes it a step further by also providing information on nearby bars, just in case you're up for some exploration.
              
              I firmly believe in the app's potential. It's not just a digital cocktail companion; it's a practical tool for those planning a night out. Imagine it packed with features like ride-hailing integration, real-time availability checks at bars, and even intelligent dish recommendations to complement your drink choice based on ingredients. With these enhancements, it could transform into an indispensable, user-friendly app that enhances your evening plans.
            `}
            repoUrl="https://github.com/hnm938/urban-sk8-front"
            liveUrl="https://urban-sk8-front.vercel.app/"
            image="https://user-images.githubusercontent.com/130527417/244220113-e5a73bde-66ae-43ed-8168-ee104aa63671.png"
            imagePosition="0 5px"
          /> */}
          <Project
            title="Cocktail Cabinet"
            subtitle="full-stack, next.js, mongodb, scss"
            description={`This project holds a special place in my journey through the bootcamp—it's a personal favorite. It marked the beginning of collaborative efforts within a group, and the result was nothing short of outstanding.
              
              At its core, the concept is elegantly simple: an app designed to be your go-to source for all things cocktails and drinks. It's your bartender's encyclopedia, offering step-by-step recipes, ingredient lists, and fascinating tidbits about your favorite libations. The Cocktail Cabinet takes it a step further by also providing information on nearby bars, just in case you're up for some exploration.
              
              I firmly believe in the app's potential. It's not just a digital cocktail companion; it's a practical tool for those planning a night out. Imagine it packed with features like ride-hailing integration, real-time availability checks at bars, and even intelligent dish recommendations to complement your drink choice based on ingredients. With these enhancements, it could transform into an indispensable, user-friendly app that enhances your evening plans.
            `}
            repoUrl="https://github.com/hnm938/cocktail-cabinet-bootcamp"
            image="https://user-images.githubusercontent.com/130527417/244220113-e5a73bde-66ae-43ed-8168-ee104aa63671.png"
            imagePosition="0 5px"
          />
          <Project
            title="Mode-de-vie"
            subtitle="full-stack, next.js, mongodb, scss"
            description={`
              Mode-de-vie was the second project that introduced me to teamwork dynamics, and it was all about setting ambitious goals. Our objective was clear: develop a fully functional social media app in just two weeks. As you can imagine, this was an ambitious undertaking.

              Despite the inevitable challenges that came with such a tight timeline, I believe we rose to the occasion. This project served as a valuable lesson for our team, highlighting the importance of realistic goal-setting and thorough planning, particularly during the whiteboarding phase of app development.

              It was a journey filled with learning experiences and growth opportunities, proving that even the most challenging projects can be conquered with the right mindset and collaboration.
            `}
            repoUrl="https://github.com/PythonFabi/mode-de-vie"
            liveUrl="https://warm-caverns-23380-13159eb09b79.herokuapp.com/login"
            image="https://user-images.githubusercontent.com/129299589/259270302-afbac0c8-a0cd-4454-8d6f-abd4907e9554.png"
            imagePosition="0 0"
          />
          <Project
            title="PWA Notepad"
            subtitle="full-stack, next.js, mongodb, scss"
            description={`Creating a text editor, while seemingly straightforward, becomes more intricate when transforming it into a progressive web app (PWA). My initial foray into developing a PWA text editor was educational, though it required some dedicated hours to grasp the concepts.

              Developing a PWA involves unique considerations, such as service workers, responsive design, and offline capabilities. Understanding these intricacies demanded patience, research, and troubleshooting. Over time, I gained a deeper understanding of PWAs and their potential benefits.

              Reflecting on this experience, I appreciate the initial learning curve, which paved the way for a more efficient development process. By leveraging the capabilities of PWAs, I improved the text editor's performance and accessibility.

              Looking back, I see this project as a valuable opportunity for skill growth and exploration of modern web technologies. It reinforced my commitment to staying current in the field of web development and adapting to emerging trends.
            `}
            repoUrl="https://github.com/hnm938/pwa-text-editor-bootcamp"
            image="https://user-images.githubusercontent.com/32249670/267177242-4edd366d-90b4-4590-bfc3-8abb47a1907e.png"
            imagePosition="0 -35px"
          />
        </section>
        <section></section>
      </motion.div>
    </section>
  );
}

