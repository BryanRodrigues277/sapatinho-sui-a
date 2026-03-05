export default function Footer() {
  return (
    <footer className="bg-cinza-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-lg font-bold mb-4">
            E-book Numérique de Chaussons & Chaussures Bébé Amigurumi
          </h3>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6 text-sm">
            <p className="flex items-center gap-2">
              ✓ Paiement 100% Sécurisé
            </p>
            <p className="flex items-center gap-2">
              ✓ Données Protégées
            </p>
            <p className="flex items-center gap-2">
              ✓ Garantie de 7 Jours
            </p>
          </div>

          <p className="text-sm opacity-80 mb-2">
            © 2025 Chaussons & Chaussures Bébé Amigurumi. Tous droits réservés.
          </p>

          <p className="text-xs opacity-70">
            Ce produit est vendu avec garantie via une plateforme de paiement sécurisée.
          </p>
        </div>
      </div>
    </footer>
  );
}
