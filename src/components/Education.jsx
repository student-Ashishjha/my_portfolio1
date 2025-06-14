import { useState } from 'react';

const Education = () => {
  const [activeTab, setActiveTab] = useState('education');
  
  const education = [
    {
      id: 1,
      degree: "B.Tech in Computer Science (AI)",
      institution: "BITM",
      period: "2022-2026",
      score: "CGPA: 8.77",
      icon: "🎓",
      color: "#7F5AF0",
      status: "current"
    },
    {
      id: 2,
      degree: "Pre University",
      institution: "JAV/JPUC",
      period: "2019-2021",
      score: "Percentage: 96.83%",
      icon: "📚",
      color: "#2CB67D",
      status: "completed"
    },
    {
      id: 3,
      degree: "SSLC",
      institution: "JAV/JPUC",
      period: "2018-2019",
      score: "Percentage: 88.96%",
      icon: "🏫",
      color: "#FF8E3C",
      status: "completed"
    },
  ];

  const certifications = [
    { id: 1, name: "Python Pro Bootcamp", provider: "Udemy", icon: "🐍", color: "#306998" },
    { id: 2, name: "Data Structures and Algorithms in Python", provider: "EZTS", icon: "🏗️", color: "#4a7e6e" },
    { id: 3, name: "Machine Learning", provider: "Infosys Springboard", icon: "🤖", color: "#7e4a4a" },
    { id: 4, name: "CSS and Javascript Course", provider: "Udemy", icon: "📜", color: "#f0db4f" },
    { id: 5, name: "FIGMA", provider: "Udemy", icon: "🎨", color: "#e34c26" },
  ];

  return (
    <>
      <section id="education" className="education-section">
        {/* Animated background shapes */}
        <div className="bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>

        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="section-title mb-3">Academic Journey</h2>
              <p className="lead mb-5">
                My educational foundation and specialized courses
              </p>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="row justify-content-center mb-5">
            <div className="col-lg-6">
              <div className="tab-nav">
                <button
                  className={`tab-nav-item ${activeTab === 'education' ? 'active' : ''}`}
                  onClick={() => setActiveTab('education')}
                >
                  🎓 Education
                </button>
                <button
                  className={`tab-nav-item ${activeTab === 'certifications' ? 'active' : ''}`}
                  onClick={() => setActiveTab('certifications')}
                >
                  📜 Certifications
                </button>
              </div>
            </div>
          </div>

          {/* Education Cards */}
          {activeTab === 'education' && (
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="education-timeline">
                  {education.map((edu, index) => (
                    <div 
                      key={edu.id} 
                      className="education-card-wrapper"
                      style={{ 
                        animation: `slideInUp 0.6s ease forwards ${index * 0.2}s`,
                        opacity: 0
                      }}
                    >
                      <div 
                        className="education-card"
                        style={{
                          '--card-color': edu.color
                        }}
                      >
                        <div className="card-glow"></div>
                        <div className="card-content">
                          <div className="education-icon">
                            {edu.icon}
                          </div>
                          <div className="education-info">
                            <h4 className="degree-title">{edu.degree}</h4>
                            <p className="institution-name">{edu.institution}</p>
                            <div className="education-meta">
                              <span className="period">{edu.period}</span>
                              <span className="score">{edu.score}</span>
                            </div>
                            {edu.status === 'current' && (
                              <div className="current-badge">Current</div>
                            )}
                          </div>
                        </div>
                        <div className="card-decoration"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Certifications Grid */}
          {activeTab === 'certifications' && (
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="certifications-grid">
                  {certifications.map((cert, index) => (
                    <div 
                      key={cert.id} 
                      className="cert-card-wrapper"
                      style={{ 
                        animation: `fadeInScale 0.5s ease forwards ${index * 0.1}s`,
                        opacity: 0
                      }}
                    >
                      <div 
                        className="cert-card"
                        style={{
                          '--cert-color': cert.color
                        }}
                      >
                        <div className="cert-icon">{cert.icon}</div>
                        <h5 className="cert-name">{cert.name}</h5>
                        <p className="cert-provider">{cert.provider}</p>
                        <div className="cert-shine"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <style jsx>{`
        .education-section {
          min-height: 100vh;
          background: linear-gradient(135deg, 
            #0f0f23 0%, 
            #1a1a2e 25%, 
            #16213e 50%, 
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
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .shape-1 {
          width: 250px;
          height: 250px;
          top: 5%;
          right: 5%;
          animation: float 8s ease-in-out infinite;
        }

        .shape-2 {
          width: 180px;
          height: 180px;
          bottom: 10%;
          left: 10%;
          animation: float 10s ease-in-out infinite reverse;
        }

        .shape-3 {
          width: 120px;
          height: 120px;
          top: 50%;
          right: 15%;
          animation: float 6s ease-in-out infinite;
        }

        .shape-4 {
          width: 90px;
          height: 90px;
          top: 25%;
          left: 5%;
          animation: float 7s ease-in-out infinite reverse;
        }

        .shape-5 {
          width: 60px;
          height: 60px;
          bottom: 30%;
          right: 30%;
          animation: float 9s ease-in-out infinite;
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

        .mb-3 {
          margin-bottom: 1rem;
        }

        .col-lg-6, .col-lg-8, .col-lg-10 {
          padding: 0 15px;
        }

        .col-lg-6 {
          flex: 0 0 50%;
          max-width: 50%;
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

        .section-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          color: white;
          background: linear-gradient(45deg, #7F5AF0, #2CB67D, #FF8E3C);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 4s ease-in-out infinite;
        }

        .lead {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
          line-height: 1.6;
        }

        .tab-nav {
          display: flex;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50px;
          padding: 8px;
          justify-content: center;
        }

        .tab-nav-item {
          flex: 1;
          border: none;
          background: transparent;
          color: rgba(255, 255, 255, 0.7);
          padding: 12px 24px;
          border-radius: 40px;
          transition: all 0.3s ease;
          font-weight: 600;
          cursor: pointer;
        }

        .tab-nav-item:hover {
          color: white;
          background: rgba(255, 255, 255, 0.1);
        }

        .tab-nav-item.active {
          background: linear-gradient(45deg, #7F5AF0, #2CB67D);
          color: white;
          box-shadow: 0 5px 15px rgba(127, 90, 240, 0.3);
        }

        .education-timeline {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .education-card-wrapper {
          width: 100%;
        }

        .education-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 30px;
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
          cursor: pointer;
        }

        .education-card:hover {
          transform: translateY(-10px);
          border-color: var(--card-color);
          box-shadow: 0 20px 40px rgba(127, 90, 240, 0.2);
        }

        .card-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transform: rotate(45deg);
          transition: all 0.5s ease;
          opacity: 0;
        }

        .education-card:hover .card-glow {
          opacity: 1;
          animation: shine 0.8s ease-in-out;
        }

        .card-content {
          display: flex;
          align-items: center;
          gap: 24px;
          position: relative;
          z-index: 2;
        }

        .education-icon {
          font-size: 3rem;
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, var(--card-color), rgba(255, 255, 255, 0.1));
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 30px rgba(127, 90, 240, 0.2);
        }

        .education-info {
          flex: 1;
        }

        .degree-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          margin-bottom: 8px;
        }

        .institution-name {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 12px;
        }

        .education-meta {
          display: flex;
          gap: 20px;
          align-items: center;
        }

        .period {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.95rem;
        }

        .score {
          background: linear-gradient(45deg, #2CB67D, #16A34A);
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .current-badge {
          position: absolute;
          top: 20px;
          right: 20px;
          background: linear-gradient(45deg, #FF8E3C, #ED8936);
          color: white;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          animation: pulse 2s infinite;
        }

        .card-decoration {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, var(--card-color), transparent);
        }

        .certifications-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }

        .cert-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 30px 24px;
          text-align: center;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .cert-card:hover {
          transform: translateY(-8px);
          border-color: var(--cert-color);
          box-shadow: 0 15px 30px rgba(127, 90, 240, 0.2);
        }

        .cert-icon {
          font-size: 2.5rem;
          margin-bottom: 16px;
          display: block;
        }

        .cert-name {
          color: white;
          font-weight: 600;
          font-size: 1.1rem;
          margin-bottom: 8px;
        }

        .cert-provider {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
          margin: 0;
        }

        .cert-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.5s ease;
        }

        .cert-card:hover .cert-shine {
          left: 100%;
        }

        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes shine {
          0% { transform: translateX(-100%) rotate(45deg); }
          100% { transform: translateX(100%) rotate(45deg); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .education-section {
            padding: 4rem 0;
          }

          .container {
            padding: 0 1rem;
          }

          .col-lg-6, .col-lg-8, .col-lg-10 {
            flex: 0 0 100%;
            max-width: 100%;
          }

          .card-content {
            flex-direction: column;
            text-align: center;
            gap: 16px;
          }

          .education-meta {
            flex-direction: column;
            gap: 8px;
          }

          .section-title {
            font-size: 2.5rem;
          }

          .certifications-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 1rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .education-card {
            padding: 20px;
          }
        }
      `}</style>
    </>
  );
};

export default Education;