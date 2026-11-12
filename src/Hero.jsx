
import "./Hero.css";

function Hero({ name, role, description }) {
  const firstName = name.split(" ")[0];
  const lastName = name.split(" ").slice(1).join(" ");

  return (
    <section className="hero" id="home">
      <div className="hero-layout">
        <div className="hero-content">
          <p className="hero-greeting">
            <span className="greeting-line"></span>
            HELLO, I'M
          </p>

          <h1 className="hero-title">
            {firstName} <span>{lastName}</span>
          </h1>

          <h2 className="hero-role">
            I'm a <span>{role}</span>
          </h2>

          <p className="hero-description">{description}</p>

          <div className="hero-status">
            <span className="status-dot"></span>
            Open to exciting opportunities
          </div>

          <div className="hero-actions">
            <a href="#projects" className="hero-btn hero-btn-primary">
              Explore My Work <span>↗</span>
            </a>

            <a href="#contact" className="hero-btn hero-btn-secondary">
              Let's Connect <span>→</span>
            </a>
          </div>

          <div className="hero-social-text">
            <span></span>
            CRAFTING DIGITAL EXPERIENCES
            <span></span>
          </div>
        </div>

        <div className="hero-image-wrap">
          <div className="hero-image-glow"></div>

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVSGCzEpsqQVefy0DXPBxRBiqAXG30wNF3nHkpv2VBLg&s=10"
            alt="Anime girl holding flowers"
            className="hero-image"
          />

          <span className="hero-image-decoration"></span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
