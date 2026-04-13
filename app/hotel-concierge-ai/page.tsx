import type { Metadata } from 'next';
import { HotelConciergeChat } from '@/app/components/HotelConciergeChat';
import { VrisoLogoSection } from '@/app/components/VrisoLogoSection';
import FooterSection from '@/app/components/FooterSection';

export const metadata: Metadata = {
  title: 'Hotel Concierge AI',
  description:
    'Virtual hotel concierge for dining, services, activities, and local experiences — personalized hospitality at scale.',
  openGraph: {
    title: 'Hotel Concierge AI | Invisigent',
    description:
      'Chat demo: book dining, request services, and explore offerings aligned with your property.',
  },
};

export default function HotelConciergeAiPage() {
  return (
    <main className="hotel-concierge-page">
      <div className="section-wrapper hotel-concierge-page-inner">
        <div className="hotel-concierge-page-grid">
          <header className="hotel-concierge-page-intro">
            <p className="hotel-concierge-page-eyebrow font-mono text-label uppercase tracking-widest text-text-tertiary">
              Demo
            </p>
            <h1 className="hotel-concierge-page-title text-section-h font-serif font-semibold leading-tight text-text-primary">
              Hotel Concierge AI
            </h1>
            <p className="hotel-concierge-page-lede text-body mt-5 max-w-xl font-serif leading-relaxed text-text-secondary">
              The Hotel Concierge AI is a virtual extension of a hotel&apos;s front desk, built to deliver personalized
              hospitality at scale. Guests can use it to book dining, request services, plan activities, or explore local
              attractions, all aligned with the hotel&apos;s offerings.
            </p>
          </header>

          <div className="hotel-concierge-chat-card glass-card">
            <HotelConciergeChat />
          </div>
        </div>
      </div>
      <VrisoLogoSection />
      <FooterSection />
    </main>
  );
}
