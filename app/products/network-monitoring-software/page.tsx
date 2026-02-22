"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Activity, Zap, Shield, Network, CheckCircle2, ArrowRight,
  Radio, TrendingDown, Clock, AlertTriangle, GitBranch, 
  Cpu, Globe, BarChart3, Server, Users, Eye, Layers,
  Lock, FileText, Gauge, Route, ChevronDown
} from "lucide-react";

const signals = [
  {
    icon: Radio,
    title: "Unified Telemetry Layer",
    description: "Collect and normalize network data from on-prem, cloud, and hybrid environments into a single real-time view.",
    features: ["Multi-protocol ingestion (SNMP, NetFlow, syslog, cloud metrics)", "Real-time and historical analysis", "Custom dashboards for NOC and IT teams"]
  },
  {
    icon: Cpu,
    title: "AI Root Cause Analysis",
    description: "Automatically correlate anomalies across network dependencies to pinpoint the most likely root cause in seconds.",
    features: ["Topology-aware correlation", "Business impact scoring", "Predictive alerts and anomaly detection"]
  },
  {
    icon: Zap,
    title: "Automated Remediation",
    description: "Resolve network issues faster using automated workflows and intelligent runbooks triggered by real incidents.",
    features: ["Auto-remediation workflows", "Runbook-driven incident response", "ITSM integration with rollback protection"]
  },
];

const features = [
  {
    icon: Network,
    title: "Network Topology & Visibility",
    description: "Visualize your entire network with interactive topology maps that show sites, links, dependencies, and real-time status.",
    bullets: [
      "Interactive network maps across regions and sites",
      "Site-level and link-level visibility",
      "Status-based filtering (normal, warning, critical)",
      "Dependency awareness across locations and connections"
    ]
  },
  {
    icon: Activity,
    title: "Real-Time Network Monitoring",
    description: "Monitor network health, performance, and availability continuously across all connected devices and sites.",
    bullets: [
      "Live performance metrics for links and devices",
      "Latency, uptime, and utilization tracking",
      "Site and device health summaries",
      "Centralized network monitoring dashboard"
    ]
  },
  {
    icon: BarChart3,
    title: "AI Predictive Analytics",
    description: "Identify risks before failures occur using AI-powered predictive insights and probability scoring.",
    bullets: [
      "Risk-level distribution across network links",
      "Failure probability and expected time-to-failure",
      "Early warning indicators for critical links",
      "Predictive alerts for proactive action"
    ]
  },
  {
    icon: AlertTriangle,
    title: "Link & Path Risk Analysis",
    description: "Understand which network paths are at risk and prioritize remediation based on impact.",
    bullets: [
      "High-risk link identification",
      "Business-impact-aware risk scoring",
      "Drill-down views for affected connections",
      "Exportable reports for analysis and audits"
    ]
  },
  {
    icon: Clock,
    title: "Event Logging & Operational Management",
    description: "Track, filter, and manage network events to maintain operational clarity and accountability.",
    bullets: [
      "Centralized event logging",
      "Severity-based filtering and analysis",
      "Scheduled maintenance tracking",
      "Script execution and operational workflows"
    ]
  },
  {
    icon: Server,
    title: "Device Inventory & Monitoring",
    description: "Maintain a real-time inventory of all network devices with health and performance insights.",
    bullets: [
      "Routers, switches, firewalls, controllers, and load balancers",
      "CPU, memory, uptime, and usage tracking",
      "Device-level status indicators",
      "Location-aware monitoring"
    ]
  },
  {
    icon: Users,
    title: "Multi-Tenant Account Management",
    description: "Manage multiple customers, business units, or environments from a single platform.",
    bullets: [
      "Tenant-level account visibility",
      "Usage and link tracking per account",
      "Role-based access and administration",
      "Scalable for enterprise and MSP use cases"
    ]
  },
  {
    icon: Zap,
    title: "Automated Remediation & Operations",
    description: "Reduce manual intervention by automating response and recovery workflows.",
    bullets: [
      "Event-triggered automation",
      "Runbook-driven remediation",
      "Rollback protection for safe execution",
      "Integration-ready operational workflows"
    ]
  },
];

