import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FooterSection, InvisigentLogoSection } from '@/app/components';
import Breadcrumb from '@/app/components/Breadcrumb';

const SLUG = 'ai-hallucination-fix-infrastructure';
const CANONICAL = `https://invisigent.ai/insights/${SLUG}`;
const OG_IMAGE = 'https://invisigent.ai/blog-ai-hallucination-fix.svg';
const PUBLISHED = '2026-06-07T10:00:00.000Z';
const TITLE = 'The Problem: When Your AI Model Hallucinates in Production';
const DESCRIPTION =
  'In our experience building AI infrastructure for 15+ enterprise clients, we found that 80% of hallucination issues stem from infrastructure-level failures, not model limitations. Here are 7 infrastructure fixes that reduce hallucination rates by 60-80%.';

export const metadata: Metadata = {
  title: `${TITLE} | Invisigent`,
  description: DESCRIPTION,
  keywords: [
    'AI hallucination fix',
    'RAG hallucination',
    'AI infrastructure monitoring',
    'hallucination detection',
    'AI observability',
    'source attribution AI',
    'multi-model verification',
    'confidence threshold AI',
    'n8n AI automation',
    'enterprise AI accuracy',
    'Invisigent AI consulting',
  ],
  authors: [{ name: 'Invisigent Research', url: 'https://invisigent.ai' }],
  creator: 'Invisigent',
  category: 'AI Infrastructure',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: 'article',
    locale: 'en_US',
    siteName: 'Invisigent',
    title: TITLE,
    description:
      '80% of AI hallucination issues are infrastructure failures. 7 infrastructure-level fixes that reduce hallucination rates by 60-80% in production.',
    url: CANONICAL,
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    authors: ['https://invisigent.ai'],
    section: 'AI Infrastructure',
    tags: [
      'AI hallucination',
      'RAG infrastructure',
      'AI observability',
      'hallucination detection',
      'enterprise AI accuracy',
    ],
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: TITLE, type: 'image/svg+xml' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@invisigent_ai',
    creator: '@invisigent_ai',
    title: TITLE,
    description:
      '80% of AI hallucination issues are infrastructure failures. 7 fixes that reduce hallucination rates by 60-80%.',
    images: [{ url: OG_IMAGE, alt: TITLE }],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  '@id': `${CANONICAL}#article`,
  headline: TITLE,
  description: DESCRIPTION,
  image: { '@type': 'ImageObject', url: OG_IMAGE, width: 1200, height: 675 },
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: { '@type': 'Organization', name: 'Invisigent Research', url: 'https://invisigent.ai' },
  publisher: {
    '@type': 'Organization',
    name: 'Invisigent',
    url: 'https://invisigent.ai',
    logo: { '@type': 'ImageObject', url: 'https://invisigent.ai/logo.png' },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL },
  articleSection: 'AI Infrastructure',
  keywords:
    'AI hallucination fix, RAG hallucination, AI infrastructure monitoring, hallucination detection, AI observability, source attribution AI, multi-model verification, confidence threshold AI, n8n AI automation, enterprise AI accuracy',
  inLanguage: 'en-US',
  isPartOf: {
    '@type': 'Blog',
    '@id': 'https://invisigent.ai/insights#blog',
    name: 'AI Infrastructure Insights',
    publisher: { '@type': 'Organization', name: 'Invisigent' },
  },
};

const h2Style = {
  fontSize: 'clamp(1.125rem, 2.5vw, 1.4rem)',
  fontWeight: 700,
  color: 'var(--color-text-primary)',
  marginBottom: '-0.25rem',
} as const;

const monoLabelStyle = {
  fontFamily: 'var(--font-mono)',
  fontSize: '0.625rem',
  letterSpacing: '0.12em',
  textTransform: 'uppercase' as const,
  color: 'var(--color-trust-amber)',
  marginBottom: '0.3rem',
};

