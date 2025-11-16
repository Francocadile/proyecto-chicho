export default function ObjetivosSection() {
	return (
		<section id="objetivos" className="space-y-6 border-t border-slate-800 pt-10">
			<h2 className="text-xl font-semibold text-slate-50">Objetivos del proyecto</h2>
			<p className="max-w-3xl text-sm text-slate-300 sm:text-base">
				Qué ofrecemos al club: una estructura de trabajo clara para ordenar el día a día del equipo en
				función de un modelo de juego definido y medible.
			</p>
			<div className="space-y-3">
				<h3 className="text-lg font-semibold text-slate-50">Qué ofrecemos al club</h3>
				<ul className="list-disc space-y-2 pl-5 text-sm text-slate-300 sm:text-base">
					<li>Definir y sostener una identidad de juego clara, coherente con la historia y el contexto del club.</li>
					<li>Desarrollar el patrimonio del club mejorando el rendimiento y la proyección de sus futbolistas.</li>
					<li>Buscar resultados sostenibles en el tiempo, evitando soluciones aisladas de corto plazo.</li>
					<li>Ordenar la metodología de trabajo: microciclos, sesiones y contenidos alineados al modelo.</li>
				</ul>
			</div>
		</section>
	);
}
