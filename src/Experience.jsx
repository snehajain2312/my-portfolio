import "./Experience.css";

/* ---- EDIT YOUR DETAILS HERE ----
   Add another job by copying an object inside EXPERIENCE. */
const EXPERIENCE = [
  {
    date: "September 2025 — October 2026",
    company: "TechInfini Solutions",
    role: "Frontend Developer / Shopify Developer",
    duration: "1 Year",
    responsibilities: [
      "Developed responsive e-commerce pages using Shopify Liquid, HTML, CSS, and JavaScript.",
      "Converted Figma designs into pixel-perfect, responsive user interfaces.",
      "Worked on multi-brand and single-vendor platforms, including GenuineReplacementParts.com and LGParts.com.",
      "Improved UI components, layouts, and resolved frontend issues across multiple websites.",
    ],
  },
];
/* -------------------------------- */

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <div className="experience-heading">
          <span className="experience-tag">My work</span>
          <h2>
            Work <span>Experience</span>
          </h2>
          <p>Where I've applied my frontend skills on real websites.</p>
        </div>

        {EXPERIENCE.map((job) => (
          <article className="experience-card" key={job.company + job.date}>
            <div className="experience-header">
              <div>
                <span className="experience-date">{job.date}</span>
                <h3>{job.company}</h3>
                <p>{job.role}</p>
              </div>

              <span className="experience-duration">{job.duration}</span>
            </div>

            <div className="experience-divider"></div>

            <ul className="experience-content">
              {job.responsibilities.map((item) => (
                <li className="experience-point" key={item}>
                  <span aria-hidden="true">✦</span>
                  <p>{item}</p>
                </li>
              ))}
            </ul>

          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;