import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FooterSection, InvisigentLogoSection } from '@/app/components';
import Breadcrumb from '@/app/components/Breadcrumb';

const SLUG = 'proxy-for-ai-agents';
const CANONICAL = `https://invisigent.ai/insights/${SLUG}`;
const OG_IMAGE = 'https://invisigent.ai/blog-proxy-for-ai-agents.svg';
const PUBLISHED = '2026-10-24T10:00:00.000Z';
const TITLE = 'Proxy for AI Agents: Network Proxies, LLM Gateways, and MCP Gateways Explained';
const DESCRIPTION =
  'What is a proxy for AI agents? How network proxies, LLM proxies (AI gateways), and MCP tool gateways control how agents reach websites, models, and tools — with architecture, code examples, security best practices, and FAQs.';

const VIDEO_ID = 'AxQdBgvTuWE';
const VIDEO_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`;
const VIDEO_THUMB = `https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'proxy for AI agents',
    'AI agent proxy',
    'AI proxy',
    'LLM proxy',
    'LLM gateway',
    'AI gateway',
    'agent gateway',
    'MCP gateway',
    'MCP proxy',
    'A2A proxy',
    'network proxy for AI agents',
    'residential proxy for AI agents',
    'proxy server for AI',
    'forward proxy vs reverse proxy',
    'AI agent security',
    'AI agent policy enforcement',
    'AI agent rate limiting',
    'LLM routing and fallback',
    'LLM cost tracking',
    'agentgateway',
    'Gravitee agent management',
    'AI agent architecture',
    'web scraping proxy for AI',
    'proxy for AI agents USA',
    'proxy for AI agents UK',
    'proxy for AI agents Australia',
    'proxy for AI agents India',
    'Invisigent AI consulting',
  ],
  authors: [{ name: 'Invisigent Research', url: 'https://invisigent.ai' }],
  creator: 'Invisigent',
  publisher: 'Invisigent',
  category: 'AI Agents',
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
      'A proxy for AI agents controls how an agent reaches the outside world. Network proxies govern web traffic, LLM gateways govern model traffic, and MCP gateways govern tool calls. The agent decides — the gateway enforces.',
    url: CANONICAL,
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    authors: ['https://invisigent.ai'],
    section: 'AI Agents',
    tags: [
      'proxy for AI agents',
      'LLM gateway',
      'AI gateway',
      'MCP gateway',
      'AI agent security',
      'AI agent architecture',
    ],
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: TITLE, type: 'image/svg+xml' }],
    videos: [{ url: VIDEO_URL }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@invisigent_ai',
    creator: '@invisigent_ai',
    title: TITLE,
    description:
      'Network proxy vs LLM gateway vs MCP gateway — what each one controls, and why production AI agents need a policy layer between "decide" and "do".',
    images: [{ url: OG_IMAGE, alt: TITLE }],
  },
  other: {
    'geo.region': 'IN-RJ',
    'geo.placename': 'Jaipur, Rajasthan, India',
    'geo.position': '26.9124;75.7873',
    ICBM: '26.9124, 75.7873',
    'og:locale:alternate': 'en_GB,en_AU,en_IN',
    'article:published_time': PUBLISHED,
    'article:modified_time': PUBLISHED,
    'article:author': 'https://invisigent.ai',
    'article:section': 'AI Agents',
    'article:tag':
      'proxy for AI agents,LLM gateway,AI gateway,MCP gateway,AI agent security,AI agent architecture',
    'revisit-after': '7 days',
    rating: 'general',
    language: 'en',
    coverage: 'Worldwide',
    distribution: 'global',
    target: 'all',
    audience: 'AI engineers, agent platform teams, security architects, technical founders',
    'DC.coverage': 'United States, United Kingdom, Australia, India',
    'DC.language': 'en',
    'DC.subject':
      'Proxy for AI agents, network proxy, LLM proxy, AI gateway, MCP gateway, agent security, policy enforcement',
    'DC.publisher': 'Invisigent',
    'theme-color': '#0d0d0d',
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
    caption:
      'Proxy for AI agents architecture: an AI agent routes traffic through a network proxy, LLM gateway, and MCP tool gateway, with a policy check enforcing limits',
  },
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  wordCount: 3600,
  timeRequired: 'PT15M',
  author: { '@type': 'Organization', name: 'Invisigent Research', url: 'https://invisigent.ai' },
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
  articleSection: 'AI Agents',
  articleBody:
    'A proxy for AI agents is an intermediary that sits between an AI agent and the systems it reaches — websites, APIs, language model providers, and tools. Covers what a proxy is, why AI agents change the proxy problem, network proxies, LLM proxies and AI gateways, MCP and tool gateways, A2A proxies, policy enforcement, the trade-offs of centralized gateways, security risks, and a practical production architecture.',
  keywords:
    'proxy for AI agents, AI agent proxy, LLM proxy, LLM gateway, AI gateway, MCP gateway, agent gateway, AI agent security, policy enforcement',
  inLanguage: 'en',
  isPartOf: {
    '@type': 'Blog',
    '@id': 'https://invisigent.ai/insights#blog',
    name: 'AI Infrastructure Insights',
    publisher: { '@type': 'Organization', name: 'Invisigent' },
  },
  about: [
    { '@type': 'Thing', name: 'Proxy for AI agents' },
    { '@type': 'Thing', name: 'LLM gateway' },
    { '@type': 'Thing', name: 'Model Context Protocol gateway' },
    { '@type': 'Thing', name: 'AI agent security' },
  ],
  mentions: [
    { '@type': 'Organization', name: 'MDN Web Docs' },
    { '@type': 'Organization', name: 'Microsoft' },
    { '@type': 'Organization', name: 'Gravitee' },
    { '@type': 'Organization', name: 'Check Point Research' },
    { '@type': 'SoftwareApplication', name: 'agentgateway' },
    { '@type': 'SoftwareApplication', name: 'llm-d' },
  ],
  video: { '@id': `${CANONICAL}#video` },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2', 'blockquote'] },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invisigent.ai' },
      { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://invisigent.ai/insights' },
      { '@type': 'ListItem', position: 3, name: TITLE, item: CANONICAL },
    ],
  },
};

const videoSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  '@id': `${CANONICAL}#video`,
  name: 'How AI Agent Proxies Actually Work',
  description:
    'How proxies and gateways work for AI agents — from basic network proxies to LLM gateways, tool access, MCP, and policy enforcement. The agent decides. The gateway enforces.',
  thumbnailUrl: [VIDEO_THUMB],
  uploadDate: '2026-10-07T05:25:20-07:00',
  duration: 'PT6M52S',
  contentUrl: VIDEO_URL,
  embedUrl: `https://www.youtube.com/embed/${VIDEO_ID}`,
  publisher: {
    '@type': 'Organization',
    name: 'Invisigent',
    url: 'https://invisigent.ai',
    logo: { '@type': 'ImageObject', url: 'https://invisigent.ai/logo.png' },
  },
  hasPart: [
    ['Who Stops the AI Agent?', 0],
    ['What Is an AI Agent Proxy?', 21],
    ['What Is a Proxy?', 54],
    ['Why Agents Change the Problem', 96],
    ['Network Proxy vs AI Gateway', 128],
    ['What Is an LLM Gateway?', 146],
    ['AI Agents and Tools', 193],
    ['The $90 Refund Problem', 207],
    ['How a Gateway Enforces Policy', 242],
    ['Agent Decides. Gateway Enforces.', 269],
    ['Why Centralized Gateways Matter', 285],
    ['The Gateway Trade-off', 309],
    ['The One-Door Mental Model', 330],
    ['Real AI Agent Gateway Architecture', 355],
  ].map(([name, start], i, all) => ({
    '@type': 'Clip',
    name,
    startOffset: start,
    endOffset: i + 1 < all.length ? all[i + 1][1] : 412,
    url: `${VIDEO_URL}&t=${start}s`,
  })),
};

