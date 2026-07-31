import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

import { DashboardPreview } from "./dashboard-preview";

/**
 * Hero principal da landing page.
 *
 * Responsável por apresentar a proposta de valor do produto
 * e direcionar o usuário para a ação principal.
 */
export function HeroSection() {
	return (
		<section className="relative overflow-hidden">
			<div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col items-center justify-center gap-20 px-6 py-24 lg:flex-row lg:px-8">
				{/* Conteúdo */}
				<div className="max-w-2xl flex-1">
					<div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
						<Sparkles className="h-4 w-4" />
						AI-powered Development Platform
					</div>

					<h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
						Your AI
						<br />
						<span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent">
							Software Engineer
						</span>
					</h1>

					<p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
						Accelerate your development workflow with an intelligent
						assistant capable of reviewing pull requests, generating
						documentation, fixing bugs and suggesting better
						architectures.
					</p>

					<div className="mt-10 flex flex-wrap gap-4">
						<Button
							size="lg"
							className="bg-blue-600 hover:bg-blue-500"
						>
							Get Started

							<ArrowRight className="ml-2 h-4 w-4" />
						</Button>

						<Button
							size="lg"
							variant="outline"
							className="border-zinc-700 bg-zinc-900 hover:bg-zinc-800"
						>
							View Documentation
						</Button>
					</div>

					<div className="mt-16 grid grid-cols-3 gap-8 border-t border-zinc-800 pt-8">
						<div>
							<p className="text-3xl font-bold text-white">
								500K+
							</p>

							<p className="mt-2 text-sm text-zinc-500">
								Reviews Generated
							</p>
						</div>

						<div>
							<p className="text-3xl font-bold text-white">
								98%
							</p>

							<p className="mt-2 text-sm text-zinc-500">
								Accuracy
							</p>
						</div>

						<div>
							<p className="text-3xl font-bold text-white">
								180ms
							</p>

							<p className="mt-2 text-sm text-zinc-500">
								Average Response
							</p>
						</div>
					</div>
				</div>

				{/* Dashboard */}
				<div className="flex flex-1 justify-center lg:justify-end">
					<DashboardPreview />
				</div>
			</div>
		</section>
	);
}