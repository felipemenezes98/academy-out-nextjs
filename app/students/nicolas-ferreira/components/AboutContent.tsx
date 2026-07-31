export default function AboutContent() {
    return (
      <div className="animate-fade-in max-w-4xl mx-auto space-y-10">
        
        <section className="bg-zinc-900 p-8 md:p-10 rounded-3xl shadow-2xl border-t-4 border-emerald-500 hover:-translate-y-1 transition-transform duration-300">
          <h2 className="text-3xl font-bold mb-6 text-zinc-100">Quem sou eu</h2>
          <p className="text-lg text-zinc-400 leading-relaxed">
            Olá! Sou estudante de <strong>Análise e Desenvolvimento de Sistemas</strong>. Sou fascinado pela interseção entre lógica, estruturação de dados e criação de soluções reais. Gosto de entender como as coisas funcionam por baixo dos panos, seja construindo uma aplicação moderna, otimizando queries ou mergulhando em algoritmos matemáticos complexos.
          </p>
        </section>
  
        <section className="bg-zinc-900 p-8 md:p-10 rounded-3xl shadow-2xl border-t-4 border-blue-500 hover:-translate-y-1 transition-transform duration-300">
          <h2 className="text-3xl font-bold mb-6 text-zinc-100">Meus Gostos</h2>
          <ul className="space-y-4 text-lg text-zinc-400">
            <li className="flex gap-3"><span className="text-blue-500">▹</span> <span><strong>Banco de Dados:</strong> Tenho forte interesse em backend, trabalhando na otimização e revisão de procedures e queries complexas em Oracle SQL e PL/SQL.</span></li>
            <li className="flex gap-3"><span className="text-blue-500">▹</span> <span><strong>Automação & IA:</strong> Crio automações no n8n, gerando desde scripts estruturados até vídeos curtos.</span></li>
            <li className="flex gap-3"><span className="text-blue-500">▹</span> <span><strong>Música:</strong> Minha maior paixão é a música, especialmente o rock, sendo os Beatles, minha banda favorita.</span></li>
          </ul>
        </section>
  
        <section className="bg-zinc-900 p-8 md:p-10 rounded-3xl shadow-2xl border-t-4 border-purple-500 hover:-translate-y-1 transition-transform duration-300">
          <h2 className="text-3xl font-bold mb-6 text-zinc-100">Minhas Ambições</h2>
          <p className="text-lg text-zinc-400 leading-relaxed mb-4">
          Planejo me mudar para a Alemanha em breve. Enquanto minha namorada foca em sua carreira na Medicina Veterinária (animais de grande porte), meu plano é ingressar rapidamente no mercado alemão como DBA, Analista de Dados ou Engenheiro de Software.
          </p>
        </section>
  
        <section className="bg-zinc-900 p-8 md:p-10 rounded-3xl shadow-2xl border-t-4 border-orange-500 hover:-translate-y-1 transition-transform duration-300">
          <h2 className="text-3xl font-bold mb-6 text-zinc-100">Por que o tema "Beatles"?</h2>
          <p className="text-lg text-zinc-400 leading-relaxed">
            A música, assim como a programação, é feita de padrões, lógica e harmonia. Escolhi os Beatles e seus instrumentos porque eles representam a essência da <strong>inovação</strong>. Assim como na tecnologia precisamos pensar fora da caixa, os Beatles pegaram as ferramentas de estúdio limitadas dos anos 60 e recriaram a indústria fonográfica através da técnica e da experimentação sem limites.
          </p>
        </section>
  
      </div>
    );
  }