const FAQS = [
  {
    q: 'What is a proxy for AI agents?',
    a: 'A proxy for AI agents is an intermediary that sits between an AI agent and the systems it reaches — websites, APIs, language model providers, or tools. Instead of connecting directly, the agent sends requests through the proxy, which forwards them, returns the response, and can apply routing, authentication, rate limits, logging, and policy along the way.',
  },
  {
    q: 'What is the difference between a network proxy and an LLM proxy?',
    a: 'A network proxy controls how an agent reaches websites and APIs: which IP address and region it appears from, session persistence, and request rate. An LLM proxy (also called an AI gateway or LLM gateway) controls how an application reaches language models: one unified API across providers, credential management, model routing and fallback, quotas, cost tracking, and prompt or response policy checks.',
  },
  {
    q: 'What is an LLM gateway or AI gateway?',
    a: 'An LLM gateway is a proxy dedicated to model traffic. Your agent calls a single endpoint such as /v1/chat/completions, and the gateway decides which provider or self-hosted model serves the request, injects the right API key, enforces rate limits and budgets, logs the call, and fails over to another model if one is unavailable.',
  },
  {
    q: 'What is an MCP gateway?',
    a: 'An MCP gateway sits between AI agents and Model Context Protocol servers. It exposes approved tools to agents, authenticates and authorizes each tool call, applies policy to arguments (for example refund limits or allowed repositories), and records an audit trail. Projects such as agentgateway and platforms such as Gravitee Agent Management provide this layer alongside LLM and agent-to-agent (A2A) proxies.',
  },
  {
    q: 'Does a proxy make an AI agent smarter?',
    a: 'No. A proxy only changes the network path and the controls applied to it. It does not browse pages, click buttons, extract structured data, or decide what to do next. The agent decides; the browser or API client performs the action; the proxy controls the connection; the gateway enforces policy.',
  },
  {
    q: 'Why do AI agents need a different kind of proxy than normal apps?',
    a: 'Traditional applications make predictable, pre-programmed requests. AI agents decide at runtime which websites, models, and tools to call, with arguments generated by a model. That makes the proxy layer more than a router — it becomes the place to enforce what an agent is allowed to do, because the agent itself should not be the final authority on its own permissions.',
  },
  {
    q: 'What is the "agent decides, gateway enforces" principle?',
    a: 'It means separating reasoning from authorization. The agent can propose any action — for example a $90 refund — but the gateway checks that action against policy, such as a $50 refund limit, before anything executes. If the request violates policy it is denied or escalated for human approval, regardless of how confident the model was.',
  },
  {
    q: 'Should I use a residential proxy for my AI agent?',
    a: 'Residential and datacenter proxy networks are commonly used for location-specific search results, consistent sessions during multi-step browsing, and spreading request load. Use them only for legitimate access: respect robots.txt, website terms, authentication, and rate limits. A proxy should never be used to bypass access controls, and many workloads are better served by official search or data APIs.',
  },
  {
    q: 'What are the risks of a centralized AI gateway?',
    a: 'A single gateway gives you one place to enforce policy, manage credentials, track cost, and audit behavior — but it also becomes a single point of failure, a latency hop, and a high-value target. Mitigate this with high availability, low-overhead routing, strict access control on the gateway itself, and careful handling of the prompts and secrets that pass through it.',
  },
  {
    q: 'Can attackers abuse AI services as proxies?',
    a: 'Yes. Check Point Research has shown how web-based AI services with browsing capabilities can be turned into command-and-control relays, hiding malicious traffic inside legitimate-looking AI requests. This is one reason enterprises route agent and AI traffic through governed gateways with egress controls, monitoring, and allow-lists rather than letting agents connect anywhere.',
  },
  {
    q: 'How do I add a proxy to a Python AI agent?',
    a: 'For network traffic, pass a proxies dictionary to your HTTP client — for example requests.get(url, proxies={"https": "http://user:pass@proxy:8000"}). For model traffic, point your SDK base URL at your LLM gateway instead of the provider, so every call flows through one governed endpoint. Keep proxy credentials in environment variables or a secrets manager, never in source code.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

const h2Style = {
  fontSize: 'clamp(1.125rem, 2.5vw, 1.4rem)',
  fontWeight: 700,
  color: 'var(--color-text-primary)',
  marginBottom: '-0.25rem',
} as const;

const h3Style = {
  fontSize: 'clamp(1.05rem, 2.2vw, 1.2rem)',
  fontWeight: 700,
  color: 'var(--color-text-primary)',
  marginBottom: '-0.5rem',
} as const;

const bodyStyle = {
  fontSize: 'clamp(0.9375rem, 1.8vw, 1.0625rem)',
  lineHeight: 1.8,
  color: 'var(--color-text-secondary)',
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '1.5rem',
};

const codeBlockStyle = {
  margin: '0.25rem 0',
  background: 'var(--color-bg-card)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '0.75rem',
  padding: 'clamp(1.25rem, 3vw, 1.75rem)',
  overflowX: 'auto' as const,
  fontSize: 'clamp(0.6875rem, 1.4vw, 0.8125rem)',
  lineHeight: 1.7,
  color: 'var(--color-text-secondary)',
  whiteSpace: 'pre' as const,
};

const listStyle = {
  margin: 0,
  paddingLeft: '1.25rem',
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '0.6rem',
};

const cellStyle = {
  padding: '0.75rem 0.9rem',
  borderBottom: '1px solid rgba(255,255,255,0.07)',
  textAlign: 'left' as const,
  verticalAlign: 'top' as const,
};

const strong = { color: 'var(--color-text-primary)' };

function Quote({ children }: { children: ReactNode }) {
  return (
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
        {children}
      </p>
    </blockquote>
  );
}

const COMPARISON = [
  ['Network proxy', 'How the agent reaches websites and APIs', 'IP, region, session, rate'],
  ['LLM proxy / AI gateway', 'How the agent reaches language models', 'Keys, routing, fallback, cost'],
  ['MCP / tool gateway', 'Which tools the agent can use, and how', 'AuthZ, argument policy, audit'],
  ['A2A proxy', 'How agents delegate to other agents', 'Identity, scope, delegation'],
  ['Browser automation layer', 'Opens pages, clicks, types, keeps state', 'Rendering, DOM, cookies'],
  ['AI agent', 'Decides what to do and in what order', 'Reasoning, planning'],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      <Breadcrumb items={[{ label: 'Insights', href: '/insights' }, { label: TITLE }]} />
      <main style={{ background: 'var(--color-bg-primary)', minHeight: '100vh' }}>
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
            src="/blog-proxy-for-ai-agents.svg"
            alt="Proxy for AI agents architecture: an AI agent routes traffic through a network proxy, LLM gateway, and MCP tool gateway to websites, model providers, and tools, with a policy check enforcing limits"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center 50%' }}
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

        <article
          style={{
            maxWidth: '720px',
            margin: '0 auto',
            padding: 'clamp(2.5rem, 6vw, 4rem) clamp(1.25rem, 5vw, 2rem)',
          }}
        >
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
              AI Agents
            </span>
            <span
              className="font-mono"
              style={{
                fontSize: '0.625rem',
                letterSpacing: '0.12em',
                color: 'var(--color-text-tertiary)',
              }}
            >
              15 min read
            </span>
          </div>

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
            Proxy for AI Agents: Network Proxies, LLM Gateways, and MCP Gateways Explained
          </h1>

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
            The agent decides. The gateway enforces.
          </p>

          <div
            style={{
              height: '1px',
              background: 'linear-gradient(90deg, rgba(251,191,36,0.3), transparent)',
              marginBottom: '2rem',
            }}
            aria-hidden
          />

          <div className="font-serif" style={bodyStyle}>
            <div
              style={{
                background: 'var(--color-bg-card)',
                border: '1px solid rgba(251,191,36,0.15)',
                borderRadius: '0.75rem',
                padding: 'clamp(1.25rem, 3vw, 1.75rem)',
              }}
            >
              <p
                className="font-mono"
                style={{
                  fontSize: '0.625rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--color-trust-amber)',
                  margin: '0 0 0.85rem',
                }}
              >
                Quick Answer
              </p>
              <p style={{ margin: '0 0 0.85rem' }}>
                A <strong style={strong}>proxy for AI agents</strong> is an intermediary that sits
                between an AI agent and everything it reaches — websites, APIs, language models, and
                tools. It forwards the agent&apos;s requests and applies control along the way.
              </p>
              <ul style={{ ...listStyle, gap: '0.4rem' }}>
                <li>
                  <strong style={strong}>Network proxy</strong> — controls how the agent reaches the
                  web (IP, region, session, rate limits).
                </li>
                <li>
                  <strong style={strong}>LLM proxy / AI gateway</strong> — controls how the agent
                  reaches models (one API, keys, routing, fallback, cost).
                </li>
                <li>
                  <strong style={strong}>MCP / tool gateway</strong> — controls which tools the agent
                  can use and with what arguments (authorization, policy, audit).
                </li>
              </ul>
            </div>

            <p>
              Picture an AI agent with access to your GitHub organization, your production database,
              your payment system, a handful of MCP tools, and three different language model
              providers. A customer asks for a refund. The agent decides to issue a{' '}
              <strong style={strong}>$90 refund</strong>. Its limit is $50.
            </p>
            <Quote>Who stops it?</Quote>
            <p>
              Not the model. The model already decided the refund was reasonable. Something between
              the agent and the payment system has to check the request against policy and say no.
              That &quot;something in between&quot; is what people mean when they talk about a{' '}
              <strong style={strong}>proxy for AI agents</strong> — and it turns out to be one of
              the most important pieces of production agent architecture.
            </p>

            <h2 className="font-serif" style={{ ...h2Style, marginTop: '0.5rem' }}>
              What Is a Proxy?
            </h2>

            <p>
              A <strong style={strong}>proxy</strong> is an intermediary server between your
              application and the destination it wants to reach. Instead of connecting directly,
              your request goes to the proxy, which forwards it and returns the response. MDN Web
              Docs defines a proxy server as an intermediary that intercepts requests, forwards
              them, and returns responses; Microsoft Learn describes it as a component that sits
              between a client and a destination server, mediating communication on behalf of one
              side.
            </p>

            <pre className="font-mono" style={codeBlockStyle}>{`Without a proxy:   Application ───────────────→ Destination

With a proxy:      Application ──→ Proxy ──→ Destination
                                    │
                         route · inspect · log · enforce`}</pre>

            <p>
              The destination usually sees the proxy&apos;s IP address rather than yours. MDN
              distinguishes two broad shapes: a <strong style={strong}>forward proxy</strong> acts
              on behalf of clients reaching out to the internet, while a{' '}
              <strong style={strong}>reverse proxy</strong> or gateway sits in front of servers and
              handles traffic coming in. Most proxies for AI agents are forward proxies — they sit
              on the agent&apos;s side and govern what goes out.
            </p>

            <h2 className="font-serif" style={h2Style}>
              Why AI Agents Change the Proxy Problem
            </h2>

            <p>
              A traditional application makes predictable requests. A developer wrote the code, so
              you know which endpoints it calls, with which parameters, in which order.
            </p>
            <p>
              An AI agent is different. It decides <em>at runtime</em> which website to open, which
              model to call, which tool to invoke, and what arguments to pass — and those arguments
              are generated by a language model. The set of possible requests is no longer fixed in
              code.
            </p>

            <pre className="font-mono" style={codeBlockStyle}>{`AI agent → Proxy → Website / API / LLM provider / Tool`}</pre>

            <p>
              That shifts the job of the proxy. For a normal app, a proxy is mostly about
              networking. For an agent, the proxy layer becomes the natural place to answer harder
              questions: Which model should serve this request? Is this tool call allowed? Does this
              argument exceed a limit? Should a human approve it first?
            </p>

            <Quote>
              The agent should not be the final authority on what it is allowed to do.
            </Quote>

            <p>
              In practice, &quot;proxy for AI agents&quot; covers a few distinct layers. Two of
              them come up most often — the network proxy and the LLM proxy — and a third, the tool
              or MCP gateway, is quickly becoming just as important.
            </p>

            <h2 className="font-serif" style={h2Style}>
              1. Network Proxy for AI Agents
            </h2>

            <p>
              A network proxy controls an agent&apos;s access to the internet. When a research or
              browsing agent fetches pages, calls public APIs, or runs a headless browser, its HTTP
              traffic can be routed through a proxy rather than going out directly from your
              infrastructure.
            </p>

            <h3 className="font-serif" style={h3Style}>
              What a network proxy is useful for
            </h3>

            <ul style={listStyle}>
              <li>
                <strong style={strong}>Controlled egress</strong> — route browser or HTTP requests
                through known IPs so security teams can allow-list and monitor them.
              </li>
              <li>
                <strong style={strong}>Session consistency</strong> — keep the same IP across a
                multi-step browsing task so the site sees one coherent session.
              </li>
              <li>
                <strong style={strong}>Location-specific results</strong> — select a country or
                region when an agent needs localized search results, prices, or content.
              </li>
              <li>
                <strong style={strong}>Traffic management</strong> — spread and pace requests to
                stay within rate limits instead of hammering one endpoint.
              </li>
              <li>
                <strong style={strong}>Infrastructure separation</strong> — keep the agent&apos;s
                internal servers separate from public-facing requests.
              </li>
            </ul>

            <p>
              This is the use case most commercial &quot;AI proxy&quot; providers focus on.
              Developer educator Piyush Garg&apos;s video{' '}
              <a
                href="https://www.youtube.com/watch?v=9W3XpE9uGQ4"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--color-link)', textDecoration: 'underline' }}
              >
                The Ultimate Proxy for AI Agents
              </a>
              , for example, walks through a residential proxy network that pools tens of millions
              of IP addresses across countries so agents can browse without being throttled. Large
              IP pools like this are why browsing agents can gather location-aware data at scale —
              and also why they must be used responsibly.
            </p>

            <h3 className="font-serif" style={h3Style}>
              Example: routing an agent&apos;s HTTP requests through a proxy
            </h3>

            <pre className="font-mono" style={codeBlockStyle}>{`import os
import requests

PROXY_URL = os.environ["AGENT_PROXY_URL"]  # http://user:pass@proxy.example.com:8000

proxies = {
    "http": PROXY_URL,
    "https": PROXY_URL,
}

response = requests.get(
    "https://example.com",
    proxies=proxies,
    timeout=20,
)`}</pre>

            <p>
              Keep proxy credentials in environment variables or a secrets manager rather than in
              code. And remember the limits of this layer:
            </p>

            <Quote>
              A network proxy only changes the network path. It does not make the agent
              intelligent, browse pages, click buttons, or extract structured data by itself.
            </Quote>

            <p>
              Browsing and extraction are the job of the browser automation layer or a search API.
              Choosing between those options is a separate decision — and for many workloads an
              official search or data API is simpler and more reliable than browsing at all.
            </p>

            <h2 className="font-serif" style={h2Style}>
              2. LLM Proxy, AI Gateway, or LLM Gateway
            </h2>

            <p>
              The second meaning of &quot;proxy for AI agents&quot; has nothing to do with IP
              addresses. An <strong style={strong}>LLM proxy</strong> — also called an{' '}
              <strong style={strong}>AI gateway</strong> or <strong style={strong}>LLM gateway</strong>{' '}
              — sits between your agent and model providers such as OpenAI-compatible APIs,
              Anthropic, or self-hosted models.
            </p>

            <pre className="font-mono" style={codeBlockStyle}>{`AI agent → LLM gateway → Model provider A
                      ├──→ Model provider B
                      └──→ Self-hosted model`}</pre>

            <p>
              Instead of every agent holding its own API keys and calling providers directly, all
              model traffic flows through one endpoint:
            </p>

            <pre className="font-mono" style={codeBlockStyle}>{`http://llm-gateway/v1/chat/completions`}</pre>

            <h3 className="font-serif" style={h3Style}>
              What an LLM gateway centralizes
            </h3>

            <ul style={listStyle}>
              <li>
                <strong style={strong}>One unified API</strong> for multiple LLM providers, so
                agents are not coupled to a single vendor SDK.
              </li>
              <li>
                <strong style={strong}>Credential management</strong> — provider API keys live in
                the gateway, not in every agent.
              </li>
              <li>
                <strong style={strong}>Model routing</strong> — send a simple classification to a
                fast, inexpensive model and a complex reasoning step to a more capable one.
              </li>
              <li>
                <strong style={strong}>Fallback and failover</strong> — if a provider is down or
                rate-limited, retry on another.
              </li>
              <li>
                <strong style={strong}>Rate limits, quotas, and budgets</strong> per team, agent, or
                user.
              </li>
              <li>
                <strong style={strong}>Cost tracking</strong> — token usage attributed to the agent
                and workflow that caused it.
              </li>
              <li>
                <strong style={strong}>Logging and observability</strong> for every prompt and
                response.
              </li>
              <li>
                <strong style={strong}>Policy checks</strong> — redact sensitive data in prompts or
                block disallowed outputs.
              </li>
              <li>
                <strong style={strong}>Cloud and local switching</strong> — move a workload between
                hosted and self-hosted models without changing agent code.
              </li>
            </ul>

            <p>
              At the infrastructure level, projects such as <strong style={strong}>llm-d</strong>{' '}
              document the same pattern for self-hosted inference: the proxy accepts an inference
              request, selects an appropriate model server, routes the request, and streams the
              response back.
            </p>

            <h3 className="font-serif" style={h3Style}>
              Example: pointing an agent at an LLM gateway
            </h3>

            <pre className="font-mono" style={codeBlockStyle}>{`import os
from openai import OpenAI

# The agent talks to the gateway, not the provider.
# Provider keys, routing, and budgets live in the gateway.
client = OpenAI(
    base_url="http://llm-gateway/v1",
    api_key=os.environ["GATEWAY_TOKEN"],
)

reply = client.chat.completions.create(
    model="research-default",  # a gateway alias, not a vendor model id
    messages=[{"role": "user", "content": "Summarize this filing."}],
)`}</pre>

            <p>
              Using a gateway alias such as <code>research-default</code> lets the platform team
              change the underlying model, add fallback, or move to a cheaper provider without
              touching agent code.
            </p>

            <h2 className="font-serif" style={h2Style}>
              3. MCP and Tool Gateways: Where Policy Gets Real
            </h2>

            <p>
              Models produce text. Agents become dangerous — and useful — when they call{' '}
              <strong style={strong}>tools</strong>: create a pull request, run a SQL query, issue a
              refund, send an email. Increasingly those tools are exposed through the{' '}
              <strong style={strong}>Model Context Protocol (MCP)</strong>.
            </p>
            <p>
              Here is the trap: <em>having a tool does not mean every action with that tool is
              allowed</em>. An agent with a payments tool can technically refund any amount. An
              agent with database access can technically run <code>DELETE</code>. The tool
              definition describes what is possible, not what is permitted.
            </p>

            <h3 className="font-serif" style={h3Style}>
              The $90 refund problem
            </h3>

            <pre className="font-mono" style={codeBlockStyle}>{`Agent:    refund(order_id="A-1042", amount=90)
             ↓
Gateway:  policy → max_refund = 50
             ↓
Result:   DENIED — exceeds limit, escalated for human approval`}</pre>

            <p>
              An <strong style={strong}>MCP gateway</strong> (or tool gateway) sits between agents
              and tool servers. It authenticates the agent, checks whether that agent may use the
              tool at all, inspects the arguments against policy, and records what happened. The
              open-source <strong style={strong}>agentgateway</strong> project describes itself as
              an AI-native proxy for agent-to-LLM, agent-to-tool, and agent-to-agent communication,
              sitting between agents and MCP servers, A2A agents, or HTTP services to provide
              security, observability, governance, routing, and failover.{' '}
              <strong style={strong}>Gravitee Agent Management</strong> takes a similar approach
              with separate LLM, MCP, and A2A proxies for model traffic, tool calls, and
              agent-to-agent delegation.
            </p>

            <Quote>The agent decides. The gateway enforces.</Quote>

            <p>
              This is the core architectural principle. Reasoning and authorization are separated.
              The model can propose anything; only requests that pass policy actually execute. It is
              the same idea we describe in our guide to{' '}
              <Link
                href="/insights/ai-agent-harness"
                style={{ color: 'var(--color-link)', textDecoration: 'underline' }}
              >
                AI agent harnesses
              </Link>
              : permissions belong to the system around the model, not to the model itself.
            </p>

            <h2 className="font-serif" style={h2Style}>
              Watch: How AI Agent Proxies Actually Work
            </h2>

            <p>
              We walk through this whole picture — from basic network proxies to LLM gateways, MCP
              tools, and the $90 refund problem — in a short video:
            </p>

            <a
              href={VIDEO_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Watch How AI Agent Proxies Actually Work on YouTube"
              style={{
                position: 'relative',
                display: 'block',
                aspectRatio: '16/9',
                borderRadius: '0.75rem',
                overflow: 'hidden',
                border: '1px solid rgba(251,191,36,0.2)',
              }}
            >
              <img
                src={VIDEO_THUMB}
                alt="How AI Agent Proxies Actually Work — Invisigent video thumbnail"
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <span
                aria-hidden
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(0,0,0,0.35)',
                }}
              >
                <span
                  style={{
                    width: '4.25rem',
                    height: '4.25rem',
                    borderRadius: '50%',
                    background: 'rgba(251,191,36,0.92)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0d0d0d',
                    fontSize: '1.5rem',
                    paddingLeft: '0.25rem',
                  }}
                >
                  ▶
                </span>
              </span>
            </a>

            <p className="font-mono" style={{ fontSize: '0.75rem', margin: '-0.75rem 0 0' }}>
              6:52 · Chapters: what a proxy is · network proxy vs AI gateway · LLM gateways · the
              $90 refund problem · centralized gateway trade-offs · real gateway architecture
            </p>

            <h2 className="font-serif" style={h2Style}>
              Proxy vs Gateway vs Agent: Who Does What?
            </h2>

            <p>
              These terms get blurred together. A clean separation of responsibilities makes agent
              systems far easier to reason about:
            </p>

            <div style={{ overflowX: 'auto' }}>
              <table
                style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  fontSize: 'clamp(0.8125rem, 1.6vw, 0.9375rem)',
                  lineHeight: 1.55,
                }}
              >
                <thead>
                  <tr style={{ color: 'var(--color-text-primary)' }}>
                    <th style={cellStyle}>Component</th>
                    <th style={cellStyle}>Main purpose</th>
                    <th style={cellStyle}>Controls</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map(([component, purpose, controls]) => (
                    <tr key={component}>
                      <td style={{ ...cellStyle, ...strong, fontWeight: 600 }}>{component}</td>
                      <td style={cellStyle}>{purpose}</td>
                      <td style={cellStyle}>{controls}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Quote>
              The agent decides what to do. The browser or API client performs the action. The
              network proxy controls the connection. The LLM gateway controls access to models. The
              tool gateway controls what actions are permitted.
            </Quote>

            <h2 className="font-serif" style={h2Style}>
              Why Centralized Gateways Matter
            </h2>

            <p>
              Think of the gateway as <strong style={strong}>one door</strong>. Every request from
              every agent — to a model, a tool, or the web — passes through it. That single choke
              point is what makes governance possible:
            </p>

            <ul style={listStyle}>
              <li>One place to define and update policy for every agent</li>
              <li>One place to store and rotate credentials</li>
              <li>One audit trail showing what each agent requested and what was allowed</li>
              <li>One view of cost, latency, and error rates across providers</li>
              <li>One switch to cut off a misbehaving agent instantly</li>
            </ul>

            <p>
              Without a gateway, each agent embeds its own keys, its own retry logic, and its own
              idea of what it is allowed to do. That works for a demo. It does not survive an
              organization running dozens of agents.
            </p>

            <h2 className="font-serif" style={h2Style}>
              The Gateway Trade-off
            </h2>

            <p>A single door is also a single point of pressure. Centralization brings real costs:</p>

            <ul style={listStyle}>
              <li>
                <strong style={strong}>Single point of failure</strong> — if the gateway goes down,
                every agent goes down. Run it highly available.
              </li>
              <li>
                <strong style={strong}>Added latency</strong> — every call takes an extra hop. Keep
                policy evaluation fast and streaming paths lean.
              </li>
              <li>
                <strong style={strong}>High-value target</strong> — the gateway holds provider keys
                and sees every prompt. Lock down who can reach and configure it.
              </li>
              <li>
                <strong style={strong}>Policy drift</strong> — rules that are too loose let bad
                actions through; rules that are too strict break legitimate workflows. Version and
                test policy like code.
              </li>
            </ul>

            <h2 className="font-serif" style={h2Style}>
              Security: Proxies Are Not a Bypass Tool
            </h2>

            <p>
              A proxy should never be treated as a way to get around authentication, access
              restrictions, or a website&apos;s terms of service. In production it is better viewed
              as a <strong style={strong}>controlled infrastructure and security layer</strong>.
              Responsible agent browsing respects <code>robots.txt</code>, terms of use, rate
              limits, and login walls.
            </p>
            <p>
              The security picture also runs the other way. Check Point Research has shown how
              web-based AI services with browsing features can be abused as command-and-control
              relays — attackers hide malicious traffic inside requests that look like ordinary AI
              usage. For defenders, that is a strong argument for routing all agent and AI traffic
              through governed gateways with egress allow-lists, identity, and monitoring, rather
              than letting agents connect anywhere they like.
            </p>
            <p>
              Practical security checklist for an AI agent proxy layer:
            </p>
            <ul style={listStyle}>
              <li>Authenticate every agent to the gateway with its own identity</li>
              <li>Grant least-privilege tool access per agent, not per platform</li>
              <li>Validate tool arguments against policy before execution</li>
              <li>Require human approval for high-impact or irreversible actions</li>
              <li>Restrict outbound destinations with allow-lists where possible</li>
              <li>Redact secrets and personal data before they reach model providers</li>
              <li>Log every request and decision for audit and incident response</li>
            </ul>

            <h2 className="font-serif" style={h2Style}>
              A Practical Proxy Architecture for AI Agents
            </h2>

            <p>For a production AI research or operations agent, a robust design looks like this:</p>

            <pre className="font-mono" style={codeBlockStyle}>{`User
  ↓
Agent orchestrator
  ↓
Policy / tool gateway ──→ MCP servers, internal APIs, payments
  ↓
Network proxy ─────────→ Search APIs, websites
  ↓
LLM gateway ───────────→ Selected language model
  ↓
Observability (traces, cost, audit log)`}</pre>

            <p>
              Not every agent needs every layer on day one. A single internal agent calling one
              model may only need an LLM gateway for keys and cost tracking. A browsing agent adds a
              network proxy. An agent that can change real systems — code, data, money — needs a
              tool gateway with policy before it goes anywhere near production. And once the
              gateway is in place, its traces become the backbone of{' '}
              <Link
                href="/insights/ai-observability-for-production-ai-teams"
                style={{ color: 'var(--color-link)', textDecoration: 'underline' }}
              >
                AI observability for production teams
              </Link>
              .
            </p>

            <h2 className="font-serif" style={h2Style}>
              How to Choose a Proxy for Your AI Agent
            </h2>

            <ol style={{ ...listStyle, gap: '0.85rem' }}>
              <li>
                <strong style={strong}>Start with what the agent touches.</strong> Web pages? Models?
                Internal tools? Each needs a different layer.
              </li>
              <li>
                <strong style={strong}>For web access,</strong> prefer official APIs first; add a
                network proxy when you need controlled egress, regional results, or session
                consistency.
              </li>
              <li>
                <strong style={strong}>For model access,</strong> put an LLM gateway in front of all
                providers as soon as more than one agent or one provider is involved.
              </li>
              <li>
                <strong style={strong}>For tools,</strong> define policy per tool and per argument —
                limits, allowed resources, approval thresholds — and enforce it in a gateway.
              </li>
              <li>
                <strong style={strong}>Plan for failure.</strong> High availability, fallback models,
                timeouts, and a kill switch.
              </li>
              <li>
                <strong style={strong}>Measure everything.</strong> Latency added, requests denied,
                cost per workflow, and policy hits tell you whether the layer is working.
              </li>
            </ol>

            <h2 className="font-serif" style={h2Style}>
              Final Takeaway
            </h2>

            <p>
              &quot;Proxy for AI agents&quot; sounds like a networking detail. It is really a
              question about control: how does an autonomous system reach the outside world, and who
              decides what it is allowed to do when it gets there?
            </p>
            <p>
              The network proxy governs the connection. The LLM gateway governs the models. The tool
              gateway governs the actions. And across all three, one principle holds:
            </p>

            <pre className="font-mono" style={codeBlockStyle}>{`AGENT DECIDES  →  GATEWAY ENFORCES  →  SYSTEM ACTS`}</pre>

            <p>
              Get that separation right, and the $90 refund never happens — no matter how confident
              the model was.
            </p>
          </div>

          <div
            style={{
              height: '1px',
              background: 'linear-gradient(90deg, rgba(251,191,36,0.3), transparent)',
              margin: '3rem 0',
            }}
            aria-hidden
          />

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

            {FAQS.map(({ q, a }, i) => (
              <div
                key={i}
                style={{
                  borderTop: '1px solid rgba(255,255,255,0.07)',
                  padding: '1.25rem 0',
                }}
              >
                <h3
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
                </h3>
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

          <div
            style={{
              height: '1px',
              background: 'linear-gradient(90deg, rgba(251,191,36,0.3), transparent)',
              margin: '3rem 0',
            }}
            aria-hidden
          />

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
              Govern Your Agents
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
              Agents should decide. Your infrastructure should enforce.
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
              At Invisigent, we help teams design LLM gateways, MCP tool gateways, and policy layers
              that give production AI agents the access they need — and nothing they shouldn&apos;t
              have.
            </p>
            <Link
              href="/contact"
              className="btn-accent"
              style={{ textDecoration: 'none', marginTop: '0.5rem' }}
            >
              Talk to Us About Your Agent Gateway &rarr;
            </Link>
          </div>
        </article>
      </main>

      <InvisigentLogoSection />
      <FooterSection />
    </>
  );
}
