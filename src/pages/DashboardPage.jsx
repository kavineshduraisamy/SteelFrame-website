import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from '../components/ProjectCard';
import { Search, Filter } from 'lucide-react';

const DashboardPage = ({ onProjectClick }) => {
    const [filter, setFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProjects = PROJECTS.filter(project => {
        const matchesFilter = filter === 'all' || project.status === filter;
        const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.location.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <div className="section-padding" style={{ paddingTop: '8rem', minHeight: '100vh', backgroundColor: '#f8fafc' }}>
            <div className="container">
                <div style={{ marginBottom: '4rem' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Project Dashboard</h1>
                    <p style={{ color: 'var(--muted)', fontSize: '1.1rem' }}>Track our global portfolio of structural excellence.</p>
                </div>

                {/* Filters & Search */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '2rem',
                    marginBottom: '3rem',
                    flexWrap: 'wrap'
                }}>
                    <div style={{ display: 'flex', gap: '0.5rem', backgroundColor: 'white', padding: '0.5rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
                        {['all', 'ongoing', 'completed', 'upcoming'].map((f) => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                style={{
                                    padding: '0.5rem 1.25rem',
                                    borderRadius: 'calc(var(--radius) - 4px)',
                                    textTransform: 'capitalize',
                                    fontWeight: '600',
                                    fontSize: '0.9rem',
                                    backgroundColor: filter === f ? 'var(--primary)' : 'transparent',
                                    color: filter === f ? 'white' : 'var(--muted)'
                                }}
                            >
                                {f}
                            </button>
                        ))}
                    </div>

                    <div style={{ position: 'relative', flex: '1', maxWidth: '400px' }}>
                        <Search
                            size={20}
                            style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)' }}
                        />
                        <input
                            type="text"
                            placeholder="Search projects by name or location..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '0.75rem 1rem 0.75rem 3rem',
                                borderRadius: 'var(--radius)',
                                border: '1px solid var(--border)',
                                outline: 'none',
                                fontSize: '0.95rem'
                            }}
                        />
                    </div>
                </div>

                {/* Grid */}
                {filteredProjects.length > 0 ? (
                    <div className="grid-cols-3">
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} onClick={onProjectClick} />
                        ))}
                    </div>
                ) : (
                    <div style={{ textAlign: 'center', padding: '5rem 0' }}>
                        <h3 style={{ color: 'var(--muted)' }}>No projects found matching your criteria.</h3>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DashboardPage;
