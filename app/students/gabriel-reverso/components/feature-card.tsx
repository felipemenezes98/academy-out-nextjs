import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
}

export function FeatureCard({
    icon: Icon,
    title,
    description,
}: Readonly<FeatureCardProps>) {
    return (
        <article
            className="
                group
                rounded-2xl
                border
                border-zinc-800
                bg-zinc-900/40
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-blue-500/30
                hover:bg-zinc-900
            "
        >
            <div
                className="
                    mb-6
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-zinc-700
                    bg-zinc-900
                    text-blue-400
                    transition-colors
                    group-hover:border-blue-500/40
                "
            >
                <Icon size={22} />
            </div>

            <h3 className="text-lg font-semibold text-white">
                {title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-zinc-400">
                {description}
            </p>
        </article>
    );
}