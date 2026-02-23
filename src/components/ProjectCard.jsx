import React from 'react';
import { MapPin, DollarSign, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, onClick }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="project-card"
            style={{
                backgroundColor: 'white',
                borderRadius: 'var(--radius)',
                overflow: 'hidden',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                transition: 'var(--transition)',
                cursor: 'pointer',
                border: '1px solid var(--border)'
            }}
            onClick={() => onClick(project)}
        >
            <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                <img
                    src={project.image}
                    alt={project.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    className="card-image"
                />
                <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    backgroundColor: 'var(--primary)',
                    color: 'white',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    textTransform: 'uppercase'
                }}>
                    {project.status}
                </div>
            </div>

            <div style={{ padding: '1.5rem' }}>
                <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>{project.name}</h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--muted)', fontSize: '0.9rem' }}>
                        <MapPin size={16} color="var(--primary)" />
                        <span>{project.location}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--muted)', fontSize: '0.9rem' }}>
                        <DollarSign size={16} color="var(--primary)" />
                        <span>Budget: {project.budget}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--muted)', fontSize: '0.9rem' }}>
                        <TrendingUp size={16} color="var(--primary)" />
                        <div style={{ flex: 1, backgroundColor: '#f1f5f9', height: '8px', borderRadius: '4px' }}>
                            <div style={{
                                width: `${project.progress}%`,
                                backgroundColor: 'var(--primary)',
                                height: '100%',
                                borderRadius: '4px'
                            }}></div>
                        </div>
                        <span style={{ fontWeight: '600', color: 'var(--secondary)' }}>{project.progress}%</span>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }
        .project-card:hover .card-image {
          transform: scale(1.1);
        }
      `}</style>
        </motion.div>
    );
};

export default ProjectCard;
