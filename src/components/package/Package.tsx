import { Check } from 'lucide-react';

export default function Package() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img
              src="https://image2url.com/r2/default/images/1772746755702-2de62fc3-aabd-4687-83be-2bac8dfb5943.png"
              alt="E-book Chaussons Amigurumi"
              loading="lazy"
              className="w-full max-w-lg rounded-xl shadow-2xl"
            />

            <div>
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#333333] mb-4">
                  Ce qui est inclus dans le pack
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-[#2E7D32] flex-shrink-0 mt-0.5" strokeWidth={3} />
                    <span className="text-lg text-[#666666]">Modèles complets en PDF</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-[#2E7D32] flex-shrink-0 mt-0.5" strokeWidth={3} />
                    <span className="text-lg text-[#666666]">Différents modèles d'animaux</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-[#2E7D32] flex-shrink-0 mt-0.5" strokeWidth={3} />
                    <span className="text-lg text-[#666666]">Pas à pas détaillé</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-[#2E7D32] flex-shrink-0 mt-0.5" strokeWidth={3} />
                    <span className="text-lg text-[#666666]">Accès à vie</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
