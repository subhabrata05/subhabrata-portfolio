import React from 'react';
import { Compass, Code2, Sparkles, CheckCircle2 } from 'lucide-react';
import { PROCESS_STAGES } from '../data/portfolioData';

export const Process: React.FC = () => {
  const getStageIcon = (num: string) => {
    switch (num) {
      case '01':
        return <Compass size={22} color="var(--color-violet)" />;
      case '02':
        return <Code2 size={22} color="var(--color-crimson)" />;
      case '03':
        return <Sparkles size={22} color="var(--color-rose)" />;
      default:
        return null;
    }
  };

  return (
    <section id="process" className="section-padding bg-grid" aria-label="Development Process">
      <div className="container">
        {/* Devsync Section Header */}
        <div className="section-header">
          <span className="section-tag">// PROCESS</span>
          <h2 className="section-title">My Development Work Process.</h2>
          <p className="section-subtitle">
            A structured, engineering-first methodology ensuring every application combines solid architecture, clean UI, and rigorous testing.
          </p>
        </div>

        {/* 3 Process Cards Grid (Devsync Framer Layout) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {PROCESS_STAGES.map((stage) => (
            <div
              key={stage.number}
              className="glass-panel"
              style={{
                padding: 'clamp(1.5rem, 2.4vw, 2rem)',
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
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(0, 0, 0, 0.8), 0 0 25px rgba(129, 64, 220, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(129, 64, 220, 0.25)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-subtle)';
              }}
            >
              <div>
                {/* Number & Icon Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.75rem',
                    paddingBottom: '1rem',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '2rem',
                      fontWeight: 700,
                      color: stage.number === '02' ? 'var(--color-crimson)' : 'var(--color-violet)',
                      lineHeight: 1
                    }}
                  >
                    ({stage.number})
                  </span>

                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(8, 10, 18, 0.9)',
                      border: '1px solid rgba(129, 64, 220, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {getStageIcon(stage.number)}
                  </div>
                </div>

                {/* Stage Title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.45rem',
                    fontWeight: 700,
                    color: 'var(--color-text)',
                    marginBottom: '0.75rem'
                  }}
                >
                  {stage.title}
                </h3>

                {/* Summary */}
                <p
                  style={{
                    fontSize: '0.98rem',
                    color: 'var(--color-text)',
                    fontWeight: 500,
                    lineHeight: 1.55,
                    marginBottom: '1rem'
                  }}
                >
                  {stage.summary}
                </p>

                {/* Details */}
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6
                  }}
                >
                  {stage.details}
                </p>
              </div>

              {/* Bottom Checklist Indicator */}
              <div
                style={{
                  marginTop: '2rem',
                  paddingTop: '0.85rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--color-text-muted)'
                }}
              >
                <CheckCircle2 size={13} color="var(--color-violet)" />
                <span>PHASE {stage.number} VERIFIED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
