'use client';

import { motion } from 'framer-motion';
import { Code2, User, GraduationCap } from 'lucide-react';

export default function About() {
    return (
        <section
            id="about"
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
                    <User size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.5rem' }} />
                    About Me
                </p>
                <h2 className="section-title">
                    Building the <span className="gradient-text-accent">future</span> of the web
                </h2>
            </motion.div>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                    marginTop: '3rem',
                }}
            >
                {/* Bio Card */}
                <motion.div
                    className="card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                        <div
                            style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '10px',
                                background: 'linear-gradient(135deg, #00ff41, #00cc33)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Code2 size={20} color="white" />
                        </div>
                        <h3 style={{ fontSize: '1.125rem', fontWeight: 700 }}>Who I Am</h3>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.9375rem' }}>
                        I&apos;m Suman Mishra, a passionate full-stack developer who loves turning ideas
                        into beautiful, functional web applications. I bridge the gap between design
                        and engineering, focusing on creating smooth, memorable user experiences that
                        don&apos;t sacrifice speed or accessibility.
                    </p>
                </motion.div>

                {/* Education Card */}
                <motion.div
                    className="card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                        <div
                            style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '10px',
                                background: 'linear-gradient(135deg, #33ff66, #00cc33)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <GraduationCap size={20} color="white" />
                        </div>
                        <h3 style={{ fontSize: '1.125rem', fontWeight: 700 }}>My Journey</h3>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.9375rem' }}>
                        Currently focused on building real-world projects and deepening my expertise in
                        full-stack development. From personal calculators to complex service booking
                        platforms, every project has been a stepping stone in my growth as a developer.
                    </p>
                </motion.div>

                {/* Stats */}
                <motion.div
                    className="card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}
                >
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        {[
                            { value: '9+', label: 'GitHub Repos' },
                            { value: '5+', label: 'Technologies' },
                            { value: '3+', label: 'Major Projects' },
                            { value: '∞', label: 'Passion' },
                        ].map((stat, i) => (
                            <div key={i} style={{ textAlign: 'center' }}>
                                <div
                                    className="gradient-text-accent"
                                    style={{ fontSize: '2rem', fontWeight: 800, lineHeight: 1.2 }}
                                >
                                    {stat.value}
                                </div>
                                <div style={{ color: 'var(--text-muted)', fontSize: '0.8125rem', marginTop: '0.25rem' }}>
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
