import IndustryPage from "@/components/IndustryPage";

export default function GovernmentPage() {
  return (
    <IndustryPage
      title="Government & Public Sector"
      subtitle="MeitY and e-Governance aligned operations for central, state, and local government bodies with data sovereignty and Digital India compliance."
      pains={[
        "Legacy systems and fragmented inventories across departments hinder e-governance initiatives and mission readiness.",
        "Compliance mandates (MeitY guidelines, Digital Personal Data Protection Act, Aadhaar security) demand continuous monitoring and documentation.",
        "Budget oversight requires transparency into IT spend, utilization, and Digital India modernization ROI across schemes.",
      ]}
      solutions={[
        "Unified asset catalog with lifecycle and cost controls across on-premise, cloud, and edge deployments with data residency compliance.",
        "Continuous monitoring dashboards with automated compliance tracking for MeitY, CERT-In, and state IT policies.",
        "AI agents automate citizen services, grievance management, inter-department workflows, and multilingual support with security guardrails.",
      ]}
      compliance={["MeitY Guidelines", "DPDP Act 2023", "CERT-In Directives", "ISO 27001", "Aadhaar Act"]}
      caseStudy={{
        client: "State Government IT Department",
        challenge: "Limited visibility into IT assets across 150+ offices and rising costs impacting Digital India initiatives.",
        solution: "Galactis deployed centralized ITAM, FinOps dashboards, AI-powered citizen service automation with vernacular language support.",
        result: "₹18 Cr budget reallocation towards e-governance modernization and 15-point improvement in citizen satisfaction scores.",
      }}
      metrics={[
        { label: "Budget Optimization", value: "₹18 Cr redirected to Digital India programs" },
        { label: "Compliance Reporting", value: "Real-time dashboards with 100% control coverage" },
        { label: "Citizen Satisfaction", value: "+15 points in grievance portal surveys" },
      ]}
    />
  );
}
