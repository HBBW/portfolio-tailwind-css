import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import useMediaQuery from "../hooks/useMediaQuery.js";
import { EASE } from "./Reveal.jsx";

export default function Cursor() {
  const reduce = useReducedMotion();
  const finePointer = useMediaQuery("(pointer: fine)");
  const enabled = finePointer && !reduce;

  const [mode, setMode] = useState("idle");
  const [label, setLabel] = useState("");
  const [image, setImage] = useState("");

  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const ringX = useSpring(x, { stiffness: 340, damping: 28, mass: 0.4 });
  const ringY = useSpring(y, { stiffness: 340, damping: 28, mass: 0.4 });
  const previewX = useSpring(x, { stiffness: 150, damping: 20, mass: 0.6 });
  const previewY = useSpring(y, { stiffness: 150, damping: 20, mass: 0.6 });

  useEffect(() => {
    if (!enabled) return;

    document.documentElement.classList.add("has-custom-cursor");

    const onMove = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);

      const target = event.target.closest?.("[data-cursor]");
      if (!target) {
        setMode("idle");
        return;
      }

      const img = target.getAttribute("data-cursor-image");
      if (img) {
        setImage(img);
        setMode("image");
      } else {
        setLabel(target.getAttribute("data-cursor-label") || "Lihat");
        setMode("label");
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const isImage = mode === "image";
  const isLabel = mode === "label";

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[200]">
      <motion.div
        style={{ x, y }}
        className="absolute -ml-[3px] -mt-[3px] h-1.5 w-1.5 rounded-full bg-accent"
      />

      <motion.div
        style={{ x: ringX, y: ringY }}
        animate={{
          scale: isImage || isLabel ? 0 : 1,
          opacity: isImage || isLabel ? 0 : 1,
        }}
        transition={{ duration: 0.22, ease: EASE }}
        className="absolute -ml-4 -mt-4 h-8 w-8 rounded-full border border-white/40"
      />

      <motion.div
        style={{ x: ringX, y: ringY }}
        animate={{ scale: isLabel ? 1 : 0.4, opacity: isLabel ? 1 : 0 }}
        transition={{ duration: 0.25, ease: EASE }}
        className="absolute -ml-[38px] -mt-[38px] grid h-[76px] w-[76px] place-items-center rounded-full bg-accent text-center font-display text-[0.68rem] font-bold uppercase tracking-[0.14em] text-ink"
      >
        {label}
      </motion.div>

      <motion.div
        style={{ x: previewX, y: previewY }}
        animate={{ scale: isImage ? 1 : 0.7, opacity: isImage ? 1 : 0 }}
        transition={{ duration: 0.35, ease: EASE }}
        className="absolute -ml-[120px] -mt-[160px] h-[320px] w-[240px] overflow-hidden rounded-2xl border border-white/10 bg-coal shadow-[0_30px_60px_-20px_rgba(0,0,0,0.9)]"
      >
        {image && (
          <img src={image} alt="" className="h-full w-full object-cover" />
        )}
      </motion.div>
    </div>
  );
}
