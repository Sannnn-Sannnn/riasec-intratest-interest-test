"use client";

import { TestItem, scaleOptions, AnswerOption, riasecColors } from "@/lib/riasec-data";
import { cn } from "@/lib/utils";
import VisualPlaceholder from "./VisualPlaceholder";

interface VisualActivityCardProps {
  item: TestItem;
  selectedValue: number | undefined;
  onAnswer: (value: number) => void;
}

const pillColors = [
  "border-slate-300 bg-slate-100 hover:bg-slate-200 data-[selected=true]:bg-slate-500 data-[selected=true]:border-slate-500 data-[selected=true]:text-white",
  "border-sky-300 bg-sky-50 hover:bg-sky-100 data-[selected=true]:bg-sky-400 data-[selected=true]:border-sky-400 data-[selected=true]:text-white",
  "border-amber-300 bg-amber-50 hover:bg-amber-100 data-[selected=true]:bg-amber-400 data-[selected=true]:border-amber-400 data-[selected=true]:text-white",
  "border-teal-300 bg-teal-50 hover:bg-teal-100 data-[selected=true]:bg-teal-500 data-[selected=true]:border-teal-500 data-[selected=true]:text-white",
  "border-green-400 bg-green-50 hover:bg-green-100 data-[selected=true]:bg-green-500 data-[selected=true]:border-green-500 data-[selected=true]:text-white",
];

export default function VisualActivityCard({
  item,
  selectedValue,
  onAnswer,
}: VisualActivityCardProps) {
  const colors = riasecColors[item.riasec];

  return (
    <div className="flex flex-col gap-6">
      {/* Activity description + image in one card */}
      <div className={cn("rounded-2xl border-2 overflow-hidden", colors.border, colors.bg)}>
        {item.imageSrc ? (
          <div className="flex justify-center border-b border-current/10">
            <img
              src={item.imageSrc}
              alt={item.visualBrief ?? item.activity ?? "Escena de actividad"}
              className="w-3/4 object-contain aspect-square"
            />
          </div>
        ) : item.visualBrief ? (
          <div className="border-b border-current/10">
            <VisualPlaceholder type={item.riasec} visualBrief={item.visualBrief} />
          </div>
        ) : null}

        <div className="p-5 sm:p-6">
          <p className="text-sm font-medium text-muted-foreground mb-2">
            {item.question}
          </p>
          <p className="text-lg sm:text-xl font-bold text-foreground leading-snug text-balance">
            {item.activity}
          </p>
        </div>
      </div>

      {/* Scale options */}
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
