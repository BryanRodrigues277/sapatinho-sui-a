import { useCheckoutLink } from '../../hooks/useCheckoutLink';
import { handleCheckoutNavigation } from '../../utils/navigation';

export default function FinalCTA() {
  const checkoutUrl = useCheckoutLink();

  return (
    <section className="py-16 px-5 bg-gradient-to-br from-azul-gradient-start to-azul-gradient-end">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-[32px] font-bold text-white mb-6">
          Sichern Sie sich jetzt Ihr E-Book mit über 100 Modellen für nur 9,90 €!
        </h2>

        <a
          href={checkoutUrl}
          onClick={(e) => handleCheckoutNavigation(e, checkoutUrl, 'final-cta-section')}
          className="checkout inline-block w-full max-w-md bg-verde-cta hover:bg-verde-hover text-white px-12 py-6 rounded-lg text-xl font-bold shadow-2xl transition-all duration-300 hover:scale-105"
        >
          ICH WILL ES MIR JETZT SICHERN!
        </a>

        <p className="text-sm text-white/80 mt-6">
          🔒 100 % sichere Zahlung - Sofortiger Zugriff - 7 Tage Garantie
        </p>
      </div>
    </section>
  );
}
