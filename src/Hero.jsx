import { useEffect, useState } from "react";
import "./Hero.css";

/* ---- EDIT YOUR DETAILS HERE ---- */
const SOCIALS = [
  { label: "GitHub", href: "https://github.com/your-username", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/your-username", icon: "linkedin" },
  { label: "Email", href: "mailto:your-email@example.com", icon: "mail" },
];

const STATS = [
  { value: "10+", label: "Projects built" },
  { value: "1+", label: "Years learning" },
  { value: "5+", label: "Certifications" },
];

const TECH = ["React", "JavaScript", "HTML", "CSS", "Git", "Figma"];

const LOCATION = "Madhya Pradesh, India";
/* -------------------------------- */

const ICONS = {
  github: (
    <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a10.9 10.9 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.7 5.4-5.27 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
  ),
  linkedin: (
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.83v1.54h.06c.53-1 1.84-2.05 3.78-2.05 4.04 0 4.78 2.66 4.78 6.1V21h-4v-4.94c0-1.18-.02-2.7-1.65-2.7-1.65 0-1.9 1.29-1.9 2.62V21h-4V9.75Z" />
  ),
  mail: (
    <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm9 7.2L4.5 7v.2L12 13l7.5-5.8V7L12 12.2Z" />
  ),
};

function Icon({ name }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      {ICONS[name]}
    </svg>
  );
}

/* Types out each role, pauses, deletes, then moves to the next */
function useTypewriter(words) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setText(words[0]);
      return;
    }

    const word = words[index % words.length];
    let delay = deleting ? 45 : 90;

    if (!deleting && text === word) delay = 1600;
    if (deleting && text === "") delay = 300;

    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText(
          deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, words]);

  return text;
}

function Hero({
  name,
  role,
  description,
  roles = [role, "UI Developer", "Problem Solver"],
  image,
}) {
  const [firstName, ...rest] = name.split(" ");
  const lastName = rest.join(" ");
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);
  const typedRole = useTypewriter(roles);

  return (
    <section className="hero" id="home">
      <div className="hero-layout">
        <div className="hero-content">
          <p className="hero-greeting">
            <span className="greeting-line"></span>
            Hello, I'm
          </p>

          <h1 className="hero-title">
            {firstName} <span>{lastName}</span>
          </h1>

          <h2 className="hero-role" aria-label={`I'm a ${role}`}>
            I'm a{" "}
            <span aria-hidden="true">
              {typedRole}
              <i className="hero-cursor"></i>
            </span>
          </h2>

          <p className="hero-description">{description}</p>

          <div className="hero-status">
            <span className="status-dot"></span>
            Open to exciting opportunities
          </div>

          <div className="hero-actions">
            <a href="#projects" className="hero-btn hero-btn-primary">
              Explore my work <span>↗</span>
            </a>

            <a href="#contact" className="hero-btn hero-btn-secondary">
              Contact me
            </a>

            <a
              href="/Sneha-Jain-Resume.pdf"
              download="Sneha-Jain-Resume.pdf"
              className="hero-btn hero-btn-secondary"
            >
              Download resume
            </a>
          </div>

          <ul className="hero-socials">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                >
                  <Icon name={s.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <aside className="hero-card" aria-label="Quick profile">
          <div className="hero-card-glow"></div>

          <div className="hero-avatar">
            {image ? <img src={image} alt={name} /> : <span>{initials}</span>}
          </div>

          <h3 className="hero-card-name">{name}</h3>
          <p className="hero-card-meta">
            {role} · {LOCATION}
          </p>

          <ul className="hero-stats">
            {STATS.map((s) => (
              <li key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>

          <div className="hero-tech">
            <p>Currently working with</p>
            <div>
              {TECH.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Hero;