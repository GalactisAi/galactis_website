"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSalesModal from "@/components/ContactSalesModal";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Users, Rocket, Mail, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

const funnelSteps = [
  {
    title: "Share your objectives",
    description: "Outline ITAM, network, or AI agent programs plus KPIs. We map these to our product blueprints.",
    timeline: "Day 0",
    icon: Users,
  },
  {
    title: "Co-design your pilot",
    description: "Solution architects align integrations, compliance scope, and success metrics within 5 business days.",
    timeline: "Day 1-5",
    icon: Rocket,
  },
  {
    title: "Launch & measure",
    description: "Run an eight-week pilot with shared dashboards, exec check-ins, and ROI tracking baked in.",
    timeline: "Week 2-10",
    icon: CheckCircle2,
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50/20 to-white dark:from-black dark:via-purple-950/10 dark:to-black">
      <Navbar />
      
      {/* Hero Section with Enhanced Animations */}
      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-purple-200/60 bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900 p-8 text-white shadow-2xl dark:border-purple-800/60 lg:p-12"
        >
          {/* Animated background blobs */}
          <div className="absolute inset-0 opacity-30">
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                x: [0, 50, 0],
                y: [0, -30, 0],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-purple-500 blur-3xl"
            />
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                x: [0, -30, 0],
                y: [0, 50, 0],
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-teal-500 blur-3xl"
            />
          </div>

          <div className="relative grid gap-8 lg:grid-cols-[1.2fr,0.8fr]">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <motion.p 
                className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Sales engagement
              </motion.p>
              
              <motion.h1 
                className="text-4xl font-bold leading-tight lg:text-5xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Design a Galactis pilot aligned to your{" "}
                <span className="bg-gradient-to-r from-purple-400 via-teal-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
                  KPIs
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-base leading-relaxed text-white/80 lg:text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Headquartered in Egattur, Kancheepuram, Tamil Nadu, we use the same intake funnel described on our solutions pages: capture objectives, map success criteria, and launch an eight-week proof of value that mirrors production controls.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-3 text-xs font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {[
                  { icon: Clock, text: "Response within 24 hours" },
                  { icon: Users, text: "Executive + architect pairing" },
                  { icon: Rocket, text: "Pilot runbooks included" }
                ].map((badge, index) => (
                  <motion.span
                    key={badge.text}
                    className="flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-4 py-2 backdrop-blur"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                  >
                    <badge.icon className="h-3 w-3" />
                    {badge.text}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            <motion.div 
              className="rounded-2xl bg-white/10 p-6 backdrop-blur-lg border border-white/20"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-400">Start here</p>
              <p className="mt-3 text-base text-white/90 font-medium">
                Submit the contact brief and we'll confirm a working session within one business day.
              </p>
              <div className="mt-6">
                <MagneticButton
                  onClick={() => {
                    // Trigger the contact modal
                    const button = document.querySelector('[data-contact-trigger][data-intent="sales"]') as HTMLButtonElement;
                    button?.click();
                  }}
                  className="w-full rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-2xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-300"
                  magneticStrength={0.2}
                >
                  Contact Sales Team <ArrowRight className="ml-2 inline-block h-5 w-5" />
                </MagneticButton>
              </div>
              <p className="mt-4 text-xs text-white/60 text-center">
                ✓ No credit card required • ✓ Free consultation
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Funnel Steps Section */}
        <section className="mt-16 grid gap-8 lg:grid-cols-[1.2fr,0.8fr]">
          <motion.div 
            className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-lg dark:border-zinc-800 dark:bg-zinc-950"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Optimized funnel in three moves</h2>
              <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
                This is the same motion we run in every Galactis pilot: objective intake, blueprinting, and value realization.
              </p>
            </motion.div>
            
            <div className="mt-8 space-y-5">
              {funnelSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  className="group relative rounded-2xl border border-zinc-200 bg-gradient-to-br from-white to-zinc-50 p-6 transition-all duration-300 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/10 dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-950 dark:hover:border-purple-700"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Step number indicator */}
                  <div className="absolute -left-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 text-sm font-bold text-white shadow-lg">
                    {index + 1}
                  </div>
                  
                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-500 to-teal-500 opacity-0 blur-xl"
                    whileHover={{ opacity: 0.2 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="relative flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                      <step.icon className="h-6 w-6" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="text-xs font-bold uppercase tracking-[0.3em] text-purple-600 dark:text-purple-400">
                        {step.timeline}
                      </div>
                      <h3 className="mt-2 text-lg font-bold text-zinc-900 dark:text-zinc-100">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          {/* Sidebar */}
          <div className="space-y-6">
            <motion.div 
              className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-lg dark:border-zinc-800 dark:bg-zinc-950"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Talk with the right team</h2>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                We route every request to industry specialists covering ITAM, network, and AI agent programs.
              </p>
              <div className="mt-6 space-y-4">
                <motion.div
                  className="flex items-start gap-4 rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900"
                  whileHover={{ scale: 1.02, borderColor: "rgba(168, 85, 247, 0.3)" }}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/30">
                    <Mail className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Email</p>
                    <a href="mailto:info@galactis.ai" className="mt-1 block text-sm font-medium text-zinc-900 hover:text-purple-600 dark:text-zinc-100 dark:hover:text-purple-400">
                      info@galactis.ai
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4 rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900"
                  whileHover={{ scale: 1.02, borderColor: "rgba(168, 85, 247, 0.3)" }}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100 dark:bg-teal-900/30">
                    <MapPin className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Office</p>
                    <p className="mt-1 text-sm font-medium text-zinc-900 dark:text-zinc-100">
                      Wing A, Greenwood, Rajiv Gandhi Salai, Egattur, Kancheepuram, Tamil Nadu - 603103
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              className="rounded-3xl border border-purple-200 bg-gradient-to-br from-purple-50 to-teal-50 p-6 dark:border-purple-900 dark:from-purple-950/30 dark:to-teal-950/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-lg font-bold text-purple-900 dark:text-purple-100">Need more context first?</h3>
              <p className="mt-2 text-sm text-purple-900/80 dark:text-purple-100/80">
                Review the financial services, telecom, and healthcare solution briefs before we meet.
              </p>
              <div className="mt-4 space-y-2">
                {[
                  { href: "/solutions/financial-services", label: "Financial Services" },
                  { href: "/solutions/telecommunications", label: "Telecommunications" },
                  { href: "/solutions/healthcare", label: "Healthcare" }
                ].map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <Link 
                      href={link.href} 
                      className="flex items-center gap-2 rounded-lg border border-purple-200 bg-white/50 px-4 py-3 text-sm font-semibold text-purple-700 transition-all hover:border-purple-400 hover:bg-white hover:shadow-lg dark:border-purple-800 dark:bg-purple-900/20 dark:text-purple-200 dark:hover:bg-purple-900/40"
                    >
                      <ArrowRight className="h-4 w-4" />
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      {/* Hidden trigger for ContactSalesModal */}
      <div className="hidden">
        <ContactSalesModal intent="sales" />
      </div>
      
      <Footer />
    </div>
  );
}

