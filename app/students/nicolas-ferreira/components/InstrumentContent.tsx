import Carousel from "./Carousel";

interface Musician {
  name: string;
  desc: string;
  img: string;
}

interface InstrumentData {
  title: string;
  historyText: string;
  historyImage: string;
  carouselImages: string[];
  musicians: Musician[];
}

export default function InstrumentContent({ data }: { data: InstrumentData }) {
  return (
    <div className="animate-fade-in space-y-20">
      <section className="text-center">
        <h2 className="text-5xl font-black text-zinc-100 mb-10 tracking-tight">{data.title}</h2>
        <Carousel images={data.carouselImages} />
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-zinc-900 p-8 rounded-3xl border border-zinc-800 shadow-xl">
        <div className="space-y-6 order-2 lg:order-1">
          <div className="inline-block">
            <h3 className="text-3xl font-bold text-zinc-100">A História</h3>
            <div className="h-1 w-1/2 bg-emerald-500 mt-2 rounded-full"></div>
          </div>
          <p className="text-lg text-zinc-400 leading-relaxed">
            {data.historyText}
          </p>
        </div>
        <div className="order-1 lg:order-2 overflow-hidden rounded-2xl">
          <img 
            src={data.historyImage} 
            alt={`História do ${data.title}`} 
            className="w-full h-96 object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      </section>

      <section>
        <h3 className="text-3xl font-black text-center mb-12 text-zinc-100">Lendas do Instrumento</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.musicians.map((musician, idx) => (
            <div key={idx} className="group bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden hover:shadow-2xl hover:shadow-emerald-900/20 hover:-translate-y-2 transition-all duration-300">
              <div className="overflow-hidden h-64">
                <img 
                  src={musician.img} 
                  alt={musician.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0" 
                />
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold text-zinc-100 mb-3">{musician.name}</h4>
                <p className="text-zinc-400 leading-relaxed">{musician.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}