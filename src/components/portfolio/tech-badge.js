"use client";

import * as simpleIcons from "simple-icons";

// Dictionnaire des correspondances avec simple-icons
const SIMPLE_ICONS_MAP = {
  // Langages & Runtimes
  Python: "siPython",
  JavaScript: "siJavascript",
  JS: "siJavascript",
  TypeScript: "siTypescript",
  NodeJS: "siNodedotjs",
  "Node.js": "siNodedotjs",
  PHP: "siPhp",
  HTML: "siHtml5",
  HTML5: "siHtml5",
  CSS: "siCss3",
  CSS3: "siCss3",
  Sass: "siSass",
  JQuery: "siJquery",

  // Frameworks & Libs
  React: "siReact",
  ReactJS: "siReact",
  NestJS: "siNestjs",
  GraphQL: "siGraphql",
  Flask: "siFlask",
  FastAPI: "siFastapi",

  // Data Engineering & Pipelines
  "Apache NiFi": "siApachenifi",
  NiFi: "siApachenifi",
  "Apache Airflow": "siApacheairflow",
  Airflow: "siApacheairflow",
  "Apache Kafka": "siApachekafka",
  Kafka: "siApachekafka",
  Talend: "siTalend",
  "Talend DI": "siTalend",
  "Talend ESB": "siTalend",
  Polars: "siPolars",
  pandas: "siPandas",
  NumPy: "siNumpy",
  n8n: "siN8n",
  Docker: "siDocker",
  Git: "siGit",
  GitHub: "siGithub",

  // Bases de données
  PostgreSQL: "siPostgresql",
  MySQL: "siMysql",
  MongoDB: "siMongodb",
  SQLite: "siSqlite",
  ChromaDB: "siChroma",

  // Data Science & IA
  TensorFlow: "siTensorflow",
  "TensorFlow / Keras": "siTensorflow",
  Keras: "siKeras",
  "scikit-learn": "siScikitlearn",
  Gradio: "siGradio",
  Gradios: "siGradio",
  Transformers: "siHuggingface",
  "Hugging Face": "siHuggingface",
  Matplotlib: "siPlotly",
};

// Icônes SVG personnalisées pour les outils qui ne sont pas dans simple-icons
const CUSTOM_ICONS = {
  "Power BI": {
    hex: "F2C811",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3zm6 6a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3zM6 14a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  "Power BI Desktop": {
    hex: "F2C811",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3zm6 6a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3zM6 14a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  "Power BI Service": {
    hex: "F2C811",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z" />
      </svg>
    ),
  },
  Excel: {
    hex: "107C41",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M21.17 3.25H7.83A1.83 1.83 0 0 0 6 5.08v2.92H2.83A1.83 1.83 0 0 0 1 9.83v8.34A1.83 1.83 0 0 0 2.83 20H6v-.08a1.83 1.83 0 0 0 1.83 1.83h13.34A1.83 1.83 0 0 0 23 19.92V5.08a1.83 1.83 0 0 0-1.83-1.83zm-13.34 3.5h13.5v12.5H7.83V6.75zM2.67 18.33V9.67h3.5v8.66h-3.5zm7.33-8.83h1.83l1.92 3.5 1.92-3.5h1.83l-2.83 4.75 2.92 5h-1.84l-2-3.67-2 3.67H9.92l2.92-4.92-2.84-4.83z" />
      </svg>
    ),
  },
  "Excel avancé": {
    hex: "107C41",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M21.17 3.25H7.83A1.83 1.83 0 0 0 6 5.08v2.92H2.83A1.83 1.83 0 0 0 1 9.83v8.34A1.83 1.83 0 0 0 2.83 20H6v-.08a1.83 1.83 0 0 0 1.83 1.83h13.34A1.83 1.83 0 0 0 23 19.92V5.08a1.83 1.83 0 0 0-1.83-1.83zm-13.34 3.5h13.5v12.5H7.83V6.75zM2.67 18.33V9.67h3.5v8.66h-3.5zm7.33-8.83h1.83l1.92 3.5 1.92-3.5h1.83l-2.83 4.75 2.92 5h-1.84l-2-3.67-2 3.67H9.92l2.92-4.92-2.84-4.83z" />
      </svg>
    ),
  },
  "Power Query": {
    hex: "008272",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <path d="M11 8v6M8 11h6" />
      </svg>
    ),
  },
  "Power Pivot": {
    hex: "107C41",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
  },
  "Power Automate": {
    hex: "0066FF",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  DAX: {
    hex: "F2C811",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 20h16M4 4l8 16L20 4" />
      </svg>
    ),
  },
  SQL: {
    hex: "336791",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  SSMS: {
    hex: "CC292B",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  SFTP: {
    hex: "2d9b7a",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
  },
  "Apache Hop": {
    hex: "D22B27",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="6" r="3" />
        <circle cx="18" cy="18" r="3" />
        <path d="M8.7 10.6l6.6-3.2m-6.6 6l6.6 3.2" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  KNN: {
    hex: "8b5cf6",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <circle cx="4" cy="6" r="2" />
        <circle cx="20" cy="6" r="2" />
        <circle cx="5" cy="19" r="2" />
        <circle cx="19" cy="18" r="2" />
      </svg>
    ),
  },
  CNN: {
    hex: "06b6d4",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  "K-means": {
    hex: "ec4899",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="7" cy="7" r="3" />
        <circle cx="17" cy="9" r="3" />
        <circle cx="12" cy="17" r="3" />
      </svg>
    ),
  },
  TinyLlama: {
    hex: "f59e0b",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4M8 10h8m-4 4v4" />
      </svg>
    ),
  },
};

