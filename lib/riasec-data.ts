// ─── Types ───────────────────────────────────────────────────────────────────

export type RiasecType = "R" | "I" | "A" | "S" | "E" | "C";

export type DynamicType =
  | "quick_activity"
  | "interest_scale"
  | "visual_activity"
  | "occupation_card";

export type TestItem = {
  id: string;
  order: number;
  block: number;
  dynamicType: DynamicType;
  riasec: RiasecType;
  title: string;
  question: string;
  activity?: string;
  occupation?: string;
  description?: string;
  visualBrief?: string;
  imageSrc?: string;
};

export type AnswerOption = {
  label: string;
  value: number;
};

// ─── Labels & descriptions ───────────────────────────────────────────────────

export const riasecLabels: Record<RiasecType, string> = {
  R: "Realista",
  I: "Investigativo",
  A: "Artístico",
  S: "Social",
  E: "Emprendedor",
  C: "Convencional",
};

export const riasecDescriptions: Record<RiasecType, string> = {
  R: "Interés por actividades prácticas, manuales, técnicas, físicas o vinculadas con herramientas, objetos y espacios concretos.",
  I: "Interés por analizar, investigar, resolver problemas, comprender fenómenos y trabajar con datos o evidencia.",
  A: "Interés por crear, imaginar, diseñar, expresar ideas y trabajar con propuestas originales o estéticas.",
  S: "Interés por ayudar, enseñar, acompañar, orientar o trabajar con personas.",
  E: "Interés por liderar, persuadir, organizar proyectos, tomar decisiones y movilizar a otros.",
  C: "Interés por ordenar, registrar, clasificar, revisar información y seguir procedimientos claros.",
};

// RIASEC visual palette (used for color coding across the UI)
export const riasecColors: Record<RiasecType, { bg: string; text: string; border: string; icon: string }> = {
  R: { bg: "bg-amber-50",   text: "text-amber-700",  border: "border-amber-200", icon: "🔧" },
  I: { bg: "bg-sky-50",     text: "text-sky-700",    border: "border-sky-200",   icon: "🔬" },
  A: { bg: "bg-rose-50",    text: "text-rose-700",   border: "border-rose-200",  icon: "🎨" },
  S: { bg: "bg-green-50",   text: "text-green-700",  border: "border-green-200", icon: "🤝" },
  E: { bg: "bg-orange-50",  text: "text-orange-700", border: "border-orange-200",icon: "🚀" },
  C: { bg: "bg-indigo-50",  text: "text-indigo-700", border: "border-indigo-200",icon: "📋" },
};

// ─── Answer options ───────────────────────────────────────────────────────────

export const quickOptions: AnswerOption[] = [
  { label: "Me gustaría", value: 4 },
  { label: "No estoy seguro/a", value: 2 },
  { label: "No me gustaría", value: 0 },
];

export const occupationOptions: AnswerOption[] = [
  { label: "Me interesa", value: 4 },
  { label: "No estoy seguro/a", value: 2 },
  { label: "No me interesa", value: 0 },
];

export const scaleOptions: AnswerOption[] = [
  { label: "No me gustaría nada", value: 0 },
  { label: "Me gustaría poco", value: 1 },
  { label: "Me da igual / no sé", value: 2 },
  { label: "Me gustaría", value: 3 },
  { label: "Me gustaría mucho", value: 4 },
];

// Dynamic display names
export const dynamicLabels: Record<DynamicType, string> = {
  quick_activity: "Tarjetas de actividad",
  interest_scale: "Escala de interés",
  visual_activity: "Actividades visuales",
  occupation_card: "Tarjetas de ocupación",
};

// ─── Test items ───────────────────────────────────────────────────────────────

