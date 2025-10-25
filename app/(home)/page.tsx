'use client'

import { Skeleton } from '@/components/ui/skeleton'

import { CardMovie } from './components/card-movie'
import { usePopularMovies, useTrendMovies } from './hooks/use-movies'

export default function HomePage() {
  const { data: dataPopular, isLoading: isLoadingPopular } = usePopularMovies({
    page: 1,
  })

  const { data: dataTrend, isLoading: isLoadingTrend } = useTrendMovies({
    page: 1,
  })

  return (
    <main className="mx-auto max-w-4xl space-y-10 p-10">
      <div className="flex flex-col">
        {isLoadingTrend && (
          <div>
            <Skeleton className="mb-5 h-[20px] w-[100px] rounded-full" />
            <div className="grid gap-5 md:grid-cols-3 xl:grid-cols-3">
              {Array.from({ length: 5 }).map((_, index) => (
                <Skeleton className="h-[350px]" key={index} />
              ))}
            </div>
          </div>
        )}
        {!isLoadingTrend && (
          <div>
            <div className="mb-6">
              <h1 className="text-2xl font-semibold">Trending hoje</h1>
              <p className="text-muted-foreground">Veja abaixo as tendencias</p>
            </div>
            <div className="grid gap-5 md:grid-cols-3 xl:grid-cols-3">
              {dataTrend?.slice(0, 5)?.map((item, index) => {
                return <CardMovie movie={item} key={item.id + index} />
              })}
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col">
        {isLoadingPopular && (
          <div>
            <Skeleton className="mb-5 h-[20px] w-[100px] rounded-full" />
            <div className="grid gap-5 md:grid-cols-3 xl:grid-cols-3">
              {Array.from({ length: 5 }).map((_, index) => (
                <Skeleton className="h-[350px]" key={index} />
              ))}
            </div>
          </div>
        )}
        {!isLoadingPopular && (
          <div>
            <div className="mb-6">
              <h1 className="text-2xl font-semibold">Filmes populares</h1>
              <p className="text-muted-foreground">Veja abaixo as tendencias</p>
            </div>
            <div className="grid gap-5 md:grid-cols-3 xl:grid-cols-3">
              {dataPopular?.slice(0, 5)?.map((item, index) => {
                return <CardMovie movie={item} key={item.id + index} />
              })}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
