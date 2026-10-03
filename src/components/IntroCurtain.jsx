import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { EASE } from "./Reveal.jsx";

export default function IntroCurtain() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (reduce) {
      setShow(false);
      return;
    }
    const timer = setTimeout(() => setShow(false), 950);
    return () => clearTimeout(timer);
  }, [reduce]);

  if (reduce) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="fixed inset-0 z-[300] grid place-items-center bg-ink"
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="flex flex-col items-center gap-4"
          >
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent font-display text-lg font-extrabold text-ink">
              hb
            </span>
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-white/40">
              Habibi Widayanto
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
