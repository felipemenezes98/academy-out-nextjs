import {
	Activity,
	CheckCircle2,
	FileCode2,
	GitPullRequest,
	ShieldCheck,
	Sparkles,
} from "lucide-react";

/**
 * Dashboard apresentado no Hero.
 *
 * Este componente é apenas uma representação visual do produto.
 * Não existe nenhuma integração com APIs ou dados externos.
 */
export function DashboardPreview() {
	return (
		<div
			className="
				w-full
				max-w-xl
				overflow-hidden
				rounded-3xl
				border
				border-zinc-800
				bg-[#11161C]
				shadow-2xl
				shadow-black/30
			"
		>
			{/* Header */}
			<header className="border-b border-zinc-800 px-6 py-5">
				<div className="flex items-center justify-between">
					<div>
						<p className="text-sm text-zinc-500">Repository</p>

						<h3 className="mt-1 text-lg font-semibold text-white">
							devpilot-ai/web
						</h3>
					</div>

					<div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1">
						<div className="h-2 w-2 rounded-full bg-emerald-400" />

						<span className="text-xs font-medium text-emerald-300">
							Online
						</span>
					</div>
				</div>
			</header>

			<div className="space-y-6 p-6">
				{/* Status */}
				<section>
					<div className="mb-3 flex items-center gap-2">
						<Activity
							size={18}
							className="text-blue-400"
						/>

						<h4 className="font-medium text-white">
							AI Status
						</h4>
					</div>

					<div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
						<p className="text-sm text-zinc-400">
							Reviewing Pull Request
						</p>

						<div className="mt-4 h-2 overflow-hidden rounded-full bg-zinc-800">
							<div className="h-full w-3/4 rounded-full bg-blue-500" />
						</div>

						<p className="mt-2 text-xs text-zinc-500">
							75% completed
						</p>
					</div>
				</section>

				{/* Sugestões */}
				<section>
					<div className="mb-3 flex items-center gap-2">
						<Sparkles
							size={18}
							className="text-blue-400"
						/>

						<h4 className="font-medium text-white">
							AI Suggestions
						</h4>
					</div>

					<div className="space-y-3 rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
						<Suggestion text="Extract reusable AuthProvider hook" />

						<Suggestion text="Improve variable naming" />

						<Suggestion text="Add null validation" />

						<Suggestion text="Generate integration tests" />
					</div>
				</section>

				{/* Métricas */}
				<section className="grid grid-cols-3 gap-4">
					<MetricCard
						icon={<ShieldCheck size={18} />}
						label="Coverage"
						value="97%"
					/>

					<MetricCard
						icon={<GitPullRequest size={18} />}
						label="Open PRs"
						value="12"
					/>

					<MetricCard
						icon={<FileCode2 size={18} />}
						label="Files"
						value="84"
					/>
				</section>
			</div>
		</div>
	);
}

interface SuggestionProps {
	text: string;
}

function Suggestion({ text }: Readonly<SuggestionProps>) {
	return (
		<div className="flex items-center gap-3">
			<CheckCircle2
				size={16}
				className="text-emerald-400"
			/>

			<span className="text-sm text-zinc-300">
				{text}
			</span>
		</div>
	);
}

interface MetricCardProps {
	icon: React.ReactNode;
	label: string;
	value: string;
}

function MetricCard({
	icon,
	label,
	value,
}: Readonly<MetricCardProps>) {
	return (
		<div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
			<div className="mb-4 text-blue-400">
				{icon}
			</div>

			<p className="text-xs text-zinc-500">
				{label}
			</p>

			<p className="mt-1 text-2xl font-bold text-white">
				{value}
			</p>
		</div>
	);
}