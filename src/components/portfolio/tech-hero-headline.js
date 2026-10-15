"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function TechHeroHeadline({ line1 = "Making data truly", line2 = "useful." }) {
  const containerRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0, active: false });
  const [activeLetter, setActiveLetter] = useState(null);
  const reduceMotion = useReducedMotion();

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.round(e.clientX - rect.left);
    const y = Math.round(e.clientY - rect.top);
    setCoords({ x, y, active: true });
  };

  const handleMouseLeave = () => {
    setCoords((prev) => ({ ...prev, active: false }));
    setActiveLetter(null);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="tech-headline-container"
    >
      {/* HUD Corner Markers */}
      <span className="hud-corner hud-corner--tl" aria-hidden="true">+</span>
      <span className="hud-corner hud-corner--tr" aria-hidden="true">+</span>
      <span className="hud-corner hud-corner--bl" aria-hidden="true">+</span>
      <span className="hud-corner hud-corner--br" aria-hidden="true">+</span>

      {/* Live Technical Metadata Tag */}
      <div className="tech-hud-badge" aria-hidden="true">
        <span className="hud-dot" />
        <span>SYS.LINEAGE // TYPO.HERO</span>
        {coords.active && (
          <span className="hud-coords">
            [{coords.x}px, {coords.y}px]
          </span>
        )}
      </div>

      {/* Main Editorial Headline */}
      <h1 className="tech-main-headline">
        <span className="tech-line tech-line--1">
          {line1.split("").map((char, i) => (
            <span
              key={`l1-${i}`}
              className={`tech-glyph ${activeLetter === `l1-${i}` ? "is-focused" : ""}`}
              onMouseEnter={() => setActiveLetter(`l1-${i}`)}
              onMouseLeave={() => setActiveLetter(null)}
            >
              {char === " " ? "\u00A0" : char}
              {activeLetter === `l1-${i}` && char !== " " && (
                <span className="tech-glyph-box" aria-hidden="true">
                  <span className="tech-glyph-label">
                    {char} · {char.charCodeAt(0)}
                  </span>
                </span>
              )}
            </span>
          ))}
        </span>

        <span className="tech-line tech-line--2">
          <em className="tech-accent-word">
            {line2.split("").map((char, i) => (
              <span
                key={`l2-${i}`}
                className={`tech-glyph tech-glyph--accent ${activeLetter === `l2-${i}` ? "is-focused" : ""}`}
                onMouseEnter={() => setActiveLetter(`l2-${i}`)}
                onMouseLeave={() => setActiveLetter(null)}
              >
                {char === " " ? "\u00A0" : char}
                {activeLetter === `l2-${i}` && char !== " " && (
                  <span className="tech-glyph-box tech-glyph-box--accent" aria-hidden="true">
                    <span className="tech-glyph-label">
                      {char} · {char.charCodeAt(0)}
                    </span>
                  </span>
                )}
              </span>
            ))}
          </em>
        </span>
      </h1>

      {/* Animated Scanning Laser Line */}
      {!reduceMotion && <div className="tech-scanline" aria-hidden="true" />}
    </div>
  );
}
