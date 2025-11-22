import React from 'react';
import { FaUsers, FaCheckCircle, FaUser, FaLinkedin, FaEnvelope, FaFileAlt, FaCheck } from 'react-icons/fa';

const About = () => {
    return (
        <div className="page-container container" style={{ paddingTop: '100px', minHeight: '80vh' }}>

            {/* About Section */}
            <div className="row justify-content-center mb-5">
                <div className="col-lg-8">
                    <div className="card glass-panel border-0 p-5 text-center">
                        <div className="icon mb-4 text-primary mx-auto" style={{ fontSize: '3rem' }}>
                            <FaUsers />
                        </div>
                        <h2 className="fw-bold text-gradient mb-3">About Kone Consult</h2>
                        <p className="lead text-primary mb-4">Your trusted partner in professional research assistance</p>
                        <p className="text-secondary mb-4">
                            Kone Consult was founded with the goal of supporting students and professionals by offering comprehensive
                            research assistance. We specialize in data analysis, report writing, and more.
                        </p>
                        <div className="d-flex flex-wrap justify-content-center gap-4">
                            <div className="d-flex align-items-center text-secondary">
                                <FaCheckCircle className="text-success me-2" /> Personalized support
                            </div>
                            <div className="d-flex align-items-center text-secondary">
                                <FaCheckCircle className="text-success me-2" /> Data-driven insights
                            </div>
                            <div className="d-flex align-items-center text-secondary">
                                <FaCheckCircle className="text-success me-2" /> Professional documentation
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="row justify-content-center pb-5">
                <div className="col-12 text-center mb-4">
                    <h2 className="fw-bold text-gradient">Our Team</h2>
                    <p className="lead text-secondary">Meet the expert behind Kone Consult</p>
                </div>
                <div className="col-lg-6">
                    <div className="card glass-panel border-0 p-4 text-center h-100">
                        <div className="icon mb-3 text-primary mx-auto" style={{ fontSize: '3rem' }}>
                            <FaUser />
                        </div>

                        <h3 className="card-title mb-1 text-primary">Philip Hotor</h3>
                        <h5 className="text-accent mb-3">Founder & Lead Researcher</h5>
                        <p className="card-text text-secondary mb-4">
                            A passionate Data Science & AI Researcher with expertise in computational
                            modeling, simulation, and data analysis. With 2+ years of experience in research and development, Philip
                            specializes in:
                        </p>
                        <ul className="list-unstyled text-start d-inline-block mb-4 text-secondary">
                            <li className="mb-2"><FaCheck className="text-primary me-2" /> Computational modeling and simulation</li>
                            <li className="mb-2"><FaCheck className="text-primary me-2" /> Data analysis and algorithm development</li>
                            <li className="mb-2"><FaCheck className="text-primary me-2" /> Biomedical engineering and research</li>
                            <li className="mb-2"><FaCheck className="text-primary me-2" /> STEM education and instruction</li>
                        </ul>
                        <div className="d-flex justify-content-center gap-3">
                            <a href="https://www.linkedin.com/company/phconsult-gh/?viewAsMember=true" target="_blank" rel="noreferrer"
                                className="btn btn-sm btn-outline-primary d-flex align-items-center gap-2">
                                <FaLinkedin /> LinkedIn
                            </a>
                            <a href="/contact" className="btn btn-sm btn-outline-primary d-flex align-items-center gap-2">
                                <FaEnvelope /> Contact
                            </a>
                            <a href="/cv.html" className="btn btn-sm btn-outline-primary d-flex align-items-center gap-2">
                                <FaFileAlt /> CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;
