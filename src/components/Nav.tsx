import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useContent } from "../i18n/useContent";
import { LOCALES, LOCALE_LABELS } from "../i18n/locales";
import { easeEditorial } from "../lib/motion";
import { cn } from "../lib/cn";

/** PL / EN / ES switcher — links to the current page in each language. */
function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, localeHref } = useContent();
  return (
    <div className={cn("flex items-center gap-1 text-xs", className)}>
      {LOCALES.map((l, i) => (
        <span key={l} className="flex items-center gap-1">
          {i > 0 && <span className="text-ink/20">/</span>}
          <Link
            to={localeHref(l)}
            aria-current={l === locale ? "true" : undefined}
            className={cn(
              "uppercase tracking-label transition-colors",
              l === locale ? "text-clay" : "text-ink-soft hover:text-ink"
            )}
          >
            {LOCALE_LABELS[l]}
          </Link>
        </span>
      ))}
    </div>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { content, localePath } = useContent();
  const { instagram, instagramHandle, name, nav } = content;

  // Solidify the pill after a little scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the overlay whenever the route changes
  useEffect(() => setOpen(false), [location.pathname]);

  // Lock scroll while the overlay is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center">
        <div
          className={cn(
            "pointer-events-auto mt-5 flex w-[min(92%,68rem)] items-center justify-between rounded-full px-5 py-3 transition-all duration-700 ease-editorial",
            scrolled || open
              ? "border border-ink/10 bg-cream/80 shadow-soft backdrop-blur-xl"
              : "border border-transparent bg-transparent"
          )}
        >
          <Link
            to={localePath("/")}
            className="font-display text-lg italic tracking-tight text-ink"
            aria-label={`${name} — home`}
          >
            Róża<span className="text-clay">.</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((l) => (
              <NavLink
                key={l.to}
                to={localePath(l.to)}
                end={l.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "relative text-sm transition-colors duration-300",
                    isActive ? "text-ink" : "text-ink-soft hover:text-ink"
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1 left-0 h-px w-full bg-clay"
                        transition={{ duration: 0.5, ease: easeEditorial }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <LanguageSwitcher className="hidden sm:flex" />
            <a
              href={instagram}
              target="_blank"
              rel="noreferrer"
              className="hidden text-sm text-ink-soft transition-colors hover:text-ink lg:block"
            >
              {instagramHandle}
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="relative flex h-10 w-10 items-center justify-center rounded-full bg-ink/5 transition-colors hover:bg-ink/10 md:hidden"
            >
              <span className="relative block h-3 w-5">
                <span
                  className={cn(
                    "absolute left-0 top-0 h-px w-5 bg-ink transition-all duration-500 ease-editorial",
                    open && "top-1/2 -translate-y-1/2 rotate-45"
                  )}
                />
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-px w-5 bg-ink transition-all duration-500 ease-editorial",
                    open && "bottom-1/2 translate-y-1/2 -rotate-45"
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: easeEditorial }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-paper/90 px-8 backdrop-blur-2xl md:hidden"
          >
            <nav className="flex flex-col gap-2">
              {nav.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.6, ease: easeEditorial }}
                >
                  <NavLink
                    to={localePath(l.to)}
                    end={l.to === "/"}
                    className="font-display text-5xl text-ink"
                  >
                    {l.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
            <div className="mt-12 flex items-center gap-6">
              <LanguageSwitcher />
              <a
                href={instagram}
                target="_blank"
                rel="noreferrer"
                className="eyebrow"
              >
                {instagramHandle}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
