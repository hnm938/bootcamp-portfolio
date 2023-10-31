import { useEffect } from "react";

import { Particle } from "../components/Particle";

import "./css/Home.scss";

import Header from "./Header";
import Intro from "./Intro";

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
      <div id="particle-container">
        <Particle />
      </div>
      <Header />
      <Intro />
      <section></section>
      <section></section>
    </div>
  );
}
