"use client";

import { useState } from "react";
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
  Layers, DollarSign, Lock, ChevronDown
} from "lucide-react";
import CompanyLogo from "@/components/CompanyLogo";

const programs = [
  {
    icon: Database,
    title: "Unified Software Intelligence",
    description: "Bring software inventory, license data, and usage signals together across on-prem, SaaS, and cloud environments in one accurate system.",
    features: ["Auto-discovery", "Contract normalization", "Usage tracking", "AI enrichment"]
  },
  {
    icon: Package,
    title: "Lifecycle Command Center",
    description: "Track assets from purchase to retirement with clear ownership history, warranty visibility, and automated lifecycle workflows.",
    features: ["Asset tracking", "Warranty management", "Disposal certification", "Chain of custody"]
  },
  {
    icon: FileText,
    title: "Audit & Compliance Control",
    description: "Maintain audit-ready records with automated evidence collection, compliance reporting, and proactive risk identification across your asset estate.",
    features: ["Evidence automation", "Audit simulation", "Compliance reporting", "Risk scoring"]
  },
];

const useCases = [
  {
    icon: DollarSign,
    title: "Technology Value Office",
    description: "Track asset-level spend, allocate costs accurately, and recover unused licenses across business units with measurable financial impact.",
    metrics: { savings: "₹2.8 Cr recovered", efficiency: "85% automated" },
    company: "ICICI Bank"
  },
  {
    icon: Shield,
    title: "License Defense",
    description: "Prepare for vendor audits with structured evidence, automated reconciliation, and defensible usage data across major software vendors.",
    metrics: { penalties: "₹1.5 Cr risk avoided", time: "Audit-ready in days" },
    company: "Infosys"
  },
  {
    icon: Package,
    title: "Hardware Refresh & Disposal",
    description: "Forecast asset end-of-life, plan refresh cycles, and execute certified disposal with complete compliance and traceable documentation.",
    metrics: { assets: "50K+ assets tracked", compliance: "100% compliant disposal" },
    company: "TCS"
  },
];

