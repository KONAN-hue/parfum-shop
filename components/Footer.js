const Footer = () => {
  return (
    <footer className="bg-[#313133] text-white mt-12">
      {/* SECTION 1 : NEWSLETTER (Le bandeau orange/noir) */}
      <div className="bg-[#434345] py-8 border-b border-gray-600">
        <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <span className="text-3xl">📧</span>
            <div>
              <p className="font-bold uppercase text-sm">
                Nouveau sur GreatGood ?
              </p>
              <p className="text-xs text-gray-300">
                Inscrivez-vous pour recevoir les meilleures offres !
              </p>
            </div>
          </div>
          <div className="flex w-full md:w-auto gap-2">
            <input
              type="email"
              placeholder="Entrez votre adresse email"
              className="flex-1 md:w-80 p-3 rounded-sm text-black outline-none"
            />
            <button className="bg-[#E07E1B] px-6 py-3 rounded-sm font-bold shadow-md hover:bg-[#c96f16] transition">
              S'INSCRIRE
            </button>
          </div>
        </div>
      </div>

      {/* SECTION 2 : LIENS DE NAVIGATION */}
      <div className="max-w-[1200px] mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-bold text-xs uppercase mb-4 tracking-wider">
            Service Client
          </h4>
          <ul className="text-xs space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:underline">
                Centre d'assistance
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Modes de paiement
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Expédition et livraison
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Politique de retour
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-xs uppercase mb-4 tracking-wider">
            À Propos
          </h4>
          <ul className="text-xs space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:underline">
                Qui sommes-nous
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Carrières
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Conditions Générales
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Confidentialité
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-xs uppercase mb-4 tracking-wider">
            Gagnez de l'argent
          </h4>
          <ul className="text-xs space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:underline">
                Vendez sur GreatGood
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Devenez consultant
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Devenez partenaire logistique
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-xs uppercase mb-4 tracking-wider">
            Suivez-nous
          </h4>
          <div className="flex gap-4 text-xl">
            <a href="#" className="grayscale hover:grayscale-0">
              🔵
            </a>
            <a href="#" className="grayscale hover:grayscale-0">
              📸
            </a>
            <a href="#" className="grayscale hover:grayscale-0">
              🐦
            </a>
          </div>
        </div>
      </div>

      {/* SECTION 3 : COPYRIGHT */}
      <div className="border-t border-gray-700 py-6 text-center text-[10px] text-gray-500 uppercase tracking-widest">
        © {new Date().getFullYear()} GreatGood Côte d'Ivoire - Tous droits
        réservés
      </div>
    </footer>
  );
};

export default Footer;
