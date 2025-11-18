export default function PlanificacionSemanalSection() {
  const etapas = [
    {
      label: "MD+1",
      titulo: "Recuperación y reequilibrio",
      objetivo: "Recuperar al plantel a nivel físico y mental luego del partido.",
      contenidos:
        "Tareas regenerativas, movilidad y descarga; trabajo específico con no convocados.",
    },
    {
      label: "MD+2",
      titulo: "Análisis y complementarios",
      objetivo:
        "Analizar el partido anterior y equilibrar cargas individuales y por líneas de juego.",
      contenidos:
        "Video, correcciones puntuales, fuerza preventiva y tareas técnico-tácticas individualizadas.",
    },
    {
      label: "MD+3",
      titulo: "Transición hacia la nueva semana",
      objetivo:
        "Cerrar definitivamente el partido anterior y abrir la preparación del siguiente rival.",
      contenidos:
        "Reuniones de staff, plan de rival, definición de cargas y prioridades de campo.",
    },
    {
      label: "MD-3",
      titulo: "Base colectiva del plan semanal",
      objetivo:
        "Instalar los principios colectivos del plan de partido con carga media-alta.",
      contenidos:
        "Posesión y progresión, comportamientos por líneas y conceptos colectivos amplios.",
    },
    {
      label: "MD-2",
      titulo: "Ajustes por líneas y sectores",
      objetivo:
        "Ajustar relaciones entre zonas según el rival y el plan definido.",
      contenidos:
        "Estructuras funcionales, coordinación entre sectores y correcciones específicas.",
    },
    {
      label: "MD-1",
      titulo: "Velocidad, coordinación y detalles finales",
      objetivo: "Llegar al partido con claridad de idea y sensaciones de frescura.",
      contenidos:
        "Alta intensidad corta, finalizaciones, balón parado y ajustes defensivos/ofensivos.",
    },
    {
      label: "MD",
      titulo: "Competir al máximo nivel",
      objetivo:
        "Aplicar nuestra identidad de juego y ejecutar el plan preparado para el rival.",
      contenidos:
        "Lectura de momentos del partido, gestión de esfuerzos y correcciones en vivo.",
    },
  ];

  const contenidos = [
    {
      codigo: "G1",
      titulo: "Posesión",
      descripcion:
        "Sesiones enfocadas en la circulación del balón, la ocupación de espacios y los comportamientos colectivos para conservar y progresar con sentido.",
    },
    {
      codigo: "G2",
      titulo: "Modelo / idea táctica",
      descripcion:
        "Trabajos que conectan directamente con el modelo de juego: estructuras, comportamientos por líneas y ajustes según el rival y el contexto competitivo.",
    },
    {
      codigo: "G3",
      titulo: "Individuales",
      descripcion:
        "Contenidos diseñados para potenciar al jugador: toma de decisiones, fundamentos técnicos específicos y correcciones personalizadas en función del rol.",
    },
    {
      codigo: "G4",
      titulo: "Grupales",
      descripcion:
        "Ejercicios que articulan líneas y sectores del equipo, favoreciendo la coordinación colectiva y los automatismos en fase ofensiva y defensiva.",
    },
  ];

  return (
    <section className="mt-10 space-y-10 rounded-2xl bg-[#141b2b] p-6 sm:p-8 border border-slate-800">
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-slate-50 sm:text-xl">
          Planificación semanal del trabajo
        </h3>
        <p className="max-w-3xl text-sm text-slate-300 sm:text-base">
          Esta es una referencia visual de cómo estructuro la semana de trabajo alrededor del partido: quién interviene
          en cada etapa y cómo conectamos los contenidos de campo con el análisis y la gestión del plantel.
        </p>
      </div>

      {/* Etapas de la semana */}
      <div className="space-y-4">
        <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
          Semana tipo alrededor del partido
        </h4>
        {/* Mobile: carrusel horizontal */}
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 md:hidden">
          {etapas.map((etapa) => (
            <div
              key={etapa.label}
              className="min-w-[240px] snap-start rounded-xl border border-slate-700 bg-[#1b2a41]/80 p-4 shadow-sm shadow-black/30"
            >
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f2c14e]/10 ring-1 ring-[#f2c14e]/60">
                  {/* Icono simple: círculo con punto central */}
                  <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#f2c14e]" aria-hidden="true">
                    <circle cx="12" cy="12" r="8" fill="currentColor" opacity="0.25" />
                    <circle cx="12" cy="12" r="3" fill="currentColor" />
                  </svg>
                </div>
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-300">
                  {etapa.label}
                </span>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-slate-50">{etapa.titulo}</p>
                <p className="text-xs text-slate-300">
                  <span className="font-semibold text-slate-200">Objetivo: </span>
                  {etapa.objetivo}
                </p>
                <p className="text-xs text-slate-300">
                  <span className="font-semibold text-slate-200">Contenidos clave: </span>
                  {etapa.contenidos}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Desktop: grid estático */}
        <div className="hidden md:grid md:grid-cols-7 md:gap-4">
          {etapas.map((etapa) => (
            <div
              key={etapa.label}
              className="rounded-xl border border-slate-700 bg-[#1b2a41]/80 p-4 shadow-sm shadow-black/30"
            >
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f2c14e]/10 ring-1 ring-[#f2c14e]/60">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#f2c14e]" aria-hidden="true">
                    <circle cx="12" cy="12" r="8" fill="currentColor" opacity="0.25" />
                    <circle cx="12" cy="12" r="3" fill="currentColor" />
                  </svg>
                </div>
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-300">
                  {etapa.label}
                </span>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-slate-50">{etapa.titulo}</p>
                <p className="text-xs text-slate-300">
                  <span className="font-semibold text-slate-200">Objetivo: </span>
                  {etapa.objetivo}
                </p>
                <p className="text-xs text-slate-300">
                  <span className="font-semibold text-slate-200">Contenidos clave: </span>
                  {etapa.contenidos}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contenidos semanales G1-G4 */}
      <div className="space-y-4">
        <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
          Contenidos semanales (G1 – G4)
        </h4>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {contenidos.map((contenido) => (
            <div
              key={contenido.codigo}
              className="flex flex-col gap-3 rounded-xl border border-[#f2c14e]/70 bg-[#24344d] p-4 shadow-sm shadow-black/30"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f2c14e]/10 ring-1 ring-[#f2c14e]/70">
                  {/* Icono distinto según código */}
                  {contenido.codigo === "G1" && (
                    <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#f2c14e]" aria-hidden="true">
                      <rect x="4" y="7" width="16" height="10" rx="2" ry="2" fill="currentColor" opacity="0.25" />
                      <path d="M6 9h5v6H6z" fill="currentColor" />
                    </svg>
                  )}
                  {contenido.codigo === "G2" && (
                    <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#f2c14e]" aria-hidden="true">
                      <path
                        d="M5 18c2.5-4 4.5-6 7-6s4.5 2 7 6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                      <circle cx="12" cy="8" r="3" fill="currentColor" opacity="0.7" />
                    </svg>
                  )}
                  {contenido.codigo === "G3" && (
                    <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#f2c14e]" aria-hidden="true">
                      <circle cx="12" cy="9" r="3" fill="currentColor" />
                      <path
                        d="M7 19c1.2-2.2 2.8-3.5 5-3.5s3.8 1.3 5 3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                  {contenido.codigo === "G4" && (
                    <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#f2c14e]" aria-hidden="true">
                      <circle cx="7" cy="10" r="2.5" fill="currentColor" opacity="0.9" />
                      <circle cx="17" cy="10" r="2.5" fill="currentColor" opacity="0.5" />
                      <path
                        d="M4 18c0.8-1.7 2-3 3.5-3S10.5 16.3 11.3 18"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                      <path
                        d="M13 18c0.8-1.7 2-3 3.5-3S19.2 16.3 20 18"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#f2c14e]">
                    {contenido.codigo}
                  </p>
                  <p className="text-sm font-semibold text-slate-50">
                    {contenido.titulo}
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-200 sm:text-sm">
                {contenido.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
