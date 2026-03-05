import { useRef, memo } from 'react';
import { Check } from 'lucide-react';
import { useCheckoutLink } from '../../hooks/useCheckoutLink';
import { handleCheckoutNavigation } from '../../utils/navigation';

function Offer() {
  const offerRef = useRef<HTMLDivElement>(null);
  const checkoutUrl = useCheckoutLink();

  return (
    <section id="preco" ref={offerRef} className="py-20 px-5 bg-white">
      <div className="container mx-auto max-w-2xl text-center">
        <div className="bg-gradient-to-br from-[#E8F5E9] to-[#F1F8E9] rounded-2xl p-8 md:p-12 border-2 border-verde-cta">
          <p className="inline-block bg-verde-cta text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
            OFFRE LIMITÉE
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-verde-cta mb-2">
            Seulement aujourd'hui
          </h2>

          <div className="mb-8">
            <img
              src="https://image2url.com/r2/default/images/1772746755702-2de62fc3-aabd-4687-83be-2bac8dfb5943.png"
              alt="E-book Chaussons Amigurumi"
              loading="lazy"
              className="max-w-[250px] mx-auto rounded-lg"
              style={{ filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.3))' }}
            />
          </div>

          <div className="mb-2">
            <p className="text-sm line-through text-cinza-medium">97,00€</p>
            <p className="inline-block bg-vermelho-urgencia text-white px-3 py-1 rounded text-xs font-bold">seulement</p>
          </div>

          <div className="mb-2">
            <div className="text-[80px] md:text-[160px] font-black text-verde-cta tracking-tighter leading-none font-sans">
              9,90€
            </div>
          </div>

          <p className="text-xs text-cinza-medium mb-6">TAXES INCLUSES</p>

          <div className="bg-white rounded-xl p-6 mb-8 border-l-4 border-verde-cta">
            <p className="text-base font-semibold text-cinza-dark mb-4">Modèles exclusifs :</p>
            <ul className="space-y-3 text-sm text-cinza-dark text-left">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 mt-0 text-verde-cta" />
                <span>Plus de 100 modèles de Chaussons et de Chaussures de Bébé décoratifs</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 mt-0 text-verde-cta" />
                <span>Pas à pas en Français</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 mt-0 text-verde-cta" />
                <span>Paiement Unique - Accès à Vie</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 mt-0 text-verde-cta" />
                <span>Mises à jour Hebdomadaires</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 mt-0 text-verde-cta" />
                <span>Mini E-book d'Accessoires Amigurumi pour Enfants</span>
              </li>
            </ul>
          </div>

          <a
            href={checkoutUrl}
            onClick={(e) => handleCheckoutNavigation(e, checkoutUrl, 'offer-section')}
            className="checkout inline-block w-full bg-verde-cta hover:bg-verde-hover text-white px-12 py-5 rounded-full text-lg font-bold shadow-lg transition-all duration-300 mb-6"
          >
            JE VEUX MES CHAUSSONS AMIGURUMI MAINTENANT !
          </a>

          <div className="bg-[#FFF8E1] rounded-xl p-4 border-2 border-[#FFB74D]">
            <p className="text-base font-semibold text-[#E65100]">
              ⚠️ Places limitées pour l'accès au support personnalisé
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Offer);
