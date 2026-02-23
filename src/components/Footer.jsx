import React from 'react';
import { HardHat, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'var(--secondary)', color: 'white', padding: '5rem 0 2rem 0' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '3rem',
                    marginBottom: '4rem'
                }}>
                    {/* Brand & Mission */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                            <HardHat size={32} color="var(--primary)" />
                            <span style={{ fontSize: '1.5rem', fontWeight: '800', letterSpacing: '-0.5px' }}>
                                STEEL<span style={{ color: 'var(--primary)' }}>FRAME</span>
                            </span>
                        </div>
                        <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.7' }}>
                            Building the future with precision and passion. SteelFrame is a leader in modern construction and architectural excellence.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                            <a href="#" className="social-icon"><Facebook size={20} /></a>
                            <a href="#" className="social-icon"><Twitter size={20} /></a>
                            <a href="#" className="social-icon"><Instagram size={20} /></a>
                            <a href="#" className="social-icon"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>Quick Links</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <li><a href="#" className="footer-link">About Us</a></li>
                            <li><a href="#projects" className="footer-link">Recent Projects</a></li>
                            <li><a href="#services" className="footer-link">Our Services</a></li>
                            <li><a href="#" className="footer-link">Safety Standards</a></li>
                            <li><a href="#contact" className="footer-link">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>Contact Us</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#94a3b8' }}>
                                <MapPin size={20} color="var(--primary)" />
                                <span>123 Construction Way, Steel City, ST 54321</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#94a3b8' }}>
                                <Phone size={20} color="var(--primary)" />
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#94a3b8' }}>
                                <Mail size={20} color="var(--primary)" />
                                <span>info@steelframe.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid #1e293b',
                    paddingTop: '2rem',
                    textAlign: 'center',
                    color: '#64748b',
                    fontSize: '0.9rem'
                }}>
                    <p>© {new Date().getFullYear()} SteelFrame Construction Inc. All rights reserved by Kavinesh.</p>
                </div>
            </div>

            <style jsx>{`
        .social-icon {
          color: #94a3b8;
          transition: var(--transition);
        }
        .social-icon:hover {
          color: var(--primary);
          transform: translateY(-3px);
        }
        .footer-link {
          color: #94a3b8;
          transition: var(--transition);
        }
        .footer-link:hover {
          color: var(--primary);
          padding-left: 5px;
        }
      `}</style>
        </footer>
    );
};

export default Footer;
