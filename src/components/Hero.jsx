import { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval = null;
    
    const h1Element = document.querySelector(".hero-title");
    
    if (h1Element) {
      let iteration = 0;
      
      clearInterval(interval);
      
      interval = setInterval(() => {
        h1Element.innerText = h1Element.dataset.value
          .split("")
          .map((letter, index) => {
            if(index < iteration) {
              return h1Element.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)]
          })
          .join("");
        
        if(iteration >= h1Element.dataset.value.length){ 
          clearInterval(interval);
        }
        
        iteration += 1 / 3;
      }, 30);
    }
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="d-flex align-items-center min-vh-100" style={{
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-1 order-2 text-lg-start text-center mt-5 mt-lg-0">
            <h3 className="mb-3">Hello, I'm</h3>
            <h1 className="hero-title display-3 fw-bold mb-4" data-value="ASHISH JHA">ASHISH JHA</h1>
            <h2 className="mb-4">Computer Science Engineer <span className="gradient-text">Specializing in AI</span></h2>
            <p className="lead mb-5">Passionate about building intelligent solutions that make a difference.</p>
            <div className="d-flex gap-3 justify-content-lg-start justify-content-center">
              <a href="#contact" className="btn btn-gradient btn-lg px-4 py-2">Contact Me</a>
              <a href="#projects" className="btn btn-outline-dark btn-lg px-4 py-2">View Projects</a>
            </div>
          </div>
          <div className="col-lg-6 order-lg-2 order-1 text-center mb-5 mb-lg-0">
            <div className="photo-container">
              {/* Orbital rings */}
              <div className="orbit-ring ring-1"></div>
              <div className="orbit-ring ring-2"></div>
              <div className="orbit-ring ring-3"></div>
              
              {/* Orbital dots */}
              <div className="orbit-dot dot-1"></div>
              <div className="orbit-dot dot-2"></div>
              <div className="orbit-dot dot-3"></div>
              <div className="orbit-dot dot-4"></div>
              <div className="orbit-dot dot-5"></div>
              <div className="orbit-dot dot-6"></div>
              
              {/* Main photo */}
              <div className="photo-frame">
                <div className="photo-border">
                  <div className="photo-inner">
                    <img 
                      src="/src/assets/profile-placeholder.jpg" 
                      alt="Ashish Jha" 
                      className="profile-image"
                    />
                  </div>
                </div>
              </div>
              
              {/* Tech skill badges */}
              {/* <div className="skill-badge ai-badge">
                <span>AI</span>
              </div>
              <div className="skill-badge ml-badge">
                <span>ML</span>
              </div>
              <div className="skill-badge dev-badge">
                <span>Dev</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .photo-container {
          position: relative;
          width: 420px;
          height: 420px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .photo-frame {
          position: relative;
          width: 280px;
          height: 280px;
          z-index: 5;
        }
        
        .photo-border {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: linear-gradient(135deg, #6e8efb, #a777e3);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6px;
          box-shadow: 
            0 10px 25px rgba(110, 142, 251, 0.4),
            0 6px 12px rgba(167, 119, 227, 0.3),
            inset 0 2px 4px rgba(255, 255, 255, 0.5);
          animation: pulse 3s infinite ease-in-out;
        }
        
        .photo-inner {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          background: white;
          border: 4px solid white;
          box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.1);
        }
        
        .profile-image {
          width: 80%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .photo-inner:hover .profile-image {
          transform: scale(1.08);
        }
        
        /* Orbit rings */
        .orbit-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px dashed rgba(110, 142, 251, 0.3);
          animation: rotate 60s linear infinite;
        }
        
        .ring-1 {
          width: 340px;
          height: 340px;
          animation-duration: 40s;
        }
        
        .ring-2 {
          width: 380px;
          height: 380px;
          animation-duration: 60s;
          animation-direction: reverse;
        }
        
        .ring-3 {
          width: 4500px;
          height: 450px;
          animation-duration: 80s;
        }
        
        /* Orbiting dots */
        .orbit-dot {
          position: absolute;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6e8efb, #a777e3);
          box-shadow: 0 0 10px rgba(110, 142, 251, 0.5);
          z-index: 1;
        }
        
        .dot-1 {
          top: 30px;
          left: 50%;
          animation: orbit-1 15s linear infinite;
        }
        
        .dot-2 {
          top: 50%;
          right: 30px;
          animation: orbit-2 20s linear infinite;
        }
        
        .dot-3 {
          bottom: 30px;
          left: 50%;
          animation: orbit-3 25s linear infinite;
        }
        
        .dot-4 {
          top: 50%;
          left: 30px;
          animation: orbit-4 18s linear infinite;
        }
        
        .dot-5 {
          top: 80px;
          right: 80px;
          animation: orbit-5 22s linear infinite;
          animation-delay: 2s;
        }
        
        .dot-6 {
          bottom: 80px;
          left: 80px;
          animation: orbit-6 30s linear infinite;
          animation-delay: 5s;
        }
        
        /* Skill badges */
        .skill-badge {
          position: absolute;
          padding: 8px 15px;
          background: white;
          border-radius: 20px;
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
          z-index: 10;
          font-weight: bold;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }
        
        .skill-badge:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
        }
        
        // .ai-badge {
        //   top: 60px;
        //   right: 40px;
        //   background: linear-gradient(to right, rgba(110, 142, 251, 0.2), rgba(167, 119, 227, 0.2));
        //   border-color: #6e8efb;
        //   color: #6e8efb;
        //   animation: float 4s ease-in-out infinite;
        // }
        
        // .ml-badge {
        //   bottom: 60px;
        //   right: 70px;
        //   background: linear-gradient(to right, rgba(167, 119, 227, 0.2), rgba(110, 142, 251, 0.2));
        //   border-color: #a777e3;
        //   color: #a777e3;
        //   animation: float 4s ease-in-out infinite 1s;
        // }
        
        // .dev-badge {
        //   bottom: 100px;
        //   left: 50px;
        //   background: linear-gradient(to right, rgba(110, 142, 251, 0.2), rgba(167, 119, 227, 0.2));
        //   border-color: #6e8efb;
        //   color: #6e8efb;
        //   animation: float 4s ease-in-out infinite 2s;
        // }
        
        /* Animations */
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes orbit-1 {
          from { transform: rotate(0deg) translateX(170px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(170px) rotate(-360deg); }
        }
        
        @keyframes orbit-2 {
          from { transform: rotate(60deg) translateX(190px) rotate(-60deg); }
          to { transform: rotate(420deg) translateX(190px) rotate(-420deg); }
        }
        
        @keyframes orbit-3 {
          from { transform: rotate(120deg) translateX(170px) rotate(-120deg); }
          to { transform: rotate(480deg) translateX(170px) rotate(-480deg); }
        }
        
        @keyframes orbit-4 {
          from { transform: rotate(180deg) translateX(190px) rotate(-180deg); }
          to { transform: rotate(540deg) translateX(190px) rotate(-540deg); }
        }
        
        @keyframes orbit-5 {
          from { transform: rotate(240deg) translateX(160px) rotate(-240deg); }
          to { transform: rotate(600deg) translateX(160px) rotate(-600deg); }
        }
        
        @keyframes orbit-6 {
          from { transform: rotate(300deg) translateX(160px) rotate(-300deg); }
          to { transform: rotate(660deg) translateX(160px) rotate(-660deg); }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            box-shadow: 
              0 10px 25px rgba(110, 142, 251, 0.4),
              0 6px 12px rgba(167, 119, 227, 0.3),
              inset 0 2px 4px rgba(255, 255, 255, 0.5);
          }
          50% {
            box-shadow: 
              0 15px 30px rgba(110, 142, 251, 0.6),
              0 8px 15px rgba(167, 119, 227, 0.4),
              inset 0 2px 4px rgba(255, 255, 255, 0.5);
          }
        }
        
        .gradient-text {
          background: linear-gradient(to right, #6e8efb, #a777e3);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .btn-gradient {
          background: linear-gradient(to right, #6e8efb, #a777e3);
          border: none;
          color: white;
          transition: all 0.3s ease;
        }
        
        .btn-gradient:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(110, 142, 251, 0.3);
        }
      `}</style>
    </section>
  );
};

export default Hero;