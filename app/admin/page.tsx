"use client"

import React, { useState, useEffect } from 'react';

/**
 * Kokoya Paris - app/page.tsx
 * Brandon Grotesque Light に近い "Montserrat" (Google Fonts) を適用。
 * 文字間隔(tracking)と細いウェイト(font-light)を活かしたタイポグラフィ重視のデザイン。
 */
export default function App() {
  const [page, setPage] = useState('home');

  const navigate = (newPage: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setPage(newPage);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#d4d4d2] selection:bg-[#4a3f35] selection:text-white" 
         style={{ fontFamily: "'Montserrat', sans-serif" }}>
      
      {/* Google Fonts のインポート */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&family=Playfair+Display:italic@0,400;1,400&display=swap');
      `}</style>

      {/* ナビゲーションバー */}
      <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/[0.03]">
        <div className="max-w-7xl mx-auto px-10 h-24 flex items-center justify-between">
          <div 
            className="text-lg font-normal tracking-[0.6em] cursor-pointer"
            onClick={() => navigate('home')}
          >
            KOKOYA <span className="opacity-40 font-light">PARIS</span>
          </div>
          <div className="hidden md:flex space-x-16 text-[10px] uppercase tracking-[0.5em] font-medium opacity-60">
            <button onClick={() => navigate('home')} className={`hover:opacity-100 transition-opacity ${page === 'home' ? 'text-white border-b border-white/20 pb-1' : ''}`}>Accueil</button>
            <button onClick={() => navigate('menu')} className={`hover:opacity-100 transition-opacity ${page === 'menu' ? 'text-white border-b border-white/20 pb-1' : ''}`}>Le Menu</button>
            <button onClick={() => navigate('reserve')} className={`hover:opacity-100 transition-opacity ${page === 'reserve' ? 'text-white border-b border-white/20 pb-1' : ''}`}>Réservation</button>
          </div>
        </div>
      </nav>

      <main>
        {page === 'home' && <HomePage onNavigate={navigate} />}
        {page === 'menu' && <MenuPage />}
        {page === 'reserve' && <ReservationPage />}
      </main>

      <footer className="bg-black py-24 px-8 border-t border-white/[0.02]">
        <div className="max-w-7xl mx-auto flex flex-col items-center space-y-8">
          <div className="text-sm font-light tracking-[0.8em] opacity-30">KOKOYA</div>
          <p className="text-[9px] uppercase tracking-[0.5em] text-stone-700">&copy; 2026 L'art de la précision</p>
        </div>
      </footer>
    </div>
  );
}

// --- ホームページコンポーネント ---
function HomePage({ onNavigate }: { onNavigate: (p: string) => void }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // 【写真を変える場所】ここに新しい画像URL（https://...）を貼ってください
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1534422298391-e4f8c170db76?auto=format&fit=crop&q=80&w=2000",
      alt: "Zen Interior"
    },
    {
      url: "https://images.unsplash.com/photo-1625938146369-adc83368bda7?auto=format&fit=crop&q=80&w=2000",
      alt: "Sushi Detail"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div>
      {/* ヒーローセクション */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[3000ms] ease-out ${
              index === currentSlide ? 'opacity-30 scale-100' : 'opacity-0 scale-110'
            }`}
          >
            <img src={slide.url} alt={slide.alt} className="w-full h-full object-cover grayscale" />
          </div>
        ))}

        <div className="relative z-10 text-center space-y-12">
          <div className="overflow-hidden">
            <h1 className="text-4xl md:text-6xl font-light tracking-[1.2em] text-white uppercase opacity-90">
              Épure
            </h1>
          </div>
          <p className="text-[10px] tracking-[0.8em] text-stone-400 uppercase font-light">
            La tradition japonaise au sommet
          </p>
          <div className="pt-16 flex justify-center space-x-16">
            <button onClick={() => onNavigate('reserve')} className="text-[9px] tracking-[0.5em] uppercase border-b border-white/10 pb-2 hover:border-white transition-all opacity-70 hover:opacity-100">Réserver</button>
            <button onClick={() => onNavigate('menu')} className="text-[9px] tracking-[0.5em] uppercase border-b border-white/10 pb-2 hover:border-white transition-all opacity-70 hover:opacity-100">Menu</button>
          </div>
        </div>
      </section>

      {/* イントロダクション */}
      <section className="py-72 px-8 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto space-y-32 text-center">
          <div className="space-y-12">
            <span className="text-[9px] tracking-[1em] text-stone-600 uppercase">La Vision</span>
            <h2 className="text-3xl md:text-4xl font-serif italic text-white/70 leading-relaxed font-light" style={{ fontFamily: "'Playfair Display', serif" }}>
              "L'excellence réside dans l'omission de l'inutile."
            </h2>
          </div>
          <div className="h-px w-8 bg-white/5 mx-auto"></div>
          <p className="text-[13px] font-light leading-[2.2] text-stone-500 max-w-lg mx-auto tracking-widest opacity-80">
            Une table, huit convives, un chef. Kokoya Paris redéfinit l'intimité gastronomique par une approche radicalement minimaliste de l'art du sushi.
          </p>
        </div>
      </section>
    </div>
  );
}

