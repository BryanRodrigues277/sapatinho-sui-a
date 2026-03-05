export default function Footer() {
  return (
    <footer className="bg-cinza-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-lg font-bold mb-4">
            Digitales E-Book für Amigurumi-Hausschuhe & Babyschuhe
          </h3>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6 text-sm">
            <p className="flex items-center gap-2">
              ✓ 100 % sichere Zahlung
            </p>
            <p className="flex items-center gap-2">
              ✓ Daten geschützt
            </p>
            <p className="flex items-center gap-2">
              ✓ 7 Tage Garantie
            </p>
          </div>

          <p className="text-sm opacity-80 mb-2">
            © 2025 Amigurumi-Hausschuhe & Babyschuhe. Alle Rechte vorbehalten.
          </p>

          <p className="text-xs opacity-70">
            Dieses Produkt wird mit Garantie über eine sichere Zahlungsplattform verkauft.
          </p>
        </div>
      </div>
    </footer>
  );
}
