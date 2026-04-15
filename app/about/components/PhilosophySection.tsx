'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { SectionLabel } from './shared/SectionLabel';
import { AnimatedCard } from './shared/AnimatedCard';
import { useMediaQuery } from '@/app/hooks/useMediaQuery';
import { EASE, fadeUp, fadeLeft, fadeRight, CARD_FADE } from '@/app/lib/animations';

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
  const ref = useRef<HTMLElement>(null);
  const isMobile = useMediaQuery('(max-width: 639px)');
  const margin = isMobile ? '-40px 0px' : '-80px 0px';
  const inView = useInView(ref, { once: true, margin });

  const cardVariants = (i: number) => {
    if (reducedMotion) return undefined;
    if (isMobile) return CARD_FADE;
    if (i === 0) return fadeLeft;
    if (i === 1) return fadeRight;
    return fadeLeft;
  };

  return (
    <section
      ref={ref}
      id="section-2"
      className="about-philosophy overflow-x-hidden"
      aria-labelledby="about-philosophy-heading"
    >
      <div className="section-wrapper">
        <div className="section-inner-max section-inner">
          <div className="text-center">
            <SectionLabel text="[ HOW WE THINK ]" reducedMotion={reducedMotion} />
            <motion.h2
              id="about-philosophy-heading"
              className="about-heading text-section-h font-serif font-medium text-[var(--color-text-primary)]"
              variants={reducedMotion ? undefined : fadeUp}
              initial="hidden"
              whileInView={reducedMotion ? undefined : 'visible'}
              viewport={{ once: true, margin }}
            >
              Our Philosophy
            </motion.h2>
            <motion.p
              className="about-description text-body mx-auto max-w-[480px] 2xl:max-w-[640px] min-[2800px]:max-w-[900px] font-display leading-[1.75] text-[var(--color-text-secondary)] text-center"
              style={{ textAlign: 'center' }}
              variants={reducedMotion ? undefined : fadeUp}
              initial="hidden"
              whileInView={reducedMotion ? undefined : 'visible'}
              viewport={{ once: true, margin }}
              custom={1}
            >
              Three principles shape how we design every system we build.
            </motion.p>
          </div>

          <motion.div
            className="about-philosophy-cards grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6 2xl:gap-8 min-[1920px]:gap-10"
            variants={
              reducedMotion
                ? undefined
                : { hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }
            }
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {PILLARS.map((pillar, i) => (
              <AnimatedCard
                key={pillar.title}
                topBorder={pillar.topBorder}
                number={pillar.number}
                variants={reducedMotion ? undefined : cardVariants(i)}
              >
                  <h3 className="text-card-title font-display font-semibold text-[var(--color-text-primary)] mb-2 sm:mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-body font-display leading-[1.7] text-[var(--color-text-secondary)]">
                    {pillar.body}
                  </p>
                </AnimatedCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
