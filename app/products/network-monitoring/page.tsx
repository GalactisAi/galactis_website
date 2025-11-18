"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Activity, Zap, Shield, Network, CheckCircle2, ArrowRight,
  Radio, TrendingDown, Clock, AlertTriangle, GitBranch, 
  Cpu, Cloud, Globe, Server
} from "lucide-react";
import CompanyLogo from "@/components/CompanyLogo";

const signals = [
  {
    icon: Radio,
    title: "Unified Telemetry",
    description: "SNMP, streaming NetFlow, syslog, synthetic, and cloud-native metrics stream into one unified graph.",
    features: ["Multi-protocol ingestion", "Real-time streaming", "Historical analysis", "Custom dashboards"]
  },
  {
    icon: Cpu,
    title: "AI Root Cause",
    description: "Dependency-aware AI correlates anomalies with business impact to surface probable root cause in seconds.",
    features: ["Topology mapping", "Impact scoring", "Correlation engine", "Predictive alerts"]
  },
  {
    icon: Zap,
    title: "Autonomous Remediation",
    description: "Trigger runbooks, ITSM workflows, and agentic automation that resolve incidents before customers notice.",
    features: ["Auto-remediation", "Runbook automation", "ITSM integration", "Rollback protection"]
  },
];

const runbooks = [
  {
    title: "Edge Outage Automation",
    icon: AlertTriangle,
    details: [
      "Detects brownouts using packet loss + customer sentiment analysis",
      "Executes zero-touch remediation scripts via infrastructure-as-code",
      "Notifies affected customers with AI-generated communications",
      "Escalates to NOC only if auto-fix fails"
    ],
    company: "Airtel"
  },
  {
    title: "Capacity & Health Forecasting",
    icon: TrendingDown,
    details: [
      "ML forecasts saturation and recommends capacity moves 30 days ahead",
      "Automates workflows in ServiceNow and Jira for planning",
      "Feeds finance with impact-to-revenue models",
      "Prevents outages before they happen"
    ],
    company: "TCS"
  },
];

const useCases = [
  {
    icon: Activity,
    title: "Command Center Copilots",
    description: "AI copilots summarize incidents, evaluate runbook success, and brief executives in real time with business context.",
    metrics: { mttr: "3x faster", automation: "85%" }
  },
  {
    icon: Shield,
    title: "Customer Experience Guardrails",
    description: "Correlate network health with NPS, churn, and support data to proactively reach out to at-risk customers.",
    metrics: { prevented: "28%", uptime: "99.97%" }
  },
  {
    icon: GitBranch,
    title: "Change Assurance",
    description: "Validate planned maintenance against blast radius models and auto-roll back risky configuration pushes.",
    metrics: { incidents: "-48%", confidence: "100%" }
  },
];

const integrations = [
  "ServiceNow", "PagerDuty", "Slack", "Jira", "Twilio", 
  "Cisco", "Juniper", "Arista", "VMware", "Kubernetes", 
  "AWS", "Azure", "GCP"
];

export default function NetworkMonitoringPage() {
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
            { label: "Products", href: "/products/network-monitoring" },
            { label: "Network Monitoring" },
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

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Network Intelligence & Automation</p>
            <h1 className="mt-4 text-4xl font-bold text-zinc-900 dark:text-white sm:text-5xl lg:text-6xl">
              Predict, Diagnose, Resolve
              <br />
              <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Network Incidents With AI
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-600 dark:text-zinc-300">
              Blend observability, topology, and AI-powered runbooks so NOC teams sustain 99.99% availability with fewer pagers
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact?cta=network">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-xl"
                >
                  Get Your Network Solution
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
      <section className="bg-white py-20 dark:bg-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Core Platform</p>
            <h2 className="mt-4 text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl">
              Three Pillars of Network Intelligence
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {signals.map((signal, index) => (
              <motion.div
                key={signal.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-sky-600 to-blue-600 shadow-lg">
                  <signal.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-zinc-900 dark:text-white">{signal.title}</h3>
                <p className="mt-3 text-zinc-600 dark:text-zinc-400">{signal.description}</p>
                <ul className="mt-6 space-y-2">
                  {signal.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
        </section>

      {/* Runbooks */}
      <section className="bg-gradient-to-b from-zinc-50 to-white py-20 dark:from-zinc-950 dark:to-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Automated Workflows</p>
            <h2 className="mt-4 text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl">
              Production-Ready Runbooks
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {runbooks.map((runbook, index) => (
              <motion.div
                key={runbook.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 dark:bg-sky-900/30">
                    <runbook.icon className="h-6 w-6 text-sky-600" />
                  </div>
                  <CompanyLogo company={runbook.company} size={48} />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-zinc-900 dark:text-white">{runbook.title}</h3>
                <ul className="mt-6 space-y-3">
                {runbook.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                      {detail}
                  </li>
                ))}
              </ul>
              </motion.div>
            ))}
          </div>
            </div>
        </section>

      {/* Use Cases */}
      <section className="bg-white py-20 dark:bg-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Operations Outcomes</p>
            <h2 className="mt-4 text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl">
              Real-World Impact
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 dark:bg-sky-900/30">
                  <useCase.icon className="h-6 w-6 text-sky-600" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-zinc-900 dark:text-white">{useCase.title}</h3>
                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">{useCase.description}</p>
                <div className="mt-6 flex gap-3">
                  {Object.entries(useCase.metrics).map(([key, value]) => (
                    <div key={key} className="rounded-lg bg-sky-50 px-3 py-2 dark:bg-sky-950/30">
                      <p className="text-xs font-semibold text-sky-600">{value}</p>
                    </div>
                  ))}
              </div>
              </motion.div>
            ))}
          </div>
          </div>
        </section>

      {/* Integrations */}
      <section className="bg-gradient-to-b from-zinc-50 to-white py-20 dark:from-zinc-950 dark:to-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-50 to-blue-50 p-12 dark:border-sky-800 dark:from-sky-950/30 dark:to-blue-950/30"
          >
            <div className="flex items-center gap-3">
              <Globe className="h-8 w-8 text-sky-600" />
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Integration Fabric</h2>
            </div>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
              Native connectors orchestrate alerts, runbooks, communications, and infrastructure change
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

      <Footer />
    </div>
  );
}
