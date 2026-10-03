import { FOCUS, HOBBIES } from "../lib/data.js";
import { MapPin, Sparkle } from "./Icons.jsx";
import Reveal from "./Reveal.jsx";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="wrap">
        <div className="grid gap-4 lg:grid-cols-6">
          <Reveal className="lg:col-span-4">
            <article className="card grain h-full p-8 sm:p-10">
              <p className="eyebrow">01 — Tentang</p>
              <h2 className="mt-5 max-w-lg font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                Menjaga sistem tetap jalan, membangun web yang rapi.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/55">
                Saya Habibi, 16 tahun, pelajar SMKN 26 Jakarta jurusan SIJA.
                Fokus saya di IT Support: merawat jaringan dan firewall FortiGate,
                mengelola Active Directory, menangani CCTV, sekaligus membangun
                website. Saat ini saya menjalani PKWT di PT Braja Mukti Cakra
                setelah menyelesaikan magang.
              </p>
              <blockquote className="mt-8 border-l-2 border-accent pl-5 font-serif text-xl italic text-white/80">
                “Motivasi buat belajar intinya harus konsisten.”
              </blockquote>
            </article>
          </Reveal>

          <div className="grid gap-4 lg:col-span-2">
            <Reveal delay={0.05}>
              <div className="card p-6">
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-white/40">
                  Usia
                </p>
                <p className="mt-2 font-display text-4xl font-bold text-white">
                  16<span className="text-accent">th</span>
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="card flex items-center gap-4 p-6">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                  <MapPin size={20} />
                </span>
                <div>
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-white/40">
                    Lokasi
                  </p>
                  <p className="mt-1 font-display text-lg font-semibold text-white">
                    Jakarta, ID
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="card flex items-center gap-4 p-6">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                  <Sparkle size={20} />
                </span>
                <div>
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-white/40">
                    Jurusan
                  </p>
                  <p className="mt-1 font-display text-lg font-semibold text-white">
                    SIJA
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.05} className="lg:col-span-3">
            <div className="card h-full p-8">
              <p className="eyebrow">Fokus sekarang</p>
              <p className="mt-4 text-white/55">
                Bidang yang saya tekuni dan perdalam di dunia IT Support.
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {FOCUS.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-accent/30 bg-accent/10 px-4 py-2 font-display text-sm font-medium text-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <div className="card h-full p-8">
              <p className="eyebrow">Di luar ngoding</p>
              <p className="mt-4 text-white/55">
                Menjaga tubuh tetap aktif supaya pikiran tetap tajam.
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {HOBBIES.map((hobby) => (
                  <span key={hobby} className="chip">
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
