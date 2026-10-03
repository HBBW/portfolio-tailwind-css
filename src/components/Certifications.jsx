import { CERTIFICATIONS, TOOLS } from "../lib/data.js";
import Reveal from "./Reveal.jsx";

export default function Certifications() {
  return (
    <section id="sertifikat" className="py-24 sm:py-32">
      <div className="wrap">
        <Reveal className="mb-14 max-w-2xl">
          <p className="eyebrow">04 — Sertifikat</p>
          <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl">
            Sertifikat &amp; pelatihan
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/55">
            Pembelajaran terstruktur yang menopang pekerjaan IT Support saya.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CERTIFICATIONS.map((cert, index) => (
            <Reveal key={cert.title} delay={0.05 * (index % 4)}>
              <article className="card group h-full p-6">
                <div className="flex items-start justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-accent/25 bg-accent/10 font-display text-sm font-bold text-accent">
                    {cert.mono}
                  </span>
                  <span className="font-mono text-xs text-white/40">
                    {cert.year}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-base font-semibold leading-snug tracking-tight text-white">
                  {cert.title}
                </h3>
                <p className="mt-1 text-sm text-white/50">{cert.issuer}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-16">
          <Reveal>
            <h3 className="font-display text-2xl font-semibold tracking-tight text-white">
              Tools &amp; teknologi
            </h3>
          </Reveal>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {TOOLS.map((tool, index) => (
              <Reveal key={tool.name} delay={0.03 * (index % 6)}>
                <div className="group flex items-center gap-3 rounded-2xl border border-line bg-white/[0.02] px-4 py-3.5 transition hover:border-white/20 hover:bg-white/[0.04]">
                  <span
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-lg font-display text-[0.7rem] font-bold"
                    style={{
                      color: tool.color,
                      backgroundColor: `${tool.color}1a`,
                    }}
                  >
                    {tool.mono}
                  </span>
                  <span className="truncate text-sm font-medium text-white/70">
                    {tool.name}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
