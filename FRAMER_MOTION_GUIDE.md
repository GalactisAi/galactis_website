# Framer Motion TypeScript Guide for Vercel

## Common Type Errors & Solutions

### ❌ ERROR: `MotionValue<number>` cannot be assigned to `{ scale: number }`

**Problem:**
```tsx
// WRONG - This causes a type error
const scale = useSpring(useTransform(...));
<div style={{ scale }} /> // ❌ Error: MotionValue<number> not assignable to number
```

**Solution:**
```tsx
// CORRECT - Use motion.div for MotionValue
const scale = useSpring(useTransform(...));
<motion.div style={{ scale }} /> // ✅ Works! motion.div accepts MotionValue
```

### Key Rules:

1. **MotionValue can ONLY be used in `motion.*` components:**
   ```tsx
   // ✅ CORRECT
   <motion.div style={{ scale, x, y }} />
   <motion.span style={{ opacity }} />
   
   // ❌ WRONG
   <div style={{ scale }} /> // Type error!
   <span style={{ opacity }} /> // Type error!
   ```

2. **For regular HTML elements, extract the value:**
   ```tsx
   // If you MUST use MotionValue with regular div, extract the value
   const [scaleValue, setScaleValue] = useState(1);
   
   useEffect(() => {
     const unsubscribe = scale.on("change", (latest) => {
       setScaleValue(latest);
     });
     return unsubscribe;
   }, [scale]);
   
   <div style={{ transform: `scale(${scaleValue})` }} /> // ✅ Works
   ```

3. **Use `useTransform` and `useSpring` correctly:**
   ```tsx
   // ✅ CORRECT - MotionValue chain
   const scrollY = useScroll();
   const opacity = useTransform(scrollY.scrollYProgress, [0, 1], [1, 0]);
   const springOpacity = useSpring(opacity);
   
   <motion.div style={{ opacity: springOpacity }} /> // ✅ Works
   ```

4. **For static values, use regular numbers:**
   ```tsx
   // ✅ CORRECT - Static values
   <motion.div 
     animate={{ scale: 1.2 }} // Regular number
     style={{ scale: 1 }} // Regular number
   />
   
   // ✅ CORRECT - Dynamic MotionValue
   const scale = useSpring(useTransform(...));
   <motion.div style={{ scale }} /> // MotionValue
   ```

## Best Practices for Vercel Deployment

1. **Always use `motion.*` components when using MotionValue:**
   ```tsx
   // ✅ RECOMMENDED
   const scale = useSpring(...);
   return <motion.div style={{ scale }}>Content</motion.div>;
   ```

2. **Type your refs correctly:**
   ```tsx
   // ✅ CORRECT
   const ref = useRef<HTMLDivElement>(null);
   const { scrollYProgress } = useScroll({ target: ref });
   ```

3. **Handle server-side rendering:**
   ```tsx
   // ✅ CORRECT - Check for client-side
   "use client";
   import { motion } from "framer-motion";
   
   // Motion components only work on client
   ```

4. **Avoid using MotionValue in regular style props:**
   ```tsx
   // ❌ DON'T DO THIS
   const scale = useSpring(...);
   <div style={{ transform: `scale(${scale})` }} /> // Type error!
   
   // ✅ DO THIS INSTEAD
   <motion.div style={{ scale }} /> // Works perfectly
   ```

## Example: Correct Hero Component

```tsx
"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  
  // ✅ CORRECT: MotionValue chain
  const { scrollYProgress } = useScroll({ target: ref });
  const scale = useSpring(
    useTransform(scrollYProgress, [0, 1], [1, 0.95]),
    { stiffness: 100, damping: 15 }
  );
  
  return (
    // ✅ CORRECT: motion.div accepts MotionValue
    <motion.div 
      ref={ref}
      style={{ scale }} // MotionValue works here!
      className="hero-section"
    >
      <h1>Hero Content</h1>
    </motion.div>
  );
}
```

## Vercel Build Checklist

- [ ] All `motion.*` components use MotionValue correctly
- [ ] No MotionValue used in regular HTML elements
- [ ] All refs are properly typed
- [ ] Client components marked with `"use client"`
- [ ] No type errors in `npm run build`
- [ ] All imports are from supported libraries

