import Link from "next/link";

import { Code2 } from "lucide-react";

/**
 * Footer da aplicação.
 *
 * Mantém uma estrutura simples e compacta,
 * seguindo o padrão visual de produtos SaaS modernos.
 */
export function Footer() {
	return (
		<footer className="border-t border-zinc-900">
			<div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
				<div
					className="
						flex
						flex-col
						gap-6
						md:flex-row
						md:items-center
						md:justify-between
					"
				>
					{/* Marca */}
					<Link
						href="/students/gabriel-reverso"
						className="flex items-center gap-3"
					>
						<div
							className="
								flex
								h-9
								w-9
								items-center
								justify-center
								rounded-lg
								border
								border-zinc-800
								bg-zinc-900
							"
						>
							<Code2
								size={18}
								className="text-blue-400"
							/>
						</div>

						<div>
							<p className="text-sm font-semibold text-white">
								DevPilot AI
							</p>

							<p className="text-xs text-zinc-500">
								Your AI Software Engineer
							</p>
						</div>
					</Link>

					{/* Links */}
					<nav className="flex gap-6">
						<FooterLink href="#features">
							Features
						</FooterLink>

						<FooterLink href="#dashboard">
							Dashboard
						</FooterLink>

						<FooterLink href="#documentation">
							Documentation
						</FooterLink>
					</nav>

					{/* Social */}
					<Link
						href="#"
						className="
							text-sm
							text-zinc-400
							transition-colors
							hover:text-white
						"
					>
						GitHub
					</Link>
				</div>

				{/* Copyright */}
				<div className="mt-6 border-t border-zinc-900 pt-6">
					<p className="text-xs text-zinc-600">
						© 2026 DevPilot AI. Built with Next.js and AI.
					</p>
				</div>
			</div>
		</footer>
	);
}


function FooterLink({
	children,
	href,
}: {
	children: React.ReactNode;
	href: string;
}) {
	return (
		<Link
			href={href}
			className="
				text-sm
				text-zinc-500
				transition-colors
				hover:text-white
			"
		>
			{children}
		</Link>
	);
}