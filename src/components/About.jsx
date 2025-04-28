import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    // Simple fade-in effect on scroll
    const revealElements = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
      for (let elem of revealElements) {
        const windowHeight = window.innerHeight;
        const elementTop = elem.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          elem.classList.add("active");
        } else {
          elem.classList.remove("active");
        }
      }
    };

    window.addEventListener("scroll", revealOnScroll);
    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <section id="about" className="py-5" style={{ background: 'linear-gradient(to right, #ece9e6, #ffffff)' }}>
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <h2 className="section-title gradient-text" style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
              About Me
            </h2>
            <p className="lead text-muted mt-3">
              I'm a Computer Science Engineering student specializing in Artificial Intelligence at BITM.
              My passion lies in building intelligent systems that solve real-world problems.
            </p>
            <p className="text-muted">
              As an aspiring AI engineer, I focus on machine learning, data structures, and algorithmic problem-solving,
              turning complex challenges into elegant, working solutions.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-md-4 reveal">
            <div className="card shadow-lg border-0 h-100 text-center p-4" style={{ background: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)', borderRadius: '20px', color: '#fff' }}>
              <div className="d-inline-block bg-white rounded-circle p-3 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-lightbulb text-primary" viewBox="0 0 16 16">
                  <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z"/>
                </svg>
              </div>
              <h4 className="fw-bold mb-3">Innovator</h4>
              <p>Exploring new technologies and creative solutions for real-world problems.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4 reveal">
            <div className="card shadow-lg border-0 h-100 text-center p-4" style={{ background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)', borderRadius: '20px', color: '#333' }}>
              <div className="d-inline-block bg-white rounded-circle p-3 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-code-slash text-danger" viewBox="0 0 16 16">
                  <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
                </svg>
              </div>
              <h4 className="fw-bold mb-3">Problem Solver</h4>
              <p>Breaking down challenges into simple, logical solutions with precision.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4 reveal">
            <div className="card shadow-lg border-0 h-100 text-center p-4" style={{ background: 'linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)', borderRadius: '20px', color: '#333' }}>
              <div className="d-inline-block bg-white rounded-circle p-3 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-people text-success" viewBox="0 0 16 16">
                  <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
                </svg>
              </div>
              <h4 className="fw-bold mb-3">Team Player</h4>
              <p>Collaborating with teams to achieve outstanding results and growth.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
