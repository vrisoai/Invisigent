'use client';

/**
 * GlobalContext — GSAP
 *
 * Dot-grid: background-position drifts slowly (like a star-field moving through space).
 * Pulse ring: a radial circle pulses outward from centre on enter, repeating every 4 s.
 * Content: heading from left, body from right — scroll-triggered.
 */

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionLabel } from './shared/SectionLabel';

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface GlobalContextProps {
  reducedMotion?: boolean;
}

export function GlobalContext({ reducedMotion = false }: GlobalContextProps) {
  const sectionRef  = useRef<HTMLElement>(null);
  const gridRef     = useRef<HTMLDivElement>(null);
  const pulseRef    = useRef<HTMLDivElement>(null);
  const leftRef     = useRef<HTMLDivElement>(null);
  const rightRef    = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (reducedMotion) {
      gsap.set([leftRef.current, rightRef.current], { opacity: 1, x: 0 });
      return;
    }

    // ── dot-grid slow drift ───────────────────────────────────────────────
    if (gridRef.current) {
      gsap.to(gridRef.current, {
        backgroundPositionX: '+=48px',
        backgroundPositionY: '+=48px',
        duration: 22,
        ease: 'none',
        repeat: -1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          toggleActions: 'play pause resume pause',
        },
      });
    }

    // ── radial pulse wave on section enter ────────────────────────────────
    if (pulseRef.current) {
      const pulse = () => {
        gsap.set(pulseRef.current, { scale: 0.2, opacity: 0.5 });
        gsap.to(pulseRef.current, { scale: 3.5, opacity: 0, duration: 2.8, ease: 'power1.out' });
      };

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 70%',
        once: true,
        onEnter: () => {
          pulse();
          // repeat every 4.5 s
          const id = setInterval(pulse, 4500);
          // clean up when section leaves viewport
          ScrollTrigger.create({
            trigger: sectionRef.current,
            start: 'bottom top',
            once: true,
            onEnter: () => clearInterval(id),
          });
        },
      });
    }

    // ── heading slides from left — GSAP exclusively owns opacity/x ────────
    gsap.set(leftRef.current, { opacity: 0, x: -32 });
    gsap.to(leftRef.current, {
      opacity: 1, x: 0, duration: 0.75, ease: 'expo.out',
      scrollTrigger: { trigger: leftRef.current, start: 'top 80%', once: true },
    });

    // ── body slides from right ────────────────────────────────────────────
    gsap.set(rightRef.current, { opacity: 0, x: 32 });
    gsap.to(rightRef.current, {
      opacity: 1, x: 0, duration: 0.75, ease: 'expo.out',
      scrollTrigger: { trigger: rightRef.current, start: 'top 80%', once: true },
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="about-global relative overflow-x-hidden"
      style={{ background: 'var(--color-bg-primary)' }}
      aria-labelledby="about-global-heading"
    >
      {/* Animated dot-grid */}
      <div
        ref={gridRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(251,191,36,0.15) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Radial pulse ring — centred in the section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
      >
        <div
          ref={pulseRef}
          style={{
            width: 120,
            height: 120,
            borderRadius: '50%',
            border: '1.5px solid rgba(251,191,36,0.35)',
            opacity: 0,
          }}
        />
      </div>

      <div className="section-wrapper relative">
        <div className="section-inner-max section-inner">
          <div className="grid grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center 2xl:gap-24 min-[1920px]:gap-32">

            <div ref={leftRef}>
              <SectionLabel text="[ GLOBAL PERSPECTIVE ]" reducedMotion={reducedMotion} />
              <h2
                id="about-global-heading"
                className="about-heading text-section-h font-serif font-medium leading-tight text-[var(--color-text-primary)]"
              >
                Built for Global Organizations
              </h2>
            </div>

            <div ref={rightRef}>
              <p className="text-body font-display leading-[1.8] text-[var(--color-text-secondary)]">
                Although founded in Jaipur, Invisigent works with organizations building AI systems across
                global markets. Our focus is helping companies design AI infrastructure that integrates
                with modern technology stacks and scales across teams, regions, and operational
                environments without performance or compliance constraints.
              </p>
              <p className="text-body font-display leading-[1.8] text-[var(--color-text-secondary)]" style={{ marginTop: '1em' }}>
                All systems are designed to meet applicable compliance requirements for the jurisdictions
                they operate in — including GDPR for EU deployments, DPDP Act for Indian operations,
                and EU AI Act frameworks for organizations subject to that regulation.
              </p>
              <p
                className="about-description flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[var(--color-text-micro)] text-label sm:text-xs"
                style={{ letterSpacing: '0.08em' }}
              >
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-trust-amber)]"
                  style={{ animation: reducedMotion ? 'none' : 'status-pulse 2s ease-in-out infinite' }}
                  aria-hidden="true"
                />
                <span>Serving global enterprise clients · GDPR · DPDP Act · EU AI Act</span>
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
