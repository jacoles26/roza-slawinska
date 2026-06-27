import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { site } from "../data/site";
import { easeEditorial } from "../lib/motion";

const HERO_VIDEO = "village-walk"; // /public/video/<slug>.mp4 + <slug>-poster.jpg

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Subtle parallax: media drifts up, copy drifts down as you scroll past
  const mediaY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const copyY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [1, 1.4]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink">
      {/* Background media */}
      <motion.div style={{ y: mediaY }} className="absolute inset-0 scale-110">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={`/video/${HERO_VIDEO}-poster.jpg`}
        >
          <source src={`/video/${HERO_VIDEO}.mp4`} type="video/mp4" />
        </video>
      </motion.div>

      {/* Warm editorial wash for legibility */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-ink/40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-transparent to-transparent" />

      {/* Top meta row */}
      <div className="container-editorial absolute inset-x-0 top-24 z-10 flex items-center justify-between text-cream/70 md:top-28">
        <span className="eyebrow text-cream/70">{site.location}</span>
        <span className="eyebrow text-cream/70">Portfolio — {new Date().getFullYear()}</span>
      </div>

      {/* Headline */}
      <motion.div
        style={{ y: copyY }}
        className="container-editorial absolute inset-x-0 bottom-0 z-10 pb-14 md:pb-20"
      >
        <div className="flex flex-col gap-6">
          <h1 className="display-xl text-cream">
            {site.nameLines.map((line, i) => (
              <motion.span
                key={line}
                className="block"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.12, duration: 1, ease: easeEditorial }}
              >
                {i === 1 ? (
                  <span className="italic font-light">{line}</span>
                ) : (
                  line
                )}
              </motion.span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: easeEditorial }}
            className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
          >
            <p className="max-w-md text-sm leading-relaxed text-cream/80 md:text-base">
              {site.tagline} {site.roles.join(" · ")}.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link to="/portfolio" className="btn-island bg-cream text-ink">
                View portfolio
                <span className="btn-island-icon bg-ink/10">
                  <Arrow />
                </span>
              </Link>
              <Link
                to="/about"
                className="btn-ghost border-cream/30 text-cream hover:border-cream/70"
              >
                The story
                <span className="btn-island-icon bg-cream/10">
                  <Arrow />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 lg:block"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="block h-10 w-px bg-cream/50"
        />
      </motion.div>
    </section>
  );
}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="stroke-current">
      <path d="M3 11L11 3M11 3H5M11 3V9" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
