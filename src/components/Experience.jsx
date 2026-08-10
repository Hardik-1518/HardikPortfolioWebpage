import React from 'react';
import checkmarkLight from '../assets/checkmark_light.png';
import checkmarkDark from '../assets/checkmark_dark.png';
import arrowLight from '../assets/arrow_light.png';
import arrowDark from '../assets/arrow_dark.png';

const Experience = ({ theme }) => {
  const checkIcon = theme === 'dark' ? checkmarkDark : checkmarkLight;
  const arrowIcon = theme === 'dark' ? arrowDark : arrowLight;

  const webSkills = [
    { name: 'HTML', level: 'Experienced' },
    { name: 'CSS', level: 'Experienced' },
    { name: 'JavaScript', level: 'Intermediate' },
    { name: 'Node JS', level: 'Basic' },
    { name: 'Git/GitHub', level: 'Basic' },
    { name: 'SQL', level: 'Intermediate' },
  ];

  const gameSkills = [
    { name: 'Unity Engine', level: 'Intermediate' },
    { name: 'C/C++/C#', level: 'Intermediate' },
    { name: 'Python', level: 'Intermediate' },
    { name: 'Java', level: 'Intermediate' },
  ];

  return (
    <section id="experience">
      <div className="section-title-wrapper">
        <p className="section-subtitle">Explore My</p>
        <h2 className="section-title">Skills & Experience</h2>
      </div>

      <div className="experience-grids">
        {/* Frontend / Fullstack Card */}
        <div className="glass-card experience-box">
          <h3 className="experience-box-title">Web Development</h3>
          <div className="skills-grid">
            {webSkills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-icon-wrap">
                  <img src={checkIcon} alt="Verified Skill" />
                </div>
                <div className="skill-name">{skill.name}</div>
                <div className="skill-level">{skill.level}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Game Development Card */}
        <div className="glass-card experience-box">
          <h3 className="experience-box-title">Game Development</h3>
          <div className="skills-grid">
            {gameSkills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-icon-wrap">
                  <img src={checkIcon} alt="Verified Skill" />
                </div>
                <div className="skill-name">{skill.name}</div>
                <div className="skill-level">{skill.level}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <a href="#projects" className="arrow-scroller anim-float" aria-label="Scroll to projects">
          <img src={arrowIcon} alt="Down Arrow" />
        </a>
      </div>
    </section>
  );
};

export default Experience;
