import React, { useState, useEffect } from 'react';
import { Menu, X, HardHat } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'Projects', href: '#projects' },
        { name: 'Services', href: '#services' },
        { name: 'Contact', href: '#contact' },
    ];

    const linkColor = scrolled ? 'var(--secondary)' : 'white';

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 1000,
                padding: scrolled ? '0.75rem 0' : '1.25rem 0',
                backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.92)' : 'transparent',
                backdropFilter: scrolled ? 'blur(12px)' : 'none',
                borderBottom: scrolled ? '1px solid var(--border)' : 'none',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.08)' : 'none',
            }}
        >
            <div
                className="container"
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr auto 1fr',
                    alignItems: 'center',
                    gap: '1rem',
                }}
            >
                {/* Logo — left */}
                <a
                    href="#"
                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifySelf: 'start' }}
                >
                    <HardHat size={32} color="var(--primary)" />
                    <span style={{ fontSize: '1.5rem', fontWeight: '800', color: scrolled ? 'var(--secondary)' : 'white', letterSpacing: '-0.5px' }}>
                        STEEL<span style={{ color: 'var(--primary)' }}>FRAME</span>
                    </span>
                </a>

                {/* Nav Links — center */}
                <div className="nav-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            style={{
                                fontWeight: '600',
                                color: linkColor,
                                fontSize: '0.95rem',
                                transition: 'color 0.2s',
                            }}
                            className="hover-primary"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* CTA — right */}
                <div style={{ justifySelf: 'end', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <a href="#contact" className="btn btn-primary nav-links" style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }}>
                        Inquire Now
                    </a>
                    {/* Mobile toggle */}
                    <button
                        className="mobile-toggle"
                        onClick={() => setIsOpen(!isOpen)}
                        style={{ display: 'none', background: 'transparent', color: scrolled ? 'var(--secondary)' : 'white' }}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div
                    style={{
                        backgroundColor: 'white',
                        padding: '1.5rem',
                        borderTop: '1px solid var(--border)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                    }}
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            style={{ fontWeight: '600', color: 'var(--secondary)', fontSize: '1rem' }}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="#contact" className="btn btn-primary" style={{ marginTop: '0.5rem' }}>
                        Inquire Now
                    </a>
                </div>
            )}

            <style>{`
        .hover-primary:hover {
          color: var(--primary) !important;
        }
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
