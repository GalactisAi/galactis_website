import IndustryPage from "@/components/IndustryPage";

export default function LogisticsPage() {
  return (
    <IndustryPage
      title="Logistics & Supply Chain"
      subtitle="Customs and GST compliant visibility across warehouses, fleets, and multi-modal operations with resilient automation."
      heroHeading="Unified IT Operations for Logistics & Supply Chain"
      heroDescription="Logistics and supply chain organizations operate complex IT environments across warehouses, fleet operations, transportation systems, and cloud platforms. Galactis helps organizations maintain infrastructure visibility, compliance readiness, and operational reliability across distributed logistics environments."
      ctaLabel="Book a Demo"
      compactBusinessOutcomes
      challengesSection={{
        sectionTitle: "IT Challenges in Logistics & Supply Chain",
        sectionDescription:
          "Logistics and supply chain organizations operate distributed technology environments across warehouses, fleet operations, and transportation networks while maintaining compliance and operational reliability.",
        tiles: [
          {
            title: "Limited Visibility Across Distributed Operations",
            description:
              "Logistics companies manage infrastructure and systems across warehouses, fleet operations, and transportation networks, making it difficult to maintain centralized operational visibility.",
          },
          {
            title: "Compliance and Documentation Complexity",
            description:
              "Logistics operations require continuous compliance with customs regulations, tax reporting, and documentation processes across distributed logistics systems.",
          },
          {
            title: "Infrastructure Monitoring Across Warehouses and Fleet Systems",
            description:
              "Warehouse systems, fleet platforms, and operational infrastructure require continuous monitoring to support reliable logistics operations.",
          },
          {
            title: "Operational Reliability of Logistics Platforms",
            description:
              "Transportation management systems, warehouse management platforms, and logistics applications require high availability to support uninterrupted supply chain operations.",
          },
        ],
      }}
      comparisonSection={{
        sectionTitle: "Traditional IT Challenges vs the Galactis Approach",
        left: {
          title: "Traditional IT Challenges",
          subtitle:
            "Common operational and compliance challenges faced by logistics organizations managing distributed warehouse systems, fleet platforms, and supply chain infrastructure.",
          bullets: [
            "Limited visibility across warehouse infrastructure, fleet systems, and logistics platforms.",
            "Manual documentation and compliance processes increase operational overhead.",
            "Fragmented monitoring across supply chain systems and operational infrastructure.",
          ],
        },
        right: {
          title: "How Galactis Supports Logistics Operations",
          subtitle:
            "Galactis provides unified visibility across infrastructure, assets, and logistics systems to help organizations maintain operational efficiency and compliance readiness.",
          bullets: [
            "Centralized visibility across warehouse infrastructure, logistics platforms, and operational systems.",
            "Automated documentation and compliance reporting workflows across supply chain environments.",
            "Improved monitoring across logistics infrastructure and operational platforms.",
          ],
        },
      }}
      capabilitiesSection={{
        sectionTitle: "Core Capabilities for Logistics IT Governance",
        sectionDescription:
          "Logistics organizations require centralized visibility and governance across infrastructure, assets, and operational systems to maintain compliance and support reliable supply chain operations.",
        tiles: [
          {
            title: "Infrastructure Visibility Across Logistics Operations",
            description:
              "Monitor infrastructure supporting warehouses, fleet systems, and transportation platforms across distributed supply chain environments.",
          },
          {
            title: "Logistics System Monitoring",
            description:
              "Maintain operational visibility across transportation management systems, warehouse management platforms, and logistics applications.",
          },
          {
            title: "Automated Compliance and Documentation Workflows",
            description:
              "Automate documentation and reporting workflows to support regulatory compliance across logistics operations and supply chain processes.",
          },
          {
            title: "Operational Insights Across Supply Chain Infrastructure",
            description:
              "Analyze infrastructure performance and operational data to help logistics teams improve reliability and operational efficiency.",
          },
          {
            title: "Asset and Infrastructure Governance",
            description:
              "Track infrastructure and operational assets across warehouses, transportation hubs, and logistics environments.",
          },
        ],
      }}
      complianceSectionOverride={{
        title: "Compliance and Regulatory Alignment",
        description:
          "Galactis supports logistics organizations with governance controls and reporting workflows aligned with regulatory requirements and operational compliance standards across supply chain operations.",
      }}
      integrationsSection={{
        sectionTitle: "Integration With Logistics IT Ecosystems",
        sectionDescription:
          "Galactis integrates with logistics IT environments to connect infrastructure, operational systems, and governance workflows across warehouses, fleet operations, and supply chain platforms.",
        tiles: [
          {
            title: "Cloud and Infrastructure Platforms",
            description:
              "Integrate with cloud providers and hybrid infrastructure environments supporting logistics systems and supply chain platforms.",
          },
          {
            title: "Logistics Operations and Service Management Systems",
            description:
              "Connect with service management and operational systems to synchronize incidents, asset data, and workflows across logistics operations.",
          },
          {
            title: "Security and Compliance Platforms",
            description:
              "Exchange data with security and analytics platforms to support compliance monitoring and operational governance across logistics environments.",
          },
          {
            title: "Infrastructure and DevOps Platforms",
            description:
              "Integrate with infrastructure and DevOps platforms supporting deployment and management of logistics technology platforms.",
          },
        ],
      }}
      integrationsEcosystemSection={{
        sectionTitle: "Works With Your Existing Technology Stack",
        sectionDescription:
          "Galactis integrates with widely used enterprise platforms across cloud infrastructure, logistics operations, security, and enterprise systems.",
        categories: [
          { categoryName: "Cloud Platforms", items: ["AWS", "Microsoft Azure", "Google Cloud"] },
          {
            categoryName: "IT Operations & ITSM",
            items: ["ServiceNow", "BMC Helix", "ManageEngine", "Jira Service Management"],
          },
          {
            categoryName: "Security & Monitoring",
            items: ["Splunk", "Elastic", "Microsoft Sentinel"],
          },
          {
            categoryName: "Infrastructure & DevOps",
            items: ["Kubernetes", "Docker", "VMware", "GitHub"],
          },
          {
            categoryName: "Enterprise Systems",
            items: ["SAP", "Oracle", "Salesforce"],
          },
        ],
      }}
      valuePropositionSection={{
        sectionTitle: "Why Logistics Organizations Choose Galactis",
        tiles: [
          {
            title: "Unified Visibility Across Logistics Infrastructure",
            description:
              "Gain centralized visibility across infrastructure, assets, and operational systems supporting supply chain operations.",
          },
          {
            title: "Improved Compliance and Documentation Readiness",
            description:
              "Streamline compliance workflows and documentation processes across logistics operations and regulatory reporting requirements.",
          },
          {
            title: "Reliable Infrastructure for Supply Chain Operations",
            description:
              "Maintain operational visibility across systems supporting warehouse operations, fleet management, and logistics platforms.",
          },
          {
            title: "Governance Across Distributed Logistics Environments",
            description:
              "Maintain centralized governance across infrastructure and operational systems across warehouses, transportation hubs, and logistics environments.",
          },
          {
            title: "Scalable Platform for Modern Supply Chain Infrastructure",
            description:
              "Support hybrid logistics environments across warehouses, transportation networks, and cloud platforms.",
          },
        ],
      }}
      ctaSectionOverride={{
        title: "Partner With Galactis",
        description:
          "Schedule a consultation to explore how Galactis supports logistics and supply chain organizations with unified infrastructure visibility, compliance readiness, and operational governance.",
        ctaLabel: "Talk to an Expert",
      }}
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
      compliance={["GST Compliance", "Customs Documentation", "ISO 27001", "Supply Chain Governance Standards"]}
      caseStudy={{
        client: "LOM Logistics",
        challenge: "Visibility gaps and manual compliance processes across 150+ warehouses slowed deliveries and created GST audit exposure.",
        solution: "Galactis delivered unified asset telemetry, automated GST/e-way bill processing, and AI-driven customer notifications.",
        result: "Cut customs clearance delays by 45%, improved OTIF by 19%, and saved ₹4.2 Cr in compliance and operational costs.",
      }}
      metrics={[
        {
          label: "Improved On-Time Delivery Performance",
          value:
            "Maintain operational visibility across logistics systems and infrastructure to support reliable delivery operations and improved OTIF performance.",
        },
        {
          label: "Faster Compliance and Documentation Processing",
          value:
            "Automate documentation workflows and compliance reporting across logistics systems, customs processes, and operational infrastructure.",
        },
        {
          label: "Operational Cost Visibility and Optimization",
          value:
            "Gain visibility across infrastructure, systems, and logistics operations to support cost control and operational efficiency.",
        },
      ]}
    />
  );
}
