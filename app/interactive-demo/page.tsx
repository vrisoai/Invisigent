// app/interactive-demo/page.tsx
import Link from 'next/link';
import { FooterSection, VrisoLogoSection } from '@/app/components';
import { InteractiveDemoDeploymentCarousel } from '@/app/components/InteractiveDemoDeploymentCarousel';
import { InteractiveDemoDeploymentTiltCard } from '@/app/components/InteractiveDemoDeploymentTiltCard';

type Tool = {
  id: string;
  name: string;
  shortDescription: string;
  capabilities: string[];
  cta: string;
  /** When set, CTA navigates here (e.g. full analyzer flow + API submit on that page). */
  ctaHref?: string;
  featured?: boolean;
};

/** Standard tool cards with no preview mock (copy + CTA only) */
const STANDARD_TOOL_IDS_WITHOUT_MOCK = new Set<string>([
  'hotel-concierge-ai',
  'ecommerce-ai-assistant',
  'market-intelligence-engine',
  'seo-article-generator',
]);

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
    ctaHref: '/search-visibility-analyzer',
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
    ctaHref: '/hotel-concierge-ai',
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
    ctaHref: '/ecommerce-ai-assistant',
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
    ctaHref: '/market-intelligence-engine',
  },
  {
    id: 'seo-article-generator',
    name: 'SEO Article Generator',
    shortDescription:
      'Generate high-quality, keyword-rich articles tailored to your audience. Scale your content production while maintaining consistency and SEO value.',
    capabilities: [
      'Audience-tailored, keyword-rich long-form content',
      'Scaled workflows with consistent tone and structure',
      'Suitable for bloggers and content teams',
    ],
    cta: 'Try Demo',
    ctaHref: '/seo-article-generator',
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
        <div className="interactive-demo-analyzer-panel flex w-full max-w-full flex-col gap-1.5 overflow-hidden rounded-xl border border-white/10 bg-black/20">
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

  return null;
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
      url: tool.ctaHref
        ? `https://vriso.ai${tool.ctaHref}`
        : `https://vriso.ai/interactive-demo#${tool.id}`,
    })),
  };

  const standardToolCount = TOOLS.filter((t) => !t.featured).length;
  /** On xl (3 columns), last row has a single orphan — span full width */
  const lastStandardCardFullWidthXl = standardToolCount % 3 === 1;

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

          <div className="interactive-demo-tools-grid grid w-full grid-cols-1 items-stretch gap-6 sm:grid-cols-2 sm:gap-8 lg:gap-10 xl:grid-cols-3 xl:gap-9">
            {TOOLS.map((tool, index) => (
              <article
                id={tool.id}
                key={tool.id}
                className={`${
                  tool.featured
                    ? 'interactive-demo-featured-card glass-card flex h-full w-full max-w-full flex-col gap-1.5 overflow-hidden break-words text-left sm:gap-2 lg:gap-3'
                    : `interactive-demo-tool-card glass-card min-h-0 h-full w-full overflow-hidden break-words text-left${
                        STANDARD_TOOL_IDS_WITHOUT_MOCK.has(tool.id)
                          ? ' interactive-demo-tool-card--no-mock'
                          : ''
                      }`
                } ${
                  tool.featured
                    ? 'col-span-1 sm:col-span-2 lg:col-span-2 xl:col-span-3'
                    : index === TOOLS.length - 1
                      ? lastStandardCardFullWidthXl
                        ? 'sm:col-span-2 lg:col-span-2 xl:col-span-3'
                        : 'sm:col-span-2 lg:col-span-2 xl:col-span-1'
                      : ''
                }`}
                aria-label={tool.name}
              >
                {tool.featured ? (
                  <>
                    <span className="interactive-demo-featured-badge inline-flex w-fit items-center justify-center rounded-full border border-trust-amber/40 bg-trust-amber/10 font-mono text-[10px] tracking-[0.12em] text-trust-amber">
                      FEATURED SYSTEM
                    </span>
                    <h3 className="text-card-title break-words font-serif text-lg font-semibold leading-[1.15] text-text-primary sm:text-xl lg:text-2xl xl:text-3xl">
                      {tool.name}
                    </h3>
                    <p className="max-w-prose break-words font-serif text-[0.9375rem] leading-snug text-text-secondary sm:text-base sm:leading-[1.55]">
                      {tool.shortDescription}
                    </p>
                    <ul className="interactive-demo-capability-list space-y-1.5 text-[0.875rem] leading-[1.5] text-text-secondary sm:space-y-1.5 sm:text-[0.9375rem] sm:leading-[1.55]">
                      {tool.capabilities.map((capability) => (
                        <li key={capability} className="interactive-demo-capability-li">
                          <span className="interactive-demo-capability-dot" aria-hidden />
                          <span className="min-w-0 flex-1">{capability}</span>
                        </li>
                      ))}
                    </ul>
                    {getToolVisual(tool.id)}
                    {tool.ctaHref ? (
                      <Link
                        href={tool.ctaHref}
                        className="btn-primary interactive-demo-featured-cta mt-auto w-auto self-center px-6 py-2 text-[0.875rem] whitespace-nowrap"
                        aria-label={`${tool.cta} for ${tool.name}`}
                      >
                        {tool.cta}
                      </Link>
                    ) : (
                      <button
                        type="button"
                        className="btn-primary interactive-demo-featured-cta mt-auto w-auto self-center px-6 py-2 text-[0.875rem] whitespace-nowrap"
                        aria-label={`${tool.cta} for ${tool.name}`}
                      >
                        {tool.cta}
                      </button>
                    )}
                  </>
                ) : (
                  <>
                    <div className="interactive-demo-tool-copy flex shrink-0 flex-col gap-3 sm:gap-4">
                      <h3 className="text-card-title break-words font-serif text-lg font-semibold leading-[1.15] text-text-primary sm:text-xl lg:text-2xl xl:text-3xl">
                        {tool.name}
                      </h3>
                      <p className="text-body max-w-prose break-words font-serif leading-[1.65] text-text-secondary sm:leading-[1.7]">
                        {tool.shortDescription}
                      </p>
                      <ul className="interactive-demo-capability-list space-y-3 text-base leading-[1.65] text-text-secondary sm:space-y-3.5 sm:text-[1.0625rem] sm:leading-[1.7]">
                        {tool.capabilities.map((capability) => (
                          <li key={capability} className="interactive-demo-capability-li">
                            <span className="interactive-demo-capability-dot" aria-hidden />
                            <span className="min-w-0 flex-1 text-left">{capability}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {!STANDARD_TOOL_IDS_WITHOUT_MOCK.has(tool.id) ? (
                      <div className="interactive-demo-tool-visual min-h-0 w-full">
                        {getToolVisual(tool.id)}
                      </div>
                    ) : null}
                    {tool.ctaHref ? (
                      <Link
                        href={tool.ctaHref}
                        className="btn-primary mt-0 w-full shrink-0 whitespace-nowrap sm:w-auto sm:self-center"
                        aria-label={`${tool.cta} for ${tool.name}`}
                      >
                        {tool.cta}
                      </Link>
                    ) : (
                      <button
                        type="button"
                        className="btn-primary mt-0 w-full shrink-0 whitespace-nowrap sm:w-auto sm:self-center"
                        aria-label={`${tool.cta} for ${tool.name}`}
                      >
                        {tool.cta}
                      </button>
                    )}
                  </>
                )}
              </article>
            ))}
          </div>
        </div>
        </div>
      </section>

      <section
        className="interactive-demo-built-for-business relative overflow-hidden bg-bg-primary"
        aria-labelledby="built-for-business-heading"
      >
        <div className="section-grid-overlay" aria-hidden="true" />
        <div className="section-wrapper interactive-demo-built-for-business-inner">
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

      <section
        className="interactive-demo-deployment relative overflow-hidden bg-bg-primary"
        aria-labelledby="demo-to-deployment-heading"
      >
        <div className="section-wrapper">
          <div className="mx-auto w-full max-w-7xl">
          <h2 id="demo-to-deployment-heading" className="text-section-h font-serif font-semibold leading-tight text-center">
            From Demo to Deployment
          </h2>
          <InteractiveDemoDeploymentCarousel>
            <InteractiveDemoDeploymentTiltCard>
              <h3 className="text-card-title font-serif font-semibold leading-tight break-words text-text-primary">
                Demo → Prototype → Production
              </h3>
              <p className="text-body mt-5 leading-relaxed text-text-secondary sm:mt-6">
                We validate core behavior fast, then harden the architecture for reliability, observability, and enterprise uptime.
              </p>
            </InteractiveDemoDeploymentTiltCard>
            <InteractiveDemoDeploymentTiltCard>
              <h3 className="text-card-title font-serif font-semibold leading-tight break-words text-text-primary">
                AI Models → Integrated Systems
              </h3>
              <p className="text-body mt-5 leading-relaxed text-text-secondary sm:mt-6">
                Models are only one layer. We integrate orchestration, retrieval, monitoring, and governance into one operational system.
              </p>
            </InteractiveDemoDeploymentTiltCard>
            <InteractiveDemoDeploymentTiltCard>
              <h3 className="text-card-title font-serif font-semibold leading-tight break-words text-text-primary">
                Tools → Infrastructure
              </h3>
              <p className="text-body mt-5 leading-relaxed text-text-secondary sm:mt-6">
                We turn disconnected AI tools into production-grade AI infrastructure aligned with your teams, workflows, and scale.
              </p>
            </InteractiveDemoDeploymentTiltCard>
          </InteractiveDemoDeploymentCarousel>
        </div>
        </div>
      </section>

      <section
        className="interactive-demo-conversion relative overflow-hidden bg-bg-primary"
        aria-labelledby="conversion-heading"
      >
        <div className="section-wrapper">
          <div className="mx-auto w-full max-w-6xl">
          <div className="interactive-demo-conversion-card glass-card flex flex-col gap-8 sm:gap-9 md:gap-10">
            <h2
              id="conversion-heading"
              className="text-section-h font-serif font-semibold leading-snug text-text-primary"
            >
              Want This for Your Business?
            </h2>
            <p className="text-body max-w-3xl font-serif leading-[1.7] text-text-secondary">
              We design and build custom AI systems tailored to your workflows, infrastructure, and scale.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
              <a href="/contact" className="btn-accent w-full whitespace-nowrap sm:w-auto" aria-label="Request a custom AI solution">
                Request Custom Solution
              </a>
            </div>
            <ul className="flex list-none flex-col gap-3.5 text-xs leading-relaxed text-text-tertiary sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3 sm:text-sm">
              <li className="font-mono pl-0 sm:whitespace-nowrap">• Limited engagements per quarter</li>
              <li className="font-mono pl-0 sm:whitespace-nowrap">• Built for enterprise environments</li>
              <li className="font-mono pl-0 sm:whitespace-nowrap">• Compliance-ready systems</li>
            </ul>
          </div>
        </div>
        </div>
      </section>

      <section
        className="interactive-demo-global-infra relative overflow-hidden border-t border-white/5 bg-bg-primary"
        aria-labelledby="global-ai-infrastructure-heading"
      >
        <div className="section-wrapper interactive-demo-global-infra-inner">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">
            <h2
              id="global-ai-infrastructure-heading"
              className="text-section-h font-serif font-semibold leading-tight text-text-primary"
            >
              AI Infrastructure for Global Organizations
            </h2>
            <div className="mt-10 flex w-full max-w-3xl flex-col gap-5 sm:mt-12 sm:gap-6 md:mt-14">
              <p className="text-body font-serif leading-relaxed text-text-secondary">
                VRISO designs enterprise AI systems, automation workflows, and scalable infrastructure for organizations operating across regions, teams, and complex environments.
              </p>
              <p className="text-body font-serif leading-relaxed text-text-secondary">
                From search intelligence to automation systems, we build AI that runs in production — not just in demos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <VrisoLogoSection />
      <FooterSection />

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
