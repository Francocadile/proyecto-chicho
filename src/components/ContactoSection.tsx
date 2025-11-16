export default function ContactoSection() {
	return (
		<section
			id="contacto"
			className="space-y-6 border-t border-slate-800 py-16 md:py-20"
		>
			<h2 className="text-xl font-semibold text-slate-50">Contacto</h2>
			<p className="max-w-3xl text-sm text-slate-300 sm:text-base">
				Presidente, director deportivo o gerente de fútbol: si querés conocer en detalle la propuesta,
				podés solicitar una reunión o pedir el dossier completo del Proyecto Integral Futbolístico a
				través de este formulario.
			</p>
			<form
				action="https://formsubmit.co/franco.cadile@gmail.com"
				method="POST"
				className="grid gap-4 text-sm text-slate-50 sm:grid-cols-2"
			>
				<input
					type="hidden"
					name="_subject"
					value="Nuevo contacto desde Proyecto Integral Futbolístico"
				/>
				<input type="hidden" name="_template" value="table" />
				<input type="hidden" name="_captcha" value="false" />
				<div className="flex flex-col gap-1 sm:col-span-1">
					<label htmlFor="nombre" className="text-xs font-semibold uppercase tracking-wide text-slate-400">
						Nombre
					</label>
					<input
						id="nombre"
						name="nombre"
						type="text"
						required
						className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none ring-0 placeholder:text-slate-500 focus:border-slate-400"
						placeholder="Nombre y apellido"
					/>
				</div>
				<div className="flex flex-col gap-1 sm:col-span-1">
					<label htmlFor="club" className="text-xs font-semibold uppercase tracking-wide text-slate-400">
						Club
					</label>
					<input
						id="club"
						name="club"
						type="text"
						required
						className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none ring-0 placeholder:text-slate-500 focus:border-slate-400"
						placeholder="Nombre del club"
					/>
				</div>
				<div className="flex flex-col gap-1 sm:col-span-1">
					<label htmlFor="pais" className="text-xs font-semibold uppercase tracking-wide text-slate-400">
						País
					</label>
					<input
						id="pais"
						name="pais"
						type="text"
						required
						className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none ring-0 placeholder:text-slate-500 focus:border-slate-400"
						placeholder="País"
					/>
				</div>
				<div className="flex flex-col gap-1 sm:col-span-1">
					<label htmlFor="email" className="text-xs font-semibold uppercase tracking-wide text-slate-400">
						Email
					</label>
					<input
						id="email"
						name="email"
						type="email"
						required
						className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none ring-0 placeholder:text-slate-500 focus:border-slate-400"
						placeholder="tu@email.com"
					/>
				</div>
				<div className="flex flex-col gap-1 sm:col-span-2">
					<label htmlFor="mensaje" className="text-xs font-semibold uppercase tracking-wide text-slate-400">
						Mensaje
					</label>
					<textarea
						id="mensaje"
						name="mensaje"
						rows={4}
						required
						className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none ring-0 placeholder:text-slate-500 focus:border-slate-400"
						placeholder="Contanos brevemente qué necesitás..."
					/>
				</div>
				<div className="sm:col-span-2">
					<button
						type="submit"
						className="inline-flex items-center justify-center rounded-full bg-slate-50 px-6 py-2 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-slate-200"
					>
						Enviar consulta
					</button>
				</div>
			</form>
			<div className="flex flex-wrap gap-4 text-sm text-slate-300">
				<a
					href="https://www.instagram.com/chichovogliotti"
					target="_blank"
					rel="noreferrer"
					className="rounded-full border border-slate-700 px-4 py-2 hover:border-slate-400 hover:text-slate-50"
				>
					@chichovogliotti
				</a>
				<a
					href="https://www.instagram.com/juanleandro1985"
					target="_blank"
					rel="noreferrer"
					className="rounded-full border border-slate-700 px-4 py-2 hover:border-slate-400 hover:text-slate-50"
				>
					@juanleandro1985
				</a>
			</div>
		</section>
	);
}
