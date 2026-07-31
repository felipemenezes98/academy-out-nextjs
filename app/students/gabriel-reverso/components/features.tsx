import { FEATURES } from "../data/features";

import { FeatureCard } from "./feature-card";

export function FeaturesSection() {
    return (
        <section
            id="features"
            className="py-32"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
                        Features
                    </span>

                    <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
                        Everything you need to
                        <br />
                        build better software.
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-zinc-400">
                        DevPilot AI assists developers throughout the entire
                        software development lifecycle, from the first commit
                        to production deployment.
                    </p>
                </div>

                <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {FEATURES.map((feature) => (
                        <FeatureCard
                            key={feature.title}
                            {...feature}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}