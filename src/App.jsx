import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <div className={`portfolio ${theme}-theme`}>
      <Navbar theme={theme} setTheme={setTheme} />

      <main>
        <Hero
          name="Sneha Jain"
          role="Frontend Developer"
          description="I build responsive and user-friendly web experiences using React and modern web technologies."
        />

        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="portfolio-footer">
        <p>
          Designed & built with <span>♥</span> by Sneha Jain
        </p>
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
