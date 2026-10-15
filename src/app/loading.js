import { WanderingEyes } from "@/components/loading-ui/wandering-eyes";

export default function Loading() {
  return (
    <div className="loading-splash">
      <div className="loading-content">
        {/* Signature / branding */}
        <h2 className="loading-title">
          Bruno Ismaël<br />
          <em>Razafindratsimba</em>
        </h2>
        <p className="loading-tagline">Data · Analytics · Engineering</p>

        {/* WanderingEyes loader en vert */}
        <WanderingEyes className="loading-eyes" />

        <p className="loading-hint">Chargement en cours … </p>
      </div>

      <style>{`
        .loading-splash {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--background, #fbfcfa);
          animation: loading-splash-in 400ms ease both;
        }

        .loading-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
          text-align: center;
        }

        .loading-brand-mark {
          display: grid;
          width: 56px;
          aspect-ratio: 1;
          place-items: center;
          margin: 0 0 24px;
          background: #2d9b7a;
          color: #fff;
          font-size: 18px;
          font-weight: 800;
          letter-spacing: 0.02em;
          border-radius: 2px;
          animation: loading-mark-pulse 2s ease-in-out infinite;
        }

        .loading-title {
          margin: 0 0 6px;
          font-size: 22px;
          font-weight: 580;
          letter-spacing: -0.03em;
          line-height: 1.2;
          color: var(--ink, #10201d);
        }

        .loading-title em {
          font-style: normal;
          color: #2d9b7a;
        }

        .loading-tagline {
          margin: 0 0 32px;
          font-family: var(--font-mono, "Courier New", monospace);
          font-size: 10px;
          letter-spacing: 0.06em;
          color: #7a8f85;
          text-transform: uppercase;
        }

        .loading-eyes {
          height: 48px;
          width: 108px;
          color: #2d9b7a;
          margin-bottom: 24px;
        }

        .loading-hint {
          margin: 0;
          font-family: var(--font-mono, "Courier New", monospace);
          font-size: 11px;
          color: #9aada4;
          letter-spacing: 0.02em;
          animation: loading-hint-blink 1.8s ease-in-out infinite;
        }

        @keyframes loading-splash-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes loading-mark-pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(45, 155, 122, 0.25);
          }
          50% {
            box-shadow: 0 0 0 12px rgba(45, 155, 122, 0);
          }
        }

        @keyframes loading-hint-blink {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.4;
          }
        }

        /* Support du thème dark */
        :root[data-theme="dark"] .loading-splash {
          background: var(--background, #101713);
        }

        :root[data-theme="dark"] .loading-title {
          color: var(--ink, #edf1e9);
        }
      `}</style>
    </div>
  );
}
