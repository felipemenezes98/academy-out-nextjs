interface StatCardProps {
	value: string;
	label: string;
	description?: string;
}

export function StatCard({
	value,
	label,
	description,
}: Readonly<StatCardProps>) {
	return (
		<div
			className="
				group
				relative
				border-l
				border-zinc-800
				pl-6
				transition-colors
				duration-300
			"
		>
			<div
				className="
					absolute
					-left-px
					top-0
					h-full
					w-px
					bg-blue-500
					opacity-0
					transition-opacity
					duration-300
					group-hover:opacity-100
				"
			/>

			<p
				className="
					text-4xl
					font-bold
					tracking-tight
					text-white
					md:text-5xl
				"
			>
				{value}
			</p>

			<p className="mt-3 text-sm font-medium text-zinc-300">
				{label}
			</p>

			{description && (
				<p className="mt-2 text-sm text-zinc-500">
					{description}
				</p>
			)}
		</div>
	);
}