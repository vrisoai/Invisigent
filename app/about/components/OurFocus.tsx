'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { SectionLabel } from './shared/SectionLabel';
import { AnimatedCard } from './shared/AnimatedCard';
import { useMediaQuery } from '@/app/hooks/useMediaQuery';
import { fadeUp, fadeLeft, fadeRight, CARD_FADE } from '@/app/lib/animations';

const FOCUS_CARDS = [
  { tag: 'ORCH', number: '01', title: 'Agent Orchestration Systems', body: 'LangGraph-based multi-agent frameworks that coordinate complex task sequences, manage state across agent runs, and execute multi-step reasoning pipelines in production environments.' },
  { tag: 'AUTO', number: '02', title: 'AI Automation Infrastructure', body: 'n8n and FastAPI-based automation pipelines that connect your existing systems to AI decision layers — eliminating manual workflows and enabling autonomous operations at scale.' },
  { tag: 'KNOW', number: '03', title: 'Enterprise Knowledge Systems', body: 'Pinecone and Cohere-powered RAG pipelines connected to your internal documents, databases, and knowledge bases. Sub-3-second retrieval latency. Audit-ready retrieval traces. No hallucinations.' },
  { tag: 'PROD', number: '04', title: 'AI-Native Product Development', body: 'AI infrastructure for copilots, intelligent assistants, and AI-first SaaS products — including backend API design, model integration, observability pipelines, and production deployment architecture.' },
];

interface OurFocusProps {
  reducedMotion?: boolean;
}

export function OurFocus({ reducedMotion = false }: OurFocusProps) {
  const ref = useRef<HTMLElement>(null);
  const isMobile = useMediaQuery('(max-width: 639px)');
  const margin = isMobile ? '-40px 0px' : '-80px 0px';
  const inView = useInView(ref, { once: true, margin });

  const cardVariants = (i: number) => {
    if (reducedMotion) return undefined;
    if (isMobile) return CARD_FADE;
    const delay = i >= 2 ? 0.15 : 0;
    if (i === 0 || i === 2) return { ...fadeLeft, visible: { ...fadeLeft.visible, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay } } };
    return { ...fadeRight, visible: { ...fadeRight.visible, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay } } };
  };

  return (
    <section
      ref={ref}
      className="about-focus overflow-x-hidden"
      style={{ background: '#121212' }}
      aria-labelledby="about-focus-heading"
    >
      <div className="section-wrapper">
        <div className="section-inner-max section-inner">
          <div className="text-center">
            <SectionLabel text="[ WHAT WE BUILD ]" reducedMotion={reducedMotion} />
            <motion.h2
              id="about-focus-heading"
              className="about-heading text-section-h font-serif font-medium text-[var(--color-text-primary)]"
              variants={reducedMotion ? undefined : fadeUp}
              initial="hidden"
              whileInView={reducedMotion ? undefined : 'visible'}
              viewport={{ once: true, margin }}
            >
              Our Focus Areas
            </motion.h2>
            <motion.p
              className="about-description text-body mx-auto max-w-[560px] 2xl:max-w-[700px] min-[2800px]:max-w-[980px] font-display leading-[1.75] text-[var(--color-text-secondary)] text-center"
              style={{ textAlign: 'center' }}
              variants={reducedMotion ? undefined : fadeUp}
              initial="hidden"
              whileInView={reducedMotion ? undefined : 'visible'}
              viewport={{ once: true, margin }}
              custom={1}
            >
              Invisigent specialises in four categories of enterprise AI infrastructure.
            </motion.p>
          </div>

          <motion.div
            className="about-block-spacing grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6 xl:gap-8 2xl:gap-10 min-[1920px]:gap-12"
            variants={
              reducedMotion
                ? undefined
                : { hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } } }
            }
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {FOCUS_CARDS.map((card, i) => (
              <AnimatedCard
                key={card.title}
                topBorder="blue"
                number={card.number}
                variants={cardVariants(i)}
                className="relative group"
              >
                <span
                  className="absolute right-3 top-3 font-mono text-[10px] uppercase tracking-wider text-[var(--color-text-micro)] transition-colors duration-300 group-hover:text-[var(--color-trust-amber)] sm:right-4 sm:top-4"
                  aria-hidden="true"
                >
                  {card.tag}
                </span>
                <h3 className="text-card-title font-display font-semibold text-[var(--color-text-primary)] mb-2 pr-10 sm:mb-3 sm:pr-12">
                  {card.title}
                </h3>
                <p className="text-body font-display leading-[1.7] text-[var(--color-text-secondary)]">
                  {card.body}
                </p>
              </AnimatedCard>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
            style={{ marginTop: '2.5rem' }}
            variants={reducedMotion ? undefined : fadeUp}
            initial="hidden"
            whileInView={reducedMotion ? undefined : 'visible'}
            viewport={{ once: true, margin }}
            custom={2}
          >
            <a
              href="/services"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 9999,
                fontFamily: 'var(--font-display)',
                fontWeight: 500,
                fontSize: 'clamp(0.875rem, 0.8vw, 1rem)',
                padding: '0.875rem 2rem',
                whiteSpace: 'nowrap',
                textDecoration: 'none',
                background: 'var(--color-btn-bg)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: 'var(--color-text-primary)',
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#2D5BFF';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(45,91,255,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Full Service Breakdown
            </a>
            <a
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 9999,
                fontFamily: 'var(--font-display)',
                fontWeight: 500,
                fontSize: 'clamp(0.875rem, 0.8vw, 1rem)',
                padding: '0.875rem 2rem',
                whiteSpace: 'nowrap',
                textDecoration: 'none',
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'var(--color-text-secondary)',
                transition: 'border-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#FBBF24';
                e.currentTarget.style.color = '#FBBF24';
                e.currentTarget.style.boxShadow = '0 0 16px rgba(251,191,36,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.color = 'var(--color-text-secondary)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Start a Conversation
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
