import Image from "next/image";
import PlanificacionSemanalSection from "@/components/PlanificacionSemanalSection";

export default function TrabajoSection() {
	return (
		<section id="metodologia" className="space-y-6 border-t border-slate-800 py-16 md:py-20">
			<div className="grid gap-8 md:grid-cols-2 md:items-center">
				<div className="order-2 space-y-4 md:order-1">
					<h2 className="text-xl font-semibold text-slate-50">Mi forma de entrenar</h2>
					<p className="max-w-3xl text-sm text-slate-300 sm:text-base">
						Trabajo con una metodología integrada estructural: en cada sesión se abordan de forma conjunta las
						dimensiones técnicas, tácticas, físicas y psicológicas del juego. El objetivo es que el jugador entrene
						siempres en contextos muy cercanos a lo que se encontrará en la competencia.
					</p>
					<p className="max-w-3xl text-sm text-slate-300 sm:text-base">
						Cada tarea está conectada con el modelo de juego: evitamos ejercicios aislados y proponemos situaciones
						que reflejan cómo queremos atacar, defender y transitar entre fases, para que el entrenamiento y el
						partido hablen el mismo idioma.
					</p>
					<p className="max-w-3xl text-sm text-slate-300 sm:text-base">
						La semana se organiza como un microciclo coherente, donde ninguna dimensión queda fuera: cargas físicas,
						contenidos tácticos, aspectos técnicos y parte mental. Busco que el equipo llegue preparado de forma
						integral al día de partido.
					</p>
				</div>
				<div className="order-1 md:order-2">
					<div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
						<Image
							src="/chicho/chicho2.jpg"
							alt="Entrenamiento de campo dirigido por Juan Pablo 'Chicho' Vogliotti"
							fill
							className="object-cover object-top"
						/>
					</div>
				</div>
			</div>
			<PlanificacionSemanalSection />
		</section>
	);
}
