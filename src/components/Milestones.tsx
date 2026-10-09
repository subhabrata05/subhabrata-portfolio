import React from 'react';
import { GitPullRequest, Trophy, Compass, ShieldCheck } from 'lucide-react';
import { MILESTONES } from '../data/portfolioData';

export const Milestones: React.FC = () => {
  const getMilestoneIcon = (id: string) => {
    switch (id) {
      case 'gssoc-2026':
        return <GitPullRequest size={20} color="var(--color-rose)" />;
      case 'hackathon-top15':
        return <Trophy size={20} color="var(--color-violet)" />;
      case 'mood-indigo':
        return <Compass size={20} color="var(--color-rose)" />;
      case 'cybersecurity':
        return <ShieldCheck size={20} color="var(--color-crimson)" />;
      default:
        return null;
    }
  };

  return (
    <section id="milestones" className="section-padding bg-grid" aria-label="Key Milestones and Achievements">
      <div className="container">
        {/* Devsync Section Header */}
        <div className="section-header">
          <span className="section-tag">// MILESTONES</span>
          <h2 className="section-title">Learning, building, contributing.</h2>
          <p className="section-subtitle">
            Key markers in my continuous journey across open-source contribution, competitive hackathons, and community security.
          </p>
        </div>

        {/* Milestones Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.35rem'
          }}
        >
          {MILESTONES.map((item) => (
            <div
              key={item.id}
              className="glass-panel"
              style={{
                padding: 'clamp(1.4rem, 2.2vw, 1.85rem)',
                backgroundColor: 'rgba(13, 18, 32, 0.85)',
                border: '1px solid rgba(129, 64, 220, 0.25)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                transition: 'border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-violet)';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.7), 0 0 20px rgba(129, 64, 220, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(129, 64, 220, 0.25)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-subtle)';
              }}
            >
              <div>
                {/* Milestone Number & Tag */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.25rem'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '1.85rem',
                      fontWeight: 700,
                      color: item.number === '01' ? 'var(--color-rose)' : item.number === '04' ? 'var(--color-crimson)' : 'var(--color-violet)',
                      opacity: 0.95,
                      lineHeight: 1
                    }}
                  >
                    ({item.number})
                  </span>

                  <div className="badge">
                    <span className="badge-dot" />
                    <span>{item.tag}</span>
                  </div>
                </div>

                {/* Icon & Title */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.5rem' }}>
                  {getMilestoneIcon(item.id)}
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: 'var(--color-text)'
                    }}
                  >
                    {item.title}
                  </h3>
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--color-violet)',
                    marginBottom: '0.9rem',
                    letterSpacing: '0.04em'
                  }}
                >
                  {item.subtitle}
                </div>

                {/* Description */}
                <p
                  style={{
                    fontSize: '0.92rem',
                    lineHeight: 1.6,
                    color: 'var(--color-text-secondary)'
                  }}
                >
                  {item.description}
                </p>
              </div>

              {/* Verified Marker */}
              <div
                style={{
                  marginTop: '1.5rem',
                  paddingTop: '0.75rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--color-text-muted)'
                }}
              >
                // RECORDED & VERIFIED
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
