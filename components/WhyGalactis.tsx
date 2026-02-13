"use client";

import { Layers, Brain, ShieldCheck } from "lucide-react";
import { motion, useSpring, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { ScrollRevealStagger } from "./ScrollReveal";

const reasons = [
  {
    icon: Layers,
    title: "Single Source of Truth for Enterprise Assets",
    description:
      "All asset, contract, and dependency data is reconciled into a single system of record, eliminating drift, duplication, and shadow IT across large environments.",
    proof: ["₹2.8 Cr average IT waste eliminated", "220+ enterprise systems bi-directionally synced"],
  },
  {
    icon: Brain,
    title: "Proactive, Not Reactive, Network Operations",
    description:
      "Galactis shifts teams from alert-driven firefighting to predictive detection, identifying risk patterns before incidents impact users or SLAs.",
    proof: ["99.95% uptime achieved", "42% fewer P1 incidents"],
  },
  {
    icon: ShieldCheck,
    title: " Custom AI Agents for Enterprises",
    description:
      "Galactis designs and builds AI agents based on specific client requirements, delivered as a managed service with enterprise-grade controls, approvals, and auditability.",
    proof: ["120K+ operational tasks automated", "Governed deployments across regulated industries"],
  },
];

function WhyCard({ reason }: { reason: typeof reasons[0] }) {
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
      className="group flex h-full rounded-3xl border border-gray-200 bg-white p-6 shadow-lg transition-all duration-300 overflow-hidden dark:border-gray-800 dark:bg-gray-950 sm:p-7 lg:p-8 relative"
      style={{ scale, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 30, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ 
        scale: 1.02,
        y: -8,
        rotateY: 2,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
    >
      {/* Animated gradient background on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-emerald-500/0"
        whileHover={{ 
          background: "linear-gradient(to bottom right, rgba(168, 85, 247, 0.03), rgba(16, 185, 129, 0.03))"
        }}
        transition={{ duration: 0.3 }}
      />
      {/* Icon glow on hover */}
      <motion.div
        className="absolute top-6 left-6 w-14 h-14 bg-gradient-to-br from-purple-500 to-emerald-500 rounded-2xl opacity-0 blur-xl"
        whileHover={{ opacity: 0.3 }}
        transition={{ duration: 0.3 }}
      />
      <div className="relative flex flex-col w-full">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/15 to-emerald-500/15 text-purple-600 dark:text-purple-300">
          <reason.icon className="h-6 w-6" />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">{reason.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400 flex-grow">{reason.description}</p>
        <ul className="mt-4 space-y-2 text-sm text-gray-800 dark:text-gray-200">
          {reason.proof.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function WhyGalactis() {
  return (
    <section className="bg-gradient-to-b from-gray-50 via-white to-white py-12 dark:from-gray-900 dark:via-gray-900 dark:to-black sm:py-16 lg:py-20 snap-start min-h-screen flex items-center">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full py-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-purple-600">Why Galactis</p>
          <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white lg:text-4xl">
            Why Enterprises Run Galactis in Production
          </h2>
          <p className="mt-4 text-base text-gray-600 dark:text-gray-300">
            Galactis is built from live enterprise deployments, shaped by real-world constraints like scale, uptime, compliance, and operational accountability.
          </p>
        </div>
        <ScrollRevealStagger direction="up" staggerDelay={0.12} className="mt-12 grid gap-6 sm:gap-7 md:grid-cols-3 lg:gap-8">
          {reasons.map((reason) => (
            <WhyCard key={reason.title} reason={reason} />
          ))}
        </ScrollRevealStagger>
      </div>
    </section>
  );
}


