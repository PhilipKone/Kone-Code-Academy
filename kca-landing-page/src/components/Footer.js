import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">
              <span className="footer-logo-icon">🎓</span>
              Kone-Code-Academy
            </h3>
            <p className="footer-tagline">
              Research, Coding, and Engineering the Right Way.
            </p>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#vision">Vision</a></li>
              <li><a href="#divisions">Divisions</a></li>
              <li><a href="#services">Services</a></li>
              <li>
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeXOBgnnnquQmQHHU1Kbyw9iYfK7gJ6Kyj5T5OctIcyy4fXSA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Started
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Divisions</h4>
            <ul className="footer-links">
              <li>🔬 Kone Consult</li>
              <li>💻 Kone Code</li>
              <li>🛠️ Kone Lab</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Kone-Code-Academy. All rights reserved.</p>
          <p className="footer-license">
            This project is licensed under the terms of the LICENSE file.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

