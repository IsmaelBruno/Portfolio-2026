"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";

const links = [
  ["Accueil", "#accueil"],
  ["Services", "#services"],
  ["Projets", "#projets"],
  ["Compétences", "#competences"],
  ["À propos", "#a-propos"],
];

function subscribeTheme(onChange) {
  window.addEventListener("folio-theme-change", onChange);
  return () => window.removeEventListener("folio-theme-change", onChange);
}

function getThemeSnapshot() {
  return document.documentElement.dataset.theme || "light";
}

function getServerThemeSnapshot() {
  return "light";
}

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getServerThemeSnapshot);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("bruno-portfolio-theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const nextTheme = savedTheme || systemTheme;

    document.documentElement.dataset.theme = nextTheme;
    window.dispatchEvent(new Event("folio-theme-change"));
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("bruno-portfolio-theme", nextTheme);
    window.dispatchEvent(new Event("folio-theme-change"));
  }

  return (
    <header className="folio-header">
      <nav className="folio-container folio-nav" aria-label="Navigation principale">
        <a className="folio-brand" href="#accueil" onClick={() => setMenuOpen(false)}>
          <span className="folio-brand-mark">BR</span>
          <span>BRUNO ISMAËL RAZAFINDRATSIMBA<small>DATA ENTHUSIAT</small></span>
        </a>
        <div className="folio-nav-links">
          {links.map(([label, href]) => (
            <a href={href} key={href}>{label}</a>
          ))}
        </div>
        <a className="folio-nav-cta" href="#contact">Échangeons <ArrowUpRight aria-hidden="true" size={15} /></a>
        <button
          aria-label={theme === "dark" ? "Activer le thème clair" : "Activer le thème nuit"}
          className="folio-theme-toggle"
          onClick={toggleTheme}
          title={theme === "dark" ? "Thème clair" : "Thème nuit"}
          type="button"
        >
          {theme === "dark" ? <Sun aria-hidden="true" size={17} /> : <Moon aria-hidden="true" size={17} />}
        </button>
        <button
          className="folio-menu-toggle"
          type="button"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X aria-hidden="true" size={19} /> : <Menu aria-hidden="true" size={19} />}
        </button>
        <AnimatePresence initial={false}>
          {menuOpen && (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="folio-mobile-nav"
              exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
              id="mobile-navigation"
              initial={reduceMotion ? false : { opacity: 0, y: -8 }}
              transition={{ duration: reduceMotion ? 0 : 0.18 }}
            >
              {links.map(([label, href]) => (
                <a href={href} key={href} onClick={() => setMenuOpen(false)}>{label}<ArrowUpRight aria-hidden="true" size={15} /></a>
              ))}
              <a className="mobile-contact" href="#contact" onClick={() => setMenuOpen(false)}>Discutons de votre projet</a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}