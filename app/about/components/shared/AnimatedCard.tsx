'use client';

import { useRef, useCallback, type ReactNode } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useMediaQuery } from '@/app/hooks/useMediaQuery';

gsap.registerPlugin(useGSAP, ScrollTrigger);

type TopBorder = 'amber' | 'blue';

interface AnimatedCardProps {
  children: ReactNode;
  topBorder?: TopBorder;
  className?: string;
  number?: string;
  /** Stagger index — card delays entry by index × 0.1 s */
  index?: number;
  reducedMotion?: boolean;
}

export function AnimatedCard({
  children,
  topBorder = 'amber',
  className = '',
  number,
  index = 0,
  reducedMotion = false,
}: AnimatedCardProps) {
  const cardRef  = useRef<HTMLDivElement>(null);
  const spotRef  = useRef<HTMLDivElement>(null);
  const hasHover = useMediaQuery('(hover: hover)');

  useGSAP(() => {
    const card = cardRef.current;
    if (!card) return;

    if (reducedMotion) {
      gsap.set(card, { opacity: 1, y: 0 });
      return;
    }

    // gsap.set owns the initial state before browser paint (useLayoutEffect timing)
    gsap.set(card, { opacity: 0, y: 28 });

    gsap.to(card, {
      opacity: 1,
      y: 0,
      duration: 0.75,
      ease: 'expo.out',
      delay: index * 0.1,
      scrollTrigger: { trigger: card, start: 'top 85%', once: true },
    });
  }, { scope: cardRef });

  // Spotlight — direct style update: fastest possible, zero framework overhead
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!hasHover || !cardRef.current || !spotRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      spotRef.current.style.background = `radial-gradient(220px circle at ${x}px ${y}px, rgba(45,91,255,0.09), transparent 70%)`;
    },
    [hasHover]
  );

  const handleMouseEnter = useCallback(() => {
    if (!hasHover) return;
    gsap.to(spotRef.current, { opacity: 1, duration: 0.25 });
    gsap.to(cardRef.current,  { y: -3,    duration: 0.3, ease: 'power2.out' });
  }, [hasHover]);

  const handleMouseLeave = useCallback(() => {
    if (!hasHover) return;
    gsap.to(spotRef.current, { opacity: 0, duration: 0.3 });
    gsap.to(cardRef.current,  { y: 0,     duration: 0.45, ease: 'elastic.out(1, 0.5)' });
  }, [hasHover]);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`card-base card-${topBorder} about-card ${className}`}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {hasHover && (
        <div
          ref={spotRef}
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            opacity: 0,
            background: 'radial-gradient(220px circle at 50% 50%, rgba(45,91,255,0.09), transparent 70%)',
          }}
        />
      )}

      {number !== undefined && (
        <span className="about-card-number" aria-hidden="true">
          {number}
        </span>
      )}
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  );
}
