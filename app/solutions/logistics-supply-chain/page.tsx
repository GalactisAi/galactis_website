import IndustryPage from "@/components/IndustryPage";

export default function LogisticsPage() {
  return (
    <IndustryPage
      title="Logistics & Supply Chain"
      subtitle="Customs and GST compliant visibility across warehouses, fleets, and multi-modal operations with resilient automation."
      pains={[
        "Fragmented systems obscure asset location, maintenance status, and chain-of-custody across pan-India operations.",
        "Network outages disrupt warehouse automation, TMS, GPS tracking, and real-time customer commitments.",
        "GST compliance, e-way bills, and customs documentation demand tamper-proof audit logs and rapid processing.",
      ]}
      solutions={[
        "Real-time tracking of hardware, IoT devices, vehicles, and software entitlements across warehouses and distribution centers.",
        "Predictive incident response for WMS, TMS, fleet-telematics, and last-mile delivery integrations.",
        "AI agents orchestrate GST filing, e-way bill generation, customs documentation, compliance workflows, and customer updates.",
      ]}
      compliance={["GST Compliance", "E-Way Bill", "Customs Act", "ISO 28000", "SOC2"]}
      caseStudy={{
        client: "LOM Logistics",
        challenge: "Visibility gaps and manual compliance processes across 150+ warehouses slowed deliveries and created GST audit exposure.",
        solution: "Galactis delivered unified asset telemetry, automated GST/e-way bill processing, and AI-driven customer notifications.",
        result: "Cut customs clearance delays by 45%, improved OTIF by 19%, and saved ₹4.2 Cr in compliance and operational costs.",
      }}
      metrics={[
        { label: "On-Time Delivery", value: "+19% OTIF performance" },
        { label: "Compliance Processing", value: "45% faster documentation" },
        { label: "Operational Savings", value: "₹4.2 Cr annually" },
      ]}
    />
  );
}
