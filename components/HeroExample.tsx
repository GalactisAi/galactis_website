"use client";

/**
 * PRODUCTION-READY HERO COMPONENT
 * 
 * This component demonstrates CORRECT usage of Framer Motion with TypeScript
 * for Vercel deployment. All MotionValue types are used correctly.
 * 
 * KEY RULES:
 * 1. MotionValue can ONLY be used in motion.* components' style prop
 * 2. Regular HTML elements (div, span, etc.) cannot accept MotionValue
 * 3. Use motion.div, motion.span, etc. when you need MotionValue
 * 4. For static values, use regular numbers/strings
 */

import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { useRef } from "react";

// Example: Using MotionValue correctly
function AnimatedCard({ 
  scrollYProgress 
}: { 
  scrollYProgress: MotionValue<number> 
}) {
  // ✅ CORRECT: Transform MotionValue to another MotionValue
  const scaleProgress = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1, 0.98]);
  
  // ✅ CORRECT: Use spring for smooth animation
  const scale = useSpring(scaleProgress, { 
    stiffness: 100, 
    damping: 15, 
    mass: 0.5 
  });

  // ✅ CORRECT: motion.div accepts MotionValue in style prop
  return (
    <motion.div
      style={{ scale }} // ✅ MotionValue works here!
      className="rounded-xl bg-white p-6 shadow-lg"
      whileHover={{ 
        scale: 1.05, // ✅ Regular number for static animation
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
    >
      <h3 className="text-xl font-bold">Animated Card</h3>
      <p className="mt-2 text-gray-600">
        This card scales based on scroll position using MotionValue correctly.
      </p>
    </motion.div>
  );
}

// Example: What NOT to do (for reference only - commented out)
// ❌ WRONG: Regular div cannot accept MotionValue
// const scale = useSpring(useTransform(useScroll().scrollYProgress, [0, 1], [1, 0.9]));
// <div style={{ scale }}>Content</div> // Type error!
//
// ✅ CORRECT: Use motion.div instead
// <motion.div style={{ scale }}>Content</motion.div>

// Main Hero Component
export default function HeroExample() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // ✅ CORRECT: useScroll returns MotionValue
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // ✅ CORRECT: Chain MotionValues
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  // ✅ CORRECT: Use spring for smooth motion
  const springY = useSpring(y, { stiffness: 100, damping: 20 });
  const springOpacity = useSpring(opacity, { stiffness: 100, damping: 20 });

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-900 to-teal-900"
    >
      {/* ✅ CORRECT: motion.div accepts MotionValue */}
      <motion.div
        style={{ 
          opacity: springOpacity, // ✅ MotionValue
          y: springY, // ✅ MotionValue
        }}
        className="text-center text-white px-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold sm:text-5xl lg:text-6xl"
        >
          Production-Ready Hero
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-lg text-gray-200 sm:text-xl"
        >
          All MotionValue types are used correctly for Vercel deployment
        </motion.p>

        {/* Example animated card */}
        <div className="mt-12">
          <AnimatedCard scrollYProgress={scrollYProgress} />
        </div>
      </motion.div>
    </section>
  );
}

