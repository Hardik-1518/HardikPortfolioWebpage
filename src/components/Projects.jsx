import React, { useState } from 'react';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import vartagram from '../assets/vartagram.jpg';
import arrowLight from '../assets/arrow_light.png';
import arrowDark from '../assets/arrow_dark.png';

const Projects = ({ theme, onPlaySnake }) => {
  const arrowIcon = theme === 'dark' ? arrowDark : arrowLight;
  const [filter, setFilter] = useState('all');

  const projectList = [
    {
      title: 'Vintage Snake Game By JS',
      image: project1,
      desc: 'A classic retro snake arcade game built fully in JavaScript, utilizing HTML5 Canvas for rendering. Features score tracking, responsive controls, and speeds that scale with difficulty.',
      tags: ['HTML5 Canvas', 'CSS3', 'JavaScript'],
      category: 'web',
      primaryLink: 'https://vintagesnakegamebyhardiksrivastava.netlify.app/',
      primaryLabel: 'Live Demo',
      secondaryLink: 'https://github.com/Hardik-1518/Hardik-sSnakeGame_By_JS.git',
      secondaryLabel: 'GitHub',
      playable: true,
    },
    {
      title: 'VartaGram – Social Media Web App',
      subheading: 'connect share varta',
      image: vartagram,
      desc: 'A full-stack MERN social media platform supporting user authentication via Clerk, multimedia posts, user connections, and real-time messaging. Developed REST APIs and integrated cloud image storage via ImageKit for scalable media handling and dynamic user discovery.',
      tags: ['React', 'Node.js', 'MongoDB', 'Clerk', 'ImageKit', 'MERN Stack'],
      category: 'web',
      primaryLink: 'https://varta-gram.vercel.app/',
      primaryLabel: 'Live Demo',
      secondaryLink: 'https://github.com/Hardik-1518/VartaGram',
      secondaryLabel: 'GitHub',
      playable: false,
    },
    {
      title: 'Indian Car Racing 3D',
      image: project2,
      desc: 'An immersive 3D racing simulator designed and developed in Unity. Features realistic physics-based vehicle dynamics, obstacle avoidance, and responsive driving controls optimized for mobile and desktop.',
      tags: ['Unity', 'C# Scripting', '3D Graphics', 'Game Design', 'Google Play'],
      category: 'game',
      primaryLink: 'https://play.google.com/store/apps/details?id=com.ANSHJAINGLOBALNETWORS.ICR&pcampaignid=web_share',
      primaryLabel: 'Google Play',
      secondaryLink: null,
      secondaryLabel: null,
      playable: false,
    },
    {
      title: 'Highlights of Unity 2D/3D Games',
      image: project3,
      desc: 'A cinematic compilation and gameplay highlight reel showcasing multiple indie game prototypes, mechanical iterations, UI design, particle systems, and level designs built using Unity.',
      tags: ['Unity 2D/3D', 'Cinematics', 'Level Design', 'Portfolio Compilation'],
      category: 'game',
      primaryLink: 'https://www.youtube.com/watch?v=o_CaLAx-SR4',
      primaryLabel: 'Watch Video',
      secondaryLink: null,
      secondaryLabel: null,
      playable: false,
    },
  ];

  const filteredProjects = projectList.filter(
    (project) => filter === 'all' || project.category === filter
  );

  return (
    <section id="projects">
      <div className="section-title-wrapper">
        <p className="section-subtitle">Browse My Recent</p>
        <h2 className="section-title">Projects</h2>
      </div>

      {/* Dynamic Filter Controls */}
      <div className="filter-controls">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All Projects
        </button>
        <button 
          className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
          onClick={() => setFilter('web')}
        >
          Web Development
        </button>
        <button 
          className={`filter-btn ${filter === 'game' ? 'active' : ''}`}
          onClick={() => setFilter('game')}
        >
          Game Development
        </button>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div key={project.title} className="glass-card project-card anim-fade-in">
            <div className="project-img-wrapper">
              <img src={project.image} alt={project.title} />
              {project.playable && (
                <div className="playable-overlay">
                  <button 
                    className="btn btn-primary play-overlay-btn"
                    onClick={onPlaySnake}
                  >
                    🕹️ Play Inline
                  </button>
                </div>
              )}
            </div>
            <div className="project-info">
              <h3 className="project-card-title">{project.title}</h3>
              {project.subheading && (
                <p className="project-subheading" style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent)', fontWeight: 600, marginBottom: '0.8rem' }}>
                  {project.subheading}
                </p>
              )}
              <p className="project-desc">{project.desc}</p>
              
              <div className="project-tags">
                {project.tags.map((tag, tIndex) => (
                  <span key={tIndex} className="project-tag">{tag}</span>
                ))}
              </div>

              <div className="project-links">
                {project.secondaryLink && (
                  <a 
                    href={project.secondaryLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-secondary project-btn"
                  >
                    {project.secondaryLabel}
                  </a>
                )}
                
                {project.playable ? (
                  <button 
                    onClick={onPlaySnake}
                    className="btn btn-primary project-btn play-inline-btn"
                  >
                    🕹️ Play Game
                  </button>
                ) : (
                  project.primaryLink && (
                    <a 
                      href={project.primaryLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-primary project-btn"
                    >
                      {project.primaryLabel}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <a href="#contact" className="arrow-scroller anim-float" aria-label="Scroll to contact">
          <img src={arrowIcon} alt="Down Arrow" />
        </a>
      </div>
    </section>
  );
};

export default Projects;
