import { useCheckoutLink } from '../../hooks/useCheckoutLink';
import { handleCheckoutNavigation } from '../../utils/navigation';

export default function FAQCTA() {
  const checkoutUrl = useCheckoutLink();

  return (
    <section className="py-16 bg-[#1e3a5f]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            🎉 Sonderangebot <span className="text-[#28a745]">begrenzte Zeit</span>!
          </h2>

          <p className="text-lg text-white mb-8">
            Verwandeln Sie Ihre Kreationen mit dem kompletten Kurs zu einem unschlagbaren Preis. Sichern Sie ihn sich jetzt!
          </p>

          <a
            href={checkoutUrl}
            onClick={(e) => handleCheckoutNavigation(e, checkoutUrl, 'faq-cta')}
            className="checkout bg-[#28a745] hover:bg-[#218838] text-white px-12 py-5 rounded-lg text-xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            💳 Jetzt kaufen
          </a>

          <div className="mt-8 space-y-2">
            <p className="text-white text-sm">
              📦 Zugriff auf das Material sofort nach <strong>Zahlungsbestätigung</strong>.
            </p>
            <p className="text-white text-sm">
              💳 <strong>Einmalzahlung</strong> und garantierter <strong>lebenslanger</strong> Zugriff.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
