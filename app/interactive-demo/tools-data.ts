export type Tool = {
  id: string;
  name: string;
  shortDescription: string;
  capabilities: string[];
  cta: string;
  ctaHref?: string;
  ctaExternal?: boolean;
  featured?: boolean;
};

/** Standard tool cards with no preview mock (copy + CTA only) */
export const STANDARD_TOOL_IDS_WITHOUT_MOCK = new Set<string>([
  'market-intelligence-engine',
  // 'ecommerce-ai-assistant',
  // 'search-visibility-analyzer',
]);

export const TOOLS: Tool[] = [
  {
    id: 'multi-agent-document-intelligence',
    name: 'Multi-Agent Document Intelligence',
    shortDescription:
      'Full-stack AI application that analyzes PDF contracts in real time using a sequential three-agent pipeline — built for legal teams, business analysts, and C-suite executives.',
    capabilities: [
      'Automated contract entity extraction',
      'Compliance risk flagging & assessment',
      'Live-streaming executive briefing generation',
    ],
    cta: 'Launch Live Demo',
    ctaHref: '/multi-agent-document-intelligence',
    ctaExternal: false,
    featured: true,
  },
  {
    id: 'market-intelligence-engine',
    name: 'Market Intelligence Engine',
    shortDescription:
      'AI system that aggregates and analyzes market data to generate actionable insights.',
    capabilities: [
      'News aggregation and analysis',
      'Trend detection',
      'Insight generation',
    ],
    cta: 'Try Demo',
    ctaHref: '/market-intelligence-engine',
  },
  /* {
    id: 'ecommerce-ai-assistant',
    name: 'E-commerce AI Assistant',
    shortDescription:
      'AI-powered product discovery using semantic search and user intent.',
    capabilities: [
      'Intent-based product search',
      'Personalized recommendations',
      'Improved conversion flow',
    ],
    cta: 'Try Demo',
    ctaHref: '/ecommerce-ai-assistant',
  }, */
  /* {
    id: 'search-visibility-analyzer',
    name: 'Search Visibility Analyzer',
    shortDescription:
      'Analyze your Google rankings, local business visibility, and SEO performance with AI-powered insights.',
    capabilities: [
      'Organic keyword ranking analysis',
      'Google Business Profile (GMB) visibility insights',
      'AI-generated SEO recommendations',
    ],
    cta: 'Generate Report',
    ctaHref: '/search-visibility-analyzer',
  }, */
];
