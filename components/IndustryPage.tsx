"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle, Shield, TrendingUp, ArrowRight } from "lucide-react";
import CompanyLogo from "@/components/CompanyLogo";
import Link from "next/link";
import HubSpotContactModal from "@/components/HubSpotContactModal";

type IndustryPageProps = {
  title: string;
  subtitle: string;
  pains: string[];
  solutions: string[];
  compliance: string[];
  caseStudy: {
    client: string;
    challenge: string;
    solution: string;
    result: string;
  };
  metrics: { label: string; value: string }[];
  breadcrumbs?: { label: string; href?: string }[];
};

export default function IndustryPage({
  title,
  subtitle,
  pains,
  solutions,
  compliance,
  caseStudy,
  metrics,
  breadcrumbs,
}: IndustryPageProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900 py-20">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 45, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl"
          />
          <motion.div
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [45, 0, 45]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl"
          />
        </div>

        <main className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={
            breadcrumbs ?? [
              { label: "Home", href: "/" },
              { label: "Solutions" },
              { label: title },
            ]
          }
        />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-12 grid gap-8 lg:grid-cols-[1.2fr,0.8fr]"
          >
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-sm font-semibold uppercase tracking-[0.35em] text-white/70"
              >
                Industry Solution
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-4 text-5xl font-bold tracking-tight text-white lg:text-6xl"
              >
                {title}
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-6 text-lg text-white/90"
              >
                {subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8"
              >
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-purple-900 shadow-xl hover:shadow-2xl"
                  >
                    Book Industry Blueprint
                    <ArrowRight className="h-5 w-5" />
                  </motion.button>
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">Business Outcomes</p>
              <dl className="mt-6 space-y-6">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <dt className="text-xs uppercase tracking-wide text-white/60">{metric.label}</dt>
                    <dd className="mt-2 text-2xl font-semibold text-white">{metric.value}</dd>
                  </motion.div>
                ))}
              </dl>
            </motion.div>
          </motion.div>
        </main>
        </section>

      {/* Pain Points & Solutions */}
      <section className="bg-gradient-to-b from-zinc-50 to-white py-20 dark:from-zinc-950 dark:to-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Pain Points */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="rounded-3xl border border-rose-200 bg-gradient-to-br from-rose-50 to-white p-8 shadow-lg dark:border-rose-800 dark:from-rose-950/30 dark:to-zinc-900"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-100 dark:bg-rose-900/30">
                  <AlertCircle className="h-6 w-6 text-rose-600" />
                </div>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Industry Pain Points</h2>
              </div>
              <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                Challenges identified from stakeholder interviews and operational assessments with {title.toLowerCase()} teams
            </p>
              <ul className="mt-6 space-y-4">
                {pains.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300"
                  >
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-rose-500" />
                  <span>{item}</span>
                  </motion.li>
              ))}
            </ul>
            </motion.div>

            {/* Solutions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-8 shadow-lg dark:border-emerald-800 dark:from-emerald-950/30 dark:to-zinc-900"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-900/30">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                </div>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Galactis Solution</h2>
          </div>
              <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                Each control maps to capabilities in the Galactis platform, accelerators, and partner playbooks
            </p>
              <ul className="mt-6 space-y-4">
                {solutions.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                  <span>{item}</span>
                  </motion.li>
              ))}
            </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Compliance & Case Study */}
      <section className="bg-white py-20 dark:bg-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
            {/* Compliance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/30">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Compliance Alignment</h2>
              </div>
              <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                Controls synthesized from compliance packs available in Resources → Whitepapers
            </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {compliance.map((control, index) => (
                  <motion.span
                  key={control}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-blue-700 dark:border-blue-800 dark:bg-blue-950/30 dark:text-blue-300"
                >
                  {control}
                  </motion.span>
              ))}
            </div>
            </motion.div>

            {/* Case Study */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-purple-200 bg-gradient-to-br from-purple-50 to-indigo-50 p-8 shadow-lg dark:border-purple-800 dark:from-purple-950/30 dark:to-indigo-950/30"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-purple-600" />
                    <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Case Study</h2>
                  </div>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Production deployment results</p>
                </div>
                <CompanyLogo company={caseStudy.client} size={48} />
          </div>
              
              <div className="mt-6 space-y-4 text-sm text-zinc-700 dark:text-zinc-300">
                <div>
              <p className="font-semibold text-zinc-900 dark:text-zinc-100">{caseStudy.client}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Challenge</p>
                  <p className="mt-1">{caseStudy.challenge}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Solution</p>
                  <p className="mt-1">{caseStudy.solution}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Results</p>
                  <p className="mt-1 font-semibold text-purple-600">{caseStudy.result}</p>
                </div>
              </div>
            </motion.div>
            </div>
          </div>
        </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-b from-zinc-50 to-white py-20 dark:from-zinc-950 dark:to-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-purple-200 bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-50 p-12 shadow-xl dark:border-purple-800 dark:from-purple-950/30 dark:via-indigo-950/30 dark:to-purple-950/30"
          >
            <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
            <div>
                <h2 className="text-3xl font-bold text-purple-900 dark:text-purple-100">Partner With Galactis</h2>
                <p className="mt-4 text-lg text-purple-900/80 dark:text-purple-100/80">
                  Book an industry blueprint session to walkthrough controls, integrations, and KPIs tailored to your regulatory, operational, and financial objectives
              </p>
                <div className="mt-6">
                  <HubSpotContactModal 
                    triggerText="Contact Sales"
                    triggerClassName="flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:scale-105 transition-transform"
                  />
                </div>
            </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-purple-200 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-purple-800 dark:bg-white/5"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-900 dark:text-purple-100">
                  What You Receive
                </p>
                <ul className="mt-4 space-y-3 text-sm text-purple-900 dark:text-purple-100">
                  {[
                    "Full control matrix + RACI",
                    "ROI assumptions validated against peers",
                    "Integration sequencing with your systems",
                    "Pilot charter with 8-week success plan"
                  ].map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      {item}
                    </motion.li>
                  ))}
              </ul>
              </motion.div>
            </div>
          </motion.div>
          </div>
        </section>

      <Footer />
    </div>
  );
}
