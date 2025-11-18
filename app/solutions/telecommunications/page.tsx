import IndustryPage from "@/components/IndustryPage";

export default function TelecomPage() {
  return (
    <IndustryPage
      title="Telecommunications"
      subtitle="TRAI and DoT compliant operations for carriers, ISPs, and media networks with AI-driven service assurance across India."
      pains={[
        "Complex hybrid networks across circles create blind spots leading to SLA breaches and customer churn.",
        "Regulatory compliance requires lawful intercept readiness, subscriber data governance, and DoT reporting.",
        "Manual remediation slows response to outages impacting millions of subscribers and enterprise customers.",
      ]}
      solutions={[
        "Topology-aware observability across core, edge, 5G, and cloud workloads with multi-circle visibility.",
        "Policy enforcement and audit trails for lawful intercept, TRAI regulations, and subscriber privacy (CPNI).",
        "Automated runbooks integrating with NOC, SOC, field operations, and customer communication systems.",
      ]}
      compliance={["TRAI Regulations", "DoT Guidelines", "IT Act 2000", "ISO 27001", "SOC2"]}
      caseStudy={{
        client: "Airtel",
        challenge: "Frequent SLA penalties across 22 telecom circles due to slow outage detection and manual coordination between teams.",
        solution: "Galactis correlated telemetry across all circles, predicted incidents with AI, and automated customer communication workflows.",
        result: "42% reduction in P1 incidents, 60% faster customer notifications, and ₹5.2 Cr saved in SLA penalties.",
      }}
      metrics={[
        { label: "SLA Compliance", value: "98.8% adherence vs 93% baseline" },
        { label: "Incident Volume", value: "P1 events down 42%" },
        { label: "Field Dispatch", value: "26% fewer truck rolls" },
      ]}
    />
  );
}
