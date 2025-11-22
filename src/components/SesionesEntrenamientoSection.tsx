import Image from "next/image";

export default function SesionesEntrenamientoSection() {
  return (
    <section
      id="sesiones-entrenamiento"
      className="space-y-8 border-t border-slate-800 py-16 md:py-20"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-50">
          Sesiones de entrenamiento
        </h2>
        <p className="max-w-3xl text-sm text-slate-300 sm:text-base">
          Dos ejemplos de tareas que representan nuestra forma de entrenar:
          progresión por zonas y posesiones con presión tras pérdida,
          integrando lo físico, lo táctico y la toma de decisiones.
        </p>
      </div>

      <div className="space-y-8">
        {/* Tarea 1 - Progresión por zona */}
        <article className="flex flex-col gap-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:flex-row md:p-8">
    <div className="w-full md:w-1/2 flex justify-center items-center">
      <Image
          src="/entrenamientos/entrenamiento1.png"
              alt="Ejercicio de progresión por zonas"
              width={900}
              height={600}
            className="w-full h-auto rounded-xl border border-slate-800 bg-black object-contain"
      />
    </div>

          <div className="flex-1 space-y-4">
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-300">
                Tarea 1 · Progresión por zona
              </div>
              <h3 className="text-lg font-semibold text-slate-50">
                Progresión del balón por zonas con apoyos y cambios de ritmo
              </h3>
            </div>

            <dl className="grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
              <div className="space-y-1">
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Objetivo
                </dt>
                <dd>
                  Favorecer la progresión del balón por zonas, relacionando
                  posesión, cambio de ritmo y ruptura.
                </dd>
              </div>

              <div className="space-y-1">
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Organización
                </dt>
                <dd>
                  Campo dividido en 3 zonas (zona 1, zona 2, zona 3). 3 vs 2 en
                  cada zona, con un apoyo libre para conectar.
                </dd>
              </div>

              <div className="space-y-1 sm:col-span-2">
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Contenidos clave
                </dt>
                <dd>
                  Progresión y posesión, utilización de apoyos, pases
                  condicionados (3 pases en zona 1, 5 en zona 2, zona obligada
                  antes de finalizar).
                </dd>
              </div>

              <div className="space-y-1">
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Tipo de tarea
                </dt>
                <dd>Progresiones.</dd>
              </div>

              <div className="space-y-1">
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Nº de jugadores
                </dt>
                <dd>6 vs 6 (aprox.).</dd>
              </div>

              <div className="space-y-1">
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Espacio
                </dt>
                <dd>Cancha dividida en tres franjas.</dd>
              </div>

              <div className="space-y-1">
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Duración
                </dt>
                <dd>20–25 minutos.</dd>
              </div>

              <div className="space-y-1">
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Material
                </dt>
                <dd>Conos, cintas, pelotas.</dd>
              </div>
            </dl>
          </div>
        </article>

        {/* Tarea 2 - Posesiones / presiones */}
        <article className="flex flex-col gap-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:flex-row md:p-8">
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <Image
		      src="/entrenamientos/entrenamiento2.png"
              alt="Ejercicio de posesiones y presiones"
              width={900}
              height={600}
	          className="w-full h-auto rounded-xl border border-slate-800 bg-black object-contain"
            />
          </div>

          <div className="flex-1 space-y-4">
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-300">
                Tarea 2 · Posesiones / presiones
              </div>
              <h3 className="text-lg font-semibold text-slate-50">
                Posesión orientada con presión tras pérdida y finalización
              </h3>
            </div>

            <dl className="grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
              <div className="space-y-1">
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Objetivo
                </dt>
                <dd>
                  Conectar la circulación del balón con la presión tras pérdida
                  y la finalización.
                </dd>
              </div>

              <div className="space-y-1">
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Organización
                </dt>
                <dd>
                  Dos zonas principales, 2 vs 1 en extremos y participación del
                  arquero. Pases consecutivos con condicionantes.
                </dd>
              </div>

              <div className="space-y-1 sm:col-span-2">
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Contenidos clave
                </dt>
                <dd>
                  Posesión orientada, velocidad en la circulación, duelos 1 vs 1
                  y 2 vs 1, trabajo de presión y reacción tras pérdida.
                </dd>
              </div>

              <div className="space-y-1">
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Tipo de tarea
                </dt>
                <dd>Posesiones / presiones.</dd>
              </div>

              <div className="space-y-1">
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Nº de jugadores
                </dt>
                <dd>11 vs 11 (aprox., incluyendo porteros).</dd>
              </div>

              <div className="space-y-1">
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Espacio
                </dt>
                <dd>Cancha completa o 2/3 de campo.</dd>
              </div>

              <div className="space-y-1">
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Duración
                </dt>
                <dd>20–25 minutos.</dd>
              </div>

              <div className="space-y-1">
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Material
                </dt>
                <dd>Cintas, pelotas, marcadores de zonas.</dd>
              </div>
            </dl>
          </div>
        </article>

        {/* Tarea 3 - 11 vs 11 (carriles centrales / laterales / progresión) */}
        <article className="flex flex-col gap-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:flex-row md:p-8">
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <Image
              src="/entrenamientos/entrenamiento3.png"
              alt="Ejercicio 11 vs 11 – progresión por carriles"
              width={900}
              height={600}
              className="w-full h-auto rounded-xl border border-slate-800 bg-black object-contain"
            />
          </div>

          <div className="flex-1 space-y-4">
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-300">
                Tarea 3 · 11 vs 11
              </div>
              <h3 className="text-lg font-semibold text-slate-50">
                11 vs 11 con progresión por carriles centrales y laterales
              </h3>
            </div>

            <dl className="grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
              <div className="space-y-1">
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Objetivo
                </dt>
                <dd>
                  Trabajar progresión y finalización mediante enfrentamientos 6 vs 6 en los carriles centrales con
                  pases condicionados y posterior activación de 3 vs 2 por el mismo carril para finalizar.
                </dd>
              </div>

              <div className="space-y-1">
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Organización
                </dt>
                <dd>
                  11 vs 11 completo. En los carriles centrales se enfrentan 6 vs 6 con posesión condicionada (6 toques),
                  luego deben hacer progresión a carriles laterales donde se genera un 3 vs 2. Al superar la zona, todos
                  los jugadores participan para finalizar.
                </dd>
              </div>

              <div className="space-y-1 sm:col-span-2">
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Contenidos clave
                </dt>
                <dd>
                  Progresión, superioridades, ruptura, cambio de ritmo, ocupación racional de espacios.
                </dd>
              </div>

              <div className="space-y-1">
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Tipo de tarea
                </dt>
                <dd>Progresiones con oposición real.</dd>
              </div>

              <div className="space-y-1">
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Nº de jugadores
                </dt>
                <dd>11 vs 11.</dd>
              </div>

              <div className="space-y-1">
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Espacio
                </dt>
                <dd>Cancha completa.</dd>
              </div>

              <div className="space-y-1">
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Duración
                </dt>
                <dd>2025 min.</dd>
              </div>

              <div className="space-y-1">
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Material
                </dt>
                <dd>Cintas, pelotas.</dd>
              </div>
            </dl>
          </div>
        </article>

        {/* Tarea 4 - Juego de superioridad numérica por zonas */}
        <article className="flex flex-col gap-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:flex-row md:p-8">
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <Image
              src="/entrenamientos/entrenamiento4.png"
              alt="Ejercicio 11 vs 11 ߑ11 superioridad numérica zonal"
              width={900}
              height={600}
              className="w-full h-auto rounded-xl border border-slate-800 bg-black object-contain"
            />
          </div>

          <div className="flex-1 space-y-4">
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-300">
                Tarea 4 11 Superioridad numérica por zonas
              </div>
              <h3 className="text-lg font-semibold text-slate-50">
                Juego 11 vs 11 con superioridad numérica por zonas sectorizadas
              </h3>
            </div>

            <dl className="grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
              <div className="space-y-1">
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Objetivo
                </dt>
                <dd>
                  Desarrollar superioridades numéricas en distintos sectores del campo para favorecer progresión,
                  circulación y movilidad ofensiva.
                </dd>
              </div>

              <div className="space-y-1">
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Organización
                </dt>
                <dd>
                  11 vs 11 dividido en zonas. En cada sector marcado se debe lograr y aprovechar superioridad numérica en
                  posesión. El equipo con balón debe aplicar conceptos de movilidad, apoyos, cambios de orientación y
                  progresión entre zonas.
                </dd>
              </div>

              <div className="space-y-1 sm:col-span-2">
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Contenidos clave
                </dt>
                <dd>
                  Superioridad numérica, desmarques, triangulaciones, progresión, ocupación de carriles interiores y
                  exteriores.
                </dd>
              </div>

              <div className="space-y-1">
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Tipo de tarea
                </dt>
                <dd>Superioridad numérica zonal.</dd>
              </div>

              <div className="space-y-1">
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Nº de jugadores
                </dt>
                <dd>11 vs 11.</dd>
              </div>

              <div className="space-y-1">
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Espacio
                </dt>
                <dd>Cancha completa sectorizada.</dd>
              </div>

              <div className="space-y-1">
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Duración
                </dt>
                <dd>2025 min.</dd>
              </div>

              <div className="space-y-1">
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Material
                </dt>
                <dd>Cintas, pelotas.</dd>
              </div>
            </dl>
          </div>
        </article>
      </div>
    </section>
  );
}
