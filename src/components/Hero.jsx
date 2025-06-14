import { useEffect, useState } from 'react';
import profilePlaceholder from '../assets/profile-placeholder.jpg';

const Hero = ({ onNavigate }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);

  // Enhanced navigation handler with proper routing
  const handleNavigation = (sectionId) => {
    // If parent component provided navigation handler, use it for routing
    if (onNavigate && typeof onNavigate === 'function') {
      onNavigate(sectionId);
      return;
    }

    // Fallback: try to scroll to existing element on the same page
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // For contact section, trigger routing to Contact.jsx
      if (sectionId === 'contact') {
        // Dispatch custom event for parent to handle routing to Contact.jsx
        window.dispatchEvent(new CustomEvent('navigateToContact', { 
          detail: { component: 'Contact', route: '/contact' }
        }));
      } else {
        // For other sections, use hash routing as fallback
        window.location.hash = sectionId;
        
        // Dispatch general navigation event
        window.dispatchEvent(new CustomEvent('navigate', { detail: sectionId }));
      }
    }
  };

  // CV download handler
  const downloadCV = () => {
    const cvContent = `
ASHISH JHA
Computer Science Engineer

Contact Information:
Email: ashish.jha@example.com
Phone: +91-XXXXXXXXXX
GitHub: https://github.com/student-Ashishjha
LinkedIn: https://www.linkedin.com/in/ashish-jha-b2751a31a
Location: India

SUMMARY:
Passionate Computer Science Engineer with expertise in AI/ML and software development.
Currently working as a Software Developer from India, focused on creating innovative solutions
that bridge the gap between technology and real-world problems.




EDUCATION:
Bachelor of Technology in Computer Science Engineering
• Specialized in Artificial Intelligence and Machine Learning
• Relevant coursework: Data Structures, Algorithms, Software Engineering, Database Systems
• Academic projects focused on AI/ML applications and web development

PROJECTS:
• AI-powered web applications with real-time data processing
• Machine learning models for predictive analysis and classification
• Full-stack web development projects with modern tech stack
• Open-source contributions to community projects



LANGUAGES:
• English (Fluent)
• Hindi (Native)

INTERESTS:
• Artificial Intelligence and Machine Learning Research
• Open Source Development
• Technology Innovation and Startups
• Continuous Learning and Skill Development
    `;

    // Create and download the CV file
    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Ashish_Jha_CV.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <>
      <div className={`hero ${isLoaded ? 'loaded' : ''}`} id="home">
        {/* Animated background shapes */}
        <div className="bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>

        {/* Navigation */}
        <nav className="nav">
          <div className="nav-brand">
            <div className="logo">AJ</div>
            <span>Ashish Jha</span>
          </div>
          <div className="nav-links">
            <a href="#home" onClick={(e) => { e.preventDefault(); handleNavigation('home'); }}>Home</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); handleNavigation('about'); }}>About</a>
            <a href="#projects" onClick={(e) => { e.preventDefault(); handleNavigation('projects'); }}>Projects</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavigation('contact'); }}>Contact</a>
          </div>
        </nav>

        {/* Main content */}
        <div className="content">
          <div className="text-section">
            <p className="intro">👋 Hello, I'm</p>
            <h1 className="name">Ashish Jha</h1>
            <h2 className="role">Computer Science Engineer</h2>
            <p className="description">
              Passionate about AI/ML and creating innovative solutions. 
              I want to build intelligent systems that solve real-world problems and make a positive impact.
            </p>
            
            <div className="buttons">
              <button 
                className="btn-primary"
                onClick={() => handleNavigation('projects')}
              >
                View My Work
              </button>
              <button 
                className="btn-secondary"
                onClick={downloadCV}
              >
                Download CV
              </button>
            </div>
          </div>

          <div className="image-section">
            <div className="profile-card">
              <div className="profile-bg"></div>
              <div className="profile-placeholder">
                {/* Professional profile image */}
                <img 
                  src={profilePlaceholder} 
                  alt="Ashish Jha "
                  className="profile-image"
                  onError={(e) => {
                    // Fallback to avatar icon if image fails to load
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="avatar-icon" style={{ display: 'none' }}>
                  <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
              </div>
              <div className="profile-glow"></div>
            </div>
          </div>
        </div>

        {/* Social links */}
        <div className="social-links">
          <a href="https://github.com/student-Ashishjha" target="_blank" rel="noopener noreferrer" title="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/ashish-jha-b2751a31a" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavigation('contact'); }} title="Contact">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
        </div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          background: linear-gradient(15deg, 
            #1a1a2e 10%, 
            #26213e 25%, 
            #1f3460 50%, 
            #533483 75%, 
            #e43f5a 100%);
          position: relative;
          overflow: hidden;
          opacity: 0;
          transition: all 1s ease;
          display: flex;
          flex-direction: column;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .hero.loaded {
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

        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 2rem 3rem;
          position: relative;
          z-index: 10;
        }

        .nav-brand {
          display: flex;
          align-items: center;
          gap: 1rem;
          color: white;
          font-weight: 600;
          font-size: 1.2rem;
        }

        .logo {
          width: 40px;
          height: 40px;
          background: linear-gradient(45deg, #e43f5a, #00d4ff);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: 1rem;
          box-shadow: 0 5px 15px rgba(228, 63, 90, 0.4);
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-links a {
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
          cursor: pointer;
        }

        .nav-links a:hover {
          color: #00d4ff;
          transform: translateY(-2px);
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(45deg, #e43f5a, #00d4ff);
          transition: width 0.3s ease;
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        .content {
          flex: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          max-width: 1500px;
          margin: 0 auto;
          padding: 0 3rem;
          position: relative;
          z-index: 5;
        }

        .text-section {
          animation: slideInLeft 0.8s ease-out;
        }

        .intro {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 1rem;
          font-weight: 500;
        }

        .name {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          color: white;
          margin-bottom: 0.5rem;
          background: linear-gradient(45deg, #e43f5a, #00d4ff, #7209b7);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 3s ease-in-out infinite;
        }

        .role {
          font-size: 1.5rem;
          color: rgba(255, 255, 255, 0.8);
          font-weight: 600;
          margin-bottom: 2rem;
        }

        .description {
          font-size: 1.1rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 3rem;
          max-width: 500px;
        }

        .buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .btn-primary, .btn-secondary {
          padding: 1rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1rem;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .btn-primary {
          background: linear-gradient(45deg, #e43f5a, #00d4ff);
          color: white;
          box-shadow: 0 10px 30px rgba(228, 63, 90, 0.4);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(228, 63, 90, 0.6);
          background: linear-gradient(45deg, #00d4ff, #e43f5a);
        }

        .btn-secondary {
          background: transparent;
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(10px);
        }

        .btn-secondary:hover {
          background: rgba(0, 212, 255, 0.1);
          border-color: #00d4ff;
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0, 212, 255, 0.3);
        }

        .image-section {
          display: flex;
          justify-content: center;
          animation: slideInRight 0.8s ease-out;
        }

        .profile-card {
          position: relative;
          width: 250px;
          height: 250px;
        }

        .profile-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, #e43f5a, #00d4ff, #7209b7);
          border-radius: 50%;
          padding: 4px;
          animation: rotate 8s linear infinite;
        }

        .profile-placeholder {
          position: absolute;
          top: 4px;
          left: 4px;
          width: calc(100% - 8px);
          height: calc(100% - 8px);
          border-radius: 50%;
          background: linear-gradient(135deg, #1a1a2e, #16213e);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.5s ease;
          overflow: hidden;
        }

        .profile-placeholder:hover {
          transform: scale(1.05);
        }

        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          transition: transform 0.3s ease;
        }

        .profile-placeholder:hover .profile-image {
          transform: scale(1.1);
        }

        .avatar-icon {
          color: rgba(255, 255, 255, 0.6);
          transition: color 0.3s ease;
        }

        .profile-placeholder:hover .avatar-icon {
          color: #00d4ff;
        }

        .profile-glow {
          position: absolute;
          inset: -20px;
          background: radial-gradient(circle, rgba(228, 63, 90, 0.3) 0%, transparent 70%);
          border-radius: 50%;
          animation: pulse 3s ease-in-out infinite;
          pointer-events: none;
        }

        .social-links {
          position: absolute;
          bottom: 2rem;
          right: 3rem;
          display: flex;
          gap: 1rem;
          z-index: 10;
        }

        .social-links a {
          width: 48px;
          height: 48px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .social-links a:hover {
          background: rgba(0, 212, 255, 0.2);
          border-color: #00d4ff;
          transform: translateY(-3px);
          color: #00d4ff;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .nav {
            padding: 1.5rem 2rem;
            flex-direction: column;
            gap: 1rem;
          }

          .nav-links {
            gap: 1.5rem;
          }

          .content {
            grid-template-columns: 1fr;
            gap: 3rem;
            padding: 0 2rem;
            text-align: center;
          }

          .image-section {
            order: -1;
          }

          .profile-card {
            width: 280px;
            height: 280px;
          }

          .buttons {
            justify-content: center;
          }

          .social-links {
            position: static;
            justify-content: center;
            margin-top: 2rem;
          }

          .bg-shapes .shape {
            opacity: 0.3;
          }
        }

        @media (max-width: 480px) {
          .nav {
            padding: 1rem;
          }

          .content {
            padding: 0 1rem;
          }

          .name {
            font-size: 2.5rem;
          }

          .profile-card {
            width: 220px;
            height: 220px;
          }

          .buttons {
            flex-direction: column;
            align-items: center;
          }

          .btn-primary, .btn-secondary {
            width: 100%;
            max-width: 280px;
          }
        }
      `}</style>
    </>
  );
};

export default Hero;