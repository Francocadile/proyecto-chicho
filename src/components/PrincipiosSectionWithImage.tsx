import Image from "next/image";

export default function PrincipiosSection() {
	return (
		<section className="space-y-6 border-t border-slate-800 py-16 md:py-20" id="principios">
			<h2 className="text-xl font-semibold text-slate-50">Mis principios como entrenador</h2>
			<div className="grid gap-8 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] md:items-start">
				<div className="space-y-4">
					<ul className="list-disc space-y-2 pl-5 text-sm text-slate-300 sm:text-base">
						<li>Jugar con la misma idea en todas las canchas, adaptando detalles sin perder la identidad.</li>
						<li>Ser protagonistas del juego y respetar el plan acordado con el club.</li>
						<li>Nadie está por encima del equipo: las decisiones se toman pensando en el colectivo.</li>
						<li>El esfuerzo no se negocia: intensidad, disciplina y compromiso diario son obligatorios.</li>
						<li>Presionar para recuperar y volver a atacar, siendo un equipo incómodo para el rival.</li>
						<li>Respetar el juego, al rival y la historia de cada institución donde me toca trabajar.</li>
					</ul>
				</div>
				<div className="mx-auto w-full max-w-xs md:max-w-sm">
					<div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
						<Image
							src="/chicho/chicho13.jpg"
							alt="Juan Leandro 'Chicho' Vogliotti en una charla con el plantel"
							fill
							className="object-cover"
							style={{ objectPosition: "50% center" }}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
