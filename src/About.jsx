// import "./About.css";
// function About(){
//     return(
//         <section id="about">
//             <h1>About Me!</h1>
//             <p>  I'm a frontend developer passionate about building
//             responsive and user-friendly web experiences using React.
//             I enjoy turning designs into functional interfaces and
//             continuously improving my development skills.</p>
//         </section>
//     )
// }

// export default About;


import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-heading">
          <p className="about-eyebrow">GET TO KNOW ME</p>

          <h2>
            About <span>Me</span>
          </h2>

          <div className="about-underline"></div>
        </div>

        <div className="about-content">
          <div className="about-card">
            <div className="about-card-icon">{"</>"}</div>

            <h3>Turning Ideas Into Interfaces</h3>

            <p>
              I'm a frontend developer passionate about building
              responsive and user-friendly web experiences using
              React and modern web technologies.
            </p>

            <p>
              I enjoy transforming designs into functional interfaces,
              exploring creative solutions, and continuously improving
              my development skills.
            </p>

            <p>
              My goal is to create websites that are not only visually
              engaging but also accessible, intuitive, and enjoyable
              to use.
            </p>
          </div>

          <div className="about-highlights">
            <div className="about-highlight">
              <span className="highlight-number">01</span>
              <div>
                <h3>Responsive Design</h3>
                <p>Interfaces that adapt to different screen sizes.</p>
              </div>
            </div>

            <div className="about-highlight">
              <span className="highlight-number">02</span>
              <div>
                <h3>React Development</h3>
                <p>Reusable components and interactive experiences.</p>
              </div>
            </div>

            <div className="about-highlight">
              <span className="highlight-number">03</span>
              <div>
                <h3>Continuous Learning</h3>
                <p>Always exploring better ways to build for the web.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
