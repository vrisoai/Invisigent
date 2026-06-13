/**
 * SchemaOrg.tsx — Server component. No 'use client'.
 * Injects JSON-LD for SEO and GEO (AI engine citation optimization).
 */

export default function SchemaOrg() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://invisigent.ai/#organization',
        name: 'Invisigent',
        url: 'https://invisigent.ai',
        logo: {
          '@type': 'ImageObject',
          url: 'https://invisigent.ai/logo.png',
          width: 200,
          height: 60,
        },
        description:
          'Invisigent designs and builds custom AI infrastructure for mid-market and enterprise organizations — multi-agent systems, RAG knowledge retrieval, and production-grade workflow automation. Compliance-ready for GDPR, DPDP Act 2023, EU AI Act, and SOC2 regulated environments.',
        foundingLocation: {
          '@type': 'Place',
          name: 'Jaipur, Rajasthan, India',
        },
        knowsAbout: [
          'AI Infrastructure Design',
          'Multi-Agent AI Systems',
          'Agentic Workflow Orchestration',
          'RAG Knowledge Retrieval',
          'Enterprise AI Automation',
          'AI Observability and Monitoring',
          'GDPR Compliant AI',
          'DPDP Act 2023 Compliance',
          'EU AI Act Compliance',
          'SOC2 AI Systems',
          'AI Guardrail Design',
          'Production AI Infrastructure',
          'AI Infrastructure Ownership',
        ],
        areaServed: [
          { '@type': 'Country', name: 'India' },
          { '@type': 'Country', name: 'United States' },
          { '@type': 'Country', name: 'United Kingdom' },
          { '@type': 'Country', name: 'Australia' },
          { '@type': 'AdministrativeArea', name: 'European Union' },
        ],
        slogan: 'AI Infrastructure Built to Be Owned, Not Rented',
        sameAs: [
          'https://www.linkedin.com/company/invisigent/',
          'https://x.com/invisigent_ai',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://invisigent.ai/#website',
        url: 'https://invisigent.ai',
        name: 'Invisigent',
        publisher: { '@id': 'https://invisigent.ai/#organization' },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://invisigent.ai/search?q={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'ConsultingService',
        '@id': 'https://invisigent.ai/#service',
        name: 'Enterprise AI Architecture Retainer',
        provider: { '@id': 'https://invisigent.ai/#organization' },
        serviceType: 'AI Systems Architecture',
        description:
          'Strategic AI retainer for enterprise organizations requiring sovereign multi-agent orchestration and governance infrastructure.',
        areaServed: ['EU', 'IN', 'US'],
        knowsAbout: [
          'Agentic Orchestration',
          'Multi-Agent Governance',
          'GDPR Compliance',
          'DPDP Compliance',
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
