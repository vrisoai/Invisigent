'use client';

import type { ReactNode } from 'react';
import { useCallback } from 'react';

type Props = {
  children: ReactNode;
};

/**
 * Cursor-reactive tilt for interactive-demo “From Demo to Deployment” cards
 * (same math as HowWeWork: bend toward the hovered side).
 */
export function InteractiveDemoDeploymentTiltCard({ children }: Props) {
  const handleMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    el.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    el.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    const maxTilt = typeof window !== 'undefined' && window.innerWidth < 768 ? 8 : 16;
    const tiltY = (0.5 - x) * maxTilt;
    const tiltX = (y - 0.5) * maxTilt;
    el.style.setProperty('--tilt-x', `${tiltX}deg`);
    el.style.setProperty('--tilt-y', `${tiltY}deg`);
  }, []);

  const handleLeave = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    el.style.setProperty('--tilt-x', '0deg');
    el.style.setProperty('--tilt-y', '0deg');
  }, []);

  return (
    <article
      className="interactive-demo-deployment-card interactive-demo-deployment-card-tilt glass-card flex h-full min-h-0 flex-col text-center"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </article>
  );
}
