import { motion } from "framer-motion";
import TextMessage from "../components/TextMessage";
import "./css/Intro.scss";
import { useEffect } from "react";

export default function Intro() {
  useEffect(() => {
    const phone = document.querySelector("#phone--container");

    const mostX = 20;
    const mostY = -5;

    const handleMouseMove = (e) => {
      phone.style.transition = "none";

      const x = e.clientX;
      const y = e.clientY;

      const { innerWidth, innerHeight } = window;
      const halfWidth = innerWidth / 2;
      const halfHeight = innerHeight / 2;

      const rotationY = ((x - halfWidth) / halfWidth) * mostX;
      const rotationX = ((y - halfHeight) / halfHeight) * mostY;

      phone.style.transform = `rotateY(${rotationY}deg) rotateX(${rotationX}deg)`;
    };

    const handleMouseLeave = () => {
      phone.style.transition = "transform 0.5s ease-in-out";
      phone.style.transform = `rotateY(0) rotateX(0)`;
    };

    document.body.addEventListener("mousemove", handleMouseMove);

    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="Intro">
      <div id="intro--skills">
        <motion.p
          initial={{ opacity: 0, maxWidth: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, maxWidth: "70vw" }}
          transition={{
            type: "spring",
            duration: 2,
            delay: 9.5,
            opacity: { delay: 10 },
          }}
        >
          <span>skills: </span> aws express <br /> next.js typescript SCSS{" "}
          <br />
          <span>mongoDB</span> google cloud <br /> photoshop figma{" "}
          <span>react</span> <br />
          illustrator mySQL <br /> postgre <span>firebase</span> python
          <br />
        </motion.p>
      </div>
      <div id="intro--phone">
        <div id="phone--container">
          <div id="phone--notch"></div>
          <div id="phone--user">
            <div>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </span>
              <span>🤓</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </span>
            </div>
            <h1>Abe .H</h1>
            <hr />
          </div>
          <div id="phone--messages-container">
            <TextMessage delay={0.5} textSpeed={0.5}>
              hey
            </TextMessage>

            <TextMessage delay={1.5} textSpeed={0.75}>
              its me abe
            </TextMessage>

            <TextMessage delay={3} textSpeed={3}>
              ive been coding since 11 years old when i started making games
              👶🎮
            </TextMessage>

            <TextMessage delay={6.5} textSpeed={3}>
              here is some things ive learned
            </TextMessage>

            <TextMessage delay={10.5} textSpeed={1.5}>
              checkout out some of my work
            </TextMessage>

            <TextMessage delay={12.25} textSpeed={0.1} className="underlined">
              https://www.mywork.com/
            </TextMessage>
          </div>
        </div>
      </div>
    </section>
  );
}