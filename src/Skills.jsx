import { useEffect, useRef, useState } from "react";
import "./Skills.css";

/* ---- EDIT YOUR SKILLS HERE ----
   category must be one of: "Frontend", "Tools", "E-commerce" */
const SKILLS = [
  { name: "HTML", icon: "</>", category: "Frontend", text: "Semantic, accessible markup" },
  { name: "CSS", icon: "{ }", category: "Frontend", text: "Responsive layouts and styling" },
  { name: "JavaScript", icon: "JS", category: "Frontend", text: "ES6+, DOM and async code" },
  { name: "React", icon: "⚛", category: "Frontend", text: "Reusable components and hooks" },
  { name: "Git & GitHub", icon: "⎇", category: "Tools", text: "Version control and collaboration" },
  { name: "Figma to Code", icon: "✎", category: "Tools", text: "Pixel-perfect design handoff" },
  { name: "Shopify Liquid", icon: "◈", category: "E-commerce", text: "Custom storefront themes" },
];

const FILTERS = ["All", "Frontend", "Tools", "E-commerce"];
/* -------------------------------- */

function Skills() {
  const [filter, setFilter] = useState("All");
  const [inView, setInView] = useState(false);
  const listRef = useRef(null);

  // Play the entrance animation once, when the grid scrolls into view
  useEffect(() => {
    const el = listRef.current;
    if (!el || !("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const visible =
    filter === "All" ? SKILLS : SKILLS.filter((s) => s.category === filter);

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="skills-heading">
          <p className="skills-eyebrow">What I work with</p>
          <h2>
            My <span>Skills</span>
          </h2>
          <p className="skills-subtitle">
            The technologies I use to bring ideas to life on the web.
          </p>
          <div className="skills-underline"></div>
        </div>

        <div className="skills-filters" role="group" aria-label="Filter skills">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              className={filter === f ? "active" : ""}
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div
          ref={listRef}
          key={filter}
          className={`skills-list ${inView ? "in-view" : ""}`}
        >
          {visible.map((skill, index) => (
            <div
              className="skill-card"
              key={skill.name}
              style={{ "--i": index }}
            >
              <span className="skill-icon" aria-hidden="true">
                {skill.icon}
              </span>

              <div className="skill-info">
                <h3>{skill.name}</h3>
                <p>{skill.text}</p>
                <span className="skill-tag">{skill.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;