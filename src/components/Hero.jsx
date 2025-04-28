import { useEffect, useState } from 'react';
import profileImage from '../assets/profile-placeholder.jpg';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Text scramble animation
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

    // Trigger animations after component mounts
    setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className={`d-flex align-items-center min-vh-100 ${isLoaded ? 'section-loaded' : ''}`} style={{
      background: 'linear-gradient(135deg, #0c0f2d 0%, #1a1f4b 50%, #2a1a5e 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background particles */}
      <div className="particles-container">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`}></div>
        ))}
      </div>
      
      {/* Glowing background orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>
      
      <div className="container position-relative">
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-1 order-2 text-lg-start text-center mt-5 mt-lg-0">
            <h3 className="mb-3 text-light intro-text">Hello, I'm</h3>
            <h1 className="hero-title display-3 fw-bold mb-4 text-gradient" data-value="ASHISH JHA">ASHISH JHA</h1>
            <h2 className="mb-4 text-light">Computer Science Engineer <span className="highlight-text">Specializing in AI</span></h2>
            <p className="lead mb-5 text-light description-text">Passionate about building intelligent solutions that make a difference.</p>
            <div className="d-flex gap-3 justify-content-lg-start justify-content-center">
              <a href="#contact" className="btn btn-glow btn-lg px-4 py-2">Contact Me</a>
              <a href="#projects" className="btn btn-outline-light btn-hover-glow btn-lg px-4 py-2">View Projects</a>
            </div>
            
            {/* Tech stack icons */}
            <div className="tech-stack mt-5">
              <div className="tech-icons">
                {['python', 'react', 'tensorflow', 'aws', 'node'].map((tech, i) => (
                  <div key={i} className={`tech-icon tech-${tech}`} style={{animationDelay: `${i * 0.2}s`}}>
                    <span className="tech-label">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-lg-2 order-1 text-center mb-5 mb-lg-0">
            <div className="photo-container">
              {/* Orbital rings */}
              {/* <div className="orbit-ring ring-1"></div>
              <div className="orbit-ring ring-2"></div>
              <div className="orbit-ring ring-3"></div> */}
              
              {/* Orbital dots */}
              {[...Array(12)].map((_, i) => (
                <div key={i} className={`orbit-dot dot-${i + 1}`}>
                  <div className="dot-pulse"></div>
                </div>
              ))}
              
              {/* Main photo - now circular */}
              <div className="photo-frame">
                <div className="photo-border">
                  <div className="photo-inner">
                    <img 
                      src={profileImage} 
                      alt="Ashish Jha" 
                      className="profile-image"
                    />
                  </div>
                </div>
                <div className="glow-effect"></div>
              </div>
              
              {/* Badges removed */}
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .section-loaded {
          animation: fadeIn 1s ease-in-out forwards;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        /* Particles background */
        .particles-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
        }
        
        .particle {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          box-shadow: 0 0 10px 2px rgba(100, 100, 255, 0.8);
          animation: float-particles 15s infinite linear;
        }
        
        ${[...Array(20)].map((_, i) => `
          .particle-${i + 1} {
            width: ${Math.random() * 8 + 2}px;
            height: ${Math.random() * 8 + 2}px;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            opacity: ${Math.random() * 0.5 + 0.3};
            animation-duration: ${Math.random() * 20 + 10}s;
            animation-delay: ${Math.random() * 5}s;
          }
        `).join('')}
        
        @keyframes float-particles {
          0% {
            transform: translateY(100vh) translateX(-10vw);
          }
          100% {
            transform: translateY(-10vh) translateX(10vw);
          }
        }
        
        /* Background orbs */
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          z-index: 0;
          opacity: 0.4;
        }
        
        .orb-1 {
          top: -20%;
          right: -10%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(123, 66, 255, 0.8) 0%, rgba(56, 20, 219, 0.3) 70%);
          animation: pulse-orb 8s infinite alternate;
        }
        
        .orb-2 {
          bottom: -20%;
          left: -10%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(64, 223, 255, 0.8) 0%, rgba(36, 107, 233, 0.3) 70%);
          animation: pulse-orb 12s infinite alternate-reverse;
        }
        
        .orb-3 {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(255, 126, 249, 0.4) 0%, rgba(125, 18, 119, 0.1) 70%);
          animation: pulse-orb 15s infinite alternate;
        }
        
        @keyframes pulse-orb {
          0% {
            transform: scale(1);
            opacity: 0.3;
          }
          100% {
            transform: scale(1.3);
            opacity: 0.5;
          }
        }
        
        /* Text animations */
        .intro-text {
          animation: slideInUp 1s forwards;
          opacity: 0;
          animation-delay: 0.3s;
        }
        
        .text-gradient {
          background: linear-gradient(to right, #4facfe 0%, #00f2fe 30%, #a6c1ee 60%, #f68084 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: gradient-shift 8s infinite;
        }
        
        .highlight-text {
          background: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          position: relative;
          display: inline-block;
          animation: gradient-shift 5s infinite;
        }
        
        .highlight-text::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
        }
        
        .description-text {
          animation: slideInUp 1s forwards;
          opacity: 0;
          animation-delay: 0.6s;
        }
        
        @keyframes slideInUp {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        // @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        /* Photo container */
        .photo-container {
          position: relative;
          width: 420px;
          height: 420px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: floatContainer 6s ease-in-out infinite;
        }
        
        @keyframes floatContainer {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        
        // .photo-frame {
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
          position: relative;
          z-index: 2;
        }
        
        .profile-image {
          width: 85%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .photo-inner:hover .profile-image {
          transform: scale(1.08);
        }
        
        .glow-effect {
          position: absolute;
          top: -5%;
          left: -5%;
          width: 110%;
          height: 110%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(110, 142, 251, 0.8) 0%, rgba(167, 119, 227, 0.4) 50%, rgba(0, 0, 0, 0) 70%);
          filter: blur(25px);
          z-index: 1;
          animation: pulse-glow 4s infinite alternate;
        }
        
        // @keyframes pulse-glow {
          0% {
            opacity: 0.6;
            transform: scale(1);
          }
          100% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }
        
        /* Orbit rings */
        .orbit-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(110, 142, 251, 0.3);
          z-index: 2;
          animation: rotate 60s linear infinite;
          box-shadow: 0 0 20px rgba(110, 142, 251, 0.2);
        }
        
        .ring-1 {
          width: 340px;
          height: 340px;
          border-width: 2px;
          border-style: solid;
          border-image: linear-gradient(to right, #6e8efb, #a777e3) 1;
          animation-duration: 40s;
        }
        
        .ring-2 {
          width: 380px;
          height: 380px;
          border-width: 2px;
          border-style: dashed;
          border-color: rgba(167, 119, 227, 0.4);
          animation-duration: 60s;
          animation-direction: reverse;
        }
        
        .ring-3 {
          width: 450px;
          height: 450px;
          border-width: 1px;
          border-style: dotted;
          border-color: rgba(110, 142, 251, 0.4);
          animation-duration: 80s;
        }
        
        // /* Orbiting dots */
        .orbit-dot {
          position: absolute;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6e8efb, #a777e3);
          box-shadow: 0 0 15px rgba(110, 142, 251, 0.8);
          z-index: 3;
        }
        
        // .dot-pulse {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: rgba(110, 142, 251, 0.6);
          animation: dot-pulse 2s infinite;
        }
        
        @keyframes dot-pulse {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.8;
          }
          70% {
            opacity: 0;
          }
          100% {
            transform: translate(-50%, -50%) scale(2.5);
            opacity: 0;
          }
        }
        
        ${[...Array(12)].map((_, i) => {
          const angle = (i * 30);
          const delay = i * 0.5;
          const radius = 170 + (i % 3) * 20;
          return `
            .dot-${i + 1} {
              animation: orbit-${i + 1} ${15 + i % 5 * 2}s linear infinite;
              animation-delay: ${delay}s;
            }
            
            @keyframes orbit-${i + 1} {
              from { transform: rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg); }
              to { transform: rotate(${angle + 360}deg) translateX(${radius}px) rotate(-${angle + 360}deg); }
            }
          `;
        }).join('')}
        
        /* Button styles */
        .btn-glow {
          background: linear-gradient(45deg, #6e8efb, #a777e3);
          border: none;
          color: white;
          transition: all 0.3s ease;
          position: relative;
          z-index: 1;
          overflow: hidden;
          box-shadow: 0 0 15px rgba(110, 142, 251, 0.5);
        }
        
        .btn-glow::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, #a777e3, #6e8efb);
          transition: all 0.6s ease;
          z-index: -1;
        }
        
        .btn-glow:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(110, 142, 251, 0.5);
        }
        
        .btn-glow:hover::before {
          left: 0;
        }
        
        .btn-hover-glow {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          z-index: 1;
        }
        
        .btn-hover-glow::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(to right, #6e8efb, #a777e3);
          transition: all 0.3s ease;
          transform: scaleX(0);
          transform-origin: left;
        }
        
        .btn-hover-glow:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(255, 255, 255, 0.1);
        }
        
        .btn-hover-glow:hover::after {
          transform: scaleX(1);
        }
        
        /* Tech stack section */
        .tech-stack {
          opacity: 0;
          animation: fadeIn 1s forwards;
          animation-delay: 1.2s;
        }
        
        .tech-icons {
          display: flex;
          gap: 15px;
          justify-content: center;
          margin-top: 15px;
        }
        
        @media (min-width: 992px) {
          .tech-icons {
            justify-content: flex-start;
          }
        }
        
        .tech-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          border: 2px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          opacity: 0;
          animation: fadeInUp 0.5s forwards;
        }
        
        .tech-icon::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: linear-gradient(135deg, #6e8efb 0%, #a777e3 100%);
          opacity: 0.5;
          z-index: -1;
        }
        
        .tech-label {
          color: white;
          font-size: 0.7rem;
          font-weight: bold;
          text-transform: uppercase;
        }
        
        // @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Animation for rotation */
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        /* Responsive fixes */
        @media (max-width: 576px) {
          .photo-container {
            width: 300px;
            height: 300px;
          }
          
          // .photo-frame {
            width: 200px;
            height: 200px;
          }
          
          // .ring-1 {
            width: 240px;
            height: 240px;
          }
          
          .ring-2 {
            width: 270px;
            height: 270px;
          }
          
          .ring-3 {
            width: 300px;
            height: 300px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;