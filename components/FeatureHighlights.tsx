"use client";

import { ShieldCheck, Network, Bot, Gauge, LucideIcon } from "lucide-react";
import { ScrollRevealStagger } from "./ScrollReveal";
import { motion, useSpring, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
  bullets: string[];
};

const features: Feature[] = [
  {
    title: "Technology Value Office",
    description: "IT Asset and FinOps programs designed to help enterprises reduce waste, improve license governance, and meet regulatory expectations.",
    icon: Gauge,
    bullets: ["Effective License Position with scenario planning", "Chargeback-ready benchmarks for every BU"],
  },
  {
    title: "Autonomous Network Operations",
    description: " Predictive network operations programs focused on preventing incidents, reducing escalation, and improving uptime at scale.",
    icon: Network,
    bullets: ["Correlate NetFlow, NPS, and telemetry in one graph", "Trigger low-code remediation with human approval"],
  },
  {
    title: "AI Agents Studio",
    description: " Custom AI agents delivered as a managed service, designed around specific client workflows and governed by enterprise controls.",
    icon: Bot,
    bullets: ["Studio with prompt, policy, and knowledge layers", "Observability cockpit for drift, redaction, and rollback"],
  },
  {
    title: "Compliance & Trust",
    description: " Enterprise security and compliance programs enforced across SOC 2, ISO 27001, HIPAA, PCI-DSS, and regional requirements.",
    icon: ShieldCheck,
    bullets: ["Immutable audit trails + evidence packs", "Data residency + segregation by geography"],
  },
];

function FeatureCard({ feature }: { feature: Feature }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  
  const scaleProgress = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1, 0.98]);
  const scale = useSpring(scaleProgress, { stiffness: 100, damping: 15, mass: 0.5 });

  return (
    <motion.div
      ref={cardRef}
      style={{ scale }}
      whileHover={{ 
        y: -4,
        scale: 1.02,
        boxShadow: "0 25px 50px -12px rgba(0,0,0,0.08)",
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      className="group rounded-3xl border border-zinc-200 p-5 shadow-sm transition-all hover:border-purple-400 dark:border-zinc-800 dark:hover:border-purple-700 sm:p-6 lg:p-7"
    >
      <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 260 }}>
        <feature.icon className="h-10 w-10 text-purple-600 transition-colors group-hover:text-purple-700 dark:text-purple-400 dark:group-hover:text-purple-300" />
      </motion.div>
      <h3 className="mt-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">{feature.title}</h3>
      <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">{feature.description}</p>
      <ul className="mt-4 space-y-2 text-sm text-zinc-800 dark:text-zinc-200">
        {feature.bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-500" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function FeatureHighlights() {
  return (
    <section className="bg-white py-20 dark:bg-black">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 text-center sm:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-purple-600">Platform architecture</p>
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
            How Galactis Programs Are Deployed in the Real World
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-300">
            These examples show how enterprises use Galactis across asset management, network operations, and selectively delivered AI services.
          </p>
        </div>
        <ScrollRevealStagger
          direction="up"
          staggerDelay={0.1}
          distance={30}
          className="mt-12 grid gap-5 sm:gap-6 md:grid-cols-2"
        >
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </ScrollRevealStagger>
      </div>
    </section>
  );
}

