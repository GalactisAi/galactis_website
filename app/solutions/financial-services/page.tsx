import IndustryPage from "@/components/IndustryPage";

// Updated — Financial Services Page Visual Integration, Layout Standardization, and Content Replacement Completed

export const metadata = {
  title: {
    absolute: "IT Solutions for Financial Services | Galactis",
  },
  description:
    "Financial services IT solutions powered by predictive AI to support regulatory compliance, audit readiness, and secure operations across banking, insurance, and capital markets.",
  alternates: {
    canonical: "https://www.galactis.ai/solutions/financial-services",
  },
};

export default function FinancialServicesPage() {
  return (
    <IndustryPage
      title="Financial Services"
      subtitle="PCI-DSS and SOX-aligned controls with technology value optimization across banking, insurance, and capital markets in India."
      compactBusinessOutcomes
      complianceSectionOverride={{
        title: "Compliance and Regulatory Alignment",
        description:
          "Galactis supports financial institutions with governance controls and reporting workflows aligned with industry frameworks and regulatory standards across banking, payments, and financial infrastructure.",
      }}
      heroHeading="Unified IT Operations for Financial Institutions"
      heroDescription="Financial institutions manage complex IT environments across branches, data centers, and cloud platforms. Galactis provides unified visibility across assets and infrastructure to strengthen compliance, operational resilience, and technology cost governance."
      ctaLabel="Book a Demo"
      challengesSection={{
        sectionTitle: "IT Challenges in Financial Services",
        sectionDescription:
          "Financial institutions operate complex IT environments across branches, data centers, and cloud platforms while meeting strict regulatory requirements and maintaining reliable digital services.",
        tiles: [
          {
            title: "Limited Visibility Across IT Environments",
            description:
              "Financial institutions manage thousands of assets across distributed environments, making it difficult to maintain accurate inventories and track technology usage.",
          },
          {
            title: "Compliance and Audit Complexity",
            description:
              "Banks must continuously demonstrate compliance with regulatory frameworks. Collecting audit evidence manually across multiple systems increases operational overhead and slows regulatory reporting.",
          },
          {
            title: "Software License and Cost Management",
            description:
              "Managing software contracts across distributed environments often leads to unused licenses, vendor audit risks, and limited visibility into technology consumption.",
          },
          {
            title: "Operational Reliability of Critical Systems",
            description:
              "Digital banking, trading, and payment platforms require high availability. Limited infrastructure visibility can make it difficult for IT teams to quickly identify and resolve issues.",
          },
        ],
      }}
      comparisonSection={{
        left: {
          title: "Traditional IT Challenges",
          subtitle:
            "Common operational and compliance challenges faced by financial institutions managing distributed IT environments across branches, data centers, and cloud infrastructure.",
          bullets: [
            "Siloed asset inventories and shadow IT increase compliance risk across multi-branch banking environments.",
            "Regulators require auditable evidence of software usage, access controls, and governance controls.",
            "Fragmented monitoring tools limit operational visibility across infrastructure and critical banking systems.",
          ],
        },
        right: {
          title: "How Galactis Supports Financial Institutions",
          subtitle:
            "Galactis provides unified oversight across assets, infrastructure, and operations to help financial organizations improve governance, compliance readiness, and operational reliability.",
          bullets: [
            "Unified ITAM and operational visibility across branches, data centers, and cloud environments.",
            "Automated compliance evidence collection aligned with PCI-DSS, SOX, and financial regulatory frameworks.",
            "Improved monitoring capabilities to detect infrastructure risks and maintain reliable financial services.",
          ],
        },
      }}
      capabilitiesSection={{
        sectionTitle: "Core Capabilities for Financial IT Governance",
        sectionDescription:
          "Financial institutions require centralized visibility and governance across assets, infrastructure, and software usage to maintain compliance, optimize technology investments, and support reliable financial services.",
        tiles: [
          {
            title: "Unified Asset Discovery",
            description:
              "Automatically discover and track hardware, software, and infrastructure assets across branches, data centers, and cloud environments to maintain accurate inventories.",
          },
          {
            title: "Software License Governance",
            description:
              "Track software usage and license allocations across environments to reduce compliance risks, manage vendor audits, and optimize technology investments.",
          },
          {
            title: "Operational Monitoring and Insights",
            description:
              "Monitor infrastructure and systems across distributed environments to maintain visibility, detect risks earlier, and support reliable banking operations.",
          },
          {
            title: "Automated Compliance Reporting",
            description:
              "Automate evidence collection and reporting to support regulatory frameworks and internal governance policies across financial technology environments.",
          },
        ],
      }}
      integrationsSection={{
        sectionTitle: "Integration With Financial IT Ecosystems",
        sectionDescription:
          "Galactis integrates with existing financial IT environments, connecting asset discovery, monitoring, and governance workflows across critical enterprise systems.",
        tiles: [
          {
            title: "Cloud and Infrastructure Platforms",
            description:
              "Integrate with cloud providers and on-premise infrastructure to maintain visibility across assets, systems, and workloads operating in hybrid financial environments.",
          },
          {
            title: "IT Service Management Systems",
            description:
              "Connect with service management platforms to synchronize asset data, incidents, and operational workflows.",
          },
          {
            title: "Security and Compliance Tools",
            description:
              "Exchange data with security and analytics platforms to support governance monitoring, audit preparation, and risk management.",
          },
          {
            title: "Enterprise Business Systems",
            description:
              "Integrate with enterprise platforms and internal systems to align technology governance with operational and financial processes.",
          },
        ],
      }}
      integrationsEcosystemSection={{
        sectionTitle: "Integrates With Your Enterprise Technology Ecosystem",
        sectionDescription:
          "Galactis connects with widely used enterprise platforms across cloud infrastructure, IT operations, security, and business systems used by financial institutions.",
        categories: [
          { categoryName: "Cloud Platforms", items: ["AWS", "Microsoft Azure", "Google Cloud"] },
          {
            categoryName: "IT Service Management",
            items: ["ServiceNow", "Jira Service Management", "BMC Helix", "ManageEngine"],
          },
          {
            categoryName: "Security & Compliance Platforms",
            items: ["Splunk", "IBM QRadar", "Microsoft Sentinel", "Elastic SIEM"],
          },
          { categoryName: "Enterprise Business Systems", items: ["SAP", "Oracle", "Salesforce"] },
          {
            categoryName: "Infrastructure & DevOps",
            items: ["Kubernetes", "Docker", "VMware", "GitHub", "GitLab"],
          },
        ],
      }}
      valuePropositionSection={{
        sectionTitle: "Why Financial Institutions Choose Galactis",
        tiles: [
          {
            title: "Unified IT Visibility Across Environments",
            description:
              "Gain centralized visibility across assets, infrastructure, and software usage across branches, data centers, and cloud platforms to maintain consistent governance.",
          },
          {
            title: "Automated Compliance and Audit Readiness",
            description:
              "Streamline regulatory reporting with automated evidence collection and governance workflows aligned with financial compliance frameworks and internal audit requirements.",
          },
          {
            title: "Optimized Software and Technology Investments",
            description:
              "Track software usage and license allocations across environments to reduce waste, manage vendor audits, and improve control over technology spending.",
          },
          {
            title: "Reliable Operations for Critical Financial Systems",
            description:
              "Improve visibility across infrastructure and operational environments to detect issues early and support stable digital banking platforms.",
          },
          {
            title: "Centralized Governance Across IT Assets",
            description:
              "Maintain governance across hardware, software, and infrastructure assets with unified oversight across distributed banking environments.",
          },
          {
            title: "Scalable Platform for Modern Financial Infrastructure",
            description:
              "Support hybrid and cloud environments with a scalable platform designed to manage growing financial infrastructure and evolving operational requirements.",
          },
        ],
      }}
      ctaSectionOverride={{
        title: "Partner With Galactis",
        description:
          "Schedule a consultation to explore how Galactis supports financial institutions with unified IT visibility, compliance readiness, and operational governance across modern technology environments.",
        ctaLabel: "Talk to an Expert",
      }}
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
        {
          label: "Regulatory Compliance Visibility",
          value: "Support audit workflows aligned with RBI, SEBI, PCI-DSS, and other financial regulatory frameworks with centralized governance and reporting.",
        },
        {
          label: "Faster Audit Preparation",
          value: "Automate evidence collection and reporting for software usage, access controls, and IT asset inventories across distributed environments.",
        },
        {
          label: "Real-Time Operational Visibility",
          value: "Maintain real-time insight into IT assets, infrastructure, and software usage across financial environments to support reliable digital services.",
        },
      ]}
    />
  );
}
