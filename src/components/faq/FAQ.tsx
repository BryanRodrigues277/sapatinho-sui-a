import { useState } from 'react';
import { Plus } from 'lucide-react';

const faqs = [
  {
    question: "Ist das E-Book für Häkelanfänger geeignet?",
    answer: "Absolut! Das E-Book wurde so konzipiert, dass es leicht verständlich ist, mit Schritt-für-Schritt-Erklärungen, klaren Diagrammen und vielen Tipps. Selbst wenn Sie ganz neu bei Amigurumi sind, können Sie folgen und grossartige Produkte herstellen."
  },
  {
    question: "Wie viele Modelle von Hausschuhen und Babyschuhen sind enthalten?",
    answer: "Sie erhalten insgesamt 16 vollständige Modelle: Modelle für Erwachsene, Kinder und Unisex. Alle werden mit klaren Diagrammen und detaillierten Tipps geliefert."
  },
  {
    question: "Gibt es einen Support für Fragen?",
    answer: "Ja. Montag bis Freitag von 09:00 bis 18:00 Uhr, außer an Feiertagen."
  },
  {
    question: "Ist der Kauf auf dieser Website sicher?",
    answer: "Ja, Ihr Kauf ist zu 100 % sicher. Wir verwenden das HTTPS-Protokoll über unseren sicheren Zahlungsanbieter."
  },
  {
    question: "Ist der Zugriff lebenslang?",
    answer: "Ja, es ist eine Einmalzahlung und der Zugriff auf das E-Book ist lebenslang!"
  },
  {
    question: "Warum ist es so günstig? Ist das echt?",
    answer: "Ja, der Aktionspreis wurde festgelegt, um das Buch so vielen Menschen wie möglich zugänglich zu machen. Aber Vorsicht: Dies ist ein begrenztes Angebot, das jederzeit enden kann."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-5 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-[32px] font-bold text-cinza-dark text-center mb-12">
          Häufig gestellete Fragen
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-5 py-5 flex items-center justify-between text-left bg-bege-light hover:bg-[#F0E6E0] transition-colors"
              >
                <span className="font-semibold text-base text-cinza-dark pr-4">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-azul-primary flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''
                    }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 bg-white ${openIndex === index ? 'max-h-[500px]' : 'max-h-0'
                  }`}
              >
                <div className="px-5 py-5 text-cinza-medium leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
