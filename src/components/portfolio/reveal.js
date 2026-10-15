"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 35,
  once = true,
}) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, { once, amount: 0, margin: "0px 0px -10% 0px" });
  const [forceVisible, setForceVisible] = useState(false);

  // Fallback : si après 1.5s l'élément n'est toujours pas détecté,
  // on force l'affichage (utile pour les gros conteneurs sur mobile)
  useEffect(() => {
    const timer = setTimeout(() => setForceVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const visible = inView || forceVisible;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y }}
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