import { useCheckoutLink } from '../../hooks/useCheckoutLink';
import { handleCheckoutNavigation } from '../../utils/navigation';

export default function FAQCTA() {
  const checkoutUrl = useCheckoutLink();

  return (
    <section className="py-16 bg-[#1e3a5f]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            🎉 <span className="text-[#28a745]">Sınırlı Süre</span> Özel Teklif!
          </h2>

          <p className="text-lg text-white mb-8">
            Tam kurs ile yaratıcılıklarınızı kaybedilmez bir fiyatla dönüştürün. Hemen garantileyin!
          </p>

          <a
            href={checkoutUrl}
            onClick={(e) => handleCheckoutNavigation(e, checkoutUrl, 'faq-cta')}
            className="checkout bg-[#28a745] hover:bg-[#218838] text-white px-12 py-5 rounded-lg text-xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            💳 Şimdi Satın Al
          </a>

          <div className="mt-8 space-y-2">
            <p className="text-white text-sm">
              📦 <strong>Ödeme onaylanmasından</strong> hemen sonra materyal erişimi.
            </p>
            <p className="text-white text-sm">
              💳 <strong>Tek ödeme</strong> ve <strong>ömrüm boyu</strong> erişim garantili.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
