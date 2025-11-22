import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      category: 'Research',
      items: [
        { title: 'Thesis Guidance', desc: 'End-to-end support for academic writing.' },
        { title: 'Data Analytics', desc: 'Processing complex datasets with Python/R.' },
        { title: 'Publication', desc: 'Assistance with journal submissions.' }
      ]
    },
    {
      category: 'Development',
      items: [
        { title: 'Python Core', desc: 'From syntax to advanced algorithms.' },
        { title: 'Web Stack', desc: 'Full-stack development with React & Node.' },
        { title: 'System Design', desc: 'Architecture and scalability patterns.' }
      ]
    },
    {
      category: 'Hardware',
      items: [
        { title: 'IoT Systems', desc: 'Arduino & ESP32 prototyping.' },
        { title: '3D Design', desc: 'CAD modeling for manufacturing.' },
        { title: 'Robotics', desc: 'Control systems and automation.' }
      ]
    }
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="section-header">
          <h2 className="section-title">Available <span className="text-gradient">Services</span></h2>
          <p className="section-subtitle">Comprehensive tools and resources for your growth.</p>
        </div>

        <div className="services-layout">
          {services.map((category, idx) => (
            <div key={idx} className="service-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="category-grid">
                {category.items.map((item, i) => (
                  <div key={i} className="service-item glass-panel">
                    <div className="service-header">
                      <span className="service-icon">⚡</span>
                      <h4 className="service-title">{item.title}</h4>
                    </div>
                    <p className="service-desc">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
