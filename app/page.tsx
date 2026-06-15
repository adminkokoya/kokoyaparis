"use client"

import React, { useState, useEffect } from 'react';

export default function App() {
  const [page, setPage] = useState('home');

  const navigate = (newPage: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setPage(newPage);
  };

  return (
    <div className="min-h-screen bg-zinc-800 text-stone-200 font-sans selection:bg-amber-900 selection:text-amber-200">
      <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-end">
          <div className="hidden md:flex space-x-12 text-sm uppercase tracking-[0.2em] font-medium">
            <button onClick={() => navigate('home')} className={`hover:text-amber-400 transition-colors ${page === 'home' ? 'text-amber-500' : ''}`}>Accueil</button>
            <button onClick={() => navigate('menu')} className={`hover:text-amber-400 transition-colors ${page === 'menu' ? 'text-amber-500' : ''}`}>Menu</button>
            <button onClick={() => navigate('reserve')} className={`hover:text-amber-400 transition-colors ${page === 'reserve' ? 'text-amber-500' : ''}`}>Réservation</button>
            <button onClick={() => navigate('contact')} className={`hover:text-amber-400 transition-colors ${page === 'contact' ? 'text-amber-500' : ''}`}>Contact</button>
          </div>
        </div>
      </nav>

      <main>
        {page === 'home' && <HomePage onNavigate={navigate} />}
        {page === 'menu' && <MenuPage />}
        {page === 'reserve' && <ReservationPage />}
        {page === 'contact' && <ContactPage />}
      </main>

      <footer className="bg-black border-t border-zinc-900 py-16 px-6 text-center text-stone-500">
        <p className="mb-4 text-amber-500/50 italic tracking-widest text-sm">Kokoya Paris — L'Art du Sushi Authentique</p>
        <p className="text-[10px] uppercase tracking-[0.3em] opacity-40">&copy; 2024 Kokoya Paris. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

function MapPinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="text-amber-500 flex-shrink-0">
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="text-amber-500 flex-shrink-0">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z" />
    </svg>
  );
}

// --- ホームページ ---
function HomePage({ onNavigate }: { onNavigate: (p: string) => void }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { url: "/sushi3.jpg", alt: "Authentic Nigiri Sushi" },
    { url: "/sushi2.jpg", alt: "Japanese Chef Hands" },
    { url: "/sushi4.jpg", alt: "Premium Sushi Platter" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 9000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-60' : 'opacity-0'
            }`}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black"></div>
          <img src={slide.url} alt={slide.alt} className="w-full h-full object-cover grayscale-[30%]" />
        </div>
      ))}

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="space-y-10">
          <h1 style={{ textShadow: '0 0 30px rgba(0,0,0,0.9)' }} className="text-3xl md:text-5xl font-light tracking-[0.4em] text-white uppercase drop-shadow-2xl">
            KOKOYA
          </h1>
          <p className="text-base md:text-lg text-stone-300 max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
            L'Essence du Japon — Le Vrai Sushi Traditionnel
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center pt-8">
            <button
              onClick={() => onNavigate('reserve')}
              className="px-12 py-4 border border-white/30 backdrop-blur-sm text-white font-bold uppercase tracking-[0.2em] transition-all duration-500"
              style={{ ['--hover-bg' as string]: '#b33300' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#b33300')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              RÉSERVER
            </button>
            <button
              onClick={() => onNavigate('menu')}
              className="px-12 py-4 border border-white/30 backdrop-blur-sm text-white font-bold uppercase tracking-[0.2em] transition-all duration-500"
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#b33300')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              LE MENU
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex space-x-4 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-[2px] transition-all duration-700 ${i === currentSlide ? 'w-16 bg-amber-500' : 'w-8 bg-white/20'
              }`}
          />
        ))}
      </div>
    </section>
  );
}

