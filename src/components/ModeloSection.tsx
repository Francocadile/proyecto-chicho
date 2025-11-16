export default function ModeloSection() {
	return (
		<section id="modelo" className="space-y-6 border-t border-slate-800 pt-10">
			<h2 className="text-xl font-semibold text-slate-50">Nuestro modelo de juego</h2>
			<p className="max-w-3xl text-sm text-slate-300 sm:text-base">
				Buscamos un equipo protagonista, que sepa qué hacer con y sin balón y que pueda adaptarse al rival,
				al campo y al momento de la temporada sin perder su plan de juego.
			</p>
			<p className="max-w-3xl text-sm text-slate-300 sm:text-base">
				El modelo se adapta a la historia e idiosincrasia del club, y al mismo tiempo responde a las
				exigencias tácticas de la liga en la que compite.
			</p>
			<div className="space-y-3">
				<h3 className="text-lg font-semibold text-slate-50">Principios tácticos</h3>
				<ul className="list-disc space-y-2 pl-5 text-sm text-slate-300 sm:text-base">
					<li>Protagonismo con balón: queremos que el equipo tenga iniciativa y use la posesión para generar peligro.</li>
					<li>Recuperación rápida tras pérdida, con una presión organizada para cortar el avance del rival.</li>
					<li>Orden defensivo en todas las líneas, reduciendo espacios y protegiendo el área propia.</li>
					<li>Aprovechar las transiciones ataque-defensa y defensa-ataque como momentos clave para desequilibrar.</li>
				</ul>
			</div>
		</section>
	);
}
