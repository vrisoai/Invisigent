'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface GradientDividerProps {
  reducedMotion?: boolean;
  className?: string;
}

export function GradientDivider({ reducedMotion = false, className = '' }: GradientDividerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return;

    if (reducedMotion) {
      gsap.set(ref.current, { scaleX: 1 });
      return;
    }

    gsap.set(ref.current, { scaleX: 0 });

    gsap.to(ref.current, {
      scaleX: 1,
      duration: 0.9,
      ease: 'power2.inOut',
      scrollTrigger: { trigger: ref.current, start: 'top 92%', once: true },
    });
  }, { scope: ref });

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={className}
      style={{
        height: 1,
        background: 'var(--gradient-divider)',
        margin: '0 auto',
        width: '100%',
        maxWidth: 800,
        transformOrigin: 'center',
      }}
    />
  );
}