// --- メニューページ ---
function MenuPage() {
  return (
    <div className="pt-40 pb-24 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-24">
        <h1 className="text-4xl md:text-4xl lato600 uppercase text-white tracking-[0.3em] mb-8">Menu de Midi</h1>
        <h2 className="text-amber-500 tracking-[0.1em] text-l mb-8">
          Entrée + Plat + Soupe miso
          <br />ou<br />
          Dessert + Plat + Soupe miso</h2>
        <div className="w-20 h-px bg-amber-600 mx-auto opacity-40"></div>
      </div>
      <div className="space-y-32">
        <MenuSection
          title="Menu Sushi & Maki"
          subtitle="Les Nigiri-Sushis et Rouleaux-Maki"
          items={[
            { name: "Menu Sushi", price: "19", desc: "8 sushis + 6 makis : Thon, Saumon, Poisson blanc, Maquereau, Seiche, Crevette cuite" },
            { name: "Menu Sushi Spécial", price: "21", desc: "9 sushis + 3 makis + 3 makis saumon-avocat : Thon, Saumon, Anguille, Crevette crue, St. Jaques, Hokki, Oeuf de saumon " },
                     { name: "Menu Sushi Saumon", price: "19", desc: "8 sushis Saumon cru et mi-cuit + 6 makis saumon" },
                      { name: "Menu Maki", price: "19", desc: "18 makis Thon, saumon, Saumon-avocat Concombre, Poisson blanc" }


          ]}
        />
        <MenuSection
          title="Menu Chirashi"
          subtitle="Tranches de poissons crus sur grand bol de riz"
          items={[
            { name: "Menu Chirashi", price: "19", desc: "Thon, Saumon, Poisson blanc, Maquereau, Seiche, Crevette cuite" },
            { name: "Menu Chirashi Spécial", price: "22", desc: "Thon, Saumon, Anguille, Crevette crue, St. Jaques, Hokki, Oeuf de saumon " },
                     { name: "Menu Chirashi Saumon", price: "19", desc: "" },
                      { name: "Menu Chirashi Saumon Avocat", price: "20", desc: "" },
                       { name: "Menu BARA Chirashi", price: "18", desc: "Dés de poisson crus à la sauce sucrée sur grand bol de riz" },
                        { name: "Menu Tartare de Saumon", price: "18", desc: "Saumon haché avec sauce blanche sur grand bol de riz" }


          ]}
        />











        <MenuSection
          title="Sake & Vins"
          subtitle="Accords millimétrés"
          items={[
            { name: "Kubota Manju", price: "110", desc: "Junmai Daiginjo. Le sommet de l'élégance japonaise, avec une texture soyeuse." },
            { name: "Dassai 23", price: "145", desc: "Un saké d'une finesse incomparable avec des notes florales et fruitées." }
          ]}
        />
      </div>
    </div>
  );
}

