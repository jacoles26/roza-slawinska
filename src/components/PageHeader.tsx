import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { easeEditorial } from "../lib/motion";

interface PageHeaderProps {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
}

/** Consistent editorial header for inner pages — clears the fixed nav. */
export default function PageHeader({ eyebrow, title, intro }: PageHeaderProps) {
  return (
    <header className="container-editorial pb-12 pt-36 md:pb-20 md:pt-44">
      <motion.span
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: easeEditorial }}
        className="eyebrow text-clay"
      >
        <span className="h-px w-8 bg-clay" />
        {eyebrow}
      </motion.span>
      <motion.h1
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: easeEditorial, delay: 0.08 }}
        className="display-lg mt-6 max-w-4xl text-ink"
      >
        {title}
      </motion.h1>
      {intro && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeEditorial, delay: 0.16 }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft"
        >
          {intro}
        </motion.p>
      )}
    </header>
  );
}
