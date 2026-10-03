import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

export default function Parallax({ children, className = "", speed = 0.2 }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [speed * 120, speed * -120]);

  return (
    <motion.div
      ref={ref}
      style={{ y: reduce ? 0 : y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
