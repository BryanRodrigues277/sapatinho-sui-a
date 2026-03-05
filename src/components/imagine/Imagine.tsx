import { Check } from 'lucide-react';

export default function Imagine() {
  return (
    <section className="py-16 bg-[#f5f0e8]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#333333]">
            Yumuşak dokunuş, ısıtan renkler, büyüleyen modeller.
          </h2>

          <p className="text-lg text-[#666666] mb-4 leading-relaxed max-w-3xl mx-auto">
            Bebeğinizin odası için sevimli bir ayı patik hayal edin ya da her çocuğu büyüleyen cesur bir aslan. Her model, her ortama şıklık ve sıcaklık katan işlevsel bir sanat eseridir!
          </p>

          <p className="text-lg text-[#666666] mb-8 leading-relaxed max-w-3xl mx-auto">
            <strong className="text-[#2E7D32]">Amigurumi Patik E-Kitabıyla</strong> öğrenecekleriniz bunlar!
          </p>

          <div className="mb-8">
            <img
              src="https://i.postimg.cc/XYrsSsx0/DPpp2-790x1024.webp"
              alt="Amigurumi Patik"
              loading="lazy"
              className="w-full max-w-md mx-auto rounded-xl shadow-lg"
            />
          </div>

          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#333333]">
            Özel tariflerle şu harika patikleri yapabileceksiniz:
          </h3>

          <div className="max-w-2xl mx-auto">
            <ul className="space-y-3 text-left">
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-[#2E7D32] flex-shrink-0 mt-0.5" strokeWidth={3} />
                <span className="text-lg text-[#666666]">Bebek odaları için mükemmel sevimli ayı patik</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-[#2E7D32] flex-shrink-0 mt-0.5" strokeWidth={3} />
                <span className="text-lg text-[#666666]">Çocukları büyüleyen görkemli aslan</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-[#2E7D32] flex-shrink-0 mt-0.5" strokeWidth={3} />
                <span className="text-lg text-[#666666]">Dekorasyon için şık kedi</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-[#2E7D32] flex-shrink-0 mt-0.5" strokeWidth={3} />
                <span className="text-lg text-[#666666]">Herkesin sevdiği sevgi dolu köpek</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-[#2E7D32] flex-shrink-0 mt-0.5" strokeWidth={3} />
                <span className="text-lg text-[#666666]">Ve daha pek çok hayvan modeli (sizi bekleyen sürprizler var!)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
