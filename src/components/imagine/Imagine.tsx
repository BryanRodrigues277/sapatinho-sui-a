import { Check } from 'lucide-react';

export default function Imagine() {
  return (
    <section className="py-16 bg-[#f5f0e8]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#333333]">
            Weiche Haptik, warme Farben, Modelle, die verzaubern.
          </h2>

          <p className="text-lg text-[#666666] mb-4 leading-relaxed max-w-3xl mx-auto">
            Stellen Sie sich einen niedlichen Bären-Hausschuh für das Zimmer Ihres Babys oder einen mutigen Löwen vor, der jedes Kind verzaubert. Jedes Modell ist ein funktionales Kunstwerk, das jedem Raum Stil und Wärme verleiht!
          </p>

          <p className="text-lg text-[#666666] mb-8 leading-relaxed max-w-3xl mx-auto">
            Das ist das, was Sie mit dem <strong className="text-[#2E7D32]">Amigurumi-Hausschuhe E-Book</strong> lernen werden!
          </p>

          <div className="mb-8">
            <img
              src="https://image2url.com/r2/default/images/1772748476343-b129ce93-6b7f-468b-a834-d3045e07eddc.png"
              alt="Amigurumi-Hausschuh"
              loading="lazy"
              className="w-full max-w-md mx-auto rounded-xl shadow-lg"
            />
          </div>

          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#333333]">
            Mit exklusiven Modellen können Sie diese wunderschönen Hausschuhe herstellen:
          </h3>

          <div className="max-w-2xl mx-auto">
            <ul className="space-y-3 text-left">
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-[#2E7D32] flex-shrink-0 mt-0.5" strokeWidth={3} />
                <span className="text-lg text-[#666666]">Niedlicher Bären-Hausschuh, perfekt für Babyzimmer</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-[#2E7D32] flex-shrink-0 mt-0.5" strokeWidth={3} />
                <span className="text-lg text-[#666666]">Majestätischer Löwe, der Kinder verzaubert</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-[#2E7D32] flex-shrink-0 mt-0.5" strokeWidth={3} />
                <span className="text-lg text-[#666666]">Elegante Katze zur Dekoration</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-[#2E7D32] flex-shrink-0 mt-0.5" strokeWidth={3} />
                <span className="text-lg text-[#666666]">Liebevoller Hund, den jeder liebt</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-[#2E7D32] flex-shrink-0 mt-0.5" strokeWidth={3} />
                <span className="text-lg text-[#666666]">Und viele weitere Tiermodelle (Überraschungen erwarten Sie!)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
