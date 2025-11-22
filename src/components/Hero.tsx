import Image from "next/image";

export default function Hero() {
	return (
		<section className="pt-10 sm:pt-16">
			<div className="flex flex-col items-center gap-10 sm:flex-row sm:items-start sm:justify-between">
				<div className="order-2 w-full space-y-8 text-center sm:order-1 sm:max-w-xl sm:text-left">
					<p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
						Presentación oficial
					</p>
					<h1 className="text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl md:text-6xl">
						Juan Leandro &apos;Chicho&apos; Vogliotti
					</h1>
					<p className="mx-auto max-w-2xl text-sm text-slate-300 sm:mx-0 sm:text-base">
						Exdelantero profesional y actual entrenador de fútbol argentino, nacionalizado boliviano.
						Esta página presenta mi Proyecto Integral Futbolístico: mi modelo de juego, mi metodología de
							entrenamiento y mi forma de trabajar junto a los clubes que me confían su primer equipo.
					</p>
					<p className="mx-auto max-w-2xl text-sm text-slate-300 sm:mx-0 sm:text-base">
						Mi compromiso es darle al equipo una identidad clara, revalorizar el plantel y competir al
							máximo nivel posible en cada torneo, respetando la historia y la realidad de cada institución.
					</p>
					<div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-start">
						<a
							href="#modelo"
							className="inline-flex items-center justify-center rounded-full bg-slate-50 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-md transition hover:bg-slate-200 hover:shadow-lg"
						>
							Ver modelo de juego
						</a>
						<a
							href="#contacto"
							className="inline-flex items-center justify-center rounded-full border border-slate-500 px-6 py-2.5 text-sm font-semibold text-slate-50 shadow-sm transition hover:border-slate-300 hover:bg-slate-900 hover:shadow-md"
						>
							Agendar una reunión
						</a>
					</div>
				</div>
				<div className="order-1 w-full sm:order-2 sm:max-w-xs">
					<div className="relative w-full max-w-sm aspect-[3/4] overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
						<Image src="/chicho/chicho1.jpg" alt="Chicho Vogliotti" fill className="object-cover" />
					</div>
				</div>
			</div>
		</section>
	);
}
