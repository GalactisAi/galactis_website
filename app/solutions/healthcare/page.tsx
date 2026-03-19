import IndustryPage from "@/components/IndustryPage";

export const metadata = {
  title: {
    absolute: "Healthcare IT Solutions & Compliance | Galactis",
  },
  description:
    "Healthcare and life sciences IT solutions powered by predictive AI to support compliance, operational efficiency, and secure IT operations for regulated organizations.",
  alternates: {
    canonical: "https://www.galactis.ai/solutions/healthcare",
  },
};

export default function HealthcarePage() {
  return (
    <IndustryPage
      title="Healthcare & Life Sciences"
      subtitle="HIPAA-compliant IT operations with validated processes for providers, payers, pharma, and medical device organizations across India."
      heroHeading="Unified IT Operations for Healthcare & Life Sciences"
      heroDescription="Healthcare and life sciences organizations operate complex IT environments across hospitals, laboratories, research facilities, and cloud platforms. Galactis helps organizations improve visibility across assets and infrastructure while supporting compliance, operational reliability, and technology governance."
      ctaLabel="Book a Demo"
      compactBusinessOutcomes
      challengesSection={{
        sectionTitle: "IT Challenges in Healthcare & Life Sciences",
        sectionDescription:
          "Healthcare organizations manage complex IT environments across hospitals, laboratories, and research systems while maintaining strict compliance with healthcare data protection and operational requirements.",
        tiles: [
          {
            title: "Limited Visibility Across Healthcare IT Environments",
            description:
              "Hospitals and research organizations manage thousands of systems, devices, and applications across clinical, administrative, and research environments.",
          },
          {
            title: "Healthcare Data Compliance Requirements",
            description:
              "Healthcare providers must maintain strict controls over patient data and system access to comply with healthcare data protection regulations.",
          },
          {
            title: "Medical Device and Infrastructure Monitoring",
            description:
              "Clinical environments rely on connected medical devices and healthcare systems that require continuous monitoring and operational visibility.",
          },
          {
            title: "Operational Reliability of Clinical Systems",
            description:
              "Electronic health records, laboratory systems, and patient care platforms require high availability to support uninterrupted healthcare services.",
          },
        ],
      }}
      comparisonSection={{
        sectionTitle: "Traditional IT Challenges vs the Galactis Approach",
        left: {
          title: "Traditional IT Challenges",
          subtitle:
            "Common operational and compliance challenges faced by healthcare and life sciences organizations managing distributed clinical and IT environments.",
          bullets: [
            "Fragmented visibility across medical devices, clinical systems, and healthcare infrastructure.",
            "Manual compliance documentation processes increase audit preparation effort.",
            "Limited monitoring across clinical applications and healthcare infrastructure.",
          ],
        },
        right: {
          title: "How Galactis Supports Healthcare Organizations",
          subtitle:
            "Galactis provides unified visibility across healthcare infrastructure, assets, and operational systems to help organizations maintain compliance and reliable clinical operations.",
          bullets: [
            "Unified visibility across healthcare infrastructure, IT assets, and connected medical systems.",
            "Automated compliance evidence collection aligned with healthcare data protection requirements.",
            "Improved monitoring across clinical applications and infrastructure environments.",
          ],
        },
      }}
      capabilitiesSection={{
        sectionTitle: "Core Capabilities for Healthcare IT Governance",
        sectionDescription:
          "Healthcare organizations require centralized visibility and governance across systems, devices, and infrastructure to maintain compliance, protect patient data, and support reliable clinical services.",
        tiles: [
          {
            title: "Healthcare Asset Discovery",
            description:
              "Automatically discover and track healthcare IT assets, infrastructure systems, and connected devices across hospitals, laboratories, and clinical environments.",
          },
          {
            title: "Clinical Infrastructure Monitoring",
            description:
              "Monitor infrastructure supporting clinical applications, laboratory systems, and electronic health record platforms to maintain operational visibility.",
          },
          {
            title: "Healthcare Compliance Reporting",
            description:
              "Automate compliance reporting workflows to support healthcare regulatory frameworks and internal governance policies.",
          },
          {
            title: "Operational Visibility Across Healthcare Systems",
            description:
              "Maintain visibility across infrastructure and systems supporting patient care, research environments, and healthcare operations.",
          },
          {
            title: "Medical Device Environment Visibility",
            description:
              "Track connected clinical devices and supporting infrastructure to improve operational oversight across healthcare technology environments.",
          },
          {
            title: "Compliance and Service Governance",
            description:
              "Support governance controls and operational compliance across healthcare infrastructure and technology environments.",
          },
        ],
      }}
      capabilitiesGridClass="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      complianceSectionOverride={{
        title: "Compliance and Regulatory Alignment",
        description:
          "Galactis supports healthcare and life sciences organizations with governance controls and reporting workflows aligned with healthcare data protection frameworks and operational standards.",
      }}
      integrationsSection={{
        sectionTitle: "Integration With Healthcare IT Ecosystems",
        sectionDescription:
          "Galactis integrates with healthcare IT environments to connect infrastructure, clinical systems, and operational workflows across hospitals, laboratories, and research environments.",
        tiles: [
          {
            title: "Cloud and Infrastructure Platforms",
            description:
              "Integrate with cloud providers and hybrid infrastructure environments supporting healthcare workloads and clinical applications.",
          },
          {
            title: "Healthcare IT and Service Management Systems",
            description:
              "Connect with service management platforms to synchronize asset data, incidents, and operational workflows across healthcare environments.",
          },
          {
            title: "Security and Compliance Platforms",
            description:
              "Exchange data with security and analytics platforms to support patient data protection, risk monitoring, and compliance reporting.",
          },
          {
            title: "Infrastructure and DevOps Platforms",
            description:
              "Integrate with infrastructure and DevOps systems supporting deployment and management of healthcare technology platforms.",
          },
        ],
      }}
      integrationsEcosystemSection={{
        sectionTitle: "Works With Your Existing Technology Stack",
        sectionDescription:
          "Galactis integrates with widely used enterprise platforms across cloud infrastructure, healthcare IT operations, security, and enterprise systems.",
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
        sectionTitle: "Why Healthcare Organizations Choose Galactis",
        tiles: [
          {
            title: "Unified Visibility Across Healthcare Infrastructure",
            description:
              "Gain centralized visibility across IT systems, clinical infrastructure, and healthcare technology environments.",
          },
          {
            title: "Automated Healthcare Compliance Readiness",
            description:
              "Streamline compliance documentation and audit preparation aligned with healthcare regulatory frameworks.",
          },
          {
            title: "Reliable Infrastructure for Clinical Operations",
            description:
              "Maintain operational visibility across infrastructure supporting patient care, research, and healthcare service delivery.",
          },
          {
            title: "Governance Across Healthcare Technology Environments",
            description:
              "Maintain oversight across healthcare systems, assets, and infrastructure environments.",
          },
          {
            title: "Scalable Platform for Modern Healthcare IT",
            description:
              "Support hybrid healthcare environments across hospitals, laboratories, and cloud platforms.",
          },
        ],
      }}
      ctaSectionOverride={{
        title: "Partner With Galactis",
        description:
          "Schedule a consultation to explore how Galactis supports healthcare and life sciences organizations with unified IT visibility, compliance readiness, and operational governance.",
        ctaLabel: "Talk to an Expert",
      }}
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
      compliance={["HIPAA", "ISO 27001", "HL7 Standards", "HITRUST", "GDPR (for global healthcare environments)"]}
      caseStudy={{
        client: "Apollo Hospitals",
        challenge: "Inconsistent device inventories across 70+ hospitals and manual compliance documentation created audit risk.",
        solution: "Galactis unified ITAM/CMDB across all locations, automated validation workflows, and monitored PHI access with real-time alerts.",
        result: "Eliminated 24 audit findings and accelerated onboarding of new clinics by 40%, saving ₹1.8 Cr in compliance costs.",
      }}
      metrics={[
        {
          label: "Regulatory Compliance Readiness",
          value:
            "Support audit workflows aligned with HIPAA, healthcare data protection requirements, and regulatory governance frameworks.",
        },
        {
          label: "Reduced Compliance Documentation Effort",
          value:
            "Automate evidence collection and reporting for IT assets, access controls, and system configurations across healthcare environments.",
        },
        {
          label: "Reliable Infrastructure for Clinical Systems",
          value:
            "Maintain visibility across infrastructure supporting electronic health records, medical devices, and healthcare applications.",
        },
      ]}
    />
  );
}
