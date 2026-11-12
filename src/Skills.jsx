
// import "./Skills.css";

// function Skills() {
//   const skills = [
//     "HTML",
//     "CSS",
//     "JavaScript",
//     "React",
//     "Git & GitHub"
//   ];

//   return (
//     <section id="skills" className="skills">
//       <h2>My Skills</h2>

//       <div className="skills-list">
//         {skills.map((skill) => (
//           <p key={skill}>{skill}</p>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Skills;


import "./Skills.css";

function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git & GitHub"
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="skills-heading">
          <p className="skills-eyebrow">WHAT I WORK WITH</p>
          <h2>
            My <span>Skills</span>
          </h2>
          <p className="skills-subtitle">
            The technologies I use to bring ideas to life on the web.
          </p>
          <div className="skills-underline"></div>
        </div>

        <div className="skills-list">
          {skills.map((skill, index) => (
            <div className="skill-card" key={skill}>
              <span className="skill-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="skill-dot"></span>
              <p>{skill}</p>
              <span className="skill-arrow">↗</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;