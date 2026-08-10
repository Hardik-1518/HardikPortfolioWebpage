import React from 'react';
import checkmarkLight from '../assets/checkmark_light.png';
import checkmarkDark from '../assets/checkmark_dark.png';
import arrowLight from '../assets/arrow_light.png';
import arrowDark from '../assets/arrow_dark.png';

const Experience = ({ theme }) => {
  const checkIcon = theme === 'dark' ? checkmarkDark : checkmarkLight;
  const arrowIcon = theme === 'dark' ? arrowDark : arrowLight;

  const fullStackSkills = [
    { name: 'React.js', level: 'Experienced' },
    { name: 'Node.js', level: 'Intermediate' },
    { name: 'Express.js', level: 'Intermediate' },
    { name: 'MongoDB', level: 'Intermediate' },
    { name: 'Firebase', level: 'Intermediate' },
    { name: 'SQL Databases', level: 'Intermediate' },
  ];

  const aiSkills = [
    { name: 'Generative AI', level: 'Experienced' },
    { name: 'LLM Fine-Tuning', level: 'Intermediate' },
    { name: 'AI APIs Integrations', level: 'Experienced' },
    { name: 'Agentic Workflows', level: 'Intermediate' },
    { name: 'LangChain & RAG', level: 'Basic' },
  ];

  const gameSkills = [
    { name: 'Unity Engine', level: 'Experienced' },
    { name: 'Game Architecture', level: 'Experienced' },
    { name: 'Multiplayer Systems', level: 'Intermediate' },
    { name: '2D/3D Dynamics', level: 'Experienced' },
    { name: 'Physics & Graphics', level: 'Intermediate' },
  ];

  const programmingLanguages = [
    { name: 'C++', level: 'Intermediate' },
    { name: 'C#', level: 'Experienced' },
    { name: 'Java', level: 'Intermediate' },
    { name: 'Python', level: 'Experienced' },
    { name: 'JavaScript', level: 'Experienced' },
  ];

  return (
    <section id="experience">
      <div className="section-title-wrapper">
        <p className="section-subtitle">Explore My</p>
        <h2 className="section-title">Skills & Experience</h2>
      </div>

      <div className="experience-grids">
        {/* Full Stack Card */}
        <div className="glass-card experience-box">
          <h3 className="experience-box-title">Full-Stack Development</h3>
          <div className="skills-grid">
            {fullStackSkills.map((skill, index) => (
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

        {/* AI Card */}
        <div className="glass-card experience-box">
          <h3 className="experience-box-title">AI Engineering</h3>
          <div className="skills-grid">
            {aiSkills.map((skill, index) => (
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

        {/* Game Dev Card */}
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

        {/* Languages Card */}
        <div className="glass-card experience-box">
          <h3 className="experience-box-title">Programming Languages</h3>
          <div className="skills-grid">
            {programmingLanguages.map((skill, index) => (
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
