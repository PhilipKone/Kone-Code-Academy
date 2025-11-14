import React from 'react';
import './Divisions.css';

const Divisions = () => {
  const divisions = [
    {
      icon: '🔬',
      title: 'Research (Kone Consult)',
      subtitle: 'Formerly PHconsult',
      description: 'This division is dedicated to academic and scientific research. We assist with everything from topic selection and data analysis to thesis writing and mentorship. Our goal is to empower researchers to produce high-quality, impactful work.',
      color: '#667eea'
    },
    {
      icon: '💻',
      title: 'Coding (Kone Code)',
      subtitle: 'Programming Excellence',
      description: 'The coding division offers a range of programs and courses designed to build strong programming skills. Whether you\'re starting your journey or looking to master advanced concepts, we have something for you.',
      color: '#f093fb'
    },
    {
      icon: '🛠️',
      title: 'Engineering (Kone Lab)',
      subtitle: 'Innovation & Design',
      description: 'Kone Lab is where ideas turn into reality. This division focuses on practical engineering skills, including 3D modeling, design, simulation, and embedded systems like Arduino programming.',
      color: '#4facfe'
    }
  ];

  return (
    <section id="divisions" className="divisions">
      <div className="divisions-container">
        <div className="section-header">
          <h2 className="section-title">Core Divisions</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            KCA is structured into three distinct divisions, each with a specialized focus
          </p>
        </div>
        <div className="divisions-grid">
          {divisions.map((division, index) => (
            <div key={index} className="division-card">
              <div className="division-icon" style={{ background: `linear-gradient(135deg, ${division.color}15 0%, ${division.color}25 100%)` }}>
                <span style={{ fontSize: '4rem' }}>{division.icon}</span>
              </div>
              <h3 className="division-title">{division.title}</h3>
              <p className="division-subtitle">{division.subtitle}</p>
              <p className="division-description">{division.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Divisions;

