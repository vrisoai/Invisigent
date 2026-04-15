import type { Metadata } from 'next';
import { MarketIntelligenceStockSearch } from '@/app/components/MarketIntelligenceStockSearch';
import { InvisigentLogoSection } from '@/app/components/InvisigentLogoSection';
import FooterSection from '@/app/components/FooterSection';

export const metadata: Metadata = {
  title: 'Market Intelligence Engine',
  description:
    'Search a stock by name or symbol for AI-assisted market context — news, trends, and insight workflows.',
  alternates: {
    canonical: 'https://vriso.ai/market-intelligence-engine',
  },
  openGraph: {
    title: 'Market Intelligence Engine | Invisigent',
    description:
      'Demo: enter a company or ticker to drive aggregation, trend detection, and insight generation.',
    url: 'https://vriso.ai/market-intelligence-engine',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Market Intelligence Engine — Invisigent' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Market Intelligence Engine | Invisigent',
    description: 'Demo: enter a company or ticker to drive aggregation, trend detection, and insight generation.',
    images: ['/og-image.png'],
  },
};

export default function MarketIntelligenceEnginePage() {
  return (
    <main className="market-intelligence-page">
      <div className="section-wrapper market-intelligence-page-inner">
        <div className="market-intelligence-page-grid">
          <header className="market-intelligence-page-intro">
            <p className="market-intelligence-page-eyebrow font-mono text-label uppercase tracking-widest text-text-tertiary">
              Demo
            </p>
            <h1 className="market-intelligence-page-title text-section-h font-serif font-semibold leading-tight text-text-primary">
              Market Intelligence Engine
            </h1>
            <p className="market-intelligence-page-lede text-body mt-5 max-w-xl font-serif leading-relaxed text-text-secondary">
              An AI layer that aggregates market data, surfaces trends, and helps teams act faster. Start by looking up
              a public company — name or ticker — to simulate how the engine would focus its analysis.
            </p>
          </header>

          <div className="market-intelligence-card glass-card">
            <h2 className="text-card-title font-serif font-semibold text-text-primary">Stock lookup</h2>
            <p className="text-body mt-2 text-text-secondary">
              Enter one security to scope the demo. Production deployments connect to licensed data and your policies.
            </p>
            <div className="mt-8">
              <MarketIntelligenceStockSearch />
            </div>
          </div>
        </div>
      </div>
      <InvisigentLogoSection />
      <FooterSection />
    </main>
  );
}
