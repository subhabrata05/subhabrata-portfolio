import React, { useState } from 'react';
import { Mail, Copy, Check, Send, MapPin, ExternalLink, FileDown } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface ContactProps {
  onOpenResumeModal: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResumeModal }) => {
  const [copied, setCopied] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '' // spam protection
  });
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formError, setFormError] = useState<string>('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Spam bot honeypot detection
    if (formData.honeypot) {
      return;
    }

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormError('Please fill in all required fields.');
      return;
    }

    // Construct genuine mailto link with encoded payload
    const subjectEncoded = encodeURIComponent(
      formData.subject.trim() || `Portfolio Inquiry from ${formData.name.trim()}`
    );
    const bodyEncoded = encodeURIComponent(
      `Hello Subhabrata,\n\nName: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}\n\nSent from your portfolio website.`
    );

    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;

    // Open user's default email client with pre-filled message
    window.location.href = mailtoUrl;
    setFormSubmitted(true);
    setFormError('');
  };

  return (
    <section id="contact" className="section-padding" aria-label="Contact Subhabrata Dey">
      <div className="container">
        {/* Devsync Section Header */}
        <div className="section-header">
          <span className="section-tag">// GET IN TOUCH</span>
          <h2 className="section-title">Have an idea? Let's build something.</h2>
          <p className="section-subtitle">
            I'm interested in connecting with developers, collaborating on projects, contributing to open source, and exploring relevant internship opportunities.
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2rem',
            alignItems: 'start'
          }}
          className="contact-grid"
        >
          {/* Left Column: Direct Channels & Verified Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {/* Primary Email Card with 1-click mailto & copy */}
            <div
              className="glass-panel"
              style={{
                padding: '2.25rem',
                backgroundColor: 'rgba(13, 18, 32, 0.85)',
                border: '1.5px solid rgba(129, 64, 220, 0.3)'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1rem'
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(17, 46, 129, 0.4)',
                    border: '1px solid var(--color-violet)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Mail size={20} color="var(--color-violet)" />
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
                    // Direct Email
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: 'var(--color-text)'
                    }}
                  >
                    Send a Message
                  </h3>
                </div>
              </div>

              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
                Open to internships, software collaborations, and creative technical inquiries.
              </p>

              {/* Email Address & Actions */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.75rem',
                  backgroundColor: 'rgba(8, 10, 18, 0.9)',
                  padding: '0.85rem 1.15rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(129, 64, 220, 0.25)',
                  flexWrap: 'wrap'
                }}
              >
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.92rem',
                    color: 'var(--color-text)',
                    fontWeight: 500,
                    textDecoration: 'none'
                  }}
                  title="Click to compose email"
                >
                  {PERSONAL_INFO.email}
                </a>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <button
                    onClick={handleCopyEmail}
                    className="btn btn-sm btn-outline"
                    style={{ padding: '0.35rem 0.75rem', fontSize: '0.78rem' }}
                    title="Copy email to clipboard"
                    type="button"
                  >
                    {copied ? (
                      <>
                        <Check size={13} color="var(--color-violet)" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="btn btn-sm btn-primary"
                    style={{ padding: '0.35rem 0.75rem', fontSize: '0.78rem' }}
                  >
                    <span>Send Mail</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links Row */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1.25rem'
              }}
            >
              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel"
                style={{
                  padding: '1.6rem',
                  backgroundColor: 'rgba(13, 18, 32, 0.85)',
                  border: '1px solid rgba(129, 64, 220, 0.25)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-violet)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(129, 64, 220, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(129, 64, 220, 0.25)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-subtle)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <LinkedinIcon size={22} color="var(--color-violet)" />
                  <ExternalLink size={15} color="var(--color-text-muted)" />
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700, color: 'var(--color-text)' }}>
                    LinkedIn
                  </h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                    Subhabrata Dey
                  </span>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel"
                style={{
                  padding: '1.6rem',
                  backgroundColor: 'rgba(13, 18, 32, 0.85)',
                  border: '1px solid rgba(129, 64, 220, 0.25)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-violet)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(129, 64, 220, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(129, 64, 220, 0.25)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-subtle)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <GithubIcon size={22} color="var(--color-violet)" />
                  <ExternalLink size={15} color="var(--color-text-muted)" />
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700, color: 'var(--color-text)' }}>
                    GitHub
                  </h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                    @subhabrata05
                  </span>
                </div>
              </a>
            </div>

            {/* Location & Resume Badge */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.25rem 1.5rem',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'rgba(13, 18, 32, 0.85)',
                border: '1px solid rgba(129, 64, 220, 0.2)',
                flexWrap: 'wrap',
                gap: '1rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={16} color="var(--color-violet)" />
                <span style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)' }}>
                  Jaipur, Rajasthan, India
                </span>
              </div>

              <button
                onClick={onOpenResumeModal}
                className="btn btn-sm btn-outline"
                type="button"
              >
                <FileDown size={14} color="var(--color-violet)" />
                <span>Download Resume</span>
              </button>
            </div>
          </div>

          {/* Right Column: Direct Dispatch Composer */}
          <div
            className="glass-panel"
            style={{
              padding: '2.5rem',
              backgroundColor: 'rgba(13, 18, 32, 0.85)',
              border: '1.5px solid rgba(129, 64, 220, 0.3)'
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.35rem',
                fontWeight: 700,
                color: 'var(--color-text)',
                marginBottom: '0.5rem'
              }}
            >
              Send a Direct Message
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', marginBottom: '1.75rem' }}>
              Fill out this form to launch your email client with a structured draft ready to send.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {/* Spam bot honeypot (hidden from human users) */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div>
                <label
                  htmlFor="contact-name"
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--color-violet)',
                    textTransform: 'uppercase',
                    marginBottom: '0.4rem',
                    letterSpacing: '0.05em'
                  }}
                >
                  Your Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="e.g. Alex Mercer"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'rgba(8, 10, 18, 0.9)',
                    border: '1px solid rgba(129, 64, 220, 0.3)',
                    color: 'var(--color-text)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.92rem'
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--color-violet)',
                    textTransform: 'uppercase',
                    marginBottom: '0.4rem',
                    letterSpacing: '0.05em'
                  }}
                >
                  Your Email Address *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="e.g. alex@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'rgba(8, 10, 18, 0.9)',
                    border: '1px solid rgba(129, 64, 220, 0.3)',
                    color: 'var(--color-text)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.92rem'
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--color-violet)',
                    textTransform: 'uppercase',
                    marginBottom: '0.4rem',
                    letterSpacing: '0.05em'
                  }}
                >
                  Subject / Topic
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="e.g. Project Collaboration / Internship Opportunity"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'rgba(8, 10, 18, 0.9)',
                    border: '1px solid rgba(129, 64, 220, 0.3)',
                    color: 'var(--color-text)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.92rem'
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--color-violet)',
                    textTransform: 'uppercase',
                    marginBottom: '0.4rem',
                    letterSpacing: '0.05em'
                  }}
                >
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  placeholder="Describe your idea, project, or inquiry..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'rgba(8, 10, 18, 0.9)',
                    border: '1px solid rgba(129, 64, 220, 0.3)',
                    color: 'var(--color-text)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.92rem',
                    resize: 'vertical'
                  }}
                />
              </div>

              {formError && (
                <div style={{ color: 'var(--color-crimson)', fontSize: '0.85rem' }}>{formError}</div>
              )}

              {formSubmitted && (
                <div
                  style={{
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'rgba(129, 64, 220, 0.2)',
                    border: '1px solid var(--color-violet)',
                    color: 'var(--color-text)',
                    fontSize: '0.88rem'
                  }}
                >
                  Your email client has been dispatched with the message. You can also contact directly at {PERSONAL_INFO.email}.
                </div>
              )}

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                <span>Launch Email Client</span>
                <Send size={16} color="#FFFFFF" />
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .contact-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
