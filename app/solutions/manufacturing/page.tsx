import IndustryPage from "@/components/IndustryPage";

export default function ManufacturingPage() {
  return (
    <IndustryPage
      title="Manufacturing"
      subtitle="Quality management and operational excellence for smart factories, discrete manufacturing, and process industries across India."
      pains={[
        "Operational technology (OT) assets lack lifecycle governance and security visibility in production environments.",
        "Production downtime incurs significant revenue loss, missed delivery windows, and customer penalties.",
        "Quality standards (ISO 9001, TS 16949) and environmental regulations require strict data and access controls.",
      ]}
      solutions={[
        "Unified inventory for IT, OT, and IIoT assets with software license optimization and predictive maintenance scheduling.",
        "Real-time monitoring for MES, SCADA, PLCs, and connected equipment with automated failover and alerts.",
        "Controlled data flows, quality record management, and audit reporting for ISO, automotive, and environmental compliance.",
      ]}
      compliance={["ISO 9001", "ISO 14001", "TS 16949", "ISO 27001", "SOC2"]}
      caseStudy={{
        client: "Ashok Leyland",
        challenge: "Legacy systems across 9 manufacturing plants and manual processes created quality compliance risk and production downtime.",
        solution: "Galactis provided unified asset intelligence across all plants, automated remediation, and quality compliance evidence packs.",
        result: "Reduced unplanned downtime by 37%, achieved ISO recertification with zero findings, saving ₹6.5 Cr annually.",
      }}
      metrics={[
        { label: "Downtime", value: "37% reduction in unplanned outages" },
        { label: "Compliance Audits", value: "Zero findings in ISO recertification" },
        { label: "Maintenance Costs", value: "22% reduction via predictive scheduling" },
      ]}
    />
  );
}
