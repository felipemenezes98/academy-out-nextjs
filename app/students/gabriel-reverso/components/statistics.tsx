import { StatCard } from "./stat-card";

const STATISTICS = [
	{
		value: "500K+",
		label: "Code Reviews Generated",
		description:
			"Pull requests analyzed by DevPilot AI.",
	},
	{
		value: "98%",
		label: "Review Accuracy",
		description:
			"High quality suggestions based on your code.",
	},
	{
		value: "120K+",
		label: "Repositories Assisted",
		description:
			"Projects improving with AI guidance.",
	},
	{
		value: "40%",
		label: "Faster Development",
		description:
			"Less time spent on repetitive tasks.",
	},
];

/**
 * Seção de métricas da landing page.
 *
 * Apresenta números fictícios para reforçar
 * a proposta de valor do produto.
 */
export function StatisticsSection() {
	return (
		<section className="border-y border-zinc-900 py-28">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
					{STATISTICS.map((statistic) => (
						<StatCard
							key={statistic.label}
							{...statistic}
						/>
					))}
				</div>
			</div>
		</section>
	);
}