import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FooterSection, InvisigentLogoSection } from '@/app/components';
import Breadcrumb from '@/app/components/Breadcrumb';

const SLUG = 'anthropic-scion-source-control';
const CANONICAL = `https://invisigent.ai/insights/${SLUG}`;
const OG_IMAGE = 'https://invisigent.ai/blog-anthropic-scion-source-control.png';
const PUBLISHED = '2026-10-24T14:00:00.000Z';
const TITLE = 'Anthropic Scion: Why AI Agents Outgrew Git and What Replaced It';
const DESCRIPTION =
  'Scion is Anthropic’s agent-native version control system that replaced Git for its monorepo after merges jumped from 2,500 to 30,000 a day. Architecture, performance results, how Claude helped build it, and lessons for engineering teams.';

const ANTHROPIC_POST = 'https://www.anthropic.com/research/redesigning-source-control';

export const metadata: Metadata = {
  title: 'Anthropic Scion: Why AI Agents Outgrew Git',
  description: 'Scion is Anthropic’s agent-native version control system that replaced Git after merges hit 30,000 a day. Architecture, results, Claude’s role, and lessons.',
  keywords: [
    'Anthropic Scion',
    'Scion version control',
    'Scion source control',
    'Scion vs Git',
    'Git replacement',
    'agent-native version control',
    'source control for AI agents',
    'AI agents outgrew Git',
    'monorepo version control',
    'Git at scale',
    'Git mirrors scaling',
    'sparse checkout',
    'virtualized checkout',
    'server-side merges',
    'Google Cloud Spanner version control',
    'Antique code review',
    'Claude Mythos Preview',
    'Claude Code infrastructure',
    'Superfan Claude agents',
    'Sapling Mononoke',
    'Google Piper',
    'developer infrastructure for AI agents',
    'CI checkout performance',
    'Anthropic Scion USA',
    'Anthropic Scion UK',
    'Anthropic Scion Australia',
    'Anthropic Scion India',
    'Invisigent AI consulting',
  ],
  authors: [{ name: 'Invisigent Research', url: 'https://invisigent.ai' }],
  creator: 'Invisigent',
  publisher: 'Invisigent',
  category: 'AI Engineering',
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
      'When Claude-driven merges jumped 10x to 30,000 a day, Git became the bottleneck. How Anthropic built Scion — thin clients, server-side merges, Spanner-backed changesets — in five months with seven engineers.',
    url: CANONICAL,
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    authors: ['https://invisigent.ai'],
    section: 'AI Engineering',
    tags: [
      'Anthropic Scion',
      'version control',
      'Git',
      'AI agents',
      'developer infrastructure',
      'monorepo',
    ],
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: TITLE, type: 'image/png' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@invisigent_ai',
    creator: '@invisigent_ai',
    title: TITLE,
    description:
      '2,500 → 30,000 merges a day. 25M checkouts a day. 200x less infrastructure. What Anthropic’s Scion tells us about developer infrastructure in the age of coding agents.',
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
    'article:section': 'AI Engineering',
    'article:tag':
      'Anthropic Scion,version control,Git,AI agents,developer infrastructure,monorepo',
    'revisit-after': '7 days',
    rating: 'general',
    language: 'en',
    coverage: 'Worldwide',
    distribution: 'global',
    target: 'all',
    audience: 'Platform engineers, developer productivity teams, engineering leaders, AI engineers',
    'DC.coverage': 'United States, United Kingdom, Australia, India',
    'DC.language': 'en',
    'DC.subject':
      'Anthropic Scion, version control, Git scaling, AI coding agents, monorepo, developer infrastructure',
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
      'Anthropic Scion architecture: thin scn clients fetch trees and blobs on demand through scion-daemon, scion-cache, and scion-server backed by Spanner and blob storage',
  },
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  wordCount: 3400,
  timeRequired: 'PT14M',
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
  articleSection: 'AI Engineering',
  articleBody:
    'Scion is Anthropic’s in-house, agent-native version control system that replaced Git for its core monorepo after autonomous coding agents pushed merge volume from about 2,500 to over 30,000 per day. Covers why Git broke at agent scale, Scion’s architecture (thin scn client, scion-daemon, scion-cache, scion-server, Spanner and blob storage, changesets, derived data), performance results, how Claude Mythos Preview and Superfan agents helped build and operate it, the human role, and lessons for engineering teams.',
  keywords:
    'Anthropic Scion, Scion version control, Scion vs Git, agent-native version control, monorepo, Git scaling, AI coding agents, developer infrastructure',
  inLanguage: 'en',
  citation: [ANTHROPIC_POST],
  isPartOf: {
    '@type': 'Blog',
    '@id': 'https://invisigent.ai/insights#blog',
    name: 'AI Infrastructure Insights',
    publisher: { '@type': 'Organization', name: 'Invisigent' },
  },
  about: [
    { '@type': 'SoftwareApplication', name: 'Scion', applicationCategory: 'Version control system' },
    { '@type': 'Thing', name: 'Version control' },
    { '@type': 'Thing', name: 'AI coding agents' },
    { '@type': 'Thing', name: 'Developer infrastructure' },
  ],
  mentions: [
    { '@type': 'Organization', name: 'Anthropic' },
    { '@type': 'SoftwareApplication', name: 'Git' },
    { '@type': 'SoftwareApplication', name: 'Claude' },
    { '@type': 'SoftwareApplication', name: 'Google Cloud Spanner' },
    { '@type': 'SoftwareApplication', name: 'Sapling' },
    { '@type': 'Organization', name: 'GitHub' },
    { '@type': 'Organization', name: 'GitLab' },
  ],
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2', 'blockquote'] },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invisigent.ai' },
    { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://invisigent.ai/insights' },
    { '@type': 'ListItem', position: 3, name: TITLE, item: CANONICAL },
  ],
};

