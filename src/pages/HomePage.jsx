import React from 'react';
import { PROJECTS, SERVICES } from '../constants';
import ProjectCard from '../components/ProjectCard';
import TestimonialSlider from '../components/TestimonialSlider';
import ContactForm from '../components/ContactForm';
import { ArrowRight, ChevronDown, CheckCircle, Layers, Factory, ClipboardList, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap = {
    layers: <Layers size={40} />,
    factory: <Factory size={40} />,
    "clipboard-list": <ClipboardList size={40} />,
    leaf: <Leaf size={40} />
};

const HomePage = ({ onProjectClick }) => {
    return (
        <div>
            {/* Hero Section */}
            <section style={{
                height: '100vh',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
                background: 'linear-gradient(rgba(20, 43, 71, 0.75), rgba(20, 43, 71, 0.75)), url("https://images.unsplash.com/photo-1541976590-7139414bc81c?q=80&w=2000&auto=format&fit=crop")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white'
            }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ maxWidth: '700px' }}
                    >
                        <span style={{
                            color: 'var(--primary)',
                            fontWeight: '700',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            marginBottom: '1rem',
                            display: 'block'
                        }}>
                            Est. 1998 - Excellence in Construction
                        </span>
                        <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                            Building Tomorrow's <span style={{ color: 'var(--primary)' }}>Infrastructure</span> Today
                        </h1>
                        <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', opacity: 0.9, lineHeight: '1.6' }}>
                            Leading the way in structural steel and architectural innovation. We turn complex blueprints into enduring realities with precision and passion.
                        </p>
                        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                            <a href="#projects" className="btn btn-primary">
                                View Our Work <ArrowRight size={20} />
                            </a>
                            <a href="#contact" className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>
                                Contact Experts
                            </a>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', opacity: 0.6 }}
                >
                    <ChevronDown size={32} />
                </motion.div>
            </section>

            {/* Services Section */}
            <section id="services" className="section-padding" style={{ backgroundColor: '#f8fafc' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem auto' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Expertise</h2>
                        <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--primary)', margin: '0 auto 1.5rem auto' }}></div>
                        <p style={{ color: 'var(--muted)', fontSize: '1.1rem' }}>
                            We provide comprehensive construction solutions tailored to meet the highest safety and quality standards in the industry.
                        </p>
                    </div>

                    <div className="grid-cols-3">
                        {SERVICES.map((service, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10 }}
                                style={{
                                    backgroundColor: 'white',
                                    padding: '2.5rem',
                                    borderRadius: 'var(--radius)',
                                    border: '1px solid var(--border)',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
                                }}
                            >
                                <div style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>
                                    {iconMap[service.icon]}
                                </div>
                                <h3 style={{ marginBottom: '1rem' }}>{service.title}</h3>
                                <p style={{ color: 'var(--muted)', lineHeight: '1.6' }}>{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Projects */}
            <section id="projects" className="section-padding">
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '1rem' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Featured Projects</h2>
                            <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--primary)' }}></div>
                        </div>
                        <a href="#dashboard" className="btn btn-outline">Explore All Projects</a>
                    </div>

                    <div className="grid-cols-3">
                        {PROJECTS.slice(0, 3).map((project) => (
                            <ProjectCard key={project.id} project={project} onClick={onProjectClick} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section-padding" style={{ backgroundColor: 'var(--secondary)', color: 'white', overflow: 'hidden' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>What Our Clients Say</h2>
                        <p style={{ color: '#94a3b8' }}>Trusted by industry leaders worldwide.</p>
                    </div>
                    <TestimonialSlider />
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="section-padding">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '5rem', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Start Your Journey <span style={{ color: 'var(--primary)' }}>With Us</span></h2>
                            <p style={{ color: 'var(--muted)', fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: '1.7' }}>
                                Ready to discuss your next construction milestone? Our team of experts is here to provide technical guidance and detailed quotes for your project.
                            </p>

                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                {[
                                    "Free Consultation & Site Assessment",
                                    "Detailed Cost Estimation & Budgeting",
                                    "Advanced Structural Design Solutions",
                                    "Dedicated Project Management Team"
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: '600' }}>
                                        <CheckCircle color="var(--primary)" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