/**
 * Trouve l'icône correspondante à un nom de technologie
 */
export function getTechIconData(name) {
  if (!name) return null;
  const clean = name.trim();

  // 1. Recherche directe dans simple-icons
  const exportName = SIMPLE_ICONS_MAP[clean];
  if (exportName && simpleIcons[exportName]) {
    const icon = simpleIcons[exportName];
    return {
      type: "simple-icon",
      hex: icon.hex,
      path: icon.path,
    };
  }

  // 2. Recherche insensible à la casse dans simple-icons
  const normalized = clean.toLowerCase().replace(/[^a-z0-9]/g, "");
  for (const [key, exp] of Object.entries(SIMPLE_ICONS_MAP)) {
    if (key.toLowerCase().replace(/[^a-z0-9]/g, "") === normalized) {
      if (simpleIcons[exp]) {
        return {
          type: "simple-icon",
          hex: simpleIcons[exp].hex,
          path: simpleIcons[exp].path,
        };
      }
    }
  }

  // 3. Recherche dans les icônes personnalisées
  if (CUSTOM_ICONS[clean]) {
    return {
      type: "custom",
      hex: CUSTOM_ICONS[clean].hex,
      element: CUSTOM_ICONS[clean].svg,
    };
  }

  // 4. Recherche par préfixe / fallback
  for (const [key, iconData] of Object.entries(CUSTOM_ICONS)) {
    if (clean.toLowerCase().includes(key.toLowerCase())) {
      return {
        type: "custom",
        hex: iconData.hex,
        element: iconData.svg,
      };
    }
  }

  return null;
}

/**
 * Composant de badge technologique avec icône + texte
 */
export function TechBadge({ name, className = "" }) {
  const icon = getTechIconData(name);

  return (
    <span className={`tech-badge ${className}`.trim()}>
      {icon ? (
        <span
          className="tech-badge-icon"
          style={{ color: `#${icon.hex}` }}
          aria-hidden="true"
        >
          {icon.type === "simple-icon" ? (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d={icon.path} />
            </svg>
          ) : (
            icon.element
          )}
        </span>
      ) : null}
      <span className="tech-badge-text">{name}</span>
    </span>
  );
}

/**
 * Liste de badges
 */
export function TechBadgesList({ names = [], className = "" }) {
  if (!names || names.length === 0) return null;
  return (
    <div className={`tech-badges-list ${className}`.trim()}>
      {names.map((name) => (
        <TechBadge key={name} name={name} />
      ))}
    </div>
  );
}
