"use client";

import { useState } from "react";
import { testItems } from "@/lib/riasec-data";
import QuickActivityCard from "./QuickActivityCard";
import InterestScaleCard from "./InterestScaleCard";
import VisualActivityCard from "./VisualActivityCard";
import OccupationCard from "./OccupationCard";
import { cn } from "@/lib/utils";

const TOTAL = testItems.length;

const checkpointMessages = [
  {
    afterQuestion: 12,
    title: "Primer bloque completado",
    message: "¡Vamos bien!",
    buttonLabel: "Continuar",
  },
  {
    afterQuestion: 24,
    title: "Vas por la mitad",
    message:
      "Que algo te interese no significa que ya tengas que saber hacerlo. El interés y la habilidad no siempre aparecen al mismo tiempo.",
    buttonLabel: "Seguir",
  },
  {
    afterQuestion: 36,
    title: "Último tramo",
    message:
      "Elegí con libertad: este recorrido se trata de explorar tus intereses, no de cumplir expectativas.",
    buttonLabel: "Continuar",
  },
];

// Returns the checkpoint config if we've just finished `questionNumber` questions
function getCheckpoint(questionNumber: number) {
  return checkpointMessages.find((c) => c.afterQuestion === questionNumber) ?? null;
}

interface CheckpointScreenProps {
  title: string;
  message: string;
  buttonLabel: string;
  onContinue: () => void;
  questionsAnswered: number;
}

function CheckpointScreen({
  title,
  message,
  buttonLabel,
  onContinue,
  questionsAnswered,
}: CheckpointScreenProps) {
  const progress = (questionsAnswered / TOTAL) * 100;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Progress bar strip at the top */}
      <div className="h-2 bg-muted w-full">
        <div
          className="h-full bg-primary transition-all duration-700 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-sm text-center flex flex-col items-center gap-8">
          {/* Icon */}
          <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 text-primary"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary/70">
              {questionsAnswered} de {TOTAL} preguntas
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground text-balance leading-tight">
              {title}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed text-pretty">
              {message}
            </p>
          </div>

          <button
            onClick={onContinue}
            className={cn(
              "w-full py-4 rounded-2xl font-bold text-base tracking-wide transition-all duration-150",
              "bg-primary text-primary-foreground",
              "hover:opacity-90 active:scale-[0.98]",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
              "shadow-md hover:shadow-lg"
            )}
          >
            {buttonLabel}
          </button>
        </div>
      </main>
    </div>
  );
}

interface TestScreenProps {
  onComplete: (answers: Record<string, number>) => void;
}

export default function TestScreen({ onComplete }: TestScreenProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [direction, setDirection] = useState<"forward" | "back">("forward");
  const [animating, setAnimating] = useState(false);
  const [visible, setVisible] = useState(true);
  // null means no checkpoint is showing; a number means we paused after that many questions
  const [checkpointAt, setCheckpointAt] = useState<number | null>(null);

  const item = testItems[currentIndex];
  const progress = (currentIndex / TOTAL) * 100;
  const selectedValue = answers[item.id];
  const isLast = currentIndex === TOTAL - 1;

  function navigate(toIndex: number, dir: "forward" | "back") {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setVisible(false);
    setTimeout(() => {
      setCurrentIndex(toIndex);
      setVisible(true);
      setAnimating(false);
    }, 200);
  }

  function handleAnswer(value: number) {
    const updated = { ...answers, [item.id]: value };
    setAnswers(updated);

    const answeredSoFar = currentIndex + 1;

    if (isLast) {
      setTimeout(() => {
        onComplete(updated);
      }, 400);
      return;
    }

    // Check if a checkpoint fires after this question
    const checkpoint = getCheckpoint(answeredSoFar);
    if (checkpoint) {
      setTimeout(() => {
        setCheckpointAt(answeredSoFar);
      }, 400);
    } else {
      setTimeout(() => {
        navigate(currentIndex + 1, "forward");
      }, 400);
    }
  }

  function handleCheckpointContinue() {
    setCheckpointAt(null);
    navigate(currentIndex + 1, "forward");
  }

  function handleBack() {
    if (currentIndex === 0 || animating) return;
    const prevItem = testItems[currentIndex - 1];
    // Clear the previous item's answer so the user sees it unselected
    setAnswers((prev) => {
      const next = { ...prev };
      delete next[prevItem.id];
      return next;
    });
    navigate(currentIndex - 1, "back");
  }

  // Show checkpoint screen instead of the test item
  if (checkpointAt !== null) {
    const checkpoint = getCheckpoint(checkpointAt)!;
    return (
      <CheckpointScreen
        title={checkpoint.title}
        message={checkpoint.message}
        buttonLabel={checkpoint.buttonLabel}
        onContinue={handleCheckpointContinue}
        questionsAnswered={checkpointAt}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* ── Top bar ─────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-20 bg-background/95 backdrop-blur-sm border-b border-border px-4 py-3">
        <div className="max-w-xl mx-auto">
          <div className="flex items-center justify-between mb-2.5">
            {/* Back button */}
            <button
              onClick={handleBack}
              disabled={currentIndex === 0}
              aria-label="Volver a la pregunta anterior"
              className={cn(
                "flex items-center gap-1.5 text-sm font-semibold px-3 py-1.5 rounded-xl transition-all",
                currentIndex === 0
                  ? "text-muted-foreground/30 cursor-not-allowed"
                  : "text-primary hover:bg-primary/10 active:scale-95 cursor-pointer"
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="hidden sm:inline">Anterior</span>
            </button>

            {/* Counter */}
            <span className="text-sm font-bold text-foreground">
              {currentIndex + 1} / {TOTAL}
            </span>

            {/* Block indicator */}
            <span className="text-xs text-muted-foreground font-medium min-w-[60px] text-right">
              Bloque {item.block}/8
            </span>
          </div>

          {/* Progress bar */}
          <div
            className="h-2.5 bg-muted rounded-full overflow-hidden"
            role="progressbar"
            aria-valuenow={currentIndex + 1}
            aria-valuemin={1}
            aria-valuemax={TOTAL}
          >
            <div
              className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </header>

      {/* ── Item area ───────────────────────────────────────────────────────── */}
      <main className="flex-1 flex flex-col items-center px-4 py-8 pb-12">
        <div className="w-full max-w-xl">
          <div
            className={cn(
              "transition-all duration-200",
              visible
                ? "opacity-100 translate-y-0"
                : direction === "forward"
                ? "opacity-0 translate-y-4"
                : "opacity-0 -translate-y-4"
            )}
          >
            {item.dynamicType === "quick_activity" && (
              <QuickActivityCard
                item={item}
                selectedValue={selectedValue}
                onAnswer={handleAnswer}
              />
            )}
            {item.dynamicType === "interest_scale" && (
              <InterestScaleCard
                item={item}
                selectedValue={selectedValue}
                onAnswer={handleAnswer}
              />
            )}
            {item.dynamicType === "visual_activity" && (
              <VisualActivityCard
                item={item}
                selectedValue={selectedValue}
                onAnswer={handleAnswer}
              />
            )}
            {item.dynamicType === "occupation_card" && (
              <OccupationCard
                item={item}
                selectedValue={selectedValue}
                onAnswer={handleAnswer}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
