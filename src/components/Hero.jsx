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
      background: 'linear-gradient(135deg, #050816 0%, #0a0d29 50%, #101035 100%)',
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
      {/* <div className="orb orb-1"></div> */}
      {/* <div className="orb orb-2"></div> */}
      {/* <div className="orb orb-3"></div> */}
      
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
            {/* <div className="tech-stack mt-5">
              <div className="tech-icons">
                {['python', 'react', 'tensorflow', 'aws', 'node'].map((tech, i) => (
                  <div key={i} className={`tech-icon tech-${tech}`} style={{animationDelay: `${i * 0.2}s`}}>
                    <span className="tech-label">{tech}</span>
                  </div>
                ))}
              </div> */}
            {/* </div> */}
          </div>
          <div className="col-lg-6 order-lg-2 order-1 text-center mb-5 mb-lg-0">
            <div className="photo-container">
              {/* Hexagon grid background */}
              <div className="hexagon-grid">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className={`hexagon hex-${i + 1}`}></div>
                ))}
              </div>
              
              {/* Glowing orbital lines */}
              {/* <div className="orbital-line line-1"></div>
              <div className="orbital-line line-2"></div>
              <div className="orbital-line line-3"></div> */}
              
              {/* Orbital dots */}
              {[...Array(8)].map((_, i) => (
                <div key={i} className={`orbit-dot dot-${i + 1}`}>
                  <div className="dot-pulse"></div>
                </div>
              ))}
              
              {/* Main photo with enhanced frame */}
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
                {/* <div className="glow-effect"></div> */}
                
                {/* Circling accent lights */}
                {/* <div className="accent-light light-1"></div>
                <div className="accent-light light-2"></div>
                <div className="accent-light light-3"></div> */}
              </div>
              
              {/* Tech badges positioned around photo */}
              {/* <div className="tech-badge badge-ai">AI</div>
              <div className="tech-badge badge-ml">ML</div>
              <div className="tech-badge badge-web">Web</div> */}
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
          background: rgba(255, 255, 255, 0.3);
          box-shadow: 0 0 8px 1px rgba(100, 100, 255, 0.6);
          animation: float-particles 15s infinite linear;
        }
        
        ${[...Array(20)].map((_, i) => `
          .particle-${i + 1} {
            width: ${Math.random() * 5 + 1}px;
            height: ${Math.random() * 5 + 1}px;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            opacity: ${Math.random() * 0.5 + 0.1};
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
          opacity: 0.15;
        }
        
        .orb-1 {
          top: -20%;
          right: -10%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(103, 76, 255, 0.6) 0%, rgba(56, 20, 219, 0.2) 70%);
          animation: pulse-orb 8s infinite alternate;
        }
        
        .orb-2 {
          bottom: -20%;
          left: -10%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(34, 193, 255, 0.6) 0%, rgba(36, 87, 233, 0.2) 70%);
          animation: pulse-orb 12s infinite alternate-reverse;
        }
        
        .orb-3 {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(235, 96, 229, 0.3) 0%, rgba(115, 18, 119, 0.1) 70%);
          animation: pulse-orb 15s infinite alternate;
        }
        
        @keyframes pulse-orb {
          0% {
            transform: scale(1);
            opacity: 0.15;
          }
          100% {
            transform: scale(1.3);
            opacity: 0.25;
          }
        }
        
        /* Text animations */
        .intro-text {
          animation: slideInUp 1s forwards;
          opacity: 0;
          animation-delay: 0.3s;
        }
        
        .text-gradient {
          background: linear-gradient(to right, #4fa2fe 0%, #00d2fe 30%, #a681ee 60%, #f66084 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: gradient-shift 8s infinite;
        }
        
        .highlight-text {
          background: linear-gradient(120deg, #00e7a9 0%, #00c2ff 100%);
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
          background: linear-gradient(120deg, #00e7a9 0%, #00c2ff 100%);
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
        
        @keyframes gradient-shift {
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
        
        /* Enhanced Photo container */
        .photo-container {
          position: relative;
          width: 450px;
          height: 450px;
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
        
        /* Hexagonal grid background */
        .hexagon-grid {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }
        
        .hexagon {
          position: absolute;
          width: 40px;
          height: 23px;
          background-color: rgba(50, 50, 150, 0.05);
          border: 1px solid rgba(100, 100, 255, 0.15);
          transform: rotate(30deg);
          opacity: 0.7;
        }
        
        .hexagon:before,
        .hexagon:after {
          content: '';
          position: absolute;
          width: 0;
          height: 0;
          border-left: 20px solid transparent;
          border-right: 20px solid transparent;
        }
        
        .hexagon:before {
          bottom: 100%;
          border-bottom: 11.5px solid rgba(50, 50, 150, 0.05);
        }
        
        .hexagon:after {
          top: 100%;
          border-top: 11.5px solid rgba(50, 50, 150, 0.05);
        }
        
        ${[...Array(20)].map((_, i) => `
          .hex-${i + 1} {
            top: ${Math.random() * 80 + 10}%;
            left: ${Math.random() * 80 + 10}%;
            transform: rotate(${Math.random() * 60}deg);
            opacity: ${Math.random() * 0.3 + 0.1};
            animation: pulse-hex ${Math.random() * 4 + 3}s infinite alternate ease-in-out;
            animation-delay: ${Math.random() * 3}s;
          }
        `).join('')}
        
        @keyframes pulse-hex {
          0% {
            opacity: 0.1;
          }
          100% {
            opacity: 0.4;
          }
        }
        
        /* Orbital lines */
        .orbital-line {
          position: absolute;
          border-radius: 50%;
          border: 1px dashed rgba(100, 100, 255, 0.2);
          z-index: 2;
          animation: rotate 60s linear infinite;
        }
        
        .line-1 {
          width: 320px;
          height: 320px;
          animation-duration: 40s;
        }
        
        .line-2 {
          width: 380px;
          height: 380px;
          border-style: dotted;
          animation-duration: 60s;
          animation-direction: reverse;
        }
        
        .line-3 {
          width: 440px;
          height: 440px;
          border-style: solid;
          border-width: 1px;
          opacity: 0.1;
          animation-duration: 80s;
        }
        
        /* Orbiting dots */
        .orbit-dot {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: linear-gradient(135deg, #4fa2fe, #00d2fe);
          box-shadow: 0 0 15px rgba(0, 210, 255, 0.8);
          z-index: 3;
        }
        
        .dot-pulse {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: rgba(0, 210, 255, 0.6);
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
        
        ${[...Array(8)].map((_, i) => {
          const angle = (i * 45);
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
        
        /* Enhanced photo frame */
        .photo-frame {
          position: relative;
          width: 280px;
          height: 280px;
          z-index: 10;
        }
        
        .photo-border {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius:50%;
          background: linear-gradient(135deg, #4fa2fe, #9370DB);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px;
          box-shadow: 
            0 10px 30px rgba(79, 162, 254, 0.4),
            0 6px 15px rgba(147, 112, 219, 0.3),
            inset 0 2px 4px rgba(255, 255, 255, 0.3);
          animation: rotate-slow 8s linear infinite;
        }
        
        // @keyframes rotate-slow {
        //   from { transform: rotate(0deg); }
        //   to { transform: rotate(360deg); }
        // }
        
        .photo-inner {
          width: 98%;
          height: 100%;
          border-radius: 80%;
          overflow: hidden;
          border: 4px solid rgba(10, 13, 41, 0.8);
          box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.2);
          position: relative;
          z-index: 2;
          background: #0a0d29;
        }
        
        .profile-image {
          width: 100%;
          height: 120%;
          object-fit: cover;
          transition: transform 0.5s ease;
          filter: contrast(1.1) brightness(1.0);
        }
        
        .photo-inner:hover .profile-image {
          transform: scale(1.09);
        }
        
        // .glow-effect {
        //   position: absolute;
        //   top: -10%;
        //   left: -10%;
        //   width: 120%;
        //   height: 120%;
        //   border-radius: 50%;
        //   background: radial-gradient(circle, rgba(79, 162, 254, 0.5) 0%, rgba(147, 112, 219, 0.3) 50%, rgba(0, 0, 0, 0) 70%);
        //   filter: blur(25px);
        //   z-index: 1;
        //   animation: pulse-glow 4s infinite alternate;
        // }
        
        @keyframes pulse-glow {
          0% {
            opacity: 0.4;
            transform: scale(1);
          }
          100% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }
        
        /* Accent lights */
        .accent-light {
          position: absolute;
          width: 15px;
          height: 15px;
          border-radius: 50%;
          box-shadow: 0 0 20px 5px;
          z-index: 6;
          opacity: 0.7;
          animation: orbit-accent 8s linear infinite;
        }
        
        .light-1 {
          box-shadow: 0 0 20px 5px rgba(0, 210, 255, 0.7);
          animation-duration: 6s;
        }
        
        .light-2 {
          box-shadow: 0 0 20px 5px rgba(147, 112, 219, 0.7);
          animation-duration: 8s;
          animation-delay: 2s;
        }
        
        .light-3 {
          box-shadow: 0 0 20px 5px rgba(246, 96, 132, 0.7);
          animation-duration: 10s;
          animation-delay: 4s;
        }
        
        @keyframes orbit-accent {
          0% {
            transform: rotate(0deg) translateX(160px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(160px) rotate(-360deg);
          }
        }
        
        /* Tech badges */
        .tech-badge {
          position: absolute;
          padding: 8px 15px;
          background: rgba(10, 13, 41, 0.8);
          color: white;
          font-size: 0.9rem;
          font-weight: bold;
          border-radius: 20px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          z-index: 7;
          backdrop-filter: blur(5px);
          border: 1px solid rgba(79, 162, 254, 0.3);
        }
        
       
        
        @keyframes float-badge {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        /* Button styles */
        .btn-glow {
          background: linear-gradient(45deg, #4fa2fe, #9370DB);
          border: none;
          color: white;
          transition: all 0.3s ease;
          position: relative;
          z-index: 1;
          overflow: hidden;
          box-shadow: 0 0 15px rgba(79, 162, 254, 0.5);
        }
        
        .btn-glow::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, #9370DB, #4fa2fe);
          transition: all 0.6s ease;
          z-index: -1;
        }
        
        .btn-glow:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(79, 162, 254, 0.5);
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
          background: linear-gradient(to right, #4fa2fe, #9370DB);
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
          background: rgba(10, 13, 41, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          border: 2px solid rgba(79, 162, 254, 0.3);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          opacity: 0;
          animation: fadeInUp 0.5s forwards;
        }
        
        .tech-icon::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: linear-gradient(135deg, #4fa2fe 0%, #9370DB 100%);
          opacity: 0.2;
          z-index: -1;
        }
        
        .tech-label {
          color: white;
          font-size: 0.7rem;
          font-weight: bold;
          text-transform: uppercase;
        }
        
        @keyframes fadeInUp {
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
            width: 320px;
            height: 320px;
          }
          
          .photo-frame {
            width: 200px;
            height: 200px;
          }
          
          .line-1 {
            width: 240px;
            height: 240px;
          }
          
          .line-2 {
            width: 280px;
            height: 280px;
          }
          
          .line-3 {
            width: 320px;
            height: 320px;
          }
          
          .badge-ai {
            top: 5%;
            right: 10%;
          }
          
          .badge-ml {
            bottom: 15%;
            right: 10%;
          }
          
          .badge-web {
            bottom: 5%;
            left: 10%;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;