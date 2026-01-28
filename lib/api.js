// lib/api.js

// 1. Simulation de données (Comme si ça venait d'une base de données)
const PRODUITS_MOCK = [
  {
    id: 1,
    name: "Nuit d'Orient - Eau de Parfum Premium",
    price: 45000,
    image:
      'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=400',
    genre: 'mixte',
    category: 'parfum',
  },
  {
    id: 2,
    name: 'Fleur de Coton - Coffret Luxe',
    price: 35000,
    image:
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=400',
    genre: 'femme',
    category: 'coffret',
  },
  {
    id: 3,
    name: "Bois d'Argent - Édition Limitée",
    price: 65000,
    image:
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=400',
    genre: 'homme',
    category: 'parfum',
  },
  {
    id: 4,
    name: "Brume Parfumée - Douceur d'Été",
    price: 15000,
    image:
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=400',
    genre: 'femme',
    category: 'brume',
  },
  {
    id: 5,
    name: 'Intense Black - 100ml',
    price: 28000,
    image:
      'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=400',
    genre: 'homme',
    category: 'parfum',
  },
];

// 2. Fonction pour récupérer tous les produits
export async function getProduits() {
  // On simule un petit délai réseau de 500ms
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(PRODUITS_MOCK);
    }, 500);
  });
}

// 3. Fonction pour récupérer un produit par son ID (pour la page détails)
export async function getProduitById(id) {
  return new Promise((resolve) => {
    const produit = PRODUITS_MOCK.find((p) => p.id === parseInt(id));
    setTimeout(() => {
      resolve(produit);
    }, 300);
  });
}
