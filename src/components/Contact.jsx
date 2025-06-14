import { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    // Add animation delays to info cards
    const infoCards = document.querySelectorAll('.info-card');
    infoCards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.2}s`;
    });
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    
    if (!name || !email || !subject || !message) {
      alert('Please fill in all fields');
      return;
    }

    setIsLoading(true);

    try {
      // Using EmailJS service for sending emails
      const templateParams = {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
        to_email: 'jhaashishkumar5432@gmail.com'
      };

      // For now, we'll simulate the email sending
      // You'll need to set up EmailJS or another service
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form submitted:', templateParams);
      alert('Thank you for your message! I will get back to you soon.');
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section id="contact" className={`contact-section ${isLoaded ? 'loaded' : ''}`}>
        {/* Background Shapes */}
        <div className="bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>

        <div className="container">
          {/* Header */}
          <div className="header">
            <h2 className="section-title">Get In Touch</h2>
            <p className="lead">Ready to collaborate or have a question? Let's connect and create something amazing together</p>
          </div>

          {/* Main Content Grid */}
          <div className="main-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <h4 className="info-title">Contact Information</h4>

              <div className="info-card reveal">
                <div className="info-icon">📧</div>
                <div className="info-content">
                  <h6>Email</h6>
                  <p>jhaashishkumar5432@gmail.com</p>
                </div>
              </div>

              <div className="info-card reveal">
                <div className="info-icon">📱</div>
                <div className="info-content">
                  <h6>Phone</h6>
                  <p>+91 8217087871</p>
                </div>
              </div>

              <div className="info-card reveal">
                <div className="info-icon">📍</div>
                <div className="info-content">
                  <h6>Location</h6>
                  <p>Bengaluru, Karnataka, IN</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="form-wrapper">
              <div className="form-header">
                <h4 className="form-title">Send Me a Message</h4>
                <p className="form-subtitle">Let's start a conversation</p>
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Your Name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-input"
                    placeholder="Your Email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                  />
                </div>
                <div className="form-group form-group-full">
                  <input
                    type="text"
                    className="form-input"
                    id="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                  />
                </div>
                <div className="form-group form-group-full">
                  <textarea
                    className="form-input form-textarea"
                    id="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                  ></textarea>
                </div>
                <div className="form-group form-group-full">
                  <button type="submit" className="submit-btn" disabled={isLoading}>
                    {isLoading ? 'Sending...' : 'Send Message'}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send-fill ms-2" viewBox="0 0 16 16">
                      <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <style jsx>{`
        .contact-section {
          min-height: 100vh;
          background: linear-gradient(135deg, 
            #1a1a2e 0%, 
            #16213e 25%, 
            #0f3460 50%, 
            #533483 75%, 
            #e43f5a 100%);
          position: relative;
          overflow: hidden;
          opacity: 0;
          transition: all 1s ease;
          padding: 6rem 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .contact-section.loaded {
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

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 5;
        }

        .header {
          text-align: center;
          margin-bottom: 4rem;
          position: relative;
          z-index: 1;
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
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
          font-weight: 500;
        }

        .main-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 4rem;
          position: relative;
          z-index: 1;
        }

        .contact-info {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 2.5rem;
          border-radius: 20px;
          height: fit-content;
          position: sticky;
          top: 20px;
        }

        .info-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: white;
          margin-bottom: 2rem;
        }

        .info-card {
          display: flex;
          align-items: center;
          padding: 1.5rem;
          margin-bottom: 1.5rem;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 15px;
          color: white;
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateX(-50px);
        }

        .reveal {
          animation: slideInLeft 0.6s ease forwards;
        }

        .info-card:hover {
          transform: translateY(-5px);
          border-color: rgba(0, 212, 255, 0.3);
          box-shadow: 0 10px 30px rgba(0, 212, 255, 0.2);
        }

        .info-icon {
          font-size: 1.5rem;
          margin-right: 1rem;
          background: rgba(255, 255, 255, 0.1);
          padding: 0.75rem;
          border-radius: 10px;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .info-content h6 {
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
          opacity: 0.8;
          font-weight: 500;
        }

        .info-content p {
          font-size: 1rem;
          font-weight: 600;
          margin: 0;
          color: rgba(255, 255, 255, 0.9);
        }

        .form-wrapper {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 2.5rem;
          border-radius: 20px;
        }

        .form-header {
          margin-bottom: 2rem;
        }

        .form-title {
          font-size: 1.8rem;
          font-weight: 600;
          color: white;
          margin-bottom: 0.5rem;
        }

        .form-subtitle {
          color: rgba(255, 255, 255, 0.8);
          font-size: 1rem;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group-full {
          grid-column: 1 / -1;
        }

        .form-input {
          padding: 1rem 1.5rem;
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          font-size: 1rem;
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.05);
          color: white;
          font-family: inherit;
          backdrop-filter: blur(10px);
        }

        .form-input::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }

        .form-input:focus {
          outline: none;
          border-color: #00d4ff;
          box-shadow: 0 0 0 0.25rem rgba(0, 212, 255, 0.15);
          background: rgba(255, 255, 255, 0.1);
        }

        .form-input:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .form-textarea {
          resize: vertical;
          min-height: 150px;
        }

        .submit-btn {
          background: linear-gradient(45deg, #e43f5a, #00d4ff);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(228, 63, 90, 0.3);
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 12px 35px rgba(228, 63, 90, 0.4);
        }

        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        .ms-2 {
          margin-left: 0.5rem;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
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

        /* Responsive Design */
        @media (max-width: 768px) {
          .contact-section {
            padding: 4rem 0;
          }

          .container {
            padding: 0 1rem;
          }

          .section-title {
            font-size: 2.5rem;
          }

          .main-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .contact-info {
            position: static;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }

          .info-card:nth-child(1) { animation-delay: 0.2s; }
          .info-card:nth-child(2) { animation-delay: 0.4s; }
          .info-card:nth-child(3) { animation-delay: 0.6s; }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 1rem;
          }

          .contact-info,
          .form-wrapper {
            padding: 1.5rem;
          }

          .section-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </>
  );
};

export default Contact;