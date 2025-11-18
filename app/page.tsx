import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import GA from "@/components/GA";
import JsonLd from "@/components/JsonLd";
import CursorLight from "@/components/CursorLight";
import ScrollProgress from "@/components/ScrollProgress";
import CustomersMarquee from "@/components/CustomersMarquee";
import StatsSection from "@/components/StatsSection";
import FeatureHighlights from "@/components/FeatureHighlights";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import WhyGalactis from "@/components/WhyGalactis";
import HomepageROICalculator from "@/components/HomepageROICalculator";
import CaseStudyCards from "@/components/CaseStudyCards";
import PlatformBlueprint from "@/components/PlatformBlueprint";
import UseCaseTabs from "@/components/UseCaseTabs";
import EnterpriseCTA from "@/components/EnterpriseCTA";
import ScrollReveal from "@/components/ScrollReveal";
import PlatformShowcase from "@/components/PlatformShowcase";
import IndustrySpotlightCards from "@/components/IndustrySpotlightCards";
import InsightHighlightCards from "@/components/InsightHighlightCards";
import ImpactStreams from "@/components/ImpactStreams";
import CustomerProof from "@/components/CustomerProof";
import LifeAtGalactis from "@/components/LifeAtGalactis";
import StickyCTABand from "@/components/StickyCTABand";
import { ArrowUpRight, Code2, Shield, Share2 } from "lucide-react";
import Link from "next/link";

const industrySpotlights = [
  {
    industry: "Financial Services",
    summary: "PCI-DSS, SOX, and FFIEC-aligned controls across trading, retail banking, and insurance.",
    bullets: ["$3.2M audit risk avoided", "90% faster evidence packs"],
    href: "/solutions/financial-services",
  },
  {
    industry: "Telecommunications",
    summary: "CALEA and CPNI compliance with predictive service assurance for 5G, core, and edge.",
    bullets: ["42% fewer P1 incidents", "60% faster customer comms"],
    href: "/solutions/telecommunications",
  },
  {
    industry: "Healthcare & Life Sciences",
    summary: "HIPAA-ready IT + biomedical operations with validation workflows and PHI guardrails.",
    bullets: ["0 PHI findings", "75% faster compliance documentation"],
    href: "/solutions/healthcare",
  },
];

const builderHighlights = [
  {
    title: "API-first platform",
    body: "OpenAPI 3.1 spec, Postman collection, and CLI from galactis.ai/developers.",
    icon: Code2,
  },
  {
    title: "Compliance-aware sandboxes",
    body: "Mirrors production controls for SOC 2, ISO 27001, HIPAA, and GDPR.",
    icon: Shield,
  },
  {
    title: "Connectors & events",
    body: "200+ integrations plus streaming into EventBridge, Kafka, or webhooks.",
    icon: Share2,
  },
];

const insightHighlights = [
  {
    type: "Case study",
    title: "Tier-1 Global Bank",
    snippet: "$3.2M audit risk avoided; 28% software waste reduction.",
    href: "/resources/case-studies",
  },
  {
    type: "Guide",
    title: "Network Automation Reference Kit",
    snippet: "Reference architectures and integration tips we share during partner enablement.",
    href: "/resources/case-studies",
  },
  {
    type: "Blog",
    title: "Architecting Agentic Workflows for Regulated Industries",
    snippet: "Design patterns for AI agents with governance, approvals, and audit trails.",
    href: "/resources/blog",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans dark:bg-black">
      <ScrollProgress />
      <CursorLight />
      <GA />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Galactis.ai",
          url: "https://galactis.ai",
          logo: "https://galactis.ai/galactis-logo.svg",
          description:
            "Enterprise ITAM, Network Monitoring & AI Agents Platform",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+1-XXX-XXX-XXXX",
            contactType: "sales",
            areaServed: "Worldwide",
          },
          sameAs: [
            "https://linkedin.com/company/galactis-ai",
            "https://twitter.com/galactis_ai",
          ],
        }}
      />
      <Navbar />
      <main className="scroll-smooth">
        <Hero />
        <WhyGalactis />
        <CustomersMarquee />
        <PlatformShowcase />
        <ImpactStreams />
        <HomepageROICalculator />
        <StatsSection />
        <FeatureHighlights />
        <CustomerProof />
        <section className="bg-gradient-to-b from-zinc-50 to-white py-20 dark:from-zinc-900 dark:to-black">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-3 text-center sm:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-purple-600">
                Industry operating models
              </p>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white sm:text-3xl">Extracted from our solutions pages</h2>
              <p className="text-base text-zinc-600 dark:text-zinc-400">
                Each card summarizes the pain, solution, and KPIs published on galactis.ai/solutions for regulated industries.
              </p>
            </div>
            <IndustrySpotlightCards spotlights={industrySpotlights} />
          </div>
        </section>
        <TestimonialCarousel />
        <CaseStudyCards />
        <LifeAtGalactis />
        <PlatformBlueprint />
        <UseCaseTabs />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <EnterpriseCTA />
        </div>
        <StickyCTABand />
      </main>
      <Footer />
    </div>
  );
}
