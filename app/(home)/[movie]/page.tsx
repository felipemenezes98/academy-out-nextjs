'use client'

import { Calendar, Star } from 'lucide-react'
import Image from 'next/image'
import { useParams } from 'next/navigation'

import { Skeleton } from '@/components/ui/skeleton'
import { getImage } from '@/lib/get-image'

import { useMovieDetails } from '../hooks/use-movies'

export default function MovieDetails() {
  const { movie } = useParams<{ movie: string }>()

  const { data, isLoading } = useMovieDetails({ movieId: Number(movie) })

  return (
    <main className="mx-auto max-w-4xl space-y-10 p-4 md:p-10">
      {isLoading && (
        <div className="space-y-10">
          <Skeleton className="h-[350px]" />
          <Skeleton className="h-[100px]" />
          <Skeleton className="h-[100px]" />
        </div>
      )}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <div className="relative h-full overflow-hidden rounded-xl">
            <div className="relative min-h-[350px] w-full">
              <Image
                src={
                  getImage({ path: data?.backdrop_path ?? '', width: 'w1920' })
                    .src
                }
                className="min-h-[350px] w-full object-cover"
                fill
                alt="test"
              />
            </div>
            <div className="absolute inset-0 flex items-end">
              <div className="w-full bg-gradient-to-t from-black via-black/80 to-transparent p-6">
                <div className="jus mb-2 flex flex-wrap items-center gap-2">
                  <div className="w-fit rounded-2xl bg-black/60 px-3 py-1">
                    <span className="flex items-center gap-2 text-sm text-white">
                      <Star className="size-3 text-yellow-500" />
                      {data?.vote_average.toFixed(1)}
                    </span>
                  </div>
                  <div className="w-fit">
                    <span className="flex items-center gap-2 text-sm text-white">
                      <Calendar className="size-3 text-white" />
                      {data?.release_date}
                    </span>
                  </div>
                </div>

                <h1 className="mb-2 text-xl font-semibold text-white md:text-2xl">
                  {data?.title}
                </h1>
                <p className="line-clamp-2 text-xs text-white md:text-sm">
                  {data?.overview}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="relative h-full min-h-[350px] w-full">
            <Image
              src={getImage({ path: data?.poster_path ?? '' }).src}
              className="h-96 w-full rounded-xl object-cover"
              fill
              alt="test"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">Sinopse</h1>
        <p className="text-muted-foreground text-sm">{data?.overview}</p>
      </div>
      <div></div>
    </main>
  )
}
