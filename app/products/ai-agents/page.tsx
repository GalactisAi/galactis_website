"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CostEstimator from "@/components/CostEstimator";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Bot, Sparkles, Shield, Zap, Users, MessageSquare, 
  BarChart3, Workflow, Database, Lock, CheckCircle2, 
  ArrowRight, TrendingUp, Clock, Code, Globe
} from "lucide-react";
import CompanyLogo from "@/components/CompanyLogo";

const pillars = [
  {
    icon: Code,
    title: "Design Studio",
    description: "Drag-and-drop canvas orchestrates LLM prompts, APIs, RPA, and human approvals into production-ready workflows.",
    features: ["Visual workflow builder", "Multi-modal agent design", "Template library", "Version control"]
  },
  {
    icon: Database,
    title: "Knowledge + Policy Layer",
    description: "Secure connectors ground agents with enterprise knowledge graphs, embeddings, and compliance guardrails.",
    features: ["Vector embeddings", "Enterprise knowledge", "Governance rules", "Data residency"]
  },
  {
    icon: BarChart3,
    title: "Operations Cockpit",
    description: "Real-time observability for conversations, workflow traces, redaction controls, and instant rollbacks.",
    features: ["Live monitoring", "Audit trails", "Performance metrics", "Rollback controls"]
  },
];

const useCases = [
  {
    icon: MessageSquare,
    title: "Contact Center Transformation",
    description: "Voice & chat agents deflect Tier 1 calls and escalate with rich context summaries.",
    metrics: { calls: "120K automated", reduction: "24% cost reduction" },
    company: "Infosys"
  },
  {
    icon: Users,
    title: "Service Desk Copilots",
    description: "Autonomously resolve incidents, enrich tickets, and engage humans only when necessary.",
    metrics: { resolution: "85% auto-resolved", time: "3min avg response" },
    company: "TCS"
  },
  {
    icon: TrendingUp,
    title: "Revenue Operations",
    description: "Automate CRM hygiene, follow-ups, and personalized outreach with brand-safe copy.",
    metrics: { efficiency: "+40% productivity", quality: "98% accuracy" },
    company: "ICICI Bank"
  },
  {
    icon: Workflow,
    title: "Procurement & Finance",
    description: "Agents reconcile invoices, validate approvals, and update ERP systems with complete audit trails.",
    metrics: { processing: "₹2.5 Cr saved", speed: "10x faster" },
    company: "Corpay"
  },
];

const testimonials = [
  {
    quote: "Our Chennai and Bangalore contact centres run on Galactis AI Agents. 120K calls were deflected in year one, saving ₹1.5 Cr while delivering consistent, multilingual support.",
    author: "Meera Subramanian",
    role: "COO, Infosys",
    company: "Infosys"
  },
  {
    quote: "The guardrails and observability give us confidence to deploy AI at scale across customer-facing operations without compliance risk.",
    author: "Rajesh Kumar",
    role: "CIO, ICICI Bank",
    company: "ICICI Bank"
  }
];

const integrations = [
  { name: "ServiceNow", category: "ITSM" },
  { name: "Salesforce", category: "CRM" },
  { name: "HubSpot", category: "Marketing" },
  { name: "Twilio", category: "Communications" },
  { name: "Slack", category: "Collaboration" },
  { name: "Teams", category: "Collaboration" },
  { name: "UiPath", category: "RPA" },
  { name: "Zapier", category: "Automation" },
  { name: "Azure", category: "Cloud" },
  { name: "AWS", category: "Cloud" },
  { name: "GCP", category: "Cloud" },
];

const pricing = [
  { 
    name: "SaaS Subscription", 
    icon: Sparkles,
    description: "Per agent seat licensing with premium success pod and governance guardrails included.",
    features: ["Managed infrastructure", "24/7 support", "Regular updates", "Security & compliance"]
  },
  { 
    name: "AIaaS Consumption", 
    icon: Zap,
    description: "Usage-based pricing per token, call minute, workflow execution and vector storage.",
    features: ["Pay per use", "Elastic scaling", "No minimums", "Real-time metering"]
  },
  { 
    name: "Hybrid Enterprise", 
    icon: Lock,
    description: "Dedicated tenant, custom SLAs, and bring-your-own LLM deployments for maximum control.",
    features: ["Private deployment", "Custom SLAs", "BYOLLM support", "White-glove service"]
  },
];

