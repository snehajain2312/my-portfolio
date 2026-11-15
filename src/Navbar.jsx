import { useEffect, useState } from "react";
import "./Navbar.css";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function Navbar({ theme, setTheme }) {
  const [open, setOpen] = useState(false);

  const nextTheme = theme === "light" ? "dark" : "light";
  const toggleTheme = () => setTheme(nextTheme);
  const closeMenu = () => setOpen(false);

  // Close the mobile menu with the Escape key
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Close the menu if the screen grows to desktop size
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 901px)");
    const onChange = (e) => e.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <nav className="navbar" aria-label="Main navigation">
      <a href="#home" className="logo" onClick={closeMenu}>
        Sneha
      </a>

      <div id="nav-menu" className={`nav-links ${open ? "open" : ""}`}>
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}

        <a
          href="/Sneha-Jain-Resume.pdf"
          download="Sneha-Jain-Resume.pdf"
          className="nav-resume"
          onClick={closeMenu}
        >
          Resume
        </a>
      </div>

      <div className="nav-actions">
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${nextTheme} mode`}
          title={`Switch to ${nextTheme} mode`}
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        <button
          type="button"
          className={`menu-toggle ${open ? "active" : ""}`}
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="nav-menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;