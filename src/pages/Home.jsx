import "./css/Home.scss";
import { Particle } from "../components/Particle";
import { useEffect } from "react";

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
        <div id="header--title">
          <h1>Abe Hodos</h1>
          <h1>Developer</h1>
          <h1>Designer</h1>
        </div>
        <div id="header--controls">
          <button className="btn">GitHub</button>
          <button className="btn">LinkedIn</button>
          <button className="btn filled">Resume</button>
        </div>
        <div id="header--subtitle">
          <p>
            18 year developer & UI/UX designer <br />
            based in <span>Ontario, Canada</span> ready <br />
            to work and show my skills
          </p>
          <button className="btn">Contact Me</button>
        </div>
      </section>
      <section></section>
      <section></section>
    </div>
  );
}
