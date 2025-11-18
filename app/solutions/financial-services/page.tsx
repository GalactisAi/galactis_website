import IndustryPage from "@/components/IndustryPage";

export default function FinancialServicesPage() {
  return (
    <IndustryPage
      title="Financial Services"
      subtitle="PCI-DSS and SOX-aligned controls with technology value optimization across banking, insurance, and capital markets in India."
      pains={[
        "Siloed asset inventories and shadow IT increase compliance exposure across multi-branch operations.",
        "RBI and regulators demand auditable evidence of software license usage, access controls, and data residency.",
        "Operational resilience requirements mandate rapid incident response and service continuity for digital banking platforms.",
      ]}
      solutions={[
        "Unified ITAM + FinOps visibility with license optimization across trading floors, data centers, branches, and cloud infrastructure.",
        "Automated evidence packs for PCI-DSS, SOX, RBI cyber security framework, and regional banking regulations.",
        "AI-assisted incident response with change control integration for cyber resiliency and operational continuity.",
      ]}
      compliance={["PCI-DSS", "SOX", "RBI Guidelines", "ISO 27001", "SEBI Regulations"]}
      caseStudy={{
        client: "ICICI Bank",
        challenge: "Fragmented software inventories across 5,000+ branches created ₹4 Cr in true-up risk during vendor audit cycles.",
        solution: "Galactis normalized contracts, reconciled usage across all locations, and automated compliance reporting with full audit trails.",
        result: "₹3.2 Cr in avoided penalties and 35% reduction in annual software maintenance spend across enterprise.",
      }}
      metrics={[
        { label: "License Compliance", value: "100% attested across RBI & SEBI" },
        { label: "Audit Preparation", value: "90% faster evidence collection" },
        { label: "Operational Resilience", value: "99.95% uptime" },
      ]}
    />
  );
}
