import type { Metadata } from "next";
import Breadcrumb from "@/app/components/Breadcrumb";
import { InvisigentLogoSection } from "@/app/components/InvisigentLogoSection";
import FooterSection from "@/app/components/FooterSection";
import MultiAgentDemoClient from "./MultiAgentDemoClient";

export const metadata: Metadata = {
  title: "Multi-Agent Document Intelligence — Live Contract Analysis",
  description:
    "Upload a contract PDF and watch three AI agents extract entities, assess compliance risk, and generate an executive briefing in real time. Built with LangGraph and Claude.",
  robots: { index: false, follow: false },
};

export default function MultiAgentDocumentIntelligencePage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Interactive Demos", href: "/interactive-demo" },
          { label: "Multi-Agent Document Intelligence" },
        ]}
      />
      <MultiAgentDemoClient />
      <InvisigentLogoSection />
      <FooterSection />
    </>
  );
}
