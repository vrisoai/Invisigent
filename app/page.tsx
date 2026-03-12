import {
  HeroSection,
  ValueProposition,
  CoreServices,
  WhyVRISO,
  HowWeWork,
  StrategicCTASection,
  VrisoLogoSection,
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
    </main>
  );
}
