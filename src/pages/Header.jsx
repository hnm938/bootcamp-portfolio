import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import headerModel from "./computer.glb";

import { motion } from "framer-motion";
import TextAnime from "../components/TextAnime";
import "./css/Header.scss";

export default function Header() {
  function HeaderModel(props) {
    const { scene } = useGLTF(headerModel);
    scene.traverse((obj) => {
      if (obj.isMesh) {
        console.log(obj.name); // Print the names of mesh objects
      }
    });
      
    const parent = useRef();

    return (
      <group ref={parent} rotation={[0.35, 10.5, -0.25]} position={[0, 0.1, 0]} {...props}>
        <primitive object={scene} {...props} />
      </group>
    );
  }

  return (
    <section className="Header">
      <div id="header--container">
        <motion.div
          id="header--title"
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
          transition={{ type: "spring" }}
        >
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "srping", duration: 0.5, delay: 0.25 }}
          >
            Abe Hodos
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: -75 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "srping", duration: 0.5, delay: 0.5 }}
          >
            Developer
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 75 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "srping", duration: 0.5, delay: 0.75 }}
          >
            Designer
          </motion.h1>
        </motion.div>
        <motion.div
          id="header--controls"
          initial={{ opacity: 0, y: 75 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring" }}
        >
          <button className="btn">GitHub</button>
          <button className="btn">LinkedIn</button>
          <button className="btn filled">Resume</button>
        </motion.div>
        <div id="header--subtitle">
          <TextAnime
            duration={4}
            text={`
          18 year old developer & UI/UX designer
          based in Ontario, Canada ready
          to work and show off my skills`}
          />
          <motion.button
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3 }}
            className="btn"
            id="contact-button"
          >
            <svg
              class="h-8 w-8 text-red-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />{" "}
              <polyline points="22,6 12,13 2,6" />
            </svg>
            
            Contact Me
          </motion.button>
        </div>
      </div>
      <div id="model--container">
        <Canvas dpr={[1, 2]} camera={{ zoom: 8.5 }}>
          <ambientLight intensity={0.5} /> {/* Ambient light */}
          <pointLight position={[10, 10, 10]} intensity={1} />{" "}
          {/* Point light */}
          <Suspense fallback={null}>
            <HeaderModel />
          </Suspense>
          <OrbitControls enableZoom={false} />
          <directionalLight position={[-5, 3, 0]} intensity={6} />
          {/* <directionalLight position={[5, 3, 0]} intensity={5} /> */}
          <directionalLight position={[0, 3, 5]} intensity={2} />
        </Canvas>
      </div>
    </section>
  );
}
