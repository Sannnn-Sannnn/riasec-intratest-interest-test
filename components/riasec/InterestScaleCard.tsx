"use client";

import { TestItem, scaleOptions, AnswerOption, riasecColors } from "@/lib/riasec-data";
import { cn } from "@/lib/utils";

interface InterestScaleCardProps {
  item: TestItem;
  selectedValue: number | undefined;
  onAnswer: (value: number) => void;
}

// Pill color progression: cold → neutral → warm
const pillColors = [
  // value 0 — "No me gustaría nada"
  "border-slate-300 bg-slate-100 hover:bg-slate-200 data-[selected=true]:bg-slate-500 data-[selected=true]:border-slate-500 data-[selected=true]:text-white",
  // value 1 — "Me gustaría poco"
  "border-sky-300 bg-sky-50 hover:bg-sky-100 data-[selected=true]:bg-sky-400 data-[selected=true]:border-sky-400 data-[selected=true]:text-white",
  // value 2 — "Me da igual / no sé"
  "border-amber-300 bg-amber-50 hover:bg-amber-100 data-[selected=true]:bg-amber-400 data-[selected=true]:border-amber-400 data-[selected=true]:text-white",
  // value 3 — "Me gustaría"
  "border-teal-300 bg-teal-50 hover:bg-teal-100 data-[selected=true]:bg-teal-500 data-[selected=true]:border-teal-500 data-[selected=true]:text-white",
  // value 4 — "Me gustaría mucho"
  "border-green-400 bg-green-50 hover:bg-green-100 data-[selected=true]:bg-green-500 data-[selected=true]:border-green-500 data-[selected=true]:text-white",
];

export default function InterestScaleCard({
  item,
  selectedValue,
  onAnswer,
}: InterestScaleCardProps) {
  const colors = riasecColors[item.riasec];

  return (
    <div className="flex flex-col gap-6">
      {/* Activity card */}
      <div className={cn("rounded-2xl border-2 p-6 sm:p-8", colors.border, colors.bg)}>
        <p className="text-sm font-medium text-muted-foreground mb-3">
          {item.question}
        </p>

        <p className="text-xl sm:text-2xl font-bold text-foreground leading-snug text-balance">
          {item.activity}
        </p>
      </div>

      {/* Scale pills */}
      <div className="flex flex-col gap-3">
        {scaleOptions.map((option: AnswerOption, idx) => (
          <button
            key={option.value}
            onClick={() => onAnswer(option.value)}
            data-selected={selectedValue === option.value}
            className={cn(
              "w-full py-4 px-5 rounded-2xl border-2 font-semibold text-base text-left",
              "transition-all duration-150 cursor-pointer active:scale-[0.98]",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
              pillColors[idx],
              selectedValue !== undefined && selectedValue !== option.value
                ? "opacity-40"
                : "opacity-100"
            )}
          >
            <span className="flex items-center gap-3">
              <span
                className={cn(
                  "w-7 h-7 rounded-full border-2 flex items-center justify-center text-sm font-bold shrink-0",
                  selectedValue === option.value
                    ? "border-white bg-white/30 text-white"
                    : "border-current text-current opacity-50"
                )}
              >
                {idx + 1}
              </span>
              {option.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
