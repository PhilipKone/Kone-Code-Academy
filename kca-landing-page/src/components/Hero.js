import React from 'react';
import './Hero.css';
import TypingAnimation from './TypingAnimation';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <TypingAnimation />
          </h1>
          <p className="hero-subtitle">
            Welcome to <strong>Kone-Code-Academy (KCA)</strong>, an open-source initiative 
            dedicated to pioneering research, coding, and engineering for all age groups 
            and skill levels.
          </p>
          <p className="hero-description">
            Our mission is to provide a structured and supportive environment for learning 
            and innovation, making high-quality education accessible to everyone.
          </p>
          <div className="hero-buttons">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSeXOBgnnnquQmQHHU1Kbyw9iYfK7gJ6Kyj5T5OctIcyy4fXSA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Get Started
            </a>
            <button 
              className="btn btn-secondary"
              onClick={() => scrollToSection('divisions')}
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-card card-1">
            <span className="card-icon">🔬</span>
            <span className="card-text">Research</span>
          </div>
          <div className="floating-card card-2">
            <span className="card-icon">💻</span>
            <span className="card-text">Coding</span>
          </div>
          <div className="floating-card card-3">
            <span className="card-icon">🛠️</span>
            <span className="card-text">Engineering</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

