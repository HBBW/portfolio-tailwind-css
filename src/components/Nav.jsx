import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { NAV_LINKS, SOCIALS } from "../lib/data.js";
import { Close, Menu } from "./Icons.jsx";
import { EASE } from "./Reveal.jsx";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-line bg-ink/70 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="wrap flex h-16 items-center justify-between">
        <a
          href="#home"
          className="group flex items-center gap-3"
          aria-label="Kembali ke atas"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent font-display text-sm font-extrabold text-ink">
            hb
          </span>
          <span className="font-display text-sm font-semibold tracking-tight text-white">
            Habibi&nbsp;Widayanto
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigasi utama">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-white/60 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full bg-white/5 px-5 py-2.5 font-display text-sm font-semibold text-white ring-1 ring-inset ring-line transition hover:bg-accent hover:text-ink sm:inline-flex"
          >
            Ayo ngobrol
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-full text-white ring-1 ring-inset ring-line transition hover:bg-white/5 lg:hidden"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: EASE }}
            className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-ink lg:hidden"
          >
            <nav
              className="wrap flex h-full flex-col py-8"
              aria-label="Navigasi seluler"
            >
              {NAV_LINKS.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index, duration: 0.3, ease: EASE }}
                  className="flex items-center justify-between border-b border-line py-4 font-display text-2xl font-semibold text-white"
                >
                  {link.label}
                  <span className="font-mono text-xs text-accent">
                    0{index + 1}
                  </span>
                </motion.a>
              ))}
              <div className="mt-auto flex items-center gap-4 pt-8">
                <a
                  href={`mailto:${SOCIALS.email}`}
                  className="font-mono text-xs text-white/50"
                >
                  {SOCIALS.email}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
