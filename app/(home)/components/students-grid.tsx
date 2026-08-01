"use client"

import * as React from "react"
import Link from "next/link"
import { SearchIcon, UsersIcon } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import type { Student } from "../data/students"

type StudentsGridProps = {
  students: Student[]
}

export function StudentsGrid({ students }: Readonly<StudentsGridProps>) {
  const [query, setQuery] = React.useState("")
  const [subject, setSubject] = React.useState<string | null>("all")

  const subjects = React.useMemo(() => {
    const unique = [...new Set(students.map((student) => student.subject))].sort(
      (a, b) => a.localeCompare(b, "pt-BR")
    )
    return [
      { label: "Todos os assuntos", value: "all" },
      ...unique.map((item) => ({ label: item, value: item })),
    ]
  }, [students])

  const filtered = React.useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return students.filter((student) => {
      const matchesSubject =
        !subject || subject === "all" || student.subject === subject

      const matchesQuery =
        !normalizedQuery ||
        student.name.toLowerCase().includes(normalizedQuery) ||
        student.project.toLowerCase().includes(normalizedQuery) ||
        student.subject.toLowerCase().includes(normalizedQuery)

      return matchesSubject && matchesQuery
    })
  }, [students, query, subject])

  return (
    <section className="w-full px-6 py-12 sm:px-10 sm:py-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
            Última turma · Frontend + IA
          </p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Estudantes e projetos
          </h2>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <InputGroup className="w-full sm:max-w-xs">
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
            <InputGroupInput
              placeholder="Buscar por nome"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              aria-label="Buscar estudante por nome"
            />
          </InputGroup>

          <Select items={subjects} value={subject} onValueChange={setSubject}>
            <SelectTrigger className="w-full sm:w-52">
              <SelectValue placeholder="Assunto" />
            </SelectTrigger>
            <SelectContent alignItemWithTrigger={false}>
              <SelectGroup>
                {subjects.map((item) => (
                  <SelectItem key={String(item.value)} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {filtered.length === 0 ? (
          <Empty className="border border-dashed py-16">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <UsersIcon />
              </EmptyMedia>
              <EmptyTitle>Nenhum resultado</EmptyTitle>
              <EmptyDescription>
                Ajuste a busca ou o assunto e tente de novo.
              </EmptyDescription>
            </EmptyHeader>
          </Empty>
        ) : (
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((student) => {
              const initials = student.name
                .split(" ")
                .slice(0, 2)
                .map((part) => part[0])
                .join("")
                .toUpperCase()

              const hasGithub = Boolean(student.github?.trim())

              return (
                <li key={student.slug}>
                  <div className="flex h-full flex-col rounded-lg border p-4 hover:bg-muted/40">
                    <Link
                      href={`/students/${student.slug}`}
                      className="flex min-w-0 flex-1 gap-3 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                    >
                      <Avatar className="mt-0.5">
                        {hasGithub ? (
                          <AvatarImage
                            src={`https://github.com/${student.github}.png?size=80`}
                            alt={student.name}
                          />
                        ) : null}
                        <AvatarFallback>{initials}</AvatarFallback>
                      </Avatar>

                      <div className="flex min-w-0 flex-1 flex-col gap-1">
                        <span className="truncate text-sm font-medium">
                          {student.name}
                        </span>

                        <div className="flex min-w-0 items-baseline gap-1.5 text-xs text-muted-foreground">
                          <span className="truncate">{student.project}</span>
                          <span className="text-muted-foreground/40">·</span>
                          <span className="shrink-0">{student.subject}</span>
                        </div>

                        <p className="line-clamp-2 text-xs text-muted-foreground/80">
                          {student.description}
                        </p>
                      </div>
                    </Link>

                    <div className="mt-2 flex flex-wrap items-center gap-2 pl-11">
                      <Link
                        href={`/students/${student.slug}`}
                        className="rounded-md border px-2.5 py-1 text-xs outline-none hover:bg-background focus-visible:ring-[3px] focus-visible:ring-ring/50"
                      >
                        Ver projeto
                      </Link>

                      {hasGithub ? (
                        <a
                          href={`https://github.com/${student.github}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs outline-none hover:bg-background focus-visible:ring-[3px] focus-visible:ring-ring/50"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            aria-hidden
                            className="size-3.5 fill-current"
                          >
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.28-.01-1.02-.02-2-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.29 0 .32.22.7.82.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
                          </svg>
                          GitHub
                        </a>
                      ) : null}
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </section>
  )
}
