import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function SplitReveal({
  children,
  as: Tag = "div",
  className = "",
  type = "lines",
  trigger = "scroll",
  delay = 0,
  duration = 0.9,
  stagger = 0.08,
  start = "top 82%",
  mask = true,
}) {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !ref.current) return;

    const el = ref.current;
    let split;
    let ctx;
    let cancelled = false;

    const run = () => {
      if (cancelled) return;
      ctx = gsap.context(() => {
        split = new SplitText(el, {
          type,
          mask: mask ? type : undefined,
          linesClass: "split-line",
        });

        const targets = type.includes("lines")
          ? split.lines
          : type.includes("words")
            ? split.words
            : split.chars;

        const from = {
          yPercent: 115,
          opacity: 0,
          duration,
          ease: "expo.out",
          stagger,
          delay,
        };

        if (trigger === "load") {
          gsap.from(targets, from);
        } else {
          gsap.from(targets, {
            ...from,
            scrollTrigger: { trigger: el, start, once: true },
          });
        }
      }, el);
    };

    if (document.fonts?.ready) {
      document.fonts.ready.then(run);
    } else {
      run();
    }

    return () => {
      cancelled = true;
      ctx?.revert();
      split?.revert();
    };
  }, [reduce, type, trigger, delay, duration, stagger, start, mask]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
