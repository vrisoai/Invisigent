'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(useGSAP, ScrollTrigger);

// ─── design constants ──────────────────────────────────────────────────────────
const AC = '#3B82F6';

const AGENT_DOMAINS = [
  ['News Agent', 'Recent headlines and market-moving catalysts'],
  ['Financial Agent', 'Fundamentals and financial statement analysis'],
  ['Technical Agent', 'Price action, indicators, and technical signals'],
  ['Sentiment Agent', 'Investor sentiment across public sources'],
  ['Company Agent', 'Company-level context and business overview'],
];

const KEY_FEATURES = [
  'Parallel execution',
  'Multi-agent reasoning',
  'LangGraph reducers',
  'LangSmith observability',
  'Cost tracking',
  'Portfolio-ready reports',
];

const TECH_STACK = ['Python', 'LangGraph', 'FastAPI', 'OpenAI', 'Tavily', 'yfinance', 'LangSmith'];

const RESULTS = [
  {
    color: '#3B82F6',
    title: '~30 second report generation',
    detail: 'A full research report is generated in about 30 seconds despite querying five independent data domains.',
  },
  {
    color: '#22C55E',
    title: 'Concurrent research streams',
    detail: 'News, financials, technicals, sentiment, and company data are gathered in parallel instead of one after another.',
  },
  {
    color: '#A855F7',
    title: '~$0.0003 average cost per report',
    detail: 'Low enough per-report inference cost to run continuously across a large ticker universe.',
  },
];

const FAQS = [
  {
    q: 'Why use five parallel agents instead of one agent that gathers everything sequentially?',
    a: 'Investment research spans independent domains: news, fundamentals, technicals, sentiment, and company data. Running one agent per domain in parallel means total wait time is set by the slowest single agent rather than the sum of all five, which is what keeps full report generation to around 30 seconds.',
  },
  {
    q: 'What does each of the five research agents actually do?',
    a: 'The News Agent pulls recent headlines and catalysts, the Financial Agent analyzes fundamentals and financial statements, the Technical Agent evaluates price action and indicators, the Sentiment Agent gauges investor sentiment, and the Company Agent gathers company-level context. A planner dispatches the ticker to all five, and an aggregator merges their findings into a single report.',
  },
  {
    q: 'How does LangGraph coordinate parallel agents and merge their results?',
    a: 'Each research agent runs as an independent node in a LangGraph graph. LangGraph reducers combine their individual outputs into a single shared state, and the aggregator node only produces the final buy/hold/sell recommendation once every agent has reported back.',
  },
  {
    q: 'Does the Stock Research Agent work for tickers outside the US market?',
    a: 'Coverage depends on the underlying data sources. yfinance and Tavily both support a wide range of exchanges beyond the US, including listings relevant to UK, Australian, and Indian markets, though the depth of fundamentals and news coverage can vary by exchange and region.',
  },
  {
    q: 'Is the buy/hold/sell recommendation reliable enough to base investment decisions on?',
    a: 'The recommendation is generated only after all five agents report back, and every contributing input is traceable through LangSmith. That makes the output explainable and auditable, but it is a research aid that consolidates public information, not financial advice, and should be treated as one input into a broader investment decision.',
  },
  {
    q: 'What does the roughly $0.0003 average cost per report actually include?',
    a: 'It covers the LLM inference cost across all five parallel research agents plus the aggregation step for a single ticker report. Cost is tracked per report through LangSmith, which is what makes it practical to run continuously across a large ticker universe.',
  },
];

