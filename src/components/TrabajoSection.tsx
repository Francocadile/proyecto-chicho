import Image from "next/image";

export default function TrabajoSection() {
	return (
		<section id="metodologia" className="space-y-6 border-t border-slate-800 py-16 md:py-20">
			<div className="grid gap-8 md:grid-cols-2 md:items-center">
				<div className="order-2 space-y-4 md:order-1">
					<h2 className="text-xl font-semibold text-slate-50">Mi forma de entrenar</h2>
					<p className="max-w-3xl text-sm text-slate-300 sm:text-base">
						Baso mi modelo de entrenamiento en una metodología integrada estructural, donde en una misma sesión
						trabajamos las diferentes situaciones del juego: lo técnico, lo táctico, lo físico y lo psicológico.
						Busco que el jugador entrene siempre en un contexto lo más parecido posible a lo que se encontrará en
						la competencia.
					</p>
					<p className="max-w-3xl text-sm text-slate-300 sm:text-base">
						Cada tarea que diseño tiene una relación directa con el modelo de juego: no se trata de ejercicios
						aisolados, sino de propuestas que conectan con cómo queremos atacar, defender y transitar entre fases.
						De esta forma, el entrenamiento y el partido hablan el mismo idioma.
					</p>
					<p className="max-w-3xl text-sm text-slate-300 sm:text-base">
						Planifico la semana como un todo coherente (microciclo), para que ninguna de estas dimensiones quede
						fuera: carga física, contenidos tácticos, aspectos técnicos y la parte mental del futbolista. El
						objetivo es que el equipo llegue preparado integralmente a la competencia.
					</p>
				</div>
				<div className="order-1 md:order-2">
					<div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
						<Image
							src="/chicho/chicho 2.JPG"
							alt="Entrenamiento de campo dirigido por Juan Pablo 'Chicho' Vogliotti"
							fill
							className="object-cover"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
