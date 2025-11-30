"use client";

import Image from "next/image";

type TrainingTask = {
  id: number;
  name: string;
  image: string;
  tacticalExplanation: string;
  zonesAndRules: string[];
  objective: string;
  organization: string;
  contents: string[];
  rules: string[];
  variants: string;
  players: string;
  space: string;
  duration: string;
  material: string;
  observations?: string;
};

const trainingTasks: TrainingTask[] = [
  {
    id: 1,
    name: "Progresión por zona",
    image: "/entrenamientos/tarea1.jpg",
    tacticalExplanation:
      "Se juega en cada zona con las consignas correspondientes, trabajando 3 vs 2 con pases condicionados, apoyo libre, zona obligada y finalización 1 vs 1 con el arquero.",
    zonesAndRules: [
      "Zona 1: 3 vs 2 realizando 3 pases con un jugador como apoyo libre; al cumplir la consigna se pasa a Zona 2.",
      "Zona 2: 3 vs 2 realizando 5 pases y pasar con balón dominado.",
      "Zona 3: 3 vs 2 libre de pases, pasar por la zona obligada, hacer un desmarque de ruptura y cambio de ritmo, finalizando 1 vs 1 con el arquero.",
    ],
    objective:
      "Progresión y posesión a través de las tres zonas hasta la finalización.",
    organization:
      "Campo dividido en tres zonas (Zona 1, Zona 2 y Zona 3) con 3 vs 2 en cada una y un jugador como apoyo libre.",
    contents: [
      "Principios de nuestro modelo de juego.",
      "Progresión y posesión.",
    ],
    rules: ["Desmarcar.", "Mantener posesión y progresión."],
    variants: "Recibida por el entrenador.",
    players: "6 vs 6",
    space: "Cancha",
    duration: "No especificado",
    material: "Cintas, pelotas",
    observations: "",
  },
  {
    id: 2,
    name: "Posesiones / presiones",
    image: "/entrenamientos/tarea2.jpg",
    tacticalExplanation:
      "La tarea se divide en dos zonas donde se trabajan secuencias de pases con el arquero y una posesión rápida para romper hacia finalización.",
    zonesAndRules: [
      "Zona 1: realizar 5 pases seguidos con los 5 jugadores y el arquero.",
      "Zona 2: velocidad en la circulación del balón sin pases horizontales, realizar 5 pases y romper con pared en un 1 vs 1 (arquero) o por fuera en un 2 vs 1.",
    ],
    objective:
      "Trabajar posesiones y presiones, conectando circulación del balón y rupturas hacia la portería.",
    organization:
      "11 vs 11 con el campo dividido en Zona 1 y Zona 2, cada una con consignas específicas de pases y finalización.",
    contents: [
      "Principios de nuestro modelo de juego.",
      "Posesiones y presiones.",
    ],
    rules: [],
    variants: "Recibida por el entrenador.",
    players: "11 vs 11",
    space: "Cancha",
    duration: "20-25 min",
    material: "Cintas, pelotas",
    observations: "",
  },
  {
    id: 3,
    name: "Progresión por zona",
    image: "/entrenamientos/tarea3.jpg",
    tacticalExplanation:
      "Misma estructura que la Tarea 1: progresión 3 vs 2 por zonas con apoyo libre, zona obligada y finalización.",
    zonesAndRules: [
      "Zona 1: 3 vs 2 con 3 pases y apoyo libre antes de pasar a Zona 2.",
      "Zona 2: 3 vs 2 con 5 pases y avance con balón dominado.",
      "Zona 3: 3 vs 2 libre de pases, paso por zona obligada, desmarque de ruptura y cambio de ritmo, finalizando 1 vs 1 con el arquero.",
    ],
    objective: "Progresión y posesión.",
    organization:
      "Campo dividido en tres zonas encadenadas, con 3 vs 2 en cada una.",
    contents: [
      "Principios de nuestro modelo de juego.",
      "Progresión y posesión.",
    ],
    rules: ["Desmarcar.", "Posesión y progresión."],
    variants: "Recibida por el entrenador.",
    players: "6 vs 6",
    space: "Cancha",
    duration: "No especificado",
    material: "Cintas, pelotas",
    observations: "",
  },
  {
    id: 4,
    name: "Juego de superioridad numérica por zonas",
    image: "/entrenamientos/tarea4.jpg",
    tacticalExplanation:
      "11 vs 11 donde el equipo en posesión debe llevar a cabo superioridad numérica en los distintos sectores marcados del campo para progresar de una zona a otra.",
    zonesAndRules: [
      "Aplicar superioridad numérica en cada uno de los sectores delimitados.",
      "Solo se progresa a la siguiente zona cumpliendo la consigna de superioridad del sector.",
    ],
    objective:
      "Progresar aplicando conceptos de posesión y superioridad numérica zonal.",
    organization:
      "11 vs 11 con el campo dividido en varios sectores (3 vs 2, 4 vs 3, 2 vs 1, etc.) donde se aplican superioridades.",
    contents: [
      "Principios de nuestro modelo de juego.",
      "Superioridades.",
      "Desmarques.",
      "Triángulos ofensivos.",
      "Movilidad.",
    ],
    rules: [
      "Cumplir con las consignas indicadas en cada zona para poder progresar a la siguiente.",
    ],
    variants: "Recibida por el entrenador.",
    players: "11 vs 11",
    space: "Cancha",
    duration: "20-25 min",
    material: "Cintas, pelotas",
    observations: "",
  },
  {
    id: 5,
    name: "10 vs 10 posicional",
    image: "/entrenamientos/tarea5.jpg",
    tacticalExplanation:
      "10 vs 10 donde el Equipo 1 debe pasar por todos los cuadrados realizando paredes, triangulaciones y tercer hombre, manteniendo velocidad de posesión de partido; el Equipo 2 cumple rol defensivo.",
    zonesAndRules: [
      "Equipo 1: recorrer todos los cuadrados con paredes, triangulaciones y tercer hombre.",
      "Equipo 2: rol defensivo de presión, cierre de espacios y coordinación de líneas defensivas.",
    ],
    objective: "Progresión y juego posicional.",
    organization:
      "10 vs 10 en campo sectorizado en múltiples cuadrados, con un equipo ofensivo y otro defensivo.",
    contents: [
      "Principios de nuestro modelo de juego.",
      "Progresión y juego posicional.",
    ],
    rules: ["Desmarcar.", "Posesión y progresión."],
    variants: "Recibida por el entrenador.",
    players: "10 vs 10",
    space: "Cancha",
    duration: "Trabajo por tiempo (no especificado).",
    material: "Cintas, pelotas",
    observations: "Por tiempo.",
  },
  {
    id: 6,
    name: "11 vs 11 con progresión por carriles",
    image: "/entrenamientos/tarea6.jpg",
    tacticalExplanation:
      "11 vs 11 donde en los carriles centrales se enfrenta un 6 vs 6 y, tras 6 toques, se progresa a un carril lateral generando un 3 vs 2; una vez superada la línea juegan todos y se finaliza.",
    zonesAndRules: [
      "Carriles centrales: 6 vs 6, obligación de realizar 6 toques.",
      "Carriles laterales: se genera un 3 vs 2 en el carril lateral elegido.",
      "Una vez pasada la línea lateral juegan todos y se finaliza la jugada.",
    ],
    objective:
      "Llegar reiteradas veces por fuera aprovechando las situaciones de 3 vs 2.",
    organization:
      "11 vs 11 con el campo sectorizado en carriles centrales y laterales, encadenando 6 vs 6 y 3 vs 2.",
    contents: [
      "Principios de nuestro modelo de juego.",
      "Superioridades.",
      "Desmarques.",
      "Triángulos ofensivos.",
      "Movilidad.",
    ],
    rules: ["Llegar reiteradas veces por fuera (3 vs 2)."],
    variants: "Recibida por el entrenador.",
    players: "11 vs 11",
    space: "Cancha",
    duration: "20-25 min",
    material: "Cintas, pelotas",
    observations: "",
  },
  {
    id: 7,
    name: "Posesiones 6 vs 6 con apoyos",
    image: "/entrenamientos/tarea7.jpg",
    tacticalExplanation:
      "6 vs 6 con cuatro jugadores por dentro del rombo y dos apoyos por fuera, fomentando circulación, paredes, tercer hombre y desmarques.",
    zonesAndRules: [
      "6 vs 6 con 4 jugadores por dentro y 2 apoyos por fuera.",
      "Apoyos a un toque.",
      "El apoyo toca y se mueve a otro lateral.",
    ],
    objective:
      "Fomentar una buena circulación de pases, encontrando paredes, tercer hombre y desmarques.",
    organization:
      "Dos grupos en simultáneo dentro de rombos marcados en el campo, con apoyos externos.",
    contents: ["Principios de nuestro modelo de juego.", "Posesiones."],
    rules: [],
    variants: "Recibida por el entrenador.",
    players: "6 vs 6",
    space: "Espacio en forma de rombo (cancha).",
    duration: "No especificado",
    material: "No especificado",
    observations: "Se juegan dos grupos en simultáneo.",
  },
  {
    id: 8,
    name: "Táctico / con consignas",
    image: "/entrenamientos/tarea8.jpg",
    tacticalExplanation:
      "11 vs 11 jugado en tres zonas con consignas de pases y toques obligatorios para progresar y finalizar.",
    zonesAndRules: [
      "Zona 1: el Equipo A debe realizar 5 pases para pasar a la segunda zona.",
      "Zona 2: realizar 5 pases y completar los 10 toques.",
      "Zona 3: pasar con balón dominado y llegar mínimo 5 jugadores para finalizar.",
    ],
    objective:
      "Trabajar progresiones, desdobles, pared, posesión intencional, abrir línea de pase y tercer hombre.",
    organization:
      "11 vs 11 con el campo dividido en tres zonas longitudinales, encadenando las consignas de pases.",
    contents: [
      "Principios de nuestro modelo de juego.",
      "Progresiones.",
      "Desdobles.",
      "Pared.",
      "Posesión intencional.",
      "Abrir línea de pase.",
      "Tercer hombre.",
    ],
    rules: [],
    variants: "Recibida por el entrenador.",
    players: "11 vs 11",
    space: "Cancha",
    duration: "30 min aprox.",
    material: "Cintas, pelotas",
    observations: "Reacción a la pérdida.",
  },
  {
    id: 9,
    name: "Táctico / salida según presión del rival",
    image: "/entrenamientos/tarea9.jpg",
    tacticalExplanation:
      "Trabajo de salida desde el fondo según la presión del rival, utilizando zonas de espacio y movimientos coordinados.",
    zonesAndRules: [
      "Uso de zonas marcadas como espacio para generar líneas de pase.",
      "Aperturas y progresiones desde el fondo en función de la presión rival.",
    ],
    objective:
      "Atraer para liberar espacio, generar amplitud y hacer muy grande el campo que el rival debe defender en todas las fases.",
    organization:
      "Situación táctica con el equipo saliendo desde el fondo y el rival presionando, utilizando las zonas designadas.",
    contents: [
      "Principios de nuestro modelo de juego.",
      "Progresiones.",
      "Abrir para ser profundos.",
      "Hacer muy grande el campo a defender en todas las fases.",
    ],
    rules: [
      "Atraer para liberar espacio.",
      "Amplitud para dificultar la presión rival.",
    ],
    variants: "Recibida por el entrenador.",
    players: "11 vs 11 (contexto de equipo completo).",
    space: "Cancha",
    duration: "No especificado",
    material: "No especificado",
    observations: "Reacción a la pérdida.",
  },
  {
    id: 10,
    name: "Táctico / ataque posicional",
    image: "/entrenamientos/tarea10.jpg",
    tacticalExplanation: "Ataque posicional según debilidad rival.",
    zonesAndRules: [
      "Zonas de 3 vs 2 para combinar.",
      "Zona de vigilancia en el sector central.",
      "Referencia de recuperación tras pérdida en una de las zonas.",
    ],
    objective:
      "Atacar en función de la debilidad rival, conectando progresiones, paredes y tercer hombre.",
    organization:
      "11 vs 11 con el campo sectorizado en zonas de combinación y zona de vigilancia.",
    contents: [
      "Principios de nuestro modelo de juego.",
      "Progresiones.",
      "Desdobles.",
      "Pared.",
      "Posesión intencional.",
      "Abrir línea de pase.",
      "Tercer hombre.",
    ],
    rules: ["Zona de vigilancia."],
    variants: "Recibida por el entrenador.",
    players: "11 vs 11",
    space: "Cancha",
    duration: "40 min aprox.",
    material: "Cintas, pelotas",
    observations: "Reacción a la pérdida.",
  },
  {
    id: 11,
    name: "Táctico / presiones",
    image: "/entrenamientos/tarea11.jpg",
    tacticalExplanation: "Trabajo de presiones colectivas.",
    zonesAndRules: [
      "Zonas marcadas donde se organizan las presiones del equipo.",
      "Enfatizar coordinación para evitar que el rival encuentre superiores numéricos.",
    ],
    objective:
      "Hacer una presión colectiva y evitar que el rival consiga superación numérica.",
    organization:
      "11 vs 11 en campo completo, con zonas señaladas para la presión.",
    contents: [
      "Principios de nuestro modelo de juego.",
      "Hacer una presión colectiva.",
      "Evitar que nos hagan superación numérica.",
    ],
    rules: [
      "Evitar que el rival tenga la posibilidad de que nos ataque rápido.",
    ],
    variants: "Recibida por el entrenador.",
    players: "11 vs 11",
    space: "Cancha",
    duration: "15 min aprox.",
    material: "Cintas, pelotas",
    observations: "Haremos una presión y finalizar la jugada.",
  },
  {
    id: 12,
    name: "Balón parado ofensivo",
    image: "/entrenamientos/tarea12.jpg",
    tacticalExplanation: "Acciones de balón parado en ofensiva.",
    zonesAndRules: [
      "Ocupar y atacar las zonas 1, 2, 3 y 4 alrededor del área rival en el balón parado.",
    ],
    objective: "Buenos desmarques, buena ejecución y finalización.",
    organization:
      "11 vs 11 en situación de balón parado ofensivo, con movimientos coordinados.",
    contents: [
      "Principios de nuestro modelo de juego.",
      "Buenos desmarques.",
      "Buena ejecución.",
      "Finalización.",
    ],
    rules: ["Defensa en vigilancia."],
    variants: "Recibida por el entrenador.",
    players: "11 vs 11",
    space: "Cancha",
    duration: "15 min aprox.",
    material: "Cintas, pelotas",
    observations: "Ocupar las zonas designadas.",
  },
  {
    id: 13,
    name: "Táctico / ataque posicional (variación)",
    image: "/entrenamientos/tarea13.jpg",
    tacticalExplanation:
      "Mismo ataque posicional según debilidad rival, con énfasis en las zonas de combinación y vigilancia.",
    zonesAndRules: [
      "Zonas de 3 vs 2 para combinar.",
      "Zona de vigilancia en el sector central.",
      "Referencia de recuperación tras pérdida.",
    ],
    objective: "Ataque posicional adaptado a la debilidad rival.",
    organization:
      "11 vs 11 con las mismas zonas de trabajo que en la Tarea 10.",
    contents: [
      "Principios de nuestro modelo de juego.",
      "Progresiones.",
      "Desdobles.",
      "Pared.",
      "Posesión intencional.",
      "Abrir línea de pase.",
      "Tercer hombre.",
    ],
    rules: ["Zona de vigilancia."],
    variants: "Recibida por el entrenador.",
    players: "11 vs 11",
    space: "Cancha",
    duration: "40 min aprox.",
    material: "Cintas, pelotas",
    observations: "Reacción a la pérdida.",
  },
];

