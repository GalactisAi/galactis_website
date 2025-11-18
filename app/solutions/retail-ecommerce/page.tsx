import IndustryPage from "@/components/IndustryPage";

export default function RetailEcommercePage() {
  return (
    <IndustryPage
      title="Retail & E-commerce"
      subtitle="PCI-DSS and Consumer Protection Act compliant digital commerce operations with festive season resilience and omni-channel automation."
      pains={[
        "Festive demand spikes (Diwali, Big Billion Days) strain infrastructure, payment systems, and fulfillment processes.",
        "SKU proliferation across online and offline channels complicates software licensing, subscription waste, and inventory management.",
        "Customer experience depends on accurate real-time inventory, personalized engagement, vernacular support, and rapid query resolution.",
      ]}
      solutions={[
        "Hybrid IT asset visibility across stores, warehouses, dark stores, and digital platforms with FinOps guardrails for cloud costs.",
        "AI agents automate customer care in English and regional languages, handle returns, price matching, and supply chain workflows.",
        "Real-time monitoring of POS, e-commerce platforms, payment gateways, and fulfillment systems with automated remediation.",
      ]}
      compliance={["PCI-DSS", "Consumer Protection Act 2019", "DPDP Act 2023", "ISO 27001", "SOC2"]}
      caseStudy={{
        client: "TVS Motors",
        challenge: "Fragmented systems across dealerships led to inventory mismatches, service delays, and rising support costs.",
        solution: "Galactis unified asset inventory across 1,200+ touchpoints, automated demand-response workflows, and deployed AI service bots.",
        result: "18% increase in on-time fulfillment, ₹8.5 Cr in annualized savings, and 25-point NPS improvement.",
      }}
      metrics={[
        { label: "Order Accuracy", value: "+18% improvement in fulfillment" },
        { label: "Support Automation", value: "60% of Tier 1 inquiries resolved by AI" },
        { label: "Cost Optimization", value: "₹8.5 Cr annual savings" },
      ]}
    />
  );
}
