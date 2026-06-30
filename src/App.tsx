import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation, useParams } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Grain from "./components/Grain";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Journal from "./pages/Journal";
import NotFound from "./pages/NotFound";
import { DEFAULT_LOCALE, isLocale } from "./i18n/locales";

/** Reset scroll on route change — but honour in-page #anchors. */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // Let the target render, then scroll to + focus it (accessible anchor nav).
      const id = hash.slice(1);
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
          el.focus({ preventScroll: true });
        }
      });
      return;
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname, hash]);
  return null;
}

/**
 * Everything under /:lang/*. Validates the locale segment (redirecting unknown
 * languages to the default) and renders the chrome + animated page routes.
 * Old (pre-consolidation) routes redirect so shared links don't 404.
 */
function LocaleApp() {
  const { lang } = useParams();
  const location = useLocation();

  if (!isLocale(lang)) {
    return <Navigate to={`/${DEFAULT_LOCALE}`} replace />;
  }

  return (
    <>
      <Grain />
      <Nav />
      <main id="main" tabIndex={-1}>
        <AnimatePresence mode="wait">
          {/* Nested routes resolve relative to /:lang */}
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/journal" element={<Journal />} />
            {/* Consolidated away — redirect old URLs into the Home sections */}
            <Route path="/about" element={<Navigate to={`/${lang}`} replace />} />
            <Route path="/representation" element={<Navigate to={`/${lang}`} replace />} />
            <Route path="/contact" element={<Navigate to={`/${lang}#contact`} replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Navigate to={`/${DEFAULT_LOCALE}`} replace />} />
        <Route path="/:lang/*" element={<LocaleApp />} />
        <Route path="*" element={<Navigate to={`/${DEFAULT_LOCALE}`} replace />} />
      </Routes>
    </>
  );
}
