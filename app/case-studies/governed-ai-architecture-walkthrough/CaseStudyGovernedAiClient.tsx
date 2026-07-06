'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(useGSAP, ScrollTrigger);

// ─── design constants ──────────────────────────────────────────────────────────
const AC = '#3B82F6';

const LAYERS = [
  {
    num: '01',
    title: 'Ingestion',
    badge: 'Constrained',
    desc: 'Validates incoming data formats and document types before they enter the processing pipeline.',
    cols: [
      { label: 'What data enters', value: 'Unstructured text, PDFs, CSVs, API streams' },
      { label: 'What validation gate runs', value: 'Schema validation + PII redaction layer' },
      { label: 'What governance control applies', value: 'Data residency and encryption-at-rest' },
    ],
  },
  {
    num: '02',
    title: 'Knowledge & Retrieval',
    badge: 'Validated',
    desc: 'Augments the reasoning process with verified organizational knowledge using adaptive RAG patterns.',
    cols: [
      { label: 'What data enters', value: 'Internal knowledge base + historical telemetry' },
      { label: 'What validation gate runs', value: 'Retrieval score thresholding' },
      { label: 'What governance control applies', value: 'Per-user / per-tenant retrieval isolation' },
    ],
  },
  {
    num: '03',
    title: 'Reasoning',
    badge: 'Access-controlled',
    desc: 'Uses frontier models to process the validated data within strict computational and identity boundaries.',
    cols: [
      { label: 'What data enters', value: 'Large language models + custom agent logic' },
      { label: 'What validation gate runs', value: 'Prompt injection & jailbreak monitoring' },
      { label: 'What governance control applies', value: 'Zero-data-retention model usage' },
    ],
  },
  {
    num: '04',
    title: 'Action',
    badge: 'Validated',
    desc: 'Executes outcomes via integrated systems only after final policy and validation checks.',
    cols: [
      { label: 'What data enters', value: 'Automated emails, API calls, database writes' },
      { label: 'What validation gate runs', value: 'Double-check validation + retry logic' },
      { label: 'What governance control applies', value: 'Full audit trail of every system action' },
    ],
  },
];

const FAQS = [
  {
    q: 'What makes an AI architecture "governed" rather than just monitored?',
    a: 'Monitoring observes what already happened. Governance constrains what is allowed to happen in the first place. This architecture places a validation gate and a governance control between every layer, so ingestion, retrieval, reasoning, and action are each explicitly bounded rather than left to run unconstrained with observability bolted on afterward.',
  },
  {
    q: 'Why validate data at the ingestion layer instead of relying on the model to handle bad input?',
    a: 'Schema validation and PII redaction at ingestion catch malformed documents and sensitive data before they ever reach a model or a retrieval index. Fixing bad input at the edge is far cheaper and more auditable than trying to catch it after it has already influenced a reasoning step or an automated action.',
  },
  {
    q: 'How does per-tenant retrieval isolation prevent cross-customer data leakage?',
    a: "The knowledge and retrieval layer scopes every query to a specific user or tenant boundary, combined with retrieval score thresholding so weakly relevant results are not surfaced at all. That isolation is what prevents one tenant's data from ever entering another tenant's retrieved context.",
  },
  {
    q: 'What is zero-data-retention model usage and why does it matter for regulated industries?',
    a: 'Zero-data-retention means prompts and outputs sent to the reasoning layer are not stored or used for training by the model provider. Combined with prompt injection and jailbreak monitoring, it lets regulated organizations use frontier models while keeping sensitive data inside their own compliance boundary.',
  },
  {
    q: 'Why is there a governance gate between the reasoning layer and the action layer?',
    a: 'A model deciding to send an email or write to a database is different from that action actually happening. The action layer runs double-check validation and retry logic and logs a full audit trail before any automated email, API call, or database write executes, so a reasoning error cannot become an irreversible action unchecked.',
  },
  {
    q: 'Is this a deployable product, or a reference architecture?',
    a: 'This is an interactive architecture walkthrough, not a live tool. It mirrors the governance architecture behind a clinical workflow system already running in production at two US clinics, and is meant to show CTOs, compliance leads, and digital transformation leaders exactly how each layer of a governed AI deployment is constrained.',
  },
];

