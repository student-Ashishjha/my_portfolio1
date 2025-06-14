import { useState } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('technical');
  
  const skillCategories = {
    technical: {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: "🐍", color: "#306998" },
        { name: "C++", icon: "⚙️", color: "#004482" },
        { name: "HTML/CSS", icon: "🎨", color: "#e34c26" },
        { name: "JavaScript", icon: "📜", color: "#f0db4f" },
        { name: "SQL", icon: "🗄️", color: "#336791" },
      ]
    },
    frameworks: {
      title: "Frameworks & Libraries",
      skills: [
        { name: "TensorFlow", icon: "🧠", color: "#ff6f00" },
        { name: "React", icon: "⚛️", color: "#61dafb" },
        { name: "Flask", icon: "🌶️", color: "#000000" },
        { name: "Node.js", icon: "🟢", color: "#68a063" },
      ]
    },
    concepts: {
      title: "Concepts & Methodologies",
      skills: [
        { name: "Data Structures", icon: "🏗️", color: "#6e4a7e" },
        { name: "Algorithms", icon: "🧮", color: "#4a7e6e" },
        { name: "Machine Learning", icon: "🤖", color: "#7e4a4a" },
        { name: "Deep Learning", icon: "🧿", color: "#4a4a7e" },
      ]
    },
    tools: {
      title: "Tools & Platforms",
      skills: [
        { name: "VS Code", icon: "📝", color: "#0078d7" },
        { name: "PyCharm", icon: "🐍", color: "#21d789" },
        { name: "Jupyter", icon: "📓", color: "#f37626" },
        { name: "Git", icon: "🔄", color: "#f34f29" },
        { name: "GitHub", icon: "🐙", color: "#24292e" },
        { name: "MongoDB", icon: "🍃", color: "#47a248" },
      ]
    }
  };

  return (
    <>
      <section id="skills" className="skills-section">
        {/* Animated background shapes */}
        <div className="bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>

        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="section-title mb-3">Technical Expertise</h2>
              <p className="lead mb-5">
                My toolkit for building innovative solutions across multiple domains
              </p>
            </div>
          </div>

          {/* Category Navigation */}
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8">
              <div className="skill-nav">
                {Object.keys(skillCategories).map(category => (
                  <button
                    key={category}
                    className={`skill-nav-item px-4 py-2 rounded-pill ${activeCategory === category ? 'active' : ''}`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {skillCategories[category].title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Skill Hexagons */}
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="skill-hexagon-container">
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="skill-hexagon-wrapper"
                    style={{ 
                      animation: `fadeIn 0.5s ease forwards ${index * 0.1}s`,
                      opacity: 0
                    }}
                  >
                    <div 
                      className="skill-hexagon"
                      style={{
                        '--skill-color': skill.color
                      }}
                    >
                      <div 
                        className="skill-icon mb-3" 
                        style={{ 
                          background: `linear-gradient(135deg, ${skill.color}80, ${skill.color})`,
                          boxShadow: `0 5px 15px ${skill.color}40`
                        }}
                      >
                        {skill.icon}
                      </div>
                      <h5 className="skill-name">{skill.name}</h5>
                      
                      {/* Decorative element that replaces proficiency indicators */}
                      <div 
                        className="skill-decoration"
                        style={{
                          background: `linear-gradient(to right, ${skill.color}, transparent)`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Summary */}
          <div className="row justify-content-center mt-5">
            <div className="col-lg-8">
              <div className="skills-summary">
                <div className="summary-blob"></div>
                <div className="position-relative">
                  <h4 className="mb-3">My Learning Journey</h4>
                  <p>
                    Continuously expanding my expertise through projects, online courses, and research.
                    Currently exploring advanced techniques in deep learning and natural language processing.
                  </p>
                  <div className="mt-3 d-flex justify-content-end">
                    <a href="#projects" className="btn btn-sm px-4 see-work-btn">See my work</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .skills-section {
          min-height: 100vh;
          background: linear-gradient(135deg, 
            #1a1a2e 0%, 
            #16213e 25%, 
            #0f3460 50%, 
            #533483 75%, 
            #e43f5a 100%);
          position: relative;
          overflow: hidden;
          padding: 6rem 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
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
        }

        .row {
          display: flex;
          flex-wrap: wrap;
          margin: 0 -15px;
        }

        .justify-content-center {
          justify-content: center;
        }

        .mb-5 {
          margin-bottom: 3rem;
        }

        .mt-5 {
          margin-top: 3rem;
        }

        .mb-3 {
          margin-bottom: 1rem;
        }

        .mt-3 {
          margin-top: 1rem;
        }

        .col-lg-8, .col-lg-10 {
          padding: 0 15px;
        }

        .col-lg-8 {
          flex: 0 0 66.666667%;
          max-width: 66.666667%;
        }

        .col-lg-10 {
          flex: 0 0 83.333333%;
          max-width: 83.333333%;
        }

        .text-center {
          text-align: center;
        }

        .d-flex {
          display: flex;
        }

        .justify-content-end {
          justify-content: flex-end;
        }

        .position-relative {
          position: relative;
          z-index: 1;
        }

        .section-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          color: white;
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
          font-weight: 500;
          line-height: 1.6;
        }

        .skill-nav {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          margin-bottom: 20px;
        }

        .skill-nav-item {
          border: none;
          margin: 0 10px 10px 0;
          border-radius: 30px;
          padding: 8px 20px;
          transition: all 0.3s ease;
          font-weight: 500;
          background: rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .skill-nav-item:hover {
          background: rgba(0, 212, 255, 0.2);
          color: white;
          border-color: rgba(0, 212, 255, 0.3);
          transform: translateY(-2px);
        }

        .skill-nav-item.active {
          background: linear-gradient(45deg, #e43f5a, #00d4ff);
          color: white;
          border-color: transparent;
          box-shadow: 0 5px 15px rgba(0, 212, 255, 0.3);
        }

        .skill-hexagon-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
        }

        .skill-hexagon-wrapper {
          position: relative;
          margin: 15px;
        }

        .skill-hexagon {
          width: 140px;
          height: 140px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 20px 10px;
          border-radius: 20px;
          transition: all 0.3s ease;
          overflow: hidden;
          text-align: center;
          cursor: pointer;
        }

        .skill-hexagon:hover {
          transform: translateY(-10px);
          border-color: rgba(0, 212, 255, 0.3);
          box-shadow: 0 20px 40px rgba(0, 212, 255, 0.2);
        }

        .skill-icon {
          font-size: 2rem;
          color: #ffffff;
          width: 60px;
          height: 60px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 15px;
        }

        .skill-name {
          margin: 0;
          font-size: 1rem;
          font-weight: 600;
          color: white;
        }

        .skill-decoration {
          width: 40px;
          height: 3px;
          margin-top: 10px;
          border-radius: 3px;
        }

        .skills-summary {
          padding: 2rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          position: relative;
          overflow: hidden;
          color: white;
        }

        .summary-blob {
          position: absolute;
          width: 300px; 
          height: 300px;
          background: rgba(0, 212, 255, 0.1);
          border-radius: 50%;
          top: -150px;
          right: -150px;
          z-index: 0;
        }

        .skills-summary h4 {
          color: white;
          font-weight: 700;
        }

        .skills-summary p {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
        }

        .see-work-btn {
          background: linear-gradient(45deg, #e43f5a, #00d4ff);
          color: white;
          border: none;
          border-radius: 30px;
          padding: 8px 20px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .see-work-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0, 212, 255, 0.3);
          color: white;
          text-decoration: none;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
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
        @media (max-width: 768px) {
          .skills-section {
            padding: 4rem 0;
          }

          .container {
            padding: 0 1rem;
          }

          .col-lg-8, .col-lg-10 {
            flex: 0 0 100%;
            max-width: 100%;
          }

          .skill-hexagon {
            width: 120px !important;
            height: 120px !important;
          }
          
          .skill-icon {
            width: 50px !important;
            height: 50px !important;
          }

          .section-title {
            font-size: 2.5rem;
          }

          .skills-summary {
            padding: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 1rem;
          }

          .skills-summary {
            padding: 1rem;
          }

          .section-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </>
  );
};

export default Skills;