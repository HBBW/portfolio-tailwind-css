import { GALLERY } from "../lib/data.js";
import Reveal from "./Reveal.jsx";

export default function Gallery() {
  return (
    <section id="galeri" className="py-24 sm:py-32">
      <div className="wrap">
        <Reveal className="mb-14 max-w-2xl">
          <p className="eyebrow">06 — Galeri</p>
          <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl">
            Dokumentasi kerja
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/55">
            Cuplikan pekerjaan lapangan — dari jaringan, server, sampai CCTV.
          </p>
        </Reveal>

        <div className="grid auto-rows-[150px] grid-cols-2 gap-4 lg:auto-rows-[190px] lg:grid-cols-4">
          {GALLERY.map((item, index) => (
            <Reveal
              key={item.src}
              delay={0.04 * (index % 4)}
              className={index === 0 ? "col-span-2 row-span-2" : ""}
            >
              <figure className="group relative h-full overflow-hidden rounded-2xl border border-line">
                <img
                  src={item.src}
                  alt={item.label}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent"
                  aria-hidden="true"
                />
                <figcaption className="absolute bottom-0 left-0 p-4">
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-accent">
                    {item.tag}
                  </span>
                  <p className="mt-0.5 text-sm font-medium text-white">
                    {item.label}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