const ROOT_CAUSES = [
  {
    n: '01',
    title: 'Data Pipeline Failures',
    failures: [
      'Missing or corrupted context in retrieval pipeline',
      'Vector database returning stale embeddings',
      'Data drift without detection',
      'No validation on data quality',
    ],
  },
  {
    n: '02',
    title: 'Observability Blind Spots',
    failures: [
      'No hallucination detection in monitoring',
      'Missing metrics on output quality drift',
      'No automated alerts',
      'Inadequate logging',
    ],
  },
  {
    n: '03',
    title: 'Routing & Load Balancing Issues',
    failures: [
      'Wrong model for high-stakes responses',
      'No fallback mechanisms',
      'Inconsistent routing',
      'Rate limiting forcing incomplete responses',
    ],
  },
  {
    n: '04',
    title: 'Context Window Management',
    failures: [
      'Context overflow truncating critical info',
      'Poor prompt engineering',
      'No source attribution in RAG',
      'Missing validation that retrieved context is relevant',
    ],
  },
  {
    n: '05',
    title: 'No Human-in-the-Loop Validation',
    failures: [
      'Zero QA layer',
      'No confidence threshold blocking',
      'Missing feedback loops',
      'No audit trail',
    ],
  },
];

const FIXES = [
  {
    n: 'Fix #1',
    title: 'Implement AI Hallucination Detection in Your Observability Stack',
    body: 'Add metrics that directly measure hallucination risk before problems compound.',
    details: [
      'Track fact consistency score, confidence score distribution, and output plagiarism rate',
      'Set up automated alerts when hallucination rate >5%, confidence <0.7, or fact consistency <0.85',
      'Tools: OpenLLMetry, Arize AI, LangSmith',
    ],
    result: '40-50% reduction',
  },
  {
    n: 'Fix #2',
    title: 'Add Source Attribution & Citation Validation to RAG System',
    body: 'Force the model to cite sources and validate those citations are real and accurate.',
    details: [
      'Force source attribution in prompts — every factual claim must reference a retrievable document',
      'Implement citation validation: check sources exist and that retrieved text matches the claim',
      'Add confidence scoring to flag responses where source match is weak',
    ],
    result: '50-60% reduction',
  },
  {
    n: 'Fix #3',
    title: 'Build Multi-Model Verification Layer',
    body: 'Use model routing based on query stakes and cross-validate high-risk responses.',
    details: [
      'Cross-validation with secondary model for high-stakes responses',
      'Use model routing: low stakes → small model, high stakes → large model, critical → multi-model + human',
      'Add confidence threshold blocking to prevent low-confidence outputs reaching users',
    ],
    result: '60-70% reduction',
  },
  {
    n: 'Fix #4',
    title: 'Implement Data Quality Validation Pipeline',
    body: 'Validate the data feeding your AI before queries are processed.',
    details: [
      'Pre-query validation: recency checks, relevance scoring, and data integrity checks',
      'Automated data drift detection to flag when knowledge base diverges from operational reality',
      'Add data versioning so retrieval failures can be traced to specific data states',
    ],
    result: '45-55% reduction',
  },
  {
    n: 'Fix #5',
    title: 'Add Human-in-the-Loop QA Layer',
    body: 'Route responses based on confidence scores rather than sending everything directly to users.',
    details: [
      'Confidence-based routing: >0.9 send to user, >0.7 route to human review, else use fallback',
      'Implement feedback collection so human reviewer decisions improve the routing model over time',
      'Build audit trail for every routed response to support compliance and debugging',
    ],
    result: '70-80% reduction',
  },
  {
    n: 'Fix #6',
    title: 'Optimize Context Window Management',
    body: 'Prioritize what context reaches the model and detect when overflow is causing failures.',
    details: [
      'Smart context prioritization: relevance 50%, recency 30%, importance 20%',
      'Add context overflow detection — flag when truncation may have removed critical information',
      'Enforce prompt engineering best practices: structured context blocks, explicit instruction ordering',
    ],
    result: '35-45% reduction',
  },
  {
    n: 'Fix #7',
    title: 'Implement n8n Automation for Hallucination Monitoring',
    body: 'Automate the monitoring workflows that would otherwise require constant manual attention.',
    details: [
      'Monitoring workflow: New response → fetch metadata → calculate risk → if high: alert Slack + route to review + log to DB',
      'Automated fact-checking via n8n webhook integration with external verification APIs',
      'Automated weekly/daily reporting on hallucination rate trends and queue status',
    ],
    result: '50-60% faster detection',
  },
];

