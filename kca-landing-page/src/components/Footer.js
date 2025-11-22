import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="logo">
            <span className="logo-symbol">&gt;_</span>
            <span className="logo-text">KCA</span>
          </div>
          <p className="footer-tagline">Research. Coding. Engineering.</p>
        </div>

        <div className="footer-links">
          <div className="link-group">
            <h4>Platform</h4>
            <a href="#vision">Vision</a>
            <a href="#divisions">Divisions</a>
            <a href="#services">Services</a>
          </div>
          <div className="link-group">
            <h4>Community</h4>
            <a href="https://github.com/PhilipKone/Kone-Code-Academy">GitHub</a>
            <a href="https://discord.gg/example">Discord</a>
            <a href="https://twitter.com/example">Twitter</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Kone-Code-Academy. Open Source License.</p>
      </div>
    </footer>
  );
};

export default Footer;
