import React from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaCheckCircle, FaCode, FaLightbulb, FaRocket } from 'react-icons/fa';

const VisionAI = () => {
    return (
        <div className="page-container container" style={{ paddingTop: '100px', minHeight: '80vh' }}>

            {/* Header Section */}
            <div className="text-center mb-5">
                <h1 className="text-gradient d-flex align-items-center justify-content-center gap-3 mb-3">
                    <FaEye className="text-primary" /> Vision AI (ConviAI)
                </h1>
                <p className="lead text-secondary">Empowering Research with Advanced Image Intelligence</p>
            </div>

            {/* Features Section */}
            <div className="row justify-content-center mb-5">
                <div className="col-lg-10">
                    <div className="card glass-panel border-0 p-5 text-center">
                        <div className="icon mb-4 text-info mx-auto" style={{ fontSize: '3rem' }}>
                            <FaEye className="blink-animation" />
                        </div>
                        <h2 className="fw-bold text-primary mb-3">Empowering Research with Vision AI</h2>
                        <p className="lead text-secondary mb-4">
                            ConviAI brings advanced image and document intelligence to Kone Consult, helping you extract
                            insights, automate analysis, and accelerate your research journey.
                        </p>
                        <div className="d-flex flex-wrap justify-content-center gap-4">
                            <div className="d-flex align-items-center text-secondary">
                                <FaCheckCircle className="text-success me-2" /> OCR & text extraction
                            </div>
                            <div className="d-flex align-items-center text-secondary">
                                <FaCheckCircle className="text-success me-2" /> Chart & diagram analysis
                            </div>
                            <div className="d-flex align-items-center text-secondary">
                                <FaCheckCircle className="text-success me-2" /> Visual Q&A and search
                            </div>
                            <div className="d-flex align-items-center text-secondary">
                                <FaCheckCircle className="text-success me-2" /> Content moderation
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* How It Works Section */}
            <div className="row justify-content-center mb-5">
                <div className="col-lg-10">
                    <div className="card glass-panel border-0 p-4">
                        <h3 className="fw-bold mb-4 text-primary d-flex align-items-center gap-2">
                            <FaLightbulb /> How It Works
                        </h3>
                        <ol className="text-secondary ps-3 mb-4">
                            <li className="mb-2">Upload an image (e.g., research chart, handwritten note, scanned document).</li>
                            <li className="mb-2">ConviAI analyzes the image using state-of-the-art AI models.</li>
                            <li className="mb-2">Get instant results: extracted text, chart insights, or visual Q&A.</li>
                            <li className="mb-2">Integrate with our chatbot for deeper research support.</li>
                        </ol>
                        <p className="text-accent mb-0">Vision AI is designed to make research easier, faster, and more accessible for everyone.</p>
                    </div>
                </div>
            </div>

            {/* Integration Example Section */}
            <div className="row justify-content-center mb-5">
                <div className="col-lg-10">
                    <div className="card glass-panel border-0 p-4">
                        <h3 className="fw-bold mb-4 text-primary d-flex align-items-center gap-2">
                            <FaCode /> Integration Example (Google Cloud Vision)
                        </h3>
                        <div className="bg-dark p-3 rounded mb-3 border border-secondary" style={{ overflowX: 'auto' }}>
                            <code className="text-light">
                                <span className="text-info">const</span> vision = require(<span className="text-warning">'@google-cloud/vision'</span>);<br />
                                <span className="text-info">const</span> client = <span className="text-info">new</span> vision.ImageAnnotatorClient();<br /><br />
                                <span className="text-info">async function</span> <span className="text-warning">analyzeImage</span>(imagePath) {'{'}<br />
                                &nbsp;&nbsp;<span className="text-info">const</span> [result] = <span className="text-info">await</span> client.textDetection(imagePath);<br />
                                &nbsp;&nbsp;<span className="text-info">const</span> detections = result.textAnnotations;<br />
                                &nbsp;&nbsp;<span className="text-info">return</span> detections[0] ? detections[0].description : <span className="text-warning">''</span>;<br />
                                {'}'}
                            </code>
                        </div>
                        <p className="text-secondary mb-0">You can also use OpenAI, Azure, or Hugging Face for other Vision AI features.</p>
                    </div>
                </div>
            </div>

            {/* Use Cases Section */}
            <div className="row justify-content-center mb-5">
                <div className="col-lg-10">
                    <div className="card glass-panel border-0 p-4">
                        <h3 className="fw-bold mb-4 text-primary">Vision AI Use Cases</h3>
                        <ul className="text-secondary ps-3 mb-0">
                            <li className="mb-2">Extract text from research papers, forms, or handwritten notes</li>
                            <li className="mb-2">Analyze diagrams and charts for instant insights</li>
                            <li className="mb-2">Visual search and Q&A on uploaded images</li>
                            <li className="mb-2">Content moderation for user-uploaded images</li>
                            <li className="mb-2">Automate repetitive research tasks</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Get Started Section */}
            <div className="row justify-content-center mb-5">
                <div className="col-lg-10">
                    <div className="card glass-panel border-0 p-5 text-center">
                        <div className="icon mb-3 text-success mx-auto" style={{ fontSize: '2.5rem' }}>
                            <FaRocket />
                        </div>
                        <h3 className="fw-bold mb-3 text-primary">Get Started</h3>
                        <p className="text-secondary mb-4">
                            Ready to supercharge your research with Vision AI?
                        </p>
                        <div className="d-flex justify-content-center gap-3">
                            <Link to="/contact" className="btn btn-primary">Contact Us</Link>
                            <Link to="/services" className="btn btn-outline-primary">View Services</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default VisionAI;
