import { useState } from "react";
import { AVAILABILITY, SOCIALS, WHATSAPP } from "../lib/data.js";
import {
  ArrowUpRight,
  Download,
  Instagram,
  Mail,
  WhatsApp,
  YouTube,
} from "./Icons.jsx";
import Magnetic from "./Magnetic.jsx";
import Parallax from "./Parallax.jsx";
import Reveal from "./Reveal.jsx";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus(
      `Terima kasih${name ? `, ${name}` : ""}! Pesanmu sudah siap — untuk respon cepat, hubungi saya langsung lewat email.`
    );
    event.target.reset();
    setName("");
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <Parallax
        speed={0.16}
        className="pointer-events-none absolute inset-x-0 top-0 z-0 select-none text-center"
      >
        <span className="font-display text-[22vw] font-extrabold leading-none text-white/[0.025]">
          ngobrol
        </span>
      </Parallax>
      <div className="wrap relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="eyebrow">05 — Kontak</p>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl">
              Punya ide? Ayo kita bangun bersama.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/55">
              Saya terbuka untuk kolaborasi, proyek, atau sekadar ngobrol soal
              web. Kirim pesan dan saya akan balas secepatnya.
            </p>

            <a
              href={`mailto:${SOCIALS.email}`}
              className="group mt-9 inline-flex items-center gap-3 font-display text-xl font-semibold text-white transition-colors hover:text-accent sm:text-2xl"
            >
              <Mail size={22} className="text-accent" />
              <span className="border-b border-white/20 pb-1 transition-colors group-hover:border-accent">
                {SOCIALS.email}
              </span>
              <ArrowUpRight
                size={20}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent"
                data-cursor
              >
                <WhatsApp size={18} />
                Chat WhatsApp
              </a>
              <a href="/cv.pdf" download className="btn-outline">
                <Download size={18} />
                Unduh CV
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-2.5">
              <span className="chip">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {AVAILABILITY.status}
              </span>
              {AVAILABILITY.types.map((type) => (
                <span key={type} className="chip">
                  {type}
                </span>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3">
              <Magnetic strength={0.4}>
                <a
                  href={SOCIALS.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube Habibi Widayanto"
                  className="grid h-12 w-12 place-items-center rounded-full border border-line text-white transition hover:border-accent hover:bg-accent hover:text-ink"
                >
                  <YouTube size={20} />
                </a>
              </Magnetic>
              <Magnetic strength={0.4}>
                <a
                  href={SOCIALS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Habibi Widayanto"
                  className="grid h-12 w-12 place-items-center rounded-full border border-line text-white transition hover:border-accent hover:bg-accent hover:text-ink"
                >
                  <Instagram size={20} />
                </a>
              </Magnetic>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="card p-6 sm:p-8">
              <div className="mb-5">
                <label htmlFor="name" className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-white/50">
                  Nama
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Nama kamu"
                  className="w-full rounded-xl border border-line bg-ink/60 px-4 py-3 text-white placeholder:text-white/30 transition focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="email" className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-white/50">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  required
                  placeholder="kamu@email.com"
                  className="w-full rounded-xl border border-line bg-ink/60 px-4 py-3 text-white placeholder:text-white/30 transition focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-white/50">
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  placeholder="Ceritakan ide atau pertanyaanmu…"
                  className="w-full resize-y rounded-xl border border-line bg-ink/60 px-4 py-3 text-white placeholder:text-white/30 transition focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>
              <button type="submit" className="btn-accent w-full">
                Kirim pesan
                <ArrowUpRight size={16} />
              </button>
              <p
                role="status"
                aria-live="polite"
                className={`mt-4 text-sm text-accent ${status ? "" : "hidden"}`}
              >
                {status}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
