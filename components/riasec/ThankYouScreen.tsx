"use client";

import { RiasecResult } from "@/lib/riasec-data";
import { cn } from "@/lib/utils";

// Debug flag — set to true only during development to inspect results
const showDebugResults = false;

interface ThankYouScreenProps {
  result: RiasecResult;
  onRestart: () => void;
}

export default function ThankYouScreen({ result, onRestart }: ThankYouScreenProps) {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-12">
      {/* Completion icon */}
      <div className="mb-8 flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/30">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-10 h-10 text-primary"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      <div className="w-full max-w-lg text-center">
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary/70 mb-3">
          Recorrido completado
        </span>

        <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-foreground mb-6 text-balance leading-tight">
          Gracias por completar el recorrido
        </h1>

        {/* Main info card */}
        <div className="bg-card rounded-2xl border border-border shadow-sm p-6 sm:p-8 mb-6 text-left">
          <p className="text-foreground/85 text-base leading-relaxed mb-5">
            Tus respuestas fueron registradas correctamente. Esta información
            será utilizada como parte del proceso de orientación vocacional.
          </p>

        </div>

        {/* Restart */}
        <button
          onClick={onRestart}
          className={cn(
            "w-full py-4 rounded-2xl font-bold text-base tracking-wide transition-all duration-150",
            "bg-primary text-primary-foreground",
            "hover:opacity-90 active:scale-[0.98]",
            "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
            "shadow-md hover:shadow-lg"
          )}
        >
          Finalizar
        </button>
      </div>

      {/* RIASEC decoration */}
      <div className="mt-16 flex items-center gap-2 opacity-20">
        {["R", "I", "A", "S", "E", "C"].map((l) => (
          <span
            key={l}
            className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold"
          >
            {l}
          </span>
        ))}
      </div>

      {/* ── Debug panel (hidden by default) ─────────────────────────────────── */}
      {showDebugResults && (
        <details className="mt-12 w-full max-w-lg">
          <summary className="cursor-pointer text-xs text-muted-foreground font-mono select-none">
            [DEV] Ver resultado interno (showDebugResults = true)
          </summary>
          <pre className="mt-3 bg-muted rounded-xl p-4 text-xs text-muted-foreground overflow-auto text-left leading-relaxed">
            {JSON.stringify(result, null, 2)}
          </pre>
        </details>
      )}
    </main>
  );
}
