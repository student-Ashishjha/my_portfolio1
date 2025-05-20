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
      technologies: ["React", "Vite", "FastAPI", "Python", "TensorFlow", "Tailwind CSS"],
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
    <section id="projects" className="py-5 bg-light">
      <div className="container px-4">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Projects</h2>
          <p className="text-muted">Showcasing some of my favorite works and innovations.</p>
        </div>

        <div className="row gy-4">
          {projects.map((project) => (
            <div key={project.id} className="col-lg-4 col-md-6">
              <div className="card h-100 shadow-sm project-card">
                {project.image && (
                  <div className="project-img">
                    <img src={project.image} alt={project.title} className="img-fluid" />
                    <div className="project-year">{project.year}</div>
                  </div>
                )}
                <div className="card-body d-flex flex-column">
                  <h4 className="card-title mb-3">{project.title}</h4>
                  <p className="card-text text-muted">{project.description}</p>

                  <h6 className="mt-4">Key Features:</h6>
                  <ul className="small">
                    {project.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>

                  <div className="mt-3 mb-4 tech-tags">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="badge bg-primary-subtle text-primary me-2 mb-2">{tech}</span>
                    ))}
                  </div>

                  <div className="mt-auto">
                    {project.github && (
                      <a href={project.github} className="btn btn-gradient w-100" target="_blank" rel="noopener noreferrer">
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

      <style jsx>{`
        .project-card {
          border-radius: 15px;
          overflow: hidden;
          transition: transform 0.3s, box-shadow 0.3s;
          background: #fff;
          height: 100%;
        }
        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
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
          transition: transform 0.5s;
        }
        .project-card:hover .project-img img {
          transform: scale(1.1);
        }
        .project-year {
          position: absolute;
          top: 10px;
          right: 10px;
          background: #0d6efd;
          color: #fff;
          font-weight: bold;
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 0.85rem;
        }
        .btn-gradient {
          background: linear-gradient(45deg, #6a11cb, #2575fc);
          color: white;
          border: none;
          transition: all 0.4s;
        }
        .btn-gradient:hover {
          background: linear-gradient(45deg, #2575fc, #6a11cb);
          transform: translateY(-2px);
        }
        .badge {
          font-size: 0.75rem;
          padding: 0.5em 0.75em;
          border-radius: 30px;
        }
        .tech-tags {
          display: flex;
          flex-wrap: wrap;
        }
        
        /* Media queries for better responsiveness */
        @media (max-width: 767px) {
          .project-img {
            height: 180px;
          }
          .card-title {
            font-size: 1.25rem;
          }
        }
        @media (max-width: 576px) {
          .project-card {
            margin-left: 5px;
            margin-right: 5px;
          }
          .badge {
            font-size: 0.7rem;
            padding: 0.4em 0.6em;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;