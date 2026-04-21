import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://invisigent.ai/sitemap.xml',
    host: 'https://invisigent.ai',
  };
}
