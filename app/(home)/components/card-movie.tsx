import Image from 'next/image'
import Link from 'next/link'

import { getImage } from '@/lib/get-image'

import { Result } from '../types/popular-movies-types'

export function CardMovie({ movie }: { movie: Result }) {
  const src = getImage({ path: movie.backdrop_path, width: 'w1920' })

  return (
    <Link
      key={movie.id}
      className="group relative min-h-[300px] cursor-pointer overflow-hidden rounded-xl border"
      href={`/${movie.id}`}
    >
      <div className="relative h-full">
        <Image
          src={src.src}
          className="h-full w-full object-cover transition-all duration-200 group-hover:scale-105"
          alt={movie.title}
          fill
        />
      </div>
      <div className="absolute inset-0 bg-black/15 transition-all duration-300 group-hover:bg-black/0" />
      <div className="absolute inset-0 flex items-end">
        <div className="flex-1 bg-gradient-to-t from-black to-transparent p-5">
          <h3 className="text-lg font-semibold text-white">{movie.title}</h3>
        </div>
      </div>
    </Link>
  )
}
