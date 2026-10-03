import { NAV_LINKS, SOCIALS } from "../lib/data.js";
import { Instagram, YouTube } from "./Icons.jsx";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-coal/40 py-14">
      <div className="wrap">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <a href="#home" className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent font-display text-sm font-extrabold text-ink">
                hb
              </span>
              <span className="font-display text-sm font-semibold text-white">
                Habibi Widayanto
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-white/50">
              IT Support &amp; pelajar asal Jakarta. Merawat jaringan, server,
              dan CCTV — sekaligus membangun web yang rapi.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-12 gap-y-3" aria-label="Tautan footer">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/50 transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={SOCIALS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube Habibi Widayanto"
              className="grid h-11 w-11 place-items-center rounded-full border border-line text-white transition hover:border-accent hover:bg-accent hover:text-ink"
            >
              <YouTube size={18} />
            </a>
            <a
              href={SOCIALS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Habibi Widayanto"
              className="grid h-11 w-11 place-items-center rounded-full border border-line text-white transition hover:border-accent hover:bg-accent hover:text-ink"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Habibi Widayanto. Dibuat di Jakarta.</p>
          <p className="font-mono">React · Tailwind CSS · Motion</p>
        </div>
      </div>
    </footer>
  );
}
