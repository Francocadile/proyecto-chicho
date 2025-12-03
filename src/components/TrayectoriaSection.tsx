import React from "react";
import Image from "next/image";

const trayectoriaColumns = [
	{
		title: "Divisiones menores",
		subtitle:
			"Formación en divisiones menores de clubes argentinos de relevancia nacional.",
		clubs: [
			"Talleres de Córdoba",
			"Quilmes Atlético Club",
			"Racing Club (Avellaneda)",
		],
	},
	{
		title: "Ascenso argentino",
		subtitle:
			"Competencia en categorías de ascenso, con planteles exigidos por el resultado cada fin de semana.",
		clubs: [
			"Gimnasia y Tiro de Salta",
			"Estudiantes de Río Cuarto",
			"Cipolletti",
			"Atenas de Río Cuarto",
			"Trinidad",
			"Independiente de Neuquén",
		],
	},
	{
		title: "Colombia · Primera División",
		subtitle:
			"Experiencia en ligas de primera división, enfrentando a clubes tradicionales del fútbol colombiano.",
		clubs: ["Patriotas Boyacá", "Jaguares de Córdoba"],
	},
	{
		title: "Venezuela / Bolivia · Primera División",
		subtitle:
			"Adaptación a distintas realidades de clubes de primera división, alturas y estilos de juego en Venezuela y Bolivia.",
		clubs: [
			"Monagas SC",
			"Guabirá",
			"Real Potosí",
			"Ciclón de Tarija",
			"Destroyers",
			"Sport Boys Warnes",
			"Vaca Diez",
		],
	},
];

export default function TrayectoriaSection() {
	return (
		<section
			id="trayectoria"
			className="border-t border-slate-800 bg-slate-950 py-16 sm:py-20"
		>
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				{/* Cabecera */}
				<div className="mb-10 space-y-4 sm:mb-12">
					<div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-emerald-300 ring-1 ring-emerald-500/30">
						<span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
						Trayectoria profesional
					</div>
					<div className="space-y-3">
						<h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
							Trayectoria de Juan Leandro &quot;Chicho&quot; Vogliotti
						</h2>
						<p className="max-w-3xl text-sm text-slate-300 sm:text-base">
							Nacido en Río Cuarto, Córdoba, el 11 de abril de 1985, desarrolló
							su carrera como delantero profesional en equipos de los torneos de
							ascenso de Argentina y en la Primera División de Bolivia, con
							pasos también por ligas de Haití, Colombia y Venezuela. Esa
							experiencia en contextos muy distintos hoy nutre su mirada como
							entrenador.
						</p>
					</div>
				</div>

				{/* Grid de clubes / países */}
				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
					{trayectoriaColumns.map((column) => (
						<article
							key={column.title}
							className="flex h-full flex-col rounded-2xl border border-slate-800/70 bg-slate-900/60 p-5 shadow-lg shadow-black/40 ring-1 ring-slate-900/60"
						>
							<header className="mb-3 space-y-1.5">
								<h3 className="text-sm font-semibold uppercase tracking-wide text-slate-100">
									{column.title}
								</h3>
								<p className="text-[0.78rem] leading-relaxed text-slate-400">
									{column.subtitle}
								</p>
							</header>
							<ul className="mt-2 space-y-1.5 text-sm text-slate-100">
								{column.clubs.map((club) => (
									<li key={club} className="flex gap-2 text-[0.85rem]">
										<span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
										<span>{club}</span>
									</li>
								))}
							</ul>
						</article>
					))}
				</div>

				{/* Galería profesional de fotos como jugador */}
				<div className="mt-10 motion-safe:animate-[fadeInUpSoft_0.8s_ease-out]">
					<div className="space-y-3">
						<h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
							Imágenes de mi etapa como jugador
						</h3>
						<div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
							<div className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60 shadow-lg shadow-black/40">
								<Image
									src="/chicho/chicho14.jpg"
									alt="Juan Leandro 'Chicho' Vogliotti en acción como jugador (1)"
									fill
									className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
								/>
								<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-70" />
							</div>
							<div className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60 shadow-lg shadow-black/40">
								<Image
									src="/chicho/chicho15.jpg"
									alt="Juan Leandro 'Chicho' Vogliotti en acción como jugador (2)"
									fill
									className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
								/>
								<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-70" />
							</div>
							<div className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60 shadow-lg shadow-black/40">
								<Image
									src="/chicho/chicho16.jpg"
									alt="Juan Leandro 'Chicho' Vogliotti en acción como jugador (3)"
									fill
									className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
								/>
								<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-70" />
							</div>
							<div className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60 shadow-lg shadow-black/40">
								<Image
									src="/chicho/chicho17.jpg"
									alt="Juan Leandro 'Chicho' Vogliotti en acción como jugador (4)"
									fill
									className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
								/>
								<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-70" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
