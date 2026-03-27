// app/interactive-demo/page.tsx
type Tool = {
  id: string;
  name: string;
  shortDescription: string;
  capabilities: string[];
  cta: string;
  featured?: boolean;
};

const TOOLS: Tool[] = [
  {
    id: 'search-visibility-analyzer',
    name: 'Search Visibility Analyzer',
    shortDescription:
      'Analyze your Google rankings, local business visibility, and SEO performance with AI-powered insights.',
    capabilities: [
      'Organic keyword ranking analysis',
      'Google Business Profile (GMB) visibility insights',
      'AI-generated SEO recommendations',
    ],
    cta: 'Generate Report',
    featured: true,
  },
  {
    id: 'hotel-concierge-ai',
    name: 'Hotel Concierge AI',
    shortDescription:
      'AI assistant for hospitality businesses that manages guest interactions, bookings, and recommendations.',
    capabilities: [
      '24/7 guest query handling',
      'Booking and service automation',
      'Personalized recommendations',
    ],
    cta: 'Try Demo',
  },
  {
    id: 'ecommerce-ai-assistant',
    name: 'E-commerce AI Assistant',
    shortDescription:
      'AI-powered product discovery using semantic search and user intent.',
    capabilities: [
      'Intent-based product search',
      'Personalized recommendations',
      'Improved conversion flow',
    ],
    cta: 'Try Demo',
  },
  {
    id: 'market-intelligence-engine',
    name: 'Market Intelligence Engine',
    shortDescription:
      'AI system that aggregates and analyzes market data to generate actionable insights.',
    capabilities: [
      'News aggregation and analysis',
      'Trend detection',
      'Insight generation',
    ],
    cta: 'Try Demo',
  },
];

export const metadata = {
  title: 'Interactive Demos | VRISO',
  description:
    'AI tools demo page by VRISO showcasing enterprise AI systems, AI automation demos, and AI workflow systems for businesses across India, US, and Europe.',
};

