import type { Metadata } from 'next';
import ServicesPageClient from './services-page-client';

export const metadata: Metadata = {
  title: 'Services — Enterprise AI Infrastructure',
  description:
    'Enterprise AI infrastructure consulting, agent orchestration, RAG systems, AI-native product development, and compliance-ready AI for global organizations.',
  alternates: {
    canonical: 'https://vriso.ai/services',
  },
  openGraph: {
    title: 'Services | Invisigent — Enterprise AI Infrastructure',
    description:
      'Enterprise AI infrastructure consulting, agent orchestration, RAG systems, and compliance-ready AI for global organizations.',
    url: 'https://vriso.ai/services',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Invisigent Services — Enterprise AI Infrastructure',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services | Invisigent — Enterprise AI Infrastructure',
    description:
      'Enterprise AI infrastructure consulting, agent orchestration, RAG systems, and compliance-ready AI.',
    images: ['/og-image.png'],
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
