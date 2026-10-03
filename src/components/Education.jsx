import { EDUCATION } from "../lib/data.js";
import Reveal from "./Reveal.jsx";

export default function Education() {
  return (
    <section id="education" className="py-24 sm:py-32">
      <div className="wrap">
        <Reveal className="mb-16 max-w-2xl">
          <p className="eyebrow">04 — Pendidikan</p>
          <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl">
            Jenjang pendidikan
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/55">
            Perjalanan yang membentuk cara saya belajar, berpikir, dan berkarya.
          </p>
        </Reveal>

        <ol className="relative border-l border-line">
          {EDUCATION.map((entry, index) => (
            <Reveal
              key={entry.school}
              delay={index * 0.08}
              className="relative pl-8 pb-12 last:pb-0 sm:pl-12"
            >
              <span
                className={`absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-ink ${
                  entry.current ? "bg-accent" : "bg-white/30"
                }`}
                aria-hidden="true"
              />
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">
                  {entry.period}
                </p>
                {entry.current && (
                  <span className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-accent">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Sekarang
                  </span>
                )}
              </div>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                {entry.school}
              </h3>
              <p className="mt-1 text-white/55">{entry.level}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
