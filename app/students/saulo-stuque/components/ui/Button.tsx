import type { AnchorHTMLAttributes, ReactNode } from "react";
import { Icon } from "./Icons";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
  arrow?: boolean;
};

export function Button({ children, variant = "primary", arrow = false, className = "", ...props }: Props) {
  const styles = variant === "primary"
    ? "border-[#b6c494] bg-[#b6c494] text-[#0a0c09] hover:bg-[#d8cfb1]"
    : "border-white/15 bg-white/[0.03] text-white hover:border-[#b6c494]/50 hover:bg-[#b6c494]/[0.08]";

  return (
    <a className={`group inline-flex min-h-12 items-center justify-center gap-2 border px-5 text-sm font-bold uppercase tracking-[0.14em] transition duration-200 ${styles} ${className}`} {...props}>
      {children}
      {arrow && <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
    </a>
  );
}
