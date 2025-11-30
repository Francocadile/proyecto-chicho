import React from "react";

const missionPoints = [
	"Consolidar hábitos de mejora continua en los futbolistas, promoviendo el deseo de superación y el aprendizaje permanente.",
	"Convertir ese crecimiento individual en objetivos grupales e individuales alcanzados junto al club.",
	"Que el cuerpo técnico sea una referencia por su coherencia, seriedad y forma de competir.",
];

export default function MisionSection() {
	return (
		<section
			id="mision"
			className="border-t border-slate-800 bg-slate-950 py-16 sm:py-20"
		>
			<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
				{/* Cabecera */}
				<div className="mb-8 space-y-4 sm:mb-10">
					<div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-emerald-300 ring-1 ring-emerald-500/30">
						<span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
						Mi misión como entrenador
					</div>
					<div className="space-y-3">
						<h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
							Consolidar una cultura de mejora constante
						</h2>
						<p className="max-w-3xl text-sm text-slate-300 sm:text-base">
							Mi misión es consolidar hábitos de mejora continua en los futbolistas, promoviendo el deseo de
							superación y el aprendizaje permanente, siempre alineado con la identidad y los objetivos del club.
						</p>
					</div>
				</div>

				{/* Contenido principal */}
				<div className="grid gap-6 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-start">
					{/* Columna izquierda: desarrollo de misión */}
					<div className="space-y-4">
						<h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
							Cómo entiendo mi rol
						</h3>
						<p className="text-sm text-slate-300 sm:text-base">
							Busco que el crecimiento del jugador se traduzca en objetivos grupales e individuales alcanzados
							junto al club, y que cada etapa de trabajo deje una estructura que pueda sostenerse en el tiempo,
							más allá de los nombres propios.
						</p>
						<p className="text-sm text-slate-300 sm:text-base">
							El foco está en entrenar comportamientos, instalar hábitos y ordenar el día a día para que el equipo
							compita con una identidad clara y reconocible.
						</p>
					</div>

					{/* Columna derecha: puntos clave en card */}
					<div className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-5 shadow-lg shadow-black/40 ring-1 ring-slate-900/60">
						<h3 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
							Ejes de mi misión
						</h3>
						<ul className="mt-3 space-y-2.5 text-sm text-slate-100 sm:text-[0.95rem]">
							{missionPoints.map((item) => (
								<li key={item} className="flex gap-3">
									<span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
									<span>{item}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
