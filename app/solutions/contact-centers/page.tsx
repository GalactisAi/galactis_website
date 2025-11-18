import IndustryPage from "@/components/IndustryPage";

export default function ContactCentersPage() {
  return (
    <IndustryPage
      title="Contact Centers"
      subtitle="TRAI and DPDP Act compliant customer engagement with AI-powered voice, chat, and workflow automation for Indian markets."
      pains={[
        "High agent turnover and multilingual requirements drive inconsistent CX and rising operational costs.",
        "Legacy IVR and siloed CRM systems prolong handle times, lower CSAT, and create customer frustration.",
        "Regulatory compliance (TRAI, DPDP Act, DND Registry) requires robust consent management and data handling controls.",
      ]}
      solutions={[
        "AI agents triage and resolve Tier 1 inquiries in English, Hindi, and regional languages with sentiment-aware escalation.",
        "Integrated knowledge base and workflow automation reduce handle time by surfacing next-best actions across all channels.",
        "Consent tracking, call recording governance, DND registry compliance, and automated DPDP reporting.",
      ]}
      compliance={["TRAI DND Registry", "DPDP Act 2023", "PCI-DSS", "SOC2", "ISO 27001"]}
      caseStudy={{
        client: "Infosys",
        challenge: "Rising call volumes across global delivery centers and DPDP compliance requirements created backlog and regulatory risk.",
        solution: "Galactis deployed multilingual voice and chat agents integrated with CRM, QA analytics, and compliance workflows.",
        result: "30% reduction in average handle time, 18-point NPS increase, and ₹2.8 Cr saved in operational costs within 90 days.",
      }}
      metrics={[
        { label: "Average Handle Time", value: "30% reduction" },
        { label: "First Contact Resolution", value: "+22% improvement" },
        { label: "Compliance Violations", value: "Zero TRAI/DPDP violations" },
      ]}
    />
  );
}
