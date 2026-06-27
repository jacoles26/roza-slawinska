import type { Variants, Transition } from "framer-motion";

/** Heavy, editorial easing — matches the CSS cubic-bezier(0.32,0.72,0,1). */
export const easeEditorial: Transition["ease"] = [0.32, 0.72, 0, 1];

/** Gentle fade-up used for scroll reveals. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: easeEditorial },
  },
};

/** Container that staggers its children on enter. */
export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

/** Simple opacity fade. */
export const fade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.1, ease: easeEditorial } },
};
