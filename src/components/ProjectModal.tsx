import React, { useEffect } from 'react';
import { X, CheckCircle2, Layers, Cpu, ShieldCheck, Radio, AlertTriangle, GitFork, ArrowRight, Activity, Clock } from 'lucide-react';
import type { Project } from '../data/portfolioData';
import { ProjectArtwork } from './ProjectArtwork';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const isPhantomNet = project.id === 'phantomnet' && project.caseStudy;
  const cs = project.caseStudy;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.88)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem'
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={onClose}
    >
      <div
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '920px',
          maxHeight: '92vh',
          overflowY: 'auto',
          backgroundColor: '#0A0E1A',
          borderColor: isPhantomNet ? 'var(--color-rose)' : 'var(--color-violet)',
          boxShadow: isPhantomNet
            ? '0 25px 65px rgba(0, 0, 0, 0.95), 0 0 40px rgba(207, 65, 115, 0.25)'
            : '0 25px 60px rgba(0, 0, 0, 0.9), 0 0 35px rgba(129, 64, 220, 0.25)',
          padding: 'clamp(1.5rem, 3vw, 2.5rem)',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'rgba(17, 46, 129, 0.4)',
            border: '1px solid rgba(129, 64, 220, 0.35)',
            color: 'var(--color-text)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background-color 0.2s ease, border-color 0.2s ease',
            zIndex: 10
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(129, 64, 220, 0.3)';
            e.currentTarget.style.borderColor = 'var(--color-violet)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(17, 46, 129, 0.4)';
            e.currentTarget.style.borderColor = 'rgba(129, 64, 220, 0.35)';
          }}
        >
          <X size={20} color="#F5F5F7" />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '1.5rem', paddingRight: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.45rem', flexWrap: 'wrap' }}>
            <span
              className="badge"
              style={{
                borderColor: isPhantomNet ? 'rgba(207, 65, 115, 0.4)' : undefined,
                color: isPhantomNet ? 'var(--color-rose)' : undefined
              }}
            >
              <span
                className="badge-dot"
                style={{ backgroundColor: isPhantomNet ? 'var(--color-rose)' : 'var(--color-violet)' }}
              />
              {project.badge}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: isPhantomNet ? 'var(--color-rose)' : 'var(--color-violet)',
                letterSpacing: '0.08em',
                fontWeight: 600
              }}
            >
              {project.status}
            </span>
          </div>

          <h3
            id="modal-project-title"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.6rem, 3.2vw, 2.4rem)',
              fontWeight: 700,
              color: 'var(--color-text)',
              lineHeight: 1.15
            }}
          >
            {project.title}
          </h3>

          {project.subtitle && (
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.95rem',
                color: 'var(--color-rose)',
                marginTop: '0.25rem',
                fontWeight: 600
              }}
            >
              {project.subtitle}
            </div>
          )}

          {project.tagline && (
            <div
              style={{
                fontStyle: 'italic',
                fontSize: '0.92rem',
                color: 'var(--color-text-secondary)',
                marginTop: '0.35rem'
              }}
            >
              "{project.tagline}"
            </div>
          )}
        </div>

        {/* Project Artwork Showcase */}
        <div style={{ marginBottom: '2rem' }}>
          <ProjectArtwork projectId={project.id} />
        </div>

        {/* ========================================================
            DEDICATED PHANTOMNET CASE STUDY ARCHITECTURE
           ======================================================== */}
        {isPhantomNet && cs ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Status Disclaimer Alert */}
            <div
              style={{
                padding: '1rem 1.25rem',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'rgba(203, 41, 87, 0.12)',
                border: '1px solid rgba(207, 65, 115, 0.35)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.85rem'
              }}
            >
              <AlertTriangle size={18} color="var(--color-rose)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div style={{ fontSize: '0.88rem', color: 'var(--color-text)', lineHeight: 1.5 }}>
                <strong>Upcoming Project Status:</strong> PhantomNet is currently in active architectural planning and exploratory prototyping. All capabilities, routing heuristics, and security components listed below represent planned designs under development, not finished or independently verified production deployments.
              </div>
            </div>

            {/* 1. Project Vision */}
            <div>
              <h4
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.15rem',
                  color: 'var(--color-rose)',
                  marginBottom: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <Radio size={18} />
                1. Project Vision
              </h4>
              <p style={{ fontSize: '0.96rem', lineHeight: 1.65, color: 'var(--color-text)' }}>
                {cs.vision}
              </p>
            </div>

            {/* 2. Problem Being Explored */}
            <div
              style={{
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'rgba(17, 46, 129, 0.22)',
                border: '1px solid rgba(129, 64, 220, 0.25)'
              }}
            >
              <h4
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.05rem',
                  color: 'var(--color-violet)',
                  marginBottom: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <Activity size={17} />
                2. Problem Being Explored
              </h4>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--color-text-secondary)' }}>
                {cs.problem}
              </p>
            </div>

            {/* 3. Proposed Architecture */}
            <div>
              <h4
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.15rem',
                  color: 'var(--color-violet)',
                  marginBottom: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <Layers size={18} />
                3. Proposed System Architecture
              </h4>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.65, color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
                {cs.architecture}
              </p>

              {/* 4-Tier Breakdown */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '0.75rem'
                }}
              >
                <div style={{ padding: '0.85rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(13, 18, 32, 0.8)', border: '1px solid rgba(129, 64, 220, 0.2)' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-violet)', display: 'block', marginBottom: '0.2rem' }}>TIER 1 · UI & PRESENTATION</span>
                  <p style={{ fontSize: '0.82rem', color: 'var(--color-text)', margin: 0 }}>Flutter cross-platform client with reactive state management & mesh canvas.</p>
                </div>
                <div style={{ padding: '0.85rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(13, 18, 32, 0.8)', border: '1px solid rgba(129, 64, 220, 0.2)' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-violet)', display: 'block', marginBottom: '0.2rem' }}>TIER 2 · TRANSPORT DISCOVERY</span>
                  <p style={{ fontSize: '0.82rem', color: 'var(--color-text)', margin: 0 }}>Android Wi-Fi Direct (P2P) & BLE peripheral service manager.</p>
                </div>
                <div style={{ padding: '0.85rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(13, 18, 32, 0.8)', border: '1px solid rgba(207, 65, 115, 0.25)' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-rose)', display: 'block', marginBottom: '0.2rem' }}>TIER 3 · NATIVE CRYPTO ENGINE</span>
                  <p style={{ fontSize: '0.82rem', color: 'var(--color-text)', margin: 0 }}>Rust crate compiled via Dart FFI for key exchange and authenticated encryption.</p>
                </div>
                <div style={{ padding: '0.85rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(13, 18, 32, 0.8)', border: '1px solid rgba(207, 65, 115, 0.25)' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-rose)', display: 'block', marginBottom: '0.2rem' }}>TIER 4 · ROUTING & PERSISTENCE</span>
                  <p style={{ fontSize: '0.82rem', color: 'var(--color-text)', margin: 0 }}>Encrypted SQLite message buffer + TF Lite heuristic routing model.</p>
                </div>
              </div>
            </div>

            {/* 4. Planned Technologies */}
            <div>
              <h4
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.15rem',
                  color: 'var(--color-violet)',
                  marginBottom: '0.65rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <Cpu size={18} />
                4. Planned Technologies
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {cs.plannedTechnologies.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      padding: '0.35rem 0.75rem',
                      borderRadius: '4px',
                      backgroundColor: 'rgba(8, 10, 18, 0.85)',
                      border: '1px solid rgba(207, 65, 115, 0.3)',
                      color: 'var(--color-text)'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* 5. Planned Capabilities (A through H) */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <h4
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.15rem',
                    color: 'var(--color-rose)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    margin: 0
                  }}
                >
                  <ShieldCheck size={18} />
                  5. Planned Project Capabilities
                </h4>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>
                  * Planned capabilities, not verified completion claims
                </span>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '0.85rem'
                }}
              >
                {cs.capabilities.map((cap, cIdx) => (
                  <div
                    key={cIdx}
                    style={{
                      padding: '0.95rem',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'rgba(13, 18, 32, 0.75)',
                      border: '1px solid rgba(129, 64, 220, 0.25)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.35rem'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.75rem',
                          color: 'var(--color-rose)',
                          fontWeight: 700
                        }}
                      >
                        {String.fromCharCode(65 + cIdx)}.
                      </span>
                      <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.92rem', fontWeight: 600, color: 'var(--color-text)' }}>
                        {cap.title}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.84rem', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                      {cap.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 6. Security and Privacy Considerations */}
            <div
              style={{
                padding: '1.35rem',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'rgba(17, 46, 129, 0.2)',
                border: '1px solid rgba(207, 65, 115, 0.35)'
              }}
            >
              <h4
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.05rem',
                  color: 'var(--color-rose)',
                  marginBottom: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <ShieldCheck size={18} />
                6. Security and Privacy Considerations
              </h4>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.65, color: 'var(--color-text)' }}>
                {cs.securityConsiderations}
              </p>
            </div>

            {/* 7. Development Roadmap (Planned vs In Development vs Implemented) */}
            <div>
              <h4
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.15rem',
                  color: 'var(--color-violet)',
                  marginBottom: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <Clock size={18} />
                7. Development Roadmap & Status Breakdown
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {cs.roadmap.map((item, rIdx) => {
                  const isInProgress = item.status === 'in-progress';
                  const isCompleted = item.status === 'implemented';
                  return (
                    <div
                      key={rIdx}
                      style={{
                        padding: '1rem 1.25rem',
                        borderRadius: 'var(--radius-md)',
                        backgroundColor: isInProgress
                          ? 'rgba(203, 41, 87, 0.12)'
                          : isCompleted
                          ? 'rgba(17, 46, 129, 0.25)'
                          : 'rgba(8, 10, 18, 0.75)',
                        border: '1px solid',
                        borderColor: isInProgress
                          ? 'rgba(207, 65, 115, 0.35)'
                          : isCompleted
                          ? 'rgba(129, 64, 220, 0.35)'
                          : 'rgba(255, 255, 255, 0.1)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.35rem'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-violet)', fontWeight: 600 }}>
                            {item.phase}
                          </span>
                          <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-text)' }}>
                            {item.title}
                          </span>
                        </div>

                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.72rem',
                            padding: '0.2rem 0.55rem',
                            borderRadius: '4px',
                            backgroundColor: isInProgress ? 'rgba(203, 41, 87, 0.25)' : 'rgba(13, 18, 32, 0.85)',
                            color: isInProgress ? 'var(--color-rose)' : 'var(--color-text-muted)',
                            border: '1px solid',
                            borderColor: isInProgress ? 'rgba(207, 65, 115, 0.4)' : 'rgba(255, 255, 255, 0.1)'
                          }}
                        >
                          {item.statusLabel}
                        </span>
                      </div>

                      <p style={{ fontSize: '0.86rem', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                        {item.details}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 8. Current Status & Next Milestones */}
            <div
              style={{
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'rgba(13, 18, 32, 0.85)',
                border: '1px solid rgba(129, 64, 220, 0.3)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.65rem' }}>
                <GitFork size={17} color="var(--color-rose)" />
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', color: 'var(--color-text)' }}>
                  8. Current Status & Immediate Milestones
                </h4>
              </div>

              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-violet)', marginBottom: '0.75rem' }}>
                STATUS: {cs.currentStatus}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                {cs.nextMilestones.map((ms, mIdx) => (
                  <div key={mIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.86rem', color: 'var(--color-text-secondary)' }}>
                    <ArrowRight size={14} color="var(--color-rose)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span>{ms}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* ========================================================
             STANDARD CASE STUDY VIEW (JARVIS & ULTRON)
             ======================================================== */
          <>
            {/* Summary Description */}
            <div style={{ marginBottom: '1.75rem' }}>
              <h4
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.1rem',
                  color: 'var(--color-violet)',
                  marginBottom: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <Cpu size={18} />
                Executive Summary
              </h4>
              <p style={{ fontSize: '1rem', lineHeight: 1.65, color: 'var(--color-text)' }}>
                {project.summary}
              </p>
            </div>

            {/* Architecture Notes */}
            <div
              style={{
                marginBottom: '1.75rem',
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'rgba(17, 46, 129, 0.25)',
                border: '1px solid rgba(129, 64, 220, 0.25)'
              }}
            >
              <h4
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1rem',
                  color: 'var(--color-rose)',
                  marginBottom: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <Layers size={17} />
                Architectural Engineering
              </h4>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--color-text-secondary)' }}>
                {project.architectureNotes}
              </p>
            </div>

            {/* Feature Highlights Checklist */}
            <div style={{ marginBottom: '2rem' }}>
              <h4
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.1rem',
                  color: 'var(--color-violet)',
                  marginBottom: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <ShieldCheck size={18} />
                Key Engineering Highlights
              </h4>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: '0.75rem'
                }}
              >
                {project.features.map((feature, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.6rem',
                      fontSize: '0.88rem',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.4
                    }}
                  >
                    <CheckCircle2
                      size={15}
                      color="var(--color-violet)"
                      style={{ flexShrink: 0, marginTop: '3px' }}
                    />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Chips */}
            <div style={{ marginBottom: '2rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--color-violet)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  display: 'block',
                  marginBottom: '0.6rem'
                }}
              >
                Technologies Utilized
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      padding: '0.3rem 0.75rem',
                      borderRadius: '4px',
                      backgroundColor: 'rgba(8, 10, 18, 0.85)',
                      border: '1px solid rgba(129, 64, 220, 0.25)',
                      color: 'var(--color-text)'
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Modal Actions */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: '1rem',
            paddingTop: '1.25rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            flexWrap: 'wrap',
            marginTop: '1.5rem'
          }}
        >
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <GithubIcon size={16} color="var(--color-violet)" />
              <span>GitHub Profile</span>
            </a>
          )}

          <button onClick={onClose} className="btn btn-primary">
            <span>Close Case Study</span>
          </button>
        </div>
      </div>
    </div>
  );
};
