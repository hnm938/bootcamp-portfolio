import React, { memo } from "react";

import "./css/Navigator.scss";

export const Navigator = memo(() => {
  function handleScroll() {
    const scrollY = window.scrollY;

    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;

    if (scrollY >= 0) {
      document.getElementById("scroll-indicator-1").classList.add("selected");
      document.getElementById("scroll-indicator-3").classList.remove("selected");
      document.getElementById("scroll-indicator-2").classList.remove("selected");
    }
    if (scrollY >= 600) {
      document.getElementById("scroll-indicator-1").classList.remove("selected");
      document.getElementById("scroll-indicator-3").classList.remove("selected");
      document.getElementById("scroll-indicator-2").classList.add("selected");
    }
    if (scrollY + windowHeight >= documentHeight - 100) {
      document.getElementById("scroll-indicator-2").classList.remove("selected");
      document.getElementById("scroll-indicator-1").classList.remove("selected");
      document.getElementById("scroll-indicator-3").classList.add("selected");
    }
  }

  window.addEventListener("scroll", handleScroll);

  return (
    <div className="Navigator">
      <button
        id="scroll-indicator-1"
        className="navigator-btn selected"
        onClick={console.log("123")}
      ></button>
      <hr />
      <button id="scroll-indicator-2" className="navigator-btn"></button>
      <hr />
      <button id="scroll-indicator-3" className="navigator-btn"></button>
    </div>
  );
})