// export default function Home() {
//   return (
//     <div>
//       <h1>Welcome to GreatGood</h1>
//     </div>
//   );
// }

import Footer from '@/components/Footer';
import HeroSlider from '@/components/HeroSlider';
import Navbar from '@/components/Navbar';
import ProductGrid from '@/components/ProductGrid';

// import Navbar from '@/components/Navbar';
// import Sidebar from '@/components/Sidebar';
// import HeroSlider from '@/components/HeroSlider';
// import ProductGrid from '@/components/ProductGrid';
// import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';

export default function Home() {
  return (
    <div className="bg-[#F5F5F5] min-h-screen">
      {' '}
      {/* Fond gris clair comme Jumia */}
      <Navbar />
      {/* Conteneur principal centré */}
      <main className="max-w-[1200px] mx-auto pt-4 px-2 md:px-4">
        {/* SECTION HAUTE : Menu latéral + Slider (Le style Jumia) */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Menu Catégories à gauche (Desktop seulement) */}
          <aside className="hidden md:block w-1/4 bg-white rounded-sm shadow-sm p-4">
            <Sidebar />
          </aside>

          {/* Slider Principal à droite */}
          <div className="w-full md:w-3/4">
            <HeroSlider />
          </div>
        </div>

        {/* SECTION PRODUITS : Grille avec titres en bandeaux */}
        <section className="bg-white shadow-sm rounded-sm mb-8">
          <div className="bg-[#E07E1B] text-white p-3 font-bold uppercase rounded-t-sm">
            Meilleures Ventes de Parfums
          </div>
          <div className="p-4">
            <ProductGrid />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
