'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(useGSAP, ScrollTrigger);

// ─── design constants ──────────────────────────────────────────────────────────
const AC = '#3B82F6';
const GAUGE_R = 52;
const GAUGE_CIRC = parseFloat((2 * Math.PI * GAUGE_R).toFixed(3));
const GAUGE_VAL = 8.4;

// ─── risk gauge (SVG arc) ──────────────────────────────────────────────────────
function RiskGauge({
  arcRef,
  scoreRef,
}: {
  arcRef: React.RefObject<SVGCircleElement | null>;
  scoreRef: React.RefObject<SVGTSpanElement | null>;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
      <svg
        viewBox="0 0 130 130"
        width="130"
        height="130"
        style={{ overflow: 'visible' }}
        aria-hidden
      >
        {/* glow filter */}
        <defs>
          <filter id="gauge-glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="gauge-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
        {/* track */}
        <circle
          cx="65" cy="65" r={GAUGE_R}
          fill="none"
          stroke="rgba(59,130,246,0.12)"
          strokeWidth="8"
          strokeDasharray={GAUGE_CIRC}
          strokeDashoffset="0"
          transform="rotate(-90 65 65)"
        />
        {/* animated arc */}
        <circle
          ref={arcRef}
          cx="65" cy="65" r={GAUGE_R}
          fill="none"
          stroke="url(#gauge-grad)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={GAUGE_CIRC}
          strokeDashoffset={String(GAUGE_CIRC)}
          transform="rotate(-90 65 65)"
          filter="url(#gauge-glow)"
          style={{ transition: 'none' }}
        />
        {/* center text */}
        <text
          x="65" y="60"
          textAnchor="middle"
          dominantBaseline="middle"
          fill={AC}
          fontSize="20"
          fontWeight="700"
          fontFamily="var(--font-mono, monospace)"
        >
          <tspan ref={scoreRef}>0.0</tspan>
        </text>
        <text
          x="65" y="80"
          textAnchor="middle"
          fill="rgba(255,255,255,0.35)"
          fontSize="9"
          fontFamily="var(--font-mono, monospace)"
          letterSpacing="2"
        >
          / 10
        </text>
      </svg>
      <span
        style={{
          fontFamily: 'var(--font-mono, monospace)',
          fontSize: '0.55rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.4)',
        }}
      >
        Risk score
      </span>
    </div>
  );
}

// ─── risk badge ────────────────────────────────────────────────────────────────
function RiskBadge({
  level,
  color,
  title,
  clause,
  detail,
  critical,
}: {
  level: string; color: string; title: string; clause: string; detail: string; critical?: boolean;
}) {
  return (
    <div
      className="cs-risk-badge"
      style={{
        background: `${color}08`,
        border: `1px solid ${color}28`,
        borderRadius: '0.75rem',
        padding: '1rem 1.25rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.45rem',
        position: 'relative',
        overflow: 'hidden',
        animation: critical ? 'cs-pulse-glow 3s ease-in-out infinite' : 'none',
        ['--pulse-color' as string]: color,
      }}
    >
      {/* shimmer line */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: 0, left: '-100%', right: 0, height: '1px',
          background: `linear-gradient(90deg, transparent, ${color}60, transparent)`,
          animation: 'cs-shimmer 4s ease-in-out infinite',
          animationDelay: critical ? '0s' : '1.5s',
        }}
      />
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
        <span style={{
          fontFamily: 'var(--font-mono, monospace)',
          fontSize: '0.52rem',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color,
          background: `${color}15`,
          border: `1px solid ${color}28`,
          borderRadius: '0.25rem',
          padding: '0.18rem 0.5rem',
        }}>
          {level}
        </span>
        <span style={{ fontWeight: 600, color: 'var(--color-text-primary)', fontSize: '0.9rem' }}>{title}</span>
        <span
          className="cs-risk-clause"
          style={{
            fontFamily: 'var(--font-mono, monospace)',
            fontSize: '0.58rem',
            color: 'rgba(255,255,255,0.3)',
            marginLeft: 'auto',
          }}
        >
          {clause}
        </span>
      </div>
      <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, margin: 0 }}>
        {detail}
      </p>
    </div>
  );
}

