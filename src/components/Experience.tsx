import React from 'react';
import { Users, Trophy, ArrowRight, CheckCircle2, Flag } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="journey" className="section-padding bg-grid" aria-label="Leadership and Experience">
      <div className="container">
        {/* Devsync Section Header */}
        <div className="section-header">
          <span className="section-tag">// LEADERSHIP & JOURNEY</span>
          <h2 className="section-title">Leadership is part of the build.</h2>
          <p className="section-subtitle">
            Leading cross-functional teams, orchestrating technical stage operations, and delivering working software under pressure.
          </p>
        </div>

        {/* Timeline Layout */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', maxWidth: '980px', margin: '0 auto' }}>
          {EXPERIENCES.map((item, idx) => (
            <div
              key={item.id}
              className="glass-panel"
              style={{
                padding: 'clamp(1.4rem, 2.2vw, 1.9rem)',
                backgroundColor: 'rgba(13, 18, 32, 0.85)',
                border: '1px solid rgba(129, 64, 220, 0.25)',
                position: 'relative'
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  flexWrap: 'wrap',
                  marginBottom: '1.25rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  paddingBottom: '1.25rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(17, 46, 129, 0.35)',
                      border: '1.5px solid var(--color-violet)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    {idx === 0 ? (
                      <Users size={22} color="var(--color-violet)" />
                    ) : (
                      <Trophy size={22} color="var(--color-rose)" />
                    )}
                  </div>

                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.35rem',
                        fontWeight: 700,
                        color: 'var(--color-text)'
                      }}
                    >
                      {item.role}
                    </h3>
                    <div
                      style={{
                        fontSize: '0.95rem',
                        color: 'var(--color-violet)',
                        fontWeight: 500
                      }}
                    >
                      {item.organization}
                    </div>
                  </div>
                </div>

                <div className="badge">
                  <span className="badge-dot" />
                  <span>{item.academicYear}</span>
                </div>
              </div>

              {/* Leadership Progression Flow */}
              {item.progression && (
                <div
                  style={{
                    marginBottom: '1.5rem',
                    padding: '1rem 1.25rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'rgba(8, 10, 18, 0.85)',
                    border: '1px solid rgba(129, 64, 220, 0.25)'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--color-violet)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      display: 'block',
                      marginBottom: '0.6rem'
                    }}
                  >
                    // Progression Pipeline
                  </span>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      flexWrap: 'wrap'
                    }}
                  >
                    {item.progression.map((stage, sIdx) => {
                      const isCurrent = sIdx === item.progression!.length - 1;
                      return (
                        <React.Fragment key={stage}>
                          <div
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.4rem',
                              padding: '0.35rem 0.85rem',
                              borderRadius: 'var(--radius-full)',
                              backgroundColor: isCurrent ? 'var(--color-violet)' : 'rgba(17, 46, 129, 0.3)',
                              border: '1px solid',
                              borderColor: isCurrent ? 'var(--color-violet)' : 'rgba(129, 64, 220, 0.25)',
                              color: isCurrent ? '#FFFFFF' : 'var(--color-text-secondary)',
                              fontFamily: 'var(--font-heading)',
                              fontSize: '0.82rem',
                              fontWeight: isCurrent ? 700 : 500,
                              boxShadow: isCurrent ? '0 0 14px rgba(129, 64, 220, 0.45)' : 'none'
                            }}
                          >
                            {isCurrent && <Flag size={12} color="#FFFFFF" />}
                            <span>{stage}</span>
                          </div>
                          {sIdx < item.progression!.length - 1 && (
                            <ArrowRight size={14} color="var(--color-violet)" />
                          )}
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Summary Description */}
              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.65,
                  color: 'var(--color-text)',
                  marginBottom: '1.25rem'
                }}
              >
                {item.summary}
              </p>

              {/* Highlights */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '0.65rem'
                }}
              >
                {item.highlights.map((highlight, hIdx) => (
                  <div
                    key={hIdx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.55rem',
                      fontSize: '0.88rem',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.45
                    }}
                  >
                    <CheckCircle2
                      size={15}
                      color="var(--color-violet)"
                      style={{ flexShrink: 0, marginTop: '3px' }}
                    />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
