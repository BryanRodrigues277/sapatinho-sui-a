import { useState } from 'react';
import { Plus } from 'lucide-react';

const faqs = [
  {
    question: "L'e-book convient-il aux débutants en crochet ?",
    answer: "Absolument ! L'e-book a été conçu pour être facile à comprendre, avec des explications étape par étape, des diagrammes clairs et de nombreuses astuces. Même si vous debutez l'amigurumi de zéro, vous pouvez suivre et créer de superbes produits."
  },
  {
    question: "Combien de modèles de chaussons et de chaussures de bébé sont inclus ?",
    answer: "Vous recevrez au total 16 modèles complets : modèles pour adultes, enfants et mixtes. Tous sont accompagnés de diagrammes clairs et d'astuces détaillées."
  },
  {
    question: "Existe-t-il un support pour poser des questions ?",
    answer: "Oui. Du lundi au vendredi de 09h00 à 18h00, hors jours fériés."
  },
  {
    question: "Est-il sûr d'acheter sur ce site ?",
    answer: "Oui, votre achat est 100% sécurisé. Nous utilisons le protocole https via notre processeur de paiement sécurisé."
  },
  {
    question: "L'accès est-il à vie ?",
    answer: "Oui, le paiement est unique et l'accès à l'e-book est à vie !"
  },
  {
    question: "Pourquoi est-ce si peu cher ? Est-ce réel ?",
    answer: "Oui, le prix promotionnel est fixé pour rendre le livre accessible au plus grand nombre. Mais attention : c'est une offre limitée qui peut se terminer à tout moment."
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
          Questions Fréquemment Posées
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
