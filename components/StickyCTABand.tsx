"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ctas = [
  { label: "Get custom ROI report", href: "/contact?source=roi" },
  { label: "Book design session", href: "/contact?source=design" },
  { label: "Explore careers", href: "/careers" },
];

export default function StickyCTABand() {
  return (
    <div className="sticky bottom-4 z-40 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-4xl flex-wrap gap-3 rounded-3xl border border-purple-300/50 bg-white/90 p-4 text-sm shadow-2xl backdrop-blur dark:border-purple-700/50 dark:bg-black/80">
        {ctas.map((cta) => (
          <motion.div
            key={cta.label}
            whileHover={{ y: -2, scale: 1.02 }}
            className="flex-1 min-w-[180px]"
          >
            <Link
              href={cta.href}
              className="flex items-center justify-between gap-2 rounded-2xl border border-purple-200 px-4 py-2 font-semibold text-purple-700 transition hover:border-purple-500 hover:text-purple-900 dark:border-purple-700 dark:text-purple-200"
            >
              {cta.label}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