// ─── result item ───────────────────────────────────────────────────────────────
function ResultItem({ color, title, detail }: { color: string; title: string; detail: string }) {
  return (
    <div
      className="cs-result"
      style={{
        background: `${color}08`,
        border: `1px solid ${color}28`,
        borderRadius: '0.75rem',
        padding: '1rem 1.25rem',
        display: 'flex',
        gap: '0.75rem',
        alignItems: 'flex-start',
      }}
    >
      <span
        aria-hidden
        style={{
          width: '1.15rem',
          height: '1.15rem',
          borderRadius: '50%',
          background: `${color}18`,
          border: `1px solid ${color}45`,
          color,
          fontSize: '0.7rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          marginTop: '0.1rem',
        }}
      >
        ✓
      </span>
      <div>
        <p style={{ fontWeight: 600, color: 'var(--color-text-primary)', fontSize: '0.9rem', margin: '0 0 0.3rem' }}>
          {title}
        </p>
        <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, margin: 0 }}>
          {detail}
        </p>
      </div>
    </div>
  );
}

// ─── agent / pipeline stage block ───────────────────────────────────────────────
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
              stage_{num}_output
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
export default function CaseStudyStockAgentClient() {
  const rootRef = useRef<HTMLDivElement>(null);
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

        // ── result cards ────────────────────────────────────────────────────
        ScrollTrigger.batch('.cs-result', {
          onEnter: (batch) =>
            gsap.from(batch, { opacity: 0, x: -28, duration: 0.55, ease: 'power2.out', stagger: 0.1 }),
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

  const tagCloud = (items: string[]) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
      {items.map((f) => (
        <span
          key={f}
          className="cs-tag font-mono"
          style={{
            fontSize: '0.65rem',
            letterSpacing: '0.06em',
            color: 'rgba(255,255,255,0.75)',
            background: 'rgba(59,130,246,0.06)',
            border: '1px solid rgba(59,130,246,0.2)',
            borderRadius: '0.3rem',
            padding: '0.35rem 0.75rem',
          }}
        >
          {f}
        </span>
      ))}
    </div>
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
            <span style={{ color: AC }}>Investment research</span>
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
            {'Stock Research Agent'
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
            A five-agent research system that gathers financial statements, market news, technical signals, and investor sentiment in parallel to generate an explainable buy/hold/sell report.
          </p>

          {/* ── stat pills ─────────────────────────────────────────────────── */}
          <div className="cs-stat-grid" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
            {[
              { v: '~30s', l: 'Report generation' },
              { v: '5', l: 'Parallel agents' },
              { v: '$0.0003', l: 'Avg cost per report' },
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
              OVERVIEW
          ──────────────────────────────────────────────────────────────── */}
          <section aria-label="Overview" className="cs-section" style={sectionBox}>
            <p className="font-mono" style={{ ...mono, marginBottom: '0.85rem' }}>Overview</p>
            <p style={{ ...body, margin: 0 }}>
              Investment research requires gathering information from multiple independent sources including financial statements, company fundamentals, market news, and investor sentiment. This project automates that workflow using multiple AI agents working in parallel to generate comprehensive research reports.
            </p>
          </section>

          {/* ────────────────────────────────────────────────────────────────
              PROBLEM
          ──────────────────────────────────────────────────────────────── */}
          <section aria-label="Problem" className="cs-section" style={sectionBox}>
            <p className="font-mono" style={{ ...mono, marginBottom: '0.85rem' }}>Problem</p>
            <p style={{ ...body, margin: 0 }}>
              Retail investors spend hours switching between finance websites, news platforms, and earnings reports before making investment decisions. There was no single system capable of consolidating all this information into an explainable AI-generated report.
            </p>
          </section>

          {/* ────────────────────────────────────────────────────────────────
              SOLUTION
          ──────────────────────────────────────────────────────────────── */}
          <section aria-label="Solution" className="cs-section" style={sectionBox}>
            <p className="font-mono" style={{ ...mono, marginBottom: '0.85rem' }}>Solution</p>
            <p style={{ ...body, margin: 0 }}>
              Built a five-agent research system where each AI agent specializes in one domain. Instead of sequential processing, agents execute in parallel, significantly reducing response time. The final recommendation is generated only after aggregating outputs from all research agents.
            </p>
          </section>

          {/* ────────────────────────────────────────────────────────────────
              ARCHITECTURE
          ──────────────────────────────────────────────────────────────── */}
          <section aria-label="Architecture" style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
            <h2 style={{ ...h2, fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', marginBottom: '1.25rem' }}>
              Architecture
            </h2>

            <div
              className="font-mono cs-section"
              style={{
                background: '#0a0a0a',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '0.75rem',
                padding: 'clamp(1.25rem, 3vw, 2rem)',
                overflowX: 'auto',
                fontSize: 'clamp(0.6875rem, 1.4vw, 0.8125rem)',
                lineHeight: 1.7,
                color: 'rgba(255,255,255,0.65)',
                whiteSpace: 'pre',
                marginBottom: 'clamp(2rem, 4vw, 3rem)',
              }}
            >
{`  Ticker
    |
    v
  Planner
    |
    +-------+-------+-------+-------+
    v       v       v       v       v
  News   Financial Technical Sentiment Company
  Agent    Agent    Agent    Agent    Agent
    |       |       |       |       |
    +-------+-------+-------+-------+
                |
                v
           Aggregator
                |
                v
      Buy / Hold / Sell Report`}
            </div>

            {/* Stage 1 */}
            <AgentBlock num={1} name="Planning & dispatch" time="Ingestion" spineRef={spine1Ref}>
              <p style={{ ...body, fontSize: '0.85rem', margin: 0 }}>
                A ticker symbol enters the graph and a planner dispatches it to all five research agents at once, instead of routing it through a single sequential pipeline.
              </p>
            </AgentBlock>

            {/* Stage 2 */}
            <AgentBlock num={2} name="Parallel research agents" time="Concurrent execution" spineRef={spine2Ref}>
              <p style={{ ...body, fontSize: '0.85rem', marginBottom: '1rem' }}>
                Five specialized agents run concurrently, each covering one research domain:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {AGENT_DOMAINS.map(([name, desc]) => (
                  <div key={name} style={{ display: 'flex', gap: '0.6rem', alignItems: 'baseline' }}>
                    <span style={{ fontWeight: 600, color: AC, fontSize: '0.8rem', flexShrink: 0 }}>{name}</span>
                    <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)' }}>{desc}</span>
                  </div>
                ))}
              </div>
            </AgentBlock>

            {/* Stage 3 */}
            <AgentBlock num={3} name="Aggregation & report" time="Response" spineRef={spine3Ref}>
              <p style={{ ...body, fontSize: '0.85rem', margin: 0 }}>
                LangGraph reducers merge the five agent outputs into a single shared state. The aggregator only produces the final buy, hold, or sell report once every agent has reported back, with cost and latency tracked per report through LangSmith.
              </p>
            </AgentBlock>
          </section>

          {/* ────────────────────────────────────────────────────────────────
              KEY FEATURES
          ──────────────────────────────────────────────────────────────── */}
          <section aria-label="Key features" className="cs-section" style={sectionBox}>
            <p className="font-mono" style={{ ...mono, marginBottom: '1rem' }}>Key features</p>
            {tagCloud(KEY_FEATURES)}
          </section>

          {/* ────────────────────────────────────────────────────────────────
              TECH STACK
          ──────────────────────────────────────────────────────────────── */}
          <section aria-label="Tech stack" className="cs-section" style={sectionBox}>
            <p className="font-mono" style={{ ...mono, marginBottom: '1rem' }}>Tech stack</p>
            {tagCloud(TECH_STACK)}
          </section>

          {/* ────────────────────────────────────────────────────────────────
              RESULTS
          ──────────────────────────────────────────────────────────────── */}
          <section aria-label="Results" style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
            <h2 style={{ ...h2, fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', marginBottom: '1.5rem' }}>
              Results
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {RESULTS.map(({ color, title, detail }) => (
                <ResultItem key={title} color={color} title={title} detail={detail} />
              ))}
            </div>
          </section>

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
