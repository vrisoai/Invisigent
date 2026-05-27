import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FooterSection, InvisigentLogoSection } from '@/app/components';
import Breadcrumb from '@/app/components/Breadcrumb';

const SLUG = 'ai-infrastructure-for-businesses-in-2026';
const CANONICAL = `https://invisigent.ai/insights/${SLUG}`;
const OG_IMAGE = 'https://invisigent.ai/blog-ai-infrastructure-2026.svg';
const PUBLISHED = '2026-05-27T10:00:00.000Z';
const TITLE = 'AI Infrastructure for Businesses in 2026';
const DESCRIPTION =
  'AI infrastructure has quietly become one of the most important conversations happening inside serious companies right now. It is no longer about buying cloud credits or plugging in a new tool.';

export const metadata: Metadata = {
  title: `${TITLE} | Invisigent`,
  description: DESCRIPTION,
  keywords: [
    'AI infrastructure',
    'AI workloads',
    'AI agents',
    'AI scaling',
    'AI automation',
    'enterprise AI',
    'AI-ready business',
    'cloud AI',
    'AI governance',
    'AI deployment',
    'AI systems',
    'AI operations',
    'AI architecture',
    'production AI',
    'Invisigent AI consulting',
  ],
  authors: [{ name: 'Invisigent', url: 'https://invisigent.ai' }],
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
      'The six infrastructure layers that determine whether AI runs as a business operation or falls apart under pressure — and what serious companies are building in 2026.',
    url: CANONICAL,
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    authors: ['https://invisigent.ai'],
    section: 'AI Infrastructure',
    tags: [
      'AI infrastructure',
      'enterprise AI',
      'AI agents',
      'AI governance',
      'production AI',
    ],
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: TITLE, type: 'image/svg+xml' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@invisigent_ai',
    creator: '@invisigent_ai',
    title: TITLE,
    description:
      'The six infrastructure layers that determine whether AI runs as a business operation or falls apart under pressure.',
    images: [{ url: OG_IMAGE, alt: TITLE }],
  },
  other: {
    'article:published_time': PUBLISHED,
    'article:modified_time': PUBLISHED,
    'article:author': 'https://invisigent.ai',
    'article:section': 'AI Infrastructure',
    'article:tag': 'AI infrastructure, enterprise AI, AI agents, AI governance, production AI',
    'geo.region': 'IN-RJ',
    'geo.placename': 'Jaipur, Rajasthan, India',
    'geo.position': '26.9124;75.7873',
    ICBM: '26.9124, 75.7873',
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
  author: { '@type': 'Organization', name: 'Invisigent', url: 'https://invisigent.ai' },
  publisher: {
    '@type': 'Organization',
    name: 'Invisigent',
    url: 'https://invisigent.ai',
    logo: { '@type': 'ImageObject', url: 'https://invisigent.ai/logo.png' },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL },
  articleSection: 'AI Infrastructure',
  keywords:
    'AI infrastructure, AI workloads, AI agents, AI scaling, AI automation, enterprise AI, AI-ready business, cloud AI, AI governance, AI deployment, AI systems, AI operations, AI architecture, production AI',
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

const SIX_LAYERS = [
  {
    n: '01',
    title: 'Clean Data',
    body: 'The hardest truth about AI is that it reflects the quality of the data behind it. If your business data is scattered across a dozen tools, inconsistently formatted, or never validated, the AI built on top of it will behave accordingly. Centralizing data, defining clear formats, and maintaining validation determines whether everything else is worth building.',
  },
  {
    n: '02',
    title: 'Reliable Compute',
    body: 'Cloud is still where most companies start — and for good reason. It makes GPUs accessible, allows fast experimentation, and removes upfront hardware cost. But cloud alone is not always the right answer. For workloads that demand low latency, handle sensitive data, or need to sit close to where the work happens, a hybrid or edge setup often makes more sense. The right choice depends on your specific workload, not on what is currently fashionable.',
  },
  {
    n: '03',
    title: 'Scalable Storage',
    body: 'Vector databases, data lakes, object storage — AI workloads generate and consume data at a volume that conventional storage architectures were not designed for. Scalable storage that is organized around retrieval speed and data lineage is foundational to every layer above it.',
  },
  {
    n: '04',
    title: 'Fast Networking',
    body: 'AI inference is latency-sensitive. A model that produces an answer in 150ms can become a bottleneck that stalls a workflow if the networking layer introduces hundreds of milliseconds of additional delay. Low-latency API routing, edge delivery, and efficient data transfer between compute and storage layers are infrastructure decisions that directly affect AI performance in production.',
  },
  {
    n: '05',
    title: 'Workflow Integration',
    body: 'AI does not run in isolation. It connects to CRMs, document systems, communication platforms, and business processes. Workflow integration — the orchestration layer that routes data between AI systems and the rest of the business — determines whether AI actually reduces friction or adds it. This is where most implementations struggle.',
  },
  {
    n: '06',
    title: 'Governance',
    body: 'As AI systems touch more internal and customer data, security stops being a technical afterthought and becomes a business requirement. That means access controls, secure storage, compliance-aware data handling, and clear policies for what AI is and is not allowed to do. Governance also matters for practical reasons: AI should support human decisions, not replace accountability.',
  },
];

const FAQ = [
  {
    q: 'What is AI infrastructure in simple terms?',
    a: 'AI infrastructure is the set of systems that let AI run inside a business, including data, compute, storage, security, and workflow automation. It is the foundation that makes AI useful in real operations.',
  },
  {
    q: 'Why do businesses need AI infrastructure in 2026?',
    a: 'Businesses need it because AI workloads are now more complex, more production-focused, and more dependent on clean data, scalable systems, and secure deployment. Without the right setup, AI tools become slow, unreliable, or expensive.',
  },
  {
    q: 'Do small businesses need AI infrastructure too?',
    a: 'Yes, but the setup can be lighter. A small business may only need structured data, cloud-based tools, automation workflows, and basic governance rather than a large enterprise stack.',
  },
  {
    q: 'What is the biggest mistake companies make with AI?',
    a: 'The biggest mistake is automating broken processes. AI cannot fix unclear workflows, poor data, or disorganized operations, so businesses should build systems first and automate second.',
  },
  {
    q: 'Should companies use cloud or on-premise AI?',
    a: 'Many start in cloud because it is faster and easier to scale, but some move toward hybrid or edge setups when latency, cost, or data control becomes important. The best choice depends on the workload and business requirements.',
  },
  {
    q: 'How do AI agents fit into infrastructure?',
    a: 'AI agents sit on top of infrastructure and need access to data, tools, APIs, and runtime controls to work safely. They are not standalone features — they depend on the whole system underneath them.',
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
          { label: 'AI Infrastructure for Businesses in 2026' },
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
            src="/blog-ai-infrastructure-2026.svg"
            alt="Six-layer AI infrastructure stack for businesses in 2026 showing data, compute, storage, networking, workflows and governance"
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
              11 min read
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
            AI Infrastructure for Businesses in 2026
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
            It is no longer about buying cloud credits or plugging in a new tool.
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
            <p>
              AI infrastructure has quietly become one of the most important conversations happening
              inside serious companies right now. It is no longer about buying cloud credits or
              plugging in a new tool. It is about building the actual foundation — the data systems,
              the compute, the workflows, the security — that lets AI do real work without falling
              apart under pressure.
            </p>

            <h2 className="font-serif" style={h2Style}>
              From Experiments to Operations
            </h2>

            <p>
              For most companies, the shift happened faster than expected. What started as pilots and
              proofs-of-concept is now expected to run in production. And production is where the
              gaps show up: messy data, underpowered systems, cloud setups that were not designed for
              inference at scale, teams that know how to prompt a model but not how to govern one.
            </p>

            <p>
              The question in 2026 is not whether your business should use AI. It is whether your
              infrastructure can actually support it.
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
                AI infrastructure is the difference between an AI demo and an AI operation.
              </p>
            </blockquote>

            <h2 className="font-serif" style={{ ...h2Style, marginTop: '0.5rem' }}>
              What It Really Means
            </h2>

            <p>
              AI infrastructure is the combination of everything underneath the model — the data
              pipelines feeding it, the compute running it, the storage holding it, the security
              protecting it, and the workflows connecting it to the rest of the business. Strip any
              one of those away and you get systems that are slow, brittle, or expensive to maintain.
            </p>

            <h2 className="font-serif" style={{ ...h2Style, marginTop: '0.5rem' }}>
              The Six Layers That Matter
            </h2>

            <p>
              Most companies that are doing this well have built across six core areas. Each one
              matters independently. Together, they are what allows AI workloads — which are more
              data-hungry and compute-intensive than normal software — to run without creating
              operational chaos.
            </p>
          </div>

          {/* Six Layer Cards */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              margin: '2rem 0',
            }}
          >
            {SIX_LAYERS.map(({ n, title, body }) => (
              <div
                key={n}
                style={{
                  background: 'var(--color-bg-card)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderLeft: '3px solid var(--color-trust-amber)',
                  borderRadius: '0 0.75rem 0.75rem 0',
                  padding: 'clamp(1rem, 2.5vw, 1.25rem) clamp(1rem, 2.5vw, 1.5rem)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.6rem' }}>
                  <span
                    className="font-mono"
                    style={{
                      fontSize: '0.625rem',
                      letterSpacing: '0.12em',
                      color: 'var(--color-trust-amber)',
                      background: 'rgba(251,191,36,0.08)',
                      border: '1px solid rgba(251,191,36,0.2)',
                      borderRadius: '0.25rem',
                      padding: '0.2rem 0.5rem',
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
                    }}
                  >
                    {title}
                  </p>
                </div>
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
            <h2 className="font-serif" style={{ ...h2Style, marginTop: '0.5rem' }}>
              Agents Need Real Infrastructure
            </h2>

            <p>
              AI agents have moved from research projects to business tools, and that transition
              comes with real operational requirements. An agent that sends emails, updates your CRM,
              or generates reports is not just a feature — it is a system that needs logging,
              permission controls, fallback logic, and human oversight when something goes wrong.
            </p>

            <p>
              Treating agents like production software instead of impressive demos is the mindset
              shift most companies have not fully made yet.
            </p>

            <h2 className="font-serif" style={{ ...h2Style, marginTop: '0.5rem' }}>
              Scaling Is About Simplification, Not Addition
            </h2>

            <p>
              The instinct when AI is not performing is to add more: more compute, more tools, more
              models. But the companies that scale AI successfully tend to do the opposite first.
              They consolidate systems, remove redundant processes, and build repeatable workflows
              before they expand.
            </p>

            <p>
              There are also real physical constraints — power, cooling, data center capacity — that
              matter more at scale than most technology leaders expect.
            </p>

            <h2 className="font-serif" style={{ ...h2Style, marginTop: '0.5rem' }}>
              What a Good Architecture Actually Looks Like
            </h2>

            <p>
              The most effective setups in 2026 are layered: structured data sources, orchestration
              tools connecting everything, scalable compute, APIs or agent runtimes on top,
              observability running throughout, and security built in from the start.
            </p>
          </div>

          {/* Architecture example card */}
          <div
            style={{
              background: 'var(--color-bg-card)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '0.75rem',
              overflow: 'hidden',
              margin: '2rem 0',
            }}
          >
            <div
              style={{
                padding: '0.875rem 1.25rem',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <span
                className="font-mono"
                style={{
                  fontSize: '0.625rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--color-trust-amber)',
                }}
              >
                Concrete Example
              </span>
            </div>
            <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { label: 'Input', body: 'CRM data pulled and enriched in real time' },
                { label: 'Processing', body: 'Leads scored, intent ranked, outreach drafted by AI agents' },
                { label: 'Action', body: 'Every action logged; important decisions routed to humans' },
                { label: 'Observability', body: 'Full audit trail with drift alerts and feedback loops' },
              ].map(({ label, body }) => (
                <div
                  key={label}
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'flex-start',
                  }}
                >
                  <span
                    className="font-mono"
                    style={{
                      fontSize: '0.6rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--color-trust-amber)',
                      flexShrink: 0,
                      paddingTop: '0.2rem',
                      minWidth: '84px',
                    }}
                  >
                    {label}
                  </span>
                  <p
                    className="font-serif"
                    style={{
                      fontSize: 'clamp(0.875rem, 1.6vw, 0.9375rem)',
                      color: 'var(--color-text-secondary)',
                      margin: 0,
                      lineHeight: 1.65,
                    }}
                  >
                    {body}
                  </p>
                </div>
              ))}
            </div>
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
              That kind of system does not happen by accident. It requires every layer of the
              infrastructure to be stable and designed to hold up under real usage.
            </p>

            <h2 className="font-serif" style={{ ...h2Style, marginTop: '0.5rem' }}>
              Who This Applies To
            </h2>

            <p>
              This matters most for companies that have moved past experimentation — SaaS businesses,
              service firms, agencies, and enterprises trying to turn AI pilots into reliable
              operations. It especially matters for anyone building AI assistants, internal copilots,
              workflow automation, or customer-facing agents.
            </p>

            <p>
              And it matters for the leaders who are tired of seeing AI investments underdeliver
              because the foundation was not built before the features were.
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
                The businesses that win in 2026 will not be the ones that use the most AI tools.
                They will be the ones that build the strongest infrastructure around data, compute,
                security, and operational design.
              </p>
            </blockquote>
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
              Ready to Build the Right Foundation
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
              Infrastructure First. AI That Actually Works.
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
              Invisigent works with a limited number of organizations each quarter to design and
              implement AI infrastructure that holds up under real production conditions. Every
              engagement is handled directly at the senior level.
            </p>
            <Link
              href="/contact"
              className="btn-accent"
              style={{ textDecoration: 'none', marginTop: '0.5rem' }}
            >
              Book Your Infrastructure Review →
            </Link>
          </div>
        </article>
      </main>

      <InvisigentLogoSection />
      <FooterSection />
    </>
  );
}
