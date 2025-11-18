"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ROICalculator from "@/components/ROICalculator";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Package, Shield, TrendingUp, Database, CheckCircle2, 
  ArrowRight, FileText, AlertCircle, Clock,
  Layers, DollarSign, Lock
} from "lucide-react";
import CompanyLogo from "@/components/CompanyLogo";

const programs = [
  {
    icon: Database,
    title: "Unified Software Intelligence",
    description: "Normalize catalogs, contracts, and telemetry across on-prem, SaaS, and cloud to unlock a single license truth.",
    features: ["Auto-discovery", "Contract normalization", "Usage tracking", "AI enrichment"]
  },
  {
    icon: Package,
    title: "Lifecycle Command Center",
    description: "Track every device from requisition to retirement with IoT signals, warranty data, and automated chain-of-custody.",
    features: ["Asset tracking", "Warranty management", "Disposal certification", "Chain of custody"]
  },
  {
    icon: FileText,
    title: "Audit + Compliance Cockpit",
    description: "Generate regulator-ready evidence packs and simulate vendor audits before they arrive.",
    features: ["Evidence automation", "Audit simulation", "Compliance reporting", "Risk scoring"]
  },
];

const useCases = [
  {
    icon: DollarSign,
    title: "Technology Value Office",
    description: "Benchmark unit economics, allocate chargebacks, and orchestrate reclaim campaigns across business units.",
    metrics: { savings: "₹2.8 Cr", efficiency: "85% automated" },
    company: "ICICI Bank"
  },
  {
    icon: Shield,
    title: "License Defense",
    description: "Automate tier-one vendor audits (Oracle, IBM, Microsoft) with certified playbooks and documentation trails.",
    metrics: { penalties: "₹1.5 Cr avoided", time: "7 days prep" },
    company: "Infosys"
  },
  {
    icon: Package,
    title: "Hardware Refresh",
    description: "Predict end-of-life, trigger procurement, and ensure certified disposal with regulatory evidence.",
    metrics: { assets: "50K tracked", compliance: "100%" },
    company: "TCS"
  },
];

const transformations = [
  {
    title: "Shadow IT Eliminated",
    stat: "85%",
    points: [
      "AI enrichment classifies 12M+ titles with zero manual spreadsheets",
      "Drift detection flags unauthorized SaaS and cloud spend within 24 hours",
      "Automated alerts to procurement and security teams"
    ]
  },
  {
    title: "Financial Governance",
    stat: "₹2.8 Cr",
    points: [
      "Continuous Effective License Position with scenario planning",
      "FinOps dashboards translate usage into rupee value impact",
      "Real-time cost allocation across business units"
    ]
  },
];

const integrations = [
  "ServiceNow", "SAP Ariba", "AWS", "Azure", "Google Cloud", 
  "Snow", "Flexera", "Jira", "Workday", "Okta"
];

const complianceBadges = [
  "SOC 2 Type II", "ISO 27001", "GDPR", "HIPAA", "ITIL 4 Aligned"
];

