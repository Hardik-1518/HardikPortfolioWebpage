import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-wrap">
      <div className="footer-container">
        <ul className="footer-nav">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <p className="footer-copyright">
          Copyright &#169; {currentYear} Hardik Srivastava. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