export const testItems: TestItem[] = [
  // ── Block 1: Quick activity cards ──────────────────────────────────────────
  {
    id: "R-TR-01",
    order: 1,
    block: 1,
    dynamicType: "quick_activity",
    riasec: "R",
    title: "Actividad práctica",
    question: "¿Te gustaría realizar esta actividad?",
    activity: "Arreglar un objeto, herramienta o máquina que dejó de funcionar.",
  },
  {
    id: "I-TR-01",
    order: 2,
    block: 1,
    dynamicType: "quick_activity",
    riasec: "I",
    title: "Actividad de investigación",
    question: "¿Te gustaría realizar esta actividad?",
    activity: "Investigar por qué ocurre un fenómeno natural, técnico o científico.",
  },
  {
    id: "A-TR-01",
    order: 3,
    block: 1,
    dynamicType: "quick_activity",
    riasec: "A",
    title: "Actividad creativa",
    question: "¿Te gustaría realizar esta actividad?",
    activity: "Crear una pieza visual, una historia, una canción o una propuesta original.",
  },
  {
    id: "S-TR-01",
    order: 4,
    block: 1,
    dynamicType: "quick_activity",
    riasec: "S",
    title: "Actividad de ayuda",
    question: "¿Te gustaría realizar esta actividad?",
    activity: "Ayudar a una persona a entender un tema que le cuesta.",
  },
  {
    id: "E-TR-01",
    order: 5,
    block: 1,
    dynamicType: "quick_activity",
    riasec: "E",
    title: "Actividad de liderazgo",
    question: "¿Te gustaría realizar esta actividad?",
    activity: "Convencer a otras personas para apoyar una idea o proyecto.",
  },
  {
    id: "C-TR-01",
    order: 6,
    block: 1,
    dynamicType: "quick_activity",
    riasec: "C",
    title: "Actividad de organización",
    question: "¿Te gustaría realizar esta actividad?",
    activity: "Ordenar registros, revisar datos y controlar que no falte información.",
  },

  // ── Block 2: Interest scale cards ──────────────────────────────────────────
  {
    id: "R-EI-01",
    order: 7,
    block: 2,
    dynamicType: "interest_scale",
    riasec: "R",
    title: "Interés por tareas prácticas",
    question: "¿Cuánto te gustaría realizar esta actividad?",
    activity: "Trabajar con herramientas para reparar, ajustar o mantener objetos físicos.",
  },
  {
    id: "I-EI-01",
    order: 8,
    block: 2,
    dynamicType: "interest_scale",
    riasec: "I",
    title: "Interés por resolver problemas",
    question: "¿Cuánto te gustaría realizar esta actividad?",
    activity: "Resolver problemas complejos buscando datos, pruebas o explicaciones.",
  },
  {
    id: "A-EI-01",
    order: 9,
    block: 2,
    dynamicType: "interest_scale",
    riasec: "A",
    title: "Interés por expresarte",
    question: "¿Cuánto te gustaría realizar esta actividad?",
    activity: "Expresar ideas propias a través del diseño, la escritura, la música o lo visual.",
  },
  {
    id: "S-EI-01",
    order: 10,
    block: 2,
    dynamicType: "interest_scale",
    riasec: "S",
    title: "Interés por enseñar",
    question: "¿Cuánto te gustaría realizar esta actividad?",
    activity: "Enseñar, explicar o guiar a otras personas en un proceso de aprendizaje.",
  },
  {
    id: "E-EI-01",
    order: 11,
    block: 2,
    dynamicType: "interest_scale",
    riasec: "E",
    title: "Interés por presentar ideas",
    question: "¿Cuánto te gustaría realizar esta actividad?",
    activity: "Presentar una idea frente a otros y defender por qué vale la pena realizarla.",
  },
  {
    id: "C-EI-01",
    order: 12,
    block: 2,
    dynamicType: "interest_scale",
    riasec: "C",
    title: "Interés por registrar información",
    question: "¿Cuánto te gustaría realizar esta actividad?",
    activity: "Registrar información de manera ordenada, precisa y fácil de consultar.",
  },

  // ── Block 3: Visual activity cards ─────────────────────────────────────────
  {
    id: "R-TV-01",
    order: 13,
    block: 3,
    dynamicType: "visual_activity",
    riasec: "R",
    title: "Escena práctica",
    question: "Al ver esta escena, ¿cuánto te gustaría realizar una actividad parecida?",
    visualBrief: "Persona trabajando en un taller con herramientas, piezas y una mesa de trabajo.",
    activity: "Reparar, armar o ajustar objetos con herramientas.",
    imageSrc: "/images/riasec-scenes/R-TV-01.png",
  },
  {
    id: "I-TV-01",
    order: 14,
    block: 3,
    dynamicType: "visual_activity",
    riasec: "I",
    title: "Escena de investigación",
    question: "Al ver esta escena, ¿cuánto te gustaría realizar una actividad parecida?",
    visualBrief: "Persona observando muestras, datos o elementos en un laboratorio.",
    activity: "Investigar evidencia para entender cómo funciona algo.",
    imageSrc: "/images/riasec-scenes/I-TV-01.png",
  },
  {
    id: "A-TV-01",
    order: 15,
    block: 3,
    dynamicType: "visual_activity",
    riasec: "A",
    title: "Escena creativa",
    question: "Al ver esta escena, ¿cuánto te gustaría realizar una actividad parecida?",
    visualBrief: "Persona dibujando, diseñando o creando una composición visual.",
    activity: "Crear una propuesta visual original.",
    imageSrc: "/images/riasec-scenes/A-TV-01.png",
  },
  {
    id: "S-TV-01",
    order: 16,
    block: 3,
    dynamicType: "visual_activity",
    riasec: "S",
    title: "Escena de acompañamiento",
    question: "Al ver esta escena, ¿cuánto te gustaría realizar una actividad parecida?",
    visualBrief: "Persona explicando algo a otra en una mesa, aula o espacio de apoyo.",
    activity: "Ayudar a alguien a comprender o resolver una dificultad.",
    imageSrc: "/images/riasec-scenes/S-TV-01.png",
  },
  {
    id: "E-TV-01",
    order: 17,
    block: 3,
    dynamicType: "visual_activity",
    riasec: "E",
    title: "Escena de liderazgo",
    question: "Al ver esta escena, ¿cuánto te gustaría realizar una actividad parecida?",
    visualBrief: "Persona presentando una idea frente a un grupo o equipo.",
    activity: "Liderar una propuesta y convencer a otros de participar.",
    imageSrc: "/images/riasec-scenes/E-TV-01.png",
  },
  {
    id: "C-TV-01",
    order: 18,
    block: 3,
    dynamicType: "visual_activity",
    riasec: "C",
    title: "Escena de organización",
    question: "Al ver esta escena, ¿cuánto te gustaría realizar una actividad parecida?",
    visualBrief: "Persona revisando planillas, documentos y listas ordenadas.",
    activity: "Organizar datos y controlar que la información sea correcta.",
    imageSrc: "/images/riasec-scenes/C-TV-01.png",
  },

  // ── Block 4: Occupation cards ───────────────────────────────────────────────
  {
    id: "R-OC-01",
    order: 19,
    block: 4,
    dynamicType: "occupation_card",
    riasec: "R",
    title: "Ocupación práctica",
    question: "¿Qué tanto te interesaría una ocupación parecida?",
    occupation: "Técnico/a mecánico/a",
    description: "Revisa, mantiene y repara máquinas, vehículos o equipos.",
  },
  {
    id: "I-OC-01",
    order: 20,
    block: 4,
    dynamicType: "occupation_card",
    riasec: "I",
    title: "Ocupación investigativa",
    question: "¿Qué tanto te interesaría una ocupación parecida?",
    occupation: "Investigador/a científico/a",
    description: "Estudia problemas, analiza datos y busca explicaciones.",
  },
  {
    id: "A-OC-01",
    order: 21,
    block: 4,
    dynamicType: "occupation_card",
    riasec: "A",
    title: "Ocupación creativa",
    question: "¿Qué tanto te interesaría una ocupación parecida?",
    occupation: "Diseñador/a gráfico/a",
    description: "Crea piezas visuales para comunicar ideas o mensajes.",
  },
  {
    id: "S-OC-01",
    order: 22,
    block: 4,
    dynamicType: "occupation_card",
    riasec: "S",
    title: "Ocupación social",
    question: "¿Qué tanto te interesaría una ocupación parecida?",
    occupation: "Docente o tutor/a",
    description: "Enseña, explica y acompaña procesos de aprendizaje.",
  },
  {
    id: "E-OC-01",
    order: 23,
    block: 4,
    dynamicType: "occupation_card",
    riasec: "E",
    title: "Ocupación emprendedora",
    question: "¿Qué tanto te interesaría una ocupación parecida?",
    occupation: "Emprendedor/a",
    description: "Detecta oportunidades, toma decisiones y organiza proyectos.",
  },
  {
    id: "C-OC-01",
    order: 24,
    block: 4,
    dynamicType: "occupation_card",
    riasec: "C",
    title: "Ocupación convencional",
    question: "¿Qué tanto te interesaría una ocupación parecida?",
    occupation: "Administrativo/a",
    description: "Organiza documentos, registra información y sigue procedimientos.",
  },

  // ── Block 5: Quick activity cards ──────────────────────────────────────────
  {
    id: "R-TR-02",
    order: 25,
    block: 5,
    dynamicType: "quick_activity",
    riasec: "R",
    title: "Actividad práctica",
    question: "¿Te gustaría realizar esta actividad?",
    activity: "Construir o ensamblar algo usando materiales y herramientas.",
  },
  {
    id: "I-TR-02",
    order: 26,
    block: 5,
    dynamicType: "quick_activity",
    riasec: "I",
    title: "Actividad de análisis",
    question: "¿Te gustaría realizar esta actividad?",
    activity: "Analizar información para encontrar patrones, causas o explicaciones.",
  },
  {
    id: "A-TR-02",
    order: 27,
    block: 5,
    dynamicType: "quick_activity",
    riasec: "A",
    title: "Actividad de diseño",
    question: "¿Te gustaría realizar esta actividad?",
    activity: "Diseñar algo que transmita una idea de forma creativa.",
  },
  {
    id: "S-TR-02",
    order: 28,
    block: 5,
    dynamicType: "quick_activity",
    riasec: "S",
    title: "Actividad de acompañamiento",
    question: "¿Te gustaría realizar esta actividad?",
    activity: "Acompañar a alguien que necesita orientación, apoyo o escucha.",
  },
  {
    id: "E-TR-02",
    order: 29,
    block: 5,
    dynamicType: "quick_activity",
    riasec: "E",
    title: "Actividad de coordinación",
    question: "¿Te gustaría realizar esta actividad?",
    activity: "Organizar a un grupo para lograr un objetivo común.",
  },
  {
    id: "C-TR-02",
    order: 30,
    block: 5,
    dynamicType: "quick_activity",
    riasec: "C",
    title: "Actividad de clasificación",
    question: "¿Te gustaría realizar esta actividad?",
    activity: "Clasificar documentos, archivos o información siguiendo un criterio claro.",
  },

  // ── Block 6: Interest scale cards ──────────────────────────────────────────
  {
    id: "R-EI-02",
    order: 31,
    block: 6,
    dynamicType: "interest_scale",
    riasec: "R",
    title: "Interés por tareas manuales",
    question: "¿Cuánto te gustaría realizar esta actividad?",
    activity: "Realizar tareas prácticas que impliquen movimiento, precisión manual o uso de materiales.",
  },
  {
    id: "I-EI-02",
    order: 32,
    block: 6,
    dynamicType: "interest_scale",
    riasec: "I",
    title: "Interés por experimentar",
    question: "¿Cuánto te gustaría realizar esta actividad?",
    activity: "Hacer experimentos, comparar resultados y sacar conclusiones.",
  },
  {
    id: "A-EI-02",
    order: 33,
    block: 6,
    dynamicType: "interest_scale",
    riasec: "A",
    title: "Interés por crear",
    question: "¿Cuánto te gustaría realizar esta actividad?",
    activity: "Crear una propuesta original sin seguir una única forma correcta de hacerlo.",
  },
  {
    id: "S-EI-02",
    order: 34,
    block: 6,
    dynamicType: "interest_scale",
    riasec: "S",
    title: "Interés por ayudar",
    question: "¿Cuánto te gustaría realizar esta actividad?",
    activity: "Participar en actividades donde puedas ayudar a mejorar el bienestar de otros.",
  },
  {
    id: "E-EI-02",
    order: 35,
    block: 6,
    dynamicType: "interest_scale",
    riasec: "E",
    title: "Interés por decidir",
    question: "¿Cuánto te gustaría realizar esta actividad?",
    activity: "Tomar decisiones para impulsar un proyecto, negocio o iniciativa.",
  },
  {
    id: "C-EI-02",
    order: 36,
    block: 6,
    dynamicType: "interest_scale",
    riasec: "C",
    title: "Interés por controlar datos",
    question: "¿Cuánto te gustaría realizar esta actividad?",
    activity: "Seguir procedimientos para revisar, controlar o verificar datos importantes.",
  },

  // ── Block 7: Visual activity cards ─────────────────────────────────────────
  {
    id: "R-TV-02",
    order: 37,
    block: 7,
    dynamicType: "visual_activity",
    riasec: "R",
    title: "Escena técnica",
    question: "Al ver esta escena, ¿cuánto te gustaría realizar una actividad parecida?",
    visualBrief: "Persona al aire libre revisando equipamiento, materiales o estructuras.",
    activity: "Realizar tareas prácticas en espacios físicos o técnicos.",
    imageSrc: "/images/riasec-scenes/R-TV-02.png",
  },
  {
    id: "I-TV-02",
    order: 38,
    block: 7,
    dynamicType: "visual_activity",
    riasec: "I",
    title: "Escena analítica",
    question: "Al ver esta escena, ¿cuánto te gustaría realizar una actividad parecida?",
    visualBrief: "Persona frente a gráficos, notas y datos buscando una explicación.",
    activity: "Analizar información para encontrar patrones o causas.",
    imageSrc: "/images/riasec-scenes/I-TV-02.png",
  },
  {
    id: "A-TV-02",
    order: 39,
    block: 7,
    dynamicType: "visual_activity",
    riasec: "A",
    title: "Escena de expresión",
    question: "Al ver esta escena, ¿cuánto te gustaría realizar una actividad parecida?",
    visualBrief: "Persona en un espacio creativo con música, escritura, diseño o arte.",
    activity: "Expresar ideas usando recursos creativos.",
    imageSrc: "/images/riasec-scenes/A-TV-02.png",
  },
  {
    id: "S-TV-02",
    order: 40,
    block: 7,
    dynamicType: "visual_activity",
    riasec: "S",
    title: "Escena social",
    question: "Al ver esta escena, ¿cuánto te gustaría realizar una actividad parecida?",
    visualBrief: "Grupo conversando en un espacio de acompañamiento o aprendizaje.",
    activity: "Escuchar, orientar o acompañar a otras personas.",
    imageSrc: "/images/riasec-scenes/S-TV-02.png",
  },
  {
    id: "E-TV-02",
    order: 41,
    block: 7,
    dynamicType: "visual_activity",
    riasec: "E",
    title: "Escena emprendedora",
    question: "Al ver esta escena, ¿cuánto te gustaría realizar una actividad parecida?",
    visualBrief: "Grupo planificando un proyecto, campaña o emprendimiento.",
    activity: "Coordinar personas para llevar adelante una iniciativa.",
    imageSrc: "/images/riasec-scenes/E-TV-02.png",
  },
  {
    id: "C-TV-02",
    order: 42,
    block: 7,
    dynamicType: "visual_activity",
    riasec: "C",
    title: "Escena de control",
    question: "Al ver esta escena, ¿cuánto te gustaría realizar una actividad parecida?",
    visualBrief: "Persona clasificando archivos, formularios o registros digitales.",
    activity: "Seguir procedimientos para ordenar y verificar información.",
    imageSrc: "/images/riasec-scenes/C-TV-02.png",
  },

  // ── Block 8: Occupation cards ───────────────────────────────────────────────
  {
    id: "R-OC-02",
    order: 43,
    block: 8,
    dynamicType: "occupation_card",
    riasec: "R",
    title: "Ocupación técnica",
    question: "¿Qué tanto te interesaría una ocupación parecida?",
    occupation: "Constructor/a o instalador/a técnico/a",
    description: "Trabaja con materiales, herramientas y estructuras físicas.",
  },
  {
    id: "I-OC-02",
    order: 44,
    block: 8,
    dynamicType: "occupation_card",
    riasec: "I",
    title: "Ocupación de laboratorio",
    question: "¿Qué tanto te interesaría una ocupación parecida?",
    occupation: "Analista de laboratorio",
    description: "Observa muestras, realiza pruebas y registra resultados.",
  },
  {
    id: "A-OC-02",
    order: 45,
    block: 8,
    dynamicType: "occupation_card",
    riasec: "A",
    title: "Ocupación creativa",
    question: "¿Qué tanto te interesaría una ocupación parecida?",
    occupation: "Guionista, escritor/a o creador/a de contenido",
    description: "Desarrolla historias, textos o propuestas creativas.",
  },
  {
    id: "S-OC-02",
    order: 46,
    block: 8,
    dynamicType: "occupation_card",
    riasec: "S",
    title: "Ocupación de orientación",
    question: "¿Qué tanto te interesaría una ocupación parecida?",
    occupation: "Psicopedagogo/a u orientador/a",
    description: "Ayuda a personas a comprender dificultades, intereses o decisiones.",
  },
  {
    id: "E-OC-02",
    order: 47,
    block: 8,
    dynamicType: "occupation_card",
    riasec: "E",
    title: "Ocupación comercial",
    question: "¿Qué tanto te interesaría una ocupación parecida?",
    occupation: "Coordinador/a comercial o de ventas",
    description: "Presenta ideas, negocia y busca convencer a otras personas.",
  },
  {
    id: "C-OC-02",
    order: 48,
    block: 8,
    dynamicType: "occupation_card",
    riasec: "C",
    title: "Ocupación administrativa",
    question: "¿Qué tanto te interesaría una ocupación parecida?",
    occupation: "Analista contable o de datos administrativos",
    description: "Revisa datos, controla registros y mantiene información ordenada.",
  },
];

