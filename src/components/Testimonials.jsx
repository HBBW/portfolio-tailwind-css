import { TESTIMONIALS } from "../lib/data.js";
import { Sparkle } from "./Icons.jsx";
import Reveal from "./Reveal.jsx";

export default function Testimonials() {
  return (
    <section id="testimoni" className="py-24 sm:py-32">
      <div className="wrap">
        <Reveal className="mb-14 max-w-2xl">
          <p className="eyebrow">08 — Testimoni</p>
          <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl">
            Kata mereka
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/55">
            Penilaian dari orang yang pernah bekerja sama dengan saya.
          </p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {TESTIMONIALS.map((item, index) => (
            <Reveal key={item.name + index} delay={0.08 * index}>
              <figure className="card flex h-full flex-col justify-between p-8">
                <span className="text-accent" aria-hidden="true">
                  <Sparkle size={24} />
                </span>
                <blockquote className="mt-5 font-display text-lg leading-relaxed text-white/85">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-7 border-t border-line pt-5">
                  <p className="font-display text-base font-semibold text-white">
                    {item.name}
                  </p>
                  <p className="text-sm text-white/50">{item.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
