import React, { useState, useEffect } from 'react';
import { ArrowDown, Send, FileDown, MapPin, Sparkles, Terminal, Layers, Radio } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hasResumePdf] = useState<boolean>(true); // public/Subhabrata_Dey_Resume.pdf exists

  useEffect(() => {
    let animationFrameId: number;
    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        const { innerWidth, innerHeight } = window;
        const x = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
        const y = (e.clientY / innerHeight - 0.5) * 2; // -1 to 1
        setMousePos({ x, y });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: 'calc(100vh - 4rem)',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '5.5rem',
        paddingBottom: '2.5rem',
        position: 'relative',
        overflow: 'hidden'
      }}
      aria-label="Introduction and Hero"
    >
      {/* Background Atmospheric Deep Blue & Electric Violet Lighting */}
      <div
        style={{
          position: 'absolute',
          top: '12%',
          right: '8%',
          width: '540px',
          height: '540px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(17, 46, 129, 0.42) 0%, rgba(129, 64, 220, 0.16) 45%, transparent 70%)',
          filter: 'blur(110px)',
          pointerEvents: 'none'
        }}
        aria-hidden="true"
      />
      <div
        style={{
          position: 'absolute',
          bottom: '8%',
          left: '5%',
          width: '420px',
          height: '420px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(203, 41, 87, 0.18) 0%, rgba(17, 46, 129, 0.12) 50%, transparent 70%)',
          filter: 'blur(100px)',
          pointerEvents: 'none'
        }}
        aria-hidden="true"
      />

      <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.75rem',
            alignItems: 'center'
          }}
          className="hero-grid"
        >
          {/* Left Column: Personal Identity & Editorial Composition */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem' }}>
            {/* Status Pill & Location */}
            <div
              className="motion-reveal-up motion-stagger-1"
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}
            >
              <div className="badge">
                <span className="badge-dot" />
                <span>AVAILABLE FOR COLLABORATION</span>
              </div>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--color-violet)',
                  padding: '0.3rem 0.65rem',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'rgba(13, 18, 32, 0.85)',
                  border: '1px solid rgba(129, 64, 220, 0.25)'
                }}
              >
                <MapPin size={12} />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

            {/* Eyebrow */}
            <div
              className="motion-reveal-up motion-stagger-1"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                color: 'var(--color-violet)',
                letterSpacing: '0.12em',
                fontWeight: 600
              }}
            >
              // {PERSONAL_INFO.heroEyebrow}
            </div>

            {/* Dominant Headline: Intro & Subhabrata Dey */}
            <div className="motion-reveal-up motion-stagger-2">
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'clamp(0.95rem, 1.3vw, 1.15rem)',
                  color: 'var(--color-rose)',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '0.4rem'
                }}
              >
                <span
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-rose)',
                    boxShadow: '0 0 10px var(--color-rose)'
                  }}
                />
                <span>{PERSONAL_INFO.heroIntro}</span>
              </div>

              {/* Dominant Name Heading */}
              <h1 className="hero-name-heading" aria-label={PERSONAL_INFO.heroName}>
                <span className="hero-name-word-first">SUBHABRATA</span>
                <span className="hero-name-word-last">DEY</span>
                <span className="hero-name-dot">.</span>
              </h1>

              {/* Supporting Headline (Strictly smaller than the name) */}
              <h2
                style={{
                  fontSize: 'clamp(1.35rem, 2.4vw, 2.05rem)',
                  fontWeight: 600,
                  lineHeight: 1.25,
                  letterSpacing: '-0.02em',
                  color: 'var(--color-text)',
                  marginTop: '0.4rem'
                }}
              >
                I build ideas into{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #CF4173 0%, #8140DC 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'inline-block'
                  }}
                >
                  digital experiences.
                </span>
              </h2>
            </div>

            {/* Supporting Description */}
            <p
              className="motion-reveal-up motion-stagger-3"
              style={{
                fontSize: 'clamp(0.98rem, 1.15vw, 1.1rem)',
                lineHeight: 1.65,
                color: 'var(--color-text-secondary)',
                maxWidth: '560px'
              }}
            >
              {PERSONAL_INFO.heroSupportingDescription}
            </p>

            {/* Primary & Secondary Actions */}
            <div
              className="motion-reveal-up motion-stagger-4"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                flexWrap: 'wrap',
                paddingTop: '0.25rem'
              }}
            >
              <button
                onClick={() => scrollTo('projects')}
                className="btn btn-primary"
                id="hero-explore-work-btn"
              >
                <span>{PERSONAL_INFO.heroPrimaryCta}</span>
                <ArrowDown size={16} color="#FFFFFF" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="btn btn-secondary"
                id="hero-lets-connect-btn"
              >
                <span>{PERSONAL_INFO.heroSecondaryCta}</span>
                <Send size={15} color="var(--color-violet)" />
              </button>

              {hasResumePdf && (
                <button
                  onClick={onOpenResumeModal}
                  className="btn btn-outline"
                  id="hero-resume-btn"
                  title="Download or inspect Subhabrata Dey's resume"
                >
                  <FileDown size={15} color="var(--color-violet)" />
                  <span>{PERSONAL_INFO.heroResumeCta}</span>
                </button>
              )}
            </div>

            {/* Interactive Project Previews (Quick jumps including PhantomNet) */}
            <div
              className="motion-reveal-up motion-stagger-5"
              style={{
                paddingTop: '1rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.55rem'
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--color-text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em'
                }}
              >
                // Featured Project Quick Jumps:
              </span>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
                <a
                  href="#project-jarvis"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('project-jarvis');
                  }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    padding: '0.35rem 0.8rem',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'rgba(13, 18, 32, 0.85)',
                    border: '1px solid rgba(129, 64, 220, 0.3)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    color: 'var(--color-text)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-violet)';
                    e.currentTarget.style.backgroundColor = 'rgba(17, 46, 129, 0.35)';
                    e.currentTarget.style.boxShadow = '0 0 16px rgba(129, 64, 220, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(129, 64, 220, 0.3)';
                    e.currentTarget.style.backgroundColor = 'rgba(13, 18, 32, 0.85)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <Terminal size={13} color="var(--color-violet)" />
                  <span>01 · JARVIS (AI Assistant)</span>
                </a>

                <a
                  href="#project-ultron"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('project-ultron');
                  }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    padding: '0.35rem 0.8rem',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'rgba(13, 18, 32, 0.85)',
                    border: '1px solid rgba(203, 41, 87, 0.3)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    color: 'var(--color-text)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-crimson)';
                    e.currentTarget.style.backgroundColor = 'rgba(203, 41, 87, 0.15)';
                    e.currentTarget.style.boxShadow = '0 0 16px rgba(203, 41, 87, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(203, 41, 87, 0.3)';
                    e.currentTarget.style.backgroundColor = 'rgba(13, 18, 32, 0.85)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <Layers size={13} color="var(--color-crimson)" />
                  <span>02 · U.L.T.R.O.N. (3D Interface)</span>
                </a>

                <a
                  href="#project-phantomnet"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('project-phantomnet');
                  }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    padding: '0.35rem 0.8rem',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'rgba(17, 46, 129, 0.35)',
                    border: '1px solid rgba(207, 65, 115, 0.45)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    color: 'var(--color-text)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-rose)';
                    e.currentTarget.style.backgroundColor = 'rgba(17, 46, 129, 0.6)';
                    e.currentTarget.style.boxShadow = '0 0 16px rgba(207, 65, 115, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(207, 65, 115, 0.45)';
                    e.currentTarget.style.backgroundColor = 'rgba(17, 46, 129, 0.35)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <Radio size={13} color="var(--color-rose)" />
                  <span>03 · PhantomNet (Offline Mesh · Upcoming)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Portrait with Smooth Floating & Subtle Parallax */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '440px'
            }}
            className="hero-portrait-container"
          >
            {/* Organic Floating Wrapper */}
            <div className="portrait-float-wrapper" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              {/* Parallax Card with Controlled Rotation */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '400px',
                  transform: `perspective(1000px) rotateY(${mousePos.x * 4.5}deg) rotateX(${-mousePos.y * 4.5}deg) translateZ(8px)`,
                  transition: 'transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {/* Backlight Aura Glow: Deep Blue, Electric Violet & Crimson Rim */}
                <div
                  style={{
                    position: 'absolute',
                    width: '360px',
                    height: '360px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle at 35% 35%, rgba(129, 64, 220, 0.35) 0%, rgba(17, 46, 129, 0.28) 45%, rgba(203, 41, 87, 0.16) 75%, transparent 90%)',
                    filter: 'blur(38px)',
                    zIndex: 0
                  }}
                  aria-hidden="true"
                />

                {/* Portrait Frame with Cyber Rim Lighting */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '360px',
                    borderRadius: '22px',
                    overflow: 'hidden',
                    border: '1.5px solid rgba(129, 64, 220, 0.45)',
                    backgroundColor: '#0D1220',
                    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.85), -4px -4px 25px rgba(129, 64, 220, 0.22), 4px 4px 25px rgba(203, 41, 87, 0.18)',
                    zIndex: 1
                  }}
                  className="portrait-card"
                >
                  <img
                    src="/portrait.jpg"
                    alt="Subhabrata Dey - Full-Stack Developer, Mobile & AI Application Builder"
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      objectFit: 'cover',
                      filter: 'contrast(1.04) saturate(1.04)'
                    }}
                    loading="eager"
                  />

                  {/* Bottom subtle gradient overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '70px',
                      background: 'linear-gradient(to top, rgba(0, 0, 0, 0.95), transparent)',
                      pointerEvents: 'none'
                    }}
                  />

                  {/* Overlay Name Tag */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      left: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--color-text)',
                      backgroundColor: 'rgba(8, 10, 18, 0.9)',
                      padding: '0.35rem 0.8rem',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid rgba(129, 64, 220, 0.35)',
                      backdropFilter: 'blur(8px)'
                    }}
                  >
                    <span
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-violet)',
                        boxShadow: '0 0 8px var(--color-violet)'
                      }}
                    />
                    <span>Subhabrata Dey</span>
                  </div>
                </div>

                {/* Floating Technology Badges with Gentle Cursor Parallax */}
                {/* 1. React 19 */}
                <div
                  className="tech-pill"
                  style={{
                    position: 'absolute',
                    top: '8%',
                    left: '-20px',
                    transform: `translate(${mousePos.x * -8}px, ${mousePos.y * -8}px)`,
                    zIndex: 3
                  }}
                >
                  <Sparkles size={13} color="var(--color-violet)" />
                  <span>React 19</span>
                </div>

                {/* 2. Flutter */}
                <div
                  className="tech-pill"
                  style={{
                    position: 'absolute',
                    top: '32%',
                    right: '-24px',
                    transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 10}px)`,
                    zIndex: 3
                  }}
                >
                  <span style={{ color: 'var(--color-rose)' }}>⚡</span>
                  <span>Flutter</span>
                </div>

                {/* 3. Node.js */}
                <div
                  className="tech-pill"
                  style={{
                    position: 'absolute',
                    bottom: '22%',
                    left: '-26px',
                    transform: `translate(${mousePos.x * -10}px, ${mousePos.y * -10}px)`,
                    zIndex: 3
                  }}
                >
                  <Terminal size={13} color="var(--color-violet)" />
                  <span>Node.js</span>
                </div>

                {/* 4. Three.js */}
                <div
                  className="tech-pill"
                  style={{
                    position: 'absolute',
                    bottom: '6%',
                    right: '-18px',
                    transform: `translate(${mousePos.x * 8}px, ${mousePos.y * 8}px)`,
                    zIndex: 3
                  }}
                >
                  <Layers size={13} color="var(--color-rose)" />
                  <span>Three.js</span>
                </div>

                {/* 5. Groq AI */}
                <div
                  className="tech-pill"
                  style={{
                    position: 'absolute',
                    top: '-12px',
                    right: '18%',
                    transform: `translate(${mousePos.x * 6}px, ${mousePos.y * -6}px)`,
                    zIndex: 3
                  }}
                >
                  <span className="badge-dot" />
                  <span>Groq AI</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Refined Compact Scroll Indicator */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            marginTop: '2rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--color-text-muted)'
          }}
        >
          <div
            style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer' }}
            onClick={() => scrollTo('projects')}
          >
            <span style={{ color: 'var(--color-violet)' }}>[</span>
            <span>SCROLL DOWN</span>
            <span style={{ color: 'var(--color-violet)' }}>]</span>
          </div>

          <div>
            <span style={{ letterSpacing: '0.05em' }}>FULL-STACK · MOBILE · AI · CYBER</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
        @media (max-width: 768px) {
          .tech-pill {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};
