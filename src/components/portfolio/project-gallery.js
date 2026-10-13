"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const filters = ["Tout", "Analytics & BI", "Data Engineering", "Data Science", "IA & automatisation"];

function ProjectDiagram({ type }) {
  if (type === "pipeline") {
    return (
      <svg viewBox="0 0 420 220" aria-hidden="true">
        <path className="diagram-path" d="M63 110 H356" />
        <path className="diagram-path diagram-path--dotted" d="M63 110 H356" />
        {[[63, "ATG"], [208, "NiFi"], [356, "POSTGRES"]].map(([x, label]) => (
          <g className="diagram-node" key={label} transform={`translate(${x} 110)`}>
            <circle r="31" /><text y="4">{label}</text>
          </g>
        ))}
        <text className="diagram-annotation" x="208" y="174" textAnchor="middle">TANKMASTER · PYTHON · POLARS</text>
      </svg>
    );
  }

  if (type === "reconcile") {
    return (
      <svg viewBox="0 0 420 220" aria-hidden="true">
        <path className="diagram-path diagram-path--dotted" d="M96 68 C190 68 188 110 292 110 M96 152 C190 152 188 110 292 110" />
        <circle className="diagram-source" cx="76" cy="68" r="31" /><text className="diagram-label" x="76" y="72">ATG</text>
        <circle className="diagram-source" cx="76" cy="152" r="31" /><text className="diagram-label" x="76" y="156">JDE</text>
        <rect className="diagram-match" x="273" y="80" width="104" height="60" rx="2" />
        <text className="diagram-label" x="325" y="106">RAPPROCHER</text><text className="diagram-annotation" x="325" y="124">CLÉS · ÉCARTS</text>
      </svg>
    );
  }

  if (type === "dashboard") {
    return (
      <svg viewBox="0 0 420 220" aria-hidden="true">
        <path className="diagram-grid" d="M46 46 H382 M46 88 H382 M46 130 H382 M46 172 H382" />
        {[70, 113, 156, 199, 242, 285, 328, 371].map((x, i) => (
          <rect className={`diagram-bar${i % 3 === 0 ? " diagram-bar--accent" : ""}`} key={x} x={x} y={170 - [45, 83, 59, 110, 75, 133, 94, 121][i]} width="17" height={[45, 83, 59, 110, 75, 133, 94, 121][i]} />
        ))}
        <path className="diagram-trend" d="M66 130 C114 115 125 119 158 98 S225 110 254 79 S320 82 374 46" />
        <text className="diagram-annotation" x="46" y="197">VENTES / POWER QUERY → POWER BI</text>
      </svg>
    );
  }

  if (type === "model") {
    return (
      <svg viewBox="0 0 420 220" aria-hidden="true">
        <g className="matrix" transform="translate(104 34)">
          {Array.from({ length: 25 }, (_, i) => (
            <rect className={(i * 7 + 3) % 5 < 2 ? "matrix-cell matrix-cell--active" : "matrix-cell"} key={i} x={(i % 5) * 35} y={Math.floor(i / 5) * 29} width="25" height="20" />
          ))}
        </g>
        <text className="diagram-annotation" x="280" y="69">KNN</text>
        <text className="diagram-label" x="280" y="92">DISTANCE</text>
        <path className="diagram-path diagram-path--dotted" d="M280 108 H354 V151 H280" />
        <text className="diagram-annotation" x="280" y="173">CLASSE · GRADIO</text>
      </svg>
    );
  }

  if (type === "rag") {
    return (
      <svg viewBox="0 0 420 220" aria-hidden="true">
        <path className="diagram-path diagram-path--dotted" d="M82 111 H152 M201 111 H261 M310 111 H366" />
        <rect className="diagram-doc" x="42" y="77" width="42" height="62" rx="1" />
        <path className="diagram-doc-lines" d="M52 94 H73 M52 105 H73 M52 116 H68" />
        <circle className="diagram-source" cx="177" cy="111" r="27" /><text className="diagram-label" x="177" y="115">RAG</text>
        <circle className="diagram-vector" cx="286" cy="111" r="27" /><text className="diagram-label" x="286" y="115">DB</text>
        <rect className="diagram-match" x="355" y="87" width="39" height="48" rx="1" />
        <text className="diagram-annotation" x="177" y="169" textAnchor="middle">CHUNK · RETRIEVE · ANSWER</text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 420 220" aria-hidden="true">
      <path className="diagram-path diagram-path--dotted" d="M72 110 H164 M211 110 H302 M350 110 H383" />
      <circle className="diagram-source" cx="72" cy="110" r="29" /><text className="diagram-label" x="72" y="114">MAIL</text>
      <rect className="diagram-match" x="144" y="79" width="78" height="62" rx="2" />
      <text className="diagram-label" x="183" y="106">VALIDER</text><text className="diagram-annotation" x="183" y="124">n8n</text>
      <circle className="diagram-vector" cx="326" cy="110" r="29" /><text className="diagram-label" x="326" y="114">RÉPONSE</text>
      <text className="diagram-annotation" x="212" y="180" textAnchor="middle">TRIGGER → CONDITION → ACTION</text>
    </svg>
  );
}

export default function ProjectGallery({ projects }) {
  const [activeFilter, setActiveFilter] = useState("Tout");
  const reduceMotion = useReducedMotion();
  const visibleProjects = activeFilter === "Tout"
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="case-gallery">
      <div className="case-toolbar">
        <div className="case-filters" aria-label="Filtrer les études de cas">
          {filters.map((filter) => (
            <button
              aria-pressed={activeFilter === filter}
              className={activeFilter === filter ? "case-filter is-active" : "case-filter"}
              key={filter}
              onClick={() => setActiveFilter(filter)}
              type="button"
            >
              {filter}
            </button>
          ))}
        </div>
        <span className="case-count">{String(visibleProjects.length).padStart(2, "0")} ÉTUDES</span>
      </div>
      <motion.div className="case-list" layout>
        <AnimatePresence mode="popLayout" initial={false}>
          {visibleProjects.map((project, index) => (
            <motion.article
              className="case-study"
              key={project.id}
              layout
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: reduceMotion ? 0 : 0.32, delay: reduceMotion ? 0 : index * 0.035 }}
            >
              <div className="case-index"><span>{String(index + 1).padStart(2, "0")}</span><span>{project.category}</span></div>
              <div className="case-art"><ProjectDiagram type={project.visual} /><span className="case-year">ÉTUDE / {String(index + 1).padStart(2, "0")}</span></div>
              <div className="case-content">
                <div className="case-titleline">
                  <div><span className={`status-dot status-dot--${project.status.startsWith("Réalisé") ? "done" : project.status.startsWith("Prototype") ? "prototype" : project.status.startsWith("Statut à confirmer") ? "pending" : "active"}`} />{project.status}</div>
                  <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.5} />
                </div>
                <h3>{project.title}</h3>
                <dl className="case-details">
                  <div><dt>Contexte</dt><dd>{project.context}</dd></div>
                  <div><dt>Démarche</dt><dd>{project.approach}</dd></div>
                  <div><dt>Livrable / état</dt><dd>{project.outcome}</dd></div>
                </dl>
                <ul className="case-stack" aria-label="Technologies et méthodes">
                  {project.stack.map((tool) => <li key={tool}>{tool}</li>)}
                </ul>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}