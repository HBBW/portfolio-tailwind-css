import { useEffect, useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { SOCIALS, STATS } from "../lib/data.js";
import { ArrowDown, ArrowUpRight, Download, MapPin } from "./Icons.jsx";
import Magnetic from "./Magnetic.jsx";
import SplitReveal from "./SplitReveal.jsx";
import { EASE } from "./Reveal.jsx";

export default function Hero() {
  const ref = useRef(null);
  const videoRef = useRef(null);
  const reduce = useReducedMotion();
  const introDelay = reduce ? 0 : 0.7;

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.09, delayChildren: introDelay + 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 26 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
  };

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    if (reduce && videoRef.current) {
      videoRef.current.pause();
    }
  }, [reduce]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pb-24 pt-28"
    >
      <video
        ref={videoRef}
        className="pointer-events-none absolute inset-0 -z-20 h-full w-full object-cover opacity-40"
        autoPlay={!reduce}
        muted
        loop
        playsInline
        preload="metadata"
        poster="/ambient-poster.jpg"
        aria-hidden="true"
        tabIndex={-1}
      >
        <source src="/ambient.mp4" type="video/mp4" />
      </video>
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/50 via-ink/85 to-ink"
        aria-hidden="true"
      />

      <div className="wrap relative">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            style={{ y: contentY, opacity: fade }}
            className="lg:col-span-7"
          >
            <motion.div variants={item}>
              <span className="chip">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                Terbuka untuk kolaborasi
              </span>
            </motion.div>

            <SplitReveal
              as="h1"
              type="lines"
              trigger="load"
              delay={introDelay + 0.1}
              stagger={0.1}
              className="mt-6 font-display text-[clamp(2.9rem,7.4vw,6.4rem)] font-extrabold leading-[1.02] tracking-tightest text-white"
            >
              Habibi Widayanto
            </SplitReveal>

            <motion.p
              variants={item}
              className="mt-4 font-serif text-3xl italic text-accent sm:text-4xl"
            >
              IT Support
            </motion.p>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-base leading-relaxed text-white/55 sm:text-lg"
            >
              Pelajar SMKN 26 Jakarta yang fokus di IT Support — merawat
              jaringan, firewall, dan CCTV, serta membangun web yang rapi dan
              cepat.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-7 flex flex-wrap gap-2.5"
            >
              {["Web", "FortiGate", "Active Directory", "CCTV"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-line bg-white/[0.03] px-3.5 py-1.5 font-mono text-xs text-white/60"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div
              variants={item}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Magnetic>
                <a href="#layanan" className="btn-accent" data-cursor>
                  Lihat layanan
                  <ArrowUpRight size={16} />
                </a>
              </Magnetic>
              <a href="/cv.pdf" download className="btn-outline">
                <Download size={16} />
                Unduh CV
              </a>
              <a href="#contact" className="btn-outline">
                Hubungi saya
              </a>
            </motion.div>

            <motion.dl
              variants={item}
              className="mt-14 flex flex-wrap gap-x-10 gap-y-6 border-t border-line pt-8"
            >
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-white/40">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 font-display text-2xl font-semibold text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </motion.div>

          <div className="lg:col-span-5">
            <motion.div
              style={{ y: portraitY }}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.9,
                ease: EASE,
                delay: introDelay + 0.3,
              }}
              className="relative mx-auto w-full max-w-sm"
            >
              <div
                className="absolute -inset-8 -z-10 rounded-full bg-accent/20 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#EDEFF3] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)]">
                <img
                  src="/img/habibi.png"
                  alt="Foto Habibi Widayanto"
                  width="480"
                  height="640"
                  className="h-full w-full object-cover object-top"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent"
                  aria-hidden="true"
                />
              </div>

              <motion.div
                animate={reduce ? {} : { y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-5 top-8 hidden sm:block"
              >
                <span className="chip bg-ink/80 backdrop-blur">
                  <MapPin size={14} className="text-accent" />
                  Jakarta, ID
                </span>
              </motion.div>

              <motion.div
                animate={reduce ? {} : { y: [0, 12, 0] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.4,
                }}
                className="absolute -bottom-6 -right-4 rounded-2xl border border-line bg-coal/90 px-5 py-4 backdrop-blur"
              >
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-accent">
                  Sekolah
                </p>
                <p className="mt-1 font-display text-sm font-semibold text-white">
                  SMKN 26 Jakarta
                </p>
                <p className="font-mono text-xs text-white/50">Jurusan SIJA</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.a
        href="#about"
        style={{ opacity: fade }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.25em] text-white/40 transition-colors hover:text-accent md:flex"
        aria-label="Gulir ke bagian tentang"
      >
        <span>Scroll</span>
        <motion.span
          animate={reduce ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}
