import React from 'react';
import emailLight from '../assets/email_light.png';
import emailDark from '../assets/email_dark.png';
import linkedinLight from '../assets/linkedin_light.png';
import linkedinDark from '../assets/linkedin_dark.png';

const Contact = ({ theme }) => {
  const emailIcon = theme === 'dark' ? emailDark : emailLight;
  const linkedinIcon = theme === 'dark' ? linkedinDark : linkedinLight;

  return (
    <section id="contact">
      <div className="section-title-wrapper">
        <p className="section-subtitle">Get in Touch</p>
        <h2 className="section-title">Contact Me</h2>
      </div>

      <div className="contact-container">
        <div className="glass-card contact-card">
          <p>
            Feel free to reach out for game development or full-stack web project collaboration, 
            contract opportunities, or just to say hello! I'm always open to discussing new ideas.
          </p>

          <div className="contact-methods">
            {/* Email Contact Item */}
            <a href="mailto:hardiksatwik2004@gmail.com" className="contact-method-item">
              <div className="contact-method-icon-wrap">
                <img src={emailIcon} alt="Email" />
              </div>
              <div className="contact-method-text">
                <div className="contact-method-label">Email</div>
                <div className="contact-method-value">hardiksatwik2004@gmail.com</div>
              </div>
            </a>

            {/* LinkedIn Contact Item */}
            <a 
              href="https://www.linkedin.com/in/hardik-srivastava-/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-method-item"
            >
              <div className="contact-method-icon-wrap">
                <img src={linkedinIcon} alt="LinkedIn" />
              </div>
              <div className="contact-method-text">
                <div className="contact-method-label">LinkedIn</div>
                <div className="contact-method-value">hardik-srivastava-</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
