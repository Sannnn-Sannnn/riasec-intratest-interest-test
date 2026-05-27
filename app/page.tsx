"use client";

import { useState } from "react";
import WelcomeScreen from "@/components/riasec/WelcomeScreen";
import TestScreen from "@/components/riasec/TestScreen";
import ThankYouScreen from "@/components/riasec/ThankYouScreen";
import { calculateResults, RiasecResult } from "@/lib/riasec-data";

type AppState = "welcome" | "test" | "done";

export default function Home() {
  const [state, setState] = useState<AppState>("welcome");
  const [respondentName, setRespondentName] = useState("");
  const [result, setResult] = useState<RiasecResult | null>(null);

  function handleStart(nombre: string, apellido: string) {
    setRespondentName(`${nombre} ${apellido}`);
    setState("test");
  }

  function handleComplete(answers: Record<string, number>) {
    const computed = calculateResults(respondentName, answers);
    setResult(computed);
    setState("done");
  }

  function handleRestart() {
    setRespondentName("");
    setResult(null);
    setState("welcome");
  }

  if (state === "welcome") {
    return <WelcomeScreen onStart={handleStart} />;
  }

  if (state === "test") {
    return <TestScreen onComplete={handleComplete} />;
  }

  if (state === "done" && result) {
    return <ThankYouScreen result={result} onRestart={handleRestart} />;
  }

  return null;
}
