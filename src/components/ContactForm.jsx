import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const validate = () => {
        let tempErrors = {};
        if (!formData.name) tempErrors.name = "Name is required";
        if (!formData.email) tempErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Email is invalid";
        if (!formData.message) tempErrors.message = "Message is required";
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            // Mock submit
            setSubmitted(true);
            setTimeout(() => {
                setSubmitted(false);
                setFormData({ name: '', email: '', phone: '', message: '' });
            }, 5000);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
        if (errors[e.target.id]) {
            setErrors({ ...errors, [e.target.id]: null });
        }
    };

    if (submitted) {
        return (
            <div style={{
                textAlign: 'center',
                padding: '3rem',
                backgroundColor: 'white',
                borderRadius: 'var(--radius)',
                border: '1px solid #dcfce7',
                animation: 'fadeIn 0.5s ease'
            }}>
                <CheckCircle size={64} color="#10b981" style={{ marginBottom: '1.5rem' }} />
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Request Sent Successfully!</h3>
                <p style={{ color: 'var(--muted)' }}>Thank you for reaching out. Our team will contact you within 24 hours.</p>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                backgroundColor: 'white',
                padding: '2.5rem',
                borderRadius: 'var(--radius)',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05)',
                border: '1px solid var(--border)'
            }}
        >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div className="form-group">
                    <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.9rem' }}>Full Name *</label>
                    <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        style={{
                            width: '100%',
                            padding: '0.75rem',
                            borderRadius: '8px',
                            border: `1px solid ${errors.name ? '#ef4444' : 'var(--border)'}`,
                            outline: 'none',
                            transition: 'var(--transition)'
                        }}
                    />
                    {errors.name && <span style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.25rem' }}>{errors.name}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.9rem' }}>Email Address *</label>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@example.com"
                        style={{
                            width: '100%',
                            padding: '0.75rem',
                            borderRadius: '8px',
                            border: `1px solid ${errors.email ? '#ef4444' : 'var(--border)'}`,
                            outline: 'none'
                        }}
                    />
                    {errors.email && <span style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.25rem' }}>{errors.email}</span>}
                </div>
            </div>

            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="phone" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.9rem' }}>Phone Number</label>
                <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 9876543210"
                    style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)', outline: 'none' }}
                />
            </div>

            <div className="form-group" style={{ marginBottom: '2rem' }}>
                <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.9rem' }}>Project Details *</label>
                <textarea
                    id="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or inquiry..."
                    style={{
                        width: '100%',
                        padding: '0.75rem',
                        borderRadius: '8px',
                        border: `1px solid ${errors.message ? '#ef4444' : 'var(--border)'}`,
                        outline: 'none',
                        fontFamily: 'inherit',
                        resize: 'none'
                    }}
                ></textarea>
                {errors.message && <span style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.25rem' }}>{errors.message}</span>}
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Send Inquiry <Send size={18} />
            </button>

            <style jsx>{`
        input:focus, textarea:focus {
          border-color: var(--primary) !important;
          box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.1);
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </form>
    );
};

export default ContactForm;
