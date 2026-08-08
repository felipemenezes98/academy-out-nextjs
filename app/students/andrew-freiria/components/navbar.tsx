"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const { theme, setTheme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/students/andrew-freiria/" className="flex items-center gap-3 font-semibold tracking-tight">
          <span id="symbol" className="flex size-7 items-center justify-center rounded-full border text-xs text-blue-500">
            EW
          </span>
          EARTH WATCH
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-muted-foreground sm:flex">
          <Link className="transition-colors hover:text-foreground" href="/students/andrew-freiria/">Overview</Link>
          <Link className="transition-colors hover:text-foreground" href="/students/andrew-freiria/objects">Objects</Link>
          <Link className="transition-colors hover:text-foreground" href="/students/andrew-freiria/about">About</Link>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Toggle theme">
          {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
        </Button>
      </div>
    </header>
  );
}
