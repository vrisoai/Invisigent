'use client';

/**
 * HowWeBuild — GSAP "Live Timeline Draw"
 *
 * The vertical connecting line is replaced with a solid div that starts at
 * height:0 and grows downward as you scroll — tied 1-to-1 to scroll progress
 * via scrub. Each step dot "activates" (amber glow + scale) exactly when the
 * growing line reaches it. Steps slide in from the left in stagger.
 */

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionLabel } from './shared/SectionLabel';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const STEPS = [
  {
    num: '01', label: 'DISCOVERY_PHASE',
    title: 'Discovery & AI Strategy',
    body: "We analyze your existing infrastructure, data environment, and operational priorities to identify where AI systems can deliver real business impact — and where they won't.",
  },
  {
    num: '02', label: 'ARCHITECTURE_DESIGN',
    title: 'Architecture Design',
    body: 'Our team designs the full system architecture — LangGraph orchestration layers, Pinecone vector retrieval pipelines, n8n or FastAPI automation frameworks, and the Docker/cloud infrastructure scaffolding required for production deployment. Every architectural decision is documented and explained.',
  },
  {
    num: '03', label: 'DEPLOYMENT_INTEGRATION',
    title: 'Deployment & Integration',
    body: 'Systems are deployed with LangSmith monitoring, defined performance baselines, and operational runbooks — not handed over as a black box. Security controls, RBAC configuration, and audit trail setup are included in every deployment, not added later.',
  },
  {
    num: '04', label: 'OPTIMIZATION_SCALING',
    title: 'Optimization & Scaling',
    body: 'After deployment, systems are continuously monitored, optimized for performance, and scaled as usage grows — ensuring long-term reliability and operational stability with defined SLAs.',
  },
];

interface HowWeBuildProps {
  reducedMotion?: boolean;
}

