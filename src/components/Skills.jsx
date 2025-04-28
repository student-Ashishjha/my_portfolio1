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
    <section id="skills" className="py-5" style={{ background: '#f8f9fa' }}>
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
                  style={{
                    border: 'none',
                    margin: '0 10px 10px 0',
                    background: activeCategory === category 
                      ? 'linear-gradient(to right, var(--primary-color), var(--secondary-color))'
                      : '#ffffff',
                    color: activeCategory === category ? '#ffffff' : '#333333',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                    transition: 'all 0.3s ease',
                    fontWeight: '500'
                  }}
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
            <div className="skill-hexagon-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="skill-hexagon-wrapper"
                  style={{ 
                    position: 'relative',
                    margin: '15px',
                    animation: `fadeIn 0.5s ease forwards ${index * 0.1}s`,
                    opacity: 0
                  }}
                >
                  <div 
                    className="skill-hexagon"
                    style={{
                      width: '140px',
                      height: '140px',
                      background: '#ffffff',
                      position: 'relative',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: '20px 10px',
                      borderRadius: '10px',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                      transition: 'all 0.3s ease',
                      overflow: 'hidden',
                      textAlign: 'center',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-10px)';
                      e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.12)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
                    }}
                  >
                    <div 
                      className="skill-icon mb-3" 
                      style={{ 
                        fontSize: '2rem',
                        background: `linear-gradient(135deg, ${skill.color}80, ${skill.color})`,
                        color: '#ffffff',
                        width: '60px',
                        height: '60px',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '15px',
                        boxShadow: `0 5px 15px ${skill.color}40`
                      }}
                    >
                      {skill.icon}
                    </div>
                    <h5 className="skill-name" style={{ margin: '0', fontSize: '1rem', fontWeight: '600' }}>{skill.name}</h5>
                    
                    {/* Decorative element that replaces proficiency indicators */}
                    <div className="skill-decoration" style={{
                      width: '40px',
                      height: '3px',
                      background: `linear-gradient(to right, ${skill.color}, transparent)`,
                      marginTop: '10px',
                      borderRadius: '3px'
                    }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Summary */}
        <div className="row justify-content-center mt-5">
          <div className="col-lg-8">
            <div 
              className="skills-summary p-4 rounded"
              style={{
                background: 'linear-gradient(135deg, rgba(var(--primary-rgb), 0.05), rgba(var(--secondary-rgb), 0.05))',
                border: '1px solid rgba(var(--primary-rgb), 0.1)',
                borderRadius: '15px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div className="summary-blob" style={{
                position: 'absolute',
                width: '300px', 
                height: '300px',
                background: 'linear-gradient(135deg, rgba(var(--primary-rgb), 0.1), rgba(var(--secondary-rgb), 0.1))',
                borderRadius: '50%',
                top: '-150px',
                right: '-150px',
                zIndex: '0'
              }}></div>
              <div className="position-relative" style={{ zIndex: '1' }}>
                <h4 className="mb-3">My Learning Journey</h4>
                <p>
                  Continuously expanding my expertise through projects, online courses, and research.
                  Currently exploring advanced techniques in deep learning and natural language processing.
                </p>
                <div className="mt-3 d-flex justify-content-end">
                  <a href="#projects" className="btn btn-sm px-4" style={{
                    background: 'linear-gradient(to right, var(--primary-color), var(--secondary-color))',
                    color: 'white',
                    border: 'none',
                    borderRadius: '30px',
                    padding: '8px 20px'
                  }}>See my work</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .skill-nav {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          margin-bottom: 20px;
        }
        
        @media (max-width: 768px) {
          .skill-hexagon {
            width: 120px !important;
            height: 120px !important;
          }
          
          .skill-icon {
            width: 50px !important;
            height: 50px !important;
          }
        }
        
        :root {
          --primary-color: #6e8efb;
          --secondary-color: #a777e3;
          --primary-rgb: 110, 142, 251;
          --secondary-rgb: 167, 119, 227;
        }
      `}</style>
    </section>
  );
};

export default Skills;