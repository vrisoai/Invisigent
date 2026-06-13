// app/layout.tsx
import type { Metadata } from 'next';
import { Space_Grotesk, Playfair_Display, JetBrains_Mono } from 'next/font/google';
import Script from 'next/script';
import { Navbar } from '@/app/components';
import { CustomCursor } from '@/app/components/CustomCursor';
import { ChatbotWidget } from '@/app/components/ChatbotWidget';
import SchemaOrg from '@/app/components/SchemaOrg';
import { Analytics } from '@vercel/analytics/next';
import '@/app/styles/globals.css';

const GA_ID = 'G-WNNNJCTFS1';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://invisigent.ai'),
  title: {
    default: 'Invisigent — AI Infrastructure Built to Be Owned, Not Rented',
    template: '%s | Invisigent',
  },
  description:
    'Invisigent designs and builds custom AI infrastructure for mid-market and enterprise organizations — multi-agent systems, RAG knowledge retrieval, and production-grade workflow automation you own outright. Compliance-ready for GDPR, DPDP Act, and EU AI Act.',
  keywords: [
    'AI infrastructure company',
    'custom AI systems architecture',
    'enterprise AI infrastructure',
    'multi-agent AI systems',
    'RAG knowledge retrieval',
    'AI workflow automation',
    'production AI infrastructure',
    'AI agent orchestration',
    'AI infrastructure consulting',
    'GDPR compliant AI',
    'DPDP Act AI compliance',
    'EU AI Act compliance',
    'AI infrastructure India',
    'AI infrastructure US',
    'AI infrastructure UK',
    'AI infrastructure Australia',
    'model-agnostic AI infrastructure',
    'AI systems mid-market',
    'AI infrastructure ownership',
    'agentic workflow automation',
  ],
  authors: [{ name: 'Invisigent', url: 'https://invisigent.ai' }],
  creator: 'Invisigent',
  publisher: 'Invisigent',
  applicationName: 'Invisigent',
  referrer: 'origin-when-cross-origin',
  formatDetection: { telephone: false },
  category: 'Technology',
  classification: 'Business/AI Technology',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://invisigent.ai',
    languages: {
      'x-default': 'https://invisigent.ai',
      'en-US': 'https://invisigent.ai',
      'en-GB': 'https://invisigent.ai',
      'en-AU': 'https://invisigent.ai',
      'en-IN': 'https://invisigent.ai',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['en_IN', 'en_GB', 'en_AU'],
    url: 'https://invisigent.ai',
    siteName: 'Invisigent',
    title: 'Invisigent — AI Infrastructure Built to Be Owned, Not Rented',
    description:
      'Custom AI infrastructure for mid-market and enterprise organizations. Multi-agent systems, RAG knowledge retrieval, and production-grade automation you own outright. GDPR, DPDP, and EU AI Act compliant.',
    images: [
      {
        url: 'https://invisigent.ai/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Invisigent — AI Infrastructure Built to Be Owned, Not Rented',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@invisigent_ai',
    creator: '@invisigent_ai',
    title: 'Invisigent — AI Infrastructure Built to Be Owned, Not Rented',
    description:
      'Custom AI infrastructure for mid-market and enterprise teams. Multi-agent systems, RAG retrieval, production-grade automation — yours to own and operate.',
    images: [{ url: 'https://invisigent.ai/og-image.png', alt: 'Invisigent — AI Infrastructure Built to Be Owned, Not Rented' }],
  },
  other: {
    'geo.region': ['IN-RJ', 'US', 'GB', 'AU'],
    'geo.placename': ['Jaipur, Rajasthan, India', 'United States', 'United Kingdom', 'Australia'],
    'geo.position': '26.9124;75.7873',
    ICBM: '26.9124, 75.7873',
    'og:locale:alternate': 'en_GB,en_AU,en_IN',
    'content-language': 'en',
    language: 'en',
    coverage: 'Worldwide',
    distribution: 'global',
    target: 'all',
    audience: 'CTOs, CEOs, technical founders, operations leaders, mid-market organizations',
    'revisit-after': '7 days',
    rating: 'general',
    'DC.coverage': 'United States, United Kingdom, Australia, India',
    'DC.language': 'en',
    'DC.subject': 'AI infrastructure, custom AI systems architecture, multi-agent AI, RAG knowledge retrieval, AI workflow automation, GDPR DPDP EU AI Act compliance',
    'DC.publisher': 'Invisigent',
    'ai-content-declaration': 'human-authored',
    'citation-url': 'https://invisigent.ai',
    'citation-author': 'Invisigent',
    'citation-title': 'Invisigent — AI Infrastructure Built to Be Owned, Not Rented',
    'theme-color': '#121212',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${playfairDisplay.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <meta name="theme-color" content="#121212" />
        <meta name="color-scheme" content="dark" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <SchemaOrg />
      </head>
      <body className="min-h-screen overflow-x-hidden antialiased font-display">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
        </Script>
        <CustomCursor />
        <Navbar />
        {children}
        <ChatbotWidget />
        <Analytics />
      </body>
    </html>
  );
}
