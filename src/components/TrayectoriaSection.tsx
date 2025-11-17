export default function TrayectoriaSection() {
	return (
		<section id="trayectoria" className="space-y-6 border-t border-slate-800 py-16 md:py-20">
			<h2 className="text-xl font-semibold text-slate-50">Trayectoria de Juan Pablo &apos;Chicho&apos; Vogliotti</h2>
			<p className="max-w-3xl text-sm text-slate-300 sm:text-base">
				Mi recorrido como futbolista y entrenador se fue construyendo en distintos contextos de Sudamérica,
				lo que me permitió entender las demandas reales del juego, las presiones del resultado y las
				diferentes formas de vivir el fútbol en nuestra región.
			</p>
			<div className="grid gap-6 text-sm text-slate-300 sm:grid-cols-2 lg:grid-cols-4">
				<div className="space-y-3">
					<div className="space-y-1">
						<h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
							Divisiones menores
						</h3>
						<p className="text-xs text-slate-400">
							Formación en divisiones menores de clubes argentinos de relevancia nacional.
						</p>
					</div>
					<ul className="list-disc space-y-1 pl-4">
						<li>Talleres de Córdoba</li>
						<li>Quilmes Atlético Club</li>
						<li>Racing de Córdoba</li>
					</ul>
				</div>
				<div className="space-y-3">
					<div className="space-y-1">
						<h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
							Ascenso argentino
						</h3>
						<p className="text-xs text-slate-400">
							Competencia en categorías de ascenso, con planteles exigidos por el resultado cada fin de semana.
						</p>
					</div>
					<ul className="list-disc space-y-1 pl-4">
						<li>Gimnasia y Tiro de Salta</li>
						<li>Estudiantes de Río Cuarto</li>
						<li>Cipolletti</li>
						<li>Atenas de Río Cuarto</li>
						<li>Trinidad</li>
						<li>Independiente de Neuquén</li>
					</ul>
				</div>
				<div className="space-y-3">
					<div className="space-y-1">
						<h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
							Colombia - Primera división
						</h3>
						<p className="text-xs text-slate-400">
							Experiencia en ligas de primera división, enfrentando a clubes tradicionales del fútbol colombiano.
						</p>
					</div>
					<ul className="list-disc space-y-1 pl-4">
						<li>Patriotas Boyacá</li>
						<li>Jaguares de Córdoba</li>
					</ul>
				</div>
				<div className="space-y-3">
					<div className="space-y-1">
						<h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
							Venezuela / Bolivia - Primera división
						</h3>
						<p className="text-xs text-slate-400">
							Adaptación a distintas realidades de clubes de primera división, alturas y estilos de juego en Venezuela y Bolivia.
						</p>
					</div>
					<ul className="list-disc space-y-1 pl-4">
						<li>Monagas SC</li>
						<li>Guabirá</li>
						<li>Real Potosí</li>
						<li>Ciclón de Tarija</li>
						<li>Destroyers</li>
						<li>Sport Boys Warnes</li>
						<li>Vaca Diez</li>
					</ul>
				</div>
			</div>
		</section>
	);
}
