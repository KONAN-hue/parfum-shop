'use client';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Gestion du scroll pour réduire la taille de la barre au défilement
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed w-full z-[100] top-0 left-0 transition-all duration-300">
      {/* 1. BARRE D'ANNONCE (Très attirante) */}
      {/* <div className="bg-black text-white py-3 px-4 text-center border-b border-amber-900/30">
        <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">
          ✨ Livraison Express Offerte dès 95€ —{' '}
          <span className="text-amber-500">GreatGood Privilège</span> ✨
        </p>
      </div> */}

      {/* 2. NAVBAR PRINCIPALE */}
      <div
        className={`w-full transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md py-3 shadow-lg'
            : 'bg-white py-6 shadow-sm'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
          {/* LOGO - Focus Lisibilité */}
          <a href="/" className="group">
            <h1 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tighter">
              Great
              <span className="text-amber-800 group-hover:text-black transition-colors">
                Good
              </span>
            </h1>
          </a>

          {/* LIENS DESKTOP - Espacés et Gras */}
          <div className="hidden lg:flex items-center space-x-12">
            <NavLink title="Nouveautés" href="/parfums" />
            <NavLink title="Femme" href="/parfums?genre=femme" />
            <NavLink title="Homme" href="/parfums?genre=homme" />
            <NavLink title="Mixte" href="/parfums?genre=mixte" />
          </div>

          {/* ICONES & PANIER */}
          <div className="flex items-center space-x-5">
            <button className="text-xl p-2 hover:bg-gray-100 rounded-full transition">
              🔍
            </button>
            <a
              href="/login"
              className="hidden sm:block text-xl p-2 hover:bg-gray-100 rounded-full transition"
            >
              👤
            </a>

            {/* BOUTON PANIER - Très visible */}
            <button className="bg-black text-white flex items-center gap-3 pl-5 pr-2 py-1.5 rounded-full hover:bg-amber-900 transition-all active:scale-95 shadow-md">
              <span className="text-xs font-black uppercase tracking-widest">
                Panier
              </span>
              <span className="bg-white text-black text-[10px] font-black h-6 w-6 flex items-center justify-center rounded-full">
                0
              </span>
            </button>

            {/* MENU BURGER (Mobile) */}
            <button
              className="lg:hidden text-3xl text-black"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* 3. MENU MOBILE (Full Screen) */}
      <div
        className={`fixed inset-0 bg-white z-[110] flex flex-col items-center justify-center space-y-10 transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-10 right-10 text-4xl text-black"
        >
          ✕
        </button>

        <div className="flex flex-col items-center space-y-8">
          <a
            href="/parfums"
            onClick={() => setIsOpen(false)}
            className="text-4xl font-black uppercase tracking-tighter hover:text-amber-800 transition"
          >
            Collections
          </a>
          <a
            href="/parfums?genre=femme"
            onClick={() => setIsOpen(false)}
            className="text-4xl font-black uppercase tracking-tighter hover:text-amber-800 transition"
          >
            Femme
          </a>
          <a
            href="/parfums?genre=homme"
            onClick={() => setIsOpen(false)}
            className="text-4xl font-black uppercase tracking-tighter hover:text-amber-800 transition"
          >
            Homme
          </a>
          <a
            href="/login"
            onClick={() => setIsOpen(false)}
            className="mt-6 bg-black text-white px-12 py-4 text-sm font-black uppercase tracking-[0.2em]"
          >
            Mon Compte
          </a>
        </div>
      </div>
    </nav>
  );
};

// Petit composant pour les liens de la Navbar (Lisibilité & Style)
const NavLink = ({ title, href }) => (
  <a
    href={href}
    className="relative text-xs font-black uppercase tracking-[0.2em] text-black hover:text-amber-800 transition-colors group"
  >
    {title}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-800 transition-all duration-300 group-hover:w-full"></span>
  </a>
);

export default Navbar;
