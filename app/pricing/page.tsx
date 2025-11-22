"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HubSpotContactModal from "@/components/HubSpotContactModal";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";
import { motion } from "framer-motion";
import { 
  CheckCircle2, Clock, Shield, Users, TrendingUp, 
  ArrowRight, Zap, Globe, Target, ChevronDown 
} from "lucide-react";
import { useState } from "react";

const bundleHighlights = [
  {
    icon: Target,
    title: "ITAM + FinOps Blueprint",
    description: "Unified asset inventory, continuous Effective License Position, and automation-ready reclaim playbooks.",
    bullets: ["Covers software, SaaS, hardware, and cloud", "Includes regulator-ready evidence packs", "Pairs with Finance + Procurement stakeholders"],
    color: "from-blue-600 to-purple-600"
  },
  {
    icon: Zap,
    title: "Network Intelligence & Automation",
    description: "Topology, observability, and AI runbooks to sustain 99.95% uptime across hybrid, 5G, and edge estates.",
    bullets: ["Predictive blast-radius modeling", "Event streaming into ServiceNow, PagerDuty, Slack", "Human-in-the-loop guardrails"],
    color: "from-sky-600 to-blue-600"
  },
  {
    icon: Users,
    title: "AI Agents Platform",
    description: "Multimodal agents with policy, knowledge, and observability layers for customer, IT, and back-office journeys.",
    bullets: ["Studio + governance workspace", "Consumption guardrails for AIaaS", "Template library for voice, chat, workflow, RPA"],
    color: "from-purple-600 to-indigo-600"
  },
];

const engagementStages = [
  { 
    phase: "Day 0", 
    title: "Discovery & KPI intake", 
    detail: "Share ITAM, NetOps, or AI agent objectives plus compliance requirements. Response within 24 hours.",
    icon: Clock
  },
  { 
    phase: "Days 1-5", 
    title: "Blueprint & commercial modeling", 
    detail: "Joint squads align scope, integrations, hosting, and success criteria. Pricing scenarios mapped to ROI.",
    icon: TrendingUp
  },
  { 
    phase: "Weeks 2-10", 
    title: "Pilot & measurement", 
    detail: "Eight-week program with shared dashboards, exec checkpoints, and value realization tracking.",
    icon: Target
  },
  { 
    phase: "Post-pilot", 
    title: "Procurement & deployment", 
    detail: "Commercials locked with legal + security sign-off. Rollouts follow the same automation playbooks documented on our solutions pages.",
    icon: CheckCircle2
  },
];

const readinessChecklist = [
  "Target domains (ITAM, Network, AI Agents) and KPIs",
  "Systems to integrate (ITSM, ERP, cloud, telco, comms)",
  "Compliance scope (PCI-DSS, SOX, HIPAA, GDPR, RBI Guidelines)",
  "Preferred deployment model (multi-tenant, single-tenant, sovereign)",
  "Timeline constraints (audit windows, transformation programs)",
];

const assurances = [
  "SOC 2 Type II, ISO 27001, HIPAA, DPDP Act controls inherit across every plan.",
  "Sovereign and dedicated tenant options for financial services and public sector.",
  "AI agent guardrails include policy templates, audit logs, and rollback.",
  "Managed success pods align to your industry and region.",
];

