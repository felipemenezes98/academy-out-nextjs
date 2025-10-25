import { RootPopularMovies } from '@/app/(home)/types/popular-movies-types'

import { RootMovieDetailsTypes } from '../types/movie-details-types'

export const getPopularMovies = async ({ page = 1 }: { page?: number }) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/movie/popular?page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
        },
      },
    )

    const result: RootPopularMovies = await response.json()

    return result.results
  } catch (error) {
    throw error
  }
}

export const getTrendMovies = async ({ page = 1 }: { page?: number }) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/trending/movie/day?language=en-US&page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
        },
      },
    )

    const result: RootPopularMovies = await response.json()

    return result.results
  } catch (error) {
    throw error
  }
}

export const getMovieDetails = async ({ movieId }: { movieId: number }) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/movie/${movieId}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
        },
      },
    )

    const result: RootMovieDetailsTypes = await response.json()

    return result
  } catch (error) {
    throw error
  }
}
