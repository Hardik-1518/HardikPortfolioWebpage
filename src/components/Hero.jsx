import React, { useState, useEffect } from 'react';
import profilePic from '../assets/profile-pic (2).png';
import linkedinLight from '../assets/linkedin_light.png';
import linkedinDark from '../assets/linkedin_dark.png';
import githubLight from '../assets/github_light.png';
import githubDark from '../assets/github_dark.png';

const Hero = ({ theme }) => {
  const linkedinIcon = theme === 'dark' ? linkedinDark : linkedinLight;
  const githubIcon = theme === 'dark' ? githubDark : githubLight;

  // Typing Effect State
  const roles = ['Full-Stack Web Developer', 'Unity Game Developer', 'Software Engineer'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typeSpeed, setTypeSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const currentRole = roles[roleIndex];

    const handleType = () => {
      if (!isDeleting) {
        // Typing text
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        setTypeSpeed(100);

        if (displayText === currentRole) {
          // Pause before deleting
          setIsDeleting(true);
          setTypeSpeed(2000); // Wait 2s
        }
      } else {
        // Deleting text
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        setTypeSpeed(50);

        if (displayText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTypeSpeed(500); // Pause before next word
        }
      }
    };

    timer = setTimeout(handleType, typeSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, typeSpeed]);

  return (
    <section id="profile" className="hero-section">
      <div className="hero-content">
        <p className="hero-tagline">Hello, I'm</p>
        <h1 className="hero-name">Hardik Srivastava</h1>
        <p className="hero-subtitle">
          I'm a <span className="gradient-text">{displayText}</span>
          <span className="typing-cursor">|</span>
        </p>
        <p className="hero-desc">
          I build high-performance 2D/3D games and modern, interactive web applications. 
          Currently creating optimized solutions with Unity, React, and modern backend architectures.
        </p>
        
        <div className="hero-cta">
          <button 
            className="btn btn-primary" 
            onClick={() => window.open('/resume.pdf', '_blank')}
          >
            Download CV
          </button>
          <a href="#contact" className="btn btn-secondary">
            Contact Info
          </a>
        </div>

        <div className="hero-socials">
          <a 
            href="https://www.linkedin.com/in/hardik-srivastava-" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon-btn"
            aria-label="LinkedIn Profile"
          >
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a 
            href="https://github.com/Hardik-1518" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon-btn"
            aria-label="GitHub Profile"
          >
            <img src={githubIcon} alt="GitHub" />
          </a>
        </div>
      </div>

      <div className="hero-image-container">
        <div className="profile-avatar-wrapper pulse-avatar">
          <img 
            src={profilePic} 
            alt="Hardik Srivastava" 
            className="profile-img" 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
