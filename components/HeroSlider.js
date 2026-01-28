'use client';

import { useState, useEffect } from 'react';

// Les données de tes slides (images et liens comme sur Jumia)
// Remplace les chemins d'images par les tiens !
const slides = [
  {
    id: 1,
    image: '/images/slide-promo-ete.jpg', // Ex: une promo d'été
    alt: 'Promotion spéciale Été - Parfums frais',
    href: '/parfums?collection=ete',
  },
  {
    id: 2,
    image: '/images/slide-nouveautes.jpg', // Ex: les nouveautés
    alt: 'Découvrez nos dernières nouveautés',
    href: '/parfums?sort=nouveautes',
  },
  {
    id: 3,
    image: '/images/slide-coffrets.jpg', // Ex: Coffrets cadeaux
    alt: 'Offrez un coffret parfum GreatGood',
    href: '/parfums?cat=coffret',
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Logique du diaporama automatique (change toutes les 4 secondes)
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000); // 4000ms = 4 secondes

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative w-full h-[200px] md:h-[350px] overflow-hidden rounded-sm">
      {/* Les images du diaporama */}
      {slides.map((slide, index) => (
        <a
          key={slide.id}
          href={slide.href}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out block ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover object-center"
          />
        </a>
      ))}

      {/* Indicateurs de navigation (les petits points en bas) */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'w-6 bg-[#E07E1B]'
                : 'w-2 bg-white/70 hover:bg-white'
            }`}
            aria-label={`Aller à la slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
