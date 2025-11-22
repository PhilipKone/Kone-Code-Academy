import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <span className="logo-symbol">&gt;_</span>
          <span className="logo-text">KCA</span>
        </div>

        <nav className="nav-menu">
          <a href="#vision" className="nav-link">Vision</a>
          <a href="#divisions" className="nav-link">Divisions</a>
          <a href="#services" className="nav-link">Services</a>
        </nav>

        <div className="header-actions">
          <a href="https://github.com/PhilipKone/Kone-Code-Academy" target="_blank" rel="noreferrer" className="btn-github">
            GitHub
          </a>
          <button className="btn-primary">Get Started</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
