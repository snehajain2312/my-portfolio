import { useEffect, useRef, useState } from "react";
import "./Projects.css";

/* ---- EDIT YOUR PROJECTS HERE ----
   Leave `link` empty ("") to hide the "View project" button. */
const PROJECTS = [
  {
    id: 1,
    title: "Personal Portfolio",
    category: "Frontend development",
    description:
      "A personal portfolio built to showcase my skills, projects, and journey as a frontend developer.",
    tech: ["React.js", "CSS", "JavaScript"],
    link: "https://my-portfolio-one-sable-17.vercel.app",
  },
  {
    id: 2,
    title: "GenuineReplacementParts",
    category: "Shopify development",
    description:
      "Worked on a multi-brand e-commerce website, implementing responsive pages using Shopify Liquid, HTML, CSS, and JavaScript.",
    tech: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript"],
    link: "https://genuinereplacementparts.com/",
  },
];
/* -------------------------------- */

function Projects() {
  const [inView, setInView] = useState(false);
  const gridRef = useRef(null);

  // Play the entrance animation once, when the cards scroll into view
  useEffect(() => {
    const el = gridRef.current;
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

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <div className="projects-heading">
          <p className="projects-eyebrow">A selection of my work</p>
          <h2>
            Featured <span>Projects</span>
          </h2>
          <p className="projects-subtitle">
            Things I've built and contributed to using modern web technologies.
          </p>
          <div className="projects-underline"></div>
        </div>

        <div
          ref={gridRef}
          className={`projects-grid ${inView ? "in-view" : ""}`}
        >
          {PROJECTS.map((project, index) => (
            <article
              className="project-card"
              key={project.id}
              style={{ "--i": index }}
            >
              <div className="project-card-top">
                <span className="project-symbol" aria-hidden="true">
                  &lt;/&gt;
                </span>
                <span className="project-category">{project.category}</span>
              </div>

              <h3>{project.title}</h3>

              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.tech.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              {project.link && (
                <div className="project-card-bottom">
                  <a
                    href={project.link}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} (opens in a new tab)`}
                  >
                    View project <span aria-hidden="true">↗</span>
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;