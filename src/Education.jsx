import "./Education.css";

/* ---- EDIT YOUR DETAILS HERE ----
   Add more entries (12th, 10th, certifications...) by copying an object.
   Remove `score` from an entry if you don't want it shown. */
const EDUCATION = [
  {
    icon: "🎓",
    year: "Graduated · 2025",
    status: "Completed",
    degree: "Bachelor of Technology",
    field: "Computer Science & Engineering",
    college: "Prestige Institute of Engineering Management & Research (PIEMR)",
    location: "Indore, Madhya Pradesh",
    score: { value: "7.8", unit: "/ 10 CGPA" },
  },
];
/* -------------------------------- */

function Education() {
  return (
    <section className="education" id="education">
      <div className="education-container">
        <div className="education-heading">
          <span className="education-tag">My academics</span>
          <h2>
            Educational <span>Background</span>
          </h2>
          <p>
            The academic journey that built my foundation in technology and
            problem-solving.
          </p>
        </div>

        <ol className="education-timeline">
          <li className="education-line" aria-hidden="true"></li>

          {EDUCATION.map((item) => (
            <li className="education-card" key={item.degree}>
              <div className="education-icon" aria-hidden="true">
                {item.icon}
              </div>

              <div className="education-content">
                <div className="education-top">
                  <span className="education-year">{item.year}</span>
                  <span className="education-status">{item.status}</span>
                </div>

                <h3>{item.degree}</h3>
                <h4>{item.field}</h4>

                <p className="education-college">{item.college}</p>
                <p className="education-location">
                  <span aria-hidden="true">📍</span> {item.location}
                </p>

                {item.score && (
                  <div className="education-score">
                    <span>Academic performance</span>
                    <strong>
                      {item.score.value} <small>{item.score.unit}</small>
                    </strong>
                  </div>
                )}

              </div>
            </li>
          ))}
        </ol>

        <div className="education-footer">
          <span aria-hidden="true">✦</span>
          Building knowledge, one step at a time.
        </div>
      </div>
    </section>
  );
}

export default Education;