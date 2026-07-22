"use client"

import * as React from "react"
import Link from "next/link"
import { SearchIcon, UsersIcon } from "lucide-react"

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
    <section className="w-full px-6 py-16 sm:px-10 sm:py-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
        <div className="flex flex-col gap-2">
          <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
            Última turma
          </p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Estudantes e projetos
          </h2>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
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
          <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {filtered.map((student, index) => {
              const order = String(index + 1).padStart(2, "0")

              return (
                <li key={student.slug}>
                  <Link
                    href={`/students/${student.slug}`}
                    className="group flex flex-col gap-3 outline-none"
                  >
                    <div className="flex items-baseline justify-between gap-3 text-[11px] tracking-[0.14em] uppercase">
                      <span className="truncate font-medium">
                        {student.project}
                      </span>
                      <span className="shrink-0 text-muted-foreground">
                        {student.subject} / {order}
                      </span>
                    </div>

                    <span className="relative aspect-[4/5] w-full overflow-hidden bg-muted">
                      <img
                        src={student.image}
                        alt={student.project}
                        className="size-full object-cover grayscale transition-[filter] duration-200 ease-out group-hover:grayscale-0"
                      />
                    </span>

                    <div className="flex items-center justify-between gap-3">
                      <span className="text-sm text-muted-foreground">
                        {student.name}
                      </span>
                      <img
                        src={`https://github.com/${student.github}.png?size=64`}
                        alt=""
                        className="size-7 rounded-full object-cover grayscale"
                      />
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </section>
  )
}
