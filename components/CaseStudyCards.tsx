"use client";

import Link from 'next/link';
import { motion, useSpring, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import ScrollReveal, { ScrollRevealStagger } from "./ScrollReveal";
import CompanyLogo from "./CompanyLogo";

type CaseStudy = {
  industry: string;
  customer: string;
  companyName: string;
  summary: string;
  outcomes: string[];
  link: string;
};

const caseStudies: CaseStudy[] = [
  {
    industry: "Financial Services",
    customer: "HDFC Bank · Chennai",
    companyName: "HDFC Bank",
    summary:
      "Unified ITAM + FinOps platform delivered regulator-ready license positions and automated compliance evidence across Chennai operations and regional branches.",
    outcomes: ["₹2.8 Cr audit risk avoided", "28% software waste removed", "Evidence packs delivered in 7 days"],
    link: "/resources/case-studies",
  },
  {
    industry: "Telecommunications",
    customer: "Airtel · Chennai",
    companyName: "Airtel",
    summary:
      "AI-driven network observability correlated NetOps, customer experience, and AI runbooks to protect SLAs across Tamil Nadu fiber footprint and 5G infrastructure.",
    outcomes: ["42% fewer P1 incidents", "99.95% uptime sustained", "Customer comms automated in minutes"],
    link: "/resources/case-studies",
  },
  {
    industry: "Healthcare",
    customer: "Apollo Hospitals · Chennai",
    companyName: "Apollo Hospitals",
    summary:
      "Clinical asset governance and HIPAA-ready workflows unified biomedical, IT, and research environments across Chennai facilities with automated validation.",
    outcomes: ["0 PHI findings post-launch", "75% faster compliance documentation", "40% faster clinic onboarding"],
    link: "/resources/case-studies",
  },
  {
    industry: "Manufacturing & Logistics",
    customer: "TVS Motors · Chennai",
    companyName: "TVS Motors",
    summary:
      "Real-time asset telemetry plus AI agents for supply chain documentation improved OTIF performance and automated vendor workflows across manufacturing plants.",
    outcomes: ["+19% OTIF", "45% faster vendor reconciliation", "120K support calls deflected by agents"],
    link: "/resources/case-studies",
  },
];

function CaseStudyCard({ study }: { study: CaseStudy }) {
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
      className="group rounded-3xl border border-gray-200 bg-white p-5 shadow-lg transition-all duration-300 overflow-hidden dark:border-gray-800 dark:bg-gray-950 sm:p-6 lg:p-8"
      style={{ scale, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ 
        scale: 1.02,
        y: -8,
        rotateY: 2,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
    >
      {/* Animated background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-teal-500/0 transition-all duration-300 group-hover:from-purple-500/5 group-hover:to-teal-500/5" />
      <div className="relative flex items-center gap-4 text-gray-900 dark:text-gray-100">
        <CompanyLogo company={study.companyName} size={56} className="shrink-0" />
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-purple-600">{study.industry}</p>
          <h3 className="text-xl font-semibold">{study.customer}</h3>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{study.summary}</p>
      <ul className="mt-6 space-y-2 text-sm text-gray-900 dark:text-gray-200 relative">
        {study.outcomes.map((outcome, i) => (
          <motion.li 
            key={outcome} 
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <motion.span 
              className="h-1.5 w-1.5 rounded-full bg-emerald-500"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
            />
            <span>{outcome}</span>
          </motion.li>
        ))}
      </ul>
      <Link
        href={study.link}
        className="mt-6 inline-flex items-center text-sm font-semibold text-purple-600 transition hover:text-purple-700 dark:text-purple-400"
      >
        Explore the full story →
      </Link>
    </motion.div>
  );
}

export default function CaseStudyCards() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section 
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-zinc-50 py-20 dark:from-black dark:to-zinc-900/30"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="fade" delay={0.1}>
          <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-white lg:text-4xl">
            Outcomes sourced from live Galactis programs
          </h2>
          <p className="mt-4 text-center text-base text-gray-600 dark:text-gray-400">
            Pulling directly from the case studies and solution briefs on galactis.ai/resources.
          </p>
        </ScrollReveal>

        <ScrollRevealStagger direction="up" staggerDelay={0.15} className="mt-12 grid gap-6 sm:gap-8 md:grid-cols-2">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.customer} study={study} />
          ))}
        </ScrollRevealStagger>
      </div>
    </section>
  );
}



