'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'

import { Button } from '../ui/button'

export function Navbar() {
  const { theme, setTheme } = useTheme()

  const handleTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
    }

    if (theme === 'light') {
      setTheme('dark')
    }
  }

  const themeText = () => {
    if (theme === 'dark') {
      return 'Light'
    }

    if (theme === 'light') {
      return 'Dark'
    }
  }

  return (
    <div className="bg-background sticky top-0 z-50">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-10 py-2">
        <Button size="sm" variant="ghost" asChild className="px-2">
          <Link href="/">
            <div className="relative h-4 w-4">
              <Image
                src="https://images.unsplash.com/photo-1635776062360-af423602aff3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332"
                alt="logo"
                className="rounded-md"
                fill
              />
            </div>
            <h1 className="text-sm font-semibold">Academy out</h1>
          </Link>
        </Button>
        <Button onClick={handleTheme} size="sm" variant="ghost">
          {themeText()}
        </Button>
      </nav>
    </div>
  )
}
