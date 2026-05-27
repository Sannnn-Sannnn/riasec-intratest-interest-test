"use client";

import { RiasecType, riasecColors } from "@/lib/riasec-data";

// SVG icon shapes for each RIASEC type — abstract, illustrated-style
const RiasecIcon = ({ type }: { type: RiasecType }) => {
  const iconMap: Record<RiasecType, React.ReactNode> = {
    R: (
      <svg viewBox="0 0 80 80" fill="none" className="w-full h-full" aria-hidden="true">
        <circle cx="40" cy="40" r="38" fill="#FEF3C7" />
        <rect x="22" y="44" width="36" height="10" rx="4" fill="#D97706" opacity="0.7" />
        <rect x="34" y="26" width="12" height="22" rx="3" fill="#F59E0B" opacity="0.8" />
        <circle cx="26" cy="36" r="6" fill="#FBBF24" opacity="0.9" />
        <circle cx="54" cy="36" r="6" fill="#FBBF24" opacity="0.9" />
        <rect x="36" y="20" width="8" height="8" rx="2" fill="#D97706" />
      </svg>
    ),
    I: (
      <svg viewBox="0 0 80 80" fill="none" className="w-full h-full" aria-hidden="true">
        <circle cx="40" cy="40" r="38" fill="#E0F2FE" />
        <circle cx="40" cy="34" r="14" fill="#38BDF8" opacity="0.4" />
        <circle cx="40" cy="34" r="9" fill="#0EA5E9" opacity="0.6" />
        <circle cx="40" cy="34" r="4" fill="#0369A1" opacity="0.9" />
        <rect x="37" y="48" width="6" height="3" rx="1.5" fill="#0369A1" opacity="0.7" />
        <rect x="37" y="53" width="6" height="2" rx="1" fill="#0369A1" opacity="0.5" />
        <path d="M24 60 Q40 52 56 60" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />
      </svg>
    ),
    A: (
      <svg viewBox="0 0 80 80" fill="none" className="w-full h-full" aria-hidden="true">
        <circle cx="40" cy="40" r="38" fill="#FFF1F2" />
        <ellipse cx="32" cy="38" rx="10" ry="14" fill="#FDA4AF" opacity="0.7" transform="rotate(-15 32 38)" />
        <ellipse cx="48" cy="38" rx="10" ry="14" fill="#FB7185" opacity="0.5" transform="rotate(15 48 38)" />
        <circle cx="40" cy="30" r="8" fill="#F43F5E" opacity="0.8" />
        <circle cx="40" cy="30" r="4" fill="#BE123C" opacity="0.9" />
        <path d="M30 56 Q40 48 50 56" stroke="#FDA4AF" strokeWidth="3" strokeLinecap="round" fill="none" />
      </svg>
    ),
    S: (
      <svg viewBox="0 0 80 80" fill="none" className="w-full h-full" aria-hidden="true">
        <circle cx="40" cy="40" r="38" fill="#F0FDF4" />
        <circle cx="30" cy="34" r="10" fill="#86EFAC" opacity="0.7" />
        <circle cx="50" cy="34" r="10" fill="#4ADE80" opacity="0.6" />
        <path d="M20 52 Q30 44 40 50 Q50 44 60 52" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.8" />
        <circle cx="30" cy="34" r="5" fill="#16A34A" opacity="0.5" />
        <circle cx="50" cy="34" r="5" fill="#16A34A" opacity="0.5" />
      </svg>
    ),
    E: (
      <svg viewBox="0 0 80 80" fill="none" className="w-full h-full" aria-hidden="true">
        <circle cx="40" cy="40" r="38" fill="#FFF7ED" />
        <polygon points="40,18 52,36 48,36 52,58 28,42 32,42 28,18" fill="#FB923C" opacity="0.8" />
        <polygon points="40,22 50,36 46,36 50,54 30,40 34,40 30,22" fill="#F97316" opacity="0.5" />
        <circle cx="40" cy="40" r="5" fill="#EA580C" opacity="0.9" />
      </svg>
    ),
    C: (
      <svg viewBox="0 0 80 80" fill="none" className="w-full h-full" aria-hidden="true">
        <circle cx="40" cy="40" r="38" fill="#EEF2FF" />
        <rect x="22" y="24" width="36" height="8" rx="3" fill="#818CF8" opacity="0.6" />
        <rect x="22" y="36" width="36" height="8" rx="3" fill="#6366F1" opacity="0.7" />
        <rect x="22" y="48" width="36" height="8" rx="3" fill="#4F46E5" opacity="0.8" />
        <rect x="26" y="26" width="10" height="4" rx="1.5" fill="#C7D2FE" />
        <rect x="26" y="38" width="14" height="4" rx="1.5" fill="#C7D2FE" />
        <rect x="26" y="50" width="8" height="4" rx="1.5" fill="#C7D2FE" />
      </svg>
    ),
  };

  return iconMap[type];
};

interface VisualPlaceholderProps {
  type: RiasecType;
  visualBrief: string;
}

export default function VisualPlaceholder({ type, visualBrief }: VisualPlaceholderProps) {
  const colors = riasecColors[type];

  return (
    <div
      className={`rounded-2xl border-2 ${colors.border} ${colors.bg} p-6 flex flex-col items-center gap-4`}
      role="img"
      aria-label={`Ilustración: ${visualBrief}`}
    >
      {/* Icon */}
      <div className="w-24 h-24 drop-shadow-sm">
        <RiasecIcon type={type} />
      </div>

      {/* Brief caption */}
      <p className={`text-center text-sm font-medium ${colors.text} leading-relaxed max-w-xs`}>
        {visualBrief}
      </p>

      {/* Decorative dots */}
      <div className="flex gap-1.5 mt-1">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={`w-1.5 h-1.5 rounded-full ${colors.text} opacity-40`}
            style={{ background: "currentColor" }}
          />
        ))}
      </div>
    </div>
  );
}
