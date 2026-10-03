import { EXPERIENCE } from "../lib/data.js";
import Reveal from "./Reveal.jsx";

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="wrap">
        <Reveal className="mb-14 max-w-2xl">
          <p className="eyebrow">03 — Pengalaman</p>
          <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl">
            Pengalaman kerja
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/55">
            Tempat saya mengasah kemampuan IT Support secara langsung di dunia
            kerja.
          </p>
        </Reveal>

        <div className="space-y-5">
          {EXPERIENCE.map((entry) => (
            <Reveal key={entry.company}>
              <article className="card p-8 sm:p-10">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-5">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-accent font-display text-sm font-extrabold lowercase text-ink">
                      {entry.mono}
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="font-display text-2xl font-semibold tracking-tight text-white">
                          {entry.role}
                        </h3>
                        <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-accent">
                          {entry.type}
                        </span>
                        {entry.current && (
                          <span className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-white/60">
                            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                            Sekarang
                          </span>
                        )}
                      </div>
                      <p className="mt-1.5 font-display text-lg text-white/75">
                        {entry.company}
                      </p>
                      <p className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-white/40">
                        {entry.note} · {entry.period}
                      </p>
                    </div>
                  </div>
                </div>

                <ul className="mt-8 grid gap-3 border-t border-line pt-8 sm:grid-cols-2">
                  {entry.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm leading-relaxed text-white/60"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                        aria-hidden="true"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
