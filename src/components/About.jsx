import { useEffect, useState } from 'react';

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);

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

  const cardData = [
    {
      id: 1,
      title: "Innovator",
      description: "Exploring new technologies and creative solutions for real-world problems.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" viewBox="0 0 16 16">
          <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z"/>
        </svg>
      )
    },
    {
      id: 2,
      title: "Problem Solver",
      description: "Breaking down challenges into simple, logical solutions with precision.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" viewBox="0 0 16 16">
          <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
        </svg>
      )
    },
    {
      id: 3,
      title: "Team Player",
      description: "Collaborating with teams to achieve outstanding results and growth.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" viewBox="0 0 16 16">
          <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
        </svg>
      )
    }
  ];

  return (
    <>
      <section className={`about-section ${isLoaded ? 'loaded' : ''}`} id="about">
        {/* Animated background shapes */}
        <div className="bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>

        <div className="container">
          <div className="about-header">
            <h2 className="section-title">
              About Me
            </h2>
            <p className="lead">
              I'm a Computer Science Engineering student specializing in Artificial Intelligence at BITM.
              My passion lies in building intelligent systems that solve real-world problems.
            </p>
           
          </div>

          <div className="cards-container">
            {cardData.map((card, index) => (
              <div key={card.id} className={`card-wrapper reveal reveal-${index + 1}`}>
                <div className="about-card">
                  <div className="card-icon">
                    {card.icon}
                  </div>
                  <h4 className="card-title">{card.title}</h4>
                  <p className="card-description">{card.description}</p>
                  <div className="card-glow"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .about-section {
          min-height: 100vh;
          background: linear-gradient(135deg, 
            #1a1a2e 0%, 
            #16213e 25%, 
            #0f3460 50%, 
            #533483 75%, 
            #e43f5a 100%);
          position: relative;
          overflow: hidden;
          opacity: 0;
          transition: all 1s ease;
          padding: 6rem 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          display: flex;
          align-items: center;
        }

        .about-section.loaded {
          opacity: 1;
        }

        .bg-shapes {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .shape-1 {
          width: 200px;
          height: 200px;
          top: 10%;
          right: 10%;
          animation: float 6s ease-in-out infinite;
        }

        .shape-2 {
          width: 150px;
          height: 150px;
          bottom: 20%;
          left: 15%;
          animation: float 8s ease-in-out infinite reverse;
        }

        .shape-3 {
          width: 100px;
          height: 100px;
          top: 60%;
          right: 20%;
          animation: float 7s ease-in-out infinite;
        }

        .shape-4 {
          width: 80px;
          height: 80px;
          top: 30%;
          left: 10%;
          animation: float 5s ease-in-out infinite reverse;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 5;
          width: 100%;
        }

        .about-header {
          text-align: center;
          margin-bottom: 4rem;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .section-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          color: white;
          margin-bottom: 2rem;
          background: linear-gradient(45deg, #e43f5a, #00d4ff, #7209b7);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 3s ease-in-out infinite;
        }

        .lead {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 1.5rem;
          font-weight: 500;
          line-height: 1.6;
        }

        .description {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          margin: 0;
        }

        .cards-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .card-wrapper {
          display: flex;
          justify-content: center;
        }

        .reveal {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s ease;
        }

        .reveal-1 {
          transition-delay: 0.1s;
        }

        .reveal-2 {
          transition-delay: 0.3s;
        }

        .reveal-3 {
          transition-delay: 0.5s;
        }

        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }

        .about-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 2.5rem 2rem;
          text-align: center;
          transition: all 0.4s ease;
          color: white;
          position: relative;
          overflow: hidden;
          width: 100%;
          max-width: 320px;
          height: 280px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .about-card:hover {
          transform: translateY(-15px) scale(1.05);
          border-color: rgba(0, 212, 255, 0.4);
          box-shadow: 0 25px 50px rgba(0, 212, 255, 0.25);
        }

        .card-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .about-card:hover .card-glow {
          opacity: 1;
        }

        .card-icon {
          color: #00d4ff;
          margin-bottom: 1.5rem;
          transition: all 0.4s ease;
          position: relative;
          z-index: 2;
        }

        .about-card:hover .card-icon {
          transform: scale(1.2) rotateY(10deg);
          color: #e43f5a;
        }

        .card-title {
          color: white;
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 1rem;
          position: relative;
          z-index: 2;
        }

        .card-description {
          color: rgba(255, 255, 255, 0.8);
          font-size: 1rem;
          line-height: 1.6;
          margin: 0;
          position: relative;
          z-index: 2;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        /* Responsive Design */
        @media (max-width: 992px) {
          .cards-container {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
          }

          .about-card {
            max-width: none;
            height: 260px;
          }
        }

        @media (max-width: 768px) {
          .about-section {
            padding: 4rem 0;
          }

          .container {
            padding: 0 1rem;
          }

          .about-header {
            margin-bottom: 3rem;
          }

          .cards-container {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            max-width: 400px;
          }

          .about-card {
            height: 240px;
            padding: 2rem 1.5rem;
          }

          .section-title {
            font-size: 2.5rem;
          }

          .lead {
            font-size: 1.1rem;
          }

          .description {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 1rem;
          }

          .about-card {
            padding: 1.5rem 1rem;
            height: 220px;
          }

          .section-title {
            font-size: 2rem;
          }

          .card-title {
            font-size: 1.2rem;
          }

          .card-description {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </>
  );
};

export default About;