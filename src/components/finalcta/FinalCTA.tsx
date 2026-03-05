import { useCheckoutLink } from '../../hooks/useCheckoutLink';
import { handleCheckoutNavigation } from '../../utils/navigation';

export default function FinalCTA() {
  const checkoutUrl = useCheckoutLink();

  return (
    <section className="py-16 px-5 bg-gradient-to-br from-azul-gradient-start to-azul-gradient-end">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-[32px] font-bold text-white mb-6">
          +100 tarifli e-kitabınızı yalnızca $14'e hemen garantileyin!
        </h2>

        <a
          href={checkoutUrl}
          onClick={(e) => handleCheckoutNavigation(e, checkoutUrl, 'final-cta-section')}
          className="checkout inline-block w-full max-w-md bg-verde-cta hover:bg-verde-hover text-white px-12 py-6 rounded-lg text-xl font-bold shadow-2xl transition-all duration-300 hover:scale-105"
        >
          ŞİMDİ GARANTİLEMEK İSTİYORUM!
        </a>

        <p className="text-sm text-white/80 mt-6">
          🔒 %100 güvenli ödeme - Anında erişim - 7 günlük garanti
        </p>
      </div>
    </section>
  );
}
