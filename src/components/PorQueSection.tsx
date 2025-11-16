export default function PorQueSection() {
	return (
		<section id="porque" className="space-y-6 border-t border-slate-800 py-16 md:py-20">
			<h2 className="text-xl font-semibold text-slate-50">
				¿Por qué elegir este cuerpo técnico?
			</h2>
			<p className="max-w-3xl text-sm text-slate-300 sm:text-base">
				Combinamos experiencia en distintas ligas de Sudamérica con una metodología de trabajo clara y un
				enfoque permanente en el desarrollo del patrimonio del club: sus futbolistas. Diseñamos procesos que
				ordenan el día a día, potencian el rendimiento individual y colectivo, y cuidan el valor del plantel
				como activo estratégico.
			</p>
			<div className="grid gap-4 md:grid-cols-2">
				<div className="space-y-2 rounded-lg border border-slate-800 bg-slate-900/40 p-4">
					<h3 className="text-sm font-semibold text-slate-50">Desarrollo del plantel</h3>
					<p className="text-xs text-slate-300">
						Planes de trabajo orientados a la mejora individual y colectiva, para revalorizar jugadores y
						aumentar el patrimonio deportivo y económico del club.
					</p>
				</div>
				<div className="space-y-2 rounded-lg border border-slate-800 bg-slate-900/40 p-4">
					<h3 className="text-sm font-semibold text-slate-50">Modelo de juego claro</h3>
					<p className="text-xs text-slate-300">
						Un modelo de juego definido, entrenable y medible, que da coherencia a las sesiones y a las
						decisiones tácticas de cada partido.
					</p>
				</div>
				<div className="space-y-2 rounded-lg border border-slate-800 bg-slate-900/40 p-4">
					<h3 className="text-sm font-semibold text-slate-50">Trabajo integrado del cuerpo técnico</h3>
					<p className="text-xs text-slate-300">
						Sinergia entre campo, análisis de rivales y preparación física para que todas las áreas remen en
						la misma dirección.
					</p>
				</div>
				<div className="space-y-2 rounded-lg border border-slate-800 bg-slate-900/40 p-4">
					<h3 className="text-sm font-semibold text-slate-50">Adaptación al contexto</h3>
					<p className="text-xs text-slate-300">
						Metodología flexible que se ajusta a la realidad del club, la idiosincrasia de su gente y las
						exigencias tácticas de la liga donde compite.
					</p>
				</div>
			</div>
		</section>
	);
}
