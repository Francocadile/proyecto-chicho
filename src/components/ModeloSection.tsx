import Image from "next/image";

export default function ModeloSection() {
	return (
		<section id="modelo" className="space-y-6 border-t border-slate-800 py-16 md:py-20">
			<div className="grid md:grid-cols-2 md:gap-12 items-center">
				<div className="mb-6 md:mb-0 h-full">
					<div className="relative w-full h-full aspect-[21/9] overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
						<Image
							src="/chicho/chicho3.jpg"
							alt="Chicho Vogliotti dirigiendo"
							fill
							className="object-cover object-[60%_center]"
						/>
					</div>
				</div>
				<div className="space-y-6">
					<h2 className="text-xl font-semibold text-slate-50">Mi modelo de juego</h2>
					<p className="max-w-3xl text-sm text-slate-300 sm:text-base">
						Mi modelo de juego se fue construyendo con el tiempo, combinando mi forma de ser, lo que busco en mis
							equipos y las influencias de entrenadores y contextos en los que me tocó competir. Cada etapa ayudó a
							definir qué quiero ver en el campo y cómo deseo que compita el equipo.
						</p>
					<p className="max-w-3xl text-sm text-slate-300 sm:text-base">
						Mis equipos deben pensar siempre en el arco rival y buscar el resultado en cualquier cancha. El foco está
							en elevar la competitividad y el nivel físico y técnico del plantel sin perder de vista la idea de juego
							que nos identifica.
						</p>
					<p className="max-w-3xl text-sm text-slate-300 sm:text-base">
						Propongo un estilo mixto: con intención de tener la posesión y el protagonismo, pero con capacidad para
							adaptar el bloque defensivo (bajo, medio o alto) y el uso del contraataque según el rival, el partido
							y la realidad del club. Lo importante es que el equipo entienda cuándo y cómo usar cada recurso.
						</p>
					<div className="space-y-3">
						<h3 className="text-lg font-semibold text-slate-50">Conceptos clave de mi modelo</h3>
						<ul className="list-disc space-y-2 pl-5 text-sm text-slate-300 sm:text-base">
							<li>Protagonismo con balón, usando la posesión para conducir el juego con intención y no solo para tener la pelota.</li>
							<li>Jugar lo más lejos posible de nuestro arco, atacando con muchos jugadores y defendiendo también con la pelota.</li>
							<li>Bloques defensivos flexibles (bajo, medio o alto) según el contexto, sin perder la identidad del equipo.</li>
							<li>Uso inteligente de transiciones y contraataques para castigar al rival cuando queda desorganizado.</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
