'use client';

import { motion } from 'framer-motion';
import { Mail, Github, ArrowUpRight, Send, MapPin } from 'lucide-react';

export default function Contact() {
    return (
        <section
            id="contact"
            style={{
                padding: '6rem 1.5rem',
                maxWidth: '48rem',
                margin: '0 auto',
                textAlign: 'center',
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
            >
                <p className="section-subtitle">
                    <Send size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.5rem' }} />
                    Contact
                </p>
                <h2
                    style={{
                        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                        fontWeight: 800,
                        letterSpacing: '-0.03em',
                        marginBottom: '1.5rem',
                        lineHeight: 1.2,
                    }}
                >
                    Let&apos;s build something{' '}
                    <span className="gradient-text-accent">great together</span>
                </h2>
                <p
                    style={{
                        color: 'var(--text-muted)',
                        fontSize: '1.125rem',
                        maxWidth: '28rem',
                        margin: '0 auto 3rem',
                        lineHeight: 1.7,
                    }}
                >
                    Currently accepting new projects and collaborations. Feel free to reach out!
                </p>
            </motion.div>

            {/* Email CTA */}
            <motion.a
                href="mailto:2004sumanmishra@gmail.com"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    fontSize: 'clamp(1rem, 3vw, 1.5rem)',
                    fontWeight: 600,
                    color: 'var(--foreground)',
                    transition: 'color 0.3s',
                    marginBottom: '3rem',
                    wordBreak: 'break-all',
                }}
            >
                <Mail size={24} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                2004sumanmishra@gmail.com
                <ArrowUpRight size={20} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
            </motion.a>

            {/* Social Links */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1rem',
                    flexWrap: 'wrap',
                }}
            >
                <a
                    href="https://github.com/2004Webtosuman"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        padding: '1rem 1.5rem',
                        borderRadius: '12px',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        cursor: 'pointer',
                    }}
                >
                    <Github size={18} />
                    GitHub
                    <ArrowUpRight size={14} style={{ color: 'var(--text-muted)' }} />
                </a>
                <a
                    href="mailto:2004sumanmishra@gmail.com"
                    className="card"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        padding: '1rem 1.5rem',
                        borderRadius: '12px',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        cursor: 'pointer',
                    }}
                >
                    <Mail size={18} />
                    Email
                    <ArrowUpRight size={14} style={{ color: 'var(--text-muted)' }} />
                </a>
                <div
                    className="card"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        padding: '1rem 1.5rem',
                        borderRadius: '12px',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                    }}
                >
                    <MapPin size={18} style={{ color: 'var(--accent)' }} />
                    Nepal
                </div>
            </motion.div>
        </section>
    );
}
