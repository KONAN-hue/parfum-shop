import Sidebar from '@/components/Sidebar';
import ProductGrid from '@/components/ProductGrid';
import { getProduits } from '@/lib/api'; // Ta fonction de récupération de données

export default async function ParfumsPage() {
  const produits = await getProduits();

  return (
    <div className="bg-[#F5F5F5] min-h-screen pt-28 pb-12">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Fil d'Ariane (Breadcrumbs) style Jumia */}
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
          <a href="/" className="hover:text-orange-600">
            Accueil
          </a>
          <span>&gt;</span>
          <span className="text-gray-900 font-medium">Tous les parfums</span>
        </div>

        <div className="flex flex-col md:flex-row gap-5">
          {/* SIDEBAR : Filtres & Catégories */}
          <aside className="w-full md:w-1/4 space-y-4">
            <div className="bg-white p-4 shadow-sm rounded-sm">
              <h2 className="text-sm font-bold uppercase mb-4 border-b pb-2">
                Catégories
              </h2>
              <Sidebar />
            </div>

            {/* Filtre de Prix additionnel */}
            <div className="bg-white p-4 shadow-sm rounded-sm">
              <h2 className="text-sm font-bold uppercase mb-4 border-b pb-2">
                Prix (FCFA)
              </h2>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <input type="checkbox" className="accent-orange-600" /> Moins
                  de 10 000
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <input type="checkbox" className="accent-orange-600" /> 10 000
                  - 30 000
                </label>
              </div>
            </div>
          </aside>

          {/* CONTENU : Liste des produits */}
          <main className="w-full md:w-3/4">
            <div className="bg-white p-4 shadow-sm rounded-sm mb-4 flex justify-between items-center">
              <h1 className="text-xl font-bold text-gray-800">
                Parfumerie GreatGood
              </h1>
              <span className="text-sm text-gray-500">
                {produits.length} produits trouvés
              </span>
            </div>

            {/* Grille Jumia (5 colonnes sur desktop) */}
            <div className="bg-white p-4 shadow-sm rounded-sm">
              <ProductGrid produits={produits} />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
