import Image from "next/image";

export default function PrincipiosSection() {
	return (
		<section
			id="principios"
			className="border-t border-slate-800 bg-slate-950 py-16 sm:py-20"
		>
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				{/* Layout principal */}
				<div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-14">
					{/* Columna texto */}
					<div className="flex-1 space-y-6">
						{/* Encabezado */}
						<div className="space-y-3">
							<div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-emerald-300 ring-1 ring-emerald-500/30">
								<span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
								Identidad como entrenador
							</div>
							<h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
								Mis principios como entrenador
							</h2>
							<p className="max-w-2xl text-sm text-slate-300 sm:text-base">
								Mi forma de trabajar se apoya en una idea clara de juego, en el
								compromiso diario y en el respeto por el contexto de cada club.
								Estos principios son la base sobre la que construimos el equipo.
							</p>
						</div>

						{/* Lista de principios */}
						<div className="rounded-2xl bg-slate-900/70 p-6 shadow-lg shadow-black/40 ring-1 ring-slate-800/80">
							<ul className="space-y-3">
								{[
									"Jugar con la misma idea en todas las canchas, adaptando detalles sin perder la identidad.",
									"Ser protagonistas del juego y respetar el plan acordado con el club.",
									"Nadie está por encima del equipo: las decisiones se toman pensando en el colectivo.",
									"El esfuerzo no se negocia: intensidad, disciplina y compromiso diario son obligatorios.",
									"Presionar para recuperar y volver a atacar, siendo un equipo incómodo para el rival.",
									"Respetar el juego, al rival y la historia de cada institución donde me toca trabajar.",
								].map((item) => (
									<li key={item} className="flex gap-3">
										<span className="mt-1.5 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-emerald-500 shadow-md shadow-emerald-500/40" />
										<span className="text-sm text-slate-100 sm:text-[0.95rem]">
											{item}
										</span>
									</li>
								))}
							</ul>
						</div>
					</div>

					{/* Columna imagen */}
					<div className="mx-auto w-full max-w-md">
						<div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/60 shadow-2xl shadow-black/60">
							<Image
								src="/chicho/chicho13.jpg"
								alt="Juan Leandro 'Chicho' Vogliotti en el campo de juego"
								fill
								className="object-cover"
								sizes="(min-width: 1024px) 380px, 100vw"
							/>
							<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-900/10" />

							{/* Barra superpuesta */}
							<div className="absolute bottom-4 left-4 right-4">
								<div className="flex items-center justify-between gap-3 rounded-2xl bg-slate-950/85 px-4 py-3 backdrop-blur ring-1 ring-slate-700/80">
									<div>
										<p className="text-[0.75rem] font-semibold uppercase tracking-wide text-slate-200">
											Trabajo diario en cancha
										</p>
										<p className="mt-0.5 text-[0.8rem] text-slate-400">
											Donde las ideas se convierten en hábitos de juego.
										</p>
									</div>
									<span className="hidden shrink-0 rounded-full bg-emerald-500/10 px-3 py-1 text-[0.65rem] font-medium text-emerald-300 ring-1 ring-emerald-500/40 sm:inline-flex">
										Método propio
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
