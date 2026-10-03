import { CASE_STUDIES } from "../lib/data.js";
import Reveal from "./Reveal.jsx";

export default function CaseStudies() {
  return (
    <section id="studi-kasus" className="py-24 sm:py-32">
      <div className="wrap">
        <Reveal className="mb-14 max-w-2xl">
          <p className="eyebrow">05 — Studi Kasus</p>
          <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl">
            Bagaimana saya menangani masalah
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/55">
            Contoh alur kerja: dari mengidentifikasi masalah sampai hasilnya.
          </p>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-3">
          {CASE_STUDIES.map((item, index) => (
            <Reveal key={item.id} delay={0.06 * index}>
              <article className="card flex h-full flex-col p-7">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-accent">
                    {item.tag}
                  </span>
                  <span className="font-mono text-xs text-white/30">
                    {item.id}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold leading-snug tracking-tight text-white">
                  {item.title}
                </h3>

                <dl className="mt-6 space-y-4 border-t border-line pt-6 text-sm">
                  <div>
                    <dt className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-white/40">
                      Masalah
                    </dt>
                    <dd className="mt-1.5 leading-relaxed text-white/55">
                      {item.problem}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-white/40">
                      Solusi
                    </dt>
                    <dd className="mt-1.5 leading-relaxed text-white/55">
                      {item.solution}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-accent">
                      Hasil
                    </dt>
                    <dd className="mt-1.5 leading-relaxed text-white/70">
                      {item.result}
                    </dd>
                  </div>
                </dl>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