function getToolVisual(id: string) {
  if (id === 'search-visibility-analyzer') {
    return (
      <div className="flex w-full flex-col shrink-0">
        <div className="interactive-demo-analyzer-panel flex w-full max-w-full flex-col gap-3 overflow-hidden rounded-xl border border-white/10 bg-black/20">
          <div className="min-w-0">
            <span className="block font-mono text-[11px] tracking-[0.12em] text-text-tertiary">
              ANALYZING VISIBILITY
            </span>
          </div>
          <div className="w-full min-w-0">
            <div className="h-1.5 w-full rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-link transition-[opacity] duration-700 ease-out motion-safe:animate-pulse"
                style={{ width: '84%' }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (id === 'hotel-concierge-ai') {
    return (
      <div className="flex min-h-[9rem] flex-1 flex-col sm:min-h-[10rem]">
        <div className="flex w-full max-w-full min-h-0 flex-1 flex-col overflow-hidden rounded-xl border border-white/10 bg-black/20 p-5 sm:p-6">
          <p className="font-mono text-[11px] tracking-[0.1em] text-text-tertiary">
            GUEST CHAT
          </p>
          <div className="mt-4 flex flex-1 flex-col justify-end space-y-3 text-sm leading-relaxed text-text-secondary">
            <div className="w-[88%] rounded-md bg-white/5 px-3 py-2.5">
              Need airport pickup at 7 PM.
            </div>
            <div className="ml-auto w-[82%] rounded-md border border-white/10 bg-black/20 px-3 py-2.5">
              Confirmed. Pickup and check-in updated.
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (id === 'ecommerce-ai-assistant') {
    return (
      <div className="flex min-h-[9rem] flex-1 flex-col sm:min-h-[10rem]">
        <div className="flex w-full max-w-full min-h-0 flex-1 flex-col gap-4 overflow-hidden rounded-xl border border-white/10 bg-black/20 p-5 sm:p-6">
          <p className="font-mono text-[11px] tracking-[0.1em] text-text-tertiary">
            SEMANTIC SEARCH
          </p>
          <div className="rounded-md border border-white/10 px-3 py-2.5 text-sm leading-relaxed text-text-secondary">
            query: lightweight travel laptop
          </div>
          <div className="mt-auto flex gap-2.5 pt-1">
            <div className="h-8 w-[30%] rounded bg-white/10" />
            <div className="h-8 w-[38%] rounded border border-white/10 bg-black/20" />
            <div className="h-8 w-[24%] rounded bg-white/10" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-[8.5rem] flex-1 flex-col sm:min-h-[9rem]">
      <div className="flex w-full max-w-full min-h-0 flex-1 flex-col gap-3 overflow-hidden rounded-xl border border-white/10 bg-black/20 p-5 sm:p-6">
        <p className="font-mono text-[11px] tracking-[0.1em] text-text-tertiary">
          LIVE MARKET SIGNALS
        </p>
        <svg
          className="mt-auto h-12 w-full shrink-0 sm:h-14"
          viewBox="0 0 120 48"
          aria-hidden="true"
          preserveAspectRatio="xMidYMid meet"
        >
          <polyline
            fill="none"
            stroke="var(--color-link)"
            strokeWidth="2"
            points="0,34 16,30 30,32 44,20 58,24 72,16 86,19 100,11 120,14"
            style={{ animation: 'data-flow 2.5s linear infinite' }}
          />
        </svg>
      </div>
    </div>
  );
}

export default function InteractiveDemoPage() {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'VRISO',
    description:
      'VRISO designs enterprise AI systems, AI workflow systems, and AI automation demos for production environments.',
    areaServed: ['India', 'United States', 'Europe'],
    url: 'https://vriso.ai',
  };

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'VRISO Interactive AI Tools Demo Systems',
    itemListElement: TOOLS.map((tool, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: tool.name,
      url: `https://vriso.ai/interactive-demo#${tool.id}`,
    })),
  };

  const softwareAppsJsonLd = TOOLS.map((tool) => ({
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: tool.name,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: tool.shortDescription,
    keywords: [
      'AI tools demo',
      'enterprise AI systems',
      'AI automation demos',
      'AI workflow systems',
      'AI infrastructure India, US, Europe',
    ].join(', '),
    creator: {
      '@type': 'Organization',
      name: 'VRISO',
    },
  }));

  return (
    <main className="interactive-demo-page relative overflow-x-hidden bg-bg-primary text-text-primary">
      <section
        className="interactive-demo-hero relative overflow-hidden border-b border-white/5 bg-bg-primary"
        aria-labelledby="interactive-demos-hero-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden opacity-70 max-[380px]:opacity-60"
          aria-hidden="true"
        >
          <div className="hero-grid-overlay" />
        </div>
        <div className="interactive-demo-hero-inner section-wrapper w-full min-h-0">
          <div className="interactive-demo-hero-content w-full min-w-0">
            <header className="interactive-demo-hero-head">
              <p className="interactive-demo-hero-label">[ INTERACTIVE SYSTEMS ]</p>
              <h1
                id="interactive-demos-hero-heading"
                className="interactive-demo-hero-title text-hero break-words font-serif font-semibold leading-[1.06] text-text-primary sm:leading-tight"
              >
                Real AI Systems. Not Demos.
              </h1>
            </header>
            <div className="interactive-demo-hero-copy">
              <p className="interactive-demo-hero-dek text-body text-pretty break-words font-serif leading-relaxed text-text-secondary">
                Explore how AI systems operate in real business environments.
              </p>
              <p className="interactive-demo-hero-dek text-body text-pretty break-words font-serif leading-relaxed text-text-secondary">
                These interactive demos represent production-grade systems designed for enterprise workflows,
                automation, and decision-making.
              </p>
            </div>
            <a
              href="#interactive-tools-grid"
              className="btn-primary interactive-demo-hero-cta inline-flex min-h-11 min-w-[12rem] items-center justify-center px-6 sm:min-h-0 sm:min-w-0 sm:px-5"
              aria-label="Explore interactive AI systems"
            >
              Explore Systems ↓
            </a>
            <div
              className="interactive-demo-hero-status flex flex-wrap items-center justify-center gap-x-2 gap-y-1"
              aria-hidden="true"
            >
              <span className="status-dot shrink-0" />
              <span className="max-w-[min(100%,20rem)] font-mono text-[9px] tracking-[0.1em] text-text-tertiary min-[360px]:text-[10px] min-[360px]:tracking-[0.12em]">
                LIVE SYSTEM PREVIEWS
              </span>
            </div>
          </div>
        </div>
      </section>

      <section
        id="interactive-tools-grid"
        className="interactive-demo-tools relative bg-bg-primary"
        aria-labelledby="tools-grid-heading"
      >
        <div className="section-wrapper">
          <div className="mx-auto w-full max-w-[min(100%,85rem)]">
          <h2 id="tools-grid-heading" className="text-section-h max-w-5xl shrink-0 break-words font-serif font-semibold leading-[1.1]">
            Interactive AI Tools Demo Systems
          </h2>
          <p className="text-body mt-5 max-w-4xl shrink-0 break-words font-serif text-[clamp(1rem,1.1vw+0.6rem,1.2rem)] leading-relaxed text-text-secondary">
            A premium showcase of enterprise AI systems, AI automation demos, and AI workflow systems designed to reflect real production environments.
          </p>

          <div className="h-8 sm:h-10 lg:h-12" aria-hidden="true" />

          <div className="grid w-full grid-cols-1 items-stretch gap-6 sm:grid-cols-2 sm:gap-8 lg:gap-10 xl:grid-cols-3 xl:gap-9">
            {TOOLS.map((tool, index) => (
              <article
                id={tool.id}
                key={tool.id}
                className={`${
                  tool.featured
                    ? 'interactive-demo-featured-card glass-card flex h-full w-full max-w-full flex-col gap-3 overflow-hidden break-words text-left sm:gap-4 lg:gap-5'
                    : 'glass-card flex h-full w-full flex-col gap-5 overflow-hidden break-words p-6 pl-8 text-left sm:gap-6 sm:p-7 sm:pl-10 lg:gap-7 lg:p-8 lg:pl-12'
                } ${
                  tool.featured
                    ? 'col-span-1 sm:col-span-2 lg:col-span-2 xl:col-span-3'
                    : index === TOOLS.length - 1
                      ? 'sm:col-span-2 lg:col-span-2 xl:col-span-1'
                      : ''
                }`}
                aria-label={tool.name}
              >
                {tool.featured ? (
                  <span className="interactive-demo-featured-badge inline-flex w-fit items-center justify-center rounded-full border border-trust-amber/40 bg-trust-amber/10 font-mono text-[10px] tracking-[0.12em] text-trust-amber">
                    FEATURED SYSTEM
                  </span>
                ) : null}
                <h3
                  className={`text-card-title font-serif font-semibold leading-[1.15] text-text-primary break-words ${
                    tool.featured
                      ? 'text-2xl sm:text-3xl lg:text-4xl xl:text-5xl'
                      : 'text-lg sm:text-xl lg:text-2xl xl:text-3xl'
                  }`}
                >
                  {tool.name}
                </h3>
                <p className="text-body max-w-prose break-words font-serif leading-[1.65] text-text-secondary sm:leading-[1.7]">
                  {tool.shortDescription}
                </p>
                <ul
                  className={
                    tool.featured
                      ? 'space-y-2.5 text-base leading-[1.6] text-text-secondary sm:space-y-3 sm:text-[1.0625rem] sm:leading-[1.65]'
                      : 'space-y-3.5 text-base leading-[1.65] text-text-secondary sm:space-y-4 sm:text-[1.0625rem] sm:leading-[1.7]'
                  }
                >
                  {tool.capabilities.map((capability) => (
                    <li key={capability} className="flex gap-3">
                      <span className="mt-[0.5rem] h-1.5 w-1.5 shrink-0 rounded-full bg-trust-amber" />
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>
                {getToolVisual(tool.id)}
                <button
                  type="button"
                  className={
                    tool.featured
                      ? 'btn-primary interactive-demo-featured-cta mt-auto w-auto self-center px-7 py-2.5 text-[0.9375rem] whitespace-nowrap'
                      : 'btn-primary mt-auto w-full whitespace-nowrap sm:w-auto'
                  }
                  aria-label={`${tool.cta} for ${tool.name}`}
                >
                  {tool.cta}
                </button>
              </article>
            ))}
          </div>
        </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-bg-primary" aria-labelledby="built-for-business-heading">
        <div className="section-grid-overlay" aria-hidden="true" />
        <div className="section-wrapper">
          <div className="mx-auto w-full max-w-3xl px-4 text-center">
          <h2 id="built-for-business-heading" className="text-section-h font-serif font-semibold leading-tight">
            Built for Real Businesses
          </h2>
          <p className="text-body mt-6 font-serif leading-relaxed text-text-secondary">
            These are simplified versions of the systems VRISO designs and deploys for organizations.
          </p>
          <p className="text-body mt-4 font-serif leading-relaxed text-text-secondary">
            Every implementation is customized — built around your workflows, data infrastructure, and operational scale.
          </p>
          <p className="text-body mt-6 font-serif leading-relaxed text-text-primary">
            We don&apos;t build demos. <br />
            We build systems that run inside real businesses.
          </p>
        </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-bg-primary" aria-labelledby="demo-to-deployment-heading">
        <div className="section-wrapper">
          <div className="mx-auto w-full max-w-7xl">
          <h2 id="demo-to-deployment-heading" className="text-section-h font-serif font-semibold leading-tight text-center">
            From Demo to Deployment
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
            <article className="glass-card flex h-full flex-col p-4 sm:p-5 lg:p-6">
              <h3 className="text-card-title font-serif font-semibold leading-tight break-words text-text-primary">
                Demo → Prototype → Production
              </h3>
              <p className="text-body mt-3 leading-relaxed text-text-secondary">
                We validate core behavior fast, then harden the architecture for reliability, observability, and enterprise uptime.
              </p>
            </article>
            <article className="glass-card flex h-full flex-col p-4 sm:p-5 lg:p-6">
              <h3 className="text-card-title font-serif font-semibold leading-tight break-words text-text-primary">
                AI Models → Integrated Systems
              </h3>
              <p className="text-body mt-3 leading-relaxed text-text-secondary">
                Models are only one layer. We integrate orchestration, retrieval, monitoring, and governance into one operational system.
              </p>
            </article>
            <article className="glass-card flex h-full flex-col p-4 sm:p-5 lg:p-6">
              <h3 className="text-card-title font-serif font-semibold leading-tight break-words text-text-primary">
                Tools → Infrastructure
              </h3>
              <p className="text-body mt-3 leading-relaxed text-text-secondary">
                We turn disconnected AI tools into production-grade AI infrastructure aligned with your teams, workflows, and scale.
              </p>
            </article>
          </div>
        </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-bg-primary" aria-labelledby="conversion-heading">
        <div className="section-wrapper">
          <div className="mx-auto w-full max-w-6xl">
          <div className="glass-card p-5 sm:p-7 md:p-10">
            <h2 id="conversion-heading" className="text-section-h font-serif font-semibold leading-tight">
              Want This for Your Business?
            </h2>
            <p className="text-body mt-5 max-w-3xl font-serif leading-relaxed text-text-secondary">
              We design and build custom AI systems tailored to your workflows, infrastructure, and scale.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a href="/contact" className="btn-primary w-full whitespace-nowrap sm:w-auto" aria-label="Start the conversation with VRISO">
                Start the Conversation
              </a>
              <a href="/contact" className="btn-accent w-full whitespace-nowrap sm:w-auto" aria-label="Request a custom AI solution">
                Request Custom Solution
              </a>
            </div>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs text-text-tertiary sm:text-sm">
              <span className="font-mono whitespace-nowrap">• Limited engagements per quarter</span>
              <span className="font-mono whitespace-nowrap">• Built for enterprise environments</span>
              <span className="font-mono whitespace-nowrap">• Compliance-ready systems</span>
            </div>
          </div>
        </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/5 bg-bg-primary" aria-labelledby="geo-seo-block-heading">
        <div className="section-wrapper">
          <div className="mx-auto w-full max-w-6xl">
          <h2 id="geo-seo-block-heading" className="text-section-h font-serif font-semibold leading-tight text-text-primary">
            AI Infrastructure India, US, Europe
          </h2>
          <p className="text-body mt-4 font-serif leading-relaxed text-text-secondary">
            VRISO provides enterprise AI system design, AI automation workflows, and AI infrastructure solutions for businesses across India, the United States, and Europe. From search intelligence to automation systems, we build scalable AI solutions for production environments.
          </p>
          <p className="text-body mt-3 font-serif leading-relaxed text-text-secondary">
            VRISO builds AI systems for businesses across India, US, and Europe.
          </p>
        </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      {softwareAppsJsonLd.map((schema, idx) => (
        <script
          key={`software-app-schema-${idx}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </main>
  );
}