const runbooks = [
  {
    title: "Edge Outage Automation",
    icon: AlertTriangle,
    description: "Automatically detect and remediate network edge issues without human intervention.",
    details: [
      "Identifies brownouts using packet loss, latency, and traffic anomalies",
      "Executes zero-touch remediation using predefined infrastructure workflows",
      "Triggers customer notifications with context-aware messaging",
      "Escalates to NOC only when automated recovery fails"
    ],
    outcome: "Outcome: Faster recovery with fewer alerts and reduced operational load."
  },
  {
    title: "Capacity & Network Health Forecasting",
    icon: TrendingDown,
    description: "Predict network risk and capacity constraints before they turn into incidents.",
    details: [
      "Forecasts link saturation and performance degradation weeks in advance",
      "Recommends proactive capacity adjustments based on usage trends",
      "Integrates with ITSM tools for planning and execution workflows",
      "Reduces unplanned outages through predictive network intelligence"
    ],
    outcome: "Outcome: Proactive planning instead of reactive firefighting."
  },
];

const useCases = [
  {
    icon: Activity,
    title: "Command Center Copilots",
    description: "AI copilots help NOC and operations teams understand incidents faster and communicate clearly during outages.",
    bullets: [
      "Summarizes incidents with root cause and impact context",
      "Tracks runbook execution success in real time",
      "Generates executive-ready incident briefings"
    ],
    impact: "Impact:\n\n3× faster incident understanding\n\nUp to 85% reduction in manual incident analysis"
  },
  {
    icon: Shield,
    title: "Customer Experience Guardrails",
    description: "Continuously correlate network health with customer-facing signals to prevent service degradation.",
    bullets: [
      "Links network performance to experience indicators",
      "Identifies at-risk customers before complaints occur",
      "Enables proactive outreach during degradation events"
    ],
    impact: "Impact:\n\nUp to 28% fewer critical incidents\n\n99.97% service availability maintained"
  },
  {
    icon: GitBranch,
    title: "Change Assurance",
    description: "Reduce risk during network changes with pre- and post-change validation.",
    bullets: [
      "Evaluates maintenance impact using historical and dependency models",
      "Flags high-risk configuration changes",
      "Automatically rolls back failed or risky deployments"
    ],
    impact: "Impact:\n\n48% reduction in change-related incidents\n\nNear-zero failed change deployments"
  },
];

const integrations = [
  "ServiceNow", "PagerDuty", "Slack", "Jira", "Twilio", 
  "Cisco", "Juniper", "Arista", "VMware", "Kubernetes", 
  "AWS", "Azure", "GCP"
];

const faqData = [
  {
    question: "What is network monitoring software?",
    answer: "Network monitoring software helps IT teams monitor network performance, availability, and health in real time. It tracks metrics like latency, packet loss, uptime, and device status to detect issues early and prevent downtime."
  },
  {
    question: "How does a network monitoring software work?",
    answer: "A network monitoring software collects telemetry from network devices, links, and infrastructure using standard protocols and integrations. It analyzes this data to identify performance issues, anomalies, and potential failures, then alerts teams or triggers automated actions."
  },
  {
    question: "What can I monitor using network monitoring software?",
    answer: "You can monitor network devices, links, traffic patterns, routing behavior, logs, and overall network availability across on-prem, cloud, and hybrid environments."
  },
  {
    question: "How is this different from traditional network monitoring tools?",
    answer: "Traditional tools focus mainly on alerts and static thresholds. Modern network monitoring software uses AI-driven analysis, correlation, and automation to identify root causes faster and prevent incidents before they impact users."
  },
  {
    question: "Does this support cloud and hybrid networks?",
    answer: "Yes. Network monitoring software is designed to monitor on-prem, cloud, and hybrid environments from a single platform, providing consistent visibility as infrastructure scales."
  },
  {
    question: "Can this help reduce downtime?",
    answer: "Yes. By detecting anomalies early, identifying root causes faster, and enabling automated remediation, network monitoring software helps reduce downtime and improve overall network reliability."
  },
  {
    question: "Is automation supported for incident response?",
    answer: "Yes. Many network monitoring tools support automated workflows and runbooks that can respond to incidents, execute remediation steps, and integrate with ITSM and alerting systems."
  },
  {
    question: "How long does it take to get started?",
    answer: "Most modern network monitoring platforms can be set up quickly using native integrations and standard protocols, allowing teams to start monitoring within minutes or hours instead of weeks."
  },
  {
    question: "Who should use network monitoring software?",
    answer: "Network monitoring software is used by IT teams, NOC teams, SREs, and operations teams responsible for maintaining network performance, availability, and reliability."
  },
];

