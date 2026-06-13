import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FooterSection, InvisigentLogoSection } from '@/app/components';
import Breadcrumb from '@/app/components/Breadcrumb';

const SLUG = 'n8n-ai-automation-tutorial';
const CANONICAL = `https://invisigent.ai/insights/${SLUG}`;
const OG_IMAGE = 'https://invisigent.ai/blog-n8n-ai-automation-tutorial.svg';
const PUBLISHED = '2026-06-14T10:00:00.000Z';
const TITLE = 'n8n AI Automation Tutorial: Complete Workflow Setup Guide (2026)';
const DESCRIPTION =
  'A complete guide to n8n AI automation in 2026. From Docker self-hosting to production AI agents with LangChain, MCP integration, and data-compliant setup for startups and technical teams in the US, UK, Australia, and India.';

export const metadata: Metadata = {
  title: `${TITLE} | Invisigent`,
  description: DESCRIPTION,
  keywords: [
    // Core product terms
    'n8n AI automation tutorial',
    'n8n workflow automation',
    'n8n AI agent',
    'n8n self-hosted',
    'n8n LangChain',
    'n8n 2.0',
    'n8n Docker setup',
    'n8n MCP integration',
    'n8n vs Zapier 2026',
    'n8n vs Make automation',
    'n8n PostgreSQL setup',
    'n8n AI agent node',
    'n8n LangChain nodes',
    'n8n Redis queue mode',
    'n8n production deployment',
    'n8n tutorial beginners',
    'build AI agent n8n',
    'n8n self-host Docker',
    // US market
    'n8n automation USA',
    'AI workflow automation United States',
    'n8n for US startups',
    'n8n enterprise automation US',
    'AI automation San Francisco',
    'AI automation New York',
    'workflow automation tool US 2026',
    'n8n vs Zapier for US companies',
    // UK market
    'n8n automation UK',
    'AI workflow automation United Kingdom',
    'n8n for UK startups',
    'n8n UK data residency',
    'AI automation London',
    'workflow automation UK 2026',
    'n8n GDPR compliant UK',
    'n8n enterprise UK',
    // Australia market
    'n8n automation Australia',
    'AI workflow automation Australia',
    'n8n for Australian startups',
    'AI automation Sydney',
    'AI automation Melbourne',
    'workflow automation tool Australia 2026',
    'n8n self-hosted Australia',
    'n8n vs Zapier Australia',
    // India market
    'n8n for Indian startups',
    'n8n DPDP compliance',
    'AI workflow automation India',
    'n8n fintech India',
    'n8n healthtech compliance',
    'workflow automation India',
    'n8n enterprise India',
    // General
    'Invisigent AI automation',
    'open source workflow automation 2026',
    'AI agent automation tool',
    'LangChain workflow automation',
    'self-hosted AI automation platform',
  ],
  authors: [{ name: 'Invisigent Research', url: 'https://invisigent.ai' }],
  creator: 'Invisigent',
  publisher: 'Invisigent',
  category: 'AI Automation',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: CANONICAL,
    languages: {
      'en-US': CANONICAL,
      'en-GB': CANONICAL,
      'en-AU': CANONICAL,
      'en-IN': CANONICAL,
    },
  },
  openGraph: {
    type: 'article',
    locale: 'en_US',
    siteName: 'Invisigent',
    title: TITLE,
    description:
      'From zero to production AI agents on n8n. Docker setup, LangChain nodes, MCP integration, and compliant self-hosting for technical teams in the US, UK, Australia, and India.',
    url: CANONICAL,
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    authors: ['https://invisigent.ai'],
    section: 'AI Automation',
    tags: [
      'n8n',
      'AI automation',
      'workflow automation',
      'LangChain',
      'AI agent',
      'n8n tutorial',
      'n8n Docker',
      'n8n self-hosted',
      'n8n 2026',
      'open source automation',
    ],
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 675,
        alt: 'n8n AI automation workflow diagram showing trigger, AI agent, LangChain nodes, cost comparison, and MCP integration for 2026',
        type: 'image/svg+xml',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@invisigent_ai',
    creator: '@invisigent_ai',
    title: TITLE,
    description:
      'Complete n8n setup guide for 2026. Self-host, build production AI agents, connect LangChain and MCP. For technical teams in the US, UK, Australia, and India.',
    images: [
      {
        url: OG_IMAGE,
        alt: 'n8n AI automation workflow diagram for 2026',
      },
    ],
  },
  other: {
    // Geo — primary location (publisher HQ)
    'geo.region': 'IN-RJ',
    'geo.placename': 'Jaipur, Rajasthan, India',
    'geo.position': '26.9124;75.7873',
    ICBM: '26.9124, 75.7873',
    // OG locale alternates for US / UK / AU / IN
    'og:locale:alternate': 'en_GB,en_AU,en_IN',
    // Article metadata
    'article:published_time': PUBLISHED,
    'article:modified_time': PUBLISHED,
    'article:author': 'https://invisigent.ai',
    'article:section': 'AI Automation',
    'article:tag': 'n8n,AI automation,workflow automation,LangChain,AI agent,self-hosted,Docker,MCP',
    // Crawl / indexing hints
    'revisit-after': '7 days',
    rating: 'general',
    language: 'en',
    coverage: 'Worldwide',
    distribution: 'global',
    target: 'all',
    // Audience signals
    audience: 'developers, technical founders, startup teams',
    'DC.coverage': 'United States, United Kingdom, Australia, India',
    'DC.language': 'en',
    'DC.subject': 'n8n AI automation, workflow automation, AI agents, LangChain',
    'DC.publisher': 'Invisigent',
    'DC.format': 'text/html',
    'DC.type': 'Text',
    // Misc
    'theme-color': '#0d0d0d',
    'mobile-web-app-capable': 'yes',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  '@id': `${CANONICAL}#article`,
  headline: TITLE,
  description: DESCRIPTION,
  image: {
    '@type': 'ImageObject',
    url: OG_IMAGE,
    width: 1200,
    height: 675,
    caption: 'n8n AI automation workflow with AI Agent node, LangChain tools, and cost comparison for Indian startups',
  },
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  wordCount: 4800,
  timeRequired: 'PT18M',
  author: {
    '@type': 'Organization',
    name: 'Invisigent Research',
    url: 'https://invisigent.ai',
    logo: { '@type': 'ImageObject', url: 'https://invisigent.ai/logo.png' },
  },
  publisher: {
    '@type': 'Organization',
    name: 'Invisigent',
    url: 'https://invisigent.ai',
    logo: { '@type': 'ImageObject', url: 'https://invisigent.ai/logo.png' },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Jaipur',
      addressRegion: 'Rajasthan',
      addressCountry: 'IN',
    },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL },
  articleSection: 'AI Automation',
  articleBody: 'n8n AI automation tutorial covering Docker self-hosting, AI agent setup with LangChain, MCP integration, DPDP compliance for Indian startups, and production workflow patterns.',
  keywords:
    'n8n AI automation tutorial, n8n workflow automation, n8n AI agent, n8n self-hosted, n8n LangChain, n8n MCP integration, n8n Docker setup, n8n vs Zapier 2026, n8n automation USA, n8n automation UK, n8n automation Australia, n8n for Indian startups, open source workflow automation 2026',
  inLanguage: 'en',
  isPartOf: {
    '@type': 'Blog',
    '@id': 'https://invisigent.ai/insights#blog',
    name: 'AI Infrastructure Insights',
    publisher: { '@type': 'Organization', name: 'Invisigent' },
  },
  about: [
    { '@type': 'Thing', name: 'n8n workflow automation' },
    { '@type': 'Thing', name: 'AI agent systems' },
    { '@type': 'Thing', name: 'LangChain integration' },
    { '@type': 'Thing', name: 'DPDP Act compliance' },
    { '@type': 'Thing', name: 'Docker deployment' },
  ],
  mentions: [
    { '@type': 'SoftwareApplication', name: 'n8n', applicationCategory: 'Workflow Automation' },
    { '@type': 'SoftwareApplication', name: 'Zapier', applicationCategory: 'Workflow Automation' },
    { '@type': 'SoftwareApplication', name: 'Make', applicationCategory: 'Workflow Automation' },
    { '@type': 'SoftwareApplication', name: 'Docker', applicationCategory: 'DevOps' },
    { '@type': 'SoftwareApplication', name: 'PostgreSQL', applicationCategory: 'Database' },
  ],
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2', 'blockquote'],
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invisigent.ai' },
      { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://invisigent.ai/insights' },
      { '@type': 'ListItem', position: 3, name: TITLE, item: CANONICAL },
    ],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${CANONICAL}#faq`,
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is n8n really free? What\'s the catch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Community Edition is permanently free to self-host. You pay for the server around ₹800 to ₹1,500 per month on a DigitalOcean droplet, nothing goes to n8n itself. The hosted Cloud version is paid, starting around ₹1,700 per month, and there is no permanent free cloud tier as of 2026.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Indian fintech and healthtech startups use n8n without violating DPDP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, if you self-host on Indian infrastructure. Self-hosted n8n on AWS Mumbai (ap-south-1), DigitalOcean Bangalore, or a managed Indian provider keeps all automation data within India and maps onto DPDP data fiduciary obligations.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to run AI workflows on n8n at scale?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The n8n infrastructure cost stays flat at your VPS price. At 10,000 workflow runs a month each calling GPT-4o-mini, expect roughly $8 to $12 in OpenAI costs. LLM routing between cheap and expensive models can cut LLM costs 60 to 70 percent on mixed-intent workloads.',
      },
    },
    {
      '@type': 'Question',
      name: 'n8n vs Zapier: which is better for an Indian startup?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For teams with at least one developer, expected growth past 5,000 runs a month, customer data that needs to stay in India, or plans to build AI agents, n8n is the better long-term choice. Zapier is faster to start for non-technical teams with simple automations.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between n8n AI Agent node and a Basic LLM Chain?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An LLM Chain sends input, gets output, the workflow continues in one call. An AI Agent reasons about which tool to call, calls it, reads the result, reasons again, and loops until it composes a final response. Use an LLM Chain when you know the transformation. Use an AI Agent when the right action depends on information the model has to retrieve first.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can n8n connect to Indian services like Razorpay or Shiprocket?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'n8n has 500+ built-in integrations but no native nodes for Razorpay or Shiprocket as of mid-2026. Both have well-documented REST APIs and the HTTP Request node connects to any REST API in about 15 minutes. Zoho has a native n8n node.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is n8n production-ready in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'n8n 2.0 launched in January 2026 is production-ready for most use cases. Task Runners sandbox code execution, PostgreSQL backend is stable, and RBAC, SSO, audit logs, and encrypted credentials are all present. Model-level observability and workflow governance require separate tooling.',
      },
    },
  ],
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

