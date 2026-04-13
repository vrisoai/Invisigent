import type { Metadata } from 'next';
import ServicesPageClient from './services-page-client';

export const metadata: Metadata = {
  title: 'Services — Invisigent | Enterprise AI Infrastructure',
  description:
    'Enterprise AI infrastructure consulting, agent orchestration, RAG systems, AI-native product development, and compliance-ready AI for global organizations.',
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
