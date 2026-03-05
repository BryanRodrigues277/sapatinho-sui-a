import { Check } from 'lucide-react';

export default function Imagine() {
  return (
    <section className="py-16 bg-[#f5f0e8]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#333333]">
            Toucher doux, couleurs chaleureuses, modèles qui enchantent.
          </h2>

          <p className="text-lg text-[#666666] mb-4 leading-relaxed max-w-3xl mx-auto">
            Imaginez un chausson ourson mignon pour la chambre de votre bébé ou un lion courageux qui enchante chaque enfant. Chaque modèle est une œuvre d'art fonctionnelle qui ajoute du style et de la chaleur à n'importe quel environnement !
          </p>

          <p className="text-lg text-[#666666] mb-8 leading-relaxed max-w-3xl mx-auto">
            C'est ce que vous apprendrez avec <strong className="text-[#2E7D32]">l'E-book Chaussons Amigurumi</strong> !
          </p>

          <div className="mb-8">
            <img
              src="https://image2url.com/r2/default/images/1772746755702-2de62fc3-aabd-4687-83be-2bac8dfb5943.png"
              alt="Chausson Amigurumi"
              loading="lazy"
              className="w-full max-w-md mx-auto rounded-xl shadow-lg"
            />
          </div>

          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#333333]">
            Avec des modèles exclusifs, vous pourrez fabriquer ces magnifiques chaussons :
          </h3>

          <div className="max-w-2xl mx-auto">
            <ul className="space-y-3 text-left">
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-[#2E7D32] flex-shrink-0 mt-0.5" strokeWidth={3} />
                <span className="text-lg text-[#666666]">Chausson ourson mignon parfait pour les chambres de bébé</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-[#2E7D32] flex-shrink-0 mt-0.5" strokeWidth={3} />
                <span className="text-lg text-[#666666]">Lion majestueux qui enchante les enfants</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-[#2E7D32] flex-shrink-0 mt-0.5" strokeWidth={3} />
                <span className="text-lg text-[#666666]">Chat élégant pour la décoration</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-[#2E7D32] flex-shrink-0 mt-0.5" strokeWidth={3} />
                <span className="text-lg text-[#666666]">Chien affectueux que tout le monde adore</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-[#2E7D32] flex-shrink-0 mt-0.5" strokeWidth={3} />
                <span className="text-lg text-[#666666]">Et bien d'autres modèles d'animaux (des surprises vous attendent !)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
