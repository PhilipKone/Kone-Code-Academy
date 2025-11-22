import React from 'react';
import ServiceCard from '../components/ServiceCard';

const servicesData = [
    {
        title: 'Data Analysis',
        description: 'We provide thorough analysis using state-of-the-art tools to ensure accuracy and insight in your research.',
        icon: 'chart-line',
        link: '/services/data-analysis',
        color: 'primary'
    },
    {
        title: 'Report Writing',
        description: 'Get professional reports written to meet academic and professional standards, customized to your specifications.',
        icon: 'file-alt',
        link: '/services/report-writing',
        color: 'success'
    },
    {
        title: 'Research Consulting',
        description: 'Our expert team offers consulting to guide your research process, from idea formulation to final output.',
        icon: 'lightbulb',
        link: '/services/research-consulting',
        color: 'warning'
    },
    {
        title: 'Research Topic Selection',
        description: 'We help you choose the right research topic that aligns with your interests and academic goals.',
        icon: 'search',
        link: '/services/topic-selection',
        color: 'info'
    },
    {
        title: 'Mentorship & Support',
        description: 'Receive continuous guidance and support throughout your research journey.',
        icon: 'hands-helping',
        link: '/services/mentorship',
        color: 'secondary'
    },
    {
        title: 'Assignment Support',
        description: 'Get assistance with your academic assignments to ensure high-quality submissions.',
        icon: 'book',
        link: '/services/assignment-support',
        color: 'danger'
    }
];

const Services = () => {
    return (
        <div className="page-container container" style={{ paddingTop: '100px', minHeight: '80vh' }}>
            <div className="text-center mb-5">
                <h1 className="text-gradient mb-3">Our Services</h1>
                <p className="lead text-secondary">Offering tailored research solutions to meet your needs</p>
            </div>

            <div className="services-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                paddingBottom: '4rem'
            }}>
                {servicesData.map((service, index) => (
                    <ServiceCard key={index} {...service} />
                ))}
            </div>
        </div>
    );
};

export default Services;
