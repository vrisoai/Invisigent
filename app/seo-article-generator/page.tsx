import type { Metadata } from 'next';
import { SEOArticleGeneratorForm } from './SEOArticleGeneratorForm';
import { InvisigentLogoSection } from '@/app/components/InvisigentLogoSection';
import FooterSection from '@/app/components/FooterSection';

export const metadata: Metadata = {
  title: 'SEO Article Generator',
  description:
    'Generate high-quality, keyword-optimized articles instantly. Enter your keyword and generate SEO-ready content tailored for your audience.',
  alternates: {
    canonical: 'https://vriso.ai/seo-article-generator',
  },
  openGraph: {
    title: 'SEO Article Generator | Invisigent',
    description:
      'AI-powered SEO article generation — keyword-rich, audience-tailored content at scale.',
    url: 'https://vriso.ai/seo-article-generator',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'SEO Article Generator — Invisigent' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Article Generator | Invisigent',
    description: 'AI-powered SEO article generation — keyword-rich, audience-tailored content at scale.',
    images: ['/og-image.png'],
  },
};

export default function SEOArticleGeneratorPage() {
  return (
    <main className="seo-article-generator-page">
      <div className="section-wrapper seo-article-generator-page-inner">
        <div className="seo-article-generator-page-grid">

          {/* Left column: intro text */}
          <header className="seo-article-generator-page-intro">
            <p className="seo-article-generator-page-eyebrow font-mono text-label uppercase tracking-widest text-text-tertiary">
              Tool
            </p>
            <h1 className="seo-article-generator-page-title text-section-h font-serif font-semibold leading-tight text-text-primary">
              SEO Article Generator
            </h1>
            <p className="seo-article-generator-page-lede text-body mt-5 font-serif leading-relaxed text-text-secondary">
              The SEO Article Generator AI creates comprehensive,
              search-engine-optimized content tailored to your specific keywords
              and topics. Generate engaging articles with proper meta
              descriptions, strategic keyword placement, and compelling titles
              that rank well and convert readers. Simply share your topic,
              target keywords, or special requirements.
            </p>
          </header>

          {/* Right column: card */}
          <div className="seo-article-generator-card glass-card">
            <h2 className="font-serif font-semibold text-text-primary text-card-title">
              Generate your article
            </h2>
            <p className="text-body mt-2 text-text-secondary">
              Enter your main keyword. We&apos;ll generate a complete,
              SEO-optimized article.
            </p>
            <div className="mt-8">
              <SEOArticleGeneratorForm />
            </div>
          </div>

        </div>
      </div>

      <InvisigentLogoSection />
      <FooterSection />
    </main>
  );
}
