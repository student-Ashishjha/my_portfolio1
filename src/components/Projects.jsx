const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI-Powered Emotion Detection System",
      description: "An intelligent system that recognizes human emotions in real-time using deep learning and provides recommendations based on detected emotions.",
      technologies: ["Python", "TensorFlow", "OpenCV", "React", "Flask"],
      details: [
        "Developed intelligent system for real-time emotion recognition using deep learning",
        "Achieved 81% classification accuracy by training a CNN model on the FER2013 dataset",
        "Implemented a recommendation engine to suggest music, movies, or activities based on detected emotions"
      ],
      image: "/images/emotion-detection.png",
      github: "https://github.com/student-Ashishjha/Emotion_det_recommend",
      year: "2024"
    },
    
    {
      id: 2,
      title: "Parking Slot Management",
      description: "A full-stack web application for managing parking slots with user authentication and session handling.",
      technologies: ["Flask", "MongoDB", "HTML", "CSS", "JavaScript"],
      details: [
        "Developed a full-stack task management web application with user authentication and session handling",
        "Designed a modern, responsive UI following best UI/UX practices for an enhanced user experience",
        "Utilized JSON for scalable data storage, ensuring quick and efficient retrieval of tasks"
      ],
      image: "/images/parking-slot.jpg",
      github: "https://github.com/student-Ashishjha/parkingslot",
      year: "2025"
    },
    
    {
      id: 3,
      title: "Deepfake Detection System",
      description: "A cutting-edge application that utilizes deep learning to identify manipulated media content with high accuracy.",
      technologies: ["React", "Vite", "FastAPI", "Python", "TensorFlow"],
      details: [
        "Built a responsive frontend using React+Vite and Tailwind CSS for intuitive user interaction",
        "Implemented a FastAPI backend to efficiently process and analyze media content",
        "Achieved over 94% detection accuracy using a custom-trained convolutional neural network",
        "Optimized the application for various devices with responsive design principles"
      ],
      image: "/images/img1.jpg",
      github: "https://github.com/student-Ashishjha/deepfake_detection",
      year: "2025"
    }
  ];

  return (
    <>
      <section id="projects" className="projects-section">
        {/* Animated background shapes */}
        <div className="bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>

        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Projects</h2>
            <p className="lead">Showcasing some of my favorite works and innovations.</p>
          </div>

          <div className="projects-timeline">
            {projects.map((project, index) => (
              <div key={project.id} className={`project-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="project-connector">
                  <div className="connector-dot"></div>
                </div>
                <div className="project-card">
                  {project.image && (
                    <div className="project-img">
                      <img src={project.image} alt={project.title} className="img-fluid" />
                      <div className="project-year">{project.year}</div>
                    </div>
                  )}
                  <div className="card-body">
                    <h4 className="card-title">{project.title}</h4>
                    <p className="card-text">{project.description}</p>

                    <h6 className="features-title">Key Features:</h6>
                    <ul className="features-list">
                      {project.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>

                    <div className="tech-tags">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="badge tech-badge">{tech}</span>
                      ))}
                    </div>

                    <div className="project-actions">
                      {project.github && (
                        <a href={project.github} className="btn btn-gradient" target="_blank" rel="noopener noreferrer">
                          View on GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .projects-section {
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

        .text-center {
          text-align: center;
        }

        .mb-5 {
          margin-bottom: 3rem;
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
          font-weight: 500;
          line-height: 1.6;
        }

        .projects-timeline {
          position: relative;
          padding: 2rem 0;
        }

        .projects-timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(180deg, #e43f5a, #00d4ff, #7209b7);
          transform: translateX(-50%);
          border-radius: 2px;
          box-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
        }

        .project-item {
          position: relative;
          margin-bottom: 4rem;
          width: 100%;
        }

        .project-item.left {
          padding-right: 55%;
        }

        .project-item.right {
          padding-left: 55%;
        }

        .project-connector {
          position: absolute;
          top: 2rem;
          z-index: 10;
        }

        .project-item.left .project-connector {
          right: -17px;
        }

        .project-item.right .project-connector {
          left: -17px;
        }

        .connector-dot {
          width: 30px;
          height: 30px;
          background: linear-gradient(45deg, #e43f5a, #00d4ff);
          border-radius: 50%;
          border: 4px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          animation: pulse 2s infinite;
        }

        .project-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.4s ease;
          color: white;
          position: relative;
          transform: translateY(20px);
          opacity: 0;
          animation: slideIn 0.8s ease forwards;
        }

        .project-item:nth-child(1) .project-card {
          animation-delay: 0.2s;
        }

        .project-item:nth-child(2) .project-card {
          animation-delay: 0.4s;
        }

        .project-item:nth-child(3) .project-card {
          animation-delay: 0.6s;
        }

        .project-card:hover {
          transform: translateY(-10px) scale(1.02);
          border-color: rgba(0, 212, 255, 0.3);
          box-shadow: 0 25px 50px rgba(0, 212, 255, 0.2);
        }

        .project-item.right .project-card:hover {
          transform: translateY(-10px) scale(1.02) rotateY(-5deg);
        }

        .project-item.left .project-card:hover {
          transform: translateY(-10px) scale(1.02) rotateY(5deg);
        }

        .project-img {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .project-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .project-card:hover .project-img img {
          transform: scale(1.1);
        }

        .project-year {
          position: absolute;
          top: 10px;
          right: 10px;
          background: linear-gradient(45deg, #e43f5a, #00d4ff);
          color: #fff;
          font-weight: bold;
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 0.85rem;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .card-body {
          padding: 2rem;
        }

        .card-title {
          color: white;
          font-weight: 700;
          font-size: 1.3rem;
          margin-bottom: 1rem;
        }

        .card-text {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .features-title {
          color: #00d4ff;
          font-weight: 600;
          margin-bottom: 0.5rem;
          font-size: 1rem;
        }

        .features-list {
          color: rgba(255, 255, 255, 0.7);
          padding-left: 1.2rem;
          margin-bottom: 1.5rem;
          font-size: 0.9rem;
        }

        .features-list li {
          margin-bottom: 0.3rem;
          line-height: 1.4;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .tech-badge {
          background: rgba(0, 212, 255, 0.2);
          color: #00d4ff;
          border: 1px solid rgba(0, 212, 255, 0.3);
          font-size: 0.75rem;
          padding: 0.5em 0.75em;
          border-radius: 30px;
          font-weight: 500;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .tech-badge:hover {
          background: rgba(0, 212, 255, 0.3);
          transform: translateY(-2px);
        }

        .project-actions {
          margin-top: auto;
        }

        .btn-gradient {
          background: linear-gradient(45deg, #e43f5a, #00d4ff);
          color: white;
          border: none;
          border-radius: 30px;
          padding: 12px 30px;
          font-weight: 500;
          text-decoration: none;
          display: inline-block;
          text-align: center;
          transition: all 0.3s ease;
          width: 100%;
        }

        .btn-gradient:hover {
          background: linear-gradient(45deg, #00d4ff, #e43f5a);
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0, 212, 255, 0.3);
          color: white;
          text-decoration: none;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(0, 212, 255, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(0, 212, 255, 0); }
          100% { box-shadow: 0 0 0 0 rgba(0, 212, 255, 0); }
        }

        @keyframes slideIn {
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .projects-section {
            padding: 4rem 0;
          }

          .container {
            padding: 0 1rem;
          }

          .projects-timeline::before {
            left: 30px;
          }

          .project-item.left,
          .project-item.right {
            padding-left: 80px;
            padding-right: 0;
          }

          .project-item.left .project-connector,
          .project-item.right .project-connector {
            left: 15px;
            right: auto;
          }

          .project-card {
            transform: none;
          }

          .project-item.left .project-card:hover,
          .project-item.right .project-card:hover {
            transform: translateY(-10px) scale(1.02);
          }

          .card-body {
            padding: 1.5rem;
          }

          .section-title {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 576px) {
          .container {
            padding: 0 1rem;
          }

          .projects-timeline::before {
            left: 20px;
          }

          .project-item.left,
          .project-item.right {
            padding-left: 60px;
          }

          .project-item.left .project-connector,
          .project-item.right .project-connector {
            left: 5px;
          }

          .card-body {
            padding: 1rem;
          }

          .tech-badge {
            font-size: 0.7rem;
            padding: 0.4em 0.6em;
          }

          .section-title {
            font-size: 2rem;
          }

          .connector-dot {
            width: 20px;
            height: 20px;
          }
        }
      `}</style>
    </>
  );
};

export default Projects;