// ─── Scoring ──────────────────────────────────────────────────────────────────

export type ScoreByType = Record<RiasecType, number>;
export type ResultEntry = {
  type: RiasecType;
  label: string;
  score: number;
  percentage: number;
  description: string;
};

export type RiasecResult = {
  respondentName: string;
  scoreByType: ScoreByType;
  percentageByType: Record<RiasecType, number>;
  sortedResults: ResultEntry[];
  hollandCode: string;
  hasTies: boolean;
  answersByItemId: Record<string, number>;
};

const MAX_SCORE_PER_TYPE = 32; // 8 items × 4 points

export function calculateResults(
  respondentName: string,
  answersByItemId: Record<string, number>
): RiasecResult {
  const types: RiasecType[] = ["R", "I", "A", "S", "E", "C"];

  const scoreByType = Object.fromEntries(
    types.map((type) => [type, 0])
  ) as ScoreByType;

  // Sum scores per type
  for (const item of testItems) {
    const value = answersByItemId[item.id];
    if (value !== undefined) {
      scoreByType[item.riasec] += value;
    }
  }

  const percentageByType = Object.fromEntries(
    types.map((type) => [
      type,
      Math.round((scoreByType[type] / MAX_SCORE_PER_TYPE) * 100),
    ])
  ) as Record<RiasecType, number>;

  const sortedResults: ResultEntry[] = types
    .map((type) => ({
      type,
      label: riasecLabels[type],
      score: scoreByType[type],
      percentage: percentageByType[type],
      description: riasecDescriptions[type],
    }))
    .sort((a, b) => b.score - a.score);

  const top3Scores = sortedResults.slice(0, 3).map((r) => r.score);
  // Detect ties within top 3 or between position 3 and 4
  const hasTies =
    top3Scores[0] === top3Scores[1] ||
    top3Scores[1] === top3Scores[2] ||
    (sortedResults[2]?.score === sortedResults[3]?.score);

  const hollandCode = sortedResults
    .slice(0, 3)
    .map((r) => r.type)
    .join("-");

  return {
    respondentName,
    scoreByType,
    percentageByType,
    sortedResults,
    hollandCode,
    hasTies,
    answersByItemId,
  };
}
