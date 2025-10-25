import { useQuery } from '@tanstack/react-query'

import {
  getMovieDetails,
  getPopularMovies,
  getTrendMovies,
} from '../services/service-movies'

export const usePopularMovies = ({ page }: { page?: number }) => {
  return useQuery({
    queryKey: ['popular-movies'],
    queryFn: () => getPopularMovies({ page }),
  })
}

export const useTrendMovies = ({ page }: { page?: number }) => {
  return useQuery({
    queryKey: ['trending-movies'],
    queryFn: () => getTrendMovies({ page }),
  })
}

export const useMovieDetails = ({ movieId }: { movieId: number }) => {
  return useQuery({
    queryKey: ['movie-detail', movieId],
    queryFn: () => getMovieDetails({ movieId }),
  })
}
