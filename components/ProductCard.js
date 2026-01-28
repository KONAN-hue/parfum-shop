const ProductCard = ({ product }) => {
  return (
    <div className="bg-white hover:shadow-lg hover:scale-[1.02] transition-all p-3 rounded-sm relative group cursor-pointer border border-transparent hover:border-gray-100">
      {/* Badge de réduction (comme Jumia) */}
      <span className="absolute top-2 right-2 bg-[#FEE2CC] text-[#E07E1B] text-[10px] font-bold px-2 py-1 rounded-sm">
        -20%
      </span>

      <div className="aspect-square mb-3">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="space-y-1">
        <h3 className="text-sm text-gray-800 line-clamp-2 leading-snug h-10">
          {product.name}
        </h3>
        <div className="flex flex-col">
          <span className="text-xl font-bold text-gray-900">
            {product.price} FCFA
          </span>
          <span className="text-xs text-gray-400 line-through">
            {(product.price * 1.2).toFixed(0)} FCFA
          </span>
        </div>
      </div>

      {/* Bouton d'ajout rapide qui apparaît au survol */}
      <button className="w-full mt-4 bg-[#E07E1B] text-white py-2 rounded-sm font-bold uppercase text-xs shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
        Ajouter au panier
      </button>
    </div>
  );
};
