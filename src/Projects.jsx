// import "./Projects.css"
// function Projects(){

//     const projects = [
//         {id:1, title:"Portfolio",description:"hehe",tech: ["React.js", "          CSS", " JavaScript"]},
//         {id:2, title:"GRP",description:"haha", tech:["Shopify"]},

//     ];

//     return (
//         <div className="projects" id="projects">
//           {  projects.map((project) => (
//             <div key={project.id}>
//                 <h2>{project.title}</h2>
//                 <p>{project.description}</p>
//                 {project.tech.map((technology) => (
//                 <span key={technology}>{technology}</span>
//                 ))}
//             </div>    
//             ))}
//         </div>
//     )

// }

// export default Projects;


import "./Projects.css";
import { useState } from "react";

function Projects() {
  const [category, setCategory] = useState("All");
  const projects = [
    {
      id: 1,
      title: "Personal Portfolio",
      category: "FRONTEND DEVELOPMENT",
      description:
        "A personal portfolio built to showcase my skills, projects, and journey as a frontend developer.",
      tech: ["React.js", "CSS", "JavaScript"],
      link: "http://localhost:5173/",
    },
    {
      id: 2,
      title: "GenuineReplacementParts",
      category: "SHOPIFY DEVELOPMENT",
      description:
        "Worked on a multi-brand e-commerce website, implementing responsive pages using Shopify Liquid, HTML, CSS, and JavaScript.",
      tech: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript"],
      link:"https://genuinereplacementparts.com/",
    },
    {
    id: 3,
    title: "Beauty Products Website",
    category: "FULL STACK DEVELOPMENT",
    description:
      "A beauty products website built with a focus on product browsing and a user-friendly shopping experience.",
    tech: ["HTML", "CSS", "JavaScript", "React", "MongoDB", "Node.js"],
    link:"#",
  },
  {
    id: 4,
    title: "Placement Prep",
    category: "FRONTEND DEVELOPMENT",
    description:
      "A collaborative platform designed to help students prepare for placements through learning resources and practice materials.",
    tech: ["React.js", "JavaScript", "CSS"],
    link:"#",
  },
  {
    id: 5,
    title: "Tic-Tac-Toe",
    category: "JAVASCRIPT DEVELOPMENT",
    description:
      "A classic Tic-Tac-Toe game built to practice interactive UI development and game logic.",
    tech: ["HTML", "CSS", "JavaScript"],
    link:"#",
  },
  ];
  const filteredProjects =
      category === "All"
        ? projects
        : projects.filter((project) => project.category === category);
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <div className="projects-heading">
          <p className="projects-eyebrow">A SELECTION OF MY WORK</p>
          <h2>
            Featured <span>Projects</span>
          </h2>
          <p className="projects-subtitle">
            Things I've built and contributed to using modern web technologies.
          </p>
          <div className="projects-underline"></div>
          <div className="category-buttons">
            <button onClick={()=>setCategory("All")} >All</button>
            <button onClick={()=>setCategory("FRONTEND DEVELOPMENT")}>Frontend</button>
            <button onClick={()=>setCategory("SHOPIFY DEVELOPMENT")}>Shopify</button>
            <button onClick={()=>setCategory("FULL STACK DEVELOPMENT")}>Full Stack</button>
            <button onClick={()=>setCategory("JAVASCRIPT DEVELOPMENT")}>JavaScript</button>
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <article className="project-card" key={project.id}>
              <div className="project-card-top">
                <span className="project-number">
                  0{index + 1}
                </span>
                <a
                  href={project.link || "#"}
                  className="project-symbol"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title}`}
                  onClick={(e) => {
                    if (!project.link) e.preventDefault();
                  }}
                >
                  &lt;/&gt;
                </a>
              </div>

              <p className="project-category">{project.category}</p>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-tech">
                {project.tech.map((technology) => (
                  <span key={technology}>{technology.trim()}</span>
                ))}
              </div>

              <div className="project-card-bottom">
                <span className="project-line"></span>
                <span className="project-bottom-text">
                  BUILT WITH PURPOSE
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;