const COST_TABLE = [
  { option: 'Zapier Professional', cost: '~₹4,720', executions: '2,000 tasks', india: false },
  { option: 'n8n Cloud Starter', cost: '~₹1,700', executions: '2,500 executions', india: false },
  { option: 'n8n self-hosted (DO droplet)', cost: '~₹800–1,500', executions: 'Unlimited', india: true },
  { option: 'n8n managed (CloudMinister India)', cost: '~₹1,400', executions: 'Unlimited', india: true },
];

const FAQ = [
  {
    q: 'Is n8n really free? What\'s the catch?',
    a: 'The Community Edition is permanently free to self-host. You pay for the server — around ₹800–1,500/month on a DigitalOcean droplet — nothing goes to n8n itself. The hosted Cloud version is paid, starting around ₹1,700/month, and there\'s no permanent free cloud tier as of 2026. If you\'re comfortable with Docker, self-hosting is almost always the better deal.',
  },
  {
    q: 'Can Indian fintech and healthtech startups use n8n without violating DPDP?',
    a: 'Yes, if you self-host on Indian infrastructure. n8n Cloud routes data through European servers, which can conflict with data residency requirements under the DPDP Act. Self-hosted n8n on AWS Mumbai (ap-south-1), DigitalOcean Bangalore, or a managed Indian provider like CloudMinister keeps all automation data within India. You control the encryption keys, the log retention policy, and access, which maps cleanly onto DPDP\'s data fiduciary obligations.',
  },
  {
    q: 'How much does it cost to run AI workflows on n8n at scale?',
    a: 'The n8n infrastructure cost stays flat — it\'s just your VPS. What scales is your LLM API spend. At 10,000 workflow runs a month, each calling GPT-4o-mini for a short task (around 500 tokens in, 200 out), expect roughly $8–12 in OpenAI costs. GPT-4o for the same volume runs about $80–120. That gap is why LLM routing matters — using cheaper models for simpler queries can cut LLM costs 60–70% on mixed-intent workloads.',
  },
  {
    q: 'Is n8n production-ready, or still a developer toy?',
    a: 'n8n 2.0 (January 2026) is production-ready for most use cases. Task Runners sandbox code execution, the PostgreSQL backend is stable, and RBAC, SSO, audit logs, and encrypted credentials are all present. The caveats: model-level observability needs a separate tool, and workflow governance is on you.',
  },
  {
    q: 'n8n vs Zapier: which is better for an early-stage Indian startup?',
    a: 'Depends on your team. With zero technical co-founder and a need for automation live in hours for basic tasks, Zapier is faster to start. With at least one developer, expected growth past 5,000 runs a month, customer data that needs to stay in India, or plans to build AI agents, n8n is the better long-term call. Migrating from Zapier to n8n takes 4–6 weeks for a non-trivial stack, so it\'s worth starting right.',
  },
  {
    q: 'What\'s the difference between n8n\'s AI Agent node and a Basic LLM Chain?',
    a: 'LLM Chain: input goes in, the model generates output, the workflow continues. One call, no decisions. AI Agent: input goes in, the model reasons about what to do, picks a tool, calls it, reads the result, reasons again, maybe calls another tool, and eventually composes a final response. Use an LLM Chain when you know exactly what transformation you need. Use an AI Agent when the right action depends on information the model has to retrieve first.',
  },
  {
    q: 'Can n8n connect to Indian services like Razorpay or Shiprocket?',
    a: 'n8n has 500+ built-in integrations but no native nodes for Razorpay or Shiprocket as of mid-2026. Both have well-documented REST APIs, and the HTTP Request node connects to any REST API — it takes about 15 minutes to build a Razorpay webhook workflow that triggers on payment success and updates your CRM. Zoho has a native n8n node.',
  },
];

