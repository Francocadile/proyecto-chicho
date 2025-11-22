export default function ObjetivosSection() {
	return (
		<section id="objetivos" className="space-y-6 border-t border-slate-800 py-16 md:py-20">
			<h2 className="text-xl font-semibold text-slate-50">Objetivos del proyecto</h2>
			<p className="max-w-3xl text-sm text-slate-300 sm:text-base">
				Cuando asumo un equipo, el primer paso es alinear mis objetivos con los del club para construir un proyecto
				serio, sostenible y competitivo.
			</p>
			<div className="space-y-3">
				<h3 className="text-lg font-semibold text-slate-50">Lo que busco con mi trabajo</h3>
				<ul className="list-disc space-y-2 pl-5 text-sm text-slate-300 sm:text-base">
					<li>Cumplir las metas definidas junto a la dirigencia, respetando la identidad deportiva e institucional del club.</li>
					<li>Dar al equipo una identidad propia, construida desde la historia, la esencia y la realidad de cada institución.</li>
					<li>Elevar el nivel del primer equipo y conectar el trabajo con las divisiones menores para cuidar el patrimonio del club.</li>
					<li>Diseñar sesiones ajustadas al plantel, potenciando virtudes a partir del análisis individual y colectivo.</li>
					<li>Instalar una mentalidad competitiva, con foco en la mejora diaria en entrenamiento y en partido.</li>
				</ul>
			</div>
			<div className="space-y-3">
				<h3 className="text-lg font-semibold text-slate-50">Video: objetivos del proyecto</h3>
				<p className="max-w-3xl text-sm text-slate-300 sm:text-base">
					En este video explico en primera persona los objetivos y la filosofía que sustentan este proyecto integral
					desde mi mirada como entrenador.
				</p>
				<div className="relative w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900 pt-[56.25%]">
					<iframe
						title="Video sobre los objetivos del proyecto"
						src="https://www.youtube.com/embed/qcB9qLSU9QI"
						className="absolute inset-0 h-full w-full"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					/>
				</div>
			</div>
		</section>
	);
}
