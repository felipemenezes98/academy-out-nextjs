import { useEffect, useRef } from "react";

export default function Carousel({ images }: { images: string[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 1) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: clientWidth, behavior: "smooth" });
        }
      }
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      ref={scrollRef}
      className="flex overflow-x-hidden snap-x snap-mandatory gap-6 rounded-2xl bg-zinc-900/50 p-6 border border-zinc-800/50"
      style={{ scrollBehavior: 'smooth' }}
    >
      {images.map((src, idx) => (
        <img 
          key={idx}
          src={src}
          alt={`Galeria ${idx + 1}`}
          className="snap-center shrink-0 w-full md:w-3/4 lg:w-2/3 h-72 md:h-[30rem] object-cover rounded-xl shadow-2xl"
        />
      ))}
    </div>
  );
}