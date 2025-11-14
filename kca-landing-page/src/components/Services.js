import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      division: 'Research (Kone Consult)',
      icon: '🔬',
      items: [
        'Research Topic Selection',
        'Data Analysis',
        'Report/Thesis Writing',
        'Mentorship'
      ],
      color: '#667eea'
    },
    {
      division: 'Coding (Kone Code)',
      icon: '💻',
      items: [
        'Python Masterclass',
        'C/C++ School',
        'R & MATLAB School',
        'Face-to-Face & Online Tuition'
      ],
      color: '#f093fb'
    },
    {
      division: 'Engineering (Kone Lab)',
      icon: '🛠️',
      items: [
        '3D Modelling, Design, & Simulation',
        'Arduino Programming'
      ],
      color: '#4facfe'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="section-header">
          <h2 className="section-title">Services We Offer</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Comprehensive educational services tailored to your needs
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-header">
                <span className="service-icon" style={{ fontSize: '3rem' }}>{service.icon}</span>
                <h3 className="service-title">{service.division}</h3>
              </div>
              <ul className="service-list">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="service-item">
                    <span className="service-check">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

