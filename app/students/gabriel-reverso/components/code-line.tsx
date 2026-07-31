interface CodeLineProps {
	number: number;
	children: React.ReactNode;
}

/**
 * Linha individual do editor de código.
 *
 * Mantém o visual semelhante a editores modernos
 * como VS Code e GitHub Codespaces.
 */
export function CodeLine({
	number,
	children,
}: Readonly<CodeLineProps>) {
	return (
		<div className="flex gap-6">
			<span className="w-6 select-none text-right text-zinc-600">
				{number}
			</span>

			<code className="text-sm text-zinc-300">
				{children}
			</code>
		</div>
	);
}