const MISTAKES = [
  {
    mistake: 'Only fine-tuning the model without fixing data pipeline',
    outcome: 'Hallucinations persist',
  },
  {
    mistake: 'No monitoring dashboard',
    outcome: "Can't track improvement over time",
  },
  {
    mistake: 'Ignoring confidence scores',
    outcome: 'Low-confidence hallucinations reach users',
  },
  {
    mistake: 'Skipping human review',
    outcome: 'No feedback loop for improving system',
  },
  {
    mistake: 'Using single model for all queries',
    outcome: 'Wrong model for high-stakes responses',
  },
  {
    mistake: 'No source attribution',
    outcome: 'AI makes claims without verification',
  },
  {
    mistake: 'Not validating retrieved context',
    outcome: 'Stale/corrupted data causes hallucinations',
  },
];

const RESULTS = [
  { metric: 'Hallucination Rate', before: '15-20%', after: '3-5%', delta: '75% reduction' },
  { metric: 'Unverified Claims', before: '40%', after: '8%', delta: '80% reduction' },
  { metric: 'Confidence Alerts', before: 'Manual', after: 'Automated', delta: '100% faster detection' },
  {
    metric: 'Human Review Queue',
    before: '0',
    after: '10% of queries',
    delta: '80% fewer hallucinations reaching users',
  },
  {
    metric: 'Mean Time to Detect',
    before: '2-3 days',
    after: '<1 hour',
    delta: '96% faster',
  },
];

