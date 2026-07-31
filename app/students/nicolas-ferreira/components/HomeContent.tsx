export default function HomeContent() {
    return (
      <div className="animate-fade-in space-y-16">
        <section className="text-center space-y-6 pt-8">
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-500">
            A Revolução de Liverpool
          </h2>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto font-light">
            Como quatro garotos mudaram a história da música, dos estúdios e do mundo pop para sempre.
          </p>
        </section>
  
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <img 
              src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTxNaqW4tOkFyZWuabQnWX4nVVoFwVN1N662vV2gg1REU479pMuUKKB91gE6jCmstQFKFPlMHVKjddASZg" 
              alt="The Beatles Vintage" 
              className="relative rounded-xl shadow-2xl object-cover w-full h-[28rem] grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          
          <div className="space-y-6 text-lg text-zinc-300 leading-relaxed bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800">
            <p>
              A história da música moderna é dividida em antes e depois dos <strong className="text-emerald-400">Beatles</strong>. Formada em Liverpool em 1960, a banda transcendeu as barreiras do rock and roll.
            </p>
            <p>
              Eles não apenas criaram melodias inesquecíveis, mas foram pioneiros em técnicas de gravação, álbuns conceituais e na forma como a juventude se expressava. 
            </p>
            <p>
              O violão de base intrincado e o baixo melódico criaram a fundação para quase tudo o que ouvimos hoje no pop e no rock. Explore as abas acima para conhecer os instrumentos que definiram essa era.
            </p>
          </div>
        </div>
      </div>
    );
  }