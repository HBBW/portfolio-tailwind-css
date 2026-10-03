import { motion } from "motion/react";

export const EASE = [0.22, 1, 0.36, 1];

export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 26,
  amount = 0.25,
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.6, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}