const transformations = [
  {
    title: "Shadow IT Control (85% Reduction)",
    stat: "85%",
    points: [
      "Automatically identify and normalize millions of software titles without manual effort",
      "Detect unauthorized SaaS and cloud spend within 24 hours",
      "Trigger real-time alerts for procurement, finance, and security teams"
    ]
  },
  {
    title: "Financial Governance & Cost Control (₹2.8 Cr Impact)",
    stat: "₹2.8 Cr",
    points: [
      "Maintain a continuous license position with forward-looking scenarios",
      "Convert usage data into clear financial impact using FinOps dashboards",
      "Allocate IT costs accurately across departments in real time"
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

const assetManagementCards = [
  {
    title: "Automated Asset Visibility",
    description: "Automatically surface hardware, software, SaaS, and cloud assets across environments using continuous discovery. Maintain a real-time, trustworthy asset inventory with accurate ownership, usage, and configuration data, without spreadsheets or manual reconciliation."
  },
  {
    title: "Complete Asset Lifecycle Control",
    description: "Oversee IT assets from purchase to retirement with full financial, operational, and user history. Improve planning, reduce underutilization, and make informed decisions using a single system of record."
  },
  {
    title: "Self-Service Requests and Automation",
    description: "Streamline asset requests, approvals, provisioning, and renewals through a centralized service catalog. Enforce policies, eliminate manual handoffs, and ensure consistent execution with configurable, automated workflows across teams."
  },
  {
    title: "Temporary Asset and Loan Management",
    description: "Track shared, loaned, and temporary equipment with clear ownership and timelines. Reduce asset loss, improve availability, and ensure timely returns using assignment tracking, reminders, and audit-ready records."
  },
  {
    title: "Proactive Maintenance Management",
    description: "Plan and manage asset maintenance schedules, warranties, and service activities in one place. Prevent downtime, control maintenance costs, and extend asset lifespan with proactive alerts and maintenance visibility."
  }
];

const faqData = [
  {
    question: "What is IT Asset Management software?",
    answer: "IT Asset Management software helps organizations track, manage, and optimize hardware, software, SaaS, and cloud assets across their entire lifecycle from discovery to retirement."
  },
  {
    question: "How does ITAM software improve visibility across assets?",
    answer: "ITAM software continuously discovers assets across on-prem, SaaS, and cloud environments, creating a single, real-time source of truth for ownership, usage, configuration, and cost data."
  },
  {
    question: "Does IT Asset Management software support both hardware and software assets?",
    answer: "Yes. Modern IT Asset Management software covers hardware, software licenses, SaaS applications, cloud resources, and virtual assets within one unified platform."
  },
  {
    question: "How does ITAM help reduce IT costs?",
    answer: "ITAM software identifies unused assets, over-licensed software, duplicate purchases, and renewal risks, helping teams reclaim spend, prevent waste, and improve financial governance."
  },
  {
    question: "Can ITAM software help with software license compliance?",
    answer: "Yes. ITAM software validates license usage, enforces entitlements, and maintains audit-ready records to reduce compliance risk and avoid costly vendor penalties."
  },
  {
    question: "Does the platform support asset lifecycle management?",
    answer: "Absolutely. IT Asset Management software tracks assets from procurement and deployment through maintenance, reassignment, and secure retirement with complete historical context."
  },
  {
    question: "Can ITAM integrate with service desks and workflows?",
    answer: "Yes. ITAM software integrates with service desks to link assets with incidents, requests, and changes, enabling faster resolution and better service outcomes."
  },
  {
    question: "How does ITAM handle SaaS and cloud assets?",
    answer: "ITAM software automatically detects SaaS and cloud usage, tracks ownership and spend, flags shadow IT, and provides visibility into renewals, access, and cost optimization opportunities"
  },
  {
    question: "Is IT Asset Management software suitable for large enterprises?",
    answer: "Yes. Enterprise-grade ITAM software is built to scale across complex environments, multiple business units, and global operations with role-based access and automation."
  },
  {
    question: "How long does it take to see value from ITAM software?",
    answer: "Most teams start seeing improved visibility and cost control within weeks, with long-term value increasing as asset data, workflows, and governance mature."
  }
];

export default function ITAssetManagementSoftwarePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
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
            { label: "Products", href: "/products/it-asset-management-software" },
            { label: "IT Asset Management Software" },
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

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">ASSET VISIBILITY & GOVERNANCE</p>
            <h1 className="mt-4 text-4xl font-bold text-zinc-900 dark:text-white sm:text-5xl lg:text-6xl">
              IT Asset Management Software
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-600 dark:text-zinc-300">
              Track and optimize IT assets across hardware, software, and cloud environments with real-time visibility into usage, lifecycle, costs, and ITAM insights.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact?cta=itam">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-xl"
                >
                  Try ITAM Demo
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
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">CORE IT ASSET CAPABILITIES</p>
            <h2 className="mt-4 text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl">
              Three Pillars of IT Asset Intelligence
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

      {/* Visibility Section */}
      <section className="bg-gradient-to-b from-zinc-50 to-white py-20 dark:from-zinc-950 dark:to-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl">
              Stay in Control of Every IT Asset
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-600 dark:text-zinc-300">
              Get a single, reliable view of hardware, software, SaaS, and cloud assets across their entire lifecycle.<br />
              Our IT Asset Management software helps teams track ownership, usage, compliance, and costs with automated workflows that reduce manual effort and improve accuracy at scale.
            </p>
          </motion.div>
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
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">ENTERPRISE IT ASSET USE CASES</p>
            <h2 className="mt-4 text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl">
              Production-Ready ITAM Use Cases
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

      {/* Benefits Section */}
      <section className="bg-white py-20 dark:bg-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl">
              Benefits of Our IT Asset Management Software
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Control the Asset Lifecycle</h3>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                Track hardware, software, SaaS, and cloud assets from procurement to retirement. Automated lifecycle workflows reduce manual tracking, eliminate blind spots, and ensure assets are used efficiently throughout their lifespan.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Lower IT Spend With Confidence</h3>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                Understand where money is actually being spent across licenses, subscriptions, and infrastructure. Identify unused assets, prevent unnecessary renewals, and make data-backed decisions that directly improve cost efficiency.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Built-In Compliance, No Fire Drills</h3>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                Stay audit-ready with continuous visibility into licenses, contracts, and usage. Detect compliance risks early, maintain accurate records, and avoid last-minute surprises during vendor or regulatory audits.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Full Visibility Section */}
      <section className="bg-gradient-to-b from-zinc-50 to-white py-20 dark:from-zinc-950 dark:to-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl">
              Full Visibility Across Your IT Asset Estate
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-600 dark:text-zinc-300">
              Get a single, trusted view of hardware, software, SaaS, and cloud assets across their entire lifecycle. Our IT Asset Management software helps teams reduce risk, control spend, and act with confidence using real-time, accurate asset data.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "IT Asset Discovery",
                description: "Automatically detect hardware, software, SaaS, and cloud assets across environments to maintain a continuously accurate inventory."
              },
              {
                title: "Asset Lifecycle Management",
                description: "Control assets from procurement through retirement with complete financial, operational, and ownership history in one system."
              },
              {
                title: "Contract & Renewal Intelligence",
                description: "Track contracts, renewals, and obligations proactively to avoid surprise costs and missed deadlines."
              },
              {
                title: "Software Asset Management",
                description: "Validate license usage, enforce entitlements, and reduce audit exposure with policy-driven software governance."
              },
              {
                title: "Procurement & Inventory Control",
                description: "Standardize purchasing, prevent duplicate spend, and maintain transparency across vendors and asset categories."
              },
              {
                title: "Service Desk Integration",
                description: "Link asset data with incidents, requests, and changes to speed resolution and improve service quality."
              },
              {
                title: "Workflow Automation",
                description: "Automate approvals, asset movements, renewals, and notifications using configurable workflows."
              },
              {
                title: "Reporting & Dashboards",
                description: "Monitor asset health, cost, compliance, and utilization with real-time reports built for IT, finance, and leadership."
              }
            ].map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
              >
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">{card.title}</h3>
                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">{card.description}</p>
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

      {/* Track and Manage IT Assets with Confidence */}
      <section className="bg-white py-20 dark:bg-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl">
              Track and Manage IT Assets with Confidence
            </h2>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {assetManagementCards.slice(0, 3).map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="w-full rounded-3xl border border-zinc-200 bg-white p-8 shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
              >
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{card.title}</h3>
                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">{card.description}</p>
              </motion.div>
            ))}
            <div className="col-span-1 flex justify-center gap-6 md:col-span-2 lg:col-span-3">
              {assetManagementCards.slice(3).map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index + 3) * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="w-full rounded-3xl border border-zinc-200 bg-white p-8 shadow-lg dark:border-zinc-800 dark:bg-zinc-900 md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                >
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{card.title}</h3>
                  <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">{card.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="bg-gradient-to-b from-zinc-50 to-white py-20 dark:from-zinc-950 dark:to-black">
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

      {/* Frequently Asked Questions */}
      <section className="bg-white py-20 dark:bg-black">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </motion.div>
          
          <div className="mt-12 space-y-4">
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
                    className={`h-5 w-5 flex-shrink-0 text-blue-600 dark:text-blue-400 transition-transform ${
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