export default function SesionesEntrenamientoSection() {
  return (
    <section
      id="sesiones-entrenamiento"
      className="border-t border-slate-800 bg-slate-950 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Cabecera */}
        <div className="mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-emerald-300 ring-1 ring-emerald-500/30">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Sesiones de entrenamiento
          </div>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Tareas tácticas aplicadas a nuestro modelo de juego
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-slate-300 sm:text-base">
            Selección de tareas reales diseñadas para conectar los principios
            del modelo de juego con la realidad competitiva: posesiones,
            superioridades, salidas, ataque posicional, presiones y balón
            parado.
          </p>
        </div>

        {/* Grid de tareas */}
        <div className="grid gap-8 lg:grid-cols-2">
          {trainingTasks.map((task, index) => {
            const hasRules = task.rules && task.rules.length > 0;
            const hasObservations =
              typeof task.observations === "string" &&
              task.observations.trim().length > 0;

            return (
              <article
                key={task.id}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/60 shadow-lg shadow-black/40 ring-1 ring-slate-900/40 backdrop-blur-sm transition-transform hover:-translate-y-1 hover:border-emerald-500/60 hover:shadow-emerald-500/20"
              >
                {/* Imagen */}
                <div className="relative w-full overflow-hidden bg-slate-950">
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={task.image}
                      alt={task.name}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                      priority={index < 2}
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
                </div>

                {/* Contenido */}
                <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
                  {/* Badge + título */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-slate-700/80">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-[0.7rem] font-semibold text-slate-950">
                        {task.id}
                      </span>
                      <span className="uppercase tracking-wide">
                        Tarea {task.id.toString().padStart(2, "0")}
                      </span>
                    </div>
                    <span className="text-[0.7rem] font-medium uppercase tracking-wide text-emerald-300/90">
                      Tarea táctica
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-50 sm:text-xl">
                      {task.name}
                    </h3>
                    <p className="mt-1 text-sm text-slate-300">
                      {task.tacticalExplanation}
                    </p>
                  </div>

                  {/* Objetivo y organización */}
                  <div className="grid gap-4 rounded-xl bg-slate-900/70 p-4 ring-1 ring-slate-800/80 sm:grid-cols-2">
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Objetivo
                      </h4>
                      <p className="mt-1 text-sm text-slate-200">
                        {task.objective}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Organización
                      </h4>
                      <p className="mt-1 text-sm text-slate-200">
                        {task.organization}
                      </p>
                    </div>
                  </div>

                  {/* Zonas, contenidos, normas */}
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-xl bg-slate-900/60 p-4 ring-1 ring-slate-800/80">
                      <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Zonas y reglas
                      </h4>
                      <ul className="mt-2 space-y-1.5 text-sm text-slate-200">
                        {task.zonesAndRules.map((item) => (
                          <li
                            key={item}
                            className="flex gap-2 text-xs sm:text-sm"
                          >
                            <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-xl bg-slate-900/60 p-4 ring-1 ring-slate-800/80">
                      <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Contenidos
                      </h4>
                      <ul className="mt-2 space-y-1.5 text-sm text-slate-200">
                        {task.contents.map((item) => (
                          <li
                            key={item}
                            className="flex gap-2 text-xs sm:text-sm"
                          >
                            <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-xl bg-slate-900/60 p-4 ring-1 ring-slate-800/80">
                      <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Normas
                      </h4>
                      {hasRules ? (
                        <ul className="mt-2 space-y-1.5 text-sm text-slate-200">
                          {task.rules.map((rule) => (
                            <li
                              key={rule}
                              className="flex gap-2 text-xs sm:text-sm"
                            >
                              <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                              <span>{rule}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="mt-2 text-sm text-slate-400">
                          Sin normas específicas.
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Datos de la tarea */}
                  <div className="grid gap-3 rounded-xl bg-slate-900/70 p-4 text-xs text-slate-200 ring-1 ring-slate-800/80 sm:grid-cols-4">
                    <div>
                      <p className="font-semibold text-slate-400">
                        Nº de jugadores
                      </p>
                      <p className="mt-0.5">{task.players}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-400">Espacio</p>
                      <p className="mt-0.5">{task.space}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-400">Duración</p>
                      <p className="mt-0.5">{task.duration}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-400">Material</p>
                      <p className="mt-0.5">{task.material}</p>
                    </div>
                  </div>

                  {/* Variantes y observaciones */}
                  <div className="mt-auto grid gap-3 pt-1 text-xs text-slate-200 sm:grid-cols-[minmax(0,2fr)_minmax(0,1.5fr)]">
                    <div className="rounded-lg bg-slate-900/70 p-3 ring-1 ring-emerald-500/30">
                      <h4 className="text-[0.7rem] font-semibold uppercase tracking-wide text-emerald-300">
                        Variantes
                      </h4>
                      <p className="mt-1 text-[0.8rem]">{task.variants}</p>
                    </div>
                    <div className="rounded-lg bg-slate-900/40 p-3 ring-1 ring-slate-800/80">
                      <h4 className="text-[0.7rem] font-semibold uppercase tracking-wide text-slate-400">
                        Observaciones
                      </h4>
                      <p className="mt-1 text-[0.8rem] text-slate-300">
                        {hasObservations
                          ? task.observations
                          : "Sin observaciones específicas."}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
