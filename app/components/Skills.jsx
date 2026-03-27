'use client';

import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';

const skillCategories = [
    {
        title: 'Frontend',
        color: '#00ff41',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Three.js'],
    },
    {
        title: 'Backend',
        color: '#33ff66',
        skills: ['PHP', 'Node.js', 'MySQL', 'REST APIs'],
    },
    {
        title: 'Tools & Others',
        color: '#00cc33',
        skills: ['Git', 'GitHub', 'VS Code', 'Python', 'Vercel'],
    },
];

export default function Skills() {
    return (
        <section
            id="skills"
            style={{
                padding: '6rem 1.5rem',
                maxWidth: '72rem',
                margin: '0 auto',
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
            >
                <p className="section-subtitle">
                    <Layers size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.5rem' }} />
                    Tech Stack
                </p>
                <h2 className="section-title">
                    Technologies I <span className="gradient-text-accent">work with</span>
                </h2>
            </motion.div>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '1.5rem',
                    marginTop: '3rem',
                }}
            >
                {skillCategories.map((category, catIdx) => (
                    <motion.div
                        key={category.title}
                        className="card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                            <div
                                style={{
                                    width: '10px',
                                    height: '10px',
                                    borderRadius: '50%',
                                    background: category.color,
                                    boxShadow: `0 0 12px ${category.color}50`,
                                }}
                            />
                            <h3
                                style={{
                                    fontSize: '0.8125rem',
                                    fontWeight: 600,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    color: category.color,
                                    fontFamily: "'JetBrains Mono', monospace",
                                }}
                            >
                                {category.title}
                            </h3>
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {category.skills.map((skill) => (
                                <span key={skill} className="skill-badge">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
