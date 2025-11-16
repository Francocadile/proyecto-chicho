export default function TrayectoriaSection() {
	return (
		<section id="trayectoria" className="space-y-6 border-t border-slate-800 py-16 md:py-20">
			<h2 className="text-xl font-semibold text-slate-50">Trayectoria</h2>
			<p className="max-w-3xl text-sm text-slate-300 sm:text-base">
				El proyecto se nutre de la experiencia acumulada en diferentes contextos competitivos: formación
				juvenil, ascenso, primeras divisiones de Sudamérica y diferentes culturas futbolísticas. Esta
				trayectoria permite ofrecer una mirada integral y actualizada sobre las demandas del fútbol
				profesional.
			</p>
			<div className="grid gap-6 text-sm text-slate-300 sm:grid-cols-2 lg:grid-cols-4">
				<div className="space-y-3">
					<div className="space-y-1">
						<h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
							Divisiones menores
						</h3>
						<p className="text-xs text-slate-400">Formación de juveniles de elite y detección temprana de talento.</p>
					</div>
					<ul className="list-disc space-y-1 pl-4">
						<li>Clubes de formación juvenil</li>
						<li>Escuelas de fútbol y academias</li>
					</ul>
				</div>
				<div className="space-y-3">
					<div className="space-y-1">
						<h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
							Ascenso argentino
						</h3>
						<p className="text-xs text-slate-400">Gestión de planteles en ligas competitivas y contextos de presión diaria.</p>
					</div>
					<ul className="list-disc space-y-1 pl-4">
						<li>Clubes del ascenso y torneos federales</li>
						<li>Experiencias en contextos de alta exigencia y movilidad de planteles</li>
					</ul>
				</div>
				<div className="space-y-3">
					<div className="space-y-1">
						<h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
							Colombia - Primera división
						</h3>
						<p className="text-xs text-slate-400">Competencia en primeras divisiones de Sudamérica y torneos internacionales.</p>
					</div>
					<ul className="list-disc space-y-1 pl-4">
						<li>Ligas profesionales colombianas</li>
						<li>Competencias locales e internacionales</li>
					</ul>
				</div>
				<div className="space-y-3">
					<div className="space-y-1">
						<h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
							Venezuela / Bolivia - Primera división
						</h3>
						<p className="text-xs text-slate-400">Adaptación a diferentes estilos, alturas y realidades de clubes de primera.</p>
					</div>
					<ul className="list-disc space-y-1 pl-4">
						<li>Clubes de primera división de Venezuela y Bolivia</li>
						<li>Escenarios competitivos con grandes exigencias físicas y tácticas</li>
					</ul>
				</div>
			</div>
		</section>
	);
}
