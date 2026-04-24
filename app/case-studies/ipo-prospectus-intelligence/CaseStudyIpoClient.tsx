'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const AC = '#3B82F6';

export default function CaseStudyIpoClient() {
  const rootRef = useRef<HTMLDivElement>(null);
  const spine1Ref = useRef<HTMLDivElement | null>(null);
  const spine2Ref = useRef<HTMLDivElement | null>(null);
  const spine3Ref = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        // ── hero entrance ────────────────────────────────────────────────
        const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
        heroTl
          .from('.cs-eyebrow',  { opacity: 0, y: 16, duration: 0.55 })
          .from('.cs-word',     { y: '110%', duration: 0.65, stagger: 0.018 }, '-=0.25')
          .from('.cs-oneliner', { opacity: 0, x: -24, duration: 0.6 }, '-=0.35')
          .from('.cs-stat',     { opacity: 0, y: 28, scale: 0.85, stagger: 0.1, duration: 0.6 }, '-=0.3');

        // ── stat float ───────────────────────────────────────────────────
        gsap.to('.cs-stat', {
          y: -7, duration: 2.4, ease: 'sine.inOut', yoyo: true, repeat: -1,
          stagger: { each: 0.35 },
        });

        // ── ambient orbs ─────────────────────────────────────────────────
        gsap.to('.cs-orb-1', { x: 30,  y: -20, duration: 8,  ease: 'sine.inOut', yoyo: true, repeat: -1 });
        gsap.to('.cs-orb-2', { x: -25, y: 30,  duration: 10, ease: 'sine.inOut', yoyo: true, repeat: -1 });
        gsap.to('.cs-orb-3', { x: 20,  y: 15,  duration: 7,  ease: 'sine.inOut', yoyo: true, repeat: -1 });

        // ── section reveals ──────────────────────────────────────────────
        ScrollTrigger.batch('.cs-section', {
          onEnter: (b) => gsap.from(b, { opacity: 0, y: 40, duration: 0.75, ease: 'power3.out', stagger: 0.12 }),
          start: 'top 88%', once: true,
        });

        // ── problem cards ────────────────────────────────────────────────
        ScrollTrigger.batch('.cs-problem-card', {
          onEnter: (b) => gsap.from(b, { opacity: 0, y: 30, scale: 0.95, duration: 0.65, ease: 'back.out(1.4)', stagger: 0.12 }),
          start: 'top 88%', once: true,
        });

        // ── feature items ────────────────────────────────────────────────
        ScrollTrigger.batch('.cs-feature-item', {
          onEnter: (b) => gsap.from(b, { opacity: 0, x: -20, duration: 0.5, ease: 'power2.out', stagger: 0.08 }),
          start: 'top 88%', once: true,
        });

        // ── table rows ───────────────────────────────────────────────────
        ScrollTrigger.batch('.cs-tr', {
          onEnter: (b) => gsap.from(b, { opacity: 0, x: -18, duration: 0.45, ease: 'power2.out', stagger: 0.07 }),
          start: 'top 88%', once: true,
        });

        // ── testimonial ──────────────────────────────────────────────────
        ScrollTrigger.batch('.cs-quote', {
          onEnter: (b) => gsap.from(b, { opacity: 0, y: 24, duration: 0.65, ease: 'power3.out' }),
          start: 'top 88%', once: true,
        });

        // ── regulatory tags ──────────────────────────────────────────────
        ScrollTrigger.batch('.cs-reg-tag', {
          onEnter: (b) => gsap.from(b, { opacity: 0, scale: 0.85, duration: 0.4, ease: 'back.out(1.4)', stagger: 0.06 }),
          start: 'top 90%', once: true,
        });

        // ── faq items ────────────────────────────────────────────────────
        ScrollTrigger.batch('.cs-faq', {
          onEnter: (b) => gsap.from(b, { opacity: 0, y: 20, duration: 0.5, ease: 'power2.out', stagger: 0.1 }),
          start: 'top 88%', once: true,
        });

        // ── why-matters spine growth ─────────────────────────────────────
        [spine1Ref, spine2Ref, spine3Ref].forEach((ref) => {
          if (!ref.current) return;
          gsap.from(ref.current, {
            scaleY: 0, transformOrigin: 'top center', duration: 1, ease: 'power2.out',
            scrollTrigger: { trigger: ref.current, start: 'top 85%', once: true },
          });
        });

        // ── CTA ──────────────────────────────────────────────────────────
        ScrollTrigger.batch('.cs-cta', {
          onEnter: (b) => gsap.from(b, { opacity: 0, y: 20, duration: 0.55, ease: 'power2.out', stagger: 0.12 }),
          start: 'top 92%', once: true,
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

  const sectionLabel = (n: string, label: string) => (
    <p className="font-mono" style={{ ...mono, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
      <span style={{ color: AC }}>{n}</span>
      <span style={{ color: 'rgba(255,255,255,0.15)' }}>—</span>
      <span>{label}</span>
    </p>
  );

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
        @keyframes cs-cursor-blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .cs-word { transform: none !important; opacity: 1 !important; }
          .cs-stat  { transform: none !important; opacity: 1 !important; }
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

          {/* ── eyebrow ──────────────────────────────────────────────────── */}
          <p
            className="cs-eyebrow font-mono"
            style={{ ...mono, marginBottom: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}
          >
            <span style={{ color: AC }}>AI document intelligence</span>
            <span style={{ color: 'rgba(255,255,255,0.18)' }}>·</span>
            <span>Finance &amp; capital markets</span>
            <span style={{ color: 'rgba(255,255,255,0.18)' }}>·</span>
            <span>Case study</span>
            <span
              aria-hidden
              style={{
                display: 'inline-block', width: '2px', height: '0.7em',
                background: AC, borderRadius: '1px',
                animation: 'cs-cursor-blink 1.1s step-end infinite',
              }}
            />
          </p>

          {/* ── headline ─────────────────────────────────────────────────── */}
          <h1
            className="font-serif"
            style={{
              fontSize: 'clamp(1.7rem, 4vw, 2.75rem)',
              fontWeight: 700, lineHeight: 1.2,
              color: 'var(--color-text-primary)',
              marginBottom: '1.5rem',
              letterSpacing: '-0.02em',
            }}
          >
            {`How an AI-powered RHP/DRHP platform cut IPO document review time by 70% — and surfaced material changes manual teams missed`
              .split(' ')
              .map((w, i) => (
                <span key={i} style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom', marginRight: '0.28em' }}>
                  <span className="cs-word" style={{ display: 'inline-block' }}>{w}</span>
                </span>
              ))}
          </h1>

          {/* ── in one sentence ──────────────────────────────────────────── */}
          <div
            className="cs-oneliner"
            style={{
              marginBottom: '1.5rem',
              borderLeft: `3px solid ${AC}`,
              background: 'rgba(59,130,246,0.04)',
              borderRadius: '0 0.5rem 0.5rem 0',
              padding: '0.85rem 1.1rem',
            }}
          >
            <p className="font-mono" style={{ ...mono, marginBottom: '0.5rem', color: AC }}>In one sentence</p>
            <p style={{ ...body, fontSize: 'clamp(0.9rem, 1.7vw, 1rem)', margin: 0 }}>
              An AI document intelligence platform replaced manual IPO prospectus review with automated RHP/DRHP summarization, dual-layer change detection, and interactive Q&amp;A — delivering board-ready reports in under 10 minutes for analysis that previously took days.
            </p>
          </div>

          {/* ── intro paragraph ──────────────────────────────────────────── */}
          <p style={{ ...body, marginBottom: '2.25rem' }}>
            For analysts, legal teams, and investors, reviewing a 300-page IPO prospectus is a days-long process prone to human error. This intelligent document platform replaced manual DRHP/RHP review with AI-driven summarization, change detection, and interactive Q&amp;A — delivering board-ready insights in minutes.
          </p>

          {/* ── stats ────────────────────────────────────────────────────── */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
            {[
              { v: '70%',  l: 'Reduction in manual review effort' },
              { v: '90%',  l: 'Accuracy detecting material changes' },
              { v: '50%',  l: 'Faster analyst & legal review cycles' },
              { v: '<10m', l: 'DRHP vs RHP comparison report' },
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
                  fontWeight: 700, color: AC, lineHeight: 1,
                }}>{v}</span>
                <span style={{ ...mono, textAlign: 'center' }}>{l}</span>
              </div>
            ))}
          </div>

          {/* ────────────────────────────────────────────────────────────────
              01 — THE PROBLEM
          ──────────────────────────────────────────────────────────────── */}
          <section aria-label="The problem" style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
            {sectionLabel('01', 'The problem')}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 15rem), 1fr))',
              gap: '1rem',
            }}>
              {[
                {
                  title: 'Volume overload',
                  detail: 'Analysts spent days manually reading 300+ page prospectuses, with no intelligent layer to surface what mattered most to legal and investment teams.',
                },
                {
                  title: 'Change tracking blind spots',
                  detail: 'Tracking subtle but material differences between DRHP and final RHP filings was error-prone and time-consuming — a single missed clause carried serious regulatory risk.',
                },
                {
                  title: 'Static, outdated summaries',
                  detail: "Existing summaries went stale fast and couldn't answer follow-up questions from legal or investment teams — forcing repeated manual reviews of the same document.",
                },
                {
                  title: 'Boardroom readiness lag',
                  detail: 'Producing structured, shareable reports for board or investor review required full team effort across multiple days — long after decisions needed to be made.',
                },
              ].map(({ title, detail }, idx) => (
                <div
                  key={title}
                  className="cs-problem-card"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '0.85rem',
                    padding: '1.35rem',
                    position: 'relative', overflow: 'hidden',
                  }}
                >
                  <div aria-hidden style={{
                    position: 'absolute', top: 0, left: '-100%', width: '100%', height: '1px',
                    background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.4), transparent)',
                    animation: `cs-shimmer ${6 + idx}s ease-in-out infinite`,
                  }} />
                  <p style={{
                    fontFamily: 'var(--font-mono, monospace)',
                    fontSize: '0.5rem', letterSpacing: '0.18em', textTransform: 'uppercase',
                    color: AC, marginBottom: '0.6rem',
                  }}>0{idx + 1}</p>
                  <p style={{ fontWeight: 600, color: 'var(--color-text-primary)', fontSize: '0.9375rem', marginBottom: '0.5rem' }}>{title}</p>
                  <p style={{ ...body, fontSize: '0.85rem', margin: 0 }}>{detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ────────────────────────────────────────────────────────────────
              02 — WHAT THE PLATFORM DOES
          ──────────────────────────────────────────────────────────────── */}
          <section aria-label="What the platform does" className="cs-section" style={sectionBox}>
            {sectionLabel('02', 'What the platform does')}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 22rem), 1fr))',
              gap: '0.65rem',
            }}>
              {[
                ['One-click document ingestion', 'RHP/DRHP documents uploaded and processed automatically — structured, chunked, and indexed for downstream agents within seconds.'],
                ['AI summarization tuned for capital markets', 'Structured summaries optimized for financial and legal language — risk factors, financial highlights, key disclosures — not generic document abstracts.'],
                ['Interactive Q&A with grounded answers', 'Plain-language queries answered with direct document citations — analysts ask follow-up questions without returning to the source document.'],
                ['Dual-layer change detection engine', 'Text-level and numerical diff between draft DRHP and final RHP — flags restated figures, modified clauses, and new disclosures missed in manual review.'],
                ['Board-ready exports in minutes', 'Polished PDF and Word comparison reports generated on demand — structured for board review, investor distribution, or legal sign-off.'],
                ['Role-based access controls', 'Confidentiality enforced across analyst, legal, and investor roles — RBAC built into the architecture, not bolted on after deployment.'],
              ].map(([label, desc]) => (
                <div
                  key={label}
                  className="cs-feature-item"
                  style={{
                    display: 'flex', gap: '0.75rem', alignItems: 'flex-start',
                    padding: '0.85rem 1rem',
                    background: 'rgba(59,130,246,0.04)',
                    border: '1px solid rgba(59,130,246,0.1)',
                    borderRadius: '0.65rem',
                  }}
                >
                  <span
                    aria-hidden
                    style={{
                      width: '6px', height: '6px', borderRadius: '50%',
                      background: AC, flexShrink: 0, marginTop: '0.45rem',
                      boxShadow: `0 0 8px ${AC}`,
                    }}
                  />
                  <p style={{ ...body, fontSize: '0.875rem', margin: 0 }}>
                    <strong style={{ color: 'var(--color-text-primary)' }}>{label}</strong>
                    {' — '}{desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ────────────────────────────────────────────────────────────────
              03 — BEFORE VS. AFTER
          ──────────────────────────────────────────────────────────────── */}
          <section aria-label="Before vs after" className="cs-section" style={sectionBox}>
            {sectionLabel('03', 'Before vs. after')}
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '28rem' }}>
                <thead>
                  <tr className="cs-tr">
                    {['Metric', 'Manual process', 'AI platform'].map((h, i) => (
                      <th key={h} style={{
                        padding: '0.65rem 1rem', textAlign: 'left',
                        ...mono, borderBottom: '1px solid rgba(255,255,255,0.08)',
                        color: i === 2 ? AC : 'rgba(255,255,255,0.35)',
                      }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Time to review 300-page RHP', '2–3 days', 'Minutes'],
                    ['DRHP vs RHP comparison report', 'Full team, multiple days', 'Under 10 minutes'],
                    ['Follow-up Q&A', 'Back to document, repeat', 'Instant — plain language chat'],
                    ['Boardroom readiness', 'Static summaries, often outdated', 'Exportable PDF/Word, ready to share'],
                    ['Change detection accuracy', 'Inconsistent, error-prone', '90% accuracy on material changes'],
                  ].map(([m, a, b]) => (
                    <tr key={m} className="cs-tr">
                      <td style={{ padding: '0.75rem 1rem', fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-text-primary)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>{m}</td>
                      <td style={{ padding: '0.75rem 1rem', fontSize: '0.875rem', color: 'var(--color-text-secondary)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>{a}</td>
                      <td style={{ padding: '0.75rem 1rem', fontSize: '0.875rem', color: AC, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>{b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ────────────────────────────────────────────────────────────────
              04 — IN THEIR WORDS
          ──────────────────────────────────────────────────────────────── */}
          <section aria-label="Client testimonial" className="cs-quote" style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
            {sectionLabel('04', 'In their words')}
            <blockquote style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderLeft: `3px solid ${AC}`,
              borderRadius: '0 0.85rem 0.85rem 0',
              padding: 'clamp(1.25rem, 3vw, 1.75rem)',
              margin: '0 0 1rem 0', position: 'relative', overflow: 'hidden',
            }}>
              <div aria-hidden style={{
                position: 'absolute', top: 0, left: '-100%', width: '100%', height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.4), transparent)',
                animation: 'cs-shimmer 7s ease-in-out infinite',
              }} />
              <p style={{
                ...body, fontSize: 'clamp(1rem, 1.8vw, 1.06rem)',
                fontStyle: 'italic', color: 'var(--color-text-primary)', marginBottom: '1rem',
              }}>
                &ldquo;Earlier, tracking changes between DRHP and RHP took a full team days of work. Now, I can upload both and get a clean, reliable report in under 10 minutes.&rdquo;
              </p>
              <footer>
                <cite style={{ ...body, fontSize: '0.85rem', fontStyle: 'normal', color: 'rgba(255,255,255,0.4)' }}>
                  — Analyst, Investment Firm
                </cite>
              </footer>
            </blockquote>
            <p style={{ ...body }}>
              The dual-layer change detection engine — combining{' '}
              <strong style={{ color: AC }}>text-level and numerical diffing</strong>
              {' '}— flagged 90% of material changes between draft and final filings. In high-stakes IPO reviews, a single missed clause or restated figure can have significant regulatory and financial consequences.
            </p>
          </section>

          {/* ────────────────────────────────────────────────────────────────
              05 — REGULATORY CONTEXT
          ──────────────────────────────────────────────────────────────── */}
          <section aria-label="Regulatory context" className="cs-section" style={sectionBox}>
            {sectionLabel('05', 'Regulatory context')}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {[
                'SEBI ICDR Regulations',
                'DRHP filing standards',
                'GDPR Article 28',
                'RBAC access controls',
                'Audit trail logging',
                'EU AI Act',
                'SOC 2 alignment',
                'Data residency controls',
              ].map((tag) => (
                <span
                  key={tag}
                  className="cs-reg-tag"
                  style={{
                    display: 'inline-flex', alignItems: 'center',
                    padding: '0.3rem 0.75rem',
                    background: 'rgba(59,130,246,0.07)',
                    border: '1px solid rgba(59,130,246,0.18)',
                    borderRadius: '999px',
                    fontFamily: 'var(--font-mono, monospace)',
                    fontSize: '0.625rem', letterSpacing: '0.1em',
                    color: 'rgba(147,197,253,0.8)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>

          {/* ────────────────────────────────────────────────────────────────
              06 — WHY THIS MATTERS
          ──────────────────────────────────────────────────────────────── */}
          <section aria-label="Why this matters" className="cs-section" style={sectionBox}>
            {sectionLabel('06', 'Why this matters')}
            <div ref={spine1Ref} style={{ width: '2px', height: '2rem', background: `linear-gradient(to bottom, ${AC}, transparent)`, marginBottom: '1.25rem', borderRadius: '1px' }} />
            <p style={{ ...body, marginBottom: '1.25rem' }}>
              This platform demonstrates how{' '}
              <strong style={{ color: 'var(--color-text-primary)' }}>RAG-based document intelligence</strong>,{' '}
              <strong style={{ color: 'var(--color-text-primary)' }}>LLM-powered summarization</strong>, and{' '}
              <strong style={{ color: 'var(--color-text-primary)' }}>agentic AI workflows</strong>
              {' '}can transform high-volume legal and financial document review.
            </p>
            <div ref={spine2Ref} style={{ width: '2px', height: '2rem', background: `linear-gradient(to bottom, ${AC}, transparent)`, marginBottom: '1.25rem', borderRadius: '1px' }} />
            <p style={{ ...body, marginBottom: '1.25rem' }}>
              The same architecture — intelligent ingestion, semantic search, structured comparison, and grounded Q&amp;A — applies across contract analysis, regulatory filings, due diligence, and compliance audits. The underlying system is not a chatbot built on top of a document. It is an infrastructure layer that decomposes document analysis into specialized agents, each optimized for a specific task, each producing a logged and auditable output.
            </p>
            <div ref={spine3Ref} style={{ width: '2px', height: '2rem', background: `linear-gradient(to bottom, ${AC}, transparent)`, marginBottom: '1.25rem', borderRadius: '1px' }} />
            <p style={{ ...body, fontStyle: 'italic', color: 'var(--color-text-primary)', margin: 0 }}>
              Built for teams that can&apos;t afford to miss what&apos;s buried on page 247.
            </p>
          </section>

          {/* ── footer note ──────────────────────────────────────────────── */}
          <p
            className="font-mono"
            style={{
              ...mono, textAlign: 'center',
              opacity: 0.45,
              marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
              fontSize: '0.5rem',
            }}
          >
            Built during a prior client engagement. Available as a service through Invisigent — deployed, customized, and compliance-ready for your team.
          </p>

          {/* ────────────────────────────────────────────────────────────────
              07 — FREQUENTLY ASKED QUESTIONS
          ──────────────────────────────────────────────────────────────── */}
          <section aria-label="Frequently asked questions" style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
            {sectionLabel('07', 'Frequently asked questions')}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                {
                  q: 'How does AI-powered IPO document review work for RHP and DRHP filings?',
                  a: 'The platform ingests both the draft DRHP and final RHP, processes them through specialized agents for entity extraction, summarization, and compliance comparison, then produces a structured report highlighting material changes — financial restatements, new risk disclosures, modified clauses — with full document citations.',
                },
                {
                  q: 'What kinds of changes does the dual-layer detection engine catch?',
                  a: 'The engine runs both text-level diffing (clause additions, deletions, rewording) and numerical diffing (restated financial figures, changed percentages, updated valuations). This combination catches material changes that text-only or manual review routinely misses — particularly restated figures buried in financial schedules.',
                },
                {
                  q: 'Is this suitable for investment banks, legal firms, and SEBI-registered analysts?',
                  a: 'Yes. The system includes role-based access controls for analyst, legal, and investor roles, full audit trails for every agent decision, data residency controls, and export formats — PDF and Word — designed for board and regulatory review. Compliance alignment with SEBI ICDR regulations and EU AI Act requirements is built into the architecture.',
                },
                {
                  q: 'How is this different from manually reading the prospectus or using a generic AI tool?',
                  a: 'Manual review misses subtle changes and takes days. Generic AI tools process the document in a single prompt with no specialization, no change tracking, and no audit trail. This system uses purpose-built agents — each optimized for a specific task — with structured outputs, citation-grounded Q&A, and a full LangSmith trace on every decision. The output is a defensible, shareable compliance report — not a summary paragraph.',
                },
              ].map(({ q, a }) => (
                <div
                  key={q}
                  className="cs-faq"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '0.85rem',
                    padding: 'clamp(1rem, 3vw, 1.5rem)',
                  }}
                >
                  <p style={{ fontWeight: 600, color: 'var(--color-text-primary)', fontSize: 'clamp(0.875rem, 1.6vw, 0.9375rem)', marginBottom: '0.6rem', lineHeight: 1.5 }}>{q}</p>
                  <p style={{ ...body, fontSize: '0.875rem', margin: 0 }}>{a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── CTA ──────────────────────────────────────────────────────── */}
          <div style={{
            display: 'flex', gap: '1rem', flexWrap: 'wrap',
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
                fontSize: '0.875rem', color: 'rgba(255,255,255,0.4)',
                display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                textDecoration: 'none',
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
