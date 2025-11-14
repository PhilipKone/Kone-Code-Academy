import React from 'react';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta">
      <div className="cta-container">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Begin Your Journey?</h2>
          <p className="cta-description">
            Whether you're interested in our services or want to contribute to our open-source 
            projects, we'd love to hear from you. Fill out our form to register your interest, 
            book a service, or get in touch with our team.
          </p>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSeXOBgnnnquQmQHHU1Kbyw9iYfK7gJ6Kyj5T5OctIcyy4fXSA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            Get Started Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;

