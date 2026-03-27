'use client';

import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Code, Rocket, Zap } from 'lucide-react';

const timeline = [
    {
        title: 'Started Web Development Journey',
        description: 'Began learning HTML, CSS, and JavaScript. Built my first web demo and personal calculator project.',
        icon: Code,
        color: '#00ff41',
        year: '2022',
    },
    {
        title: 'Built First Web Projects',
        description: 'Created a To-Do List app and a personal calculator using HTML, CSS, and JavaScript, solidifying core frontend skills.',
        icon: BookOpen,
        color: '#00cc33',
        year: '2023',
    },
    {
        title: 'Expanded to Backend Development',
        description: 'Learned PHP and MySQL. Built a Record Manager system and started understanding full-stack architecture.',
        icon: Zap,
        color: '#33ff66',
        year: '2023',
    },
    {
        title: 'Built Service Booking Platform',
        description: 'Developed a full-featured plumber and electrician booking system as a college project — my biggest project to date.',
        icon: Rocket,
        color: '#00ff41',
        year: '2024',
    },
    {
        title: 'Learning Modern Frameworks',
        description: 'Currently mastering React, Next.js, Three.js, and modern frontend tools to build premium web experiences.',
        icon: GraduationCap,
        color: '#66ff99',
        year: 'Now',
    },
];

export default function Education() {
    return (
        <section
            id="education"
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
                    <GraduationCap size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.5rem' }} />
                    Journey
                </p>
                <h2 className="section-title">
                    My <span className="gradient-text-accent">learning path</span>
                </h2>
            </motion.div>

            <div style={{ marginTop: '3rem', maxWidth: '42rem' }}>
                {timeline.map((item, i) => {
                    const Icon = item.icon;
                    return (
                        <motion.div
                            key={i}
                            className="timeline-item"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            style={{ borderColor: i === timeline.length - 1 ? 'transparent' : undefined }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '1rem',
                                }}
                            >
                                <div
                                    style={{
                                        width: '36px',
                                        height: '36px',
                                        borderRadius: '10px',
                                        background: `${item.color}15`,
                                        border: `1px solid ${item.color}30`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0,
                                    }}
                                >
                                    <Icon size={16} style={{ color: item.color }} />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            gap: '1rem',
                                            flexWrap: 'wrap',
                                        }}
                                    >
                                        <h3 style={{ fontSize: '1rem', fontWeight: 700 }}>{item.title}</h3>
                                        <span
                                            style={{
                                                fontSize: '0.75rem',
                                                fontFamily: "'JetBrains Mono', monospace",
                                                color: item.color,
                                                background: `${item.color}10`,
                                                padding: '0.2rem 0.6rem',
                                                borderRadius: '4px',
                                                fontWeight: 600,
                                            }}
                                        >
                                            {item.year}
                                        </span>
                                    </div>
                                    <p
                                        style={{
                                            color: 'var(--text-muted)',
                                            fontSize: '0.875rem',
                                            lineHeight: 1.7,
                                            marginTop: '0.5rem',
                                        }}
                                    >
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
