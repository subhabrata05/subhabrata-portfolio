import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Process } from './components/Process';
import { Experience } from './components/Experience';
import { Milestones } from './components/Milestones';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { CyberCursor } from './components/CyberCursor';
import { BootLoader } from './components/BootLoader';
import './App.css';

export function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState<boolean>(false);
  const [isBooting, setIsBooting] = useState<boolean>(() => {
    try {
      return !sessionStorage.getItem('subho_portfolio_booted');
    } catch {
      return false;
    }
  });

  const handleBootComplete = () => {
    setIsBooting(false);
    try {
      sessionStorage.setItem('subho_portfolio_booted', 'true');
    } catch {
      // sessionStorage unavailable
    }
  };

  return (
    <div className="portfolio-app" style={{ position: 'relative', minHeight: '100vh' }}>
      {/* 1. Cinematic Full-Screen Boot Loader (Initial Page Entry) */}
      {isBooting && <BootLoader onComplete={handleBootComplete} />}

      {/* 2. Custom Animated Desktop Cursor */}
      <CyberCursor />

      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        style={{
          position: 'absolute',
          top: '-100px',
          left: '1rem',
          zIndex: 9999,
          padding: '0.75rem 1.5rem',
          backgroundColor: 'var(--color-primary)',
          color: '#FFFFFF',
          borderRadius: '4px',
          fontFamily: 'var(--font-heading)',
          fontWeight: 600,
          textDecoration: 'none',
          transition: 'top 0.2s ease'
        }}
        onFocus={(e) => (e.currentTarget.style.top = '1rem')}
        onBlur={(e) => (e.currentTarget.style.top = '-100px')}
      >
        Skip to main content
      </a>

      {/* Global Navigation Bar */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content">
        {/* 1. Hero Section with 3D Canvas */}
        <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* 2. Editorial About Section */}
        <About />

        {/* 3. Categorized Technical Toolkit */}
        <Skills />

        {/* 4. Selected Work / Projects Showcase & Case Studies */}
        <Projects />

        {/* 5. Development Work Process */}
        <Process />

        {/* 6. Leadership & Experience (Beyond the Code) */}
        <Experience />

        {/* 6. Milestones & Achievements */}
        <Milestones />

        {/* 7. Education & Academic Background */}
        <Education />

        {/* 8. Get In Touch / Contact Channels */}
        <Contact onOpenResumeModal={() => setIsResumeModalOpen(true)} />
      </main>

      {/* Minimalist Cohesive Footer */}
      <Footer />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}

export default App;
