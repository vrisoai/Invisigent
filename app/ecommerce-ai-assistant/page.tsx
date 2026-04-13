import type { Metadata } from 'next';
import { EcommerceAssistantChat } from '@/app/components/EcommerceAssistantChat';
import { VrisoLogoSection } from '@/app/components/VrisoLogoSection';
import FooterSection from '@/app/components/FooterSection';

export const metadata: Metadata = {
  title: 'E-commerce AI Assistant',
  description:
    'Virtual shopping assistant for recommendations, orders, and catalog help — personalized customer service at scale.',
  openGraph: {
    title: 'E-commerce AI Assistant | Invisigent',
    description:
      'Chat demo: product help, order questions, and brand-aligned shopping support.',
  },
};

export default function EcommerceAiAssistantPage() {
  return (
    <main className="ecommerce-assistant-page">
      <div className="section-wrapper ecommerce-assistant-page-inner">
        <div className="ecommerce-assistant-page-grid">
          <header className="ecommerce-assistant-page-intro">
            <p className="ecommerce-assistant-page-eyebrow font-mono text-label uppercase tracking-widest text-text-tertiary">
              Demo
            </p>
            <h1 className="ecommerce-assistant-page-title text-section-h font-serif font-semibold leading-tight text-text-primary">
              E-commerce AI Assistant
            </h1>
            <p className="ecommerce-assistant-page-lede text-body mt-5 max-w-xl font-serif leading-relaxed text-text-secondary">
              The E-commerce Customer Interaction Bot is a virtual extension of your customer service team, built to
              deliver personalized shopping assistance at scale. Customers can use it to get product recommendations,
              track orders, resolve issues, or explore your catalog, all aligned with your brand&apos;s offerings.
            </p>
          </header>

          <div className="ecommerce-assistant-chat-card glass-card">
            <EcommerceAssistantChat />
          </div>
        </div>
      </div>
      <VrisoLogoSection />
      <FooterSection />
    </main>
  );
}