// ─── agent block ───────────────────────────────────────────────────────────────
function AgentBlock({
  num, name, time, spineRef, children,
}: {
  num: number; name: string; time: string;
  spineRef: React.RefObject<HTMLDivElement | null>;
  children: React.ReactNode;
}) {
  return (
    <div className="cs-agent-block" style={{ display: 'flex', gap: '1.25rem', marginBottom: '2.25rem' }}>
      {/* timeline column */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
        <div
          className="cs-agent-node"
          style={{
            width: '2.5rem', height: '2.5rem',
            borderRadius: '50%',
            background: 'rgba(59,130,246,0.12)',
            border: '1px solid rgba(59,130,246,0.35)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-mono, monospace)',
            fontSize: '0.8rem', fontWeight: 700, color: AC,
            flexShrink: 0,
            boxShadow: '0 0 20px rgba(59,130,246,0.15)',
          }}
        >
          {num}
        </div>
        <div
          ref={spineRef}
          className="cs-spine"
          style={{
            width: '1px', flex: 1,
            background: 'linear-gradient(to bottom, rgba(59,130,246,0.4), rgba(59,130,246,0.05))',
            marginTop: '0.5rem',
          }}
        />
      </div>
      {/* content */}
      <div style={{ flex: 1, minWidth: 0, paddingBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
          <h3 style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--color-text-primary)', margin: 0 }}>
            {name}
          </h3>
          <span style={{
            fontFamily: 'var(--font-mono, monospace)',
            fontSize: '0.52rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: AC,
            background: 'rgba(59,130,246,0.1)',
            border: '1px solid rgba(59,130,246,0.28)',
            borderRadius: '0.25rem',
            padding: '0.2rem 0.55rem',
          }}>
            {time}
          </span>
        </div>
        {/* terminal box */}
        <div style={{
          background: '#0a0a0a',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: '0.75rem',
          overflow: 'hidden',
          position: 'relative',
        }}>
          {/* terminal header */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '0.45rem',
            padding: '0.6rem 1rem',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            background: 'rgba(255,255,255,0.025)',
          }}>
            {['#EF4444', '#EAB308', '#22C55E'].map((c) => (
              <div key={c} style={{ width: 8, height: 8, borderRadius: '50%', background: c, opacity: 0.6 }} />
            ))}
            <span style={{
              marginLeft: '0.5rem',
              fontFamily: 'var(--font-mono, monospace)',
              fontSize: '0.55rem',
              letterSpacing: '0.14em',
              color: 'rgba(255,255,255,0.25)',
              textTransform: 'uppercase',
            }}>
              agent_{num}_output
            </span>
            {/* scan line */}
            <div
              aria-hidden
              style={{
                marginLeft: 'auto', height: '1px', width: '2rem',
                background: `linear-gradient(90deg, transparent, ${AC}80)`,
                animation: 'cs-scan 2.5s ease-in-out infinite',
              }}
            />
          </div>
          <div style={{ padding: '1.25rem 1.25rem' }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── main client component ─────────────────────────────────────────────────────
export default function CaseStudyDocIntelClient() {
  const rootRef = useRef<HTMLDivElement>(null);
  const gaugeArcRef = useRef<SVGCircleElement | null>(null);
  const scoreRef = useRef<SVGTSpanElement | null>(null);
  const spine1Ref = useRef<HTMLDivElement | null>(null);
  const spine2Ref = useRef<HTMLDivElement | null>(null);
  const spine3Ref = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        // ── hero entrance ──────────────────────────────────────────────────
        const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        heroTl
          .from('.cs-eyebrow', { opacity: 0, y: 16, duration: 0.55 })
          .from('.cs-word', { y: '110%', duration: 0.65, stagger: 0.018 }, '-=0.25')
          .from('.cs-oneliner', { opacity: 0, x: -24, duration: 0.6 }, '-=0.35')
          .from('.cs-stat', { opacity: 0, y: 28, scale: 0.85, stagger: 0.12, duration: 0.6 }, '-=0.3');

        // ── stat float ─────────────────────────────────────────────────────
        gsap.to('.cs-stat', {
          y: -7,
          duration: 2.4,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
          stagger: { each: 0.35 },
        });

        // ── orb ambient movement ───────────────────────────────────────────
        gsap.to('.cs-orb-1', { x: 30, y: -20, duration: 8, ease: 'sine.inOut', yoyo: true, repeat: -1 });
        gsap.to('.cs-orb-2', { x: -25, y: 30, duration: 10, ease: 'sine.inOut', yoyo: true, repeat: -1 });
        gsap.to('.cs-orb-3', { x: 20, y: 15, duration: 7, ease: 'sine.inOut', yoyo: true, repeat: -1 });

        // ── section reveals ────────────────────────────────────────────────
        ScrollTrigger.batch('.cs-section', {
          onEnter: (batch) =>
            gsap.from(batch, { opacity: 0, y: 40, duration: 0.75, ease: 'power3.out', stagger: 0.12 }),
          start: 'top 88%',
          once: true,
        });

        // ── agent block reveal ─────────────────────────────────────────────
        ScrollTrigger.batch('.cs-agent-block', {
          onEnter: (batch) =>
            gsap.from(batch, { opacity: 0, x: -36, duration: 0.65, ease: 'power3.out', stagger: 0.15 }),
          start: 'top 88%',
          once: true,
        });

        // ── spine growth ───────────────────────────────────────────────────
        [spine1Ref, spine2Ref, spine3Ref].forEach((ref) => {
          if (!ref.current) return;
          gsap.from(ref.current, {
            scaleY: 0,
            transformOrigin: 'top center',
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: { trigger: ref.current, start: 'top 85%', once: true },
          });
        });

        // ── risk score gauge ───────────────────────────────────────────────
        if (gaugeArcRef.current && scoreRef.current) {
          const targetOffset = GAUGE_CIRC * (1 - GAUGE_VAL / 10);
          const obj = { v: 0, off: GAUGE_CIRC };
          gsap.to(obj, {
            v: GAUGE_VAL,
            off: targetOffset,
            duration: 1.8,
            ease: 'power2.out',
            scrollTrigger: { trigger: gaugeArcRef.current, start: 'top 80%', once: true },
            onUpdate() {
              if (gaugeArcRef.current)
                gaugeArcRef.current.style.strokeDashoffset = String(obj.off);
              if (scoreRef.current)
                scoreRef.current.textContent = obj.v.toFixed(1);
            },
          });
        }

        // ── risk badges ────────────────────────────────────────────────────
        ScrollTrigger.batch('.cs-risk-badge', {
          onEnter: (batch) =>
            gsap.from(batch, { opacity: 0, x: -28, duration: 0.55, ease: 'power2.out', stagger: 0.1 }),
          start: 'top 88%',
          once: true,
        });

        // ── table rows ─────────────────────────────────────────────────────
        ScrollTrigger.batch('.cs-tr', {
          onEnter: (batch) =>
            gsap.from(batch, { opacity: 0, x: -18, duration: 0.45, ease: 'power2.out', stagger: 0.07 }),
          start: 'top 88%',
          once: true,
        });

        // ── GDPR block ─────────────────────────────────────────────────────
        ScrollTrigger.batch('.cs-gdpr', {
          onEnter: (batch) =>
            gsap.from(batch, { opacity: 0, scale: 0.96, duration: 0.65, ease: 'back.out(1.4)' }),
          start: 'top 88%',
          once: true,
        });

        // ── tag cloud ──────────────────────────────────────────────────────
        ScrollTrigger.batch('.cs-tag', {
          onEnter: (batch) =>
            gsap.from(batch, { opacity: 0, y: 12, scale: 0.9, duration: 0.4, ease: 'power2.out', stagger: 0.04 }),
          start: 'top 88%',
          once: true,
        });

        // ── FAQ items ──────────────────────────────────────────────────────
        ScrollTrigger.batch('.cs-faq', {
          onEnter: (batch) =>
            gsap.from(batch, { opacity: 0, y: 22, duration: 0.55, ease: 'power2.out', stagger: 0.1 }),
          start: 'top 88%',
          once: true,
        });

        // ── CTA ────────────────────────────────────────────────────────────
        ScrollTrigger.batch('.cs-cta', {
          onEnter: (batch) =>
            gsap.from(batch, { opacity: 0, y: 20, duration: 0.55, ease: 'power2.out', stagger: 0.12 }),
          start: 'top 92%',
          once: true,
        });
      });
    },
    { scope: rootRef },
  );

  // ─── shared style helpers ──────────────────────────────────────────────────
  const sectionBox: React.CSSProperties = {
    background: 'rgba(255,255,255,0.02)',
    border: '1px solid rgba(255,255,255,0.07)',
    borderRadius: '1rem',
    padding: 'clamp(1.5rem, 4vw, 2.25rem)',
    marginBottom: 'clamp(2rem, 4vw, 3rem)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
  };

  const mono: React.CSSProperties = {
    fontFamily: 'var(--font-mono, monospace)',
    fontSize: '0.565rem',
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.35)',
  };

  const h2: React.CSSProperties = {
    fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
    fontWeight: 700,
    color: 'var(--color-text-primary)',
    marginBottom: '1.25rem',
    letterSpacing: '-0.015em',
  };

  const body: React.CSSProperties = {
    fontSize: 'clamp(0.875rem, 1.6vw, 0.9375rem)',
    color: 'var(--color-text-secondary)',
    lineHeight: 1.8,
  };

  return (
    <div ref={rootRef}>
      {/* ── keyframes ──────────────────────────────────────────────────────── */}
      <style>{`
        @keyframes cs-scan {
          0%   { transform: translateX(-300%); opacity: 0; }
          20%  { opacity: 1; }
          80%  { opacity: 1; }
          100% { transform: translateX(600%); opacity: 0; }
        }
        @keyframes cs-shimmer {
          0%   { left: -100%; }
          100% { left: 200%; }
        }
        @keyframes cs-pulse-glow {
          0%, 100% { box-shadow: 0 0 0px var(--pulse-color, #EF4444); }
          50%       { box-shadow: 0 0 18px var(--pulse-color, #EF4444); }
        }
        @keyframes cs-orb-spin {
          from { transform: rotate(0deg) translateX(60px) rotate(0deg); }
          to   { transform: rotate(360deg) translateX(60px) rotate(-360deg); }
        }
        @keyframes cs-cursor-blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .cs-word { transform: none !important; opacity: 1 !important; }
          .cs-stat  { transform: none !important; opacity: 1 !important; }
        }
        @media (max-width: 480px) {
          .cs-agent-block { gap: 0.75rem !important; margin-bottom: 1.75rem !important; }
          .cs-agent-node  { width: 1.875rem !important; height: 1.875rem !important; font-size: 0.7rem !important; }
          .cs-risk-clause { margin-left: 0 !important; }
          .cs-stat-grid   { gap: 0.625rem !important; }
          .cs-stat        { min-width: calc(50% - 0.35rem) !important; padding: 0.85rem 1rem !important; }
        }
        @media (max-width: 360px) {
          .cs-stat { min-width: 100% !important; }
        }
      `}</style>

      {/* ── main ───────────────────────────────────────────────────────────── */}
      <main
        style={{
          maxWidth: '52rem',
          margin: '0 auto',
          padding: 'clamp(4rem, 8vw, 7rem) clamp(1.25rem, 4vw, 2rem) clamp(3rem, 6vw, 5rem)',
          position: 'relative',
        }}
      >
        {/* ── ambient background ──────────────────────────────────────────── */}
        <div aria-hidden style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
          <div className="cs-orb-1" style={{
            position: 'absolute', top: '10%', right: '8%',
            width: 480, height: 480,
            background: 'radial-gradient(circle, rgba(59,130,246,0.09) 0%, transparent 70%)',
            borderRadius: '50%', filter: 'blur(40px)',
          }} />
          <div className="cs-orb-2" style={{
            position: 'absolute', top: '40%', left: '-5%',
            width: 360, height: 360,
            background: 'radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)',
            borderRadius: '50%', filter: 'blur(50px)',
          }} />
          <div className="cs-orb-3" style={{
            position: 'absolute', bottom: '20%', right: '15%',
            width: 300, height: 300,
            background: 'radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)',
            borderRadius: '50%', filter: 'blur(40px)',
          }} />
        </div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* ── eyebrow ────────────────────────────────────────────────────── */}
          <p
            className="cs-eyebrow font-mono"
            style={{
              ...mono,
              marginBottom: '1.5rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <span style={{ color: AC }}>Document intelligence</span>
            <span style={{ color: 'rgba(255,255,255,0.18)' }}>·</span>
            <span>Case study</span>
            <span
              aria-hidden
              style={{
                display: 'inline-block',
                width: '2px', height: '0.7em',
                background: AC,
                borderRadius: '1px',
                animation: 'cs-cursor-blink 1.1s step-end infinite',
              }}
            />
          </p>

          {/* ── headline ───────────────────────────────────────────────────── */}
          <h1
            className="font-serif"
            style={{
              fontSize: 'clamp(1.7rem, 4vw, 2.75rem)',
              fontWeight: 700,
              lineHeight: 1.2,
              color: 'var(--color-text-primary)',
              marginBottom: '1.5rem',
              letterSpacing: '-0.02em',
            }}
          >
            {`How an AI document intelligence system flagged GDPR violations and uncapped liability in 73 seconds — before a $180K vendor contract was signed`
              .split(' ')
              .map((w, i) => (
                <span
                  key={i}
                  style={{
                    display: 'inline-block',
                    overflow: 'hidden',
                    verticalAlign: 'bottom',
                    marginRight: '0.28em',
                  }}
                >
                  <span className="cs-word" style={{ display: 'inline-block' }}>{w}</span>
                </span>
              ))}
          </h1>

          {/* ── one-liner ──────────────────────────────────────────────────── */}
          <p
            className="cs-oneliner"
            style={{
              ...body,
              fontSize: 'clamp(1rem, 1.8vw, 1.06rem)',
              marginBottom: '2.25rem',
              borderLeft: `3px solid ${AC}`,
              paddingLeft: '1.1rem',
              background: 'rgba(59,130,246,0.04)',
              borderRadius: '0 0.5rem 0.5rem 0',
              padding: '0.85rem 1.1rem',
            }}
          >
            A multi-agent AI contract review system analyzed a 12-page SaaS vendor agreement in 73 seconds, identified 5 risk flags including 2 GDPR violations, and prevented a potentially career-ending signature on a $180,000 annual contract.
          </p>

          {/* ── stat pills ─────────────────────────────────────────────────── */}
          <div className="cs-stat-grid" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
            {[
              { v: '73s', l: 'Full risk assessment' },
              { v: '5', l: 'Issues identified' },
              { v: '8.4/10', l: 'Risk score flagged' },
            ].map(({ v, l }) => (
              <div
                key={v}
                className="cs-stat"
                style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.35rem',
                  padding: '1.1rem 1.6rem',
                  background: 'rgba(59,130,246,0.08)',
                  border: '1px solid rgba(59,130,246,0.25)',
                  borderRadius: '0.85rem',
                  flex: '1 1 auto', minWidth: '8rem',
                  boxShadow: '0 0 28px rgba(59,130,246,0.08)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <span style={{
                  fontFamily: 'var(--font-mono, monospace)',
                  fontSize: 'clamp(1.4rem, 3vw, 1.9rem)',
                  fontWeight: 700,
                  color: AC,
                  lineHeight: 1,
                }}>
                  {v}
                </span>
                <span style={{ ...mono }}>{l}</span>
              </div>
            ))}
          </div>

          {/* ────────────────────────────────────────────────────────────────
              SCENARIO
          ──────────────────────────────────────────────────────────────── */}
          <section aria-label="The scenario" className="cs-section" style={sectionBox}>
            <p className="font-mono" style={{ ...mono, marginBottom: '0.85rem' }}>The scenario</p>
            <h2 style={h2}>A 48-hour deadline. A 12-page contract. A $180K decision.</h2>
            <p style={{ ...body, margin: 0 }}>
              A startup&apos;s Head of Legal received a 12-page SaaS vendor agreement from a cloud infrastructure provider. The board wanted to sign within 48 hours. Instead of spending 3 hours on manual contract review, she uploaded it to an AI-powered contract analysis system built on a multi-agent LangGraph architecture — with full audit traceability via LangSmith on every agent decision. The goal: automate legal document review without sacrificing compliance accuracy.
            </p>
          </section>

          {/* ────────────────────────────────────────────────────────────────
              AGENT FINDINGS
          ──────────────────────────────────────────────────────────────── */}
          <section aria-label="Agent findings" style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
            <h2 style={{ ...h2, fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', marginBottom: '2rem' }}>
              What the three agents found
            </h2>

            {/* Agent 1 */}
            <AgentBlock num={1} name="Entity & clause extraction agent" time="18 seconds" spineRef={spine1Ref}>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '16rem' }}>
                  <tbody>
                    {[
                      ['Parties', 'Cloud infrastructure vendor · SaaS startup (customer)'],
                      ['Effective date', '2026-05-01'],
                      ['Governing law', 'Delaware'],
                      ['Contract value', '$180,000 / year'],
                      ['Notice period', '90 days'],
                      ['Auto-renewal', 'Yes — annual'],
                    ].map(([f, v]) => (
                      <tr key={f} className="cs-tr">
                        <td style={{
                          padding: '0.5rem 0.85rem',
                          fontFamily: 'var(--font-mono, monospace)',
                          fontSize: '0.58rem',
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          color: 'rgba(255,255,255,0.35)',
                          borderBottom: '1px solid rgba(255,255,255,0.05)',
                          whiteSpace: 'nowrap',
                        }}>{f}</td>
                        <td style={{
                          padding: '0.5rem 0.85rem',
                          fontSize: '0.875rem',
                          color: 'rgba(255,255,255,0.75)',
                          borderBottom: '1px solid rgba(255,255,255,0.05)',
                        }}>{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p style={{ ...body, fontSize: '0.8rem', margin: '0.85rem 0.85rem 0', color: 'rgba(255,255,255,0.4)' }}>
                Key clauses flagged: Indemnification · Data processing · Limitation of liability · IP ownership
              </p>
            </AgentBlock>

            {/* Agent 2 */}
            <AgentBlock num={2} name="Compliance & risk analysis agent" time="24 seconds" spineRef={spine2Ref}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.25rem', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
                <RiskGauge arcRef={gaugeArcRef} scoreRef={scoreRef} />
                <div>
                  <p style={{ ...body, fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', marginBottom: '0.35rem' }}>
                    5 issues identified across
                  </p>
                  <p style={{ ...body, fontSize: '0.875rem', color: 'var(--color-text-secondary)', margin: 0 }}>
                    Indemnification · GDPR · Pricing · IP · Renewal
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <RiskBadge level="Critical" color="#EF4444" title="Uncapped indemnification" clause="§12.3" critical
                  detail="Customer required to indemnify vendor for all third-party claims with no dollar ceiling. Standard enterprise cap is 2× contract value." />
                <RiskBadge level="Critical" color="#EF4444" title="Missing data processing agreement" clause="GDPR Art. 28" critical
                  detail="Vendor processes EU customer data but no DPA is attached — violates GDPR Article 28 and CCPA data processing requirements." />
                <RiskBadge level="High" color="#F97316" title="Unilateral pricing escalation" clause="§7.1"
                  detail="Vendor can raise fees with 30 days' notice and no cap. Industry standard limits annual increases to ≤10%." />
                <RiskBadge level="Medium" color="#EAB308" title="IP ownership ambiguity" clause="§15"
                  detail="Output data ownership assigned to vendor if used for model training. Not flagged in any prior manual contract review of the same document." />
                <RiskBadge level="Low" color="#3B82F6" title="Auto-renewal notice window" clause="Renewal"
                  detail="90-day cancellation window is unusually long. Typical SaaS vendor agreements use 30–60 days." />
              </div>
            </AgentBlock>

            {/* Agent 3 */}
            <AgentBlock num={3} name="Executive summary agent" time="31 seconds" spineRef={spine3Ref}>
              <div style={{
                background: 'rgba(239,68,68,0.07)',
                border: '1px solid rgba(239,68,68,0.22)',
                borderRadius: '0.65rem',
                padding: '1rem 1.15rem',
              }}>
                <p style={{
                  fontFamily: 'var(--font-mono, monospace)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#EF4444',
                  margin: '0 0 0.65rem',
                  fontWeight: 700,
                }}>
                  ✕ Do not sign — return for redlines
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  {[
                    { label: 'Blockers (2)', color: '#EF4444', text: '§12.3 uncapped indemnification · Missing DPA' },
                    { label: 'Redlines required (1)', color: '#F97316', text: '§7.1 pricing escalator — request ≤10% cap' },
                    { label: 'Monitor (2)', color: '#EAB308', text: '§15 IP language · 90-day renewal window' },
                  ].map(({ label, color, text }) => (
                    <p key={label} style={{ ...body, fontSize: '0.85rem', margin: 0 }}>
                      <strong style={{ color }}>{label}:</strong>{' '}
                      <span style={{ color: 'rgba(255,255,255,0.6)' }}>{text}</span>
                    </p>
                  ))}
                </div>
              </div>
            </AgentBlock>
          </section>

          {/* ────────────────────────────────────────────────────────────────
              BEFORE VS AFTER
          ──────────────────────────────────────────────────────────────── */}
          <section aria-label="Before vs after" className="cs-section" style={sectionBox}>
            <p className="font-mono" style={{ ...mono, marginBottom: '0.85rem' }}>Before vs. after</p>
            <h2 style={h2}>Manual review vs. AI contract review</h2>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '28rem' }}>
                <thead>
                  <tr className="cs-tr">
                    {['Metric', 'Manual review', 'AI contract review'].map((h, i) => (
                      <th key={h} style={{
                        padding: '0.65rem 1rem',
                        ...mono,
                        textAlign: 'left',
                        borderBottom: '1px solid rgba(255,255,255,0.08)',
                        color: i === 2 ? AC : 'rgba(255,255,255,0.35)',
                      }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Time to risk assessment', '~3 hours', '73 seconds'],
                    ['Issues identified', '2 (surface-level only)', '5 (incl. hidden IP clause)'],
                    ['Action taken', 'Would have signed as-is', 'Sent redlines — vendor agreed to DPA + indemnification cap'],
                    ['Audit trail', 'None', 'Full LangSmith trace per agent decision'],
                  ].map(([m, a, b]) => (
                    <tr key={m} className="cs-tr">
                      <td style={{
                        padding: '0.75rem 1rem',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        color: 'var(--color-text-primary)',
                        borderBottom: '1px solid rgba(255,255,255,0.05)',
                      }}>{m}</td>
                      <td style={{
                        padding: '0.75rem 1rem',
                        fontSize: '0.875rem',
                        color: 'var(--color-text-secondary)',
                        borderBottom: '1px solid rgba(255,255,255,0.05)',
                      }}>{a}</td>
                      <td style={{
                        padding: '0.75rem 1rem',
                        fontSize: '0.875rem',
                        color: AC,
                        borderBottom: '1px solid rgba(255,255,255,0.05)',
                      }}>{b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ────────────────────────────────────────────────────────────────
              GDPR CONSEQUENCE
          ──────────────────────────────────────────────────────────────── */}
          <section
            aria-label="GDPR consequence"
            className="cs-gdpr"
            style={{
              background: 'rgba(239,68,68,0.04)',
              border: '1px solid rgba(239,68,68,0.2)',
              borderRadius: '1rem',
              padding: 'clamp(1.5rem, 4vw, 2.25rem)',
              marginBottom: 'clamp(2rem, 4vw, 3rem)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* top shimmer */}
            <div aria-hidden style={{
              position: 'absolute', top: 0, left: '-100%', width: '100%', height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(239,68,68,0.5), transparent)',
              animation: 'cs-shimmer 5s ease-in-out infinite',
            }} />
            <p className="font-mono" style={{ ...mono, color: 'rgba(239,68,68,0.7)', marginBottom: '0.85rem' }}>
              The GDPR consequence
            </p>
            <p style={{ ...body, margin: 0 }}>
              The missing DPA finding alone would have exposed TechStartup Inc. to GDPR fines of up to{' '}
              <strong style={{ color: 'var(--color-text-primary)' }}>€20M or 4% of global annual revenue</strong> — caught by the AI compliance agent in 24 seconds. The IP ownership clause in §15 was not flagged in any prior manual review of the same document.
            </p>
          </section>

          {/* ────────────────────────────────────────────────────────────────
              COMPLIANCE FRAMEWORKS
          ──────────────────────────────────────────────────────────────── */}
          <section aria-label="Compliance frameworks" className="cs-section" style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
            <p className="font-mono" style={{ ...mono, marginBottom: '1rem' }}>Compliance frameworks covered</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {[
                'GDPR Article 28',
                'CCPA data processing',
                'EU AI Act',
                'Indemnification cap standards',
                'SaaS pricing escalator benchmarks',
                'IP ownership standards',
              ].map((f) => (
                <span
                  key={f}
                  className="cs-tag font-mono"
                  style={{
                    fontSize: '0.565rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.4)',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '0.3rem',
                    padding: '0.3rem 0.7rem',
                  }}
                >
                  {f}
                </span>
              ))}
            </div>
          </section>

          {/* ────────────────────────────────────────────────────────────────
              WHY THIS MATTERS
          ──────────────────────────────────────────────────────────────── */}
          <section aria-label="Why this matters" className="cs-section" style={sectionBox}>
            <p className="font-mono" style={{ ...mono, marginBottom: '0.85rem' }}>Why this matters</p>
            <h2 style={h2}>Infrastructure, not a chatbot</h2>
            <p style={{ ...body, marginBottom: '1rem' }}>
              Purpose-built multi-agent document intelligence systems decompose complex contract analysis into specialized tasks — entity extraction, compliance benchmarking, executive summarization — each optimized independently rather than handled by a single generalist prompt.
            </p>
            <p style={{ ...body, marginBottom: '1rem' }}>
              The result is not a chatbot answering questions about a document. It is infrastructure that catches what humans miss — with every agent decision logged, timestamped, and replayable. Your legal team gets a full audit trail. Your compliance team gets clause-level evidence. Your board gets a decision they can sign off on.
            </p>
            <p style={{ ...body, margin: 0 }}>
              For legal teams, procurement departments, and compliance officers evaluating AI-powered contract review tools, this architecture demonstrates what is possible when automated legal document review is treated as an infrastructure problem — not a chatbot feature. This is the difference between an AI tool and an AI system.
            </p>
          </section>

          {/* ────────────────────────────────────────────────────────────────
              FAQ
          ──────────────────────────────────────────────────────────────── */}
          <section aria-label="Frequently asked questions">
            <h2 style={{ ...h2, fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', marginBottom: '1.75rem' }}>
              Frequently asked questions
            </h2>
            {[
              {
                q: 'How long does AI contract review take compared to manual legal review?',
                a: 'The multi-agent system analyzed a 12-page SaaS vendor agreement in 73 seconds. Manual legal review of the same document typically takes 2–3 hours. For procurement teams handling multiple vendor agreements simultaneously, this represents a near-complete elimination of the manual contract review bottleneck.',
              },
              {
                q: 'What compliance issues can an AI contract review system detect?',
                a: 'The system flagged: a missing GDPR Article 28 Data Processing Agreement, uncapped indemnification clauses, unilateral pricing escalation with no cap, IP ownership ambiguity where output data is assigned to the vendor for model training, and a non-standard 90-day auto-renewal window. These are issues commonly missed in standard manual review — particularly the IP clause, which was not flagged in any prior review of the same document.',
              },
              {
                q: 'Is AI-powered contract analysis suitable for enterprise procurement and legal teams?',
                a: 'Yes. The system produces a structured risk score with clause-level references (§12.3, §7.1, §15), a severity-ranked finding list, a structured executive recommendation, and a full LangSmith audit trail covering every agent decision — meeting enterprise compliance, documentation, and legal defensibility requirements.',
              },
              {
                q: 'How is this different from using a generic AI chatbot to review contracts?',
                a: 'A generic AI chatbot processes the entire document in a single prompt with no specialization, no structured output, and no audit trail. This system uses three independent specialized agents running sequentially so that downstream agents build on upstream findings. Every decision is logged and replayable. The output is a structured compliance report — not a paragraph of suggestions.',
              },
            ].map(({ q, a }) => (
              <div
                key={q}
                className="cs-faq"
                style={{
                  borderBottom: '1px solid rgba(255,255,255,0.07)',
                  paddingBottom: '1.5rem',
                  marginBottom: '1.5rem',
                }}
              >
                <p style={{
                  fontWeight: 600,
                  color: 'var(--color-text-primary)',
                  marginBottom: '0.6rem',
                  fontSize: 'clamp(0.875rem, 1.6vw, 0.9375rem)',
                  lineHeight: 1.5,
                }}>
                  {q}
                </p>
                <p style={{ ...body, margin: 0 }}>{a}</p>
              </div>
            ))}
          </section>

          {/* ────────────────────────────────────────────────────────────────
              CTA
          ──────────────────────────────────────────────────────────────── */}
          <div style={{
            display: 'flex', gap: '1rem', flexWrap: 'wrap',
            marginTop: 'clamp(2.5rem, 5vw, 4rem)',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255,255,255,0.07)',
            alignItems: 'center',
          }}>
            <Link
              href="/contact"
              className="cs-cta navCta"
              style={{ padding: '0.65rem 1.6rem' }}
              aria-label="Contact Invisigent"
            >
              Let&apos;s Talk
            </Link>
            <Link
              href="/case-studies"
              className="cs-cta"
              style={{
                fontSize: '0.875rem',
                color: 'rgba(255,255,255,0.4)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                textDecoration: 'none',
                transition: 'color 160ms ease',
              }}
            >
              ← All case studies
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
