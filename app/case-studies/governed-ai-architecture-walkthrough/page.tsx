import type { Metadata } from 'next';
import { FooterSection, InvisigentLogoSection } from '@/app/components';
import Breadcrumb from '@/app/components/Breadcrumb';
import CaseStudyGovernedAiClient from './CaseStudyGovernedAiClient';

const CANONICAL = 'https://invisigent.ai/case-studies/governed-ai-architecture-walkthrough';
const OG_IMAGE = 'https://invisigent.ai/og-image.png';
const PUBLISHED = '2026-07-07T10:00:00.000Z';
const MODIFIED = '2026-07-07T10:00:00.000Z';
const TITLE = 'Governed AI Architecture Walkthrough: A Reference Design for Regulated Industries';
const DESCRIPTION =
  'An interactive walkthrough of the four controlled layers in a governed AI deployment — Ingestion, Knowledge & Retrieval, Reasoning, and Action — mirroring the governance architecture deployed in a clinical workflow system live at two US clinics.';

export const metadata: Metadata = {
  title: `${TITLE} | Invisigent`,
  description: DESCRIPTION,
  keywords: [
    'governed AI architecture',
    'AI governance framework',
    'regulated industries AI',
    'healthcare AI compliance',
    'AI audit trail',
    'zero data retention LLM',
    'PII redaction AI pipeline',
    'AI governance for CTOs',
    'prompt injection monitoring',
    'per-tenant retrieval isolation',
    'RAG governance controls',
    'AI compliance architecture',
    'AI governance USA',
    'AI governance UK',
    'AI governance Australia',
    'AI governance India',
    'Invisigent AI consulting',
  ],
  authors: [{ name: 'Invisigent', url: 'https://invisigent.ai' }],
  creator: 'Invisigent',
  publisher: 'Invisigent',
  category: 'AI Governance',
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
    section: 'AI Governance',
    tags: [
      'AI governance',
      'regulated industries',
      'healthcare AI',
      'audit trail',
      'zero data retention',
      'RAG governance',
    ],
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: TITLE, type: 'image/png' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@invisigent_ai',
    creator: '@invisigent_ai',
    title: TITLE,
    description:
      'Move through the four controlled layers of a governed AI deployment — Ingestion, Knowledge & Retrieval, Reasoning, Action — and see exactly where validation and governance controls are applied.',
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
    'article:section': 'AI Governance',
    'article:tag': 'AI governance,regulated industries,healthcare AI,audit trail,zero data retention',
    'revisit-after': '7 days',
    rating: 'general',
    language: 'en',
    coverage: 'Worldwide',
    distribution: 'global',
    target: 'all',
    audience: 'CTOs, compliance leads, heads of digital transformation in regulated industries',
    'DC.coverage': 'United States, United Kingdom, Australia, India',
    'DC.language': 'en',
    'DC.subject': 'governed AI architecture, AI governance framework, regulated industries AI, audit trail, zero data retention',
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
      headline: 'Governed AI Architecture Walkthrough: The Four Controlled Layers of a Regulated AI Deployment',
      description: DESCRIPTION,
      image: { '@type': 'ImageObject', url: OG_IMAGE, width: 1200, height: 630, caption: TITLE },
      datePublished: PUBLISHED,
      dateModified: MODIFIED,
      inLanguage: 'en-US',
      author: { '@id': 'https://invisigent.ai/#organization' },
      publisher: { '@id': 'https://invisigent.ai/#organization' },
      isPartOf: { '@id': 'https://invisigent.ai/case-studies#collection' },
      articleSection: 'AI Governance',
      keywords: 'governed AI architecture, AI governance framework, regulated industries, audit trail, zero data retention, PII redaction, prompt injection monitoring',
      audience: {
        '@type': 'Audience',
        audienceType: 'CTOs, compliance leads, heads of digital transformation in regulated industries',
      },
      about: [
        { '@type': 'Thing', name: 'AI governance' },
        { '@type': 'Thing', name: 'Regulated industry AI deployment' },
        { '@type': 'Thing', name: 'AI audit and compliance controls' },
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
        { '@type': 'ListItem', position: 3, name: 'Governed AI Architecture Walkthrough', item: CANONICAL },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL}#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What makes an AI architecture "governed" rather than just monitored?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Monitoring observes what already happened. Governance constrains what is allowed to happen in the first place. This architecture places a validation gate and a governance control between every layer, so ingestion, retrieval, reasoning, and action are each explicitly bounded rather than left to run unconstrained with observability bolted on afterward.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why validate data at the ingestion layer instead of relying on the model to handle bad input?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Schema validation and PII redaction at ingestion catch malformed documents and sensitive data before they ever reach a model or a retrieval index. Fixing bad input at the edge is far cheaper and more auditable than trying to catch it after it has already influenced a reasoning step or an automated action.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does per-tenant retrieval isolation prevent cross-customer data leakage?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The knowledge and retrieval layer scopes every query to a specific user or tenant boundary, combined with retrieval score thresholding so weakly relevant results are not surfaced at all. That isolation is what prevents one tenant\'s data from ever entering another tenant\'s retrieved context.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is zero-data-retention model usage and why does it matter for regulated industries?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Zero-data-retention means prompts and outputs sent to the reasoning layer are not stored or used for training by the model provider. Combined with prompt injection and jailbreak monitoring, it lets regulated organizations use frontier models while keeping sensitive data inside their own compliance boundary.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why is there a governance gate between the reasoning layer and the action layer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A model deciding to send an email or write to a database is different from that action actually happening. The action layer runs double-check validation and retry logic and logs a full audit trail before any automated email, API call, or database write executes, so a reasoning error cannot become an irreversible action unchecked.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is this a deployable product, or a reference architecture?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'This is an interactive architecture walkthrough, not a live tool. It mirrors the governance architecture behind a clinical workflow system already running in production at two US clinics, and is meant to show CTOs, compliance leads, and digital transformation leaders exactly how each layer of a governed AI deployment is constrained.',
          },
        },
      ],
    },
  ],
};

export default function CaseStudyGovernedAiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Breadcrumb
        items={[
          { label: 'Case Studies', href: '/case-studies' },
          { label: 'Governed AI Architecture Walkthrough' },
        ]}
      />
      <CaseStudyGovernedAiClient />
      <InvisigentLogoSection />
      <FooterSection />
    </>
  );
}