const networkSignals = [
  {
    icon: Gauge,
    title: "Performance Signals",
    description: "Continuously analyze network health indicators to understand how links, devices, and sites are performing in real time and over time."
  },
  {
    icon: BarChart3,
    title: "Traffic Behavior",
    description: "Identify abnormal traffic patterns, utilization spikes, and capacity risks by observing how data flows across your network paths."
  },
  {
    icon: Route,
    title: "Connectivity & Routing",
    description: "Track routing behavior and path changes to quickly pinpoint the source of connectivity issues and unstable links."
  },
  {
    icon: Clock,
    title: "Operational Events",
    description: "Correlate device events and system signals to understand what changed, why it changed, and how it impacts network reliability."
  },
];

const capabilities = [
  {
    icon: Eye,
    title: "Real-Time Visibility & Monitoring",
    text: "Modern networks change constantly. Real-time visibility ensures teams can see the current health of links, devices, and sites without delay.\n\nGalactis continuously monitors network performance and availability across on-prem, cloud, and hybrid environments. This allows teams to detect degradation early, investigate issues quickly, and prevent minor problems from escalating into outages."
  },
  {
    icon: Cpu,
    title: "AI-Driven Insights & Automation",
    text: "Raw data alone isn't enough. Network teams need intelligence that explains what's happening and what to do next.\n\nGalactis uses AI-driven analysis to correlate network signals, identify anomalies, and surface probable root causes. Automated workflows and runbooks help teams respond faster and reduce manual intervention during incidents."
  },
  {
    icon: Layers,
    title: "Scalability & Operational Flexibility",
    text: "As networks grow, monitoring tools must scale without increasing complexity.\n\nGalactis is designed to support large, distributed environments with multiple sites, links, and devices. It adapts to changing infrastructure needs while maintaining consistent performance and centralized visibility."
  },
  {
    icon: Network,
    title: "Open Integration & Extensibility",
    text: "Network monitoring does not operate in isolation.\n\nGalactis integrates with existing IT and operational systems to share data, trigger workflows, and support cross-team collaboration. This openness enables smoother operations and reduces tool sprawl across the organization."
  },
  {
    icon: Lock,
    title: "Security & Compliance Readiness",
    text: "Monitoring platforms must align with enterprise security and compliance requirements.\n\nGalactis supports secure data handling, role-based access, and operational controls that help organizations meet internal governance and compliance standards while maintaining full network visibility."
  },
];

const platformFeatures = [
  {
    icon: Activity,
    title: "Monitor Network Performance With Context",
    text: "Understand how network services behave across sites, links, and devices by analyzing real-time performance signals and dependency relationships. Detect anomalies early and prevent performance degradation before it impacts users."
  },
  {
    icon: Route,
    title: "Track Traffic, Routing, and User Experience",
    text: "Gain visibility into traffic flows, routing paths, and response behavior to quickly identify latency, congestion, and unstable connections affecting application performance."
  },
  {
    icon: FileText,
    title: "Log Analytics With Operational Insight",
    text: "Analyze network and system logs in context with performance and topology data to troubleshoot faster and eliminate blind spots during incident investigation."
  },
  {
    icon: Globe,
    title: "Unified View Across Hybrid Infrastructure",
    text: "Monitor on-prem, cloud, and distributed environments from a single dashboard, giving IT and NOC teams a consistent operational view as networks scale."
  },
];

export default function NetworkMonitoringSoftwarePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Galactis Network Monitoring & Intelligence",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web, Cloud",
          offers: { "@type": "Offer", priceCurrency: "INR", price: "Contact for pricing" },
        }}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-50 py-20 dark:from-sky-950/20 dark:via-black dark:to-blue-950/20">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"
          />
        </div>

        <main className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          theme="light"
          items={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products/network-monitoring-software" },
            { label: "Network Monitoring Software" },
          ]}
        />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring" }}
              className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-600 to-blue-600 shadow-2xl"
            >
              <Network className="h-10 w-10 text-white" />
            </motion.div>

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">AI-Powered Network Monitoring</p>
            <h1 className="mt-4 text-4xl font-bold text-zinc-900 dark:text-white sm:text-5xl lg:text-6xl">
              Network Monitoring Software
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-600 dark:text-zinc-300">
              AI-powered network monitoring tool that delivers real-time visibility, faster issue detection, root-cause analysis, and reliable performance across modern networks.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact?cta=network">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-xl"
                >
                  Request a Demo
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
              </Link>
              <Link href="/resources/case-studies">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="rounded-xl border-2 border-sky-600 px-8 py-4 text-lg font-semibold text-sky-600 hover:bg-sky-50"
                >
                  View Customer Stories
                </motion.button>
              </Link>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            >
              {[
                { label: "MTTD Reduction", value: "-48%", icon: Clock },
                { label: "MTTR Improvement", value: "3x", icon: Zap },
                { label: "P1 Prevented", value: "28%", icon: Shield },
                { label: "Automated Runbooks", value: "85+", icon: Activity }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="rounded-2xl border border-sky-200 bg-white/80 p-6 backdrop-blur dark:border-sky-800 dark:bg-zinc-900/80"
                >
                  <stat.icon className="mx-auto h-8 w-8 text-sky-600" />
                  <p className="mt-4 text-3xl font-bold text-zinc-900 dark:text-white">{stat.value}</p>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </main>
      </section>

      {/* Capabilities */}
      <section className="bg-white py-16 md:py-24 dark:bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">CORE PLATFORM</p>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-center text-zinc-900 dark:text-white">
              Three Pillars of Network Monitoring Intelligence
            </h2>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-3">
            {signals.map((signal, index) => (
              <motion.div
                key={signal.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-full flex flex-col items-start rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.15)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-sky-600 to-blue-600 shadow-lg">
                  <signal.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mt-6 mb-2 text-2xl font-bold text-zinc-900 dark:text-white">{signal.title}</h3>
                <p className="mb-3 text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-[32ch] text-left">{signal.description}</p>
                <ul className="mt-6 space-y-3 text-left">
                  {signal.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-left">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Understand Your Network */}
      <section className="bg-white py-16 md:py-24 dark:bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-center text-zinc-900 dark:text-white">
              Understand Your Network, Not Just the Data
            </h2>
            <p className="mt-4 text-neutral-600 dark:text-neutral-400 text-center">
              Modern networks generate massive volumes of signals. Galactis helps teams cut through the noise by continuously analyzing network signals and surfacing what actually matters, performance issues, risky behavior, and operational anomalies, across on-prem, cloud, and hybrid environments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {networkSignals.map((signal, index) => (
              <motion.div
                key={signal.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-full flex flex-col items-start rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.15)]"
              >
                <h3 className="mb-2 text-xl font-bold text-zinc-900 dark:text-white">{signal.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-[32ch] text-left">{signal.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-lg text-zinc-600 dark:text-zinc-300">
              All signals are correlated into a single operational view to help teams diagnose issues faster and act with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Sets Galactis Apart */}
      <section className="bg-gradient-to-b from-zinc-50 to-white py-16 md:py-24 dark:from-zinc-950 dark:to-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-center text-zinc-900 dark:text-white">
              What Sets Galactis Apart From Traditional Network Monitoring Tools?
            </h2>
            <p className="mt-4 text-neutral-600 dark:text-neutral-400 text-center">
              Galactis goes beyond traditional network monitoring by combining real-time visibility with AI-driven analysis. Instead of reacting to alerts, teams gain predictive insights into network risk, performance degradation, and root causes, enabling faster resolution and more reliable network operations at scale.
            </p>
            <div className="mt-10 flex justify-center items-center">
              <Link href="/contact?cta=network">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-xl"
                >
                  Try Network Monitoring Now
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-gradient-to-b from-white to-zinc-50 py-16 md:py-24 dark:from-black dark:to-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-center text-zinc-900 dark:text-white">
              Key Features of Our Network Monitoring Software
            </h2>
            <p className="mt-4 text-neutral-600 dark:text-neutral-400 text-center">
              Our network monitoring software provides end-to-end visibility across infrastructure, performance, and operations. From real-time topology mapping to AI-driven predictive analytics and automated remediation, the platform helps IT teams monitor, diagnose, and resolve network issues at scale.
            </p>
          </motion.div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
              {features.map((feature, index) => {
                const total = features.length;
                const remainder = total % 3;
                const isCenteredPairStart = remainder === 2 && index === total - 2;
                const isLastCard = remainder === 2 && index === total - 1;

                if (isCenteredPairStart) {
                  return (
                    <div key="center-row" className="col-span-1 sm:col-span-2 lg:col-span-3 flex justify-center gap-6">
                      <div className="w-full max-w-[calc(66.6667%+0.75rem)] flex justify-center gap-6">
                        <motion.div
                          key={features[total - 2].title}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: (total - 2) * 0.1 }}
                          className="h-full flex flex-col items-start w-full rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.15)]"
                        >
                          <h3 className="mb-2 text-xl font-bold text-zinc-900 dark:text-white">{features[total - 2].title}</h3>
                          <p className="mb-3 text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-[32ch] text-left">{features[total - 2].description}</p>
                          <ul className="mt-6 space-y-3 text-left">
                            {features[total - 2].bullets.map((bullet) => (
                              <li key={bullet} className="flex items-start gap-2 text-sm text-left">
                                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                        <motion.div
                          key={features[total - 1].title}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: (total - 1) * 0.1 }}
                          className="h-full flex flex-col items-start w-full rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.15)]"
                        >
                          <h3 className="mb-2 text-xl font-bold text-zinc-900 dark:text-white">{features[total - 1].title}</h3>
                          <p className="mb-3 text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-[32ch] text-left">{features[total - 1].description}</p>
                          <ul className="mt-6 space-y-3 text-left">
                            {features[total - 1].bullets.map((bullet) => (
                              <li key={bullet} className="flex items-start gap-2 text-sm text-left">
                                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      </div>
                    </div>
                  );
                }

                if (isLastCard) return null;

                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="h-full flex flex-col items-start w-full rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.15)]"
                  >
                    <h3 className="mb-2 text-xl font-bold text-zinc-900 dark:text-white">{feature.title}</h3>
                    <p className="mb-3 text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-[32ch] text-left">{feature.description}</p>
                    <ul className="mt-6 space-y-3 text-left">
                      {feature.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2 text-sm text-left">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-lg text-zinc-600 dark:text-zinc-300">
              Designed for modern, distributed networks built to scale across enterprise, cloud, and hybrid environments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="bg-white py-16 md:py-24 dark:bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-center text-zinc-900 dark:text-white">
              Core Capabilities of a Modern Network Monitoring Software
            </h2>
            <p className="mt-4 text-neutral-600 dark:text-neutral-400 text-center">
              Choosing the right network monitoring tool is critical for maintaining performance, reliability, and scale. A modern solution must go beyond basic alerts and provide real-time visibility, intelligent insights, and operational flexibility to support complex, distributed networks.
            </p>
          </motion.div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
              {capabilities.map((capability, index) => {
                const total = capabilities.length;
                const remainder = total % 3;
                const isCenteredPairStart = remainder === 2 && index === total - 2;
                const isLastCard = remainder === 2 && index === total - 1;

                if (isCenteredPairStart) {
                  return (
                    <div key="center-row" className="col-span-1 sm:col-span-2 lg:col-span-3 flex justify-center gap-6">
                      <div className="w-full max-w-[calc(66.6667%+0.75rem)] flex justify-center gap-6">
                        <motion.div
                          key={capabilities[total - 2].title}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: (total - 2) * 0.1 }}
                          className="h-full flex flex-col items-start w-full rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.15)]"
                        >
                          <h3 className="mb-2 text-xl font-bold text-zinc-900 dark:text-white">{capabilities[total - 2].title}</h3>
                          <p className="whitespace-pre-line text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-[32ch] text-left">{capabilities[total - 2].text}</p>
                        </motion.div>
                        <motion.div
                          key={capabilities[total - 1].title}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: (total - 1) * 0.1 }}
                          className="h-full flex flex-col items-start w-full rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.15)]"
                        >
                          <h3 className="mb-2 text-xl font-bold text-zinc-900 dark:text-white">{capabilities[total - 1].title}</h3>
                          <p className="whitespace-pre-line text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-[32ch] text-left">{capabilities[total - 1].text}</p>
                        </motion.div>
                      </div>
                    </div>
                  );
                }

                if (isLastCard) return null;

                return (
                  <motion.div
                    key={capability.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="h-full flex flex-col items-start w-full rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.15)]"
                  >
                    <h3 className="mb-2 text-xl font-bold text-zinc-900 dark:text-white">{capability.title}</h3>
                    <p className="whitespace-pre-line text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-[32ch] text-left">{capability.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Automated Workflows */}
      <section className="bg-gradient-to-b from-zinc-50 to-white py-16 md:py-24 dark:from-zinc-950 dark:to-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">AUTOMATED WORKFLOWS</p>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-center text-zinc-900 dark:text-white">
              Production-Ready Network Runbooks
            </h2>
            <p className="mt-4 text-neutral-600 dark:text-neutral-400 text-center">
              Galactis goes beyond alerting by turning network insights into automated action. Production-ready runbooks allow teams to detect issues, execute remediation, and escalate intelligently, reducing manual effort and preventing outages before they impact users.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {runbooks.map((runbook, index) => (
              <motion.div
                key={runbook.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-full flex flex-col items-start rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.15)]"
              >
                <h3 className="mb-2 text-xl font-bold text-zinc-900 dark:text-white">{runbook.title}</h3>
                <p className="mb-3 text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-[32ch] text-left">{runbook.description}</p>
                <ul className="mt-6 space-y-3 text-left">
                  {runbook.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3 text-sm text-left">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm font-semibold text-zinc-900 dark:text-white">{runbook.outcome}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Outcomes */}
      <section className="bg-white py-16 md:py-24 dark:bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Operational Outcomes</p>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-center text-zinc-900 dark:text-white">
              Operational Outcomes in Production
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-full flex flex-col items-start rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.15)]"
              >
                <h3 className="mb-2 text-xl font-bold text-zinc-900 dark:text-white">{useCase.title}</h3>
                <p className="mb-3 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-[32ch] text-left">{useCase.description}</p>
                <ul className="mt-6 space-y-3 text-left">
                  {useCase.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm text-left">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 whitespace-pre-line text-sm font-semibold text-zinc-900 dark:text-white">{useCase.impact}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="bg-gradient-to-b from-zinc-50 to-white py-16 md:py-24 dark:from-zinc-950 dark:to-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-50 to-blue-50 p-12 dark:border-sky-800 dark:from-sky-950/30 dark:to-blue-950/30"
          >
            <div className="flex items-center gap-3">
              <Globe className="h-8 w-8 text-sky-600" />
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Operations Integration Layer</h2>
            </div>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
              A built-in integration layer that connects monitoring, incident management, communication, and infrastructure systems, so actions flow automatically across tools without manual coordination.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {integrations.map((integration, i) => (
                <motion.span
                  key={integration}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className="rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm dark:border-sky-800 dark:bg-zinc-900 dark:text-zinc-300"
                >
                {integration}
                </motion.span>
            ))}
            </div>
          </motion.div>
          </div>
        </section>

      {/* One Platform */}
      <section className="bg-white py-16 md:py-24 dark:bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-center text-zinc-900 dark:text-white">
              One Platform. Deeper Network Intelligence. Complete Visibility.
            </h2>
            <p className="mt-4 text-neutral-600 dark:text-neutral-400 text-center">
              Galactis unifies network monitoring, analytics, and automation into a single platform designed for modern hybrid environments. By continuously correlating telemetry, topology, traffic, and events, teams gain a complete and actionable view of network performance, without switching tools.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {platformFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-full flex flex-col items-start rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.15)]"
              >
                <h3 className="mb-2 text-xl font-bold text-zinc-900 dark:text-white">{feature.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-[32ch] text-left">{feature.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-lg text-zinc-600 dark:text-zinc-300">
              Designed to replace fragmented tools with a unified network monitoring experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="bg-white py-16 md:py-24 dark:bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </motion.div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900/50"
                >
                  <span className="text-lg font-semibold text-zinc-900 dark:text-white pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-sky-600 dark:text-sky-400 transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-zinc-600 dark:text-zinc-400">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

