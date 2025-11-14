import React from 'react';
import './Vision.css';

const Vision = () => {
  return (
    <section id="vision" className="vision">
      <div className="vision-container">
        <div className="section-header">
          <h2 className="section-title">Our Vision</h2>
          <div className="title-underline"></div>
        </div>
        <div className="vision-content">
          <p className="vision-text">
            KCA is the parent organization of PHconsult, with a long-term vision to foster 
            a community of learners, researchers, and builders. We aim to make high-quality 
            education and resources accessible to everyone, from beginners to seasoned professionals.
          </p>
          <div className="vision-stats">
            <div className="stat-item">
              <div className="stat-number">3</div>
              <div className="stat-label">Core Divisions</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">∞</div>
              <div className="stat-label">Learning Opportunities</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Open Source</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;

