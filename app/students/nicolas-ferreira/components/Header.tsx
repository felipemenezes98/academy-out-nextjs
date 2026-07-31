export default function Header({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (tab: string) => void }) {
    const navItems = [
      { id: "home", label: "Início" },
      { id: "baixo", label: "Baixo" },
      { id: "violao", label: "Violão" },
      { id: "sobre", label: "Sobre Mim" },
    ];
  
    return (
      <header className="fixed top-0 left-0 w-full bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 shadow-2xl z-50 transition-all">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 
            className="text-2xl font-black tracking-widest cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setActiveTab("home")}
          >
            THE BEATLES <span className="text-emerald-500">& CO.</span>
          </h1>
          <nav className="flex flex-wrap justify-center gap-2 md:gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-5 py-2 rounded-full text-sm uppercase tracking-wider font-semibold transition-all duration-300 ${
                  activeTab === item.id 
                    ? "bg-emerald-600 text-white shadow-lg shadow-emerald-500/30" 
                    : "hover:bg-zinc-800 text-zinc-400 hover:text-zinc-100"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>
    );
  }