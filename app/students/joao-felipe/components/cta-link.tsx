import { ArrowUpRight } from "lucide-react"

const SIZES = {
  sm: {
    link: "gap-1.5 px-5 py-2 text-xs shadow-sm",
    circle: "size-5",
    arrow: "size-3",
  },
  lg: {
    link: "gap-2 px-7 py-3.5 text-sm shadow-lg shadow-primary/10",
    circle: "size-6",
    arrow: "size-3.5",
  },
} as const

export function CtaLink({
  href,
  children,
  size = "lg",
}: {
  href: string
  children: React.ReactNode
  size?: keyof typeof SIZES
}) {
  const s = SIZES[size]

  return (
    <a
      href={href}
      className={`group flex items-center rounded-full bg-primary font-semibold text-primary-foreground transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-[1.02] active:scale-[0.98] ${s.link}`}
    >
      {children}
      <span
        className={`flex items-center justify-center rounded-full bg-primary-foreground/15 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${s.circle}`}
      >
        <ArrowUpRight className={s.arrow} />
      </span>
    </a>
  )
}