const FAQS = [
  {
    q: 'What is Anthropic Scion?',
    a: 'Scion is Anthropic’s in-house version control system, built to replace Git for the company’s core monorepo. It is agent-native and service-oriented: a thin, always-online client called scn fetches only the trees and file blobs it needs, while servers handle merges, rebases, ancestry, and blame. Anthropic described it in “Redesigning source control at Anthropic,” published October 13, 2026.',
  },
  {
    q: 'Why did Anthropic replace Git?',
    a: 'Autonomous coding agents drove merges to Anthropic’s monorepo from about 2,500 per day in May 2026 to more than 30,000 per day by September. With a main-branch history of almost 100 GB, compressed working copies over 25 GB, and roughly 25 million CI checkouts per day, Git’s offline, full-clone model and the fleet of several hundred Git mirrors needed to support it became the bottleneck.',
  },
  {
    q: 'How is Scion different from Git?',
    a: 'Git assumes clients work offline and hold a complete copy of the repository. Scion assumes clients are always online and only fetch what they need. Commits, rebases, and merges happen on the server, so there is nothing to push. Scion has no packfiles and no repository maintenance, stores changes as changesets in a write-ahead log, and computes history, blame, and ancestry server-side as derived data.',
  },
  {
    q: 'What performance gains did Scion deliver?',
    a: 'Anthropic reports that Scion needs roughly 200x less CPU and memory than its previous Git mirroring setup, makes CI and research checkouts about two orders of magnitude faster (seconds instead of minutes), freed about 25% of CI CPU capacity, and sustains cache hit rates above 99% at each caching tier.',
  },
  {
    q: 'What storage does Scion use?',
    a: 'File contents live in cloud blob storage, while changesets, refs, and derived data live in Google Cloud Spanner. A ref update is a compare-and-swap on a single Spanner row. Reads flow through a per-node scion-daemon, regional scion-cache servers, and authoritative scion-server instances.',
  },
  {
    q: 'How did Claude help build Scion?',
    a: 'A seven-person team built Scion, the Antique code review tool, and about half a dozen related systems, and migrated the monorepo in five months, using Claude Mythos Preview and Claude Tag. Claude rewrote the Git-to-Scion ingestion prototype to use 20x less memory and run 4x faster, found optimizations such as an ancestry query that missed an index, and resolves merge conflicts quickly. Claude “Superfan” instances each watch one component’s telemetry and logs.',
  },
  {
    q: 'What are Superfan Claude agents?',
    a: 'Superfans are Claude instances that Anthropic assigns to individual components — such as scion-daemon, scion-cache, and the Antique merge queue — to continuously review telemetry and logs. They catch subtle operational issues that conventional alerts may miss.',
  },
  {
    q: 'What is Antique?',
    a: 'Antique is Anthropic’s in-house code review tool, built alongside Scion by the same team. It includes the merge queue that Superfan agents monitor.',
  },
  {
    q: 'Did humans still review the code?',
    a: 'Yes. Humans review every change request to the system, but focus on intent rather than reading every line. Anthropic says engineers often had to tell Claude “no” when it violated system constraints or over-engineered for hypothetical risks, and that Claude’s adversarial reviews were useful but sometimes myopic.',
  },
  {
    q: 'Is Scion open source? Can I use it instead of Git?',
    a: 'No. Anthropic says Scion is not a general-purpose Git replacement and is tightly coupled to its own infrastructure, which makes it hard to offer in a broadly useful form. Instead, Anthropic is sharing its design so teams can adopt parts of it in Git-based systems, and plans to work with GitHub, GitLab, and the open-source community.',
  },
  {
    q: 'What inspired Scion’s design?',
    a: 'Anthropic credits Meta’s Sapling — specifically its server component, Mononoke, and its Bonsai data model — with pioneering many of the techniques used in Scion. It also cites Google’s Piper as prior art for large-scale, server-centric monorepo source control.',
  },
  {
    q: 'What should engineering teams learn from Scion?',
    a: 'When AI agents write most of the code, the bottleneck moves to infrastructure built for human scale — source control, builds, CI, and code review. Teams should measure checkout times, merge throughput, and CI wait, adopt sparse or partial checkouts, move expensive history queries server-side, and reshape code review around intent rather than line-by-line reading.',
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

const linkStyle = { color: 'var(--color-link)', textDecoration: 'underline' };

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

const STATS = [
  ['2,500 → 30,000+', 'merges per day, May → Sept 2026'],
  ['~25M', 'CI checkouts per day'],
  ['200×', 'less CPU and memory than Git mirrors'],
  ['Minutes → seconds', 'CI and research checkout time'],
  ['25%', 'CI CPU capacity reclaimed'],
  ['7 engineers · 5 months', 'to build and migrate'],
];

const COMPARISON = [
  ['Client model', 'Offline, full clone of history', 'Thin, always online, fetches on demand'],
  ['Working copy', 'Full tree materialized on disk', 'Sparse or virtualized checkouts'],
  ['Commits and merges', 'Local, then pushed', 'Server-side — nothing to push'],
  ['Storage format', 'Packfiles needing maintenance', 'Changesets + content-addressed blobs'],
  ['History, blame, ancestry', 'Computed locally per clone', 'Derived data computed server-side'],
  ['Ref updates', 'Ref locks on the server', 'Compare-and-swap on one Spanner row'],
  ['Scaling reads', 'Hundreds of Git mirrors', 'Daemon → regional cache → server tiers'],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
            src="/blog-anthropic-scion-source-control.svg"
            alt="Anthropic Scion architecture: thin scn clients and agents fetch trees and blobs on demand through scion-daemon, scion-cache, and scion-server backed by Spanner and blob storage"
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
              AI Engineering
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
            Anthropic Scion: Why AI Agents Outgrew Git and What Replaced It
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
            When agents write the code, the bottleneck moves to everything built for human scale.
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
              <p style={{ margin: 0 }}>
                <strong style={strong}>Scion</strong> is Anthropic&apos;s in-house,{' '}
                <strong style={strong}>agent-native version control system</strong> that replaced
                Git for its core monorepo in 2026. After Claude-powered coding agents pushed merges
                from about 2,500 to over 30,000 a day, Anthropic swapped Git&apos;s offline,
                full-clone model for thin always-online clients, server-side merges, and
                Spanner-backed storage — cutting infrastructure needs roughly{' '}
                <strong style={strong}>200x</strong> and checkout times from minutes to seconds. A
                seven-person team built it in five months, with Claude as a heavy collaborator.
              </p>
            </div>

            <p>
              For two decades, Git has been the default answer to &quot;how do we store and share
              code?&quot; It powers almost every open-source project and most companies. So when
              Anthropic published{' '}
              <a href={ANTHROPIC_POST} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                Redesigning source control at Anthropic
              </a>{' '}
              on October 13, 2026, explaining that it had moved its core monorepo off Git and onto a
              custom system called <strong style={strong}>Scion</strong>, it landed as more than an
              infrastructure footnote.
            </p>
            <p>
              The reason was not that Git is badly designed. It is that Git was designed for{' '}
              <em>humans</em>. Anthropic&apos;s engineers increasingly aren&apos;t the ones writing
              most of the code — autonomous agents built on Claude are. And agents use source control
              very differently.
            </p>

            <Quote>
              The bottleneck, now, is all of the developer infrastructure built for human scale.
            </Quote>

            <p>
              That line from Anthropic&apos;s post is the real story. Scion is what happens when an
              engineering organization takes that idea seriously.
            </p>

            <h2 className="font-serif" style={{ ...h2Style, marginTop: '0.5rem' }}>
              Scion at a Glance
            </h2>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 13rem), 1fr))',
                gap: '0.75rem',
              }}
            >
              {STATS.map(([value, label]) => (
                <div
                  key={label}
                  style={{
                    background: 'var(--color-bg-card)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '0.75rem',
                    padding: '1rem 1.1rem',
                  }}
                >
                  <div
                    style={{
                      fontSize: 'clamp(1.1rem, 2.4vw, 1.35rem)',
                      fontWeight: 700,
                      color: 'var(--color-trust-amber)',
                      lineHeight: 1.25,
                    }}
                  >
                    {value}
                  </div>
                  <div
                    className="font-mono"
                    style={{ fontSize: '0.75rem', lineHeight: 1.5, marginTop: '0.35rem' }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>

            <h2 className="font-serif" style={h2Style}>
              Why AI Agents Broke Git
            </h2>

            <p>
              Between May and September 2026, as internal adoption of coding agents like Claude Code
              accelerated, daily merges to Anthropic&apos;s monorepo grew more than tenfold — from
              roughly <strong style={strong}>2,500 to over 30,000 per day</strong>. Every one of
              those changes needs a checkout, a build, tests, and review.
            </p>

            <h3 className="font-serif" style={h3Style}>
              The numbers Git had to absorb
            </h3>

            <ul style={listStyle}>
              <li>
                <strong style={strong}>Repository size:</strong> the main branch&apos;s history was
                almost 100 GB, and a single compressed working copy exceeded 25 GB.
              </li>
              <li>
                <strong style={strong}>Checkout volume:</strong> about 25 million CI checkouts per
                day — before counting developer environments, agent sandboxes, and research jobs.
              </li>
              <li>
                <strong style={strong}>Network traffic:</strong> a naive fetch model at that volume
                would mean more than <strong style={strong}>600 petabytes</strong> of Git traffic per
                day.
              </li>
              <li>
                <strong style={strong}>Mirror sprawl:</strong> at peak, Anthropic ran several hundred
                internal Git mirrors just to keep up, and they got harder to operate as the merge rate
                climbed.
              </li>
            </ul>

            <h3 className="font-serif" style={h3Style}>
              Git&apos;s human-era assumptions
            </h3>

            <p>
              Git is a distributed system built on a simple premise: as Anthropic puts it, Git
              &quot;assumes that clients work offline and need a complete copy of the
              repository.&quot; That made perfect sense for humans on laptops who pull occasionally,
              commit locally, and push a few times a day.
            </p>
            <p>
              Agents break every part of that premise. They run in ephemeral sandboxes and CI jobs
              that start fresh, are always online, often need only a small slice of a huge monorepo,
              and produce changes around the clock. Cloning 100 GB of history so an agent can edit a
              handful of files is pure waste — multiplied millions of times a day. CI and agents were
              spending minutes simply getting a working directory.
            </p>

            <Quote>
              Git wasn&apos;t broken. It was optimized for a workload that no longer dominated.
            </Quote>

            <h2 className="font-serif" style={h2Style}>
              What Is Scion? An Agent-Native Version Control System
            </h2>

            <p>
              Scion flips Git&apos;s model. Instead of every client holding the full repository, the
              server holds the truth and clients fetch exactly what they need, when they need it.
            </p>

            <h3 className="font-serif" style={h3Style}>
              1. Thin, always-online client (scn)
            </h3>
            <p>
              The client is called <code>scn</code>. Its protocol negotiates only the trees and
              blobs a client actually wants, which makes{' '}
              <strong style={strong}>sparse and virtualized checkouts</strong> natural rather than an
              afterthought. An agent that needs three directories gets three directories.
            </p>

            <h3 className="font-serif" style={h3Style}>
              2. Changesets instead of commits-plus-packfiles
            </h3>
            <p>
              Scion&apos;s unit of work is a <strong style={strong}>changeset</strong> — an entry in
              a write-ahead log. Changesets are created server-side and record only the files that
              changed relative to the first parent, with content-addressed pointers to compressed
              blobs. There is no equivalent of Git&apos;s packfiles, so there is no repository
              maintenance to run.
            </p>

            <h3 className="font-serif" style={h3Style}>
              3. Server-side merges — nothing to push
            </h3>
            <p>
              Every commit, rebase, and merge happens on the server, so in Anthropic&apos;s words
              &quot;there&apos;s nothing to push.&quot; Anthropic also notes it has not replicated
              the industry-standard global repository lock on the merge queue; instead it leans on
              post-merge and pre-deploy testing. Concurrent changes can conflict, but Claude can
              typically fix those conflicts faster than humans can identify them.
            </p>

            <h3 className="font-serif" style={h3Style}>
              4. Derived data computed on the server
            </h3>
            <p>
              Because changesets store only diffs, everything else — the commit graph, blame, path
              history, copy detection, path-based file search — is{' '}
              <strong style={strong}>derived data</strong>, computed recursively from each
              changeset&apos;s parents and written back to storage. Anthropic mentions skip lists for
              the commit graph and dedicated structures for blame and path history, and each kind of
              derived data can be computed eagerly or deferred. Expensive history operations become
              fast server-side queries instead of local work repeated on every clone.
            </p>

            <h3 className="font-serif" style={h3Style}>
              5. Spanner, blob storage, and enforced tiers
            </h3>

            <pre className="font-mono" style={codeBlockStyle}>{`scn client (agent / CI / engineer)
        ↓
scion-daemon        one per node · shared object store
        ↓
scion-cache         regional · streams from memory · >99% hit rate
        ↓
scion-server        authoritative · merge, rebase, derived data
        ↓
Google Cloud Spanner (changesets, refs, derived data)
+ cloud blob storage (file contents)`}</pre>

            <p>
              File contents live in blob storage. Metadata lives in{' '}
              <strong style={strong}>Google Cloud Spanner</strong>, where a ref update is simply a
              compare-and-swap on a single row. Refs are used sparingly, and tiering is strictly
              enforced so that a failure in one layer stays isolated. Each caching tier maintains a
              hit rate above 99%.
            </p>

            <h2 className="font-serif" style={h2Style}>
              Scion vs Git: Side-by-Side
            </h2>

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
                    <th style={cellStyle}>Aspect</th>
                    <th style={cellStyle}>Git</th>
                    <th style={cellStyle}>Scion</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map(([aspect, git, scion]) => (
                    <tr key={aspect}>
                      <td style={{ ...cellStyle, ...strong, fontWeight: 600 }}>{aspect}</td>
                      <td style={cellStyle}>{git}</td>
                      <td style={cellStyle}>{scion}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="font-serif" style={h2Style}>
              The Results: 200x Less Infrastructure
            </h2>

            <ul style={listStyle}>
              <li>
                <strong style={strong}>~200x smaller footprint</strong> — CPU and memory needs
                compared with the previous Git mirroring setup.
              </li>
              <li>
                <strong style={strong}>Two orders of magnitude faster checkouts</strong> for CI and
                research — seconds instead of minutes.
              </li>
              <li>
                <strong style={strong}>25% CI CPU capacity reclaimed</strong>, simply by no longer
                burning compute on checkouts.
              </li>
              <li>
                <strong style={strong}>&gt;99% cache hit rate</strong> at each caching tier.
              </li>
              <li>
                <strong style={strong}>Rich access control</strong>, with permissions down to
                individual directories.
              </li>
            </ul>

            <p>
              Cheap, programmatic access to source control also unlocked companion automation that
              depends on it, such as automated bisect and revert pipelines.
            </p>

            <h2 className="font-serif" style={h2Style}>
              How Claude Helped Build Scion
            </h2>

            <p>
              The most striking detail is the team size. A core team of{' '}
              <strong style={strong}>seven engineers</strong> built Scion, the{' '}
              <strong style={strong}>Antique</strong> code review tool, and about half a dozen
              related systems, then completed the full monorepo migration in{' '}
              <strong style={strong}>five months</strong> — while merge volume grew roughly 10x
              underneath them. They worked with internal frontier models, including{' '}
              <strong style={strong}>Claude Mythos Preview</strong> and{' '}
              <strong style={strong}>Claude Tag</strong>.
            </p>

            <h3 className="font-serif" style={h3Style}>
              Implementation and optimization
            </h3>
            <p>
              Claude Mythos Preview rewrote the Git-to-Scion ingestion prototype, producing a version
              that used <strong style={strong}>20x less memory and ran 4x faster</strong> while
              preserving the existing ordering and data-structure invariants. Claude also found
              performance fixes humans had missed, such as an ancestry query that wasn&apos;t using
              one of the available indexes.
            </p>

            <h3 className="font-serif" style={h3Style}>
              &quot;Superfan&quot; agents for operations
            </h3>
            <p>
              Anthropic assigns dedicated Claude instances — <strong style={strong}>Superfans</strong>{' '}
              — to individual components such as <code>scion-daemon</code>,{' '}
              <code>scion-cache</code>, and the Antique merge queue. Each one watches its
              component&apos;s telemetry and logs and surfaces subtle issues that conventional alerts
              might never fire on. It is a practical example of the always-on monitoring we describe
              in{' '}
              <Link href="/insights/self-healing-ai-agents" style={linkStyle}>
                self-healing AI agents
              </Link>
              .
            </p>

            <h3 className="font-serif" style={h3Style}>
              Why humans still mattered
            </h3>
            <p>
              Anthropic is candid that Claude was not autonomous here. Engineers supplied design
              judgment and frequently had to tell Claude &quot;no&quot; when it violated system
              constraints or over-engineered for hypothetical risks. Claude&apos;s adversarial
              reviews were useful but sometimes myopic, so humans steered them. Every change request
              is still reviewed by a person — but the review focuses on{' '}
              <strong style={strong}>intent</strong> rather than reading every line.
            </p>

            <Quote>
              The engineer&apos;s job shifted from writing every line to judging design intent and
              knowing when to say no.
            </Quote>

            <p>
              That pattern — agents doing the heavy lifting inside a system of constraints, checks,
              and human approval — is exactly what we mean by an{' '}
              <Link href="/insights/ai-agent-harness" style={linkStyle}>
                AI agent harness
              </Link>
              .
            </p>

            <h2 className="font-serif" style={h2Style}>
              Standing on Sapling and Piper
            </h2>

            <p>
              Scion did not appear from nowhere. Anthropic credits Meta&apos;s{' '}
              <strong style={strong}>Sapling</strong> — specifically its server, Mononoke, and its
              Bonsai data model — with pioneering many of the techniques Scion uses, and points to
              Google&apos;s <strong style={strong}>Piper</strong> as prior art for huge,
              server-centric monorepos. What is new is the driver: those systems were built for
              tens of thousands of human engineers; Scion was built for agents.
            </p>

            <h2 className="font-serif" style={h2Style}>
              Is Scion Open Source? Can You Replace Git With It?
            </h2>

            <p>
              No. Anthropic says plainly that Scion is not a general-purpose Git replacement and is
              hard to offer in a broadly useful form, because it is tightly coupled to Anthropic&apos;s
              own infrastructure. Instead, Anthropic is sharing its design thinking so others can
              apply parts of it within Git-based systems, and plans to work with GitHub, GitLab, and
              the open-source community.
            </p>
            <p>
              Community engineers have already started experimenting — for example, the{' '}
              <a
                href="https://github.com/CarterT27/scion"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                CarterT27/scion
              </a>{' '}
              clean-room Rust implementation explores the architecture. Treat projects like this as
              learning tools, not drop-in production replacements.
            </p>

            <h2 className="font-serif" style={h2Style}>
              Lessons for Engineering Teams (Even If You Stay on Git)
            </h2>

            <p>
              Few companies merge 30,000 changes a day. But many are about to see agent-driven code
              volume multiply. Scion&apos;s design offers lessons that apply inside a Git workflow
              today:
            </p>

            <ol style={{ ...listStyle, gap: '0.85rem' }}>
              <li>
                <strong style={strong}>Measure the human-scale bottlenecks.</strong> Track checkout
                time, merge throughput, CI queue wait, and review latency — they move first when
                agents arrive.
              </li>
              <li>
                <strong style={strong}>Stop cloning everything.</strong> Use partial clones, shallow
                fetches, sparse checkouts, and shared object caches for CI and agent sandboxes.
              </li>
              <li>
                <strong style={strong}>Move expensive history queries server-side.</strong> Blame,
                ancestry, and code search are better served by indexed services than by every client.
              </li>
              <li>
                <strong style={strong}>Rethink merge queues.</strong> Global locks don&apos;t scale
                to agent volume; strong post-merge testing and fast automated fixes may.
              </li>
              <li>
                <strong style={strong}>Make source control programmable.</strong> Cheap API access
                powers automated bisect, revert, and agent workflows.
              </li>
              <li>
                <strong style={strong}>Redesign code review around intent.</strong> Humans can&apos;t
                read every line of agent output — they can judge whether the change does the right
                thing, within the right constraints.
              </li>
              <li>
                <strong style={strong}>Give agents operational roles.</strong> Component-level
                &quot;Superfan&quot; agents watching telemetry are a pattern any team can borrow, as
                long as they report to humans and are backed by solid{' '}
                <Link href="/insights/ai-observability-for-production-ai-teams" style={linkStyle}>
                  AI observability
                </Link>
                .
              </li>
            </ol>

            <h2 className="font-serif" style={h2Style}>
              Final Takeaway
            </h2>

            <p>
              Scion is not really a story about Git being obsolete. It is a story about where the
              bottleneck goes once AI agents make writing code cheap. At Anthropic, it went straight
              to source control — then to CI, then to code review.
            </p>

            <pre className="font-mono" style={codeBlockStyle}>{`Agents write code faster
        ↓
Human-scale infrastructure becomes the bottleneck
        ↓
Infrastructure gets redesigned for agents`}</pre>

            <p>
              Most teams will not build their own version control system. But almost every team
              adopting coding agents will eventually ask the same question Anthropic did: which parts
              of our developer infrastructure were quietly designed around the speed of a human
              typing?
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
            <h2
              className="font-mono"
              style={{
                fontSize: '0.625rem',
                fontWeight: 400,
                lineHeight: 1.6,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--color-text-tertiary)',
                marginBottom: '1.5rem',
              }}
            >
              Frequently Asked Questions
            </h2>

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
              Infrastructure for the Agent Era
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
              Is your developer platform ready for agent-scale code?
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
              At Invisigent, we help engineering teams find the human-scale bottlenecks in source
              control, CI, and code review — and redesign them for AI coding agents.
            </p>
            <Link
              href="/contact"
              className="btn-accent"
              style={{ textDecoration: 'none', marginTop: '0.5rem' }}
            >
              Talk to Us About Agent-Ready Infrastructure &rarr;
            </Link>
          </div>
        </article>
      </main>

      <InvisigentLogoSection />
      <FooterSection />
    </>
  );
}
