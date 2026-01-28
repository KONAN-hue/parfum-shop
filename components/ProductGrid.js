import ProductCard from './ProductCard';

const ProductGrid = ({ produits }) => {
  return (
    /* grid-cols-2 : 2 produits sur mobile
       md:grid-cols-3 : 3 sur tablette
       lg:grid-cols-5 : 5 sur desktop (style Jumia)
    */
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-4">
      {produits && produits.length > 0 ? (
        produits.map((produit) => (
          <ProductCard key={produit.id} product={produit} />
        ))
      ) : (
        <p className="col-span-full text-center py-10 text-gray-500">
          Chargement des meilleures offres...
        </p>
      )}
    </div>
  );
};

export default ProductGrid;
