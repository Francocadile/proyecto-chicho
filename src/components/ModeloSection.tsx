export default function ModeloSection() {
	return (
		<section id="modelo" className="space-y-6 border-t border-slate-800 pt-10">
			<h2 className="text-xl font-semibold text-slate-50">Nuestro modelo de juego</h2>
			<p className="max-w-3xl text-sm text-slate-300 sm:text-base">
				Buscamos ser protagonistas del juego, con una posesión inteligente que acerque al equipo a las
				zonas de mayor peligro. La pelota es una herramienta para atacar, defender y controlar los
				tiempo del partido, no un fin en sí mismo.
			</p>
			<p className="max-w-3xl text-sm text-slate-300 sm:text-base">
				El modelo se adapta al contexto: rival, cancha, clima y momento de la temporada. Mantenemos una
				identidad clara, pero flexible, con un equipo capaz de presionar alto, replegar cuando sea
				necesario y sostener la intensidad durante los 90 minutos.
			</p>
			<div className="space-y-3">
				<h3 className="text-lg font-semibold text-slate-50">Principios tácticos</h3>
				<ul className="list-disc space-y-2 pl-5 text-sm text-slate-300 sm:text-base">
					<li>Protagonismo con y sin balón: buscamos imponer nuestra idea en cada fase del juego.</li>
					<li>Ocupación racional de espacios para crear superioridades y líneas de pase constantes.</li>
					<li>Presión coordinada tras pérdida para recuperar rápido y evitar transiciones del rival.</li>
					<li>Equilibrio defensivo permanente para proteger el arco y minimizar situaciones claras del rival.</li>
				</ul>
			</div>
		</section>
	);
}
