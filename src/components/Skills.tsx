import React, { useState } from 'react';
import { Smartphone, Globe, Brain, ShieldAlert, Wrench, CheckCircle2 } from 'lucide-react';
import { SKILL_GROUPS } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getCategoryIcon = (key: string) => {
    switch (key) {
      case 'mobile':
        return <Smartphone size={18} color="var(--color-rose)" />;
      case 'web':
        return <Globe size={18} color="var(--color-violet)" />;
      case 'ai':
        return <Brain size={18} color="var(--color-crimson)" />;
      case 'security':
        return <ShieldAlert size={18} color="var(--color-red)" />;
      case 'tools':
        return <Wrench size={18} color="var(--color-violet)" />;
      default:
        return null;
    }
  };

  const filteredGroups =
    activeCategory === 'all'
      ? SKILL_GROUPS
      : SKILL_GROUPS.filter((group) => group.categoryKey === activeCategory);

  return (
    <section id="skills" className="section-padding bg-grid" aria-label="Technical Skills and Toolkit">
      <div className="container">
        {/* Devsync Section Header */}
        <div className="section-header">
          <span className="section-tag">// SKILLS</span>
          <h2 className="section-title">Technologies I work with.</h2>
          <p className="section-subtitle">
            A comprehensive, battle-tested stack spanning native mobile development, modern full-stack web applications, AI models, and defensive security.
          </p>
        </div>

        {/* Filter Pills */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            flexWrap: 'wrap',
            marginBottom: '1.75rem'
          }}
          role="tablist"
          aria-label="Filter skills by domain"
        >
          <button
            onClick={() => setActiveCategory('all')}
            style={{
              padding: '0.5rem 1.1rem',
              borderRadius: 'var(--radius-full)',
              border: '1px solid',
              borderColor: activeCategory === 'all' ? 'var(--color-violet)' : 'rgba(255, 255, 255, 0.12)',
              backgroundColor: activeCategory === 'all' ? 'var(--color-violet)' : 'rgba(13, 18, 32, 0.7)',
              color: activeCategory === 'all' ? '#FFFFFF' : 'var(--color-text-secondary)',
              fontFamily: 'var(--font-heading)',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: activeCategory === 'all' ? '0 0 16px rgba(129, 64, 220, 0.4)' : 'none'
            }}
            role="tab"
            aria-selected={activeCategory === 'all'}
          >
            All Disciplines ({SKILL_GROUPS.reduce((acc, g) => acc + g.skills.length, 0)})
          </button>

          {SKILL_GROUPS.map((group) => {
            const isSelected = activeCategory === group.categoryKey;
            return (
              <button
                key={group.categoryKey}
                onClick={() => setActiveCategory(group.categoryKey)}
                style={{
                  padding: '0.5rem 1.1rem',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid',
                  borderColor: isSelected ? 'var(--color-violet)' : 'rgba(255, 255, 255, 0.12)',
                  backgroundColor: isSelected ? 'rgba(129, 64, 220, 0.25)' : 'rgba(13, 18, 32, 0.7)',
                  color: isSelected ? '#FFFFFF' : 'var(--color-text-secondary)',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  boxShadow: isSelected ? '0 0 16px rgba(129, 64, 220, 0.3)' : 'none'
                }}
                role="tab"
                aria-selected={isSelected}
              >
                {getCategoryIcon(group.categoryKey)}
                <span>{group.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skill Groups Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {filteredGroups.map((group) => (
            <div
              key={group.categoryKey}
              className="glass-panel"
              style={{
                padding: '1.85rem',
                backgroundColor: 'rgba(13, 18, 32, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(129, 64, 220, 0.45)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.7), 0 0 20px rgba(129, 64, 220, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.boxShadow = 'var(--shadow-subtle)';
              }}
            >
              <div>
                {/* Group Heading */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '0.75rem'
                  }}
                >
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(17, 46, 129, 0.35)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid rgba(129, 64, 220, 0.3)'
                    }}
                  >
                    {getCategoryIcon(group.categoryKey)}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.15rem',
                        fontWeight: 700,
                        color: 'var(--color-text)'
                      }}
                    >
                      {group.title}
                    </h3>
                  </div>
                </div>

                <p
                  style={{
                    fontSize: '0.86rem',
                    color: 'var(--color-text-secondary)',
                    marginBottom: '1.25rem',
                    lineHeight: 1.5
                  }}
                >
                  {group.description}
                </p>

                {/* Skill Badges */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.55rem'
                  }}
                >
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        padding: '0.4rem 0.75rem',
                        borderRadius: '6px',
                        backgroundColor: 'rgba(8, 10, 18, 0.85)',
                        border: '1px solid rgba(129, 64, 220, 0.25)',
                        fontFamily: 'var(--font-heading)',
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        color: 'var(--color-text)',
                        transition: 'border-color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--color-violet)';
                        e.currentTarget.style.backgroundColor = 'rgba(17, 46, 129, 0.35)';
                        e.currentTarget.style.boxShadow = '0 0 12px rgba(129, 64, 220, 0.25)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(129, 64, 220, 0.25)';
                        e.currentTarget.style.backgroundColor = 'rgba(8, 10, 18, 0.85)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <CheckCircle2 size={13} color="var(--color-violet)" />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Count Footer */}
              <div
                style={{
                  marginTop: '1.5rem',
                  paddingTop: '0.75rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.73rem',
                  color: 'var(--color-text-muted)'
                }}
              >
                <span>// DOMAIN STACK</span>
                <span style={{ color: 'var(--color-violet)' }}>
                  {group.skills.length} TECHNOLOGIES
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
