const COMPANIES = [
    "GitHub",
    "Vercel",
    "Cloudflare",
    "Supabase",
    "Docker",
    "TypeScript",
];

export function TrustedBySection() {
    return (
        <section className="border-y border-zinc-900/80 py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <p className="text-center text-xs font-medium uppercase tracking-[0.35em] text-zinc-500">
                    Inspired by the tools developers use every day
                </p>

                <div className="mt-10 grid grid-cols-2 gap-8 text-center sm:grid-cols-3 lg:grid-cols-6">
                    {COMPANIES.map((company) => (
                        <span
                            key={company}
                            className="
                                text-lg
                                font-semibold
                                tracking-tight
                                text-zinc-600
                                transition-colors
                                duration-300
                                hover:text-zinc-300
                            "
                        >
                            {company}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}