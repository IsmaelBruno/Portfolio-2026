"use client";

const FLAG_SVGS = {
  fr: (
    <svg viewBox="0 0 3 2" width="20" height="14" aria-hidden="true">
      <rect width="1" height="2" fill="#002395" />
      <rect x="1" width="1" height="2" fill="#fff" />
      <rect x="2" width="1" height="2" fill="#ED2939" />
    </svg>
  ),
  en: (
    <svg viewBox="0 0 60 30" width="20" height="14" aria-hidden="true">
      <clipPath id="flag-gb-clip">
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <path d="M0,0 v30 h60 v-30 z" fill="#00247d" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path
        d="M0,0 L60,30 M60,0 L0,30"
        clipPath="url(#flag-gb-clip)"
        stroke="#cf142b"
        strokeWidth="4"
      />
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#cf142b" strokeWidth="6" />
    </svg>
  ),
  mg: (
    <svg viewBox="0 0 3 2" width="20" height="14" aria-hidden="true">
      <rect width="3" height="2" fill="#FC3D32" />
      <rect width="3" height="1" y="1" fill="#007E3A" />
      <rect width="1" height="2" fill="#fff" />
    </svg>
  ),
};

export default function FlagIcon({ code, className = "" }) {
  const svg = FLAG_SVGS[code];
  if (!svg) return null;
  return (
    <span className={`flag-icon ${className}`.trim()} aria-hidden="true">
      {svg}
    </span>
  );
}