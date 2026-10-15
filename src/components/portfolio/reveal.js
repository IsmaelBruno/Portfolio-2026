"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 35,
  once = true,
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once,
        amount: 0,                    /* ← CHANGÉ : 0 au lieu de 0.15 */
        margin: "0px 0px -10% 0px",   /* ← assoupli */
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}