export default function BlogPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Breadcrumb
        items={[
          { label: 'Insights', href: '/insights' },
          { label: 'n8n AI Automation Tutorial (2026)' },
        ]}
      />
      <main style={{ background: 'var(--color-bg-primary)', minHeight: '100vh' }}>

        {/* Hero image */}
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
            src="/blog-n8n-ai-automation-tutorial.svg"
            alt="n8n AI automation workflow diagram showing trigger, AI agent, LangChain nodes, and MCP integration for 2026"
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

        {/* Article */}
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
              AI Automation
            </span>
            <span
              className="font-mono"
              style={{
                fontSize: '0.625rem',
                letterSpacing: '0.12em',
                color: 'var(--color-text-tertiary)',
              }}
            >
              18 min read
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
            n8n AI Automation Tutorial: Complete Workflow Setup Guide (2026)
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
            From Docker self-hosting to production AI agents, everything technical founders and developers
            need to run n8n in 2026, including DPDP-compliant setup for Indian teams.
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

          {/* Body */}
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

            {/* What is n8n */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <p style={monoLabelStyle}>What is n8n</p>
              <h2 className="font-serif" style={h2Style}>Open-source workflow automation with AI built in</h2>
            </div>

            <p>
              n8n (pronounced &ldquo;nodemation&rdquo;) is an open-source workflow automation tool. It
              connects apps, moves data between them, and automates repetitive tasks without much code.
            </p>

            <p>
              Instead of manually copying leads from a form into your CRM, writing follow-up emails, and
              updating a spreadsheet, n8n does all of that automatically — every time, the moment a form is
              submitted.
            </p>

            <p>
              What changed in 2026 is AI. You can drop an AI agent powered by GPT-4o, Claude, or Gemini
              directly inside a workflow. The agent reads context, makes decisions, calls APIs, and writes
              responses. This isn&apos;t a bolt-on summarizer. AI is part of the automation itself.
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
                n8n 2.0 launched in January 2026 with native LangChain integration, 70 AI-dedicated nodes,
                sandboxed code execution, persistent agent memory, and native MCP support.
              </p>
            </blockquote>

            {/* Why n8n in 2026 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem' }}>
              <p style={monoLabelStyle}>Why n8n in 2026</p>
              <h2 className="font-serif" style={h2Style}>Cost and capability both changed at once</h2>
            </div>

            <p>
              Two things shifted n8n&apos;s trajectory. n8n 2.0 moved it from
              &ldquo;developer-friendly Zapier clone&rdquo; to a real AI orchestration engine. The other was
              cost.
            </p>

            <p>
              Zapier charges per task, and every action in a workflow counts separately. A 10-step workflow
              running 1,000 times a month burns through 10,000 tasks. A self-hosted n8n instance running
              the same volume on an ₹800/month VPS still costs ₹800/month — no execution limits, no
              per-task charges, same software.
            </p>

            <p>
              Zapier Professional runs roughly ₹4,720/month with GST for 2,000 tasks. A self-hosted n8n on
              a basic DigitalOcean droplet handles most startup automation at ₹800–1,500/month total. Past
              10,000 runs a month, the economics aren&apos;t close.
            </p>

            {/* Comparison table */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem' }}>
              <p style={monoLabelStyle}>Tool Comparison</p>
              <h2 className="font-serif" style={h2Style}>n8n vs Zapier vs Make: which one should you pick?</h2>
            </div>

            <div style={{ overflowX: 'auto', margin: '0.5rem 0' }}>
              <table
                style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)',
                }}
              >
                <thead>
                  <tr>
                    {['', 'n8n', 'Zapier', 'Make'].map((h) => (
                      <th
                        key={h}
                        style={{
                          textAlign: 'left',
                          padding: '0.625rem 0.75rem',
                          borderBottom: '1px solid rgba(251,191,36,0.2)',
                          color: h === 'n8n' ? 'var(--color-trust-amber)' : 'var(--color-text-primary)',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.7rem',
                          letterSpacing: '0.1em',
                          fontWeight: 700,
                        }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Best for', 'Developers, technical founders', 'Non-technical teams', 'Mid-complexity visual'],
                    ['AI capability', '70+ LangChain nodes', 'Basic (Agents, Copilot)', 'Maia builder (beta)'],
                    ['Self-hosting', 'Yes, fully free', 'No', 'No'],
                    ['Cost at scale', '~₹1,500/mo self-hosted', '₹15,000–1,00,000+/mo', '₹3,000–8,000/mo'],
                    ['Data in India', 'Yes (if self-hosted)', 'No', 'No'],
                    ['Custom code', 'JavaScript + Python', 'No', 'Limited'],
                  ].map(([label, n8n, zapier, make], i) => (
                    <tr
                      key={label}
                      style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}
                    >
                      <td
                        style={{
                          padding: '0.6rem 0.75rem',
                          color: 'var(--color-text-tertiary)',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.7rem',
                          borderBottom: '1px solid rgba(255,255,255,0.04)',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {label}
                      </td>
                      {[n8n, zapier, make].map((val, j) => (
                        <td
                          key={j}
                          style={{
                            padding: '0.6rem 0.75rem',
                            color: j === 0 ? 'rgba(251,191,36,0.85)' : 'var(--color-text-secondary)',
                            fontSize: '0.85rem',
                            borderBottom: '1px solid rgba(255,255,255,0.04)',
                          }}
                        >
                          {val}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>
              If you&apos;re a non-technical team running simple tasks across standard SaaS tools, Zapier
              wins on ease. For developer-led teams doing AI-heavy work at volume, or with data residency
              requirements, n8n is the one to use.
            </p>

            {/* Part 1: Installation */}
            <div
              style={{
                height: '1px',
                background: 'linear-gradient(90deg, rgba(251,191,36,0.15), transparent)',
                margin: '0.5rem 0',
              }}
              aria-hidden
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <p style={monoLabelStyle}>Part 1: Getting Started</p>
              <h2 className="font-serif" style={h2Style}>Installing n8n: two options</h2>
            </div>

            <p>
              <strong style={{ color: 'var(--color-text-primary)' }}>Option A: n8n Cloud.</strong> Go to
              n8n.io, sign up, and you get a managed instance. There&apos;s a 14-day free trial. Starter
              is about ₹1,700/month for 2,500 executions. Good for testing. Expensive for production.
            </p>

            <p>
              <strong style={{ color: 'var(--color-text-primary)' }}>Option B: Self-hosting with Docker.</strong>{' '}
              Recommended. You need a Linux server. For Indian founders: DigitalOcean basic droplet
              (₹800–1,500/month), Hetzner Cloud (cheaper but Europe), or AWS Mumbai ap-south-1 (pricier,
              keeps data in India). Minimum: 2 vCPU and 4 GB RAM.
            </p>

            {/* Docker compose block */}
            <div
              style={{
                background: 'rgba(0,0,0,0.4)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '0.5rem',
                padding: '1.25rem 1.5rem',
                overflowX: 'auto',
              }}
            >
              <p
                style={{
                  ...monoLabelStyle,
                  marginBottom: '0.75rem',
                  color: 'var(--color-text-tertiary)',
                }}
              >
                docker-compose.yml (core config)
              </p>
              <pre
                style={{
                  margin: 0,
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  lineHeight: 1.7,
                  color: '#e2e8f0',
                  whiteSpace: 'pre',
                }}
              >{`services:
  postgres:
    image: postgres:16
    restart: unless-stopped
    environment:
      POSTGRES_USER: n8n
      POSTGRES_PASSWORD: change_this_password
      POSTGRES_DB: n8n
  n8n:
    image: docker.n8n.io/n8nio/n8n
    restart: unless-stopped
    ports:
      - "5678:5678"
    environment:
      - DB_TYPE=postgresdb
      - DB_POSTGRESDB_HOST=postgres
      - N8N_ENCRYPTION_KEY=a_random_32_char_key
      - EXECUTIONS_DATA_MAX_AGE=168
      - N8N_EDITOR_BASE_URL=https://n8n.yourdomain.com`}</pre>
            </div>

            <p>
              Two things worth flagging: use PostgreSQL from day one — migrating from the default SQLite
              later is painful. And set <code style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85em', color: 'var(--color-trust-amber)' }}>EXECUTIONS_DATA_MAX_AGE=168</code>{' '}
              (7 days) so execution logs don&apos;t balloon.
            </p>

            <p>
              Add Caddy as a reverse proxy for automatic HTTPS certificates. Don&apos;t expose port 5678
              directly to the internet.
            </p>

            {/* Part 2: First workflow */}
            <div
              style={{
                height: '1px',
                background: 'linear-gradient(90deg, rgba(251,191,36,0.15), transparent)',
                margin: '0.5rem 0',
              }}
              aria-hidden
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <p style={monoLabelStyle}>Part 2: First Workflow</p>
              <h2 className="font-serif" style={h2Style}>Gmail to AI summary to Slack in 5 nodes</h2>
            </div>

            <p>
              The fastest way to understand n8n is to build something real. This workflow watches Gmail for
              new emails, summarizes them with AI, and posts the summary to Slack. It covers the three
              building blocks behind most n8n workflows: a trigger, a transformation, and an action.
            </p>

            <ol style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <strong style={{ color: 'var(--color-text-primary)' }}>Gmail Trigger.</strong> Connect
                via OAuth2, set event to &ldquo;New Email Received,&rdquo; poll every 5 minutes.
              </li>
              <li>
                <strong style={{ color: 'var(--color-text-primary)' }}>OpenAI node.</strong> Resource:
                Chat, Model: gpt-4o. Prompt: &ldquo;Summarize this email in exactly 3 bullet points.
                Focus on what action is required, who it&apos;s from, and any deadline mentioned. Subject:{' '}
                <code style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85em' }}>{'{{ $json.subject }}'}</code>&rdquo;
              </li>
              <li>
                <strong style={{ color: 'var(--color-text-primary)' }}>Slack node.</strong> Connect your
                workspace, operation: Send message, channel: #email-summaries.
              </li>
              <li>
                <strong style={{ color: 'var(--color-text-primary)' }}>Test it.</strong> Click &ldquo;Test
                Workflow.&rdquo; n8n pulls a real email, runs OpenAI, posts to Slack. You see data flowing
                through each node in the execution panel.
              </li>
              <li>
                <strong style={{ color: 'var(--color-text-primary)' }}>Activate.</strong> It runs
                automatically in the background.
              </li>
            </ol>

            <p>
              The <code style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85em', color: 'var(--color-trust-amber)' }}>{'{{ $json.field }}'}</code> syntax
              is how n8n passes data between nodes. The Gmail trigger outputs the email as JSON, and this
              expression pulls specific fields into your prompt. Once that clicks, the rest of the system
              makes sense.
            </p>

            {/* Part 3: Node types */}
            <div
              style={{
                height: '1px',
                background: 'linear-gradient(90deg, rgba(251,191,36,0.15), transparent)',
                margin: '0.5rem 0',
              }}
              aria-hidden
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <p style={monoLabelStyle}>Part 3: How n8n Works</p>
              <h2 className="font-serif" style={h2Style}>The node types that matter</h2>
            </div>

            <p>
              <strong style={{ color: 'var(--color-text-primary)' }}>Trigger nodes</strong> start a
              workflow. They listen for something — a new email, a webhook call, a schedule, an incoming
              chat message.
            </p>

            <p>
              <strong style={{ color: 'var(--color-text-primary)' }}>Action nodes</strong> connect to
              external services — Google Sheets, Slack, Razorpay, HubSpot, Notion. n8n ships with 500+
              built-in integrations. The HTTP Request node covers anything not natively supported.
            </p>

            <p>
              <strong style={{ color: 'var(--color-text-primary)' }}>The AI Agent node</strong> is the
              most powerful primitive in 2026. It&apos;s not a simple GPT wrapper; it&apos;s an
              orchestration layer connecting an LLM to a set of tools. The agent reads input, decides which
              tool to call, calls it, reads the result, reasons about what to do next, and loops until it
              has enough to respond. This is the ReAct (reason and act) pattern as a visual node.
            </p>

            {/* Sub-node breakdown */}
            <div
              style={{
                background: 'var(--color-bg-card)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '0.75rem',
                padding: '1.25rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              <p style={{ ...monoLabelStyle, marginBottom: 0 }}>AI Agent sub-nodes</p>
              {[
                { label: 'Chat Model', desc: 'The LLM: OpenAI, Anthropic, Gemini, Groq, or local Ollama' },
                { label: 'Memory', desc: 'Stores conversation history. Use Postgres Chat Memory for production.' },
                { label: 'Tools', desc: 'APIs, databases, code, web search — anything the agent can call' },
              ].map(({ label, desc }) => (
                <div key={label} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      color: 'var(--color-trust-amber)',
                      background: 'rgba(251,191,36,0.08)',
                      border: '1px solid rgba(251,191,36,0.2)',
                      borderRadius: '0.25rem',
                      padding: '0.15rem 0.45rem',
                      whiteSpace: 'nowrap',
                      marginTop: '0.1rem',
                    }}
                  >
                    {label}
                  </span>
                  <span style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>{desc}</span>
                </div>
              ))}
            </div>

            {/* Part 4: AI Agent build */}
            <div
              style={{
                height: '1px',
                background: 'linear-gradient(90deg, rgba(251,191,36,0.15), transparent)',
                margin: '0.5rem 0',
              }}
              aria-hidden
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <p style={monoLabelStyle}>Part 4: Building an AI Agent</p>
              <h2 className="font-serif" style={h2Style}>Customer support agent with tools, memory, and escalation</h2>
            </div>

            <p>
              We&apos;re building a customer support agent that looks up orders, answers FAQs, and
              escalates to a human when it can&apos;t resolve something. This covers the full AI Agent
              pattern.
            </p>

            <p>
              <strong style={{ color: 'var(--color-text-primary)' }}>Step 1:</strong> Add a Chat Trigger.
              It creates a built-in interface for testing and generates a{' '}
              <code style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85em', color: 'var(--color-trust-amber)' }}>sessionId</code>{' '}
              for multi-turn conversations.
            </p>

            <p>
              <strong style={{ color: 'var(--color-text-primary)' }}>Step 2:</strong> Add an AI Agent
              node with a system prompt defining the agent&apos;s rules — which tools it has, when to
              escalate, how concise to be, and critically: never make up data it doesn&apos;t have.
            </p>

            <p>
              <strong style={{ color: 'var(--color-text-primary)' }}>Step 3:</strong> Attach an OpenAI
              Chat Model sub-node. Use gpt-4o for complex queries and gpt-4o-mini for simple FAQ lookups
              (more on routing below).
            </p>

            <p>
              <strong style={{ color: 'var(--color-text-primary)' }}>Step 4: Memory.</strong> Use
              Postgres Chat Memory for production, connected to your PostgreSQL instance with the session
              key set to{' '}
              <code style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85em', color: 'var(--color-trust-amber)' }}>
                {'{{ $(\'Chat Trigger\').item.json.sessionId }}'}
              </code>.
              Simple Memory (RAM) is lost on every restart.
            </p>

            <p>
              <strong style={{ color: 'var(--color-text-primary)' }}>Step 5: Tools.</strong> Add HTTP
              Request nodes as tools. The key syntax is{' '}
              <code style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85em', color: 'var(--color-trust-amber)' }}>
                {'$fromAI(\'identifier\', \'the order ID or customer email\')'}
              </code>
              . This tells the agent what data to extract and pass at runtime — the agent fills in these
              values based on its own reasoning.
            </p>

            <p>
              <strong style={{ color: 'var(--color-text-primary)' }}>Step 6:</strong> Add an IF node after
              the agent to catch escalation intent and route true to a Slack notification for your support
              team. Every tool call and result is visible in the execution log — one of n8n&apos;s biggest
              practical advantages over a custom-coded agent pipeline.
            </p>

            {/* Part 5: Production patterns */}
            <div
              style={{
                height: '1px',
                background: 'linear-gradient(90deg, rgba(251,191,36,0.15), transparent)',
                margin: '0.5rem 0',
              }}
              aria-hidden
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <p style={monoLabelStyle}>Part 5: Production Patterns</p>
              <h2 className="font-serif" style={h2Style}>Three workflow patterns that work at scale</h2>
            </div>

            {[
              {
                n: 'Pattern 1',
                title: 'LLM routing by query complexity',
                body: 'GPT-4o costs roughly 15× more than GPT-4o-mini per token. Add a classification step before the agent: a prompt that classifies each query as SIMPLE (order status, tracking, basic FAQ) or COMPLEX (complaints, refunds, billing disputes). Then route each to a different AI Agent node with the appropriate model. This alone typically cuts LLM costs by 60–70% on mixed-intent workflows.',
              },
              {
                n: 'Pattern 2',
                title: 'Confidence gate before irreversible actions',
                body: 'Don\'t let an AI agent take irreversible actions — sending emails, updating financial records, deleting data — without a confidence check. Add to the agent\'s system prompt: "Before any irreversible action, output a JSON block with action, confidence (0–100), and reasoning. Proceed only if confidence is 80 or above." Then an IF node routes low-confidence cases to a human review channel.',
              },
              {
                n: 'Pattern 3',
                title: 'Retry with exponential backoff',
                body: 'External APIs fail. Use the built-in "Continue on Error" toggle on HTTP nodes combined with a Code node implementing exponential backoff: 1s, 2s, 4s across 3 attempts. This is table-stakes reliability engineering for any workflow calling third-party APIs at volume.',
              },
            ].map(({ n, title, body }) => (
              <div
                key={n}
                style={{
                  background: 'var(--color-bg-card)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '0.75rem',
                  padding: '1.25rem 1.5rem',
                }}
              >
                <p style={{ ...monoLabelStyle, marginBottom: '0.4rem' }}>{n}</p>
                <h3
                  className="font-serif"
                  style={{
                    fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                    fontWeight: 700,
                    color: 'var(--color-text-primary)',
                    marginBottom: '0.6rem',
                  }}
                >
                  {title}
                </h3>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.75, color: 'var(--color-text-secondary)', margin: 0 }}>
                  {body}
                </p>
              </div>
            ))}

            {/* Part 6: India / DPDP */}
            <div
              style={{
                height: '1px',
                background: 'linear-gradient(90deg, rgba(251,191,36,0.15), transparent)',
                margin: '0.5rem 0',
              }}
              aria-hidden
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <p style={monoLabelStyle}>Part 6: Indian Startups</p>
              <h2 className="font-serif" style={h2Style}>Data residency and DPDP compliance</h2>
            </div>

            <p>
              Most global n8n tutorials skip this entirely. If you&apos;re building in India — fintech,
              healthtech, edtech, SaaS — data residency isn&apos;t optional. The Digital Personal Data
              Protection (DPDP) Act 2023, with rules notified in November 2025, applies to any
              organization processing digital personal data of Indian citizens. Full compliance obligations
              land by May 2027. The Consent Manager Framework becomes operational by November 2026.
            </p>

            <p>
              Zapier and Make store your workflow data on servers in the US or EU. Every customer record,
              API response, and email payload running through Zapier leaves India. Self-hosted n8n on Indian
              infrastructure keeps data in India — AWS Mumbai (ap-south-1), a DigitalOcean Bangalore droplet,
              or a managed Indian provider.
            </p>

            {/* Cost table */}
            <div style={{ overflowX: 'auto', margin: '0.5rem 0' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 'clamp(0.8rem, 1.5vw, 0.875rem)' }}>
                <thead>
                  <tr>
                    {['Option', 'Monthly cost (INR)', 'Executions', 'Data in India'].map((h) => (
                      <th
                        key={h}
                        style={{
                          textAlign: 'left',
                          padding: '0.625rem 0.75rem',
                          borderBottom: '1px solid rgba(251,191,36,0.2)',
                          color: 'var(--color-text-primary)',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.7rem',
                          letterSpacing: '0.08em',
                          fontWeight: 700,
                        }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COST_TABLE.map(({ option, cost, executions, india }, i) => (
                    <tr key={option} style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                      <td style={{ padding: '0.6rem 0.75rem', color: 'var(--color-text-secondary)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{option}</td>
                      <td style={{ padding: '0.6rem 0.75rem', color: india ? 'rgba(110,231,183,0.9)' : 'rgba(248,113,113,0.9)', borderBottom: '1px solid rgba(255,255,255,0.04)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>{cost}</td>
                      <td style={{ padding: '0.6rem 0.75rem', color: 'var(--color-text-secondary)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{executions}</td>
                      <td style={{ padding: '0.6rem 0.75rem', color: india ? 'rgba(110,231,183,0.9)' : 'rgba(248,113,113,0.9)', borderBottom: '1px solid rgba(255,255,255,0.04)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>{india ? 'Yes' : 'No'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>
              For fintech and healthtech handling Aadhaar data, PAN, bank statements, or health records,
              data residency makes self-hosted n8n the only option that holds up under DPDP regardless of
              volume.
            </p>

            {/* Part 7: MCP */}
            <div
              style={{
                height: '1px',
                background: 'linear-gradient(90deg, rgba(251,191,36,0.15), transparent)',
                margin: '0.5rem 0',
              }}
              aria-hidden
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <p style={monoLabelStyle}>Part 7: MCP Integration</p>
              <h2 className="font-serif" style={h2Style}>What changed in May 2026</h2>
            </div>

            <p>
              MCP (Model Context Protocol) is an open standard letting AI agents connect to external
              services through a standardized interface. n8n shipped native MCP support in May 2026.
            </p>

            <p>
              Before this, connecting an agent to Notion, Linear, or Monday.com meant manually configuring
              an MCP Client node with credentials, endpoint URLs, and auth flows. Now you pick the service
              from the nodes panel, authenticate once, and it&apos;s available as a tool.
            </p>

            <p>
              Current native MCP coverage includes Apify, Linear, Monday.com, Notion, and PostHog, with
              more being added continuously. If an agent needs to create Notion pages, update Linear issues,
              or read PostHog analytics, that&apos;s a two-minute addition now — no HTTP node configuration
              needed.
            </p>

            {/* Part 8: Scaling */}
            <div
              style={{
                height: '1px',
                background: 'linear-gradient(90deg, rgba(251,191,36,0.15), transparent)',
                margin: '0.5rem 0',
              }}
              aria-hidden
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <p style={monoLabelStyle}>Part 8: Scaling</p>
              <h2 className="font-serif" style={h2Style}>When you outgrow a single process</h2>
            </div>

            <p>
              By default, n8n runs all workflow executions in a single process. Under concurrent load —
              multiple workflows triggering at once, long-running AI agent calls — this becomes a
              bottleneck.
            </p>

            <p>
              The fix is queue mode with Redis. It separates the main process (UI and API) from worker
              processes, which scale horizontally. Add Redis to your docker-compose.yml, set{' '}
              <code style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85em', color: 'var(--color-trust-amber)' }}>EXECUTIONS_MODE=queue</code>{' '}
              on both the main instance and worker containers, and add more worker replicas as needed —
              each pulls jobs from the Redis queue independently.
            </p>

            {/* Part 9: Limits */}
            <div
              style={{
                height: '1px',
                background: 'linear-gradient(90deg, rgba(251,191,36,0.15), transparent)',
                margin: '0.5rem 0',
              }}
              aria-hidden
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <p style={monoLabelStyle}>Part 9: Limits</p>
              <h2 className="font-serif" style={h2Style}>What n8n won&apos;t solve for you</h2>
            </div>

            <p>
              n8n is workflow orchestration. It handles triggers, data flow, API calls, and LLM invocation.
              Here&apos;s what it doesn&apos;t handle.
            </p>

            {[
              {
                label: 'Model-level observability',
                body: "You won't know which prompt versions perform better, where latency spikes, or why an agent gave a wrong answer without a separate observability layer. Tools like LangFuse or Helicone sit alongside n8n for this.",
              },
              {
                label: 'Vector database management',
                body: 'n8n can call a vector DB as a tool, but building, chunking, embedding, and maintaining the knowledge base is separate infrastructure.',
              },
              {
                label: 'Workflow governance',
                body: 'Who approved this workflow? What data does it touch? n8n doesn\'t answer these. Build a workflow registry — even a Notion doc — before you have 50 active workflows.',
              },
              {
                label: 'Agent reliability engineering',
                body: 'The confidence gates, fallback chains, and circuit breakers from Part 5 aren\'t automatic. n8n gives you the primitives. The architecture is your job.',
              },
            ].map(({ label, body }) => (
              <div
                key={label}
                style={{
                  paddingLeft: '1rem',
                  borderLeft: '2px solid rgba(251,191,36,0.2)',
                  marginBottom: '0.25rem',
                }}
              >
                <p style={{ color: 'var(--color-text-primary)', fontWeight: 700, marginBottom: '0.25rem' }}>
                  {label}
                </p>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.75 }}>
                  {body}
                </p>
              </div>
            ))}

            <p>
              Teams that struggle with n8n in production usually treated it as a magic box. The ones that
              succeed treat it like any other production infrastructure: documentation, error handling,
              monitoring, clear ownership.
            </p>

          </div>

          {/* FAQ */}
          <div
            style={{
              height: '1px',
              background: 'linear-gradient(90deg, rgba(251,191,36,0.15), transparent)',
              margin: '3rem 0 2rem',
            }}
            aria-hidden
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <p style={monoLabelStyle}>FAQ</p>
            <h2 className="font-serif" style={h2Style}>n8n questions from Indian founders and technical teams</h2>
          </div>
          <div>
            {FAQ.map(({ q, a }, i) => (
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

          {/* CTA block */}
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
              n8n AI Infrastructure for Indian Teams
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
              Build AI Automation That Stays in India.
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
              We design and deploy production n8n AI automation stacks — self-hosted on Indian
              infrastructure, DPDP-compliant, with AI agents, observability, and governance built in from
              day one. Invisigent works with a limited number of teams each quarter.
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
