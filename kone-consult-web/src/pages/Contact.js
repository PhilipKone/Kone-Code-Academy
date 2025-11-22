import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="page-container container" style={{ paddingTop: '100px', minHeight: '80vh' }}>
            <div className="row g-5 pb-5">

                {/* Contact Form */}
                <div className="col-lg-6">
                    <div className="card glass-panel border-0 p-4 h-100">
                        <h2 className="text-center mb-4 fw-bold text-gradient">Contact Us</h2>
                        <form>
                            <div className="mb-3">
                                <label className="text-secondary d-block mb-2">Full Name</label>
                                <input type="text" className="form-control w-100 p-2 glass-panel text-primary" style={{ background: 'rgba(0,0,0,0.2)' }} required />
                            </div>
                            <div className="mb-3">
                                <label className="text-secondary d-block mb-2">Email address</label>
                                <input type="email" className="form-control w-100 p-2 glass-panel text-primary" style={{ background: 'rgba(0,0,0,0.2)' }} required />
                            </div>
                            <div className="mb-3">
                                <label className="text-secondary d-block mb-2">Phone Number</label>
                                <input type="tel" className="form-control w-100 p-2 glass-panel text-primary" style={{ background: 'rgba(0,0,0,0.2)' }} />
                            </div>
                            <div className="mb-3">
                                <label className="text-secondary d-block mb-2">Subject</label>
                                <select className="form-control w-100 p-2 glass-panel text-primary" style={{ background: 'rgba(0,0,0,0.2)' }} required>
                                    <option value="" className="text-dark">Select a subject</option>
                                    <option value="General Inquiry" className="text-dark">General Inquiry</option>
                                    <option value="Data Analysis" className="text-dark">Data Analysis</option>
                                    <option value="Report Writing" className="text-dark">Report Writing</option>
                                    <option value="Research Consulting" className="text-dark">Research Consulting</option>
                                    <option value="Topic Selection" className="text-dark">Topic Selection</option>
                                    <option value="Mentorship" className="text-dark">Mentorship</option>
                                    <option value="Other" className="text-dark">Other</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="text-secondary d-block mb-2">Message</label>
                                <textarea className="form-control w-100 p-2 glass-panel text-primary" rows="5" style={{ background: 'rgba(0,0,0,0.2)' }} required></textarea>
                            </div>
                            <button className="btn-primary w-100 py-2 mt-3">Send Message</button>
                        </form>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="col-lg-6">
                    <div className="card glass-panel border-0 p-4 h-100">
                        <h2 className="text-center mb-4 fw-bold text-gradient">Contact Information</h2>
                        <div className="d-flex flex-column gap-4">

                            <div className="d-flex align-items-center">
                                <div className="me-3 text-primary" style={{ fontSize: '1.5rem' }}><FaEnvelope /></div>
                                <div>
                                    <h5 className="text-primary mb-0">Email</h5>
                                    <a href="mailto:phconsultgh@gmail.com" className="text-secondary text-decoration-none">phconsultgh@gmail.com</a>
                                </div>
                            </div>

                            <div className="d-flex align-items-center">
                                <div className="me-3 text-success" style={{ fontSize: '1.5rem' }}><FaPhone /></div>
                                <div>
                                    <h5 className="text-primary mb-0">Phone</h5>
                                    <a href="tel:+0551993820" className="text-secondary text-decoration-none">+055 199 3820</a>
                                </div>
                            </div>

                            <div className="d-flex align-items-center">
                                <div className="me-3 text-danger" style={{ fontSize: '1.5rem' }}><FaMapMarkerAlt /></div>
                                <div>
                                    <h5 className="text-primary mb-0">Location</h5>
                                    <p className="text-secondary mb-0">Accra, Ghana</p>
                                </div>
                            </div>

                            <div className="d-flex align-items-center">
                                <div className="me-3 text-warning" style={{ fontSize: '1.5rem' }}><FaClock /></div>
                                <div>
                                    <h5 className="text-primary mb-0">Working Hours</h5>
                                    <p className="text-secondary mb-0">Monday - Friday: 9:00 AM - 5:00 PM</p>
                                </div>
                            </div>

                            <div className="d-flex align-items-center">
                                <div className="me-3 text-success" style={{ fontSize: '1.5rem' }}><FaWhatsapp /></div>
                                <div>
                                    <h5 className="text-primary mb-0">WhatsApp</h5>
                                    <a href="https://wa.me/233551993820" target="_blank" rel="noreferrer" className="text-secondary text-decoration-none">+233 55 199 3820</a>
                                </div>
                            </div>

                            <div className="d-flex align-items-center">
                                <div className="me-3 text-primary" style={{ fontSize: '1.5rem' }}><FaLinkedin /></div>
                                <div>
                                    <h5 className="text-primary mb-0">LinkedIn</h5>
                                    <a href="https://www.linkedin.com/company/phconsult-gh/?viewAsMember=true" target="_blank" rel="noreferrer" className="text-secondary text-decoration-none">philip-kone</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;
