'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Github } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
];

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = navLinks.map(l => l.href.slice(1));
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el && el.getBoundingClientRect().top <= 200) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav
                style={{
                    position: 'fixed',
                    top: '1.25rem',
                    left: 0,
                    right: 0,
                    zIndex: 50,
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '0 1rem',
                }}
            >
                <div
                    className="glass"
                    style={{
                        maxWidth: '56rem',
                        width: '100%',
                        padding: '0.75rem 2rem',
                        borderRadius: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        transition: 'all 0.3s ease',
                        background: scrolled
                            ? 'var(--background)'
                            : 'var(--surface)',
                        opacity: scrolled ? 0.95 : 1,
                    }}
                >
                    <a
                        href="#"
                        style={{
                            fontSize: '1.125rem',
                            fontWeight: 800,
                            letterSpacing: '-0.03em',
                            transition: 'opacity 0.3s',
                        }}
                        className="gradient-text"
                    >
                        SUMAN.
                    </a>

                    {/* Desktop Links */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '2rem',
                        }}
                        className="nav-desktop"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                style={{
                                    fontSize: '0.8125rem',
                                    fontWeight: 500,
                                    color:
                                        activeSection === link.href.slice(1)
                                            ? 'var(--accent)'
                                            : 'var(--text-muted)',
                                    transition: 'color 0.3s',
                                    letterSpacing: '0.01em',
                                }}
                                onMouseEnter={(e) => (e.target.style.color = '#fff')}
                                onMouseLeave={(e) =>
                                (e.target.style.color =
                                    activeSection === link.href.slice(1)
                                        ? 'var(--accent)'
                                        : 'var(--text-muted)')
                                }
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="https://github.com/2004Webtosuman"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: 'var(--text-muted)',
                                transition: 'color 0.3s',
                                display: 'flex',
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                        >
                            <Github size={18} />
                        </a>
                        <ThemeToggle />
                        <a href="#contact" className="btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.8125rem' }}>
                            Hire Me
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div className="nav-mobile-theme-toggle" style={{ display: 'none' }}>
                            <ThemeToggle />
                        </div>
                        <button
                            className="nav-mobile-toggle"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            style={{
                                display: 'none',
                                background: 'none',
                                border: 'none',
                                color: 'var(--foreground)',
                                cursor: 'pointer',
                                padding: '0.25rem',
                            }}
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 45,
                    background: 'var(--background)',
                    opacity: scrolled ? 0.98 : 0.95,
                    backdropFilter: 'blur(20px)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '2rem',
                    opacity: mobileOpen ? 1 : 0,
                    pointerEvents: mobileOpen ? 'auto' : 'none',
                    transition: 'opacity 0.3s ease',
                }}
            >
                {navLinks.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        style={{
                            fontSize: '1.5rem',
                            fontWeight: 600,
                            color: 'var(--text-secondary)',
                            transition: 'color 0.3s',
                        }}
                        onMouseEnter={(e) => (e.target.style.color = 'var(--accent)')}
                        onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
                    >
                        {link.label}
                    </a>
                ))}
                <a
                    href="#contact"
                    onClick={() => setMobileOpen(false)}
                    className="btn-primary"
                    style={{ marginTop: '1rem' }}
                >
                    Hire Me
                </a>
            </div>

            <style jsx global>{`
        @media (max-width: 768px) {
          .nav-desktop {
            display: none !important;
          }
          .nav-mobile-toggle {
            display: flex !important;
          }
          .nav-mobile-theme-toggle {
            display: flex !important;
          }
        }
      `}</style>
        </>
    );
}
