import Image from "next/image";

export default function TrabajoSection() {
	return (
		<section id="metodologia" className="space-y-6 border-t border-slate-800 py-16 md:py-20">
			<div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
				<div className="space-y-4 md:max-w-xl">
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
				<div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl border border-slate-800 bg-slate-900 md:max-w-sm">
					<Image
						src="/chicho/Chicho 2.jpg"
						alt="Entrenamiento de campo dirigido por Juan Pablo 'Chicho' Vogliotti"
						fill
						className="object-cover"
					/>
				</div>
			</div>
		</section>
	);
}
