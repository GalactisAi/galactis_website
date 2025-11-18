"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Users, Globe2, Podcast, Sparkles, Zap, Heart, Code, Coffee, Rocket, Target, Blocks } from "lucide-react";
import { useRef } from "react";

const leaders = [
  {
    name: "Madhujith",
    role: "Founder & CEO",
    focus: "Vision carrier",
    quote: "\"Operators deserve software that thinks like they do.\"",
    icon: Target,
    gradient: "from-purple-500 via-indigo-500 to-violet-500",
  },
  {
    name: "Aryan",
    role: "COO",
    focus: "Outcome obsession",
    quote: "\"Compliance, value, and speed can coexist when telemetry is shared.\"",
    icon: Zap,
    gradient: "from-indigo-500 via-blue-500 to-cyan-500",
  },
  {
    name: "Nikitha",
    role: "CTO",
    focus: "Platform builder",
    quote: "\"Sense-Decide-Act is our product map—and our culture.\"",
    icon: Blocks,
    gradient: "from-teal-500 via-emerald-500 to-green-500",
  },
];

const cultureStats = [
  { label: "Builder rotations", value: "38", description: "engineers embedded with customers" },
  { label: "Time zones", value: "9", description: "covered via follow-the-sun squads" },
  { label: "Programs shipped", value: "122", description: "since 2022" },
];

export default function LifeAtGalactis() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-gradient-to-b from-white via-purple-50/30 to-white py-20 dark:from-black dark:via-purple-950/20 dark:to-black">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y, opacity }}
          className="absolute left-[10%] top-[20%] h-64 w-64 rounded-full bg-purple-500/10 blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]), opacity }}
          className="absolute right-[15%] top-[40%] h-80 w-80 rounded-full bg-teal-500/10 blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]), opacity }}
          className="absolute left-[20%] bottom-[20%] h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header with animated graphic */}
        <div className="flex flex-col gap-6 text-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="mx-auto flex h-24 w-24 items-center justify-center"
          >
            {/* Animated team icon */}
            <div className="relative">
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-teal-500 blur-xl opacity-50"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 via-indigo-600 to-teal-600 shadow-2xl"
              >
                <Users className="h-10 w-10 text-white" strokeWidth={2.5} />
              </motion.div>
            </div>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xs font-semibold uppercase tracking-[0.35em] text-purple-600"
          >
            Leadership & culture
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl"
          >
            Operators at the table,{" "}
            <span className="bg-gradient-to-r from-purple-600 via-teal-500 to-purple-600 bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
              builders everywhere
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mx-auto max-w-2xl text-base text-zinc-600 dark:text-zinc-400"
          >
            Cards below mirror the company/leadership pages. Hover for the short bios we share during customer briefings.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.15, duration: 0.6, type: "spring" }}
              whileHover={{ y: -8, scale: 1.02, rotateY: 2 }}
              className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white/80 p-6 shadow-xl backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/80"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-indigo-500/0 to-purple-500/0 transition-all duration-500 group-hover:from-purple-500/10 group-hover:via-indigo-500/10 group-hover:to-purple-500/10" />
              
              {/* Glow effect on hover */}
              <motion.div
                className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-purple-500 to-teal-500 opacity-0 blur-xl"
                whileHover={{ opacity: 0.3 }}
                transition={{ duration: 0.3 }}
              />

              {/* Decorative floating icons */}
              <motion.div
                className="absolute right-4 top-4 opacity-10"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                {index === 0 && <Sparkles className="h-8 w-8 text-purple-600" />}
                {index === 1 && <Zap className="h-8 w-8 text-indigo-600" />}
                {index === 2 && <Rocket className="h-8 w-8 text-teal-600" />}
              </motion.div>

              <div className="relative z-10 space-y-4">
                {/* Icon avatar with gradient */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${leader.gradient} shadow-lg`}
                >
                  {/* Animated glow effect */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${leader.gradient} blur-md opacity-50`}
                  />
                  <leader.icon className="relative h-10 w-10 text-white" strokeWidth={2} />
                </motion.div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-purple-500">{leader.role}</p>
                  <h3 className="mt-2 text-2xl font-bold text-zinc-900 dark:text-white">{leader.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-transparent bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text">{leader.focus}</p>
                </div>
                
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{leader.quote}</p>
                
                <Link href="/company/about" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-purple-600 transition hover:text-purple-800 hover:gap-3">
                  View profile →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="group relative rounded-3xl border border-zinc-200 bg-white p-8 shadow-xl dark:border-zinc-800 dark:bg-zinc-900 overflow-hidden"
          >
            {/* Decorative background pattern */}
            <div className="absolute right-0 top-0 opacity-5">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <Globe2 className="h-40 w-40 text-purple-600" />
              </motion.div>
            </div>

            <div className="relative">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-purple-600">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Heart className="h-5 w-5" />
                </motion.div>
                Team Culture & Diversity
              </div>
              
              <p className="mt-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-200">
                Application security leads sit next to AI researchers. Ops veterans mentor new hires through builder rotations, then hop into customer squads.
              </p>
              
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {cultureStats.map((stat, index) => (
                  <motion.div 
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="rounded-2xl border border-purple-200 bg-gradient-to-br from-purple-50 to-teal-50 p-5 text-center shadow-md dark:border-purple-800 dark:from-purple-950/30 dark:to-teal-950/30"
                  >
                    <motion.p 
                      className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      {stat.value}
                    </motion.p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.3em] text-purple-600 dark:text-purple-400">{stat.label}</p>
                    <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">{stat.description}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  { icon: Code, text: "Hybrid-first" },
                  { icon: Coffee, text: "Immersion weeks" },
                  { icon: Sparkles, text: "AI lab" }
                ].map((badge, index) => (
                  <motion.span
                    key={badge.text}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(168, 85, 247, 0.1)" }}
                    className="flex items-center gap-2 rounded-full border border-purple-200 bg-white/50 px-4 py-2 text-sm font-semibold text-purple-700 backdrop-blur dark:border-purple-700 dark:bg-purple-900/20 dark:text-purple-300"
                  >
                    <badge.icon className="h-4 w-4" />
                    {badge.text}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative rounded-3xl border border-purple-200 bg-gradient-to-br from-purple-50 to-teal-50 p-8 shadow-xl dark:border-purple-800 dark:from-purple-950/30 dark:to-teal-950/30 overflow-hidden"
          >
            {/* Decorative floating element */}
            <motion.div
              className="absolute right-4 top-4"
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Podcast className="h-12 w-12 text-purple-300 opacity-30" />
            </motion.div>

            <div className="relative">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-purple-600 dark:text-purple-400">
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                >
                  <Podcast className="h-5 w-5" />
                </motion.div>
                Join the team
              </div>
              
              <p className="mt-4 text-base leading-relaxed text-zinc-700 dark:text-zinc-200">
                Catch day-in-the-life stories, leadership podcasts, and AMA snippets from our global team.
              </p>
              
              <Link href="/company/careers">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 inline-flex items-center gap-2 rounded-2xl border-2 border-purple-500 bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-lg hover:shadow-xl hover:from-purple-700 hover:to-indigo-700 transition-all"
                >
                  <Rocket className="h-4 w-4" />
                  See open roles
                </motion.button>
              </Link>

              {/* Animated dots decoration */}
              <div className="mt-6 flex gap-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    className="h-2 w-2 rounded-full bg-purple-500"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
