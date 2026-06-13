import type { Metadata } from 'next';

const CANONICAL = 'https://invisigent.ai/about';
const OG_IMAGE = 'https://invisigent.ai/og-image.png';
const TITLE = 'About Invisigent — Architecture-First AI Infrastructure, Direct Founder Engagement';
const DESCRIPTION =
  'Invisigent is an AI infrastructure firm founded in Jaipur, India — building multi-agent systems, RAG pipelines, and production-grade AI automation for mid-market companies and regulated industries. Architecture-first, model-agnostic, and built to be owned. Every engagement is handled directly by the founder.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'about Invisigent',
    'AI infrastructure firm India',
    'architecture-first AI consulting',
    'multi-agent AI company',
    'model-agnostic AI infrastructure',
    'no vendor lock-in AI systems',
    'AI consulting firm Jaipur India',
    'direct founder AI engagement',
    'production AI systems mid-market',
    'AI infrastructure Series A startup',
    'RAG pipeline AI consulting',
    'GDPR compliant AI company',
    'DPDP Act AI compliance India',
    'EU AI Act AI consulting',
    'FinTech AI infrastructure compliance',
    'HealthTech AI systems production',
    'AI infrastructure discovery strategy',
    'AI architecture design deployment',
    'RBAC audit trail AI systems',
    '6 to 16 weeks AI infrastructure build',
    'AI infrastructure owned by your team',
    'operational handoff AI systems',
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
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: TITLE, type: 'image/png' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@invisigent_ai',
    creator: '@invisigent_ai',
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: OG_IMAGE, alt: TITLE }],
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
    audience: 'CTOs, CEOs, technical founders, operations leaders, mid-market organizations, Series A-B startups, regulated industries',
    'revisit-after': '7 days',
    rating: 'general',
    'DC.coverage': 'United States, United Kingdom, Australia, India',
    'DC.language': 'en',
    'DC.subject': 'AI infrastructure company, architecture-first AI consulting, multi-agent AI systems, RAG pipelines, model-agnostic AI, GDPR DPDP EU AI Act compliance, production AI deployment',
    'DC.publisher': 'Invisigent',
    'ai-content-declaration': 'human-authored',
  },
};

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      '@id': `${CANONICAL}#webpage`,
      url: CANONICAL,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: 'en-US',
      isPartOf: { '@id': 'https://invisigent.ai/#website' },
      breadcrumb: { '@id': `${CANONICAL}#breadcrumb` },
      dateModified: '2026-06-14',
      about: { '@id': 'https://invisigent.ai/#organization' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invisigent.ai' },
        { '@type': 'ListItem', position: 2, name: 'About', item: CANONICAL },
      ],
    },
    {
      '@type': 'Person',
      '@id': `${CANONICAL}#founder`,
      name: 'Founder, Invisigent',
      jobTitle: 'Founder & AI Infrastructure Architect',
      worksFor: { '@id': 'https://invisigent.ai/#organization' },
      knowsAbout: [
        'AI Infrastructure Design',
        'Multi-Agent AI Orchestration',
        'RAG Knowledge Retrieval',
        'Production AI Deployment',
        'GDPR AI Compliance',
        'DPDP Act 2023 Compliance',
        'EU AI Act',
        'AI Observability',
        'AI Guardrail Design',
        'LangGraph',
        'LangSmith',
        'Pinecone',
        'n8n',
        'FastAPI',
      ],
      description:
        'Every Invisigent engagement is handled directly by the founder — no junior team, no handoffs after the first call. Senior-level architecture and deployment expertise from discovery through production.',
    },
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL}#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What makes Invisigent different from other AI consulting firms?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most AI consultancies advise on what to build and hand the work back to your team. We design, build, and deploy production AI systems with monitoring, documentation, compliance controls, and operational runbooks included as standard. Everything we build, you own. No platform lock-in. No ongoing dependency on us to keep it running.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does an Invisigent engagement cost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Every engagement is scoped to the system being built — not priced from a standard rate card. A focused architecture and strategy engagement looks very different from a full multi-agent system build with compliance requirements and third-party integrations. We scope every project during discovery and price it based on complexity, timeline, and what your team needs to own and operate at the end.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does a typical AI infrastructure engagement take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Strategy engagements run 2–4 weeks and end with a documented architecture plan. Full system builds range from 6–16 weeks depending on complexity and integration requirements. Every engagement has defined milestones so you always know what is being delivered and when.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do we need an existing technical team to work with Invisigent?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No — but you do need someone who can own what we build after delivery. We design every system with operational handoff in mind and include full documentation, monitoring access, and runbooks. If your team can manage a SaaS platform, they can run what we build.',
          },
        },
        {
          '@type': 'Question',
          name: 'What if we have no existing AI infrastructure?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'These are often our strongest engagements. Starting without legacy AI infrastructure means we design the right architecture from the beginning — rather than working around decisions made during a prototype phase. Our discovery process is specifically built for organizations at this stage.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens after the AI system is deployed?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You own it. We hand over full documentation, monitoring pipelines, and operational runbooks — everything your team needs to run the system without us. For organizations that want ongoing optimization and scaling support, we offer quarterly partnerships with defined deliverables. But ongoing dependency on Invisigent is never a requirement.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does Invisigent handle compliance requirements like GDPR or DPDP?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Compliance architecture is designed in from sprint one — not reviewed at deployment. Every system includes audit trails, RBAC access controls, and data residency configurations appropriate for the jurisdictions it operates in. If your compliance team has specific requirements, we collect them during discovery and design to meet them before a single line of code is written.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do we know if we are ready to work with Invisigent?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You are likely ready if you have a defined operational problem AI should be solving, a budget committed to infrastructure rather than experimentation, and a team that will own the system after delivery. If you are still exploring whether AI is the right solution, we are not the right partner yet — and we will tell you that on the first call.',
          },
        },
      ],
    },
  ],
};

import Breadcrumb from '@/app/components/Breadcrumb';

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <Breadcrumb items={[{ label: 'About' }]} />
      {children}
    </>
  );
}