// --- メニューページコンポーネント ---
function MenuPage() {
  return (
    <div className="pt-56 pb-40 px-8 max-w-4xl mx-auto">
      <div className="text-center mb-40 space-y-6">
        <h1 className="text-3xl font-light tracking-[0.8em] uppercase text-white">Carte</h1>
        <p className="text-[9px] tracking-[0.5em] text-stone-600 uppercase">Hiver 2026 — Omakase</p>
      </div>

      <div className="space-y-32">
        <div className="space-y-16">
          <h3 className="text-[11px] tracking-[0.6em] uppercase text-stone-400 border-b border-white/5 pb-4">Omakase</h3>
          
          <div className="flex flex-col md:flex-row justify-between items-baseline border-b border-white/[0.04] pb-10 group">
            <div className="space-y-4">
              <h4 className="text-2xl font-light tracking-widest group-hover:text-white transition-colors">Expérience Plénitude</h4>
              <p className="text-[11px] text-stone-600 tracking-widest uppercase">Vingt-deux temps forts de saison</p>
            </div>
            <span className="text-lg font-light tracking-tighter mt-4 md:mt-0 italic">245 €</span>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-baseline border-b border-white/[0.04] pb-10 group">
            <div className="space-y-4">
              <h4 className="text-2xl font-light tracking-widest group-hover:text-white transition-colors">Accords Rares</h4>
              <p className="text-[11px] text-stone-600 tracking-widest uppercase">Cinq sakés d'exception, Junmai Daiginjo</p>
            </div>
            <span className="text-lg font-light tracking-tighter mt-4 md:mt-0 italic">115 €</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- 予約ページコンポーネント ---
function ReservationPage() {
  return (
    <div className="pt-56 pb-40 px-8 max-w-2xl mx-auto">
      <div className="text-center mb-32 space-y-6">
        <h1 className="text-2xl font-light tracking-[0.8em] uppercase text-white">Réservation</h1>
        <p className="text-[10px] text-stone-600 tracking-[0.4em] uppercase">Disponibilités restreintes</p>
      </div>
      
      <div className="space-y-20">
        <div className="grid grid-cols-1 gap-16">
          <div className="space-y-4 group">
            <label className="text-[9px] uppercase tracking-[0.6em] text-stone-700 group-focus-within:text-white transition-colors">Nom / Prénom</label>
            <input type="text" className="w-full bg-transparent border-b border-white/[0.08] py-4 focus:border-white/40 outline-none transition-all font-light tracking-widest" />
          </div>
          <div className="space-y-4 group">
            <label className="text-[9px] uppercase tracking-[0.6em] text-stone-700 group-focus-within:text-white transition-colors">Contact Mail</label>
            <input type="email" className="w-full bg-transparent border-b border-white/[0.08] py-4 focus:border-white/40 outline-none transition-all font-light tracking-widest" />
          </div>
        </div>
        <button className="w-full py-8 text-[10px] tracking-[0.6em] uppercase border border-white/[0.1] hover:bg-white hover:text-black transition-all duration-700">
          Vérifier les disponibilités
        </button>
      </div>
    </div>
  );
}