import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';

// Mock data for now - will be replaced by Firebase fetch
const mockProjects = [
    {
        title: 'Kone Consult Platform',
        description: 'The core platform for project management and impact tracking.',
        tools: 'HTML, CSS, JS, Firebase',
        githubUrl: 'https://github.com/PhilipKone/PHconsult',
        imageUrl: null // Placeholder
    }
];

const Portfolio = () => {
    const [projects, setProjects] = useState(mockProjects);
    const [loading, setLoading] = useState(false);

    return (
        <div className="page-container container" style={{ paddingTop: '100px', minHeight: '80vh' }}>
            <div className="text-center mb-5">
                <h1 className="text-gradient mb-3">Portfolio</h1>
                <p className="lead text-secondary">Showcasing our past projects and success stories.</p>
            </div>

            {loading ? (
                <div className="text-center py-5">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                <div className="portfolio-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                    paddingBottom: '4rem'
                }}>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            )}

            {projects.length === 0 && !loading && (
                <div className="alert glass-panel text-center p-5">
                    <h3 className="text-secondary">No projects found.</h3>
                </div>
            )}
        </div>
    );
};

export default Portfolio;
