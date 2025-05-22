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

    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className={`hero-section ${isLoaded ? 'loaded' : ''}`}>
      {/* Subtle animated background */}
      <div className="bg-grid"></div>
      <div className="bg-gradient"></div>
      
      <div className="container">
        <div className="hero-content">
          <div className="text-content">
            
            
            <h3 className="greeting">Hello, I'm</h3>
            <h1 className="hero-title" data-value="ASHISH JHA">ASHISH JHA</h1>
            
            <div className="role-container">
              <h2 className="role">Computer Science Engineer</h2>
              <span className="specialization">Specializing in AI</span>
            </div>
            
            <p className="description">
              Passionate about building intelligent solutions that make a difference. 
              I create innovative applications using cutting-edge AI technologies.
            </p>
            
          <div className="cta-buttons">
 <button className="btn-primary" onClick={() => window.open('https://github.com/student-Ashishjha', '_blank')}>
   <span>GitHub Portfolio</span>
   <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
     <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1S4.64 3.42 4.5 4.77 3.36 7.29 3.36 9.75c0 5.43 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 19.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
   </svg>
 </button>
 <button className="btn-secondary" onClick={() => window.open('https://www.linkedin.com/in/ashish-jha-b2751a31a', '_blank')}>
   <span>LinkedIn Profile</span>
   <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
     <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
     <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
     <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
   </svg>
 </button>
 
</div>
            
            
          </div>
          
          <div className="image-content">
            <div className="image-container">
              <div className="image-wrapper">
                <img 
                  src={profileImage} 
                  alt="Ashish Jha" 
                  className="profile-image"
                />
              </div>
              <div className="floating-elements">
                
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          background: #0a0a0a;
          color: white;
          overflow: hidden;
          opacity: 0;
          transition: opacity 0.8s ease;
        }
        
        .hero-section.loaded {
          opacity: 1;
        }
        
        .bg-grid {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: grid-move 20s linear infinite;
        }
        
        .bg-gradient {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%);
        }
        
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 2;
        }
        
        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        
        .text-content {
          animation: slideUp 0.8s ease 0.2s both;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .greeting {
          font-size: 1.5rem;
          font-weight: 400;
          color: #888;
          margin: 0 0 0.5rem 0;
        }
        
        .hero-title {
          font-size: clamp(3rem, 8vw, 5rem);
          font-weight: 700;
          margin: 0 0 2rem 0;
          background: linear-gradient(135deg, #fff 0%, #999 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          line-height: 1.1;
        }
        
        .role-container {
          margin-bottom: 1.5rem;
        }
        
        .role {
          font-size: 1.5rem;
          font-weight: 500;
          margin: 0 0 0.5rem 0;
          color: #ccc;
        }
        
        .specialization {
          display: inline-block;
          background: linear-gradient(135deg, #00ff88, #00ccff);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          font-weight: 600;
          font-size: 1.125rem;
        }
        
        .description {
          font-size: 1.125rem;
          line-height: 1.6;
          color: #aaa;
          margin-bottom: 3rem;
          max-width: 500px;
        }
        
        .cta-buttons {
          display: flex;
          gap: 1rem;
          margin-bottom: 3rem;
        }
        
        .btn-primary, .btn-secondary {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.875rem 2rem;
          border-radius: 50px;
          font-weight: 500;
          font-size: 1rem;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #00ff88, #00ccff);
          color: #000;
        }
        
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 255, 136, 0.3);
        }
        
        .btn-secondary {
          background: transparent;
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.4);
        }
        
        .image-content {
          display: flex;
          justify-content: center;
          animation: slideUp 0.8s ease 0.4s both;
        }
        
        .image-container {
          position: relative;
          width: 400px;
          height: 400px;
        }
        
        .image-wrapper {
          width: 300px;
          height: 300px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 10px;
          overflow: hidden;
          background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        
        .profile-image {
          width: 100%;
          height: 115%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .image-wrapper:hover .profile-image {
          transform: scale(1.05);
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
          }
          
          .image-content {
            order: -1;
          }
          
          .image-container {
            width: 300px;
            height: 300px;
          }
          
          .image-wrapper {
            width: 250px;
            height: 250px;
          }
          
          .floating-card {
            display: none;
          }
          
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .btn-primary, .btn-secondary {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }
          
          .description {
            max-width: none;
          }
        }
        
        @media (max-width: 480px) {
          .container {
            padding: 0 1rem;
          }
          
          .hero-title {
            font-size: 2.5rem;
          }
          
          .image-container {
            width: 250px;
            height: 250px;
          }
          
          .image-wrapper {
            width: 200px;
            height: 200px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
