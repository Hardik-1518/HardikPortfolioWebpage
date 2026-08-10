import React, { useState, useEffect } from 'react';
import themeLight from '../assets/theme_light.png';
import themeDark from '../assets/theme_dark.png';

const Navbar = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header-nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#profile" className="logo" onClick={closeMobileMenu}>
          Hardik Srivastava
        </a>

        {/* Desktop Menu */}
        <ul className="nav-menu desktop-only">
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#experience" className="nav-link">Experience</a></li>
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
          <li>
            <button 
              onClick={toggleTheme} 
              className="theme-toggle-btn"
              aria-label="Toggle dark/light theme"
            >
              <img 
                src={theme === 'dark' ? themeDark : themeLight} 
                alt="Theme Toggle Icon" 
              />
            </button>
          </li>
        </ul>

        {/* Mobile Hamburger Toggle */}
        <button 
          className={`hamburger-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Menu Panel */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="nav-menu">
            <li><a href="#about" className="nav-link" onClick={closeMobileMenu}>About</a></li>
            <li><a href="#experience" className="nav-link" onClick={closeMobileMenu}>Experience</a></li>
            <li><a href="#projects" className="nav-link" onClick={closeMobileMenu}>Projects</a></li>
            <li><a href="#contact" className="nav-link" onClick={closeMobileMenu}>Contact</a></li>
            <li>
              <button 
                onClick={() => {
                  toggleTheme();
                  closeMobileMenu();
                }} 
                className="theme-toggle-btn"
                aria-label="Toggle dark/light theme"
              >
                <img 
                  src={theme === 'dark' ? themeDark : themeLight} 
                  alt="Theme Toggle Icon" 
                />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
