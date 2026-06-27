import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import PageTransition from "../components/PageTransition";

export default function NotFound() {
  return (
    <PageTransition>
      <Seo title="Not found" />
      <section className="container-editorial flex min-h-[70vh] flex-col items-center justify-center gap-6 py-32 text-center">
        <span className="font-display text-[8rem] italic leading-none text-clay md:text-[12rem]">
          404
        </span>
        <h1 className="display-md text-ink">This page wandered off</h1>
        <p className="max-w-sm text-ink-soft">
          The page you're looking for doesn't exist — but there's plenty more to see.
        </p>
        <Link to="/" className="btn-island">
          Back home
          <span className="btn-island-icon">
            <svg width="14" height="14" viewBox="0 0 14 14" className="stroke-current">
              <path d="M3 11L11 3M11 3H5M11 3V9" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </Link>
      </section>
    </PageTransition>
  );
}
