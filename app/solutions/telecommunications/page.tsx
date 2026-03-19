import IndustryPage from "@/components/IndustryPage";

export const metadata = {
  title: {
    absolute: "Telecommunications IT Solutions | Galactis",
  },
  description:
    "Telecommunications IT solutions designed to support service assurance and compliance, enhanced with predictive AI for proactive network operations.",
  alternates: {
    canonical: "https://www.galactis.ai/solutions/telecommunications",
  },
};

export default function TelecomPage() {
  return (
    <IndustryPage
      title="Telecommunications"
      subtitle="TRAI and DoT compliant operations for carriers, ISPs, and media networks with AI-driven service assurance across India."
      heroHeading="Unified IT Operations for Telecommunications Networks"
      heroDescription="Telecommunications providers manage large-scale network infrastructure across towers, data centers, and edge environments. Galactis helps operators maintain network visibility, regulatory compliance, and operational reliability."
      ctaLabel="Book a Demo"
      compactBusinessOutcomes
      challengesSection={{
        sectionTitle: "IT Challenges in Telecommunications",
        sectionDescription:
          "Telecommunications operators manage complex distributed infrastructure across network towers, switching centers, fiber networks, and cloud platforms.",
        tiles: [
          {
            title: "Limited Network Visibility",
            description:
              "Telecom environments span thousands of devices across distributed networks, making it difficult to maintain centralized visibility.",
          },
          {
            title: "Service Assurance and SLA Pressure",
            description:
              "Operators must maintain strict service level agreements while monitoring network health across large-scale infrastructure.",
          },
          {
            title: "Infrastructure Complexity",
            description:
              "Managing legacy systems, modern network platforms, and edge infrastructure increases operational complexity.",
          },
          {
            title: "Incident Detection Across Distributed Networks",
            description:
              "Detecting service disruptions across multiple network layers can be challenging without unified monitoring and operational visibility.",
          },
        ],
      }}
      comparisonSection={{
        sectionTitle: "Traditional Network Operations vs the Galactis Approach",
        left: {
          title: "Traditional Network Operations",
          subtitle: "",
          bullets: [
            "Fragmented monitoring tools across network layers create limited operational visibility.",
            "Manual incident management increases response times and service disruption risks.",
            "Limited integration across systems slows troubleshooting and service restoration.",
          ],
        },
        right: {
          title: "How Galactis Supports Telecom Operators",
          subtitle: "",
          bullets: [
            "Unified visibility across network infrastructure and operational systems.",
            "Automated incident detection and response workflows for faster service restoration.",
            "Operational insights to improve service reliability and network performance.",
          ],
        },
      }}
      capabilitiesSection={{
        sectionTitle: "Core Capabilities for Telecom Network Operations",
        sectionDescription:
          "Galactis provides capabilities to support network operations, service assurance, and regulatory compliance across telecommunications infrastructure.",
        tiles: [
          {
            title: "Network Infrastructure Visibility",
            description:
              "Monitor infrastructure across towers, fiber networks, switching centers, and edge systems to maintain operational visibility across distributed telecom environments.",
          },
          {
            title: "Service Assurance and SLA Monitoring",
            description:
              "Monitor service performance and network availability across telecom infrastructure to maintain SLA commitments and ensure reliable connectivity.",
          },
          {
            title: "Incident Detection and Response",
            description:
              "Identify service disruptions quickly and support faster incident resolution across network infrastructure and telecom service platforms.",
          },
          {
            title: "Operational Intelligence and Performance Insights",
            description:
              "Analyze network performance and service delivery metrics to help telecom teams detect risks earlier and improve operational decision-making.",
          },
          {
            title: "Field Operations Optimization",
            description:
              "Provide infrastructure insights that help telecom teams reduce unnecessary site visits, improve technician planning, and optimize field service operations.",
          },
          {
            title: "Compliance and Service Governance",
            description:
              "Support telecom regulatory frameworks and operational governance requirements across infrastructure, services, and operational processes.",
          },
        ],
      }}
      capabilitiesGridClass="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      complianceSectionOverride={{
        title: "Compliance and Regulatory Alignment",
        description:
          "Telecommunications operators must comply with national telecom regulations and operational standards while maintaining reliable network services and infrastructure governance.",
      }}
      integrationsSection={{
        sectionTitle: "Integration With Telecom IT Ecosystems",
        sectionDescription:
          "Galactis integrates with telecom IT environments to connect network infrastructure, operational systems, and governance workflows across distributed telecommunications platforms.",
        tiles: [
          {
            title: "Cloud and Infrastructure Platforms",
            description:
              "Integrate with cloud and hybrid infrastructure environments to maintain visibility across telecom workloads operating across data centers, edge locations, and cloud platforms.",
          },
          {
            title: "Network Operations and IT Service Management",
            description:
              "Connect with network operations and service management platforms to synchronize incidents, asset data, and operational workflows across telecom environments.",
          },
          {
            title: "Security and Compliance Platforms",
            description:
              "Exchange operational data with security and analytics platforms to support network security monitoring, compliance reporting, and risk detection.",
          },
          {
            title: "Infrastructure and DevOps Platforms",
            description:
              "Integrate with infrastructure and DevOps platforms to support automation, deployment, and operational management across telecom infrastructure.",
          },
        ],
      }}
      integrationsEcosystemSection={{
        sectionTitle: "Works With Your Existing Technology Stack",
        sectionDescription:
          "Galactis connects with widely used platforms across cloud, network operations, security, and infrastructure used by telecommunications operators.",
        categories: [
          { categoryName: "Cloud & Infrastructure", items: ["AWS", "Microsoft Azure", "Google Cloud", "OpenStack"] },
          {
            categoryName: "Network & Service Management",
            items: ["ServiceNow", "BMC Helix", "Netcool", "IBM Tivoli"],
          },
          {
            categoryName: "Security & Compliance",
            items: ["Splunk", "IBM QRadar", "Microsoft Sentinel", "Elastic SIEM"],
          },
          {
            categoryName: "Infrastructure & DevOps",
            items: ["Kubernetes", "Ansible", "Terraform", "GitLab", "Jenkins"],
          },
        ],
      }}
      valuePropositionSection={{
        sectionTitle: "Why Telecom Operators Choose Galactis",
        tiles: [
          {
            title: "Unified Network Visibility",
            description:
              "Maintain centralized visibility across distributed telecom infrastructure.",
          },
          {
            title: "Faster Incident Detection",
            description:
              "Detect and respond to service disruptions quickly.",
          },
          {
            title: "Operational Efficiency",
            description:
              "Improve network operations and reduce manual troubleshooting.",
          },
          {
            title: "Scalable Infrastructure Governance",
            description:
              "Support growing telecom infrastructure and evolving operational requirements.",
          },
        ],
      }}
      valuePropositionGridClass="grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
      ctaSectionOverride={{
        title: "Partner With Galactis",
        description:
          "Schedule a consultation to explore how Galactis helps telecom operators maintain service reliability, operational visibility, and infrastructure governance.",
        ctaLabel: "Talk to an Expert",
      }}
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
      compliance={["TRAI Guidelines", "Department of Telecommunications (DoT)", "ISO 27001", "GSMA Standards"]}
      caseStudy={{
        client: "Airtel",
        challenge: "Frequent SLA penalties across 22 telecom circles due to slow outage detection and manual coordination between teams.",
        solution: "Galactis correlated telemetry across all circles, predicted incidents with AI, and automated customer communication workflows.",
        result: "42% reduction in P1 incidents, 60% faster customer notifications, and ₹5.2 Cr saved in SLA penalties.",
      }}
      metrics={[
        {
          label: "SLA Compliance",
          value:
            "Improve service reliability and maintain network performance aligned with telecom service level agreements.",
        },
        {
          label: "Faster Incident Resolution",
          value:
            "Detect and respond to network incidents quickly to reduce downtime and service disruptions.",
        },
        {
          label: "Optimized Field Operations",
          value:
            "Improve visibility into infrastructure and service issues to reduce unnecessary field dispatches and operational costs.",
        },
      ]}
    />
  );
}
