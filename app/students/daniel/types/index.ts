export interface Author {
  id: number
  name: string
  image: string
  banner: string
  country?: string
  period: string
  summary: string
  works?: string[]
  tags?: string[]
  genres: {
    [key: string]: string[]
  }
}

export interface School {
  id: number
  name: string
  description: string
  banner?: string
  authors: Author[]
}
