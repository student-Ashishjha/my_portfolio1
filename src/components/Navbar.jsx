import { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Active section highlight
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const top = window.scrollY;
        const offset = section.offsetTop - 100;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        if (top >= offset && top < offset + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`} style={{ transition: 'all 0.3s ease' }}>
      <div className="container">
        <a className="navbar-brand fw-bold gradient-text" href="#">Ashish Jha</a>
        
        <button className="navbar-toggler custom-toggler" type="button" onClick={toggleMenu}>
          <div className={`hamburger ${menuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <div className={`collapse navbar-collapse justify-content-end ${menuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav">
            {['home', 'about', 'skills', 'projects', 'education', 'contact'].map((section) => (
              <li className="nav-item" key={section}>
                <a
                  className={`nav-link mx-2 ${activeSection === section ? 'active-link' : ''}`}
                  href={`#${section}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
