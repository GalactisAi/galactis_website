"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is Galactis?",
    answer: "Galactis is an enterprise operations platform that brings together IT assets, network operations, and AI agents into a single governed system. It helps organizations monitor, decide, and act on operational issues with built-in controls for compliance, security, and scale.",
  },
  {
    question: "What does Galactis replace or complement?",
    answer: "Galactis does not replace core systems like ITSM, ERP, or network tools. Instead, it connects and orchestrates them, adding intelligence, automation, and governance across existing tools and workflows.",
  },
  {
    question: 'What does "AI-led operations" mean in Galactis?',
    answer: "In Galactis, AI is used to analyze signals, predict impact, and recommend or execute actions, always within defined guardrails. Human approvals, audit trails, and policy controls are built into every workflow.",
  },
  {
    question: "How does Galactis handle compliance and regulation?",
    answer: "Galactis is designed for regulated environments. It includes policy enforcement, audit trails, data residency controls, and human-in-the-loop approvals, aligned with frameworks like SOC 2, ISO 27001, HIPAA, PCI-DSS, and more.",
  },
  {
    question: "How long does it take to see value?",
    answer: "Most customers start with a focused pilot aligned to a specific operational goal. These pilots are typically scoped to deliver measurable outcomes within weeks, not months.",
  },
  {
    question: "Does Galactis require ripping out existing systems?",
    answer: "No. Galactis is designed to work within your existing environment, integrating with current tools, data sources, and workflows.",
  },
  {
    question: "Is Galactis just for large enterprises?",
    answer: "Galactis is built for complex, multi-system environments, especially organizations operating at scale or under regulatory pressure. The platform is modular, allowing teams to start small and expand over time.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-gradient-to-b from-zinc-50 via-white to-white py-20 dark:from-zinc-900 dark:via-zinc-900 dark:to-black overflow-hidden">
      {/* Decorative gradient blurs */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute -right-20 top-20 h-80 w-80 rounded-full bg-purple-400 blur-3xl" />
        <div className="absolute -left-20 bottom-20 h-64 w-64 rounded-full bg-emerald-400 blur-3xl" />
      </div>
      
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-purple-600 mb-3">
            Support
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            <span className="bg-gradient-to-r from-purple-600 via-teal-500 to-purple-600 bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
              Frequently Asked Questions
            </span>
          </h2>
        </div>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="group border border-zinc-200 rounded-xl overflow-hidden bg-white shadow-sm transition-all duration-300 hover:border-purple-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-purple-700"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-purple-50/50 hover:to-transparent dark:hover:from-purple-950/20 transition-all duration-300"
              >
                <span className="font-semibold text-zinc-900 dark:text-white pr-4 text-lg">
                  {item.question}
                </span>
                <ChevronDown
                  className={`flex-shrink-0 w-5 h-5 text-purple-600 dark:text-purple-400 transition-all duration-300 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 border-t border-zinc-100 dark:border-zinc-800 bg-gradient-to-b from-white to-zinc-50/50 dark:from-zinc-950 dark:to-zinc-900/50">
                  <p className="pt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
