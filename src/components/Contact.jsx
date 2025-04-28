import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-5 contact-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="section-title text-center mx-auto position-relative">
              Get In Touch
              <span className="title-underline"></span>
            </h2>
            <p className="lead mb-5">
              Have a question or want to work together? Feel free to reach out to me!
            </p>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-lg-5">
            <div className="contact-info-card h-100 p-4">
              <h4 className="mb-4 text-white">Contact Information</h4>
              
              <div className="d-flex align-items-center mb-4">
                <div className="contact-icon me-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                  </svg>
                </div>
                <div>
                  <h6 className="mb-0 text-white">Email</h6>
                  <p className="mb-0 text-light">jhaashishkumar5432@gmail.com</p>
                </div>
              </div>
              
              <div className="d-flex align-items-center mb-4">
                <div className="contact-icon me-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                  </svg>
                </div>
                <div>
                  <h6 className="mb-0 text-white">Phone</h6>
                  <p className="mb-0 text-light">+91 8217087871</p>
                </div>
              </div>
              
              <h5 className="mt-5 mb-4 text-white">Connect With Me</h5>
              <div className="d-flex gap-3">
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                </a>
                <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zm4.709-4.92H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-7">
            <div className="form-card h-100 p-4">
              <h4 className="mb-4 text-dark">Send Me a Message</h4>
              
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating mb-3">
                      <input 
                        type="text" 
                        className="form-control custom-input" 
                        id="name" 
                        name="name"
                        placeholder="Your Name" 
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="form-floating mb-3">
                      <input 
                        type="email" 
                        className="form-control custom-input" 
                        id="email" 
                        name="email"
                        placeholder="Your Email" 
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  
                  <div className="col-12">
                    <div className="form-floating mb-3">
                      <input 
                        type="text" 
                        className="form-control custom-input" 
                        id="subject" 
                        name="subject"
                        placeholder="Subject" 
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  
                  <div className="col-12">
                    <div className="form-floating mb-4">
                      <textarea 
                        className="form-control custom-input" 
                        id="message" 
                        name="message"
                        placeholder="Your Message" 
                        style={{ height: '150px' }}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                      <label htmlFor="message">Your Message</label>
                    </div>
                  </div>
                  
                  <div className="col-12">
                    <button type="submit" className="btn btn-submit px-4 py-2">
                      Send Message
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send-fill ms-2" viewBox="0 0 16 16">
                        <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </form>
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
        }
        
        .contact-section {
          background-color: var(--background-color);
          position: relative;
          overflow: hidden;
        }
        
        .contact-section::before {
          content: "";
          position: absolute;
          top: -150px;
          right: -150px;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: var(--gradient-primary);
          opacity: 0.05;
          z-index: 0;
        }
        
        .contact-section::after {
          content: "";
          position: absolute;
          bottom: -150px;
          left: -150px;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: var(--gradient-secondary);
          opacity: 0.05;
          z-index: 0;
        }
        
        .section-title {
          font-weight: 700;
          margin-bottom: 2rem;
          color: var(--dark-color);
        }
        
        .title-underline {
          display: block;
          width: 80px;
          height: 4px;
          background: var(--gradient-primary);
          margin: 0.5rem auto 0;
          border-radius: 2px;
        }
        
        .contact-info-card {
          background: var(--gradient-primary);
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(127, 90, 240, 0.15);
          position: relative;
          z-index: 1;
          overflow: hidden;
        }
        
        .contact-info-card::before {
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
        
        .contact-info-card::after {
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
        
        .form-card {
          background: var(--light-color);
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(22, 22, 26, 0.07);
          position: relative;
          z-index: 1;
        }
        
        .contact-icon {
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(255, 255, 255, 0.15);
          border-radius: 12px;
          color: var(--light-color);
        }
        
        .social-link {
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(255, 255, 255, 0.15);
          border-radius: 10px;
          color: var(--light-color);
          transition: all 0.3s ease;
        }
        
        .social-link:hover {
          background-color: var(--light-color);
          color: var(--primary-color);
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        .custom-input {
          border: 2px solid #e9ecef;
          border-radius: 10px;
          transition: all 0.3s ease;
        }
        
        .custom-input:focus {
          border-color: var(--primary-color);
          box-shadow: 0 0 0 0.25rem rgba(127, 90, 240, 0.15);
        }
        
        .btn-submit {
          background: var(--gradient-primary);
          color: var(--light-color);
          border: none;
          border-radius: 10px;
          font-weight: 600;
          letter-spacing: 0.5px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          z-index: 1;
          box-shadow: 0 5px 15px rgba(127, 90, 240, 0.25);
        }
        
        .btn-submit:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(127, 90, 240, 0.35);
        }
        
        .btn-submit::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--gradient-secondary);
          z-index: -1;
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        
        .btn-submit:hover::after {
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default Contact;