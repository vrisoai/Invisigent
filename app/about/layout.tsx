import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Invisigent designs scalable AI systems, automation architectures, and intelligent infrastructure for organizations building production AI capabilities. Founded in Jaipur. Built for global enterprise.',
  alternates: {
    canonical: 'https://vriso.ai/about',
  },
  openGraph: {
    title: 'About | Invisigent',
    description:
      'Building the infrastructure behind enterprise AI. Scalable systems, automation architectures, and intelligent infrastructure.',
    url: 'https://vriso.ai/about',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'About Invisigent — Enterprise AI Systems Architecture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | Invisigent',
    description:
      'Building the infrastructure behind enterprise AI. Scalable systems, automation architectures, and intelligent infrastructure.',
    images: ['/og-image.png'],
  },
};

const aboutJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: 'Invisigent',
      description:
        'Invisigent is an enterprise AI infrastructure consulting firm that designs scalable AI systems, agent orchestration, and intelligent automation for global organizations.',
      foundingLocation: { '@type': 'Place', name: 'Jaipur, India' },
      url: 'https://vriso.ai',
      serviceType: [
        'Enterprise AI Infrastructure Consulting',
        'Agent Orchestration Systems',
        'RAG Knowledge Systems',
        'AI Automation Infrastructure',
      ],
    },
    {
      '@type': 'AboutPage',
      '@id': 'https://vriso.ai/about#aboutpage',
      url: 'https://vriso.ai/about',
      name: 'About Invisigent',
      description:
        'Building the infrastructure behind enterprise AI. Invisigent designs scalable AI systems and intelligent infrastructure for global enterprise.',
      mainEntity: { '@id': 'https://vriso.ai/#organization' },
    },
    {
      '@type': 'HowTo',
      '@id': 'https://vriso.ai/about#howwebuild',
      name: 'How Invisigent Builds AI Infrastructure',
      description:
        'Four-phase process: Discovery & AI Strategy, Architecture Design, Deployment & Integration, Optimization & Scaling.',
      step: [
        { '@type': 'HowToStep', name: 'Discovery & AI Strategy', position: 1 },
        { '@type': 'HowToStep', name: 'Architecture Design', position: 2 },
        { '@type': 'HowToStep', name: 'Deployment & Integration', position: 3 },
        { '@type': 'HowToStep', name: 'Optimization & Scaling', position: 4 },
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
