import React from "react";

const objetivosList = [
	"Cumplir las metas definidas junto a la dirigencia, respetando la identidad deportiva e institucional del club.",
	"Dar al equipo una identidad propia, construida desde la historia, la esencia y la realidad de cada institución.",
	"Elevar el nivel del primer equipo y conectar el trabajo con las divisiones menores para cuidar el patrimonio del club.",
	"Diseñar sesiones ajustadas al plantel, potenciando virtudes a partir del análisis individual y colectivo.",
	"Instalar una mentalidad competitiva, con foco en la mejora diaria en entrenamiento y en partido.",
];

export default function ObjetivosSection() {
	return (
		<section
			id="objetivos"
			className="border-t border-slate-800 bg-slate-950 py-16 sm:py-20"
		>
			<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
				{/* Cabecera */}
				<div className="mb-8 space-y-4 sm:mb-10">
					<div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-emerald-300 ring-1 ring-emerald-500/30">
						<span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
						Objetivos del proyecto
					</div>
					<div className="space-y-3">
						<h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
							Construir un proyecto serio, sostenible y competitivo
						</h2>
						<p className="max-w-3xl text-sm text-slate-300 sm:text-base">
							Cuando asumo un equipo, el primer paso es alinear mis objetivos con los del club para construir un
							proyecto que respete la identidad de la institución y compita al máximo de su potencial.
						</p>
					</div>
				</div>

				{/* Contenido principal */}
				<div className="grid gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.1fr)] md:items-start">
					{/* Columna izquierda: resumen y focos clave */}
					<div className="space-y-5">
						<h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
							Lo que busco con mi trabajo
						</h3>
						<p className="text-sm text-slate-300 sm:text-base">
							El objetivo no es solo ganar partidos, sino dejar una estructura de trabajo que eleve el nivel del
							plantel, ordene el día a día y conecte al primer equipo con las divisiones formativas.
						</p>

						<div className="grid gap-3 sm:grid-cols-2">
							<div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
								<p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
									Identidad y planificación
								</p>
								<p className="mt-1.5 text-sm text-slate-200">
									Alinear la idea de juego con la realidad del club y su historia, siempre con un plan claro para cada
									etapa de la temporada.
								</p>
							</div>
							<div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
								<p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
									Desarrollo y competitividad
								</p>
								<p className="mt-1.5 text-sm text-slate-200">
									Potenciar al jugador y al colectivo, instalando hábitos que sostengan el rendimiento en el tiempo.
								</p>
							</div>
						</div>
					</div>

					{/* Columna derecha: lista de objetivos en card */}
					<div className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-5 shadow-lg shadow-black/40 ring-1 ring-slate-900/60">
						<h3 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
							Objetivos concretos
						</h3>
						<ul className="mt-3 space-y-2.5 text-sm text-slate-100 sm:text-[0.95rem]">
							{objetivosList.map((item) => (
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
