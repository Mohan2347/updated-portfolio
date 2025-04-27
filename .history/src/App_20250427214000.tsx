import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
// import Experience from './components/Experience';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './components/Background';
import Experience from './components/Experience';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    
    if (savedDarkMode === 'true') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else if (savedDarkMode === null) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDark);
      if (prefersDark) document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Background />
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <About />
      <Skills />
      {/* <Experience /> */}
      <Projects />
      <Certificates />
      <Education />
      <Contact />
      <Footer isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    </div>
    
  );
}

export default App;