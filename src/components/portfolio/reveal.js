"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Reveal({ children, className = "", delay = 0, once = true }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.16 }}
      transition={{ duration: reduceMotion ? 0 : 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}