import "./css/Navbar.scss";

export const Navbar = () => {
  return (
    <div className="Navbar">
      <button className="btn" onClick={() => {
        document.querySelector(".Home").scrollIntoView({ behavior: "smooth" });
      }}>Home</button>
      <button className="btn">Portfolio</button>
      <button className="btn">About</button>
      <button className="btn">Contact</button>
    </div>
  );
};
