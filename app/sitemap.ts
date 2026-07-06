import type { MetadataRoute } from 'next';

const BASE_URL = 'https://invisigent.ai';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/insights`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/insights/why-your-business-is-losing-customers-while-you-sleep`,
      lastModified: new Date('2026-04-23'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/insights/the-real-reason-ai-tools-dont-work-for-most-small-businesses`,
      lastModified: new Date('2026-04-23'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/insights/how-a-2-person-team-can-compete-with-a-20-person-company-using-ai`,
      lastModified: new Date('2026-04-23'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/insights/7-ai-implementation-mistakes-that-burn-budget-and-how-to-avoid-them`,
      lastModified: new Date('2026-05-04'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/insights/why-enterprise-ai-accuracy-is-an-infrastructure-problem`,
      lastModified: new Date('2026-05-12'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/insights/ai-infrastructure-for-businesses-in-2026`,
      lastModified: new Date('2026-05-27'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/insights/ai-hallucination-fix-infrastructure`,
      lastModified: new Date('2026-06-07'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/insights/n8n-ai-automation-tutorial`,
      lastModified: new Date('2026-06-14'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/insights/ai-observability-for-production-ai-teams`,
      lastModified: new Date('2026-07-07'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/case-studies`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/case-studies/multi-agent-document-intelligence`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/case-studies/stock-research-agent`,
      lastModified: new Date('2026-07-07'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/case-studies/governed-ai-architecture-walkthrough`,
      lastModified: new Date('2026-07-07'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/case-studies/ipo-prospectus-intelligence`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/interactive-demo`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    // {
    //   url: `${BASE_URL}/search-visibility-analyzer`,
    //   lastModified: now,
    //   changeFrequency: 'weekly',
    //   priority: 0.6,
    // },
    // {
    //   url: `${BASE_URL}/ecommerce-ai-assistant`,
    //   lastModified: now,
    //   changeFrequency: 'monthly',
    //   priority: 0.6,
    // },
    {
      url: `${BASE_URL}/market-intelligence-engine`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/multi-agent-document-intelligence`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
  ];
}
