import { useState, useEffect, memo } from "react";

export const CustomCursor = memo(() => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // const buttons = document.querySelectorAll(".btn");
    // const cursor = document.querySelector(".custom-cursor");

    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);
    
    // buttons.forEach((button) => {
    //   button.addEventListener("mouseover", () => { cursor.classList.add("hovering"); })
    //   button.addEventListener("mouseleave", () => { cursor.classList.remove("hovering"); })
    // });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{
        transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
      }}
    ></div>
  );
})
