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
  /** When set, used as H1 instead of title */
  heroHeading?: string;
  /** When set, used as hero paragraph instead of subtitle */
  heroDescription?: string;
  /** When set, used as primary CTA button label */
  ctaLabel?: string;
  /** When set, renders a Business Outcomes section with title + description tiles */
  outcomes?: { title: string; description: string }[];
  /** Optional section: IT Challenges (tile grid, same as outcomes) */
  challengesSection?: {
    sectionTitle: string;
    sectionDescription: string;
    tiles: { title: string; description: string }[];
  };
  /** Optional section: two-card comparison (Traditional vs Galactis) */
  comparisonSection?: {
    sectionTitle?: string;
    left: { title: string; subtitle: string; bullets: string[] };
    right: { title: string; subtitle: string; bullets: string[] };
  };
  /** Optional section: Core Capabilities (tile grid) */
  capabilitiesSection?: {
    sectionTitle: string;
    sectionDescription: string;
    tiles: { title: string; description: string }[];
  };
  /** Optional grid class for capabilities section (e.g. grid-cols-1 md:grid-cols-2 lg:grid-cols-3) */
  capabilitiesGridClass?: string;
  /** Optional section: Compliance and Regulatory Alignment (badges) */
  complianceRegulatorySection?: {
    sectionTitle: string;
    sectionDescription: string;
    items: string[];
  };
  /** Optional section: Integration With Financial IT Ecosystems (tile grid) */
  integrationsSection?: {
    sectionTitle: string;
    sectionDescription: string;
    tiles: { title: string; description: string }[];
  };
  /** Optional section: Integrations ecosystem by category (heading + badge list per category) */
  integrationsEcosystemSection?: {
    sectionTitle: string;
    sectionDescription: string;
    categories: { categoryName: string; items: string[] }[];
  };
  /** Optional section: Why [Industry] Choose Galactis (value prop tile grid) */
  valuePropositionSection?: {
    sectionTitle: string;
    tiles: { title: string; description: string }[];
  };
  /** Optional grid class for value proposition section (e.g. md:grid-cols-2 lg:grid-cols-4) */
  valuePropositionGridClass?: string;
  /** Optional override for final CTA section title, description, and button label */
  ctaSectionOverride?: {
    title: string;
    description: string;
    ctaLabel: string;
  };
  /** When true, Business Outcomes sidebar uses smaller value text and relaxed line-height */
  compactBusinessOutcomes?: boolean;
  /** Optional override for Compliance card title and description (same design, new content) */
  complianceSectionOverride?: { title: string; description: string };
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
  heroHeading,
  heroDescription,
  ctaLabel,
  outcomes,
  challengesSection,
  comparisonSection,
  capabilitiesSection,
  capabilitiesGridClass,
  complianceRegulatorySection,
  integrationsSection,
  integrationsEcosystemSection,
  valuePropositionSection,
  valuePropositionGridClass,
  ctaSectionOverride,
  compactBusinessOutcomes,
  complianceSectionOverride,
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
                {heroHeading ?? title}
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-6 text-lg text-white/90"
              >
                {heroDescription ?? subtitle}
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
                    {ctaLabel ?? "Book Industry Blueprint"}
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
              <dl className={compactBusinessOutcomes ? "mt-5 space-y-5" : "mt-6 space-y-6"}>
                {metrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <dt className="text-xs uppercase tracking-wide text-white/60">{metric.label}</dt>
                    <dd className={compactBusinessOutcomes ? "mt-1.5 text-sm font-medium leading-relaxed text-white/95 md:text-base" : "mt-2 text-2xl font-semibold text-white"}>{metric.value}</dd>
                  </motion.div>
                ))}
              </dl>
            </motion.div>
          </motion.div>
        </main>
        </section>

      {/* Pain Points & Solutions OR Traditional vs Galactis (when comparisonSection provided) */}
      {comparisonSection ? (
        <section className="bg-gradient-to-b from-zinc-50 to-white py-20 dark:from-zinc-950 dark:to-black">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            {comparisonSection.sectionTitle && (
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12 text-center text-2xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-3xl"
              >
                {comparisonSection.sectionTitle}
              </motion.h2>
            )}
            <div className="grid gap-8 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex h-full flex-col rounded-3xl border border-rose-500/40 bg-zinc-900/95 bg-gradient-to-br from-red-950/50 via-zinc-900 to-red-950/30 p-8 shadow-[0_2px_8px_rgba(0,0,0,0.25)] transition-all duration-200 hover:border-rose-500/60 dark:border-rose-500/30 dark:bg-zinc-900/95 dark:from-red-950/40 dark:via-zinc-900 dark:to-red-950/25 dark:hover:border-rose-500/50"
              >
                <div className="flex items-center justify-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-rose-500/25 dark:bg-rose-500/20">
                    <AlertCircle className="h-6 w-6 text-rose-400" />
                  </div>
                  <h2 className="text-center text-2xl font-bold text-zinc-100">{comparisonSection.left.title}</h2>
                </div>
                {comparisonSection.left.subtitle ? (
                  <p className="mt-3 text-left text-sm leading-relaxed text-zinc-300">{comparisonSection.left.subtitle}</p>
                ) : null}
                <ul className={comparisonSection.left.subtitle ? "mt-4 flex-1 space-y-2" : "mt-3 flex-1 space-y-2"}>
                  {comparisonSection.left.bullets.map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 text-left text-sm text-zinc-300"
                    >
                      <span className="h-2 w-2 shrink-0 rounded-full bg-rose-400" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex h-full flex-col rounded-3xl border border-emerald-500/30 bg-zinc-900/95 bg-gradient-to-br from-emerald-950/40 via-zinc-900 to-emerald-950/25 p-8 shadow-lg shadow-[0_0_28px_rgba(16,185,129,0.12)] transition-all duration-200 hover:border-emerald-500/50 hover:shadow-[0_0_36px_rgba(16,185,129,0.18)] dark:border-emerald-500/25 dark:bg-zinc-900/95 dark:from-emerald-950/35 dark:via-zinc-900 dark:to-emerald-950/20 dark:shadow-[0_0_28px_rgba(16,185,129,0.15)] dark:hover:border-emerald-500/40 dark:hover:shadow-[0_0_40px_rgba(16,185,129,0.2)]"
              >
                <div className="flex items-center justify-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/25 dark:bg-emerald-500/20">
                    <CheckCircle2 className="h-6 w-6 text-emerald-400" />
                  </div>
                  <h2 className="text-center text-2xl font-bold text-zinc-100">{comparisonSection.right.title}</h2>
                </div>
                {comparisonSection.right.subtitle ? (
                  <p className="mt-3 text-left text-sm leading-relaxed text-zinc-300">{comparisonSection.right.subtitle}</p>
                ) : null}
                <ul className={comparisonSection.right.subtitle ? "mt-4 flex-1 space-y-2" : "mt-3 flex-1 space-y-2"}>
                  {comparisonSection.right.bullets.map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 text-left text-sm text-zinc-300"
                    >
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      ) : (
        <section className="bg-gradient-to-b from-zinc-50 to-white py-20 dark:from-zinc-950 dark:to-black">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
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
                  <h2 className="text-center text-2xl font-bold text-zinc-900 dark:text-zinc-100">Industry Pain Points</h2>
                </div>
                <p className="mt-3 text-left text-sm text-zinc-600 dark:text-zinc-400">
                  Challenges identified from stakeholder interviews and operational assessments with {title.toLowerCase()} teams
                </p>
                <ul className="mt-4 space-y-2">
                  {pains.map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 text-left text-sm text-zinc-700 dark:text-zinc-300"
                    >
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-rose-500" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
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
                  <h2 className="text-center text-2xl font-bold text-zinc-900 dark:text-zinc-100">Galactis Solution</h2>
                </div>
                <p className="mt-3 text-left text-sm text-zinc-600 dark:text-zinc-400">
                  Each control maps to capabilities in the Galactis platform, accelerators, and partner playbooks
                </p>
                <ul className="mt-4 space-y-2">
                  {solutions.map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 text-left text-sm text-zinc-700 dark:text-zinc-300"
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
      )}

      {/* Business Outcomes (optional) */}
      {outcomes && outcomes.length > 0 && (
        <section className="bg-white py-20 dark:bg-black">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-2xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-3xl"
            >
              Business Outcomes
            </motion.h2>
            <div className="mt-12 flex justify-center">
              <div className="grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {outcomes.map((outcome, index) => {
                  const total = outcomes.length;
                  const remainder = total % 3;
                  const isCenteredPairStart = remainder === 2 && index === total - 2;
                  const isLastCard = remainder === 2 && index === total - 1;

                  if (isCenteredPairStart) {
                    return (
                      <div
                        key="center-row"
                        className="col-span-1 flex justify-center gap-6 sm:col-span-2 lg:col-span-3"
                      >
                        <div className="flex w-full max-w-[calc(66.6667%+0.75rem)] justify-center gap-6">
                          <motion.div
                            key={outcomes[total - 2].title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (total - 2) * 0.1 }}
                            className="flex h-full w-full flex-col items-start rounded-2xl border border-zinc-200 bg-white p-6 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:border-purple-200/60 hover:bg-purple-50/10 hover:shadow-[0_8px_30px_rgba(147,51,234,0.1)] dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-purple-800/50 dark:hover:bg-purple-950/15 dark:hover:shadow-[0_8px_30px_rgba(88,28,135,0.12)]"
                          >
                            <h3 className="mb-2 text-center text-xl font-bold text-zinc-900 dark:text-zinc-100">
                              {outcomes[total - 2].title}
                            </h3>
                            <p className="mt-3 text-left text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                              {outcomes[total - 2].description}
                            </p>
                          </motion.div>
                          <motion.div
                            key={outcomes[total - 1].title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (total - 1) * 0.1 }}
                            className="flex h-full w-full flex-col items-start rounded-2xl border border-zinc-200 bg-white p-6 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:border-purple-200/60 hover:bg-purple-50/10 hover:shadow-[0_8px_30px_rgba(147,51,234,0.1)] dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-purple-800/50 dark:hover:bg-purple-950/15 dark:hover:shadow-[0_8px_30px_rgba(88,28,135,0.12)]"
                          >
                            <h3 className="mb-2 text-center text-xl font-bold text-zinc-900 dark:text-zinc-100">
                              {outcomes[total - 1].title}
                            </h3>
                            <p className="mt-3 text-left text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                              {outcomes[total - 1].description}
                            </p>
                          </motion.div>
                        </div>
                      </div>
                    );
                  }
                  if (isLastCard) return null;

                  return (
                    <motion.div
                      key={outcome.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex h-full flex-col items-start rounded-2xl border border-zinc-200 bg-white p-6 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:border-purple-200/60 hover:bg-purple-50/10 hover:shadow-[0_8px_30px_rgba(147,51,234,0.1)] dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-purple-800/50 dark:hover:bg-purple-950/15 dark:hover:shadow-[0_8px_30px_rgba(88,28,135,0.12)]"
                    >
                      <h3 className="mb-2 text-center text-xl font-bold text-zinc-900 dark:text-zinc-100">
                        {outcome.title}
                      </h3>
                      <p className="mt-3 text-left text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                        {outcome.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Section 3: IT Challenges (optional) — 4 in a row or 2×2, purple glow */}
      {challengesSection && challengesSection.tiles.length > 0 && (
        <section className="bg-zinc-50/40 py-20 dark:bg-zinc-950/40">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-2xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-3xl"
            >
              {challengesSection.sectionTitle}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto mt-4 max-w-3xl text-center text-sm text-zinc-600 dark:text-zinc-400"
            >
              {challengesSection.sectionDescription}
            </motion.p>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {challengesSection.tiles.map((tile, index) => (
                <motion.div
                  key={tile.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex flex-col items-start rounded-3xl border border-zinc-200 border-purple-100/50 bg-white p-8 shadow-lg shadow-[0_8px_30px_rgba(147,51,234,0.06)] transition-all duration-200 hover:border-purple-200/70 hover:bg-purple-50/10 hover:shadow-[0_8px_30px_rgba(147,51,234,0.12)] dark:border-zinc-800 dark:border-purple-900/20 dark:bg-zinc-900 dark:shadow-[0_8px_30px_rgba(88,28,135,0.08)] dark:hover:border-purple-800/50 dark:hover:bg-purple-950/15 dark:hover:shadow-[0_8px_30px_rgba(88,28,135,0.15)]"
                >
                  <h3 className="mb-2 text-center text-xl font-bold text-zinc-900 dark:text-zinc-100">{tile.title}</h3>
                  <p className="mt-3 text-left text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{tile.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Section 5: Core Capabilities (optional) — 4 in a row or 2×2, purple glow */}
      {capabilitiesSection && capabilitiesSection.tiles.length > 0 && (
        <section className="bg-gradient-to-b from-zinc-50 to-white py-20 dark:from-zinc-950 dark:to-black">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-2xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-3xl"
            >
              {capabilitiesSection.sectionTitle}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto mt-4 max-w-3xl text-center text-sm text-zinc-600 dark:text-zinc-400"
            >
              {capabilitiesSection.sectionDescription}
            </motion.p>
            {capabilitiesSection.tiles.length === 5 ? (
              <div className="mt-12 flex flex-col items-center gap-8">
                <div className={`grid w-full gap-8 ${capabilitiesGridClass ?? "sm:grid-cols-2 lg:grid-cols-3"}`}>
                  {capabilitiesSection.tiles.slice(0, 3).map((tile, index) => (
                    <motion.div
                      key={tile.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      className="flex flex-col items-start rounded-3xl border border-zinc-200 border-purple-100/50 bg-white p-8 shadow-lg shadow-[0_8px_30px_rgba(147,51,234,0.06)] transition-all duration-200 hover:border-purple-200/70 hover:bg-purple-50/10 hover:shadow-[0_8px_30px_rgba(147,51,234,0.12)] dark:border-zinc-800 dark:border-purple-900/20 dark:bg-zinc-900 dark:shadow-[0_8px_30px_rgba(88,28,135,0.08)] dark:hover:border-purple-800/50 dark:hover:bg-purple-950/15 dark:hover:shadow-[0_8px_30px_rgba(88,28,135,0.15)]"
                    >
                      <h3 className="mb-2 text-center text-xl font-bold text-zinc-900 dark:text-zinc-100">{tile.title}</h3>
                      <p className="mt-3 text-left text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{tile.description}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="flex w-full justify-center">
                  <div className="grid w-full max-w-[calc(66.6667%+0.75rem)] grid-cols-1 gap-8 sm:grid-cols-2">
                    {capabilitiesSection.tiles.slice(3, 5).map((tile, index) => (
                      <motion.div
                        key={tile.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (3 + index) * 0.08 }}
                        className="flex flex-col items-start rounded-3xl border border-zinc-200 border-purple-100/50 bg-white p-8 shadow-lg shadow-[0_8px_30px_rgba(147,51,234,0.06)] transition-all duration-200 hover:border-purple-200/70 hover:bg-purple-50/10 hover:shadow-[0_8px_30px_rgba(147,51,234,0.12)] dark:border-zinc-800 dark:border-purple-900/20 dark:bg-zinc-900 dark:shadow-[0_8px_30px_rgba(88,28,135,0.08)] dark:hover:border-purple-800/50 dark:hover:bg-purple-950/15 dark:hover:shadow-[0_8px_30px_rgba(88,28,135,0.15)]"
                      >
                        <h3 className="mb-2 text-center text-xl font-bold text-zinc-900 dark:text-zinc-100">{tile.title}</h3>
                        <p className="mt-3 text-left text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{tile.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className={`mt-12 grid gap-8 ${capabilitiesGridClass ?? "sm:grid-cols-2 lg:grid-cols-4"}`}>
                {capabilitiesSection.tiles.map((tile, index) => (
                  <motion.div
                    key={tile.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="flex flex-col items-start rounded-3xl border border-zinc-200 border-purple-100/50 bg-white p-8 shadow-lg shadow-[0_8px_30px_rgba(147,51,234,0.06)] transition-all duration-200 hover:border-purple-200/70 hover:bg-purple-50/10 hover:shadow-[0_8px_30px_rgba(147,51,234,0.12)] dark:border-zinc-800 dark:border-purple-900/20 dark:bg-zinc-900 dark:shadow-[0_8px_30px_rgba(88,28,135,0.08)] dark:hover:border-purple-800/50 dark:hover:bg-purple-950/15 dark:hover:shadow-[0_8px_30px_rgba(88,28,135,0.15)]"
                  >
                    <h3 className="mb-2 text-center text-xl font-bold text-zinc-900 dark:text-zinc-100">{tile.title}</h3>
                    <p className="mt-3 text-left text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{tile.description}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Compliance & Case Study — placed after Core Capabilities */}
      <section className="bg-white py-20 dark:bg-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
            {/* Compliance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-zinc-200 border-purple-100/40 bg-white p-8 shadow-lg transition-all duration-200 hover:border-purple-200/70 hover:bg-purple-50/10 hover:shadow-[0_8px_30px_rgba(147,51,234,0.1)] dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-purple-800/50 dark:hover:bg-purple-950/15 dark:hover:shadow-[0_8px_30px_rgba(88,28,135,0.12)]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/30">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-center text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                  {complianceSectionOverride?.title ?? "Compliance Alignment"}
                </h2>
              </div>
              <p className="mt-3 text-left text-sm text-zinc-600 dark:text-zinc-400">
                {complianceSectionOverride?.description ?? "Controls synthesized from compliance packs available in Resources → Whitepapers"}
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
              className="rounded-3xl border border-purple-200 border-purple-100/40 bg-gradient-to-br from-purple-50 to-indigo-50 p-8 shadow-lg transition-all duration-200 hover:border-purple-300/70 hover:bg-purple-50/50 hover:shadow-[0_8px_30px_rgba(147,51,234,0.12)] dark:border-purple-800 dark:from-purple-950/30 dark:to-indigo-950/30 dark:hover:border-purple-700/50 dark:hover:shadow-[0_8px_30px_rgba(88,28,135,0.15)]"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-purple-600" />
                    <h2 className="text-center text-xl font-bold text-zinc-900 dark:text-zinc-100">Case Study</h2>
                  </div>
                  <p className="mt-3 text-left text-sm text-zinc-600 dark:text-zinc-400">Production deployment results</p>
                </div>
                <CompanyLogo company={caseStudy.client} size={48} />
              </div>
              <div className="mt-4 space-y-2 text-left text-sm text-zinc-700 dark:text-zinc-300">
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
                  <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Result</p>
                  <p className="mt-1 font-medium text-zinc-900 dark:text-zinc-100">{caseStudy.result}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 6: Compliance and Regulatory Alignment (optional) */}
      {complianceRegulatorySection && complianceRegulatorySection.items.length > 0 && (
        <section className="bg-white py-20 dark:bg-black">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-2xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-3xl"
            >
              {complianceRegulatorySection.sectionTitle}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto mt-4 max-w-3xl text-center text-sm text-zinc-600 dark:text-zinc-400"
            >
              {complianceRegulatorySection.sectionDescription}
            </motion.p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {complianceRegulatorySection.items.map((item, index) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-blue-700 dark:border-blue-800 dark:bg-blue-950/30 dark:text-blue-300"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Section 7: Integration With Financial IT Ecosystems (optional) — 4 in a row or 2×2, purple glow */}
      {integrationsSection && integrationsSection.tiles.length > 0 && (
        <section className="bg-white py-20 dark:bg-black">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-2xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-3xl"
            >
              {integrationsSection.sectionTitle}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto mt-4 max-w-3xl text-center text-sm text-zinc-600 dark:text-zinc-400"
            >
              {integrationsSection.sectionDescription}
            </motion.p>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {integrationsSection.tiles.map((tile, index) => (
                <motion.div
                  key={tile.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex flex-col items-start rounded-3xl border border-zinc-200 border-purple-100/50 bg-white p-8 shadow-lg shadow-[0_8px_30px_rgba(147,51,234,0.06)] transition-all duration-200 hover:border-purple-200/70 hover:bg-purple-50/10 hover:shadow-[0_8px_30px_rgba(147,51,234,0.12)] dark:border-zinc-800 dark:border-purple-900/20 dark:bg-zinc-900 dark:shadow-[0_8px_30px_rgba(88,28,135,0.08)] dark:hover:border-purple-800/50 dark:hover:bg-purple-950/15 dark:hover:shadow-[0_8px_30px_rgba(88,28,135,0.15)]"
                >
                  <h3 className="mb-2 text-center text-xl font-bold text-zinc-900 dark:text-zinc-100">{tile.title}</h3>
                  <p className="mt-3 text-left text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{tile.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Section 8: Integrates With Your Enterprise Technology Ecosystem (optional) — purple container, centered */}
      {integrationsEcosystemSection && integrationsEcosystemSection.categories.length > 0 && (
        <section className="bg-white py-20 dark:bg-black">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-purple-100/50 bg-purple-50/30 px-8 py-12 shadow-lg shadow-[0_8px_30px_rgba(147,51,234,0.06)] transition-all duration-200 hover:border-purple-200/60 hover:shadow-[0_8px_30px_rgba(147,51,234,0.1)] dark:border-purple-900/30 dark:bg-purple-950/20 dark:shadow-[0_8px_30px_rgba(88,28,135,0.08)] dark:hover:border-purple-800/50 dark:hover:shadow-[0_8px_30px_rgba(88,28,135,0.12)]">
              <div className="text-center">
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-3xl"
                >
                  {integrationsEcosystemSection.sectionTitle}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mx-auto mt-4 max-w-3xl text-sm text-zinc-600 dark:text-zinc-400"
                >
                  {integrationsEcosystemSection.sectionDescription}
                </motion.p>
              </div>
              <div className="mt-12 flex flex-col items-center gap-10">
                {integrationsEcosystemSection.categories.map((category, catIndex) => (
                  <motion.div
                    key={category.categoryName}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.05 }}
                    className="w-full max-w-3xl text-center"
                  >
                    <h3 className="mb-4 text-center text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                      {category.categoryName}
                    </h3>
                    <div className="flex flex-wrap justify-center gap-2">
                      {category.items.map((item, i) => (
                        <motion.span
                          key={item}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.03 }}
                          whileHover={{ scale: 1.05 }}
                          className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
                        >
                          {item}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Section 9: Why Financial Institutions Choose Galactis (optional) — 3×2 grid, purple glow */}
      {valuePropositionSection && valuePropositionSection.tiles.length > 0 && (
        <section className="bg-gradient-to-b from-zinc-50 to-white py-20 dark:from-zinc-950 dark:to-black">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-2xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-3xl"
            >
              {valuePropositionSection.sectionTitle}
            </motion.h2>
            {valuePropositionSection.tiles.length === 5 ? (
              <div className="mt-12 flex flex-col items-center gap-8">
                <div className={`grid w-full gap-8 ${valuePropositionGridClass ?? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"}`}>
                  {valuePropositionSection.tiles.slice(0, 3).map((tile, index) => (
                    <motion.div
                      key={tile.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      className="flex flex-col items-start rounded-3xl border border-zinc-200 border-purple-100/50 bg-white p-8 shadow-lg shadow-[0_8px_30px_rgba(147,51,234,0.06)] transition-all duration-200 hover:border-purple-200/70 hover:bg-purple-50/10 hover:shadow-[0_8px_30px_rgba(147,51,234,0.12)] dark:border-zinc-800 dark:border-purple-900/20 dark:bg-zinc-900 dark:shadow-[0_8px_30px_rgba(88,28,135,0.08)] dark:hover:border-purple-800/50 dark:hover:bg-purple-950/15 dark:hover:shadow-[0_8px_30px_rgba(88,28,135,0.15)]"
                    >
                      <h3 className="mb-2 text-center text-xl font-bold text-zinc-900 dark:text-zinc-100">{tile.title}</h3>
                      <p className="mt-3 text-left text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{tile.description}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="flex w-full justify-center">
                  <div className="grid w-full max-w-[calc(66.6667%+0.75rem)] grid-cols-1 gap-8 sm:grid-cols-2">
                    {valuePropositionSection.tiles.slice(3, 5).map((tile, index) => (
                      <motion.div
                        key={tile.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (3 + index) * 0.08 }}
                        className="flex flex-col items-start rounded-3xl border border-zinc-200 border-purple-100/50 bg-white p-8 shadow-lg shadow-[0_8px_30px_rgba(147,51,234,0.06)] transition-all duration-200 hover:border-purple-200/70 hover:bg-purple-50/10 hover:shadow-[0_8px_30px_rgba(147,51,234,0.12)] dark:border-zinc-800 dark:border-purple-900/20 dark:bg-zinc-900 dark:shadow-[0_8px_30px_rgba(88,28,135,0.08)] dark:hover:border-purple-800/50 dark:hover:bg-purple-950/15 dark:hover:shadow-[0_8px_30px_rgba(88,28,135,0.15)]"
                      >
                        <h3 className="mb-2 text-center text-xl font-bold text-zinc-900 dark:text-zinc-100">{tile.title}</h3>
                        <p className="mt-3 text-left text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{tile.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className={`mt-12 grid gap-8 ${valuePropositionGridClass ?? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"}`}>
                {valuePropositionSection.tiles.map((tile, index) => (
                  <motion.div
                    key={tile.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="flex flex-col items-start rounded-3xl border border-zinc-200 border-purple-100/50 bg-white p-8 shadow-lg shadow-[0_8px_30px_rgba(147,51,234,0.06)] transition-all duration-200 hover:border-purple-200/70 hover:bg-purple-50/10 hover:shadow-[0_8px_30px_rgba(147,51,234,0.12)] dark:border-zinc-800 dark:border-purple-900/20 dark:bg-zinc-900 dark:shadow-[0_8px_30px_rgba(88,28,135,0.08)] dark:hover:border-purple-800/50 dark:hover:bg-purple-950/15 dark:hover:shadow-[0_8px_30px_rgba(88,28,135,0.15)]"
                  >
                    <h3 className="mb-2 text-center text-xl font-bold text-zinc-900 dark:text-zinc-100">{tile.title}</h3>
                    <p className="mt-3 text-left text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{tile.description}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

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
                <h2 className="text-3xl font-bold text-purple-900 dark:text-purple-100">
                  {ctaSectionOverride?.title ?? "Partner With Galactis"}
                </h2>
                <p className="mt-4 text-lg text-purple-900/80 dark:text-purple-100/80">
                  {ctaSectionOverride?.description ?? "Book an industry blueprint session to walkthrough controls, integrations, and KPIs tailored to your regulatory, operational, and financial objectives"}
              </p>
                <div className="mt-6">
                  <HubSpotContactModal 
                    triggerText={ctaSectionOverride?.ctaLabel ?? "Contact Sales"}
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
