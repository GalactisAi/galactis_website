"use client";

import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

type AnimatedCounterProps = {
  value: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
};

export default function AnimatedCounter({
  value,
  duration = 2000,
  decimals = 0,
  prefix = "",
  suffix = "",
  className = "",
}: AnimatedCounterProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [hasAnimated, setHasAnimated] = useState(false);

  const { number } = useSpring({
    from: { number: 0 },
    to: { number: inView && !hasAnimated ? value : 0 },
    config: { duration },
    onRest: () => {
      if (inView) setHasAnimated(true);
    },
  });

  return (
    <span ref={ref} className={className}>
      {prefix}
      <animated.span>
        {number.to((n) => n.toFixed(decimals))}
      </animated.span>
      {suffix}
    </span>
  );
}

