'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionLabel } from './shared/SectionLabel';
import { AnimatedCard } from './shared/AnimatedCard';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const PERSONAS = [
  {
    title: 'Builders Moving to Production',
    body: 'Startups and product teams who have validated their AI idea and need infrastructure that can scale beyond the prototype — with proper observability, failure handling, and deployment architecture.',
  },
  {
    title: 'Companies Integrating AI Into Operations',
    body: 'Established businesses embedding AI into workflows, products, and decision-making — who need systems that actually integrate with what they already run, not a separate AI layer bolted on top.',
  },
  {
    title: 'Enterprises with Compliance Requirements',
    body: 'Organizations in regulated industries or global markets where AI governance, security controls, and auditability are non-negotiable from the first sprint — not added at deployment review.',
  },
] as const;

interface WhoWeWorkWithProps {
  reducedMotion?: boolean;
}

export function WhoWeWorkWith({ reducedMotion = false }: WhoWeWorkWithProps) {
  const sectionRef  = useRef<HTMLElement>(null);
  const headingRef  = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (!headingRef.current) return;

    if (reducedMotion) {
      gsap.set(headingRef.current, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(headingRef.current, { opacity: 0, y: 24 });
    gsap.to(headingRef.current, {
      opacity: 1, y: 0, duration: 0.7, ease: 'expo.out',
      scrollTrigger: { trigger: headingRef.current, start: 'top 85%', once: true },
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="about-who overflow-x-hidden"
      style={{ background: 'var(--color-bg-primary)' }}
      aria-labelledby="about-who-heading"
    >
      <div className="section-wrapper">
        <div className="section-inner-max section-inner">

          <div className="text-center">
            <SectionLabel text="[ WHO THIS IS FOR ]" reducedMotion={reducedMotion} />
            <h2
              ref={headingRef}
              id="about-who-heading"
              className="about-heading text-section-h font-serif font-medium text-[var(--color-text-primary)]"
            >
              Who We Work With — Enterprise AI Clients
            </h2>
          </div>

          <div className="about-block-spacing grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5 lg:gap-6 2xl:gap-8">
            {PERSONAS.map((persona, i) => (
              <AnimatedCard
                key={persona.title}
                topBorder={i === 1 ? 'blue' : 'amber'}
                index={i}
                reducedMotion={reducedMotion}
              >
                <h3 className="text-card-title font-display font-semibold text-[var(--color-text-primary)] mb-2 sm:mb-3">
                  {persona.title}
                </h3>
                <p className="text-body font-display leading-[1.7] text-[var(--color-text-secondary)]">
                  {persona.body}
                </p>
              </AnimatedCard>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
