import IndustryPage from "@/components/IndustryPage";

export default function HealthcarePage() {
  return (
    <IndustryPage
      title="Healthcare & Life Sciences"
      subtitle="HIPAA-compliant IT operations with validated processes for providers, payers, pharma, and medical device organizations across India."
      pains={[
        "Protected Health Information (PHI) sprawl creates audit and privacy risk across multi-location hospital networks.",
        "Legacy biomedical devices lack visibility and security patch governance, exposing patient data.",
        "Regulatory compliance (Medical Devices Rules 2017, Digital Information Security in Healthcare Act) demands traceable quality records.",
      ]}
      solutions={[
        "End-to-end asset catalog across clinical, biomedical, and research environments with PHI tracking.",
        "Network segmentation insights and automated remediation for vulnerable medical devices.",
        "Validation workflows capturing electronic signatures, approvals, and complete audit trails.",
      ]}
      compliance={["HIPAA", "DISHA", "Medical Devices Rules 2017", "ISO 27001", "ISO 13485"]}
      caseStudy={{
        client: "Apollo Hospitals",
        challenge: "Inconsistent device inventories across 70+ hospitals and manual compliance documentation created audit risk.",
        solution: "Galactis unified ITAM/CMDB across all locations, automated validation workflows, and monitored PHI access with real-time alerts.",
        result: "Eliminated 24 audit findings and accelerated onboarding of new clinics by 40%, saving ₹1.8 Cr in compliance costs.",
      }}
      metrics={[
        { label: "PHI Exposure", value: "Zero critical findings post-implementation" },
        { label: "Compliance Documentation", value: "75% reduction in manual effort" },
        { label: "Device Uptime", value: "99.7% availability" },
      ]}
    />
  );
}
