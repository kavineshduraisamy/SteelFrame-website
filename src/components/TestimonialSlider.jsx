import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        id: 1,
        name: "Robert Chen",
        role: "CEO, TechPark Global",
        content: "SteelFrame delivered our headquarters ahead of schedule and under budget. Their attention to detail in the structural steel work was unmatched.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop"
    },
    {
        id: 2,
        name: "Amanda Sterling",
        role: "Director, Urban Living Associates",
        content: "The modern residential complex they built for us has become a landmark in the city. Professional, creative, and highly reliable partners.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop"
    },
    {
        id: 3,
        name: "Marcus Thorne",
        role: "Industrial Developer",
        content: "From the initial consultation to the final walkthrough, SteelFrame showed expertise in every aspect of industrial construction. Highly recommended.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop"
    }
];

const TestimonialSlider = () => {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    const prev = () => setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

    useEffect(() => {
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, [current]);

    return (
        <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
            <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', opacity: 0.1, color: 'var(--primary)' }}>
                <Quote size={80} />
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    style={{ textAlign: 'center' }}
                >
                    <p style={{
                        fontSize: '1.5rem',
                        fontStyle: 'italic',
                        color: 'var(--secondary)',
                        marginBottom: '2.5rem',
                        lineHeight: '1.6',
                        fontWeight: '500'
                    }}>
                        "{testimonials[current].content}"
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                        <img
                            src={testimonials[current].image}
                            alt={testimonials[current].name}
                            style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--primary)' }}
                        />
                        <div>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>{testimonials[current].name}</h4>
                            <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>{testimonials[current].role}</p>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '3rem' }}>
                <button onClick={prev} className="slider-btn"><ChevronLeft size={24} /></button>
                <button onClick={next} className="slider-btn"><ChevronRight size={24} /></button>
            </div>

            <style jsx>{`
        .slider-btn {
          background: white;
          color: var(--secondary);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          transition: var(--transition);
          border: 1px solid var(--border);
        }
        .slider-btn:hover {
          background: var(--primary);
          color: white;
          border-color: var(--primary);
          transform: scale(1.1);
        }
      `}</style>
        </div>
    );
};

export default TestimonialSlider;
