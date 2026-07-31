'use client';

import { useState } from "react";
import Header from "./components/Header";
import HomeContent from "./components/HomeContent";
import InstrumentContent from "./components/InstrumentContent";
import AboutContent from "./components/AboutContent";
import { dataBaixo, dataViolao } from "./data";

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200 font-sans selection:bg-emerald-500 selection:text-white transition-colors duration-300">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="max-w-7xl mx-auto p-6 pt-28 pb-16">
        {activeTab === "home" && <HomeContent />}
        {activeTab === "baixo" && <InstrumentContent data={dataBaixo} />}
        {activeTab === "violao" && <InstrumentContent data={dataViolao} />}
        {activeTab === "sobre" && <AboutContent />}
      </main>
    </div>
  );
}