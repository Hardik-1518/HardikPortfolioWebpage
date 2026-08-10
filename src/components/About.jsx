import React from 'react';
import aboutPic from '../assets/about-pic2.png';
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
              <p>2+ Years Unity Development</p>
              <p>1+ Years Web Development</p>
            </div>

            <div className="glass-card metric-card">
              <img src={eduIcon} alt="Education Icon" />
              <h3>Education</h3>
              <p>B.Tech CSE (3rd Year)</p>
              <p>Senior Secondary CBSE</p>
            </div>
          </div>

          <div className="about-bio">
            <p>
              I am a passionate Game Developer and Web Developer with hands-on experience in game mechanics, 
              game design, level design, and game testing. I specialize in developing optimized and scalable 
              solutions using Unity and programming languages like Python, C, C++, and Java.
            </p>
            <p>
              In addition to game development, I have experience in web development, working with both frontend 
              and backend technologies to create dynamic and responsive web applications. I enjoy building 
              interactive digital experiences and constantly refining my skills to stay updated with the latest 
              industry trends.
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
