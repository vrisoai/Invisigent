'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface SectionLabelProps {
  text: string;
  className?: string;
  reducedMotion?: boolean;
}

export function SectionLabel({ text, className = '', reducedMotion = false }: SectionLabelProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return;

    if (reducedMotion) {
      gsap.set(ref.current, { opacity: 1, x: 0 });
      return;
    }

    // gsap.set owns initial state — no CSS opacity needed
    gsap.set(ref.current, { opacity: 0, x: -14 });

    gsap.to(ref.current, {
      opacity: 1,
      x: 0,
      duration: 0.55,
      ease: 'power2.out',
      scrollTrigger: { trigger: ref.current, start: 'top 92%', once: true },
    });
  }, { scope: ref });

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`section-label ${className}`}
    >
      {text}
    </div>
  );
}
