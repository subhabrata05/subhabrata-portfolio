import React, { useEffect, useRef, useState } from 'react';

type CursorMode = 'default' | 'interactive' | 'view';

export const CyberCursor: React.FC = () => {
  const [cursorMode, setCursorMode] = useState<CursorMode>('default');
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Position refs to avoid unnecessary React re-renders during motion
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const trailPos = useRef({ x: -100, y: -100 });

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only initialize on desktop precision pointer devices
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || isReduced) return;

    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      mousePos.current = { x: e.clientX, y: e.clientY };

      // Instant update for crisp crimson dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    // Dynamic hover mode detection
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Check for project cards (display VIEW)
      const projectCard = target.closest(
        '#projects [id^="project-"], .project-artwork-col'
      );
      if (projectCard) {
        setCursorMode('view');
        return;
      }

      // Check for general interactive elements
      const interactive = target.closest(
        'a, button, input, textarea, select, [role="button"], [role="tab"], .tech-pill, .badge, .btn'
      );
      if (interactive) {
        setCursorMode('interactive');
        return;
      }

      setCursorMode('default');
    };

    // Smooth Lerp Animation Loop
    const render = () => {
      // Ring follow with smooth easing (lerp factor 0.18)
      const ringLerp = 0.18;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ringLerp;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ringLerp;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      // Faint trailing echo ring (lerp factor 0.09)
      const trailLerp = 0.09;
      trailPos.current.x += (mousePos.current.x - trailPos.current.x) * trailLerp;
      trailPos.current.y += (mousePos.current.y - trailPos.current.y) * trailLerp;

      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${trailPos.current.x}px, ${trailPos.current.y}px, 0)`;
      }

      animId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, [isVisible]);

  return (
    <div
      className={`cyber-cursor-root ${isVisible ? 'visible' : ''} mode-${cursorMode} ${isClicked ? 'clicked' : ''}`}
      aria-hidden="true"
    >
      {/* 1. Subtle Faint Trail Echo */}
      <div ref={trailRef} className="cyber-cursor-trail" />

      {/* 2. Smooth Outlined Easing Ring */}
      <div ref={ringRef} className="cyber-cursor-ring">
        {cursorMode === 'view' && <span className="cursor-label-view">VIEW</span>}
      </div>

      {/* 3. Small Crisp Crimson-Pink Center Dot */}
      <div ref={dotRef} className="cyber-cursor-dot" />
    </div>
  );
};
