import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({ isOpen, onClose, project }) => {
    if (!isOpen || !project) return null;

    return (
        <AnimatePresence>
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 1000,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem'
            }}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(20, 43, 71, 0.85)',
                        backdropFilter: 'blur(4px)'
                    }}
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    style={{
                        position: 'relative',
                        width: '100%',
                        maxWidth: '800px',
                        backgroundColor: 'white',
                        borderRadius: 'var(--radius)',
                        overflow: 'hidden',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                        zIndex: 1001
                    }}
                >
                    <button
                        onClick={onClose}
                        style={{
                            position: 'absolute',
                            top: '1rem',
                            right: '1rem',
                            backgroundColor: 'white',
                            borderRadius: '50%',
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                            zIndex: 10,
                            color: 'var(--secondary)'
                        }}
                    >
                        <X size={24} />
                    </button>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
                        <div style={{ height: '400px' }}>
                            <img
                                src={project.image}
                                alt={project.name}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <span style={{ color: 'var(--primary)', fontWeight: '700', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>
                                {project.status} Project
                            </span>
                            <h2 style={{ fontSize: '2rem', margin: '0.5rem 0 1.5rem 0' }}>{project.name}</h2>
                            <p style={{ color: 'var(--muted)', marginBottom: '2rem', lineHeight: '1.7' }}>
                                {project.description || "As requested by the client, this project focuses on delivering high-quality infrastructure with a focus on durability and modern aesthetics. Our team is committed to excellence in every stage of construction."}
                            </p>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
                                <div>
                                    <h4 style={{ fontSize: '0.9rem', color: 'var(--secondary)', marginBottom: '0.25rem' }}>Location</h4>
                                    <p style={{ color: 'var(--muted)' }}>{project.location}</p>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '0.9rem', color: 'var(--secondary)', marginBottom: '0.25rem' }}>Budget</h4>
                                    <p style={{ color: 'var(--muted)' }}>{project.budget}</p>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '0.9rem', color: 'var(--secondary)', marginBottom: '0.25rem' }}>Progress</h4>
                                    <p style={{ color: 'var(--muted)' }}>{project.progress}% Complete</p>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '0.9rem', color: 'var(--secondary)', marginBottom: '0.25rem' }}>Lead Architect</h4>
                                    <p style={{ color: 'var(--muted)' }}>Sarah J. Steel</p>
                                </div>
                            </div>

                            <button className="btn btn-primary">Download Brochure</button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default Modal;
