import type { ReactNode } from "react";

interface DashboardCardProps {
	children: ReactNode;
	className?: string;
}

/**
 * Card base utilizado dentro do dashboard principal.
 *
 * Mantém um padrão visual único para todas as áreas
 * do painel da aplicação.
 */
export function DashboardCard({
	children,
	className = "",
}: Readonly<DashboardCardProps>) {
	return (
		<div
			className={`
				rounded-2xl
				border
				border-zinc-800
				bg-[#11161C]
				p-6
				transition-all
				duration-300
				hover:border-zinc-700
				${className}
			`}
		>
			{children}
		</div>
	);
}