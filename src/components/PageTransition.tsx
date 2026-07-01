import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { easeEditorial } from "../lib/motion";

/** Wraps each route in a soft fade/slide so navigation feels composed. */
export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.5, ease: easeEditorial }}
    >
      {children}
    </motion.div>
  );
}
