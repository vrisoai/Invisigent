import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Invisigent — Enterprise AI Infrastructure Firm Built for Production',
  description:
    'Invisigent is an enterprise AI infrastructure firm that designs LangGraph agent orchestration, Pinecone RAG pipelines, and multi-agent AI systems for global organizations. Founded by engineers. Built for production.',
  keywords: [
    'About Invisigent',
    'Enterprise AI Infrastructure Firm',
    'AI Systems Architecture Company',
    'LangGraph Consulting',
    'Multi-Agent AI Firm',
    'RAG Pipeline Consulting',
    'Pinecone AI Systems',
    'AI Infrastructure Engineers',
    'Enterprise AI Consulting Firm',
    'Production AI Systems',
    'GDPR Compliant AI Infrastructure',
    'EU AI Act Compliance',
    'DPDP AI Compliance',
  ],
  alternates: {
    canonical: 'https://invisigent.ai/about',
  },
  openGraph: {
    title: 'About Invisigent — Enterprise AI Infrastructure Built for Production',
    description:
      'Enterprise AI infrastructure firm building LangGraph agent orchestration, Pinecone RAG systems, and multi-agent AI for global organizations. Founded by engineers. No vendor lock-in.',
    url: 'https://invisigent.ai/about',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'About Invisigent — Enterprise AI Infrastructure',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Invisigent — Enterprise AI Infrastructure Built for Production',
    description:
      'Enterprise AI infrastructure firm building LangGraph agent orchestration, Pinecone RAG systems, and multi-agent AI for global organizations.',
    images: ['/og-image.png'],
  },
};

const aboutJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    /* ── Organization (self-contained so this page resolves standalone) ── */
    {
      '@type': 'Organization',
      '@id': 'https://invisigent.ai/#organization',
      name: 'Invisigent',
      url: 'https://invisigent.ai',
      description:
        'Invisigent is an enterprise AI infrastructure firm that designs and deploys production AI systems — LangGraph multi-agent orchestration, Pinecone RAG pipelines, AI automation, and compliance-ready AI infrastructure for global organizations.',
      foundingLocation: {
        '@type': 'Place',
        name: 'Jaipur, India',
      },
      areaServed: 'Global',
      knowsAbout: [
        'Enterprise AI Infrastructure',
        'LangGraph Agent Orchestration',
        'Multi-Agent AI Systems',
        'Pinecone RAG Pipelines',
        'AI Automation Infrastructure',
        'LangSmith Observability',
        'GDPR Compliant AI',
        'EU AI Act Compliance',
        'DPDP Act AI Compliance',
      ],
      serviceType: [
        'Enterprise AI Systems',
        'Agent Orchestration',
        'RAG Knowledge Pipelines',
        'AI Automation Infrastructure',
        'AI-Native Product Development',
      ],
    },
    /* ── Founder / Person entity ── */
    {
      '@type': 'Person',
      '@id': 'https://invisigent.ai/#founder',
      jobTitle: 'Founder & AI Infrastructure Engineer',
      worksFor: { '@id': 'https://invisigent.ai/#organization' },
      knowsAbout: [
        'Agentic AI Systems',
        'Production AI Infrastructure',
        'LangGraph',
        'Enterprise AI Architecture',
      ],
      homeLocation: {
        '@type': 'Place',
        name: 'Jaipur, Rajasthan, India',
      },
    },
    /* ── AboutPage ── */
    {
      '@type': 'AboutPage',
      '@id': 'https://invisigent.ai/about#aboutpage',
      url: 'https://invisigent.ai/about',
      name: 'About Invisigent — Enterprise AI Infrastructure Firm',
      description:
        'Invisigent is an enterprise AI infrastructure firm that designs and builds production AI systems — LangGraph agent orchestration, Pinecone RAG pipelines, AI automation, and compliance-ready AI infrastructure for global organizations.',
      datePublished: '2024-01-01',
      dateModified: '2026-04-18',
      inLanguage: 'en',
      mainEntity: { '@id': 'https://invisigent.ai/#organization' },
      breadcrumb: { '@id': 'https://invisigent.ai/about#breadcrumb' },
    },
    /* ── Breadcrumb ── */
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://invisigent.ai/about#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://invisigent.ai',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'About Invisigent',
          item: 'https://invisigent.ai/about',
        },
      ],
    },
    /* ── HowTo: 4-phase build process ── */
    {
      '@type': 'HowTo',
      '@id': 'https://invisigent.ai/about#howwebuild',
      name: 'How Invisigent Builds Enterprise AI Infrastructure',
      description:
        'Four-phase process for designing and deploying production AI systems: Discovery & AI Strategy, Architecture Design, Deployment & Integration, Optimization & Scaling.',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Discovery & AI Strategy',
          position: 1,
          text: 'Analyze existing infrastructure, data environment, and operational priorities to identify where AI systems deliver real business impact.',
        },
        {
          '@type': 'HowToStep',
          name: 'Architecture Design',
          position: 2,
          text: 'Design full system architecture — LangGraph orchestration layers, Pinecone vector retrieval pipelines, n8n or FastAPI automation frameworks, and Docker infrastructure.',
        },
        {
          '@type': 'HowToStep',
          name: 'Deployment & Integration',
          position: 3,
          text: 'Deploy with LangSmith monitoring, defined performance baselines, operational runbooks, RBAC configuration, and audit trail setup.',
        },
        {
          '@type': 'HowToStep',
          name: 'Optimization & Scaling',
          position: 4,
          text: 'Continuously monitor, optimize for performance, and scale systems as usage grows with defined SLAs.',
        },
      ],
    },
    /* ── ItemList: focus areas ── */
    {
      '@type': 'ItemList',
      '@id': 'https://invisigent.ai/about#focus',
      name: 'Invisigent Enterprise AI Focus Areas',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Agent Orchestration Systems',
          description:
            'LangGraph-based multi-agent frameworks that coordinate complex task sequences, manage state across agent runs, and execute multi-step reasoning pipelines in production.',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'AI Automation Infrastructure',
          description:
            'n8n and FastAPI-based automation pipelines connecting existing systems to AI decision layers — enabling autonomous operations at scale.',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Enterprise Knowledge Systems',
          description:
            'Pinecone and Cohere-powered RAG pipelines with sub-3-second retrieval latency, audit-ready traces, and no hallucinations.',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'AI-Native Product Development',
          description:
            'AI infrastructure for copilots, intelligent assistants, and AI-first SaaS products — including backend API design, model integration, and production deployment architecture.',
        },
      ],
    },
    /* ── FAQPage ── */
    {
      '@type': 'FAQPage',
      '@id': 'https://invisigent.ai/about#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What makes Invisigent different from other AI consulting firms?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We build the infrastructure, not just the strategy deck. Most AI consultancies advise on what to build and hand it back to your team. Invisigent designs, builds, and deploys production AI systems — with monitoring, documentation, and compliance controls included. We also do not lock you into our platform or tooling; everything we build, you own.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does a typical AI infrastructure engagement take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Strategy engagements typically run 2–4 weeks and end with a documented architecture plan. Full system builds range from 6–16 weeks depending on complexity and integration requirements. Ongoing partnerships are scoped quarterly with defined deliverables.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you work with organizations that have no existing AI infrastructure?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — and these are often the best engagements. Starting without legacy AI infrastructure means we can design the right architecture from the beginning rather than working around technical decisions made in a prototype phase.',
          },
        },
      ],
    },
  ],
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      {children}
    </>
  );
}
