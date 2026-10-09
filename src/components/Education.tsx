import React from 'react';
import { GraduationCap, School, Calendar } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  const currentEdu = EDUCATION_DATA.find((item) => item.isCurrent);
  const pastEdu = EDUCATION_DATA.filter((item) => !item.isCurrent);

  return (
    <section id="education" className="section-padding bg-grid" aria-label="Education and Academic Background">
      <div className="container">
        {/* Devsync Section Header */}
        <div className="section-header">
          <span className="section-tag">// EDUCATION</span>
          <h2 className="section-title">Academic Foundation.</h2>
          <p className="section-subtitle">
            Formal grounding in computer systems, algorithms, mathematics, and secondary academic foundations.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '1.75rem',
            alignItems: 'stretch'
          }}
          className="education-grid"
        >
          {/* Main Focus: University B.Tech Card */}
          {currentEdu && (
            <div
              className="glass-panel"
              style={{
                padding: 'clamp(1.5rem, 2.2vw, 2rem)',
                backgroundColor: 'rgba(13, 18, 32, 0.85)',
                border: '1.5px solid rgba(129, 64, 220, 0.3)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    flexWrap: 'wrap',
                    marginBottom: '1.25rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        backgroundColor: 'rgba(17, 46, 129, 0.4)',
                        border: '1.5px solid var(--color-violet)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <GraduationCap size={24} color="var(--color-violet)" />
                    </div>

                    <div>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.72rem',
                          color: 'var(--color-violet)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em'
                        }}
                      >
                        // Undergraduate Degree (Current)
                      </span>
                      <h3
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: '1.45rem',
                          fontWeight: 700,
                          color: 'var(--color-text)'
                        }}
                      >
                        {currentEdu.qualification}
                      </h3>
                    </div>
                  </div>

                  <div className="badge">
                    <span className="badge-dot" />
                    <span>Expected 2028</span>
                  </div>
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.1rem',
                    color: 'var(--color-text)',
                    fontWeight: 600,
                    marginBottom: '0.75rem'
                  }}
                >
                  {currentEdu.institution}
                </div>

                <p
                  style={{
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                    color: 'var(--color-text-secondary)',
                    marginBottom: '1.5rem'
                  }}
                >
                  {currentEdu.description}
                </p>
              </div>

              {/* Score pill */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  flexWrap: 'wrap',
                  gap: '1rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Calendar size={15} color="var(--color-violet)" />
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                    {currentEdu.timeline}
                  </span>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '0.4rem',
                    padding: '0.4rem 0.9rem',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(8, 10, 18, 0.9)',
                    border: '1px solid rgba(129, 64, 220, 0.3)'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--color-text-muted)'
                    }}
                  >
                    {currentEdu.scoreLabel}:
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: 'var(--color-violet)'
                    }}
                  >
                    {currentEdu.score}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>/ 10</span>
                </div>
              </div>
            </div>
          )}

          {/* Secondary School Education Subsection */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {pastEdu.map((school, sIdx) => (
              <div
                key={sIdx}
                className="glass-panel"
                style={{
                  padding: '1.75rem',
                  backgroundColor: 'rgba(13, 18, 32, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      marginBottom: '0.75rem'
                    }}
                  >
                    <School size={18} color="var(--color-rose)" />
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        color: 'var(--color-rose)',
                        textTransform: 'uppercase'
                      }}
                    >
                      // {school.timeline}
                    </span>
                  </div>

                  <h4
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: 'var(--color-text)',
                      marginBottom: '0.4rem'
                    }}
                  >
                    {school.qualification}
                  </h4>

                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginBottom: '1.25rem' }}>
                    {school.institution}
                  </p>
                </div>

                <div
                  style={{
                    paddingTop: '0.9rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--color-text-muted)'
                    }}
                  >
                    {school.scoreLabel}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      color: 'var(--color-violet)'
                    }}
                  >
                    {school.score}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
