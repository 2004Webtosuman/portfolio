'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Mail, Sparkles } from 'lucide-react';

const roles = [
    'Full-Stack Developer',
    'React Developer',
    'PHP Developer',
    'Web Application Builder',
];

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        let timeout;

        if (!isDeleting && text === currentRole) {
            timeout = setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && text === '') {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
        } else {
            timeout = setTimeout(
                () => {
                    setText(
                        isDeleting
                            ? currentRole.slice(0, text.length - 1)
                            : currentRole.slice(0, text.length + 1)
                    );
                },
                isDeleting ? 40 : 80
            );
        }

        return () => clearTimeout(timeout);
    }, [text, isDeleting, roleIndex]);

    return (
        <section
            style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                padding: '0 1.5rem',
                maxWidth: '72rem',
                margin: '0 auto',
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                {/* Status Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 1rem',
                        borderRadius: '50px',
                        background: 'rgba(99, 102, 241, 0.1)',
                        border: '1px solid rgba(99, 102, 241, 0.2)',
                        marginBottom: '2rem',
                        fontSize: '0.8125rem',
                        color: 'var(--accent)',
                        fontWeight: 500,
                    }}
                >
                    <Sparkles size={14} />
                    Available for work
                </motion.div>

                {/* Name */}
                <h1
                    className="gradient-text"
                    style={{
                        fontSize: 'clamp(2.5rem, 8vw, 5.5rem)',
                        fontWeight: 900,
                        letterSpacing: '-0.04em',
                        lineHeight: 1.1,
                        marginBottom: '1rem',
                    }}
                >
                    Suman Mishra
                </h1>

                {/* Typing Role */}
                <div
                    style={{
                        fontSize: 'clamp(1.125rem, 3vw, 1.5rem)',
                        color: 'var(--text-secondary)',
                        marginBottom: '1.5rem',
                        fontWeight: 400,
                        minHeight: '2rem',
                    }}
                >
                    <span>{text}</span>
                    <span
                        style={{
                            borderRight: '2px solid var(--accent)',
                            marginLeft: '2px',
                            animation: 'blink 1s step-end infinite',
                        }}
                    >
                        &nbsp;
                    </span>
                </div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    style={{
                        fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                        color: 'var(--text-muted)',
                        maxWidth: '40rem',
                        marginBottom: '2.5rem',
                        lineHeight: 1.7,
                    }}
                >
                    Passionate about building high-performance web applications with modern
                    technologies. Specializing in React, Next.js, PHP, and full-stack
                    development.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}
                >
                    <a href="#projects" className="btn-primary">
                        View Projects
                        <ArrowDown size={16} />
                    </a>
                    <a href="#contact" className="btn-outline">
                        Get in Touch
                        <Mail size={16} />
                    </a>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    style={{
                        display: 'flex',
                        gap: '1.5rem',
                        alignItems: 'center',
                    }}
                >
                    <a
                        href="https://github.com/2004Webtosuman"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            color: 'var(--text-muted)',
                            fontSize: '0.875rem',
                            transition: 'color 0.3s',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                    >
                        <Github size={18} />
                        GitHub
                    </a>
                    <a
                        href="mailto:2004sumanmishra@gmail.com"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            color: 'var(--text-muted)',
                            fontSize: '0.875rem',
                            transition: 'color 0.3s',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                    >
                        <Mail size={18} />
                        Email
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}
