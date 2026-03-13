import {
  HeroSection,
  ValueProposition,
  CoreServices,
  WhyVRISO,
  HowWeWork,
  StrategicCTASection,
  VrisoLogoSection,
  FooterSection,
} from '@/app/components';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ValueProposition />
      <CoreServices />
      <WhyVRISO />
      <HowWeWork />
      <StrategicCTASection />
      <VrisoLogoSection />
      <FooterSection />
    </main>
  );
}
