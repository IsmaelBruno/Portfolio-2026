"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ChevronDown, Menu, Moon, Sun, X } from "lucide-react";
import { LANGUAGES, useLanguage } from "@/lib/i18n";
import FlagIcon from "./FlagIcon";

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
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef(null);
  const theme = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getServerThemeSnapshot);
  const reduceMotion = useReducedMotion();
  const { lang, setLang, t } = useLanguage();

  // Fermer le dropdown si on clique ailleurs
  useEffect(() => {
    function handleClickOutside(e) {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
          <span>
            BRUNO ISMAËL RAZAFINDRATSIMBA
            <small>{t.nav.brandSub}</small>
          </span>
        </a>

        {/* Navigation links */}
        <div className="folio-nav-links">
          {t.nav.links.map(([label, href]) => (
            <a href={href} key={href}>
              {label}
            </a>
          ))}
        </div>

        {/* Controls: Language Dropdown + CTA + DarkMode */}
        <div className="folio-nav-actions">
          {/* 🌍 Dropdown langue avec drapeaux SVG */}
          <div className="folio-lang-dropdown" ref={langRef}>
            <button
              type="button"
              className="folio-lang-trigger"
              onClick={() => setLangOpen((v) => !v)}
              aria-haspopup="listbox"
              aria-expanded={langOpen}
              aria-label="Changer de langue"
            >
              <FlagIcon code={lang} />
              <ChevronDown
                size={13}
                className={`folio-lang-chevron ${langOpen ? "is-open" : ""}`}
                aria-hidden="true"
              />
            </button>

            <AnimatePresence>
              {langOpen && (
                <motion.ul
                  className="folio-lang-menu"
                  role="listbox"
                  initial={reduceMotion ? false : { opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
                  transition={{ duration: reduceMotion ? 0 : 0.16 }}
                >
                  {LANGUAGES.map(({ code, label }) => (
                    <li key={code} role="option" aria-selected={lang === code}>
                      <button
                        type="button"
                        className={`folio-lang-option ${lang === code ? "is-active" : ""}`}
                        onClick={() => {
                          setLang(code);
                          setLangOpen(false);
                        }}
                        title={label}
                      >
                        <FlagIcon code={code} />
                        <span className="folio-lang-label">{label}</span>
                        {lang === code && <span className="folio-lang-check">✓</span>}
                      </button>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          <a className="folio-nav-cta" href="#contact">
            {t.nav.cta} <ArrowUpRight aria-hidden="true" size={15} />
          </a>

          <button
            aria-label={theme === "dark" ? t.nav.themeLight : t.nav.themeDark}
            className="folio-theme-toggle"
            onClick={toggleTheme}
            title={theme === "dark" ? t.nav.themeLight : t.nav.themeDark}
            type="button"
          >
            {theme === "dark" ? <Sun aria-hidden="true" size={17} /> : <Moon aria-hidden="true" size={17} />}
          </button>

          <button
            className="folio-menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X aria-hidden="true" size={19} /> : <Menu aria-hidden="true" size={19} />}
          </button>
        </div>

        {/* Mobile menu */}
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
              {/* Mobile language picker avec drapeaux */}
              <div className="mobile-lang-row">
                <span>Language</span>
                <div className="folio-lang-dropdown">
                  <button
                    type="button"
                    className="folio-lang-trigger"
                    onClick={() => setLangOpen((v) => !v)}
                  >
                    <FlagIcon code={lang} />
                    <ChevronDown size={13} className={`folio-lang-chevron ${langOpen ? "is-open" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {langOpen && (
                      <motion.ul
                        className="folio-lang-menu"
                        initial={reduceMotion ? false : { opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
                        transition={{ duration: reduceMotion ? 0 : 0.16 }}
                      >
                        {LANGUAGES.map(({ code, label }) => (
                          <li key={code}>
                            <button
                              type="button"
                              className={`folio-lang-option ${lang === code ? "is-active" : ""}`}
                              onClick={() => {
                                setLang(code);
                                setLangOpen(false);
                              }}
                            >
                              <FlagIcon code={code} />
                              <span className="folio-lang-label">{label}</span>
                              {lang === code && <span className="folio-lang-check">✓</span>}
                            </button>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {t.nav.links.map(([label, href]) => (
                <a href={href} key={href} onClick={() => setMenuOpen(false)}>
                  {label}
                  <ArrowUpRight aria-hidden="true" size={15} />
                </a>
              ))}
              <a className="mobile-contact" href="#contact" onClick={() => setMenuOpen(false)}>
                {t.nav.mobileCta}
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}