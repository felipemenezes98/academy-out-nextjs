import {
	CheckCircle2,
	Code2,
	GitBranch,
	GitPullRequest,
	Sparkles,
	Zap,
} from "lucide-react";

import { DashboardCard } from "./dashboard-card";

/**
 * Dashboard principal da landing.
 *
 * Representa visualmente como o DevPilot AI auxilia
 * durante o ciclo de desenvolvimento.
 */
export function DashboardSection() {
	return (
		<section
			id="dashboard"
			className="py-32"
		>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				{/* Cabeçalho */}
				<div className="mx-auto max-w-3xl text-center">
					<span className="text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
						AI Workspace
					</span>

					<h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
						Your entire development workflow,
						<br />
						assisted by AI.
					</h2>

					<p className="mt-6 text-lg leading-8 text-zinc-400">
						Analyze code, review pull requests, generate tests and
						improve architecture with an intelligent engineering
						assistant.
					</p>
				</div>

				{/* Dashboard */}
				<div
					className="
						mt-20
						rounded-3xl
						border
						border-zinc-800
						bg-[#0D1117]
						p-4
						shadow-2xl
						shadow-black/40
					"
				>
					<div className="grid gap-4 lg:grid-cols-12">
						{/* Sidebar */}
						<DashboardCard className="lg:col-span-3">
							<div className="flex items-center gap-3">
								<div
									className="
										flex
										h-10
										w-10
										items-center
										justify-center
										rounded-xl
										bg-blue-500/10
										text-blue-400
									"
								>
									<Code2 size={20} />
								</div>

								<div>
									<p className="text-sm font-medium text-white">
										DevPilot
									</p>

									<p className="text-xs text-zinc-500">
										AI Engineer
									</p>
								</div>
							</div>

							<div className="mt-8 space-y-4">
								<MenuItem
									icon={<GitBranch size={16} />}
									label="Repository"
								/>

								<MenuItem
									icon={<GitPullRequest size={16} />}
									label="Pull Requests"
								/>

								<MenuItem
									icon={<Sparkles size={16} />}
									label="AI Insights"
								/>
							</div>
						</DashboardCard>

						{/* Área principal */}
						<DashboardCard className="lg:col-span-6">
							<div className="flex items-center justify-between">
								<div>
									<p className="text-sm text-zinc-500">
										Current task
									</p>

									<h3 className="mt-1 font-semibold text-white">
										Reviewing Pull Request #184
									</h3>
								</div>

								<div
									className="
										flex
										items-center
										gap-2
										rounded-full
										border
										border-emerald-500/20
										bg-emerald-500/10
										px-3
										py-1
									"
								>
									<div className="h-2 w-2 rounded-full bg-emerald-400" />

									<span className="text-xs text-emerald-300">
										Running
									</span>
								</div>
							</div>

							<div className="mt-8 space-y-4">
								<ReviewItem text="Security improvements detected" />

								<ReviewItem text="Missing integration tests found" />

								<ReviewItem text="Code duplication reduced" />

								<ReviewItem text="Architecture suggestion generated" />
							</div>
						</DashboardCard>

						{/* Métricas */}
						<DashboardCard className="lg:col-span-3">
							<div className="flex items-center gap-2">
								<Zap
									size={18}
									className="text-blue-400"
								/>

								<p className="text-sm font-medium text-white">
									Performance
								</p>
							</div>

							<div className="mt-8 space-y-6">
								<Metric
									label="Quality Score"
									value="97%"
								/>

								<Metric
									label="Response Time"
									value="184ms"
								/>

								<Metric
									label="Tests Generated"
									value="342"
								/>
							</div>
						</DashboardCard>
					</div>
				</div>
			</div>
		</section>
	);
}


function MenuItem({
	icon,
	label,
}: {
	icon: React.ReactNode;
	label: string;
}) {
	return (
		<div className="flex items-center gap-3 text-sm text-zinc-400">
			{icon}

			<span>{label}</span>
		</div>
	);
}


function ReviewItem({
	text,
}: {
	text: string;
}) {
	return (
		<div
			className="
				flex
				items-center
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
				className="text-emerald-400"
			/>

			<span className="text-sm text-zinc-300">
				{text}
			</span>
		</div>
	);
}


function Metric({
	label,
	value,
}: {
	label: string;
	value: string;
}) {
	return (
		<div>
			<p className="text-xs text-zinc-500">
				{label}
			</p>

			<p className="mt-1 text-2xl font-bold text-white">
				{value}
			</p>
		</div>
	);
}