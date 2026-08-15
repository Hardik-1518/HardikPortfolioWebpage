import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SnakeGame from './components/SnakeGame';
import YouTubeVideos from './components/YouTubeVideos';

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' ? 'dark' : 'light';
  });

  const [isSnakeOpen, setIsSnakeOpen] = useState(false);

  // Mouse Glow Spotlight Coordinate tracker (High performance CSS var sync)
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.body.setAttribute('theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.removeAttribute('theme');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      {/* Interactive Cursor Spotlight Backdrop */}
      <div className="cursor-glow" />

      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main>
        <Hero theme={theme} />
        <About theme={theme} />
        <Experience theme={theme} />
        <Projects theme={theme} onPlaySnake={() => setIsSnakeOpen(true)} />
        <Contact theme={theme} />
        <YouTubeVideos />
      </main>

      <Footer />

      {/* Snake Game Easter Egg Modal */}
      <SnakeGame isOpen={isSnakeOpen} onClose={() => setIsSnakeOpen(false)} />
    </>
  );
}

export default App;