export default function AIAgentsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Galactis AI Agents Platform",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web, Cloud",
          offers: { "@type": "Offer", priceCurrency: "INR", price: "Contact for pricing" },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", ratingCount: "200" },
        }}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-teal-50 py-20 dark:from-purple-950/20 dark:via-black dark:to-teal-950/20">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl"
          />
          <motion.div
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl"
          />
        </div>

        <main className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            theme="light"
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products/ai-agents" },
              { label: "AI Agents Platform" },
            ]}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-12 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-teal-600 shadow-2xl"
            >
              <Bot className="h-10 w-10 text-white" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-600"
            >
              AI Agents Platform
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-4 text-4xl font-bold text-zinc-900 dark:text-white sm:text-5xl lg:text-6xl"
            >
              Design Guardrailed AI Agents
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-teal-600 bg-clip-text text-transparent">
                That Orchestrate Everything
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mx-auto mt-6 max-w-3xl text-lg text-zinc-600 dark:text-zinc-300"
            >
              From contact centers to finance ops, build multi-modal AI agents with observability, governance, and business-ready playbooks. Use any LLM or Galactis-managed models.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Link href="/contact?cta=ai-agents">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-xl hover:shadow-2xl"
                >
                  Get Your AI Agents
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
              </Link>
              <Link href="/developers/agent-templates">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-xl border-2 border-purple-600 px-8 py-4 text-lg font-semibold text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-950/30"
                >
                  Explore Templates
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            >
              {[
                { label: "Calls Automated", value: "120K", icon: MessageSquare },
                { label: "Cost Reduction", value: "24%", icon: TrendingUp },
                { label: "Build Time", value: "Weeks", icon: Clock },
                { label: "Violations", value: "0", icon: Shield }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="rounded-2xl border border-purple-200 bg-white/80 p-6 backdrop-blur dark:border-purple-800 dark:bg-zinc-900/80"
                >
                  <stat.icon className="mx-auto h-8 w-8 text-purple-600" />
                  <p className="mt-4 text-3xl font-bold text-zinc-900 dark:text-white">{stat.value}</p>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </main>
      </section>

      {/* Platform Pillars */}
      <section className="bg-white py-20 dark:bg-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-600">Platform Architecture</p>
            <h2 className="mt-4 text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl">
              Three Pillars of Enterprise AI
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
              Design, govern, and operate AI agents at scale with built-in compliance and observability
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-teal-500/0 transition-all duration-300 group-hover:from-purple-500/5 group-hover:to-teal-500/5" />
                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-teal-600 shadow-lg">
                    <pillar.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-zinc-900 dark:text-white">{pillar.title}</h3>
                  <p className="mt-3 text-zinc-600 dark:text-zinc-400">{pillar.description}</p>
                  <ul className="mt-6 space-y-2">
                    {pillar.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="bg-gradient-to-b from-zinc-50 to-white py-20 dark:from-zinc-950 dark:to-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-600">Enterprise Solutions</p>
            <h2 className="mt-4 text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl">
              Production-Ready Use Cases
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group rounded-3xl border border-zinc-200 bg-white p-8 shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-900/30">
                    <useCase.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <CompanyLogo company={useCase.company} size={48} />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-zinc-900 dark:text-white">{useCase.title}</h3>
                <p className="mt-3 text-zinc-600 dark:text-zinc-400">{useCase.description}</p>
                <div className="mt-6 flex gap-4">
                  {Object.entries(useCase.metrics).map(([key, value]) => (
                    <div key={key} className="rounded-lg bg-purple-50 px-4 py-2 dark:bg-purple-950/30">
                      <p className="text-sm font-semibold text-purple-600">{value}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20 dark:bg-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="rounded-3xl border border-purple-200 bg-gradient-to-br from-purple-50 to-teal-50 p-8 dark:border-purple-800 dark:from-purple-950/30 dark:to-teal-950/30"
              >
                <p className="text-lg italic text-zinc-700 dark:text-zinc-200">"{testimonial.quote}"</p>
                <div className="mt-6 flex items-center gap-4">
                  <CompanyLogo company={testimonial.company} size={48} />
                  <div>
                    <p className="font-semibold text-zinc-900 dark:text-white">{testimonial.author}</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-gradient-to-b from-zinc-50 to-white py-20 dark:from-zinc-950 dark:to-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-600">Flexible Pricing</p>
            <h2 className="mt-4 text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl">
              Models That Scale With You
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-900/30">
                  <plan.icon className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-zinc-900 dark:text-white">{plan.name}</h3>
                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">{plan.description}</p>
                <ul className="mt-6 space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300">
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

      {/* Integrations */}
      <section className="bg-white py-20 dark:bg-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-purple-200 bg-gradient-to-br from-purple-50 to-white p-12 dark:border-purple-800 dark:from-purple-950/30 dark:to-black"
          >
            <div className="flex items-center gap-3">
              <Globe className="h-8 w-8 text-purple-600" />
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Integration Hub</h2>
            </div>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
              Pre-built connectors orchestrate enterprise systems, communication channels, and automation platforms
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {integrations.map((integration, index) => (
                <motion.span
                  key={integration.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className="rounded-full border border-purple-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm dark:border-purple-800 dark:bg-zinc-900 dark:text-zinc-300"
                >
                  {integration.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cost Estimator */}
      <section className="bg-gradient-to-b from-zinc-50 to-white py-20 dark:from-zinc-950 dark:to-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-purple-200 bg-gradient-to-br from-purple-50 to-teal-50 p-12 dark:border-purple-800 dark:from-purple-950/30 dark:to-teal-950/30"
          >
            <h2 className="text-3xl font-bold text-purple-900 dark:text-purple-100">Forecast AI Agent Economics</h2>
            <p className="mt-4 text-lg text-purple-900/80 dark:text-purple-200/80">
              Model SaaS vs AIaaS spend with your own call volumes, message volumes, and workflows
            </p>
            <div className="mt-8">
              <CostEstimator />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
