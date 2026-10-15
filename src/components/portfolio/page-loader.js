"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { WanderingEyes } from "@/components/loading-ui/wandering-eyes";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Vérifier si la page et les ressources sont totalement chargées
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 600);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      // Timeout de sécurité au cas où un élément réseau tarde
      const fallbackTimer = setTimeout(() => setLoading(false), 2500);
      return () => {
        window.removeEventListener("load", handleLoad);
        clearTimeout(fallbackTimer);
      };
    }
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[var(--background,#fbfcfa)]"
          style={{
            backgroundColor: "var(--surface, #fbfcfa)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center text-center px-4"
          >
            {/* Signature d'ouverture : Monogramme BR */}
            <div
              className="w-14 h-14 rounded-md grid place-items-center mb-5 text-white font-black text-lg tracking-wider shadow-lg shadow-emerald-900/10"
              style={{ backgroundColor: "#2d9b7a" }}
            >
              BR
            </div>

            {/* Titre & Signature */}
            <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-1 text-[var(--ink,#10201d)]">
              Bruno Ismaël{" "}
              <em className="not-italic text-[#2d9b7a]">Razafindratsimba</em>
            </h2>
            <p className="font-mono text-xs uppercase tracking-widest text-slate-500 mb-6">
              Data · Analytics · Engineering
            </p>

            {/* Wandering Eyes en vert */}
            <div className="text-[#2d9b7a] mb-4">
              <WanderingEyes className="h-12 w-[108px]" />
            </div>

            {/* Message de chargement / latence */}
            <p className="font-mono text-xs text-slate-400 tracking-wide animate-pulse">
              Chargement en cours…
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
