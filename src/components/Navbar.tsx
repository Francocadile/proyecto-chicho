const links = [
	{ href: "#inicio", label: "Inicio" },
	{ href: "#objetivos", label: "Objetivos" },
	{ href: "#metodologia", label: "Metodología" },
	{ href: "#modelo", label: "Modelo" },
	{ href: "#principios", label: "Principios" },
	{ href: "#trayectoria", label: "Trayectoria" },
	{ href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
	return (
			<header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
				<nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
					<div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
						Proyecto Integral Futbolístico
					</div>
					<div className="hidden items-center gap-8 text-xs font-medium text-slate-300 sm:flex">
					{links.map((link) => (
						<a
							key={link.href}
							href={link.href}
								className="relative pb-1 transition-colors hover:text-slate-50 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:scale-x-0 after:bg-slate-500 after:transition-transform after:duration-150 hover:after:scale-x-100"
						>
							{link.label}
						</a>
					))}
				</div>
			</nav>
		</header>
	);
}
