import React, { useEffect } from 'react';
import { X, FileDown, GraduationCap, Award, Briefcase, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

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
        padding: '1.5rem'
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      onClick={onClose}
    >
      <div
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '780px',
          maxHeight: '90vh',
          overflowY: 'auto',
          backgroundColor: '#0D1220',
          borderColor: 'var(--color-violet)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9), 0 0 35px rgba(129, 64, 220, 0.25)',
          padding: '2.25rem',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close resume preview"
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            backgroundColor: 'rgba(17, 46, 129, 0.4)',
            border: '1px solid rgba(129, 64, 220, 0.35)',
            color: 'var(--color-text)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background-color 0.2s ease'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(129, 64, 220, 0.3)')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(17, 46, 129, 0.4)')}
        >
          <X size={18} color="#F5F5F7" />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '1.75rem', paddingRight: '2.5rem' }}>
          <div className="badge" style={{ marginBottom: '0.5rem' }}>
            <span className="badge-dot" />
            Curriculum Vitae Overview
          </div>
          <h3
            id="resume-modal-title"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.8rem',
              fontWeight: 700,
              color: 'var(--color-text)'
            }}
          >
            {PERSONAL_INFO.name}
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-violet)' }}>
            {PERSONAL_INFO.identity}
          </p>
        </div>

        {/* Resume Content Summary Box */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            backgroundColor: 'rgba(17, 46, 129, 0.2)',
            padding: '1.5rem',
            borderRadius: 'var(--radius-md)',
            border: '1px solid rgba(129, 64, 220, 0.25)',
            marginBottom: '1.75rem'
          }}
        >
          {/* Education */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <GraduationCap size={16} color="var(--color-violet)" />
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.98rem', color: 'var(--color-text)' }}>
                Academic Background
              </h4>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              • B.Tech in CSE — UEM Jaipur (Expected 2028, CGPA: 6.85)<br />
              • Higher Secondary (CBSE 2023) — Kendriya Vidyalaya, Adra (65%)<br />
              • Secondary (CBSE 2021) — Kendriya Vidyalaya, Adra (91%)
            </p>
          </div>

          {/* Key Roles */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <Briefcase size={16} color="var(--color-rose)" />
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.98rem', color: 'var(--color-text)' }}>
                Leadership & Experience
              </h4>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              • President, Atrang Cultural Club (Progressed: Member → Tech Coordinator → President)<br />
              • Technical lead for cultural events, acoustic setups, and IIT Bombay Mood Indigo coordination<br />
              • College-organized Hackathon Top 15 Finalist
            </p>
          </div>

          {/* Achievements */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <Award size={16} color="var(--color-violet)" />
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.98rem', color: 'var(--color-text)' }}>
                Verified Achievements
              </h4>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              • Selected Contributor for GirlScript Summer of Code (GSSoC) 2026 (Selected from 95,000+ applicants pool)<br />
              • Active participant in cybersecurity communities, CTF competitions, and secure programming
            </p>
          </div>
        </div>

        {/* Modal Actions */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            paddingTop: '1.25rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <a
            href="mailto:deysubhabrata010@gmail.com?subject=Resume%20Inquiry%20-%20Subhabrata%20Dey"
            className="btn btn-outline"
          >
            <Mail size={15} color="var(--color-violet)" />
            <span>Request Full PDF by Email</span>
          </a>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a
              href="/Subhabrata_Dey_Resume.pdf"
              download="Subhabrata_Dey_Resume.pdf"
              className="btn btn-primary"
            >
              <FileDown size={16} color="#FFFFFF" />
              <span>Download PDF Resume</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
