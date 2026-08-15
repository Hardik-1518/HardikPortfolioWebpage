import React from 'react';
import aboutPic from '../assets/about-pic.jpg';
import experienceLight from '../assets/experience_light.png';
import experienceDark from '../assets/experience_dark.png';
import educationLight from '../assets/education_light.png';
import educationDark from '../assets/education_dark.png';
import arrowLight from '../assets/arrow_light.png';
import arrowDark from '../assets/arrow_dark.png';

const About = ({ theme }) => {
  const expIcon = theme === 'dark' ? experienceDark : experienceLight;
  const eduIcon = theme === 'dark' ? educationDark : educationLight;
  const arrowIcon = theme === 'dark' ? arrowDark : arrowLight;

  return (
    <section id="about">
      <div className="section-title-wrapper">
        <p className="section-subtitle">Get To Know More</p>
        <h2 className="section-title">About Me</h2>
      </div>

      <div className="about-grid">
        <div className="about-img-container">
          <div className="about-img-wrapper">
            <img src={aboutPic} alt="Hardik Srivastava working profile" />
          </div>
        </div>

        <div className="about-text-container">
          <div className="about-metric-cards">
            <div className="glass-card metric-card">
              <img src={expIcon} alt="Experience Icon" />
              <h3>Experience</h3>
              <p>Unity Dev (Multiplayer/3D)</p>
              <p>Full-Stack Development</p>
            </div>

            <div className="glass-card metric-card">
              <img src={eduIcon} alt="Education Icon" />
              <h3>Education</h3>
              <p>Computer Science Graduate</p>
              <p>Senior Secondary (CBSE)</p>
            </div>
          </div>

          <div className="about-bio">
            <p>
              I am a Computer Science graduate passionate about building intelligent products that combine 
              software engineering, artificial intelligence, and great user experiences.
            </p>
            <p>
              My journey started in game development, where I worked professionally on multiplayer, casual, 
              and 3D games using Unity and C#. That experience taught me how to build scalable systems, 
              optimize performance, collaborate in teams, and deliver products under real-world constraints.
            </p>
            <p>
              Today, my focus has shifted toward full-stack development and artificial intelligence. I enjoy 
              building products that solve meaningful problems using modern technologies such as React, 
              Node.js, Express, MongoDB, Firebase, and AI APIs and frameworks.
            </p>
            <p>
              Beyond engineering, I am also a content creator with over 100 videos across technology, 
              entertainment, and educational topics. Content creation has strengthened my communication, 
              storytelling, and audience-building skills—abilities that I believe are equally important 
              in technology leadership.
            </p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="#experience" className="arrow-scroller anim-float" aria-label="Scroll to experience">
              <img src={arrowIcon} alt="Down Arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
