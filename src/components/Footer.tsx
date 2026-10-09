import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#05070D',
        borderTop: '1px solid rgba(129, 64, 220, 0.2)',
        paddingTop: '4rem',
        paddingBottom: '3rem',
        position: 'relative'
      }}
      role="contentinfo"
    >
      <div className="container">
        {/* Top Footer Row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem',
            paddingBottom: '2.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          {/* Brand & Monogram */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                backgroundColor: '#0D1220',
                border: '1.5px solid var(--color-violet)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 12px rgba(129, 64, 220, 0.3)'
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.9rem',
                  fontWeight: 800,
                  color: 'var(--color-text)'
                }}
              >
                SD
              </span>
            </div>

            <div>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: 'var(--color-text)',
                  display: 'block'
                }}
              >
                {PERSONAL_INFO.brand}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--color-text-muted)'
                }}
              >
                {PERSONAL_INFO.name} · {PERSONAL_INFO.location}
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
              flexWrap: 'wrap'
            }}
            aria-label="Footer Quick Links"
          >
            <a
              href="#hero"
              style={{
                fontSize: '0.9rem',
                color: 'var(--color-text-secondary)',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-violet)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
            >
              Home
            </a>
            <a
              href="#about"
              style={{
                fontSize: '0.9rem',
                color: 'var(--color-text-secondary)',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-violet)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
            >
              About
            </a>
            <a
              href="#skills"
              style={{
                fontSize: '0.9rem',
                color: 'var(--color-text-secondary)',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-violet)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
            >
              Skills
            </a>
            <a
              href="#projects"
              style={{
                fontSize: '0.9rem',
                color: 'var(--color-text-secondary)',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-violet)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
            >
              Projects
            </a>
            <a
              href="#process"
              style={{
                fontSize: '0.9rem',
                color: 'var(--color-text-secondary)',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-violet)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
            >
              Process
            </a>
            <a
              href="#journey"
              style={{
                fontSize: '0.9rem',
                color: 'var(--color-text-secondary)',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-violet)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
            >
              Journey
            </a>
            <a
              href="#contact"
              style={{
                fontSize: '0.9rem',
                color: 'var(--color-text-secondary)',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-violet)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
            >
              Contact
            </a>
          </nav>

          {/* Socials & Back to Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                backgroundColor: '#0D1220',
                border: '1px solid rgba(129, 64, 220, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-text)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-violet)';
                e.currentTarget.style.color = 'var(--color-violet)';
                e.currentTarget.style.boxShadow = '0 0 12px rgba(129, 64, 220, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(129, 64, 220, 0.25)';
                e.currentTarget.style.color = 'var(--color-text)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <GithubIcon size={18} />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                backgroundColor: '#0D1220',
                border: '1px solid rgba(129, 64, 220, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-text)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-violet)';
                e.currentTarget.style.color = 'var(--color-violet)';
                e.currentTarget.style.boxShadow = '0 0 12px rgba(129, 64, 220, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(129, 64, 220, 0.25)';
                e.currentTarget.style.color = 'var(--color-text)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <LinkedinIcon size={18} />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="btn btn-outline"
              style={{
                width: '38px',
                height: '38px',
                padding: 0,
                borderRadius: '8px',
                borderColor: 'rgba(129, 64, 220, 0.3)'
              }}
              title="Return to top of page"
            >
              <ArrowUp size={18} color="var(--color-violet)" />
            </button>
          </div>
        </div>

        {/* Bottom Footer Details */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            paddingTop: '2rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            color: 'var(--color-text-muted)'
          }}
        >
          <div>
            &copy; {CURRENT_YEAR} {PERSONAL_INFO.name}. All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span>Designed and built with curiosity.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
