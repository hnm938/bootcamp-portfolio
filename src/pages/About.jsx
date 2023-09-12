import "./css/About.scss";

import { Footer } from "../components/Footer";

export default function About() {
  return (
    <div className="About">
      <header>
        <h1 className="page-title">About Me</h1>
      </header>
      <div className="page-body">
        <div className="about-me--section">
          <h2>Skills / Tools</h2>
          <div>
            <ul>
              <h3>Frameworks</h3>
              <li>React</li>
              <li>Next.js</li>
              <li>Svelte</li>
              <li>Node.js</li>
            </ul>
            <ul>
              <h3>Databases</h3>
              <li>MongoDB</li>
              <li>PostgreSQL</li>
              <li>Firebase</li>
              <li>Google Cloud</li>
              <li>AWS</li>
            </ul>
            <ul>
              <h3>Languages</h3>
              <li>Javascript</li>
              <li>Typescript</li>
              <li>SQL</li>
              <li>Python</li>
              <li>C#</li>
            </ul>
            <ul>
              <h3>UX/UI</h3>
              <li>Photoshop</li>
              <li>Illustrator</li>
              <li>Figma</li>
            </ul>
            <ul>
              <h3>Other</h3>
              <li>Blender</li>
              <li>Spline</li>
              <li>Unity</li>
              <li>Unreal</li>
            </ul>
          </div>
        </div>

        <div className="about-me--section">
          <h2>My Background</h2>
          <p>
            Hey there, I'm Abe, an 18-year-old enthusiast deeply passionate
            about programming. My journey into the world of code began at the
            age of 12 when I discovered my love for all things related to
            computers. I was that kid who couldn't resist taking apart gadgets,
            exploring their inner workings, and, occasionally, successfully
            putting them back together.
            <br />
            <br />
            My fascination with understanding the intricacies of technology
            naturally led me to programming. Unlike the usual introduction to
            coding through block-based methods, my initial foray was into game
            development. I vividly recall spending countless hours immersed in
            Unity, crafting games that, although often left unfinished, ignited
            my creativity.
            <br />
            <br />
            As I grew older, my interests broadened to include design and the
            visual aspects of technology. The fusion of my artistic passion with
            my coding skills created a perfect synergy that led me to the
            exciting realm of web development.
            <br />
            <br />
            My venture into web development commenced when I began creating
            websites on platforms like Wix, offering my services to clients at
            an affordable rate. During this phase, I had the opportunity to
            delve into React, a transformative technology that paved the way for
            exploring various frameworks, databases, and the intricate aspects
            of web development.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}