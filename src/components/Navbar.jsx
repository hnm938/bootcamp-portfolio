import { motion } from "framer-motion";

import "./css/Navbar.scss";

export default function Navbar() {
  return (
    <div className="Navbar">
      <motion.a
        whileHover={{
          borderBlock: true
        }}
        href="#work"
      >work</motion.a>
      <a href="#about">about</a>
      <a href="#contact">contact</a>
    </div>
  )
}