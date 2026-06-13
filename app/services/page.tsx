import type { Metadata } from 'next';
import ServicesPageClient from './services-page-client';
import Breadcrumb from '@/app/components/Breadcrumb';

const CANONICAL = 'https://invisigent.ai/services';
const OG_IMAGE = 'https://invisigent.ai/og-image.png';

export const metadata: Metadata = {
  title: 'Services — AI Infrastructure Built for Production, Not Proof of Concept',
  description:
    'Seven AI infrastructure services: LangGraph multi-agent orchestration, Pinecone RAG retrieval, AI performance optimization, AI-native product development, and compliance-ready AI for GDPR, EU AI Act, DPDP, ISO 42001, and SOC2. Model-agnostic. No vendor lock-in.',
  keywords: [
    'AI infrastructure services',
    'LangGraph multi-agent orchestration',
    'Pinecone RAG knowledge retrieval',
    'sub-3-second RAG retrieval',
    'Cohere reranking RAG',
    'LangSmith AI observability',
    'AI automation n8n FastAPI',
    'AI performance latency optimization',
    'semantic caching AI inference',
    'AI-native product development',
    'FastAPI Node.js AI backend',
    'MongoDB Docker AI deployment',
    'model-agnostic AI infrastructure',
    'no vendor lock-in AI systems',
    'GDPR compliant AI infrastructure',
    'EU AI Act risk classification',
    'DPDP Act India AI compliance',
    'ISO 42001 AI management system',
    'SOC2 AI systems architecture',
    'RBAC audit logs AI compliance',
    'AI strategy roadmap 2-4 weeks',
    'AI infrastructure build 6-16 weeks',
    'mid-market AI infrastructure services',
    'AI infrastructure owned by your team',
    'AI consulting India US UK Australia',
  ],
  authors: [{ name: 'Invisigent', url: 'https://invisigent.ai' }],
  creator: 'Invisigent',
  publisher: 'Invisigent',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: {
    canonical: CANONICAL,
    languages: {
      'x-default': CANONICAL,
      'en-US': CANONICAL,
      'en-GB': CANONICAL,
      'en-AU': CANONICAL,
      'en-IN': CANONICAL,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['en_IN', 'en_GB', 'en_AU'],
    siteName: 'Invisigent',
    title: 'Services — AI Infrastructure Built for Production, Not Proof of Concept | Invisigent',
    description:
      'LangGraph agent orchestration, Pinecone RAG pipelines, AI performance optimization, and compliance-ready AI infrastructure. Model-agnostic. No vendor lock-in. Built to be owned.',
    url: CANONICAL,
    images: [
      { url: OG_IMAGE, width: 1200, height: 630, alt: 'Invisigent Services — AI Infrastructure Built for Production', type: 'image/png' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@invisigent_ai',
    creator: '@invisigent_ai',
    title: 'Services — AI Infrastructure Built for Production | Invisigent',
    description:
      'LangGraph orchestration, Pinecone RAG, AI automation, compliance-ready AI. Model-agnostic. No vendor lock-in. Built to be owned.',
    images: [{ url: OG_IMAGE, alt: 'Invisigent Services — AI Infrastructure Built for Production' }],
  },
  other: {
    'geo.region': ['IN-RJ', 'US', 'GB', 'AU'],
    'geo.placename': ['Jaipur, Rajasthan, India', 'United States', 'United Kingdom', 'Australia'],
    'geo.position': '26.9124;75.7873',
    ICBM: '26.9124, 75.7873',
    'og:locale:alternate': 'en_GB,en_AU,en_IN',
    language: 'en',
    coverage: 'Worldwide',
    distribution: 'global',
    target: 'all',
    audience: 'CTOs, CEOs, technical founders, operations leaders, mid-market organizations, regulated industries, FinTech, HealthTech, Legal',
    'revisit-after': '7 days',
    rating: 'general',
    'DC.coverage': 'United States, United Kingdom, Australia, India',
    'DC.language': 'en',
    'DC.subject': 'AI infrastructure services, LangGraph orchestration, RAG knowledge retrieval, AI compliance GDPR DPDP EU AI Act ISO 42001 SOC2, model-agnostic AI, production AI deployment',
    'DC.publisher': 'Invisigent',
    'ai-content-declaration': 'human-authored',
  },
};

/** All JSON-LD in the server component so it ships in initial HTML — visible to all crawlers */
const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://invisigent.ai/services#webpage',
      url: 'https://invisigent.ai/services',
      name: 'Services — Enterprise AI Infrastructure | Invisigent',
      description:
        'Enterprise AI infrastructure consulting, LangGraph agent orchestration, Pinecone RAG systems, and compliance-ready AI for global organizations.',
      dateModified: '2026-06-14',
      inLanguage: 'en',
      isPartOf: { '@id': 'https://invisigent.ai/#website' },
      breadcrumb: { '@id': 'https://invisigent.ai/services#breadcrumb' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://invisigent.ai/services#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invisigent.ai' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://invisigent.ai/services' },
      ],
    },
    {
      '@type': 'OfferCatalog',
      '@id': 'https://invisigent.ai/services#catalog',
      name: 'Enterprise AI Infrastructure Services',
      provider: { '@id': 'https://invisigent.ai/#organization' },
      numberOfItems: 7,
      itemListElement: [
        {
          '@type': 'Offer',
          position: 1,
          name: 'AI & Technology Strategy Consulting',
          description: 'AI roadmap design, infrastructure strategy, and architecture direction aligned with your business constraints. Identifies where multi-agent systems make sense vs. simpler pipelines.',
        },
        {
          '@type': 'Offer',
          position: 2,
          name: 'Agentic Orchestration & AI Workflows',
          description: 'Multi-agent systems using LangGraph with LangSmith observability. Supervisor agents, specialist subagents, shared memory layers, tool-calling pipelines — the full orchestration stack for production reliability.',
        },
        {
          '@type': 'Offer',
          position: 3,
          name: 'RAG & Knowledge Retrieval Systems',
          description: 'Retrieval pipelines using Pinecone vector stores, Cohere re-ranking, and chunking strategies tuned for your document types. Sub-3-second retrieval targets with hybrid search for accuracy at scale.',
        },
        {
          '@type': 'Offer',
          position: 4,
          name: 'AI Performance & Latency Optimization',
          description: 'Audit and redesign of AI system architecture to eliminate bottlenecks — inference latency, over-retrieval, redundant API calls, cold-start delays — for production-grade speed and cost efficiency.',
        },
        {
          '@type': 'Offer',
          position: 5,
          name: 'AI-Native Product Development',
          description: 'AI-first products using FastAPI or Node.js/Express backends, MongoDB for operational data, and Docker for portable deployment. AI embedded into the core product logic from day one.',
        },
        {
          '@type': 'Offer',
          position: 6,
          name: 'Compliance-Ready AI Systems',
          description: 'AI systems with governance designed into the architecture from day one — data residency controls, RBAC, audit logs, and EU AI Act risk classification. Aligned with GDPR, DPDP Act, ISO 42001, and SOC2.',
        },
        {
          '@type': 'Offer',
          position: 7,
          name: 'Technology Consulting & Advisory',
          description: 'Senior-level technical guidance — architecture reviews, build-vs-buy decisions, system design, and scaling strategy for AI infrastructure before committing to a direction.',
        },
      ],
    },
    {
      '@type': 'HowTo',
      '@id': 'https://invisigent.ai/services#engagement',
      name: 'How Invisigent Engages With Clients',
      description: 'Three engagement models for enterprise AI infrastructure: Strategy Engagement, System Build, and Ongoing Partnership.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Strategy Engagement',
          text: 'Short-term advisory (2–4 weeks) to define your AI architecture, roadmap, and infrastructure strategy. Ends with a clear, actionable plan your team can execute.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'System Build',
          text: 'End-to-end design and development of your AI system — from architecture to production deployment. We own the build and hand over a system your team can run.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Ongoing Partnership',
          text: 'Continuous optimization, scaling, and system evolution after launch — monitoring, improving, and adapting as your AI infrastructure grows.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://invisigent.ai/services#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Which compliance frameworks does Invisigent support?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We design systems aligned with GDPR for EU deployments, India\'s DPDP Act for Indian operations, EU AI Act risk classification requirements, ISO 42001 for AI governance documentation, and SOC2 for US enterprise procurement. Compliance architecture is included in every system build — not offered as a separate add-on or reviewed at deployment.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does "compliance designed in" actually mean?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Compliance requirements are collected during discovery and built into the system architecture before development begins. Data residency controls, RBAC, audit trails, and governance documentation are designed from sprint one — so by the time your security or legal team reviews the system, there is nothing left to retrofit.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens after the AI system is deployed?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Every system ships with operational runbooks, monitoring configuration, defined performance baselines, and full documentation — everything your team needs to run it without us. For organizations that want ongoing optimization and scaling support, we offer quarterly partnership engagements with defined deliverables. Ongoing involvement is always optional — never a requirement.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I start with a strategy engagement and move to a full system build?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — and this is a common progression. The strategy engagement produces a documented architecture plan your team can act on immediately. If you choose to move to a full system build, the architecture work completed in the strategy phase becomes the foundation — no duplication, no restart.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you build on our existing tech stack or replace it?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We design around what you already run. Our infrastructure is model-agnostic and framework-flexible — we integrate with your existing CRMs, databases, and internal tools rather than replacing them with a proprietary platform. If components of your current stack are creating bottlenecks, we will tell you during discovery before development begins.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do you handle system performance after deployment?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Every system ships with defined SLAs and monitoring pipelines. For ongoing partnership engagements, we conduct quarterly performance reviews, identify optimization opportunities, and implement improvements against agreed deliverables. Performance baselines are set during deployment so you always have a clear reference point for what the system should be doing.',
          },
        },
        {
          '@type': 'Question',
          name: 'What AI frameworks and infrastructure do you build on?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We build on open frameworks your team can inspect, extend, and own — LangGraph for agent orchestration, LangSmith for observability, Pinecone for vector retrieval, FastAPI and Node.js for backend infrastructure, and Docker for portable deployment. No proprietary platform. No lock-in. Every component is replaceable if a better option emerges.',
          },
        },
      ],
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <Breadcrumb items={[{ label: 'Services' }]} />
      <ServicesPageClient />
    </>
  );
}
