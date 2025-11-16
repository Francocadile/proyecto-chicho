export default function TrayectoriaSection() {
	return (
		<section id="trayectoria" className="space-y-6 border-t border-slate-800 pt-10">
			<h2 className="text-xl font-semibold text-slate-50">Trayectoria</h2>
			<p className="max-w-3xl text-sm text-slate-300 sm:text-base">
				El proyecto se nutre de la experiencia acumulada en diferentes contextos competitivos: formación
				juvenil, ascenso, primeras divisiones de Sudamérica y diferentes culturas futbolísticas. Esta
				trayectoria permite ofrecer una mirada integral y actualizada sobre las demandas del fútbol
				profesional.
			</p>
			<div className="grid gap-6 text-sm text-slate-300 sm:grid-cols-2 lg:grid-cols-4">
				<div className="space-y-2">
					<h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
						Divisiones menores
					</h3>
					<ul className="space-y-1">
						<li>Clubes de formación juvenil</li>
						<li>Escuelas de fútbol y academias</li>
					</ul>
				</div>
				<div className="space-y-2">
					<h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
						Ascenso argentino
					</h3>
					<ul className="space-y-1">
						<li>Clubes del ascenso y torneos federales</li>
						<li>Experiencias en contextos de alta exigencia y movilidad de planteles</li>
					</ul>
				</div>
				<div className="space-y-2">
					<h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
						Colombia - Primera división
					</h3>
					<ul className="space-y-1">
						<li>Ligas profesionales colombianas</li>
						<li>Competencias locales e internacionales</li>
					</ul>
				</div>
				<div className="space-y-2">
					<h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
						Venezuela / Bolivia - Primera división
					</h3>
					<ul className="space-y-1">
						<li>Clubes de primera división de Venezuela y Bolivia</li>
						<li>Adaptación a diferentes estilos, alturas y escenarios competitivos</li>
					</ul>
				</div>
			</div>
		</section>
	);
}
