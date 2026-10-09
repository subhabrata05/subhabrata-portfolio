import React, { useState } from 'react';
import { ArrowUpRight, Layers, ShieldCheck, ChevronRight, Radio } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { ProjectArtwork } from './ProjectArtwork';
import { ProjectModal } from './ProjectModal';
import { GithubIcon } from './Icons';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-padding" aria-label="Featured Projects and Selected Work">
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '2rem' }}>
          <span className="section-tag">// EXPLORE WORK</span>
          <h2 className="section-title">A Showcase of My Projects.</h2>
          <p className="section-subtitle">
            Experiments, applications, and full-stack systems brought to life through code.
          </p>
        </div>

        {/* Project Showcases */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {PROJECTS.map((project, index) => {
            const isReversed = index % 2 === 1;
            const projectNumber = `(0${index + 1})`;
            const isUpcoming = project.isUpcoming;

            return (
              <div
                key={project.id}
                className="glass-panel"
                style={{
                  padding: 'clamp(1.5rem, 2.5vw, 2.25rem)',
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '2rem',
                  alignItems: 'center',
                  backgroundColor: isUpcoming ? 'rgba(15, 18, 34, 0.9)' : 'rgba(13, 18, 32, 0.85)',
                  border: isUpcoming ? '1.5px solid rgba(207, 65, 115, 0.4)' : '1px solid rgba(129, 64, 220, 0.25)',
                  boxShadow: isUpcoming ? '0 12px 35px rgba(0, 0, 0, 0.75), 0 0 25px rgba(207, 65, 115, 0.15)' : 'var(--shadow-subtle)',
                  position: 'relative'
                }}
                id={`project-${project.id}`}
              >
                {/* Visual / Artwork Column */}
                <div
                  style={{
                    order: isReversed ? 1 : 2,
                    cursor: 'pointer'
                  }}
                  onClick={() => setSelectedProject(project)}
                  title={`Click to inspect case study for ${project.title}`}
                  className="project-artwork-col"
                >
                  <ProjectArtwork projectId={project.id} />
                </div>

                {/* Content Column */}
                <div
                  style={{
                    order: isReversed ? 2 : 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                  }}
                  className="project-content-col"
                >
                  {/* Eyebrow, Status & Number */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
                      <span className="badge">
                        <span className="badge-dot" style={{ backgroundColor: isUpcoming ? 'var(--color-rose)' : 'var(--color-violet)' }} />
                        {project.tag}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.75rem',
                          color: isUpcoming ? 'var(--color-rose)' : 'var(--color-violet)',
                          letterSpacing: '0.08em',
                          fontWeight: 600,
                          backgroundColor: isUpcoming ? 'rgba(203, 41, 87, 0.15)' : 'transparent',
                          padding: isUpcoming ? '0.2rem 0.55rem' : '0',
                          borderRadius: isUpcoming ? '4px' : '0',
                          border: isUpcoming ? '1px solid rgba(203, 41, 87, 0.3)' : 'none'
                        }}
                      >
                        {project.status}
                      </span>
                    </div>

                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '1.2rem',
                        fontWeight: 700,
                        color: index === 0 ? 'var(--color-violet)' : index === 1 ? 'var(--color-crimson)' : 'var(--color-rose)'
                      }}
                    >
                      {projectNumber}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)',
                        fontWeight: 700,
                        color: 'var(--color-text)',
                        lineHeight: 1.18
                      }}
                    >
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.85rem',
                          color: 'var(--color-rose)',
                          marginTop: '0.25rem',
                          fontWeight: 500
                        }}
                      >
                        {project.subtitle}
                      </div>
                    )}
                  </div>

                  {/* Tagline if available */}
                  {project.tagline && (
                    <blockquote
                      style={{
                        fontSize: '0.92rem',
                        fontStyle: 'italic',
                        color: 'var(--color-text-secondary)',
                        borderLeft: '2px solid var(--color-rose)',
                        paddingLeft: '0.75rem',
                        margin: '0.1rem 0'
                      }}
                    >
                      "{project.tagline}"
                    </blockquote>
                  )}

                  {/* Summary */}
                  <p
                    style={{
                      fontSize: '0.98rem',
                      lineHeight: 1.6,
                      color: 'var(--color-text-secondary)'
                    }}
                  >
                    {project.summary}
                  </p>

                  {/* Highlights Bullet List */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', margin: '0.15rem 0' }}>
                    {project.features.slice(0, 3).map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.55rem',
                          fontSize: '0.88rem',
                          color: 'var(--color-text-secondary)'
                        }}
                      >
                        <ShieldCheck
                          size={14}
                          color={isUpcoming ? 'var(--color-rose)' : 'var(--color-violet)'}
                          style={{ flexShrink: 0 }}
                        />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack badges */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.4rem',
                      paddingTop: '0.35rem'
                    }}
                  >
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.75rem',
                          padding: '0.22rem 0.6rem',
                          borderRadius: '4px',
                          backgroundColor: 'rgba(8, 10, 18, 0.85)',
                          color: 'var(--color-text-secondary)',
                          border: isUpcoming ? '1px solid rgba(207, 65, 115, 0.25)' : '1px solid rgba(129, 64, 220, 0.2)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions row */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.85rem',
                      paddingTop: '0.5rem',
                      flexWrap: 'wrap'
                    }}
                  >
                    <button
                      onClick={() => setSelectedProject(project)}
                      className={isUpcoming ? 'btn btn-secondary' : 'btn btn-primary'}
                      style={
                        isUpcoming
                          ? {
                              borderColor: 'var(--color-rose)',
                              color: '#FFFFFF',
                              backgroundColor: 'rgba(203, 41, 87, 0.2)'
                            }
                          : undefined
                      }
                    >
                      {isUpcoming ? (
                        <>
                          <Radio size={15} color="var(--color-rose)" />
                          <span>View Roadmap & Case Study</span>
                        </>
                      ) : (
                        <>
                          <span>Inspect Case Study</span>
                          <ChevronRight size={16} color="#FFFFFF" />
                        </>
                      )}
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                        title="View author GitHub repositories"
                      >
                        <GithubIcon size={16} color="var(--color-violet)" />
                        <span>GitHub Profile</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Central repository verification note */}
        <div
          style={{
            marginTop: '2.25rem',
            padding: '1.25rem 1.6rem',
            borderRadius: 'var(--radius-md)',
            backgroundColor: 'rgba(13, 18, 32, 0.85)',
            border: '1px solid rgba(129, 64, 220, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Layers size={18} color="var(--color-violet)" />
            <span style={{ fontSize: '0.92rem', color: 'var(--color-text-secondary)' }}>
              More projects, utility libraries, and open-source experiments are accessible directly on GitHub.
            </span>
          </div>

          <a
            href="https://github.com/subhabrata05"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-secondary"
          >
            <span>Visit @subhabrata05</span>
            <ArrowUpRight size={14} color="#FFFFFF" />
          </a>
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <style>{`
        @media (min-width: 960px) {
          #project-jarvis {
            grid-template-columns: 1fr 1.08fr !important;
          }
          #project-ultron {
            grid-template-columns: 1.08fr 1fr !important;
          }
          #project-phantomnet {
            grid-template-columns: 1fr 1.08fr !important;
          }
        }
      `}</style>
    </section>
  );
};
