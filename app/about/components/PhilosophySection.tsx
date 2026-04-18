'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionLabel } from './shared/SectionLabel';
import { AnimatedCard } from './shared/AnimatedCard';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const PILLARS = [
  {
    number: '01',
    topBorder: 'amber' as const,
    title: 'Architecture Before Automation',
    body: 'We define the orchestration logic, data access patterns, failure handling, and monitoring architecture before any LangGraph agent or automation pipeline is instantiated. Infrastructure decisions made late are expensive. Made early, they are competitive advantages.',
  },
  {
    number: '02',
    topBorder: 'blue' as const,
    title: 'Ownership Over Vendor Lock-In',
    body: 'Invisigent builds model-agnostic infrastructure — OpenAI today, Claude or Llama tomorrow, on-prem the quarter after. No provider lock-in. No platform dependency. Your orchestration layer, your retrieval system, your deployment environment. Yours, permanently.',
  },
  {
    number: '03',
    topBorder: 'amber' as const,
    title: 'Production Systems Over Prototypes',
    body: 'Every system includes defined SLAs, operational runbooks, LangSmith monitoring pipelines, and RBAC access controls. We do not hand over black-box systems. We hand over systems your operations team can run, your security team can audit, and your engineering team can extend.',
  },
];

interface PhilosophySectionProps {
  reducedMotion?: boolean;
}

export function PhilosophySection({ reducedMotion = false }: PhilosophySectionProps) {
  const sectionRef  = useRef<HTMLElement>(null);
  const headingRef  = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const gridRef     = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const heading  = headingRef.current;
    const subtitle = subtitleRef.current;
    if (!heading || !subtitle) return;

    if (reducedMotion) {
      gsap.set([heading, subtitle], { opacity: 1, y: 0 });
      return;
    }

    // gsap.set owns the initial state — runs in useLayoutEffect, before browser paint
    gsap.set([heading, subtitle], { opacity: 0, y: 24 });

    gsap.to([heading, subtitle], {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'expo.out',
      stagger: 0.1,
      scrollTrigger: { trigger: heading, start: 'top 85%', once: true },
    });

    // perspective on card grid for future 3-D effects
    if (gridRef.current) gsap.set(gridRef.current, { perspective: 900 });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="section-2"
      className="about-philosophy overflow-x-hidden"
      aria-labelledby="about-philosophy-heading"
    >
      <div className="section-wrapper">
        <div className="section-inner-max section-inner">
          <div className="text-center">
            <SectionLabel text="[ HOW WE THINK ]" reducedMotion={reducedMotion} />

            <h2
              ref={headingRef}
              id="about-philosophy-heading"
              className="about-heading text-section-h font-serif font-medium text-[var(--color-text-primary)]"
            >
              Our Engineering Philosophy
            </h2>

            <p
              ref={subtitleRef}
              className="about-description text-body mx-auto max-w-[480px] 2xl:max-w-[640px] min-[2800px]:max-w-[900px] font-display leading-[1.75] text-[var(--color-text-secondary)] text-center"
              style={{ textAlign: 'center' }}
            >
              Three principles shape how we design every system we build.
            </p>
          </div>

          <div
            ref={gridRef}
            className="about-philosophy-cards grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6 2xl:gap-8 min-[1920px]:gap-10"
          >
            {PILLARS.map((pillar, i) => (
              <AnimatedCard
                key={pillar.title}
                topBorder={pillar.topBorder}
                number={pillar.number}
                index={i}
                reducedMotion={reducedMotion}
              >
                <h3 className="text-card-title font-display font-semibold text-[var(--color-text-primary)] mb-2 sm:mb-3">
                  {pillar.title}
                </h3>
                <p className="text-body font-display leading-[1.7] text-[var(--color-text-secondary)]">
                  {pillar.body}
                </p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
