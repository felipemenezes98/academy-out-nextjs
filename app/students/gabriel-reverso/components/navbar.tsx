"use client";

import Link from "next/link";

import { Code2 } from "lucide-react";

import { Button } from "@/components/ui/button";

/**
 * Links exibidos na navegação.
 *
 * Como esta landing page não possui múltiplas páginas,
 * todos apontam para âncoras internas.
 */
const NAV_ITEMS = [
	{
		label: "Features",
		href: "#features",
	},
	{
		label: "Dashboard",
		href: "#dashboard",
	},
	{
		label: "Documentation",
		href: "#documentation",
	},
];

/**
 * Barra de navegação principal.
 */
export function Navbar() {
	return (
		<header className="sticky top-0 z-50 border-b border-transparent backdrop-blur-xl">
			<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
				{/* Logo */}
				<Link
					href="/students/gabriel-reverso"
					className="group flex items-center gap-3"
				>
					<div
						className="
							flex
							h-10
							w-10
							items-center
							justify-center
							rounded-xl
							border
							border-zinc-800
							bg-zinc-900
							transition-all
							duration-300
							group-hover:border-blue-500/40
							group-hover:bg-zinc-800
						"
					>
						<Code2
							size={20}
							className="text-blue-400"
						/>
					</div>

					<div className="flex flex-col">
						<span className="text-sm font-semibold tracking-tight text-white">
							DevPilot AI
						</span>

						<span className="text-xs text-zinc-500">
							Your AI Software Engineer
						</span>
					</div>
				</Link>

				{/* Navegação Desktop */}
				<nav className="hidden items-center gap-8 md:flex">
					{NAV_ITEMS.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="
								text-sm
								font-medium
								text-zinc-400
								transition-colors
								duration-200
								hover:text-white
							"
						>
							{item.label}
						</Link>
					))}
				</nav>

				{/* Ações */}
				<div className="flex items-center gap-3">
					<Button
						variant="ghost"
						className="
							hidden
							text-zinc-400
							hover:bg-zinc-900
							hover:text-white
							md:flex
						"
					>
						GitHub
					</Button>

					<Button
						className="
							bg-blue-600
							text-white
							shadow-lg
							shadow-blue-500/10
							transition-all
							duration-300
							hover:bg-blue-500
							hover:shadow-blue-500/30
						"
					>
						Get Started
					</Button>
				</div>
			</div>
		</header>
	);
}