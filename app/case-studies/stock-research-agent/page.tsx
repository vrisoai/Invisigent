import type { Metadata } from 'next';
import { FooterSection, InvisigentLogoSection } from '@/app/components';
import Breadcrumb from '@/app/components/Breadcrumb';
import CaseStudyStockAgentClient from './CaseStudyStockAgentClient';

const CANONICAL = 'https://invisigent.ai/case-studies/stock-research-agent';
const OG_IMAGE = 'https://invisigent.ai/og-image.png';
const PUBLISHED = '2026-07-07T10:00:00.000Z';
const MODIFIED = '2026-07-07T10:00:00.000Z';
const TITLE = 'Stock Research Agent: Multi-Agent AI System for Automated Investment Research';
const DESCRIPTION =
  'How we built a five-agent LangGraph research system that gathers financial statements, news, technical signals, and investor sentiment in parallel to generate explainable buy/hold/sell reports in about 30 seconds.';

export const metadata: Metadata = {
  title: `${TITLE} | Invisigent`,
  description: DESCRIPTION,
  keywords: [
    'stock research agent',
    'multi-agent investment research AI',
    'LangGraph stock analysis',
    'AI stock research report',
    'automated equity research',
    'financial AI agents',
    'AI buy hold sell report',
    'LangSmith cost tracking',
    'Tavily news agent AI',
    'yfinance AI agent',
    'parallel AI agents finance',
    'AI investment research USA',
    'AI investment research UK',
    'AI investment research Australia',
    'AI investment research India',
    'Invisigent AI consulting',
  ],
  authors: [{ name: 'Invisigent', url: 'https://invisigent.ai' }],
  creator: 'Invisigent',
  publisher: 'Invisigent',
  category: 'Finance AI',
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
    description: DESCRIPTION,
    url: CANONICAL,
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
    authors: ['https://invisigent.ai'],
    section: 'Finance AI',
    tags: [
      'multi-agent AI',
      'LangGraph',
      'stock research',
      'investment research automation',
      'AI cost tracking',
      'financial AI agents',
    ],
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: TITLE, type: 'image/png' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@invisigent_ai',
    creator: '@invisigent_ai',
    title: TITLE,
    description:
      'A five-agent LangGraph research system that runs financial, news, technical, sentiment, and company analysis in parallel to generate a buy/hold/sell report in about 30 seconds.',
    images: [{ url: OG_IMAGE, alt: TITLE }],
  },
  other: {
    'geo.region': 'IN-RJ',
    'geo.placename': 'Jaipur, Rajasthan, India',
    'geo.position': '26.9124;75.7873',
    ICBM: '26.9124, 75.7873',
    'og:locale:alternate': 'en_GB,en_AU,en_IN',
    'article:published_time': PUBLISHED,
    'article:modified_time': MODIFIED,
    'article:author': 'https://invisigent.ai',
    'article:section': 'Finance AI',
    'article:tag': 'multi-agent AI,LangGraph,stock research,investment research automation,financial AI agents',
    'revisit-after': '7 days',
    rating: 'general',
    language: 'en',
    coverage: 'Worldwide',
    distribution: 'global',
    target: 'all',
    audience: 'developers, AI engineers, technical founders, investment and fintech teams',
    'DC.coverage': 'United States, United Kingdom, Australia, India',
    'DC.language': 'en',
    'DC.subject': 'multi-agent AI, LangGraph, stock research automation, financial AI agents',
    'DC.publisher': 'Invisigent',
    'theme-color': '#0d0d0d',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': `${CANONICAL}#article`,
      url: CANONICAL,
      headline: 'Stock Research Agent: A Five-Agent LangGraph System for Automated Investment Research',
      description: DESCRIPTION,
      image: { '@type': 'ImageObject', url: OG_IMAGE, width: 1200, height: 630, caption: TITLE },
      datePublished: PUBLISHED,
      dateModified: MODIFIED,
      inLanguage: 'en-US',
      author: { '@id': 'https://invisigent.ai/#organization' },
      publisher: { '@id': 'https://invisigent.ai/#organization' },
      isPartOf: { '@id': 'https://invisigent.ai/case-studies#collection' },
      articleSection: 'Finance AI',
      keywords: 'stock research agent, LangGraph, multi-agent investment research, financial AI agents, LangSmith cost tracking',
      about: [
        { '@type': 'Thing', name: 'Multi-agent AI systems' },
        { '@type': 'Thing', name: 'LangGraph orchestration' },
        { '@type': 'Thing', name: 'Automated investment research' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'LangGraph', applicationCategory: 'AI Orchestration' },
        { '@type': 'SoftwareApplication', name: 'LangSmith', applicationCategory: 'AI Observability' },
        { '@type': 'SoftwareApplication', name: 'Tavily', applicationCategory: 'Search API' },
        { '@type': 'SoftwareApplication', name: 'yfinance', applicationCategory: 'Financial Data API' },
        { '@type': 'SoftwareApplication', name: 'FastAPI', applicationCategory: 'Web Framework' },
      ],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2'] },
      mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invisigent.ai' },
        { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://invisigent.ai/case-studies' },
        { '@type': 'ListItem', position: 3, name: 'Stock Research Agent', item: CANONICAL },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL}#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Why use five parallel agents instead of one agent that gathers everything sequentially?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Investment research spans independent domains: news, fundamentals, technicals, sentiment, and company data. Running one agent per domain in parallel means the total wait time is set by the slowest single agent rather than the sum of all five, which is what keeps full report generation to around 30 seconds.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does each of the five research agents actually do?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The News Agent pulls recent headlines and catalysts, the Financial Agent analyzes fundamentals and financial statements, the Technical Agent evaluates price action and indicators, the Sentiment Agent gauges investor sentiment, and the Company Agent gathers company-level context. A planner dispatches the ticker to all five, and an aggregator merges their findings into a single report.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does LangGraph coordinate parallel agents and merge their results?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Each research agent runs as an independent node in a LangGraph graph. LangGraph reducers combine their individual outputs into a single shared state, and the aggregator node only produces the final buy/hold/sell recommendation once every agent has reported back.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does the Stock Research Agent work for tickers outside the US market?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Coverage depends on the underlying data sources. yfinance and Tavily both support a wide range of exchanges beyond the US, including listings relevant to UK, Australian, and Indian markets, though the depth of fundamentals and news coverage can vary by exchange and region.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is the buy/hold/sell recommendation reliable enough to base investment decisions on?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The recommendation is generated only after all five agents report back, and every contributing input is traceable through LangSmith. That makes the output explainable and auditable, but it is a research aid that consolidates public information, not financial advice, and should be treated as one input into a broader investment decision.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does the roughly $0.0003 average cost per report actually include?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'It covers the LLM inference cost across all five parallel research agents plus the aggregation step for a single ticker report. Cost is tracked per report through LangSmith, which is what makes it practical to run continuously across a large ticker universe.',
          },
        },
      ],
    },
  ],
};

export default function CaseStudyStockAgentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Breadcrumb
        items={[
          { label: 'Case Studies', href: '/case-studies' },
          { label: 'Stock Research Agent' },
        ]}
      />
      <CaseStudyStockAgentClient />
      <InvisigentLogoSection />
      <FooterSection />
    </>
  );
}
