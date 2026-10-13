"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "framer-motion";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function DataFlow() {
  const graphic = useRef(null);
  const reduceMotion = useReducedMotion();

  useGSAP(() => {
    if (reduceMotion || !graphic.current) return;

    const route = graphic.current.querySelector(".flow-route-active");
    const length = route.getTotalLength();
    gsap.set(route, { strokeDasharray: length, strokeDashoffset: length });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: graphic.current,
        start: "top 82%",
        once: true,
      },
    });

    timeline
      .to(route, { strokeDashoffset: 0, duration: 1.25, ease: "power2.inOut" })
      .fromTo(
        graphic.current.querySelectorAll(".flow-node"),
        { autoAlpha: 0, scale: 0.86, transformOrigin: "center" },
        { autoAlpha: 1, scale: 1, duration: 0.32, stagger: 0.11, ease: "back.out(1.5)" },
        "-=0.62",
      );
  }, { scope: graphic, dependencies: [reduceMotion], revertOnUpdate: true });

  return (
    <div className="flow-canvas" ref={graphic}>
      <div className="flow-caption"><span>DATA LINEAGE / 01</span><span>DE LA SOURCE À L’USAGE</span></div>
      <svg className="flow-svg" viewBox="0 0 580 420" role="img" aria-labelledby="flow-title flow-description">
        <title id="flow-title">Chaîne de traitement des données</title>
        <desc id="flow-description">Des sources opérationnelles sont intégrées, contrôlées et transformées pour produire des analyses et des modèles.</desc>
        <defs>
          <marker id="flow-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
          </marker>
        </defs>
        <path className="flow-route" d="M80 112 C155 112 150 208 238 208 S325 93 405 93 S449 208 506 208 S452 323 370 323 S159 302 94 302" />
        <path className="flow-route-active" d="M80 112 C155 112 150 208 238 208 S325 93 405 93 S449 208 506 208 S452 323 370 323 S159 302 94 302" markerEnd="url(#flow-arrow)" />
        <g className="flow-node flow-node--source" transform="translate(80 112)">
          <circle r="37" /><text y="-2">SOURCES</text><text className="flow-node-sub" y="13">ERP · ATG</text>
        </g>
        <g className="flow-node flow-node--transform" transform="translate(238 208)">
          <circle r="42" /><text y="-2">INTÉGRER</text><text className="flow-node-sub" y="13">NiFi · Python</text>
        </g>
        <g className="flow-node flow-node--store" transform="translate(405 93)">
          <circle r="39" /><text y="-2">FIABILISER</text><text className="flow-node-sub" y="13">Polars · SQL</text>
        </g>
        <g className="flow-node flow-node--model" transform="translate(506 208)">
          <circle r="37" /><text y="-2">MODÉLISER</text><text className="flow-node-sub" y="13">ML · RAG</text>
        </g>
        <g className="flow-node flow-node--output" transform="translate(370 323)">
          <circle r="40" /><text y="-2">RESTITUER</text><text className="flow-node-sub" y="13">BI · décision</text>
        </g>
        <g className="flow-node flow-node--source" transform="translate(94 302)">
          <circle r="34" /><text y="-2">COMPRENDRE</text><text className="flow-node-sub" y="13">métier</text>
        </g>
        <text className="flow-note" x="20" y="394">UN MÊME FIL : QUALITÉ → CONTEXTE → DÉCISION</text>
      </svg>
    </div>
  );
}