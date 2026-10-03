import { useRef } from "react";
import { motion } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SERVICES } from "../lib/data.js";
import { ArrowUpRight } from "./Icons.jsx";
import SplitReveal from "./SplitReveal.jsx";
import { EASE } from "./Reveal.jsx";

gsap.registerPlugin(ScrollTrigger);

const CTA = { cta: true };

export default function Work() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const panels = [...SERVICES, CTA];

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
          const track = trackRef.current;
          if (!track) return;
          const getScroll = () =>
            Math.max(0, track.scrollWidth - window.innerWidth);

          const tween = gsap.to(track, {
            x: () => -getScroll(),
            ease: "none",
            scrollTrigger: {
              trigger: track.parentElement,
              start: "top top",
              end: () => "+=" + getScroll(),
              scrub: 1,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          return () => tween.kill();
        }
      );

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section id="layanan" ref={sectionRef} className="relative py-24 sm:py-32 lg:py-0">
      <div className="wrap pt-24 sm:pt-32 lg:pt-28">
        <p className="eyebrow">02 — Layanan</p>
        <div className="mt-5 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SplitReveal
            as="h2"
            className="max-w-lg font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl"
          >
            Layanan &amp; keahlian
          </SplitReveal>
          <p className="max-w-sm text-base leading-relaxed text-white/55">
            Yang bisa saya bantu — membangun web sampai menjaga jaringan,
            server, dan CCTV tetap aman dan jalan.
          </p>
        </div>
      </div>

      <div className="relative mt-14 lg:mt-16 lg:h-screen lg:overflow-hidden">
        <div
          id="layanan-track"
          ref={trackRef}
          className="flex flex-col gap-6 px-5 sm:px-8 lg:h-full lg:flex-row lg:items-center lg:gap-8 lg:px-0 lg:pl-[max(1.25rem,calc((100vw-1240px)/2+1.25rem))] lg:pr-[8vw]"
        >
          {panels.map((project, index) =>
            project.cta ? (
              <div
                key="cta"
                className="w-full shrink-0 lg:w-[clamp(300px,32vw,420px)]"
              >
                <div className="card flex h-full flex-col justify-between gap-10 p-8 lg:min-h-[520px]">
                  <p className="eyebrow">Selanjutnya</p>
                  <div>
                    <h3 className="font-display text-3xl font-bold leading-tight tracking-tight text-white">
                      Butuh bantuan IT? Ayo ngobrol.
                    </h3>
                    <p className="mt-3 text-white/55">
                      Dari setup jaringan, server, CCTV, sampai website — saya
                      siap bantu.
                    </p>
                    <MagneticButton />
                  </div>
                </div>
              </div>
            ) : (
              <div
                key={project.id}
                className="group w-full shrink-0 lg:w-[clamp(300px,32vw,420px)]"
              >
                <motion.a
                  href="#contact"
                  data-cursor="view"
                  data-cursor-image={project.cover}
                  data-cursor-label="Lihat"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3, ease: EASE }}
                  className="card block h-full"
                >
                  <div className="relative aspect-[16/10] overflow-hidden lg:aspect-[4/5]">
                    <img
                      src={project.cover}
                      alt={`Cuplikan proyek ${project.title}`}
                      width="1000"
                      height="625"
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent"
                      aria-hidden="true"
                    />
                    <span className="absolute left-5 top-5 font-mono text-xs text-white/70">
                      {project.id}
                    </span>
                    <span className="absolute right-5 top-5 grid h-10 w-10 translate-y-1 place-items-center rounded-full bg-accent text-ink opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-accent">
                          {project.category}
                        </p>
                        <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-white">
                          {project.title}
                        </h3>
                      </div>
                      <span className="font-mono text-xs text-white/40">
                        {project.year}
                      </span>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="chip">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.a>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

function MagneticButton() {
  return (
    <a
      href="#contact"
      data-cursor
      className="btn-accent mt-6"
    >
      Mulai ngobrol
      <ArrowUpRight size={16} />
    </a>
  );
}
