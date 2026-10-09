import React, { useState, useEffect } from 'react';

interface BootLoaderProps {
  onComplete: () => void;
}

const BOOT_LOGS = [
  'INITIALIZING SYSTEM ARCHITECTURE...',
  'CONNECTING VITE 8 + REACT 19 ENGINE...',
  'RESOLVING MESH TOPOLOGY & RADAR GRAPH...',
  'SYNCHRONIZING CRYPTO PROTOCOLS & SHADERS...',
  'SYSTEM ONLINE. WELCOME.'
];

export const BootLoader: React.FC<BootLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);
  const [isFinishing, setIsFinishing] = useState(false);

  useEffect(() => {
    // Respect prefers-reduced-motion: finish instantly
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    // Lock body scroll while loader is active
    document.body.style.overflow = 'hidden';

    // Failsafe timer (guarantees loader cannot stay stuck beyond 2.4s)
    const failsafe = setTimeout(() => {
      document.body.style.overflow = '';
      onComplete();
    }, 2400);

    // Progress counter animation from 0 to 100 in ~1.7s
    const startTime = performance.now();
    const duration = 1650; // ms

    let frameId: number;
    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const pct = Math.min(Math.floor((elapsed / duration) * 100), 100);
      setProgress(pct);

      // Step through logs based on progress thresholds
      if (pct > 85) setLogIndex(4);
      else if (pct > 65) setLogIndex(3);
      else if (pct > 40) setLogIndex(2);
      else if (pct > 15) setLogIndex(1);
      else setLogIndex(0);

      if (pct < 100) {
        frameId = requestAnimationFrame(updateProgress);
      } else {
        // Trigger cinematic finish
        setIsFinishing(true);
        setTimeout(() => {
          document.body.style.overflow = '';
          onComplete();
        }, 350);
      }
    };

    frameId = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(failsafe);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  return (
    <div
      className={`boot-loader-overlay ${isFinishing ? 'finishing' : ''}`}
      aria-label="System Initializing"
      role="status"
    >
      {/* Background Cyber Depth Radial */}
      <div className="boot-loader-bg-glow" aria-hidden="true" />

      {/* Top Header Telemetry */}
      <div className="boot-loader-header">
        <div className="boot-header-tag">
          <span className="boot-pulse-dot" />
          <span>SUBHABRATA.DEV // SYSTEM_BOOT</span>
        </div>
        <div className="boot-header-meta">
          <span>KERNEL: VITE.REACT-19</span>
          <span className="boot-sep">·</span>
          <span>BUILD: 2026.10</span>
        </div>
      </div>

      {/* Center Console & Identity */}
      <div className="boot-loader-center">
        {/* Core System Brand */}
        <div className="boot-brand-wrap">
          <div className="boot-brand-sub">// PORTFOLIO INTERFACE</div>
          <h1 className="boot-brand-title">
            <span>SUBHABRATA</span>
            <span className="boot-brand-accent">.DEV</span>
          </h1>
          <div className="boot-brand-role">FULL-STACK · MOBILE · AI · CYBER</div>
        </div>

        {/* Terminal Message Stream */}
        <div className="boot-terminal-box">
          <div className="boot-terminal-line">
            <span className="boot-terminal-prompt">&gt;</span>
            <span className="boot-terminal-text">{BOOT_LOGS[logIndex]}</span>
            <span className="boot-blinking-cursor">█</span>
          </div>
        </div>

        {/* Progress Bar & Percentage */}
        <div className="boot-progress-section">
          <div className="boot-progress-bar-track">
            <div
              className="boot-progress-bar-fill"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="boot-progress-meta">
            <span className="boot-progress-status">
              {progress === 100 ? (
                <span style={{ color: 'var(--color-rose)', fontWeight: 700 }}>
                  [ SYSTEM ONLINE ]
                </span>
              ) : (
                'INITIALIZING CORE MODULES...'
              )}
            </span>
            <span className="boot-progress-pct">{progress}%</span>
          </div>
        </div>
      </div>

      {/* Bottom Footer Telemetry & Quick Skip Action */}
      <div className="boot-loader-footer">
        <div className="boot-footer-info">
          <span>LOCATION: JAIPUR, IN</span>
          <span className="boot-sep">·</span>
          <span>STATUS: 200 OK</span>
        </div>

        <button
          onClick={() => {
            document.body.style.overflow = '';
            onComplete();
          }}
          className="boot-skip-btn"
          title="Skip loader animation"
        >
          [ SKIP INTRO &rarr; ]
        </button>
      </div>
    </div>
  );
};