// ─── layer card ──────────────────────────────────────────────────────────────
function LayerCard({
  num, title, badge, desc, cols, cardRef,
}: {
  num: string; title: string; badge: string; desc: string;
  cols: { label: string; value: string }[];
  cardRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div
      ref={cardRef}
      className="cs-layer-card"
      style={{
        background: 'rgba(255,255,255,0.02)',
        border: `1.5px solid ${AC}40`,
        borderRadius: '1.25rem',
        padding: 'clamp(1.5rem, 4vw, 2.25rem)',
        marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
        boxShadow: `0 0 40px ${AC}0d`,
      }}
    >
      {/* header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.85rem' }}>
          <span style={{
            fontFamily: 'var(--font-mono, monospace)',
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            fontWeight: 700,
            color: AC,
          }}>
            {num}
          </span>
          <h3 style={{
            fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
            fontWeight: 800,
            color: 'var(--color-text-primary)',
            margin: 0,
            letterSpacing: '-0.01em',
          }}>
            {title}
          </h3>
        </div>
        <span style={{
          fontFamily: 'var(--font-mono, monospace)',
          fontSize: '0.65rem',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.55)',
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.14)',
          borderRadius: '999px',
          padding: '0.4rem 0.9rem',
        }}>
          {badge}
        </span>
      </div>

      {/* description */}
      <p style={{
        fontStyle: 'italic',
        fontSize: 'clamp(0.9375rem, 1.8vw, 1.05rem)',
        color: 'rgba(255,255,255,0.55)',
        lineHeight: 1.65,
        margin: '0 0 1.25rem',
      }}>
        {desc}
      </p>

      {/* divider */}
      <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', marginBottom: '1.25rem' }} aria-hidden />

      {/* 3-column grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(9rem, 1fr))', gap: '1.25rem' }}>
        {cols.map(({ label, value }) => (
          <div key={label}>
            <p style={{
              fontFamily: 'var(--font-mono, monospace)',
              fontSize: '0.62rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontWeight: 700,
              color: 'rgba(255,255,255,0.4)',
              lineHeight: 1.5,
              margin: '0 0 0.6rem',
            }}>
              {label}
            </p>
            <p style={{
              fontSize: 'clamp(0.9rem, 1.7vw, 1rem)',
              color: 'rgba(255,255,255,0.88)',
              lineHeight: 1.5,
              margin: 0,
            }}>
              {value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── main client component ─────────────────────────────────────────────────────
export default function CaseStudyGovernedAiClient() {
  const rootRef = useRef<HTMLDivElement>(null);
  const layerRef1 = useRef<HTMLDivElement | null>(null);
  const layerRef2 = useRef<HTMLDivElement | null>(null);
  const layerRef3 = useRef<HTMLDivElement | null>(null);
  const layerRef4 = useRef<HTMLDivElement | null>(null);
  const layerRefs = [layerRef1, layerRef2, layerRef3, layerRef4];

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

        // ── layer card reveal ───────────────────────────────────────────────
        layerRefs.forEach((ref, i) => {
          if (!ref.current) return;
          gsap.from(ref.current, {
            opacity: 0,
            y: 32,
            duration: 0.65,
            ease: 'power3.out',
            delay: i * 0.05,
            scrollTrigger: { trigger: ref.current, start: 'top 88%', once: true },
          });
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
        @keyframes cs-cursor-blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .cs-word { transform: none !important; opacity: 1 !important; }
          .cs-stat  { transform: none !important; opacity: 1 !important; }
        }
        @media (max-width: 480px) {
          .cs-stat-grid { gap: 0.625rem !important; }
          .cs-stat      { min-width: calc(50% - 0.35rem) !important; padding: 0.85rem 1rem !important; }
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
            background: `radial-gradient(circle, ${AC}18 0%, transparent 70%)`,
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
            <span style={{ color: AC }}>AI governance</span>
            <span style={{ color: 'rgba(255,255,255,0.18)' }}>·</span>
            <span>Architecture walkthrough</span>
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
              marginBottom: '1rem',
              letterSpacing: '-0.02em',
            }}
          >
            {'Governed AI Architecture Walkthrough'
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

          {/* ── built for ──────────────────────────────────────────────────── */}
          <p className="font-mono" style={{ ...mono, color: 'rgba(255,255,255,0.45)', marginBottom: '1.5rem' }}>
            Built for: CTOs, compliance leads, heads of digital transformation in regulated industries
          </p>

          {/* ── disclaimer ─────────────────────────────────────────────────── */}
          <div
            className="cs-oneliner"
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.65rem',
              background: `${AC}0d`,
              border: `1px solid ${AC}40`,
              borderRadius: '0.65rem',
              padding: '0.9rem 1.1rem',
              marginBottom: '2.25rem',
            }}
          >
            <span aria-hidden style={{ color: AC, fontSize: '1rem', lineHeight: 1.5 }}>⚠</span>
            <p style={{ ...body, margin: 0, fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>
              This is not a live tool — it is an interactive architecture walkthrough.
            </p>
          </div>

          {/* ── intro ──────────────────────────────────────────────────────── */}
          <p style={{ ...body, fontSize: 'clamp(1rem, 1.8vw, 1.06rem)', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Move through the four controlled layers of a governed AI deployment: Ingestion, Knowledge and Retrieval, Reasoning, and Action. See exactly how each layer is constrained, what validation happens between them, and where governance controls are applied.
          </p>

          {/* ── stat pills ─────────────────────────────────────────────────── */}
          <div className="cs-stat-grid" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
            {[
              { v: '4', l: 'Controlled layers' },
              { v: '2', l: 'US clinics in production' },
              { v: 'Full', l: 'Audit trail per action' },
            ].map(({ v, l }) => (
              <div
                key={v}
                className="cs-stat"
                style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.35rem',
                  padding: '1.1rem 1.6rem',
                  background: `${AC}14`,
                  border: `1px solid ${AC}40`,
                  borderRadius: '0.85rem',
                  flex: '1 1 auto', minWidth: '8rem',
                  boxShadow: `0 0 28px ${AC}14`,
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
              THE FOUR LAYERS
          ──────────────────────────────────────────────────────────────── */}
          <section aria-label="The four controlled layers" style={{ marginBottom: 'clamp(1rem, 3vw, 1.5rem)' }}>
            <h2 style={{ ...h2, fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', marginBottom: '1.75rem' }}>
              The four controlled layers
            </h2>
            {LAYERS.map((layer, i) => (
              <LayerCard
                key={layer.num}
                num={layer.num}
                title={layer.title}
                badge={layer.badge}
                desc={layer.desc}
                cols={layer.cols}
                cardRef={layerRefs[i]}
              />
            ))}
          </section>

          {/* ── closing note ───────────────────────────────────────────────── */}
          <p
            className="cs-section"
            style={{
              ...body,
              fontStyle: 'italic',
              fontSize: '0.9375rem',
              color: 'rgba(255,255,255,0.4)',
              borderLeft: `3px solid ${AC}`,
              paddingLeft: '1.1rem',
              marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
            }}
          >
            This mirrors the governance architecture deployed in a clinical workflow system live at two US clinics.
          </p>

          {/* ────────────────────────────────────────────────────────────────
              FAQ
          ──────────────────────────────────────────────────────────────── */}
          <section aria-label="Frequently asked questions">
            <h2 style={{ ...h2, fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', marginBottom: '1.75rem' }}>
              Frequently asked questions
            </h2>
            {FAQS.map(({ q, a }) => (
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
