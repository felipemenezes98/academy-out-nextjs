import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

/**
 * CTA final da landing page.
 *
 * Responsável por converter o visitante após apresentar
 * todos os recursos do DevPilot AI.
 */
export function CTA() {
	return (
		<section className="py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div
					className="
						relative
						overflow-hidden
						rounded-3xl
						border
						border-zinc-800
						bg-[#11161C]
						px-8
						py-20
						text-center
						shadow-2xl
						shadow-black/30
						md:px-16
					"
				>
					{/* Glow interno */}
					<div
						aria-hidden
						className="
							absolute
							left-1/2
							top-0
							h-72
							w-72
							-translate-x-1/2
							rounded-full
							bg-blue-500/10
							blur-3xl
						"
					/>

					<div className="relative z-10">
						<div
							className="
								mx-auto
								flex
								w-fit
								items-center
								gap-2
								rounded-full
								border
								border-blue-500/20
								bg-blue-500/10
								px-4
								py-2
								text-sm
								text-blue-300
							"
						>
							<Sparkles size={16} />

							AI-powered development
						</div>

						<h2
							className="
								mt-8
								text-4xl
								font-bold
								tracking-tight
								text-white
								md:text-5xl
							"
						>
							Build better software
							<br />
							with your AI engineer.
						</h2>

						<p
							className="
								mx-auto
								mt-6
								max-w-2xl
								text-lg
								leading-8
								text-zinc-400
							"
						>
							Let DevPilot handle repetitive tasks,
							improve your code quality and help you ship
							faster.
						</p>

						<div className="mt-10 flex justify-center">
							<Button
								size="lg"
								className="
									bg-blue-600
									px-8
									text-white
									hover:bg-blue-500
								"
							>
								Start Building

								<ArrowRight
									className="ml-2"
									size={18}
								/>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}