import "./About.css";

/* ---- EDIT YOUR DETAILS HERE ---- */
const FACTS = [
  {
    icon: "pin",
    tone: "var(--accent)",
    label: "Location",
    value: "Madhya Pradesh, India",
    note: "Open to remote and on-site roles",
  },
  {
    icon: "cap",
    tone: "var(--accent-2)",
    label: "Education",
    value: "B.Tech in Computer Science & Engineering",
    note: "Prestige Institute of Engineering Management and Research, Indore",
  },
  {
    icon: "code",
    tone: "var(--accent-warm)",
    label: "Focus",
    value: "Frontend Development",
    note: "React, JavaScript, responsive UI",
  },
  {
    icon: "chat",
    tone: "var(--accent)",
    label: "Languages",
    value: "English, Hindi",
    note: "Comfortable working in both",
  },
];
/* -------------------------------- */

const ICONS = {
  pin: "M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z",
  cap: "M12 3 1 9l11 6 9-4.9V17h2V9L12 3Zm-6 9.8V17c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.2l-6 3.3-6-3.3Z",
  code: "M8.7 16.6 4.1 12l4.6-4.6L7.3 6l-6 6 6 6 1.4-1.4Zm6.6 0 4.6-4.6-4.6-4.6L16.7 6l6 6-6 6-1.4-1.4Z",
  chat: "M4 4h16a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H8l-5 4V5a1 1 0 0 1 1-1Z",
};

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-heading">
          <p className="about-eyebrow">Get to know me</p>

          <h2>
            About <span>Me</span>
          </h2>

          <div className="about-underline"></div>
        </div>

        <div className="about-content">
          <div className="about-card">
            <p className="about-lead">
              I'm a <strong>frontend developer</strong> who builds responsive,
              accessible and user-friendly web experiences with{" "}
              <strong>React</strong> and modern web technologies.
            </p>

            <p>
              I enjoy turning designs into functional interfaces, exploring
              creative solutions, and continuously improving my development
              skills with every project I build.
            </p>

            <p>
              My goal is to create websites that are not only visually
              engaging but also fast, intuitive, and enjoyable to use. I'm
              always exploring better ways to build for the web.
            </p>
          </div>

          <dl className="about-facts">
            {FACTS.map((fact) => (
              <div className="about-fact" key={fact.label}>
                <span
                  className="fact-icon"
                  style={{ "--tone": fact.tone }}
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d={ICONS[fact.icon]} />
                  </svg>
                </span>
                <div>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                  <small>{fact.note}</small>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export default About;