export function HowWeBuild({ reducedMotion = false }: HowWeBuildProps) {
  const sectionRef  = useRef<HTMLElement>(null);
  const leftColRef  = useRef<HTMLDivElement>(null);
  const lineRef     = useRef<HTMLDivElement>(null);
  const dotRefs     = useRef<(HTMLDivElement | null)[]>([]);
  const stepRefs    = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    if (reducedMotion) {
      gsap.set(leftColRef.current, { opacity: 1, y: 0 });
      gsap.set(stepRefs.current.filter(Boolean), { opacity: 1, x: 0 });
      gsap.set(lineRef.current, { height: '100%' });
      dotRefs.current.forEach(d => d && gsap.set(d, {
        borderColor: 'var(--color-trust-amber)',
        boxShadow: 'none',
      }));
      return;
    }

    const stepsContainer = lineRef.current?.parentElement;

    // ── left sticky column fades up ───────────────────────────────────────
    gsap.set(leftColRef.current, { opacity: 0, y: 24 });
    gsap.to(leftColRef.current, {
      opacity: 1, y: 0, duration: 0.7, ease: 'expo.out',
      scrollTrigger: { trigger: leftColRef.current, start: 'top 80%', once: true },
    });

    // ── step rows slide in from left, staggered ───────────────────────────
    stepRefs.current.forEach((step, i) => {
      if (!step) return;
      gsap.set(step, { opacity: 0, x: -28 });
      gsap.to(step, {
        opacity: 1, x: 0,
        duration: 0.65, ease: 'expo.out',
        scrollTrigger: { trigger: step, start: 'top 85%', once: true },
        delay: i * 0.08,
      });
    });

    // ── timeline line grows with scroll ───────────────────────────────────
    if (lineRef.current && stepsContainer) {
      gsap.set(lineRef.current, { height: 0 });
      gsap.to(lineRef.current, {
        height: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: stepsContainer,
          start: 'top 65%',
          end:   'bottom 65%',
          scrub: 1.2,
        },
      });

      // ── each dot activates when the line reaches it ───────────────────
      dotRefs.current.forEach((dot, i) => {
        if (!dot || !stepRefs.current[i]) return;
        gsap.to(dot, {
          borderColor: '#fbbf24',
          boxShadow: '0 0 10px rgba(251,191,36,0.7), 0 0 22px rgba(251,191,36,0.25)',
          scale: 1.25,
          duration: 0.35,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: stepRefs.current[i]!,
            start: 'top 68%',
            toggleActions: 'play none none reverse',
          },
        });
      });
    }
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="about-how overflow-x-hidden"
      style={{ background: 'var(--color-bg-primary)' }}
      aria-labelledby="about-how-heading"
    >
      <div className="section-wrapper">
        <div className="section-inner-max section-inner">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-12 lg:gap-16 2xl:gap-20 min-[1920px]:gap-28">

            {/* LEFT: heading + intro */}
            <div
              ref={leftColRef}
              className="mb-10 md:col-span-2 md:mb-0 md:sticky md:top-24 md:self-start xl:top-32"
            >
              <SectionLabel text="[ OUR PROCESS ]" reducedMotion={reducedMotion} />
              <h2
                id="about-how-heading"
                className="about-heading text-section-h font-serif font-medium text-[var(--color-text-primary)]"
              >
                How We Build AI Systems
              </h2>
              <p
                className="about-description text-body font-display text-[var(--color-text-secondary)]"
                style={{ lineHeight: 1.75 }}
              >
                Every engagement follows a four-phase process — from understanding your environment
                to optimizing systems already running in production.
              </p>
            </div>

            {/* RIGHT: steps */}
            <div className="relative md:col-span-3">
              {/*
                Live timeline line — starts at height:0, grows downward with scroll.
                Positioned identically to the old dashed border.
              */}
              <div
                ref={lineRef}
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '7px',        // centre of the 15px dot (half of 15px - 0.5px line)
                  width: '1px',
                  height: 0,
                  background: 'linear-gradient(to bottom, #fbbf24, rgba(251,191,36,0.2))',
                  zIndex: 0,
                  transformOrigin: 'top',
                }}
              />
              {/* sm breakpoint: dot is 18px wide → left: 9px - 0.5px = ~8.5px, use 9px */}
              <style>{`
                @media (min-width: 640px) {
                  .timeline-line-inner { left: 9px !important; }
                }
              `}</style>

              <div className="flex flex-col gap-8 sm:gap-10">
                {STEPS.map((step, i) => (
                  <div
                    key={step.label}
                    ref={el => { stepRefs.current[i] = el; }}
                    className="relative flex gap-4 sm:gap-6"
                  >
                    {/* Dot — activates (glows) when scroll line reaches it */}
                    <div
                      ref={el => { dotRefs.current[i] = el; }}
                      className="flex-shrink-0 w-[15px] h-[15px] sm:w-[18px] sm:h-[18px] rounded-full mt-[3px]"
                      style={{
                        background: 'var(--color-bg-primary)',
                        border: '1.5px solid rgba(251,191,36,0.25)',
                        position: 'relative',
                        zIndex: 2,
                        transition: reducedMotion ? 'none' : undefined,
                      }}
                      aria-hidden="true"
                    />

                    {/* Content */}
                    <div className="flex-1 min-w-0 pb-2">
                      <p
                        className="text-label font-mono uppercase tracking-wider text-[var(--color-text-micro)] mb-1"
                        style={{ letterSpacing: '0.08em' }}
                      >
                        <span aria-hidden="true">{step.num} — </span>
                        {step.label}
                      </p>
                      <h3
                        className="text-card-title font-display font-semibold text-[var(--color-text-primary)] mb-2 sm:mb-3"
                        style={{ lineHeight: 1.25 }}
                      >
                        {step.title}
                      </h3>
                      <p
                        className="text-body font-display text-sm sm:text-base text-[var(--color-text-secondary)]"
                        style={{ lineHeight: 1.75, margin: 0 }}
                      >
                        {step.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
