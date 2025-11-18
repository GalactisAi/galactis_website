"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CursorLight() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Track cursor position
    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        setCursorPosition({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  // Don't render on mobile
  if (isMobile) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-50 mix-blend-screen"
      style={{
        background: `radial-gradient(circle 400px at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(168,85,247,0.12), transparent 70%)`,
      }}
      animate={{
        opacity: [0.8, 1, 0.8],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
}

