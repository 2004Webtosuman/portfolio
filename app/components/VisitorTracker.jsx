'use client';

import { useEffect, useRef, useState } from 'react';
import { Eye, Sparkles, Clock3, TrendingUp } from 'lucide-react';

const STORAGE_KEY = 'portfolio-visitor-stats';
const COUNT_API_NAMESPACE = 'portfolio-2004webtosuman';
const COUNT_API_KEY = 'portfolio';

export default function VisitorTracker() {
  const [stats, setStats] = useState({
    sessionVisits: 0,
    todayVisits: 0,
    totalVisits: 0,
    lastVisit: '—',
  });
  const [topSection, setTopSection] = useState('—');
  const sectionViewsRef = useRef({});
  const trackedSectionsRef = useRef(new Set());

  const formatSectionName = (sectionId) => {
    switch (sectionId) {
      case 'about':
        return 'About';
      case 'skills':
        return 'Skills';
      case 'projects':
        return 'Projects';
      case 'education':
        return 'Education';
      case 'contact':
        return 'Contact';
      default:
        return '—';
    }
  };

  useEffect(() => {
    const loadVisitorStats = async () => {
      try {
        const now = new Date();
        const todayKey = now.toISOString().slice(0, 10);
        const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
        const sessionSeen = sessionStorage.getItem('portfolio-session-seen') === 'true';
        const countApiHitSent = sessionStorage.getItem('portfolio-countapi-hit') === 'true';
        const isLocalHost = ['localhost', '127.0.0.1', '0.0.0.0'].includes(window.location.hostname);
        const canUseRemoteHitCounter = typeof window !== 'undefined' && window.navigator.onLine && !isLocalHost;

        const previousTotal = Number(stored.totalVisits || 0);
        const previousToday = Number(stored.todayVisits || 0);
        const previousDate = stored.lastSeenDate || '';
        sectionViewsRef.current = stored.sectionViews || {};

        let nextTotal = previousTotal;
        let nextToday = previousToday;
        let nextLastVisit = stored.lastVisit || '—';
        let sessionVisits = 0;

        if (!sessionSeen) {
          sessionStorage.setItem('portfolio-session-seen', 'true');
          sessionVisits = 1;
          nextToday = previousDate === todayKey ? previousToday + 1 : 1;
          nextLastVisit = now.toLocaleString([], {
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
          });
        }

        if (!countApiHitSent && canUseRemoteHitCounter) {
          try {
            const response = await fetch(`https://api.countapi.xyz/hit/${COUNT_API_NAMESPACE}/${COUNT_API_KEY}`);
            const data = await response.json();
            if (typeof data?.value === 'number') {
              nextTotal = data.value;
              sessionStorage.setItem('portfolio-countapi-hit', 'true');
            }
          } catch {
            nextTotal = previousTotal + (sessionSeen ? 0 : 1);
          }
        } else if (previousTotal) {
          nextTotal = previousTotal;
        }

        const nextStats = {
          sessionVisits,
          todayVisits: nextToday,
          totalVisits: nextTotal,
          lastVisit: nextLastVisit,
        };

        const initialTopSection = stored.topSection || '—';
        setTopSection(formatSectionName(initialTopSection));

        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({
            ...stored,
            ...nextStats,
            lastSeenDate: todayKey,
          })
        );

        setStats(nextStats);
      } catch {
        setStats({ sessionVisits: 1, todayVisits: 1, totalVisits: 1, lastVisit: '—' });
      }
    };

    loadVisitorStats();
  }, []);

  useEffect(() => {
    const sectionIds = ['about', 'skills', 'projects', 'education', 'contact'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const sectionId = entry.target.id;
          if (trackedSectionsRef.current.has(sectionId)) return;

          trackedSectionsRef.current.add(sectionId);

          const nextSectionViews = {
            ...sectionViewsRef.current,
            [sectionId]: (sectionViewsRef.current[sectionId] || 0) + 1,
          };
          sectionViewsRef.current = nextSectionViews;

          const topViewedSection = Object.entries(nextSectionViews).sort((a, b) => b[1] - a[1])[0]?.[0] || '—';
          setTopSection(formatSectionName(topViewedSection));

          try {
            const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
            localStorage.setItem(
              STORAGE_KEY,
              JSON.stringify({
                ...stored,
                sectionViews: nextSectionViews,
                topSection: topViewedSection,
              })
            );
          } catch {
            // Ignore storage errors and keep the UI responsive.
          }
        });
      },
      { threshold: 0.4 }
    );

    sectionIds.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      aria-label="Visitor tracker"
      style={{
        maxWidth: '48rem',
        margin: '0 auto 2rem',
        padding: '0 1.5rem',
      }}
    >
      <div className="card visitor-tracker">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <div
            style={{
              width: '2.35rem',
              height: '2.35rem',
              borderRadius: '999px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'var(--surface-hover)',
              color: 'var(--accent)',
            }}
          >
            <Eye size={18} />
          </div>
          <div>
            <p className="section-subtitle" style={{ marginBottom: '0.2rem' }}>
              Visitor tracker
            </p>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Portfolio activity</h3>
          </div>
        </div>

        <div className="visitor-stats">
          <div className="visitor-stat">
            <span className="visitor-label">This session</span>
            <strong>{stats.sessionVisits}</strong>
          </div>
          <div className="visitor-stat">
            <span className="visitor-label">Today</span>
            <strong>{stats.todayVisits}</strong>
          </div>
          <div className="visitor-stat">
            <span className="visitor-label">Live visits</span>
            <strong>{stats.totalVisits}</strong>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginTop: '1rem',
            color: 'var(--text-secondary)',
            fontSize: '0.95rem',
            flexWrap: 'wrap',
          }}
        >
          <Clock3 size={15} />
          <span>Last visit: {stats.lastVisit}</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
            <TrendingUp size={14} />
            Most viewed: {topSection}
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
            <Sparkles size={14} />
            Inspired by your curiosity
          </span>
        </div>
      </div>
    </section>
  );
}
