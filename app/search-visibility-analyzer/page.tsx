import type { Metadata } from 'next';
import { SearchVisibilityAnalyzerForm } from '@/app/components/SearchVisibilityAnalyzerForm';
import { InvisigentLogoSection } from '@/app/components/InvisigentLogoSection';
import FooterSection from '@/app/components/FooterSection';

export const metadata: Metadata = {
  title: 'Search Visibility Analyzer',
  description:
    'Submit your keyword, location, website, and email for a tailored search visibility snapshot from Invisigent.',
  alternates: {
    canonical: 'https://invisigent.ai/search-visibility-analyzer',
  },
  openGraph: {
    title: 'Search Visibility Analyzer | Invisigent',
    description:
      'Analyze how your site shows up for the queries and markets that matter — enterprise AI infrastructure context.',
    url: 'https://invisigent.ai/search-visibility-analyzer',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Search Visibility Analyzer — Invisigent' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Search Visibility Analyzer | Invisigent',
    description: 'Analyze how your site shows up for the queries and markets that matter.',
    images: ['/og-image.png'],
  },
};

export default function SearchVisibilityAnalyzerPage() {
  return (
    <main className="search-visibility-page">
      <div className="section-wrapper search-visibility-page-inner">
        <div className="search-visibility-page-grid">
          <header className="search-visibility-page-intro">
            <p className="search-visibility-page-eyebrow font-mono text-label uppercase tracking-widest text-text-tertiary">
              Tool
            </p>
            <h1 className="search-visibility-page-title text-section-h font-serif font-semibold leading-tight text-text-primary">
              Search Visibility Analyzer
            </h1>
            <p className="search-visibility-page-lede text-body mt-5 max-w-xl font-serif leading-relaxed text-text-secondary">
              Enter your website and location. We&apos;ll analyze your Google rankings, Google Business Profile
              visibility, and on-page SEO — then email you a structured PDF report.
            </p>
          </header>

          <div className="search-visibility-card glass-card">
            <h2 className="text-card-title font-serif font-semibold text-text-primary">Request an analysis</h2>
            <p className="text-body mt-2 text-text-secondary">
              All fields are required. We treat your URL and keyword data as confidential.
            </p>
            <div className="mt-8">
              <SearchVisibilityAnalyzerForm />
            </div>
          </div>
        </div>
      </div>
      <InvisigentLogoSection />
      <FooterSection />
    </main>
  );
}
