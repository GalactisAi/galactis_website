"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Award, TrendingUp, ShieldCheck, Activity } from "lucide-react";

const impactCards = [
  {
    vertical: "Financial Services",
    headline: "₹6.5 Cr reclaimed",
    detail: "Licensing hygiene + AI lease advisors enabled a tier-one bank to reinvest in compliance programs.",
    color: "from-purple-500/80 to-indigo-500/80",
  },
  {
    vertical: "Telecom & Media",
    headline: "42% fewer P1 incidents",
    detail: "Predictive network graph + copilots orchestrated playbooks before alerts escalated.",
    color: "from-sky-500/80 to-cyan-500/80",
  },
  {
    vertical: "Healthcare",
    headline: "120K calls automated",
    detail: "Guardrailed AI agents handled scheduling & benefits while keeping PHI locked down.",
    color: "from-emerald-500/80 to-lime-500/80",
  },
  {
    vertical: "Manufacturing",
    headline: "19% faster OTIF",
    detail: "Sense-Decide-Act loops synced plants, logistics, and finance teams on a single pane.",
    color: "from-amber-500/80 to-orange-500/80",
  },
];

const streamCarousel = [
  {
    icon: TrendingUp,
    label: "Finance",
    kpi: "₹3.2 Cr audit risk avoided",
    quote: "\"Auditors now reference Galactis as the source of truth.\"",
    person: "Chief Risk Officer · ICICI Bank",
  },
  {
    icon: Activity,
    label: "Telecom",
    kpi: "15 min MTTR",
    quote: "\"Copilots highlight blast radius before any outage spreads.\"",
    person: "SVP Network Ops · Airtel",
  },
  {
    icon: ShieldCheck,
    label: "Healthcare",
    kpi: "0 PHI findings",
    quote: "\"Every agent runbook ships with HIPAA approvals baked in.\"",
    person: "CISO · Apollo Hospitals",
  },
  {
    icon: Award,
    label: "Manufacturing",
    kpi: "₹27Cr working capital unlocked",
    quote: "\"Procurement, finance, and OT finally share the same telemetry.\"",
    person: "COO · Ashok Leyland",
  },
];

const certifications = ["SOC 2", "ISO 27001", "GDPR", "HIPAA", "PCI" ];

export default function ImpactStreams() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % streamCarousel.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gradient-to-b from-zinc-50 via-white to-zinc-50 py-20 dark:from-zinc-950 dark:via-black dark:to-zinc-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 text-center sm:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-purple-600">Outcomes</p>
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl">
            Impact streams by industry
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400">
            Every card pulls from published case studies and solution pages. Hover to see the real KPIs.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {impactCards.map((card, index) => (
            <motion.div
              key={card.vertical}
              initial={{ opacity: 0, y: 30, rotateX: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ 
                y: -10, 
                scale: 1.03,
                rotateY: 3,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className={`rounded-3xl border border-white/40 bg-gradient-to-br ${card.color} p-5 text-white shadow-xl backdrop-blur relative overflow-hidden`}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Animated shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">{card.vertical}</p>
              <p className="mt-3 text-2xl font-semibold">{card.headline}</p>
              <p className="mt-3 text-sm text-white/90">{card.detail}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="rounded-3xl border border-zinc-200/70 bg-white p-6 shadow-2xl dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-purple-600">Impact carousel</p>
                <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white">Stories in motion</h3>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActive((prev) => (prev - 1 + streamCarousel.length) % streamCarousel.length)}
                  className="rounded-full border border-zinc-200 p-2 text-zinc-600 transition hover:border-purple-400 hover:text-purple-600 dark:border-zinc-700 dark:text-zinc-300"
                  aria-label="Previous impact"
                >
                  ‹
                </button>
                <button
                  onClick={() => setActive((prev) => (prev + 1) % streamCarousel.length)}
                  className="rounded-full border border-zinc-200 p-2 text-zinc-600 transition hover:border-purple-400 hover:text-purple-600 dark:border-zinc-700 dark:text-zinc-300"
                  aria-label="Next impact"
                >
                  ›
                </button>
              </div>
            </div>
            <div className="mt-8 overflow-hidden">
              <AnimatePresence mode="wait">
                {(() => {
                  const ActiveIcon = streamCarousel[active].icon;
                  const item = streamCarousel[active];
                  return (
                <motion.div
                      key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-2xl border border-zinc-200/70 bg-white/70 p-6 shadow-inner dark:border-zinc-800/70 dark:bg-zinc-900/70"
                >
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-purple-600">
                        <ActiveIcon className="h-4 w-4" />
                        {item.label}
                  </div>
                  <p className="mt-4 text-3xl font-bold text-zinc-900 dark:text-white">
                        {item.kpi}
                  </p>
                      <p className="mt-4 text-lg text-zinc-700 dark:text-zinc-200">{item.quote}</p>
                      <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">{item.person}</p>
                </motion.div>
                  );
                })()}
              </AnimatePresence>
            </div>
            <div className="mt-6 flex gap-2">
              {streamCarousel.map((_, index) => (
                <button
                  key={`dot-${index}`}
                  onClick={() => setActive(index)}
                  className={`h-2 w-8 rounded-full transition ${index === active ? "bg-purple-600" : "bg-zinc-200 dark:bg-zinc-700"}`}
                  aria-label={`Go to impact ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-2xl dark:border-zinc-800 dark:bg-zinc-900">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-purple-600">Trust layer</p>
            <h3 className="mt-3 text-2xl font-semibold text-zinc-900 dark:text-white">Certifications & guardrails</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Hover to view tooltips pulled from galactis.ai/security.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {certifications.map((cert) => (
                <motion.div
                  key={cert}
                  whileHover={{ scale: 1.03 }}
                  className="rounded-2xl border border-zinc-200 bg-white/70 px-4 py-3 text-center text-sm font-semibold text-zinc-700 shadow-sm dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-200"
                >
                  {cert}
                </motion.div>
              ))}
            </div>
            <p className="mt-6 text-xs text-zinc-500 dark:text-zinc-400">
              Full audit artifacts + mapping available under NDA. Request access via security@galactis.ai
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
