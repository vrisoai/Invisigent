import type { Metadata } from 'next';
import { FooterSection, InvisigentLogoSection } from '@/app/components';
import Breadcrumb from '@/app/components/Breadcrumb';
import CaseStudyDocIntelClient from './CaseStudyDocIntelClient';

const CANONICAL = 'https://invisigent.ai/case-studies/multi-agent-document-intelligence';
const OG_IMAGE = 'https://invisigent.ai/og-image.png';
const PUBLISHED = '2026-04-25T10:00:00.000Z';
const MODIFIED = '2026-07-07T10:00:00.000Z';
const TITLE = 'Multi-Agent Document Intelligence System: AI Contract Analysis With LangGraph';
const DESCRIPTION =
  'How we built a production-ready multi-agent AI platform on LangGraph that analyzes contracts, extracts clauses, identifies risks, and streams structured summaries — cutting LLM cost by roughly 50% through prompt caching.';

export const metadata: Metadata = {
  title: `${TITLE} | Invisigent`,
  description: DESCRIPTION,
  keywords: [
    'multi-agent document intelligence',
    'LangGraph AI agents',
    'AI contract analysis',
    'LLM prompt caching',
    'structured outputs Pydantic',
    'LangSmith tracing',
    'AI document processing',
    'streaming AI responses SSE',
    'FastAPI AI backend',
    'legal AI tools',
    'AI agent orchestration',
    'Invisigent AI consulting',
  ],
  authors: [{ name: 'Invisigent', url: 'https://invisigent.ai' }],
  creator: 'Invisigent',
  publisher: 'Invisigent',
  category: 'Multi-Agent Systems',
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
    section: 'Multi-Agent Systems',
    tags: [
      'multi-agent AI',
      'LangGraph',
      'AI contract analysis',
      'prompt caching',
      'structured outputs',
      'AI observability',
    ],
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: TITLE, type: 'image/png' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@invisigent_ai',
    creator: '@invisigent_ai',
    title: TITLE,
    description:
      'A LangGraph-coordinated multi-agent platform for contract analysis — structured outputs, real-time streaming, and roughly 50% lower LLM cost via prompt caching.',
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
    'article:section': 'Multi-Agent Systems',
    'article:tag': 'multi-agent AI,LangGraph,AI contract analysis,prompt caching,structured outputs',
    'revisit-after': '7 days',
    rating: 'general',
    language: 'en',
    coverage: 'Worldwide',
    distribution: 'global',
    target: 'all',
    audience: 'developers, AI engineers, technical founders, enterprise teams',
    'DC.coverage': 'United States, United Kingdom, Australia, India',
    'DC.language': 'en',
    'DC.subject': 'multi-agent AI, LangGraph, AI contract analysis, prompt caching, structured outputs',
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
      headline:
        'Multi-Agent Document Intelligence System: A LangGraph-Coordinated Platform for Contract Analysis',
      description:
        'A production-ready multi-agent platform that analyzes contracts, extracts key clauses, identifies risks, and generates structured summaries through collaborative AI agents coordinated with LangGraph — with real-time streaming, prompt caching, and full LangSmith tracing.',
      image: { '@type': 'ImageObject', url: OG_IMAGE, width: 1200, height: 630, caption: TITLE },
      datePublished: PUBLISHED,
      dateModified: MODIFIED,
      inLanguage: 'en-US',
      author: { '@id': 'https://invisigent.ai/#organization' },
      publisher: { '@id': 'https://invisigent.ai/#organization' },
      isPartOf: { '@id': 'https://invisigent.ai/case-studies#collection' },
      articleSection: 'Multi-Agent Systems',
      keywords: 'multi-agent AI, LangGraph, AI contract analysis, prompt caching, structured outputs, LangSmith tracing',
      about: [
        { '@type': 'Thing', name: 'Multi-agent AI systems' },
        { '@type': 'Thing', name: 'LangGraph orchestration' },
        { '@type': 'Thing', name: 'AI contract analysis' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'LangGraph', applicationCategory: 'AI Orchestration' },
        { '@type': 'SoftwareApplication', name: 'LangSmith', applicationCategory: 'AI Observability' },
        { '@type': 'SoftwareApplication', name: 'FastAPI', applicationCategory: 'Web Framework' },
        { '@type': 'SoftwareApplication', name: 'Pydantic', applicationCategory: 'Data Validation' },
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
        { '@type': 'ListItem', position: 3, name: 'Multi-Agent Document Intelligence', item: CANONICAL },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL}#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Why use a multi-agent architecture instead of a single LLM prompt for contract analysis?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Single-prompt chatbot approaches lose context in long documents, produce inconsistent outputs, and cannot reason through multiple sections simultaneously. A multi-agent architecture distributes responsibility across specialized agents, so each one focuses on a single task instead of one generalist prompt trying to do everything at once.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does LangGraph coordinate the agents in this system?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A planner agent routes the parsed and retrieved document context to the clause extraction, risk identification, and summary generation agents. LangGraph coordinates these as nodes in a graph, and an aggregator node merges their outputs into a single validated, structured response.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does prompt caching reduce LLM cost by roughly 50%?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Multiple agents in the pipeline share overlapping context, such as the same document chunks and system instructions. Caching that shared context means it is not resent and re-billed on every agent call, which is what drove the roughly 50% reduction in LLM cost.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why stream responses instead of returning one completed analysis?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Server-Sent Events stream each agent’s output as it completes rather than making the user wait for the entire pipeline to finish before showing anything. For longer documents, this significantly improves perceived responsiveness.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does structured output with Pydantic provide over freeform text responses?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Each agent’s output, and the final aggregated response, is validated against a defined schema before it reaches the frontend. That means downstream systems can rely on consistent fields instead of parsing freeform text.',
          },
        },
      ],
    },
  ],
};

export default function CaseStudyDocumentIntelligencePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Breadcrumb
        items={[
          { label: 'Case Studies', href: '/case-studies' },
          { label: 'Multi-Agent Document Intelligence' },
        ]}
      />
      <CaseStudyDocIntelClient />
      <InvisigentLogoSection />
      <FooterSection />
    </>
  );
}
