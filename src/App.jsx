import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
// import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const handleNavigateToContact = () => {
      const contactElement = document.getElementById('contact');
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    window.addEventListener('navigateToContact', handleNavigateToContact);

    return () => {
      window.removeEventListener('navigateToContact', handleNavigateToContact);
    };
  }, []);

  return (
    <div className="App">
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
