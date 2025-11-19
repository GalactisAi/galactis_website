"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const platformDomains = [
  {
    name: "IT Asset Management",
    description: "Normalize hardware, software, SaaS, and CMDB telemetry into a living inventory with built-in guardrails.",
    metrics: ["₹2.8 Cr waste removed", "28% faster compliance"],
    bullets: ["Effective License Position + FinOps scenarios", "Autonomous reclamation with policy oversight", "Always-auditable change history"],
    accent: "from-purple-500/90 to-indigo-500/90",
    href: "/products/itam",
  },
  {
    name: "Network Intelligence",
    description: "Predict incidents, map blast radius, and orchestrate playbooks before alerts escalate.",
    metrics: ["99.95% uptime", "42% fewer P1 incidents"],
    bullets: ["Predictive topology graph across hybrid estates", "Closed-loop automations with ServiceNow, PagerDuty, Slack", "Shared visibility for NOC, NetSec, and SRE"],
    accent: "from-sky-500/90 to-cyan-500/90",
    href: "/products/network-monitoring",
  },
  {
    name: "AI Agents",
    description: "Design multimodal agents with approvals, telemetry, and data residency built in.",
    metrics: ["120K calls automated", "<2 min MTTR assist"],
    bullets: ["Visual studio for prompts, APIs, RPA, and people", "Knowledge & policy layer with redaction", "Ops cockpit with drift detection"],
    accent: "from-emerald-500/90 to-lime-500/90",
    href: "/products/ai-agents",
  },
];

const deployments = [
  { customer: "Airtel", impact: "42% fewer P1s", detail: "Predictive network graph + incident copilots" },
  { customer: "ICICI Bank", impact: "₹6.5 Cr reclaimed", detail: "Licensing hygiene + AI lease advisors" },
  { customer: "Apollo Hospitals", impact: "120K calls automated", detail: "Clinical + back office AI agents with guardrails" },
  { customer: "Ashok Leyland", impact: "19% faster OTIF", detail: "Sense-Decide-Act loops across plants" },
];

const senseDecideAct = [
  {
    stage: "Sense",
    description: "Ingest agents, CMDB, CMMS, observability, tickets, and telemetry into one normalized graph.",
    highlights: ["Connectors", "Streaming", "Digital twins"],
  },
  {
    stage: "Decide",
    description: "Graph AI and governance policies evaluate risk, compliance, and cost before triggering actions.",
    highlights: ["Policy engine", "AI copilots", "What-if sims"],
  },
  {
    stage: "Act",
    description: "Autonomous or human-in-the-loop actions across ITAM, NetOps, SecOps, and finance workflows.",
    highlights: ["Playbooks", "AI agents", "Approvals"],
  },
];

export default function PlatformShowcase() {
  return (
    <section className="bg-white py-20 dark:bg-black">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 text-center sm:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-purple-600">Platform</p>
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl">
            One platform for assets, networks, and AI agents
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400">
            Every decision you see below runs on the Galactis platform in production today. These cards mirror the data we showcase on product and case study pages.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {platformDomains.map((domain, index) => (
            <motion.div
              key={domain.name}
              initial={{ opacity: 0, y: 40, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 100 }}
              whileHover={{
                y: -10,
                scale: 1.02,
                rotateY: 3,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="flex flex-col rounded-3xl border border-zinc-200/80 bg-white shadow-xl dark:border-zinc-800/80 dark:bg-zinc-900 relative overflow-hidden"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Hover glow effect */}
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-teal-500 opacity-0 blur-2xl"
                whileHover={{ opacity: 0.2 }}
                transition={{ duration: 0.3 }}
              />
              <div className={`rounded-t-3xl bg-gradient-to-r ${domain.accent} p-6 text-white`}>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">Capability</p>
                <h3 className="mt-2 text-2xl font-bold">{domain.name}</h3>
                <p className="mt-3 text-sm text-white/80">{domain.description}</p>
                <div className="mt-4 flex flex-wrap gap-3 text-xs font-semibold text-white">
                  {domain.metrics.map((metric) => (
                    <span key={metric} className="rounded-full border border-white/30 px-3 py-1">
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col flex-grow p-6">
                <div className="space-y-3 flex-grow">
                  {domain.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-300">
                      <span className="mt-1 h-2 w-2 rounded-full bg-purple-500" />
                      {bullet}
                    </div>
                  ))}
                </div>
                <Link
                  href={domain.href}
                  className="mt-6 inline-flex items-center text-sm font-semibold text-purple-600 transition hover:text-purple-700"
                >
                  Explore blueprint
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 space-y-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-purple-600">Deployments</p>
              <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white">Platform decisions driven by enterprise requirements</h3>
            </div>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {deployments.map((deployment, index) => (
              <motion.div
                key={`${deployment.customer}-${index}`}
                whileHover={{ scale: 1.03 }}
                className="min-w-[260px] rounded-2xl border border-zinc-200 bg-gradient-to-br from-zinc-50 to-white p-5 shadow-lg dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-950"
              >
                <h4 className="text-lg font-semibold text-zinc-900 dark:text-white">{deployment.customer}</h4>
                <p className="mt-1 text-sm font-semibold text-emerald-600 dark:text-emerald-400">{deployment.impact}</p>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{deployment.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-3xl border border-purple-200/60 bg-gradient-to-br from-purple-50 to-white p-8 shadow-xl dark:border-purple-900/40 dark:from-purple-950/20 dark:to-zinc-950">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-purple-600">Sense · Decide · Act</p>
              <h3 className="mt-3 text-2xl font-semibold text-zinc-900 dark:text-white">Interactive diagram of the Galactis orchestration loop</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                Use the visual below to explain Galactis to execs or operators—each node maps to live product capabilities.
              </p>
            </div>
            <Link
              href="/platform"
              className="inline-flex items-center rounded-full border border-purple-300 px-4 py-2 text-sm font-semibold text-purple-700 transition hover:border-purple-500 hover:text-purple-900 dark:border-purple-700 dark:text-purple-200"
            >
              Download platform map
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {senseDecideAct.map((stage, index) => (
              <motion.div
                key={stage.stage}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-2xl border border-white/40 bg-white/30 p-6 shadow-md backdrop-blur dark:border-white/10 dark:bg-white/5"
              >
                <div className="absolute inset-0 border border-dashed border-purple-200/60 dark:border-purple-500/30" />
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-purple-500">{stage.stage}</p>
                  <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-100">{stage.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs text-purple-600 dark:text-purple-300">
                    {stage.highlights.map((highlight) => (
                      <span key={highlight} className="rounded-full border border-purple-200 px-3 py-1 dark:border-purple-600">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
