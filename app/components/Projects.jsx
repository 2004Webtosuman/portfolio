import { getRepos } from '@/utils/github';
import { Github, ExternalLink, Star, GitFork } from 'lucide-react';

const languageColors = {
    JavaScript: '#f7df1e',
    HTML: '#e34c26',
    CSS: '#563d7c',
    PHP: '#4F5D95',
    Python: '#3572A5',
    TypeScript: '#3178c6',
    null: '#6366f1',
};

export default async function Projects() {
    const projects = await getRepos('2004Webtosuman');

    return (
        <section
            id="projects"
            style={{
                padding: '6rem 1.5rem',
                maxWidth: '72rem',
                margin: '0 auto',
            }}
        >
            <div>
                <p
                    className="section-subtitle"
                    style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.75rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.2em',
                        color: 'var(--accent)',
                        marginBottom: '0.5rem',
                    }}
                >
                    ✦ Projects
                </p>
                <h2 className="section-title">
                    Featured <span className="gradient-text-accent">work</span>
                </h2>
                <p style={{ color: 'var(--text-muted)', maxWidth: '32rem', marginBottom: '3rem', fontSize: '1rem' }}>
                    A collection of projects pulled directly from my GitHub — showcasing my journey and growth as a developer.
                </p>
            </div>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                    gap: '1.25rem',
                }}
            >
                {projects.map((repo) => (
                    <div
                        key={repo.id}
                        className="card"
                        style={{ display: 'flex', flexDirection: 'column' }}
                    >
                        {/* Header */}
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',
                                marginBottom: '1rem',
                            }}
                        >
                            <Github size={22} style={{ color: 'var(--text-muted)' }} />
                            <a
                                href={repo.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    color: 'var(--text-muted)',
                                    transition: 'color 0.3s, transform 0.3s',
                                    display: 'flex',
                                }}
                            >
                                <ExternalLink size={18} />
                            </a>
                        </div>

                        {/* Content */}
                        <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>
                            {repo.name.replace(/-/g, ' ').replace(/^-/, '')}
                        </h3>
                        <p
                            style={{
                                color: 'var(--text-muted)',
                                fontSize: '0.875rem',
                                lineHeight: 1.6,
                                marginBottom: '1.5rem',
                                flex: 1,
                            }}
                        >
                            {repo.description || 'No description available'}
                        </p>

                        {/* Footer */}
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                fontSize: '0.75rem',
                                fontFamily: "'JetBrains Mono', monospace",
                                color: 'var(--text-muted)',
                            }}
                        >
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span
                                    style={{
                                        width: '8px',
                                        height: '8px',
                                        borderRadius: '50%',
                                        background: languageColors[repo.language] || '#6366f1',
                                        boxShadow: `0 0 6px ${languageColors[repo.language] || '#6366f1'}60`,
                                        display: 'inline-block',
                                    }}
                                />
                                {repo.language || 'Code'}
                            </span>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                    <Star size={12} />
                                    {repo.stargazers_count}
                                </span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                    <GitFork size={12} />
                                    {repo.forks_count}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
