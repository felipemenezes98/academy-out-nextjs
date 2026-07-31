'use client'; // Necessário se estiver usando Next.js App Router (App Directory) devido ao uso de hooks (useState)

import React, { useState } from 'react';

export default function EduardoDrude() {
  // Estados para controlar a interface
  const [activeTab, setActiveTab] = useState('pequeno');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({ title: '', image: '', description: '' });

  // Dados do Carrossel Principal
  const slides = [
    {
      img: 'https://dummyimage.com/1920x500/2563eb/ffffff&text=Lancamento:+Motor+Industrial+Serie+X',
      title: 'Novo Motor Industrial Série X',
      text: 'Alta eficiência energética para sua indústria.'
    },
    {
      img: 'https://dummyimage.com/1920x500/16a34a/ffffff&text=Noticia:+Expansao+da+Fabrica',
      title: 'Expansão da nossa Fábrica',
      text: 'Mais tecnologia e capacidade de produção para o mercado.'
    },
    {
      img: 'https://dummyimage.com/1920x500/4b5563/ffffff&text=Novo+Motor+Trifasico+Compacto',
      title: 'Motor Trifásico Compacto',
      text: 'Tamanho reduzido, potência máxima.'
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  // Função para abrir o Modal
  const openProductModal = (title, image, description) => {
    setModalData({ title, image, description });
    setModalOpen(true);
  };

  return (
    <div className="font-sans bg-gray-50 min-h-screen text-gray-800">
      {/* Navegação Básica */}
      <nav className="bg-blue-600 text-white p-4 shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <a href="#" className="text-xl font-bold flex items-center gap-2">
            <span>⚡</span> EletroMotores
          </a>
        </div>
      </nav>

      {/* 1. Carrossel Principal */}
      <div className="relative w-full h-[500px] overflow-hidden bg-gray-900 group">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img src={slide.img} alt={slide.title} className="w-full h-full object-cover opacity-90" />
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black bg-opacity-60 text-white p-4 rounded-lg text-center w-11/12 md:w-auto">
              <h5 className="text-xl font-bold mb-1">{slide.title}</h5>
              <p className="text-sm md:text-base">{slide.text}</p>
            </div>
          </div>
        ))}

        {/* Controles do Carrossel */}
        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
          &#10094;
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
          &#10095;
        </button>

        {/* Indicadores */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mb-16">
        
        {/* 2. História da Empresa */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 items-center">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-blue-600 mb-6 border-b-2 border-blue-600 inline-block pb-1">
              Nossa História
            </h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="text-center">
            <img 
              src="https://dummyimage.com/300x300/ced4da/495057&text=Foto+do+Fundador" 
              className="rounded-full w-48 h-48 object-cover mx-auto mb-4 border-4 border-white shadow-lg" 
              alt="Dono da Empresa" 
            />
            <h5 className="font-bold text-lg text-gray-800">João da Silva</h5>
            <p className="text-sm text-gray-500">Fundador & CEO</p>
          </div>
        </div>

        {/* 3. Produtos */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-blue-600 mb-6 border-b-2 border-blue-600 inline-block pb-1">
            Nossos Produtos
          </h2>
          
          {/* Abas */}
          <div className="flex border-b mb-6 space-x-6">
            {['pequeno', 'medio', 'grande'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 font-medium transition-colors ${
                  activeTab === tab 
                    ? 'border-b-2 border-blue-600 text-blue-600' 
                    : 'text-gray-500 hover:text-blue-600'
                }`}
              >
                {tab === 'pequeno' ? 'Pequeno Porte' : tab === 'medio' ? 'Médio Porte' : 'Grande Porte'}
              </button>
            ))}
          </div>

          {/* Cards de Produtos (Scroll Horizontal) */}
          <div className="flex overflow-x-auto gap-6 pb-6 snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            
            {activeTab === 'pequeno' && (
              <>
                <div 
                  className="min-w-[300px] bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer snap-start"
                  onClick={() => openProductModal('Motor Monofásico 0.5 CV', 'https://dummyimage.com/600x400/2563eb/fff&text=Motor+0.5+CV', 'Ideal para pequenas aplicações, bombas de água e ventiladores. RPM: 1750. Tensão: 110/220V.')}
                >
                  <img src="https://dummyimage.com/300x200/2563eb/fff&text=Motor+0.5+CV" className="rounded-t-lg w-full" alt="Motor 1" />
                  <div className="p-4">
                    <h5 className="font-bold text-lg mb-2">Motor Monofásico 0.5 CV</h5>
                    <p className="text-gray-600 text-sm mb-4">Alta durabilidade para uso doméstico e comercial leve.</p>
                    <span className="inline-block border border-blue-600 text-blue-600 text-sm px-3 py-1 rounded hover:bg-blue-600 hover:text-white transition-colors">Ver Detalhes</span>
                  </div>
                </div>

                <div 
                  className="min-w-[300px] bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer snap-start"
                  onClick={() => openProductModal('Motor Monofásico 1.0 CV', 'https://dummyimage.com/600x400/2563eb/fff&text=Motor+1.0+CV', 'Excelente torque de partida. Carcaça em alumínio injetado.')}
                >
                  <img src="https://dummyimage.com/300x200/2563eb/fff&text=Motor+1.0+CV" className="rounded-t-lg w-full" alt="Motor 2" />
                  <div className="p-4">
                    <h5 className="font-bold text-lg mb-2">Motor Monofásico 1.0 CV</h5>
                    <p className="text-gray-600 text-sm mb-4">Design compacto e excelente dissipação térmica.</p>
                    <span className="inline-block border border-blue-600 text-blue-600 text-sm px-3 py-1 rounded hover:bg-blue-600 hover:text-white transition-colors">Ver Detalhes</span>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'medio' && (
              <div 
                className="min-w-[300px] bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer snap-start"
                onClick={() => openProductModal('Motor Trifásico 5 CV', 'https://dummyimage.com/600x400/16a34a/fff&text=Motor+5+CV', 'Alto rendimento (IR3). Tensão: 220/380V. Ideal para compressores e esteiras.')}
              >
                <img src="https://dummyimage.com/300x200/16a34a/fff&text=Motor+5+CV" className="rounded-t-lg w-full" alt="Motor 3" />
                <div className="p-4">
                  <h5 className="font-bold text-lg mb-2">Motor Trifásico 5 CV</h5>
                  <p className="text-gray-600 text-sm mb-4">Motor blindado com proteção IP55. Uso industrial geral.</p>
                  <span className="inline-block border border-blue-600 text-blue-600 text-sm px-3 py-1 rounded hover:bg-blue-600 hover:text-white transition-colors">Ver Detalhes</span>
                </div>
              </div>
            )}

            {activeTab === 'grande' && (
              <div 
                className="min-w-[300px] bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer snap-start"
                onClick={() => openProductModal('Motor Trifásico 50 CV', 'https://dummyimage.com/600x400/dc2626/fff&text=Motor+50+CV', 'Carcaça de ferro fundido. Projetado para suportar ambientes agressivos e uso contínuo.')}
              >
                <img src="https://dummyimage.com/300x200/dc2626/fff&text=Motor+50+CV" className="rounded-t-lg w-full" alt="Motor 4" />
                <div className="p-4">
                  <h5 className="font-bold text-lg mb-2">Motor Trifásico 50 CV</h5>
                  <p className="text-gray-600 text-sm mb-4">Alta potência para mineração, moinhos e grandes bombas.</p>
                  <span className="inline-block border border-blue-600 text-blue-600 text-sm px-3 py-1 rounded hover:bg-blue-600 hover:text-white transition-colors">Ver Detalhes</span>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* 4. Notícias e Usuários/Clientes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          
          {/* Notícias da Região */}
          <div>
            <h2 className="text-2xl font-bold text-blue-600 mb-6 border-b-2 border-blue-600 inline-block pb-1">
              Notícias da Região
            </h2>
            <div className="flex flex-col gap-4">
              <a href="#" className="block bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h5 className="font-bold text-gray-800">Polo Industrial recebe investimentos</h5>
                  <small className="text-gray-500 whitespace-nowrap ml-4">3 dias atrás</small>
                </div>
                <p className="text-gray-600 text-sm">O governo local anunciou novos incentivos para a compra de maquinário elétrico de alta eficiência.</p>
              </a>
              <a href="#" className="block bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h5 className="font-bold text-gray-800">Feira de Tecnologia em Máquinas</h5>
                  <small className="text-gray-500 whitespace-nowrap ml-4">1 semana atrás</small>
                </div>
                <p className="text-gray-600 text-sm">Estivemos presentes na feira regional demonstrando nossa nova linha de motores IP66.</p>
              </a>
            </div>
          </div>

          {/* Nossos Clientes/Usuários */}
          <div>
            <h2 className="text-2xl font-bold text-blue-600 mb-6 border-b-2 border-blue-600 inline-block pb-1">
              Quem usa nossos motores
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {['Indústria A', 'Agrícola B', 'Usinas C', 'Bombeamento', 'Mineração'].map((cliente, idx) => (
                <div key={idx} className="bg-white p-3 rounded shadow-sm border flex items-center justify-center">
                  <img src={`https://dummyimage.com/100x50/fff/000&text=Logo+${cliente.split(' ')[0]}`} className="max-w-full h-auto" alt={cliente} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 text-center py-6">
        <p className="m-0">&copy; 2026 EletroMotores. Exemplo de Demonstração (Tailwind CSS).</p>
      </footer>

      {/* Modal Interativo (Detalhes do Produto) */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl overflow-hidden animate-fade-in-up">
            {/* Header Modal */}
            <div className="bg-blue-600 px-6 py-4 flex justify-between items-center text-white">
              <h5 className="font-bold text-lg">{modalData.title}</h5>
              <button onClick={() => setModalOpen(false)} className="text-white hover:text-gray-200 text-2xl leading-none">&times;</button>
            </div>
            {/* Body Modal */}
            <div className="p-6">
              <img src={modalData.image} className="w-full h-64 object-cover rounded mb-4" alt="Imagem do produto" />
              <h6 className="font-bold text-gray-800 mb-2">Especificações e Detalhes:</h6>
              <p className="text-gray-600 text-sm leading-relaxed">{modalData.description}</p>
            </div>
            {/* Footer Modal */}
            <div className="bg-gray-50 px-6 py-4 flex justify-end gap-3 border-t">
              <button 
                onClick={() => setModalOpen(false)} 
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
              >
                Fechar
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors font-medium">
                Solicitar Orçamento
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}