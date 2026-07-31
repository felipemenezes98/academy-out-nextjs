import {
	CheckCircle2,
	Code2,
	Sparkles,
} from "lucide-react";

import { CodeLine } from "./code-line";

/**
 * Demonstração do DevPilot analisando código.
 *
 * Esta seção é apenas visual.
 * Nenhum código é realmente executado.
 */
export function CodePreviewSection() {
	return (
		<section
			id="documentation"
			className="py-32"
		>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				{/* Cabeçalho */}
				<div className="mx-auto max-w-3xl text-center">
					<span className="text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
						AI Code Intelligence
					</span>

					<h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
						Understand.
						<br />
						Improve.
						<br />
						Ship faster.
					</h2>

					<p className="mt-6 text-lg leading-8 text-zinc-400">
						DevPilot analyzes your codebase and provides intelligent
						suggestions to improve quality, reliability and
						maintainability.
					</p>
				</div>

				{/* Editor */}
				<div
					className="
						mt-20
						overflow-hidden
						rounded-3xl
						border
						border-zinc-800
						bg-[#0D1117]
						shadow-2xl
						shadow-black/40
					"
				>
					<div className="grid lg:grid-cols-2">
						{/* Código */}
						<div className="border-b border-zinc-800 lg:border-b-0 lg:border-r">
							<div className="flex items-center gap-2 border-b border-zinc-800 px-6 py-4">
								<Code2
									size={18}
									className="text-blue-400"
								/>

								<span className="text-sm text-zinc-400">
									auth.service.ts
								</span>
							</div>

							<div className="space-y-2 overflow-x-auto p-6 font-mono">
								<CodeLine number={1}>
									<span className="text-purple-400">
										export
									</span>{" "}
									<span className="text-blue-400">
										async function
									</span>{" "}
									<span className="text-yellow-300">
										login
									</span>
									(
									<span className="text-zinc-300">
										user
									</span>
									)
									{" {"}
								</CodeLine>

								<CodeLine number={2}>
									&nbsp;&nbsp;
									<span className="text-purple-400">
										const
									</span>{" "}
									token =
									<span className="text-blue-400">
										await
									</span>{" "}
									auth.authenticate(user);
								</CodeLine>

								<CodeLine number={3}>
									&nbsp;&nbsp;
									<span className="text-purple-400">
										return
									</span>{" "}
									token;
								</CodeLine>

								<CodeLine number={4}>
									{"}"}
								</CodeLine>
							</div>
						</div>

						{/* Sugestões IA */}
						<div>
							<div className="flex items-center gap-2 border-b border-zinc-800 px-6 py-4">
								<Sparkles
									size={18}
									className="text-blue-400"
								/>

								<span className="text-sm text-zinc-400">
									DevPilot Suggestions
								</span>
							</div>

							<div className="space-y-4 p-6">
								<Suggestion>
									Add input validation before authentication.
								</Suggestion>

								<Suggestion>
									Handle authentication errors explicitly.
								</Suggestion>

								<Suggestion>
									Generate integration tests for this flow.
								</Suggestion>

								<Suggestion>
									Improve token security strategy.
								</Suggestion>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}


function Suggestion({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div
			className="
				flex
				gap-3
				rounded-xl
				border
				border-zinc-800
				bg-zinc-900/50
				p-4
			"
		>
			<CheckCircle2
				size={18}
				className="mt-0.5 shrink-0 text-emerald-400"
			/>

			<p className="text-sm leading-6 text-zinc-300">
				{children}
			</p>
		</div>
	);
}