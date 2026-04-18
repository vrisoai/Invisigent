'use client';

import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionLabel } from './shared/SectionLabel';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const FAQ_ITEMS = [
  {
    q: 'What makes Invisigent different from other AI consulting firms?',
    a: 'We build the infrastructure, not just the strategy deck. Most AI consultancies advise on what to build and hand it back to your team. Invisigent designs, builds, and deploys production AI systems — with monitoring, documentation, and compliance controls included. We also do not lock you into our platform or tooling; everything we build, you own.',
  },
  {
    q: 'How long does a typical AI infrastructure engagement take?',
    a: 'Strategy engagements typically run 2–4 weeks and end with a documented architecture plan. Full system builds range from 6–16 weeks depending on complexity and integration requirements. Ongoing partnerships are scoped quarterly with defined deliverables.',
  },
  {
    q: 'Do you work with organizations that have no existing AI infrastructure?',
    a: 'Yes — and these are often the best engagements. Starting without legacy AI infrastructure means we can design the right architecture from the beginning rather than working around technical decisions made in a prototype phase. The discovery phase is specifically designed for organizations in this position.',
  },
] as const;

interface AboutFAQProps {
  reducedMotion?: boolean;
}

export function AboutFAQ({ reducedMotion = false }: AboutFAQProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const itemRefs   = useRef<(HTMLDivElement | null)[]>([]);
  const [open, setOpen] = useState<number | null>(null);

  useGSAP(() => {
    if (!headingRef.current) return;

    if (reducedMotion) {
      gsap.set(headingRef.current, { opacity: 1, y: 0 });
      gsap.set(itemRefs.current.filter(Boolean), { opacity: 1, y: 0 });
      return;
    }

    gsap.set(headingRef.current, { opacity: 0, y: 24 });
    gsap.to(headingRef.current, {
      opacity: 1, y: 0, duration: 0.7, ease: 'expo.out',
      scrollTrigger: { trigger: headingRef.current, start: 'top 85%', once: true },
    });

    itemRefs.current.forEach((item, i) => {
      if (!item) return;
      gsap.set(item, { opacity: 0, y: 18 });
      gsap.to(item, {
        opacity: 1, y: 0, duration: 0.55, ease: 'power2.out',
        delay: i * 0.07,
        scrollTrigger: { trigger: item, start: 'top 88%', once: true },
      });
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="about-faq overflow-x-hidden"
      style={{ background: '#121212' }}
      aria-labelledby="about-faq-heading"
    >
      <div className="section-wrapper">
        <div className="section-inner-max section-inner">
          <div className="mx-auto w-full max-w-[720px] 2xl:max-w-[960px] min-[2800px]:max-w-[1400px]">

            <SectionLabel text="[ COMMON QUESTIONS ]" reducedMotion={reducedMotion} />
            <h2
              ref={headingRef}
              id="about-faq-heading"
              className="about-heading text-section-h font-serif font-medium text-[var(--color-text-primary)]"
            >
              Frequently Asked Questions
            </h2>

            <div style={{ marginTop: 'clamp(2rem, 3vw, 4rem)', display: 'flex', flexDirection: 'column' }}>
              {FAQ_ITEMS.map((item, i) => {
                const isOpen = open === i;
                return (
                  <div
                    key={i}
                    ref={el => { itemRefs.current[i] = el; }}
                    style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
                  >
                    <button
                      type="button"
                      id={`faq-btn-${i}`}
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${i}`}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                        gap: '1.5rem',
                        width: '100%',
                        textAlign: 'left',
                        padding: 'clamp(1rem, 1.5vw, 2rem) 0',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: 'var(--color-text-primary)',
                      }}
                    >
                      <span
                        className="font-display font-semibold leading-[1.4] text-[var(--color-text-primary)]"
                        style={{ fontSize: 'clamp(0.9375rem, 1vw, 1.25rem)' }}
                      >
                        {item.q}
                      </span>
                      <span
                        aria-hidden="true"
                        style={{
                          flexShrink: 0,
                          width: 20,
                          height: 20,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--color-trust-amber)',
                          fontSize: 18,
                          lineHeight: 1,
                          transition: 'transform 0.25s ease',
                          transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                          marginTop: 3,
                        }}
                      >
                        +
                      </span>
                    </button>

                    {/*
                      Answer is ALWAYS in the DOM (SSR-visible for crawlers).
                      CSS grid-template-rows collapses it visually when closed.
                      The inner wrapper with overflow:hidden prevents content bleed.
                    */}
                    <div
                      id={`faq-answer-${i}`}
                      role="region"
                      aria-labelledby={`faq-btn-${i}`}
                      style={{
                        display: 'grid',
                        gridTemplateRows: isOpen ? '1fr' : '0fr',
                        transition: 'grid-template-rows 0.28s ease',
                      }}
                    >
                      <div style={{ overflow: 'hidden' }}>
                        <p
                          className="font-display leading-[1.75] text-[var(--color-text-secondary)]"
                          style={{
                            fontSize: 'clamp(0.875rem, 0.95vw, 1.0625rem)',
                            paddingBottom: 'clamp(1rem, 1.5vw, 2rem)',
                            margin: 0,
                          }}
                        >
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
