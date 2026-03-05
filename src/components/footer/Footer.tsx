export default function Footer() {
  return (
    <footer className="bg-cinza-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-lg font-bold mb-4">
            Amigurumi Patik & Bebek Ayakkabısı Dijital E-Kitabı
          </h3>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6 text-sm">
            <p className="flex items-center gap-2">
              ✓ %100 Güvenli Ödeme
            </p>
            <p className="flex items-center gap-2">
              ✓ Veriler Korunuyor
            </p>
            <p className="flex items-center gap-2">
              ✓ 7 Günlük Garanti
            </p>
          </div>

          <p className="text-sm opacity-80 mb-2">
            © 2025 Amigurumi Patik & Bebek Ayakkabısı. Tüm hakları saklıdır.
          </p>

          <p className="text-xs opacity-70">
            Bu ürün, güvenli ödeme platformu aracılığıyla garantili olarak satılmaktadır.
          </p>
        </div>
      </div>
    </footer>
  );
}
