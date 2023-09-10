import "./css/Navigator.scss";

export const Navigator = () => {
  function handleScroll() {
    const scrollY = window.scrollY;

    // console.log(scrollY);

    if (scrollY >= 0) {
      document.getElementById("scroll-indicator-1").classList.add("selected");
      document.getElementById("scroll-indicator-2").classList.remove("selected");
    }
    if (scrollY >= 600) {
      document.getElementById("scroll-indicator-1").classList.remove("selected");
      document.getElementById("scroll-indicator-2").classList.add("selected");
    }
  }

  window.addEventListener("scroll", handleScroll);

  return (
    <div className="Navigator">
      <button id="scroll-indicator-1" className="btn selected" onClick={console.log("123")}></button>
      <hr />
      <button id="scroll-indicator-2" className="btn"></button>
      <hr />
      <button id="scroll-indicator-3" className="btn"></button>
    </div>
  );
}