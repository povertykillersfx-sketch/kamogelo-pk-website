"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { nav, social } from "@/content/site";
import { cn } from "@/lib/cn";
import { Wordmark } from "@/components/site/Wordmark";

export function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 24);
    setHidden(latest > previous && latest > 420 && !open);
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: hidden ? "-115%" : 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
          scrolled && !open
            ? "border-b border-hairline bg-ink/70 backdrop-blur-xl"
            : "border-b border-transparent",
        )}
      >
        <nav
          aria-label="Primary"
          className="shell flex h-18 items-center justify-between gap-6"
        >
          <a
            href="#top"
            onClick={() => setOpen(false)}
            className="relative z-10 text-bone transition-opacity duration-300 hover:opacity-70"
          >
            <Wordmark />
            <span className="sr-only">Kamo PK — home</span>
          </a>

          <ul className="hidden items-center gap-9 lg:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group relative font-mono text-[0.66rem] uppercase tracking-[0.2em] text-bone-dim transition-colors duration-300 hover:text-bone"
                >
                  {item.label}
                  <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-violet-soft transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <a
              href={social.pkfx.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full border border-hairline-strong px-5 py-2.5 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-bone transition-all duration-500 hover:border-bone hover:bg-bone hover:text-ink lg:inline-block"
            >
              PKFX
            </a>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="relative z-10 flex h-10 w-10 items-center justify-center lg:hidden"
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              <span aria-hidden className="relative block h-3 w-6">
                <span
                  className={cn(
                    "absolute left-0 block h-px w-6 bg-bone transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    open ? "top-1.5 rotate-45" : "top-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 block h-px bg-bone transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    open ? "top-1.5 w-6 -rotate-45" : "top-3 w-4",
                  )}
                />
              </span>
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-ink/97 backdrop-blur-xl lg:hidden"
          >
            <div className="shell flex h-full flex-col justify-between pb-14 pt-30">
              <ul className="flex flex-col gap-1">
                {nav.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.06 + index * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="border-b border-hairline"
                  >
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline justify-between py-5"
                    >
                      <span className="display-lg text-bone">{item.label}</span>
                      <span className="eyebrow text-[0.6rem]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="flex flex-wrap gap-x-6 gap-y-3"
              >
                {Object.values(social).map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[0.66rem] uppercase tracking-[0.2em] text-bone-dim transition-colors hover:text-bone"
                  >
                    {item.label}
                  </a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