function MenuSection({ title, subtitle, items }: { title: string; subtitle: string; items: { name: string; price: string; desc: string }[] }) {
  return (
    <section>
      <div className="mb-12 text-center">
        <h3 className="text-3xl font-light text-white uppercase tracking-[0.2em] mb-3">{title}</h3>
        <p className="text-amber-700 italic text-sm tracking-[0.2em]">{subtitle}</p>
      </div>
      <div className="grid gap-12">
        {items.map((item, idx) => (
          <div key={idx} className="group flex flex-col md:flex-row md:justify-between items-start border-b border-white/5 pb-10">
            <div className="flex-1">
              <h4 className="text-2xl text-stone-200 mb-3 group-hover:text-amber-400 transition-colors duration-500">{item.name}</h4>
              <p className="text-stone-500 font-light text-base max-w-xl leading-relaxed italic">{item.desc}</p>
            </div>
            <div className="mt-6 md:mt-0 md:ml-12 text-2xl text-amber-500/90 font-light tracking-widest">
              {item.price} €
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// --- 予約ページ ---
function ReservationPage() {
  return (
    <div className="pt-40 pb-24 px-6 max-w-2xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-amber-500 font-bold tracking-[0.4em] uppercase text-xs mb-6">Réservations</h2>
        <h1 className="text-5xl font-serif text-white mb-6 leading-tight">Le Comptoir</h1>
        <p className="text-stone-400 font-light max-w-md mx-auto leading-relaxed">Vivez une expérience immersive face au Maître. Huit places exclusives pour une attention totale à chaque détail.</p>
      </div>

      <div className="bg-white/[0.02] backdrop-blur-xl p-8 md:p-16 border border-white/10 shadow-2xl rounded-sm">
        <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-10">
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.3em] text-amber-600 font-bold">Votre Nom</label>
                <input type="text" className="w-full bg-transparent border-b border-white/10 py-3 focus:border-amber-500 outline-none text-white transition-all duration-500" placeholder="Jean Martin" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.3em] text-amber-600 font-bold">Email</label>
                <input type="email" className="w-full bg-transparent border-b border-white/10 py-3 focus:border-amber-500 outline-none text-white transition-all duration-500" placeholder="jean@example.com" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.3em] text-amber-600 font-bold">Date</label>
                <input type="date" className="w-full bg-transparent border-b border-white/10 py-3 focus:border-amber-500 outline-none text-white transition-all duration-500 appearance-none" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.3em] text-amber-600 font-bold">Convives</label>
                <select className="w-full bg-transparent border-b border-white/10 py-3 focus:border-amber-500 outline-none text-white transition-all duration-500 cursor-pointer">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                    <option key={n} value={n} className="bg-zinc-900">{n} {n === 1 ? 'Personne' : 'Personnes'}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <button className="w-full py-6 bg-amber-600 text-black font-black uppercase tracking-[0.4em] transition-all duration-500"
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#b33300')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#b33300')}>
            DEMANDER UNE RÉSERVATION
          </button>
        </form>

        <div className="mt-20 pt-12 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 gap-12 text-[10px] tracking-[0.2em] uppercase">
          <div className="flex items-start space-x-5">
            <MapPinIcon />
            <div className="space-y-3">
              <p className="text-white font-bold">Localisation</p>
              <p className="text-stone-500 leading-relaxed normal-case">123 Rue de la Tradition<br />75000 Paris, France</p>
            </div>
          </div>
          <div className="flex items-start space-x-5">
            <PhoneIcon />
            <div className="space-y-3">
              <p className="text-white font-bold">Contact</p>
              <p className="text-stone-500">+33 1 23 45 67 89</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- コンタクトページ ---
function ContactPage() {
  return (
    <div className="pt-40 pb-24 px-6 max-w-2xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-amber-500 font-bold tracking-[0.4em] uppercase text-xs mb-6">Contact</h2>
        <h1 className="text-5xl font-serif text-white mb-6 leading-tight">Nous Écrire</h1>
        <p className="text-stone-400 font-light max-w-md mx-auto leading-relaxed">Pour toute question, nous vous répondrons dans les plus brefs délais.</p>
      </div>

      <div className="bg-white/[0.02] backdrop-blur-xl p-8 md:p-16 border border-white/10 shadow-2xl rounded-sm">
        <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-10">
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.3em] text-amber-600 font-bold">Nom</label>
                <input type="text" className="w-full bg-transparent border-b border-white/10 py-3 focus:border-amber-500 outline-none text-white transition-all duration-500" placeholder="Jean Martin" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.3em] text-amber-600 font-bold">Email</label>
                <input type="email" className="w-full bg-transparent border-b border-white/10 py-3 focus:border-amber-500 outline-none text-white transition-all duration-500" placeholder="jean@example.com" />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] uppercase tracking-[0.3em] text-amber-600 font-bold">Sujet</label>
              <input type="text" className="w-full bg-transparent border-b border-white/10 py-3 focus:border-amber-500 outline-none text-white transition-all duration-500" placeholder="Votre sujet" />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] uppercase tracking-[0.3em] text-amber-600 font-bold">Message</label>
              <textarea rows={5} className="w-full bg-transparent border-b border-white/10 py-3 focus:border-amber-500 outline-none text-white transition-all duration-500 resize-none" placeholder="Votre message..." />
            </div>
          </div>
          <button
            className="w-full py-6 bg-amber-600 text-black font-black uppercase tracking-[0.4em] transition-all duration-500"
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#b33300')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#b33300')}
          >
            ENVOYER
          </button>
        </form>

        <div className="mt-20 pt-12 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 gap-12 text-[10px] tracking-[0.2em] uppercase">
          <div className="flex items-start space-x-5">
            <MapPinIcon />
            <div className="space-y-3">
              <p className="text-white font-bold">Localisation</p>
              <p className="text-stone-500 leading-relaxed normal-case">123 Rue de la Tradition<br />75000 Paris, France</p>
            </div>
          </div>
          <div className="flex items-start space-x-5">
            <PhoneIcon />
            <div className="space-y-3">
              <p className="text-white font-bold">Contact</p>
              <p className="text-stone-500">+33 1 23 45 67 89</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}