const pricingFaq = [
  {
    question: "How is Galactis pricing structured?",
    answer: "Our pricing combines platform subscription fees with usage-based components (per asset monitored, per AI agent, per workflow). Volume discounts and annual commitments reduce overall costs. Enterprise deals typically start at ₹42 Lakhs+ annually, tailored to your scale, compliance needs, and deployment model.",
  },
  {
    question: "Why is pricing consultative rather than listed?",
    answer: "Each deployment is unique—spanning multiple regions, compliance requirements (PCI-DSS, RBI Guidelines, DPDP Act), hosting preferences (multi-tenant, single-tenant, sovereign), and integration complexity. We co-design commercials to align with your KPIs, ROI targets, and procurement cycles.",
  },
  {
    question: "Do you offer volume discounts or add-on services?",
    answer: "Yes. Enterprise agreements include volume discounts for large asset footprints or agent deployments. Add-ons include professional services (integration, training, custom playbooks), premium support tiers (24/7, dedicated pods), and managed success programs. All options are outlined in your tailored proposal.",
  },
];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleContactSales = () => {
    trackEvent("pricing_cta_clicked");
    const button = document.querySelector('[data-contact-trigger][data-intent="sales"]') as HTMLButtonElement;
    if (button) {
      button.click();
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900 py-20">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl"
          />
        </div>

        <main className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr]"
          >
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70"
              >
                Pricing & Procurement
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-4 text-4xl font-bold leading-tight text-white lg:text-5xl"
              >
                Enterprise Pricing Is A
                <br />
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Conversation, Not A Calculator
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-6 text-lg leading-relaxed text-white/90"
              >
                Every Galactis deployment spans ITAM, network intelligence, and AI agents with compliance guardrails. We co-design commercials to match scope, hosting, and ROI expectations.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-4 text-sm text-white/70"
              >
                Pricing combines platform subscriptions with usage-based components. Typical enterprise deals start at <span className="font-semibold text-white">₹42 Lakhs+ annually</span>, with volume discounts and flexible deployment options.
              </motion.p>
              
              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-8 space-y-3"
              >
                {[
                  "24-hour response from industry solution owners",
                  "Blueprint + commercial modeling in under 5 business days",
                  "Eight-week pilots with shared success dashboards"
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="flex items-center gap-3 text-sm text-white/90"
                  >
                    <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleContactSales}
                  className="flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-purple-900 shadow-xl"
                >
                  Get Tailored Proposal
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
                <Link href="/solutions/financial-services">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="rounded-xl border-2 border-white/40 px-8 py-4 text-lg font-semibold text-white hover:bg-white/10"
                  >
                    View Solutions
                  </motion.button>
                </Link>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">What To Expect</p>
              <dl className="mt-6 space-y-5">
                {[
                  { label: "Response SLA", value: "24 hours", icon: Clock },
                  { label: "Pilot Duration", value: "8 weeks", icon: Target },
                  { label: "Support Model", value: "Dedicated pod", icon: Users },
                  { label: "Coverage", value: "India, APAC, Global", icon: Globe },
                  { label: "Starting Range", value: "₹42 Lakhs+ annually", icon: TrendingUp }
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="h-5 w-5 text-white/60" />
                      <dt className="text-sm text-white/70">{item.label}</dt>
                </div>
                    <dd className="text-lg font-semibold text-white">{item.value}</dd>
                  </motion.div>
                ))}
              </dl>
            </motion.div>
          </motion.div>
        </main>
        </section>

      {/* Solution Bundles */}
      <section className="bg-gradient-to-b from-zinc-50 to-white py-20 dark:from-zinc-950 dark:to-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-600">Solution Bundles</p>
            <h2 className="mt-4 text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl">
              What We Typically Model
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {bundleHighlights.map((bundle, index) => (
              <motion.div
                key={bundle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group rounded-3xl border border-zinc-200 bg-white p-8 shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${bundle.color} shadow-lg`}>
                  <bundle.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-zinc-900 dark:text-white">{bundle.title}</h3>
                <p className="mt-3 text-zinc-600 dark:text-zinc-400">{bundle.description}</p>
                <ul className="mt-6 space-y-3">
                  {bundle.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          </div>
        </section>

      {/* Engagement Journey */}
      <section className="bg-white py-20 dark:bg-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-600">Journey</p>
            <h2 className="mt-4 text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl">
              Procurement & Pilot Timeline
            </h2>
          </motion.div>

          <div className="mt-12 space-y-6">
            {engagementStages.map((stage, index) => (
              <motion.div
                key={stage.phase}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:border-purple-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-purple-600"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-900/30">
                    <stage.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-600">{stage.phase}</div>
                    <h3 className="mt-2 text-xl font-bold text-zinc-900 dark:text-white">{stage.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{stage.detail}</p>
                  </div>
              </div>
              </motion.div>
            ))}
          </div>
          </div>
        </section>

      {/* Checklist & Guarantees */}
      <section className="bg-gradient-to-b from-zinc-50 to-white py-20 dark:from-zinc-950 dark:to-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Checklist */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-purple-200 bg-gradient-to-br from-purple-50 to-white p-8 shadow-lg dark:border-purple-800 dark:from-purple-950/30 dark:to-zinc-900"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-900/30">
                  <Target className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Come Prepared With</h2>
              </div>
              <ul className="mt-6 space-y-4">
              {readinessChecklist.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-purple-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            </motion.div>

            {/* Guarantees */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-8 shadow-lg dark:border-emerald-800 dark:from-emerald-950/30 dark:to-zinc-900"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-900/30">
                  <Shield className="h-6 w-6 text-emerald-600" />
                </div>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">What We Guarantee</h2>
          </div>
              <ul className="mt-6 space-y-4">
              {assurances.map((assurance) => (
                  <li key={assurance} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                  <span>{assurance}</span>
                </li>
              ))}
            </ul>
              <div className="mt-6 rounded-xl border border-emerald-200 bg-white/80 p-4 dark:border-emerald-800 dark:bg-zinc-900/50">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">Volume & Add-ons</p>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  Enterprise agreements include volume discounts for large deployments. Add-ons: professional services, premium support tiers, and managed success programs.
              </p>
              </div>
            </motion.div>
            </div>
          </div>
        </section>

      {/* CTA Section */}
      <section className="bg-white py-20 dark:bg-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-purple-200 bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-50 p-12 shadow-xl dark:border-purple-800 dark:from-purple-950/30 dark:via-indigo-950/30 dark:to-purple-950/30"
          >
            <div className="grid gap-8 md:grid-cols-[1.2fr,0.8fr]">
            <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-purple-600">Next Step</p>
                <h2 className="mt-4 text-3xl font-bold text-purple-900 dark:text-purple-100">Ready For A Tailored Proposal?</h2>
                <p className="mt-4 text-lg text-purple-900/80 dark:text-purple-100/80">
                Bring your KPIs, integrations, and compliance constraints. We'll present a tailored commercial model and success plan in under a week.
              </p>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleContactSales}
                  className="mt-8 flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg"
                >
                  Request Pricing Consultation
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
            </div>
              
              <div className="rounded-2xl border border-purple-200 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-purple-800 dark:bg-zinc-900/50">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-900 dark:text-purple-100">
                  What You Receive
                </p>
                <ul className="mt-4 space-y-3">
                  {[
                    "Commercial options mapped to ROI",
                    "Integration + rollout sequencing",
                    "Governance & security summary",
                    "Executive-ready business case"
                  ].map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-2 text-sm text-purple-900 dark:text-purple-100"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      {item}
                    </motion.li>
                  ))}
              </ul>
            </div>
          </div>
          </motion.div>
          </div>
        </section>

      {/* FAQ Section */}
      <section className="bg-gradient-to-b from-zinc-50 to-white py-20 dark:from-zinc-950 dark:to-black">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-600">FAQ</p>
            <h2 className="mt-4 text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </motion.div>
          
          <div className="mt-12 space-y-4">
            {pricingFaq.map((faq, index) => (
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
                  <span className="text-lg font-semibold text-zinc-900 dark:text-white">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-zinc-500 transition-transform ${openFaq === index ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
          </div>
        </section>

      {/* Hidden HubSpotContactModal trigger */}
      <HubSpotContactModal triggerClassName="hidden" />

      <Footer />
    </div>
  );
}
