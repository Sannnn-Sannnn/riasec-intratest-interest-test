"use client";

import { TestItem, occupationOptions, AnswerOption, riasecColors } from "@/lib/riasec-data";
import { cn } from "@/lib/utils";

interface OccupationCardProps {
  item: TestItem;
  selectedValue: number | undefined;
  onAnswer: (value: number) => void;
}

const optionStyles: Record<number, string> = {
  4: "border-green-300 bg-green-50 hover:bg-green-100 data-[selected=true]:bg-green-500 data-[selected=true]:border-green-500 data-[selected=true]:text-white",
  2: "border-amber-300 bg-amber-50 hover:bg-amber-100 data-[selected=true]:bg-amber-400 data-[selected=true]:border-amber-400 data-[selected=true]:text-white",
  0: "border-rose-300 bg-rose-50 hover:bg-rose-100 data-[selected=true]:bg-rose-400 data-[selected=true]:border-rose-400 data-[selected=true]:text-white",
};

export default function OccupationCard({
  item,
  selectedValue,
  onAnswer,
}: OccupationCardProps) {
  const colors = riasecColors[item.riasec];

  return (
    <div className="flex flex-col gap-6">
      {/* Occupation hero card */}
      <div className={cn("rounded-2xl border-2 p-6 sm:p-8", colors.border, colors.bg)}>
        <p className="text-sm font-medium text-muted-foreground mb-3">
          {item.question}
        </p>

        {/* Occupation name — main hero element */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-4 text-balance leading-tight">
          {item.occupation}
        </h2>

        {/* Description */}
        {item.description && (
          <div className="flex items-start gap-3">
            <div
              className={cn(
                "w-1 self-stretch rounded-full shrink-0 mt-0.5",
                colors.text,
                "opacity-40"
              )}
              style={{ background: "currentColor" }}
            />
            <p className="text-base text-foreground/70 leading-relaxed">
              {item.description}
            </p>
          </div>
        )}
      </div>

      {/* Answer buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        {occupationOptions.map((option: AnswerOption) => (
          <button
            key={option.value}
            onClick={() => onAnswer(option.value)}
            data-selected={selectedValue === option.value}
            className={cn(
              "flex-1 py-5 px-5 rounded-2xl border-2 font-bold text-base sm:text-lg text-center",
              "transition-all duration-150 cursor-pointer active:scale-95",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
              optionStyles[option.value],
              selectedValue !== undefined && selectedValue !== option.value
                ? "opacity-40"
                : "opacity-100"
            )}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
