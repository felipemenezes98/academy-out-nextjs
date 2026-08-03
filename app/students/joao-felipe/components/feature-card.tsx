import type { LucideIcon } from "lucide-react"

const SIZES = {
  sm: {
    title: "text-lg",
    description: "text-xs",
  },
  lg: {
    title: "text-xl",
    description: "text-sm max-w-lg",
  },
} as const

export function FeatureCard({
  icon: Icon,
  iconClassName,
  title,
  description,
  size = "lg",
}: {
  icon: LucideIcon
  iconClassName: string
  title: string
  description: string
  size?: keyof typeof SIZES
}) {
  const s = SIZES[size]

  return (
    <div className="group relative h-full overflow-hidden rounded-[2rem] border border-border/60 bg-card p-8 shadow-xs transition-all duration-300 hover:border-primary/20">
      <div className="flex h-full flex-col justify-between gap-8">
        <div
          className={`flex size-12 items-center justify-center rounded-2xl ${iconClassName}`}
        >
          <Icon className="size-6" />
        </div>
        <div>
          <h3 className={`font-bold tracking-tight text-foreground ${s.title}`}>
            {title}
          </h3>
          <p
            className={`mt-2 leading-relaxed text-muted-foreground ${s.description}`}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}
