import React from 'react';
import { Terminal, Shield, Award, Users, Code, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-grid" aria-label="About Subhabrata Dey">
      <div className="container">
        {/* Devsync Section Header */}
        <div className="section-header">
          <span className="section-tag">// HELLO WORLD</span>
          <h2 className="section-title">Curious by nature. A builder by choice.</h2>
        </div>

        {/* Editorial Lead Statement */}
        <div
          style={{
            padding: '1.5rem 1.75rem',
            borderRadius: 'var(--radius-lg)',
            backgroundColor: 'rgba(13, 18, 32, 0.75)',
            border: '1.5px solid rgba(129, 64, 220, 0.25)',
            marginBottom: '2rem',
            boxShadow: 'var(--shadow-subtle)'
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.05rem, 1.8vw, 1.4rem)',
              fontWeight: 600,
              color: 'var(--color-text)',
              lineHeight: 1.5,
              letterSpacing: '-0.01em'
            }}
          >
            I CRAFT RESILIENT, SCALABLE FULL-STACK WEB APPLICATIONS, CROSS-PLATFORM MOBILE EXPERIENCES, AND AI-POWERED DIGITAL PRODUCTS — COMBINING REACT & THREE.JS ON THE FRONTEND WITH SECURE BACKEND ARCHITECTURE.
          </p>
        </div>

        {/* Editorial 2-Column Composition */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.25rem',
            alignItems: 'start'
          }}
          className="about-grid"
        >
          {/* Left Column: Narrative Copy */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {PERSONAL_INFO.aboutParagraphs.map((paragraph, index) => (
              <p
                key={index}
                style={{
                  fontSize: '1.05rem',
                  lineHeight: 1.75,
                  color: index === 0 ? 'var(--color-text)' : 'var(--color-text-secondary)',
                  fontWeight: index === 0 ? 500 : 400
                }}
              >
                {paragraph}
              </p>
            ))}

            {/* Core Values / Focus highlights */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
                marginTop: '1rem'
              }}
            >
              <div
                style={{
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'rgba(13, 18, 32, 0.85)',
                  border: '1px solid rgba(129, 64, 220, 0.25)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
                  <Code size={18} color="var(--color-violet)" />
                  <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'var(--color-text)' }}>
                    Full-Stack & Mobile
                  </span>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
                  Architecting resilient web systems and mobile apps from logic to polish.
                </p>
              </div>

              <div
                style={{
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'rgba(13, 18, 32, 0.85)',
                  border: '1px solid rgba(203, 41, 87, 0.25)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
                  <Shield size={18} color="var(--color-crimson)" />
                  <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'var(--color-text)' }}>
                    Security Mindset
                  </span>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
                  CTF challenges, CORS security, defensive programming, and API hardening.
                </p>
              </div>

              <div
                style={{
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'rgba(13, 18, 32, 0.85)',
                  border: '1px solid rgba(129, 64, 220, 0.25)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
                  <Users size={18} color="var(--color-violet)" />
                  <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'var(--color-text)' }}>
                    Club Leadership
                  </span>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
                  President of Atrang cultural club, leading student teams and stage operations.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Technical Persona Visual */}
          <div
            className="glass-panel"
            style={{
              padding: '2.25rem',
              backgroundColor: 'rgba(13, 18, 32, 0.88)',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid rgba(129, 64, 220, 0.3)'
            }}
          >
            {/* Header of the terminal/spec card */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '1.25rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                marginBottom: '1.5rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Terminal size={18} color="var(--color-violet)" />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'var(--color-text)'
                  }}
                >
                  ENGINEER_SPEC.json
                </span>
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--color-violet)',
                  padding: '0.2rem 0.5rem',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(129, 64, 220, 0.15)',
                  border: '1px solid rgba(129, 64, 220, 0.3)'
                }}
              >
                STATUS: ACTIVE
              </span>
            </div>

            {/* Spec items list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
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
                  // Candidate
                </span>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--color-text)'
                  }}
                >
                  Subhabrata Dey
                </div>
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
                  // Academic Degree
                </span>
                <div style={{ fontSize: '0.95rem', color: 'var(--color-text)', fontWeight: 500 }}>
                  B.Tech in Computer Science & Engineering
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                  University of Engineering & Management, Jaipur (Grad: 2028)
                </div>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem',
                  paddingTop: '0.5rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      color: 'var(--color-violet)',
                      textTransform: 'uppercase'
                    }}
                  >
                    Current CGPA
                  </span>
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.35rem',
                      fontWeight: 700,
                      color: 'var(--color-text)'
                    }}
                  >
                    6.85 / 10
                  </div>
                </div>

                <div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      color: 'var(--color-violet)',
                      textTransform: 'uppercase'
                    }}
                  >
                    Current Year
                  </span>
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.35rem',
                      fontWeight: 700,
                      color: 'var(--color-text)'
                    }}
                  >
                    3rd Year (CSE)
                  </div>
                </div>
              </div>

              {/* Verified Achievements Quick Badges */}
              <div
                style={{
                  paddingTop: '0.75rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.6rem'
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: 'var(--color-text-muted)',
                    textTransform: 'uppercase'
                  }}
                >
                  // Verified Roles & Milestones
                </span>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Award size={14} color="var(--color-rose)" />
                  <span style={{ fontSize: '0.86rem', color: 'var(--color-text)' }}>
                    GirlScript Summer of Code 2026 Contributor
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Users size={14} color="var(--color-violet)" />
                  <span style={{ fontSize: '0.86rem', color: 'var(--color-text)' }}>
                    President, Atrang College Cultural Club
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Cpu size={14} color="var(--color-crimson)" />
                  <span style={{ fontSize: '0.86rem', color: 'var(--color-text)' }}>
                    College Hackathon — Top 15 Finalist
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Monogram Watermark */}
            <div
              style={{
                position: 'absolute',
                right: '-15px',
                bottom: '-25px',
                fontFamily: 'var(--font-heading)',
                fontSize: '7rem',
                fontWeight: 900,
                color: 'rgba(129, 64, 220, 0.05)',
                userSelect: 'none',
                pointerEvents: 'none',
                lineHeight: 1
              }}
              aria-hidden="true"
            >
              SD
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .about-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
};