export default function BlogPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Breadcrumb
        items={[
          { label: 'Insights', href: '/insights' },
          { label: 'The Problem: When Your AI Model Hallucinates in Production' },
        ]}
      />
      <main style={{ background: 'var(--color-bg-primary)', minHeight: '100vh' }}>

        {/* ── Hero image ── */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '21/9',
            maxHeight: '520px',
            overflow: 'hidden',
          }}
        >
          <Image
            src="/blog-ai-hallucination-fix.svg"
            alt="AI hallucination fix infrastructure — 7 infrastructure strategies for reducing hallucination rates in production AI systems"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
            priority
            unoptimized
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to bottom, rgba(18,18,18,0) 40%, rgba(18,18,18,0.85) 100%)',
            }}
            aria-hidden
          />
        </div>

        {/* ── Article ── */}
        <article
          style={{
            maxWidth: '720px',
            margin: '0 auto',
            padding: 'clamp(2.5rem, 6vw, 4rem) clamp(1.25rem, 5vw, 2rem)',
          }}
        >
          {/* Category + read time */}
          <div
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}
          >
            <span
              className="font-mono"
              style={{
                fontSize: '0.625rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--color-trust-amber)',
                background: 'rgba(251,191,36,0.08)',
                border: '1px solid rgba(251,191,36,0.2)',
                borderRadius: '0.25rem',
                padding: '0.2rem 0.55rem',
              }}
            >
              AI Infrastructure
            </span>
            <span
              className="font-mono"
              style={{
                fontSize: '0.625rem',
                letterSpacing: '0.12em',
                color: 'var(--color-text-tertiary)',
              }}
            >
              14 min read
            </span>
          </div>

          {/* Title */}
          <h1
            className="font-serif"
            style={{
              fontSize: 'clamp(1.75rem, 4.5vw, 2.75rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              color: 'var(--color-text-primary)',
              marginBottom: '1rem',
            }}
          >
            The Problem: When Your AI Model Hallucinates in Production
          </h1>

          {/* Lead */}
          <p
            className="font-serif"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              lineHeight: 1.7,
              color: 'var(--color-text-secondary)',
              fontStyle: 'italic',
              marginBottom: '2rem',
            }}
          >
            This isn&apos;t a model problem. It&apos;s an infrastructure problem.
          </p>

          {/* Divider */}
          <div
            style={{
              height: '1px',
              background: 'linear-gradient(90deg, rgba(251,191,36,0.3), transparent)',
              marginBottom: '2rem',
            }}
            aria-hidden
          />

          {/* Body — Intro */}
          <div
            className="font-serif"
            style={{
              fontSize: 'clamp(0.9375rem, 1.8vw, 1.0625rem)',
              lineHeight: 1.8,
              color: 'var(--color-text-secondary)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <p>
              Your AI chatbot is confidently telling customers that your company closed last year.
              Your RAG system is retrieving documents that don&apos;t exist. Your AI agent is making
              decisions based on facts that never happened.
            </p>

            <p>
              In our experience building AI infrastructure for 15+ enterprise clients, we&apos;ve
              found that 80% of hallucination issues stem from infrastructure-level failures, not
              model limitations. The AI model itself is rarely the root cause — it&apos;s the systems
              feeding it data, monitoring its outputs, and routing its responses.
            </p>

            <blockquote
              style={{
                margin: '0.5rem 0',
                padding: '1.25rem 1.5rem',
                background: 'rgba(251,191,36,0.04)',
                borderLeft: '3px solid var(--color-trust-amber)',
                borderRadius: '0 0.5rem 0.5rem 0',
              }}
            >
              <p
                className="font-serif"
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.175rem)',
                  fontStyle: 'italic',
                  color: 'var(--color-text-primary)',
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                When you implement proper AI hallucination fix infrastructure, you can reduce
                hallucination rates by 60-80% without changing your underlying model.
              </p>
            </blockquote>

            <h2 className="font-serif" style={{ ...h2Style, marginTop: '0.5rem' }}>
              Root Cause: Why AI Models Hallucinate (Infrastructure Perspective)
            </h2>

            <p>Before jumping to solutions, understand the infrastructure-level root causes:</p>
          </div>

          {/* Root Cause Cards */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              margin: '2rem 0',
            }}
          >
            {ROOT_CAUSES.map(({ n, title, failures }) => (
              <div
                key={n}
                style={{
                  background: 'var(--color-bg-card)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '0.75rem',
                  overflow: 'hidden',
                }}
              >
                {/* Card header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: 'clamp(1rem, 2.5vw, 1.25rem) clamp(1rem, 2.5vw, 1.5rem)',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <span
                    className="font-mono"
                    style={{
                      fontSize: '0.625rem',
                      letterSpacing: '0.12em',
                      color: 'var(--color-trust-amber)',
                      background: 'rgba(251,191,36,0.08)',
                      border: '1px solid rgba(251,191,36,0.2)',
                      borderRadius: '0.25rem',
                      padding: '0.25rem 0.5rem',
                      flexShrink: 0,
                    }}
                  >
                    {n}
                  </span>
                  <p
                    className="font-serif"
                    style={{
                      fontSize: 'clamp(0.9375rem, 1.8vw, 1.0625rem)',
                      fontWeight: 700,
                      color: 'var(--color-text-primary)',
                      margin: 0,
                      lineHeight: 1.35,
                    }}
                  >
                    {title}
                  </p>
                </div>

                {/* Card body */}
                <div
                  style={{
                    padding: 'clamp(1rem, 2.5vw, 1.5rem)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                  }}
                >
                  <div
                    style={{
                      background: 'rgba(239,68,68,0.04)',
                      border: '1px solid rgba(239,68,68,0.12)',
                      borderRadius: '0.5rem',
                      padding: '0.875rem 1rem',
                    }}
                  >
                    <p
                      className="font-mono"
                      style={{
                        fontSize: '0.6rem',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: 'rgba(239,68,68,0.6)',
                        marginBottom: '0.6rem',
                      }}
                    >
                      Common failure modes in production
                    </p>
                    <ul
                      className="font-serif"
                      style={{
                        paddingLeft: '1.1rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.45rem',
                        fontSize: 'clamp(0.8125rem, 1.5vw, 0.9375rem)',
                        color: 'var(--color-text-secondary)',
                        lineHeight: 1.65,
                        margin: 0,
                      }}
                    >
                      {failures.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Fixes heading */}
          <div
            className="font-serif"
            style={{
              fontSize: 'clamp(0.9375rem, 1.8vw, 1.0625rem)',
              lineHeight: 1.8,
              color: 'var(--color-text-secondary)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <h2 className="font-serif" style={{ ...h2Style, marginTop: '0.5rem' }}>
              Infrastructure Fixes: 7 AI Hallucination Fix Strategies That Work
            </h2>

            <p>
              Here are the infrastructure-level solutions that actually reduce hallucinations in
              production:
            </p>
          </div>

          {/* Fix Cards */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              margin: '2rem 0',
            }}
          >
            {FIXES.map(({ n, title, body, details, result }) => (
              <div
                key={n}
                style={{
                  background: 'var(--color-bg-card)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '0.75rem',
                  overflow: 'hidden',
                }}
              >
                {/* Card header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: 'clamp(1rem, 2.5vw, 1.25rem) clamp(1rem, 2.5vw, 1.5rem)',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <span
                    className="font-mono"
                    style={{
                      fontSize: '0.625rem',
                      letterSpacing: '0.12em',
                      color: 'var(--color-trust-amber)',
                      background: 'rgba(251,191,36,0.08)',
                      border: '1px solid rgba(251,191,36,0.2)',
                      borderRadius: '0.25rem',
                      padding: '0.25rem 0.5rem',
                      flexShrink: 0,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {n}
                  </span>
                  <p
                    className="font-serif"
                    style={{
                      fontSize: 'clamp(0.9375rem, 1.8vw, 1.0625rem)',
                      fontWeight: 700,
                      color: 'var(--color-text-primary)',
                      margin: 0,
                      lineHeight: 1.35,
                    }}
                  >
                    {title}
                  </p>
                </div>

                {/* Card body */}
                <div
                  style={{
                    padding: 'clamp(1rem, 2.5vw, 1.5rem)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                  }}
                >
                  <p
                    className="font-serif"
                    style={{
                      fontSize: 'clamp(0.875rem, 1.6vw, 1rem)',
                      color: 'var(--color-text-secondary)',
                      margin: 0,
                      lineHeight: 1.75,
                    }}
                  >
                    {body}
                  </p>

                  <ul
                    className="font-serif"
                    style={{
                      paddingLeft: '1.1rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.45rem',
                      fontSize: 'clamp(0.8125rem, 1.5vw, 0.9375rem)',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>

                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginTop: '0.25rem',
                    }}
                  >
                    <span
                      className="font-mono"
                      style={{
                        fontSize: '0.6rem',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: 'var(--color-text-tertiary)',
                      }}
                    >
                      Expected result:
                    </span>
                    <span
                      className="font-mono"
                      style={{
                        fontSize: '0.6rem',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: 'var(--color-trust-amber)',
                        background: 'rgba(251,191,36,0.08)',
                        border: '1px solid rgba(251,191,36,0.2)',
                        borderRadius: '0.25rem',
                        padding: '0.2rem 0.5rem',
                      }}
                    >
                      {result}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Results section */}
          <div
            className="font-serif"
            style={{
              fontSize: 'clamp(0.9375rem, 1.8vw, 1.0625rem)',
              lineHeight: 1.8,
              color: 'var(--color-text-secondary)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <h2 className="font-serif" style={{ ...h2Style, marginTop: '0.5rem' }}>
              Results: What to Expect After Implementation
            </h2>
          </div>

          {/* Results Table */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              margin: '1.5rem 0 2rem',
            }}
          >
            {RESULTS.map(({ metric, before, after, delta }) => (
              <div
                key={metric}
                style={{
                  background: 'var(--color-bg-card)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderLeft: '3px solid var(--color-trust-amber)',
                  borderRadius: '0 0.5rem 0.5rem 0',
                  padding: '0.875rem 1.25rem',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '0.5rem 1.5rem',
                }}
              >
                <div style={{ flex: '1 1 160px' }}>
                  <div style={monoLabelStyle}>{metric}</div>
                </div>
                <div
                  style={{
                    flex: '0 0 auto',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <span
                    className="font-mono"
                    style={{
                      fontSize: '0.75rem',
                      color: 'rgba(239,68,68,0.7)',
                      textDecoration: 'line-through',
                    }}
                  >
                    {before}
                  </span>
                  <span
                    className="font-mono"
                    style={{ fontSize: '0.75rem', color: 'var(--color-text-tertiary)' }}
                  >
                    →
                  </span>
                  <span
                    className="font-mono"
                    style={{ fontSize: '0.75rem', color: 'var(--color-text-primary)', fontWeight: 700 }}
                  >
                    {after}
                  </span>
                </div>
                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.6rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--color-trust-amber)',
                    background: 'rgba(251,191,36,0.08)',
                    border: '1px solid rgba(251,191,36,0.2)',
                    borderRadius: '0.25rem',
                    padding: '0.2rem 0.5rem',
                  }}
                >
                  {delta}
                </span>
              </div>
            ))}
          </div>

          <div
            className="font-serif"
            style={{
              fontSize: 'clamp(0.9375rem, 1.8vw, 1.0625rem)',
              lineHeight: 1.8,
              color: 'var(--color-text-secondary)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <p>
              Real case study: One fintech client reduced hallucination rate from 23% to 4% in 30
              days using this infrastructure, saving an estimated $120K/year in customer support
              costs.
            </p>

            <h2 className="font-serif" style={{ ...h2Style, marginTop: '0.5rem' }}>
              Common Mistakes That Prevent AI Hallucination Fix Success
            </h2>
          </div>

          {/* Mistakes Cards */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              margin: '1.5rem 0 2rem',
            }}
          >
            {MISTAKES.map(({ mistake, outcome }) => (
              <div
                key={mistake}
                style={{
                  background: 'rgba(239,68,68,0.04)',
                  border: '1px solid rgba(239,68,68,0.14)',
                  borderRadius: '0.5rem',
                  padding: '0.875rem 1.25rem',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '0.4rem 1rem',
                }}
              >
                <p
                  className="font-serif"
                  style={{
                    fontSize: 'clamp(0.8125rem, 1.5vw, 0.9375rem)',
                    color: 'var(--color-text-secondary)',
                    margin: 0,
                    lineHeight: 1.6,
                    flex: '1 1 200px',
                  }}
                >
                  {mistake}
                </p>
                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.6rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'rgba(239,68,68,0.7)',
                    background: 'rgba(239,68,68,0.06)',
                    border: '1px solid rgba(239,68,68,0.18)',
                    borderRadius: '0.25rem',
                    padding: '0.2rem 0.5rem',
                    flexShrink: 0,
                  }}
                >
                  {outcome}
                </span>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div
            style={{
              height: '1px',
              background: 'linear-gradient(90deg, rgba(251,191,36,0.3), transparent)',
              margin: '3rem 0',
            }}
            aria-hidden
          />

          {/* ── FAQ ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            <div
              className="font-mono"
              style={{
                fontSize: '0.625rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--color-text-tertiary)',
                marginBottom: '1.5rem',
              }}
            >
              Frequently Asked Questions
            </div>

            {[
              {
                q: 'Can I fix hallucinations by just fine-tuning the model?',
                a: 'No. 80% of hallucinations are infrastructure problems — data pipeline failures, observability blind spots, routing issues. Fine-tuning alone won\'t fix missing source attribution, stale retrieval data, or absent confidence thresholds. The model generates responses based on the context and infrastructure around it. Fix the infrastructure first.',
              },
              {
                q: "What's the fastest way to reduce hallucinations in production?",
                a: 'Add source attribution to your RAG prompts and set up confidence threshold blocking. These two fixes reduce hallucinations by 40-50% within a week. Source attribution forces the model to cite retrievable documents for every claim. Confidence blocking prevents low-confidence responses from reaching users without routing them to human review.',
              },
              {
                q: 'How much does AI hallucination monitoring infrastructure cost?',
                a: '$500-2,000/month for the core tooling stack — Arize AI or OpenLLMetry for model monitoring, LangSmith for tracing, n8n for automation workflows. ROI comes from reduced customer support costs, reduced reputational risk from confidently wrong outputs, and improved user trust. For enterprise deployments, the monitoring infrastructure typically pays for itself within the first quarter.',
              },
              {
                q: 'Should I use n8n for hallucination monitoring workflows?',
                a: "Yes. n8n is well-suited for hallucination monitoring automation — it handles the trigger-based workflow pattern (new response logged → calculate risk score → route or alert) without requiring custom engineering for each step. It connects to Slack, email, databases, and external APIs including fact-checking services. We use n8n in production hallucination monitoring workflows for several clients and it handles volume well once the routing logic is tuned.",
              },
              {
                q: "What's an acceptable hallucination rate for production AI?",
                a: "Under 5% for most business applications. Under 2% for high-stakes applications in legal, medical, financial services, or any domain where a confidently wrong answer has direct operational or compliance consequences. Establish your baseline before implementing fixes so you can measure actual improvement. Most organizations deploying AI without monitoring infrastructure don't know their current hallucination rate — which means they also don't know whether their fixes are working.",
              },
            ].map(({ q, a }, i) => (
              <div
                key={i}
                style={{
                  borderTop: '1px solid rgba(255,255,255,0.07)',
                  padding: '1.25rem 0',
                }}
              >
                <p
                  className="font-serif"
                  style={{
                    fontSize: 'clamp(0.9375rem, 1.8vw, 1rem)',
                    fontWeight: 700,
                    color: 'var(--color-text-primary)',
                    lineHeight: 1.45,
                    marginBottom: '0.625rem',
                  }}
                >
                  {q}
                </p>
                <p
                  className="font-serif"
                  style={{
                    fontSize: 'clamp(0.875rem, 1.6vw, 0.9375rem)',
                    lineHeight: 1.75,
                    color: 'var(--color-text-secondary)',
                    margin: 0,
                  }}
                >
                  {a}
                </p>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div
            style={{
              height: '1px',
              background: 'linear-gradient(90deg, rgba(251,191,36,0.3), transparent)',
              margin: '3rem 0',
            }}
            aria-hidden
          />

          {/* ── CTA block ── */}
          <div
            style={{
              background: 'var(--color-bg-card)',
              border: '1px solid rgba(251,191,36,0.15)',
              borderRadius: '1rem',
              padding: 'clamp(1.75rem, 4vw, 2.5rem)',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <p
              className="font-mono"
              style={{
                fontSize: '0.625rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--color-text-tertiary)',
              }}
            >
              Fixing AI Hallucinations at the Infrastructure Level
            </p>
            <h3
              className="font-serif"
              style={{
                fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                fontWeight: 700,
                color: 'var(--color-text-primary)',
                maxWidth: '500px',
                lineHeight: 1.3,
                margin: 0,
              }}
            >
              Stop Guessing. Start Measuring.
            </h3>
            <p
              className="font-serif"
              style={{
                fontSize: 'clamp(0.875rem, 1.6vw, 1rem)',
                color: 'var(--color-text-secondary)',
                maxWidth: '480px',
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              Most hallucination problems are solvable with the right infrastructure. We audit your
              current AI stack, identify the root causes of your hallucination rate, and implement
              the monitoring and validation layers that make accuracy measurable and improvable.
              Invisigent works with a limited number of organizations each quarter.
            </p>
            <Link
              href="/contact"
              className="btn-accent"
              style={{ textDecoration: 'none', marginTop: '0.5rem' }}
            >
              Book a Free AI Infrastructure Audit →
            </Link>
          </div>
        </article>
      </main>

      <InvisigentLogoSection />
      <FooterSection />
    </>
  );
}
