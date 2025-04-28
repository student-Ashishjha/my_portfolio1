const Education = () => {
    const education = [
      {
        id: 1,
        degree: "B.Tech in Computer Science (AI)",
        institution: "BITM",
        period: "2022-2026",
        score: "CGPA: 8.77",
      },
      {
        id: 2,
        degree: "Pre University",
        institution: "JAV/JPUC",
        period: "2019-2021",
        score: "Percentage: 96.83%",
      },
      {
        id: 3,
        degree: "SSLC",
        institution: "JAV/JPUC",
        period: "2018-2019",
        score: "Percentage: 88.96%",
      },
    ];
  
    const certifications = [
      { id: 1, name: "Python Pro Bootcamp", provider: "Udemy" },
      { id: 2, name: "Data Structures and Algorithms in Python", provider: "EZTS" },
      { id: 3, name: "Machine Learning", provider: "Infosys Springboard" },
      { id: 4, name: "CSS and Javascript Course", provider: "Udemy" },
      { id: 5, name: "FIGMA", provider: "Udemy" },
    ];
  
    return (
      <section id="education" className="py-5 education-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="section-title text-center mx-auto position-relative">
                Education & Certifications
                <span className="title-underline"></span>
              </h2>
              <p className="lead mb-5">
                My academic journey and professional development through specialized courses and certifications.
              </p>
            </div>
          </div>
  
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="education-card h-100 p-4">
                <h4 className="mb-4">Education</h4>
                <div className="timeline">
                  {education.map((edu) => (
                    <div key={edu.id} className="timeline-item">
                      <div className="timeline-marker"></div>
                      <div className="timeline-content">
                        <h5>{edu.degree}</h5>
                        <p className="mb-1">{edu.institution}</p>
                        <p className="timeline-period mb-1">{edu.period}</p>
                        <p className="fw-bold score">{edu.score}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
  
            <div className="col-lg-6">
              <div className="certification-card h-100 p-4">
                <h4 className="mb-4 text-white">Certifications</h4>
                <div className="row g-3">
                  {certifications.map((cert) => (
                    <div key={cert.id} className="col-12">
                      <div className="certificate-item p-3">
                        <h5 className="mb-1">{cert.name}</h5>
                        <p className="mb-0 provider">Provider: {cert.provider}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <style jsx>{`
          :root {
            --primary-color: #7F5AF0;
            --secondary-color: #2CB67D;
            --accent-color: #FF8E3C;
            --dark-color: #16161A;
            --light-color: #FFFFFE;
            --background-color: #F2F4F8;
            --gradient-primary: linear-gradient(135deg, #7F5AF0 0%, #6B46C1 100%);
            --gradient-secondary: linear-gradient(135deg, #2CB67D 0%, #16A34A 100%);
            --gradient-accent: linear-gradient(135deg, #FF8E3C 0%, #ED8936 100%);
          }
          
          .education-section {
            background-color: var(--background-color);
            position: relative;
            overflow: hidden;
          }
          
          .education-section::before {
            content: "";
            position: absolute;
            top: -100px;
            left: -100px;
            width: 300px;
            height: 300px;
            border-radius: 50%;
            background: var(--gradient-secondary);
            opacity: 0.05;
            z-index: 0;
          }
          
          .education-section::after {
            content: "";
            position: absolute;
            bottom: -100px;
            right: -100px;
            width: 300px;
            height: 300px;
            border-radius: 50%;
            background: var(--gradient-primary);
            opacity: 0.05;
            z-index: 0;
          }
          
          .section-title {
            font-weight: 700;
            margin-bottom: 2rem;
            color: var(--dark-color);
            position: relative;
          }
          
          .title-underline {
            display: block;
            width: 80px;
            height: 4px;
            background: var(--gradient-primary);
            margin: 0.5rem auto 0;
            border-radius: 2px;
          }
          
          .lead {
            font-size: 1.1rem;
            color: var(--dark-color);
            opacity: 0.85;
          }
          
          .education-card {
            background: var(--light-color);
            border-radius: 16px;
            box-shadow: 0 10px 30px rgba(22, 22, 26, 0.07);
            position: relative;
            z-index: 1;
          }
          
          .education-card h4 {
            color: var(--primary-color);
            font-weight: 600;
            position: relative;
            display: inline-block;
          }
          
          .education-card h4::after {
            content: "";
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 50px;
            height: 3px;
            background: var(--gradient-primary);
            border-radius: 2px;
          }
          
          .certification-card {
            background: var(--gradient-primary);
            border-radius: 16px;
            box-shadow: 0 10px 30px rgba(127, 90, 240, 0.15);
            position: relative;
            z-index: 1;
            overflow: hidden;
          }
          
          .certification-card::before {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            width: 150px;
            height: 150px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            transform: translate(50%, -50%);
            z-index: -1;
          }
          
          .certification-card::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 120px;
            height: 120px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            transform: translate(-50%, 50%);
            z-index: -1;
          }
          
          .certification-card h4 {
            font-weight: 600;
            position: relative;
            display: inline-block;
          }
          
          .certification-card h4::after {
            content: "";
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 50px;
            height: 3px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 2px;
          }
          
          .timeline {
            position: relative;
            padding-left: 30px;
            animation: fadeIn 1s ease-out;
          }
          
          .timeline::before {
            content: '';
            position: absolute;
            left: -1px;
            top: 10px;
            bottom: 0;
            width: 2px;
            background: linear-gradient(to bottom, var(--primary-color), rgba(127, 90, 240, 0.1));
          }
          
          .timeline-item {
            position: relative;
            padding-bottom: 30px;
            opacity: 0;
            animation: slideUp 0.5s ease-out forwards;
          }
          
          .timeline-item:last-child {
            padding-bottom: 0;
          }
          
          .timeline-item:nth-child(1) {
            animation-delay: 0.1s;
          }
          
          .timeline-item:nth-child(2) {
            animation-delay: 0.3s;
          }
          
          .timeline-item:nth-child(3) {
            animation-delay: 0.5s;
          }
          
          .timeline-marker {
            position: absolute;
            left: -41px;
            top: 5px;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: var(--gradient-primary);
            z-index: 1;
            box-shadow: 0 0 0 4px rgba(127, 90, 240, 0.2);
          }
          
          .timeline-content {
            background-color: var(--light-color);
            border-radius: 12px;
            padding: 20px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            transition: all 0.3s ease;
            border-left: 3px solid var(--primary-color);
          }
          
          .timeline-content:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(127, 90, 240, 0.15);
          }
          
          .timeline-content h5 {
            color: var(--primary-color);
            font-weight: 600;
            margin-bottom: 8px;
          }
          
          .timeline-period {
            font-size: 0.9rem;
            color: var(--dark-color);
            opacity: 0.6;
          }
          
          .score {
            color: var(--secondary-color);
            font-size: 1rem;
          }
          
          .certificate-item {
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            transition: all 0.3s ease;
            margin-bottom: 15px;
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
            border-left: 3px solid var(--accent-color);
            position: relative;
            overflow: hidden;
          }
          
          .certificate-item::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(to right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
            transform: translateX(-100%);
            transition: transform 0.5s ease;
          }
          
          .certificate-item:hover::before {
            transform: translateX(0);
          }
          
          .certificate-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          }
          
          .certificate-item h5 {
            color: white;
            font-weight: 600;
            font-size: 1.1rem;
          }
          
          .provider {
            font-size: 0.9rem;
            color: rgba(255, 255, 255, 0.75);
          }
          
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
          
          @keyframes slideUp {
            0% {
              transform: translateY(20px);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }
          
          @media (max-width: 767px) {
            .timeline {
              padding-left: 20px;
            }
            
            .timeline-marker {
              left: -31px;
            }
            
            .timeline-content {
              padding: 15px;
            }
            
            .timeline-content h5 {
              font-size: 1.1rem;
            }
          }
        `}</style>
      </section>
    );
  };
  
  export default Education;