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
			<nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
				<div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
					Proyecto Integral Futbolístico
				</div>
				<div className="hidden gap-6 text-sm text-slate-300 sm:flex">
					{links.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className="hover:text-slate-50"
						>
							{link.label}
						</a>
					))}
				</div>
			</nav>
		</header>
	);
}
