import Image from "next/image";
import React from "react";

const modelConcepts = [
	"Protagonismo con balón: usar la posesión para conducir el juego con intención y no solo para tener la pelota.",
	"Atacar lo más lejos posible de nuestro arco, sumando muchos jugadores al ataque y defendiendo también con la pelota.",
	"Bloques defensivos flexibles (bajo, medio o alto) según el rival, el momento del partido y la realidad del club.",
	"Presión tras pérdida y reacción rápida para volver a atacar y sostener la intensidad del juego.",
	"Equipo compacto, con distancias cortas entre líneas y líneas de pase claras para facilitar la toma de decisiones.",
];

export default function ModeloSection() {
	return (
		<section
			id="modelo"
			className="border-t border-slate-800 bg-slate-950 py-16 sm:py-20"
		>
			<div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
				{/* Imagen grande a la izquierda */}
				<div className="w-full lg:w-[45%]">
					<div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900 shadow-xl shadow-black/40 ring-1 ring-slate-900/70">
						<Image
							src="/chicho/chicho3.jpg"
							alt="Juan Leandro 'Chicho' Vogliotti dirigiendo en campo durante un entrenamiento"
							fill
							sizes="(min-width: 1024px) 40vw, 100vw"
							className="object-cover"
							style={{ objectPosition: "50% center" }}
							priority
						/>
						{/* Filtro sutil */}
						<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
						{/* Etiqueta sobre la foto */}
						<div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 text-xs">
							<div>
								<p className="text-[0.7rem] font-semibold uppercase tracking-wide text-slate-300">
									Trabajo diario en cancha
								</p>
								<p className="mt-0.5 text-[0.7rem] text-slate-300/80">
									Donde las ideas se convierten en comportamientos de juego.
								</p>
							</div>
							<span className="hidden shrink-0 rounded-full bg-emerald-500/90 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-slate-950 sm:inline-flex">
								Modelo propio
							</span>
						</div>
					</div>
				</div>

				{/* Texto a la derecha */}
				<div className="w-full space-y-6 lg:w-[55%]">
					{/* Cabecera */}
					<div className="space-y-3">
						<div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-wide text-emerald-300 ring-1 ring-emerald-500/30">
							<span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
							Mi modelo de juego
						</div>
						<h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
							Un modelo construido desde la experiencia y la identidad
						</h2>
						<p className="text-sm text-slate-300 sm:text-base">
							Mi modelo de juego se fue construyendo con el tiempo, combinando mi forma de ser, lo que busco en mis
							equipos y las influencias de entrenadores y contextos en los que me tocó competir. Cada etapa ayudó a
							definir qué quiero ver en el campo y cómo deseo que compita el equipo.
						</p>
						<p className="text-sm text-slate-300 sm:text-base">
							Mis equipos deben pensar siempre en el arco rival, buscar el resultado en cualquier cancha y competir con
							una mentalidad alta. El foco está en elevar la competitividad, el nivel físico y técnico del plantel sin
							perder de vista la idea de juego que nos identifica.
						</p>
						<p className="text-sm text-slate-300 sm:text-base">
							Propongo un estilo mixto: intención de tener la posesión y el protagonismo, pero con capacidad para
							adaptar el bloque defensivo y utilizar el contrataque según el rival, el partido y la realidad del club.
							Lo importante es que el equipo entienda cuándo y cómo usar cada recurso.
						</p>
					</div>

					{/* Bloque de conceptos clave */}
					<div className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-5 shadow-lg shadow-black/30 ring-1 ring-slate-900/60">
						<h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
							Conceptos clave de mi modelo
						</h3>
						<ul className="mt-3 space-y-2.5 text-sm text-slate-100 sm:text-[0.95rem]">
							{modelConcepts.map((item) => (
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
