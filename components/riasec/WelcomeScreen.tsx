"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface WelcomeScreenProps {
  onStart: (nombre: string, apellido: string) => void;
}

export default function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [touched, setTouched] = useState(false);

  const nombreEmpty = nombre.trim() === "";
  const apellidoEmpty = apellido.trim() === "";
  const isInvalid = nombreEmpty || apellidoEmpty;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched(true);
    if (!isInvalid) {
      onStart(nombre.trim(), apellido.trim());
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background px-4 py-12">
      {/* Decorative top accent */}
      <div className="w-16 h-1.5 rounded-full bg-primary mb-10 opacity-70" />

      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="mb-8 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary/70 mb-4">
            Orientación vocacional
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight text-balance">
            Exploración de intereses vocacionales
          </h1>
        </div>

        {/* Intro card */}
        <div className="bg-card rounded-2xl border border-border shadow-sm p-6 sm:p-8 mb-6">
          <p className="text-foreground/80 leading-relaxed text-base">
            Este recorrido busca conocer qué tipos de actividades, ambientes y
            ocupaciones te resultan más atractivos. No hay respuestas correctas
            o incorrectas. Respondé según lo que más se acerque a tus intereses,
            no según lo que creés que hacés mejor.
          </p>

          <div className="mt-5 pt-5 border-t border-border">
            <p className="text-muted-foreground text-sm leading-relaxed italic">
              El resultado es orientativo y no define por sí solo una elección
              vocacional. Debe interpretarse dentro de un proceso más amplio de
              orientación.
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} noValidate>
          <div className="bg-card rounded-2xl border border-border shadow-sm p-6 sm:p-8 mb-5">
            <p className="text-sm font-semibold text-foreground mb-5">
              Antes de comenzar, contanos tu nombre:
            </p>

            <div className="flex flex-col gap-4">
              {/* Nombre */}
              <div>
                <label
                  htmlFor="nombre"
                  className="block text-sm font-medium text-foreground mb-1.5"
                >
                  Nombre
                </label>
                <input
                  id="nombre"
                  type="text"
                  autoComplete="given-name"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Tu nombre"
                  className={cn(
                    "w-full rounded-xl border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground",
                    "text-base outline-none transition-all duration-200",
                    "focus:border-primary focus:ring-2 focus:ring-primary/20",
                    touched && nombreEmpty
                      ? "border-destructive ring-2 ring-destructive/20"
                      : "border-input"
                  )}
                />
                {touched && nombreEmpty && (
                  <p className="mt-1.5 text-sm text-destructive font-medium">
                    Por favor ingresá tu nombre.
                  </p>
                )}
              </div>

              {/* Apellido */}
              <div>
                <label
                  htmlFor="apellido"
                  className="block text-sm font-medium text-foreground mb-1.5"
                >
                  Apellido
                </label>
                <input
                  id="apellido"
                  type="text"
                  autoComplete="family-name"
                  value={apellido}
                  onChange={(e) => setApellido(e.target.value)}
                  placeholder="Tu apellido"
                  className={cn(
                    "w-full rounded-xl border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground",
                    "text-base outline-none transition-all duration-200",
                    "focus:border-primary focus:ring-2 focus:ring-primary/20",
                    touched && apellidoEmpty
                      ? "border-destructive ring-2 ring-destructive/20"
                      : "border-input"
                  )}
                />
                {touched && apellidoEmpty && (
                  <p className="mt-1.5 text-sm text-destructive font-medium">
                    Por favor ingresá tu apellido.
                  </p>
                )}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className={cn(
              "w-full py-4 rounded-2xl font-bold text-lg tracking-wide transition-all duration-200",
              "bg-primary text-primary-foreground",
              "hover:opacity-90 active:scale-[0.98]",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
              "shadow-md hover:shadow-lg"
            )}
          >
            Comenzar
          </button>
        </form>
      </div>

      {/* Footer decoration */}
      <div className="mt-16 flex items-center gap-2 opacity-30">
        {["R", "I", "A", "S", "E", "C"].map((l) => (
          <span
            key={l}
            className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold"
          >
            {l}
          </span>
        ))}
      </div>
    </main>
  );
}