export default function ITAMPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Galactis IT Asset Management",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web, Cloud",
          offers: { "@type": "Offer", priceCurrency: "INR", price: "Contact for pricing" },
        }}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 dark:from-blue-950/20 dark:via-black dark:to-purple-950/20">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl"
          />
        </div>

        <main className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
            theme="light"
          items={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products/itam" },
            { label: "IT Asset Management" },
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
              className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 shadow-2xl"
            >
              <Package className="h-10 w-10 text-white" />
            </motion.div>

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">IT Asset Management</p>
            <h1 className="mt-4 text-4xl font-bold text-zinc-900 dark:text-white sm:text-5xl lg:text-6xl">
              Know Every Asset, Contract,
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                And Risk In One System
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-600 dark:text-zinc-300">
              Single source of truth for software, hardware, SaaS, and cloud usage with guardrails that automate audits and reclaim millions
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact?cta=itam">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-xl"
                >
                  Get Your ITAM Solution
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
              </Link>
              <Link href="/resources/case-studies">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="rounded-xl border-2 border-blue-600 px-8 py-4 text-lg font-semibold text-blue-600 hover:bg-blue-50"
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
                { label: "Savings Unlocked", value: "₹2.8 Cr", icon: TrendingUp },
                { label: "Penalties Avoided", value: "₹1.5 Cr", icon: Shield },
                { label: "Shadow IT Eliminated", value: "85%", icon: AlertCircle },
                { label: "Automated Cycles", value: "320", icon: Clock }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="rounded-2xl border border-blue-200 bg-white/80 p-6 backdrop-blur dark:border-blue-800 dark:bg-zinc-900/80"
                >
                  <stat.icon className="mx-auto h-8 w-8 text-blue-600" />
                  <p className="mt-4 text-3xl font-bold text-zinc-900 dark:text-white">{stat.value}</p>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </main>
        </section>

      {/* Programs */}
      <section className="bg-white py-20 dark:bg-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Core Capabilities</p>
            <h2 className="mt-4 text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl">
              Three Pillars of Asset Intelligence
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg">
                  <program.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-zinc-900 dark:text-white">{program.title}</h3>
                <p className="mt-3 text-zinc-600 dark:text-zinc-400">{program.description}</p>
                <ul className="mt-6 space-y-2">
                  {program.features.map((feature) => (
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

      {/* Use Cases */}
      <section className="bg-gradient-to-b from-zinc-50 to-white py-20 dark:from-zinc-950 dark:to-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Enterprise Solutions</p>
            <h2 className="mt-4 text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl">
              Production-Ready Use Cases
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
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/30">
                    <useCase.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CompanyLogo company={useCase.company} size={48} />
                </div>
                <h3 className="mt-6 text-xl font-bold text-zinc-900 dark:text-white">{useCase.title}</h3>
                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">{useCase.description}</p>
                <div className="mt-6 flex gap-3">
                  {Object.entries(useCase.metrics).map(([key, value]) => (
                    <div key={key} className="rounded-lg bg-blue-50 px-3 py-2 dark:bg-blue-950/30">
                      <p className="text-xs font-semibold text-blue-600">{value}</p>
                    </div>
                  ))}
              </div>
              </motion.div>
            ))}
          </div>
          </div>
        </section>

      {/* Transformations */}
      <section className="bg-white py-20 dark:bg-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {transformations.map((transformation, index) => (
              <motion.div
                key={transformation.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-purple-50 p-8 dark:border-blue-800 dark:from-blue-950/30 dark:to-purple-950/30"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">{transformation.title}</h3>
                  <div className="text-4xl font-bold text-blue-600">{transformation.stat}</div>
                </div>
                <ul className="mt-6 space-y-3">
                  {transformation.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          </div>
        </section>

      {/* Integrations & Compliance */}
      <section className="bg-gradient-to-b from-zinc-50 to-white py-20 dark:from-zinc-950 dark:to-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <Layers className="h-8 w-8 text-blue-600" />
              <h3 className="mt-4 text-2xl font-bold text-zinc-900 dark:text-white">Integration Hub</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Pre-built connectors for discovery, procurement, and service management
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {integrations.map((integration, i) => (
                  <motion.span
                    key={integration}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold dark:border-zinc-700 dark:bg-zinc-900"
                  >
                {integration}
                  </motion.span>
            ))}
          </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-purple-50 p-8 dark:border-blue-800 dark:from-blue-950/30 dark:to-purple-950/30"
            >
              <Lock className="h-8 w-8 text-blue-600" />
              <h3 className="mt-4 text-2xl font-bold text-zinc-900 dark:text-white">Compliance & Security</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Built on enterprise-grade security and compliance frameworks
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {complianceBadges.map((badge) => (
                  <div
                    key={badge}
                    className="rounded-lg border border-blue-200 bg-white px-3 py-2 text-center text-xs font-semibold dark:border-blue-800 dark:bg-zinc-900"
                  >
                    {badge}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="bg-white py-20 dark:bg-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-purple-50 p-12 dark:border-blue-800 dark:from-blue-950/30 dark:to-purple-950/30"
          >
            <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-100">Calculate Your ITAM ROI</h2>
            <p className="mt-4 text-lg text-blue-900/80 dark:text-blue-200/80">
              Model savings from license optimization, audit defense, and shadow IT elimination
            </p>
            <div className="mt-8">
              <ROICalculator />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
