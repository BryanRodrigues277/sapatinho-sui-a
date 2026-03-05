import { memo } from 'react';

const benefits = [
  {
    emoji: '📚',
    title: "Über 100 exklusive Modelle",
    description: 'Vollständige Sammlung von Amigurumi-Anleitungen für Hausschuhe und Babyschuhe mit detaillierten Erklärungen.'
  },
  {
    emoji: '⚡',
    title: 'Sofortiger lebenslanger Zugriff',
    description: 'Erhalten Sie alles innerhalb von Sekunden per E-Mail und greifen Sie für immer darauf zu – ohne monatliche Gebühren.'
  },
  {
    emoji: '📖',
    title: 'Illustrierte Schritt-für-Schritt-Anleitungen',
    description: 'Jedes Modell wird mit Fotos und klaren Erklärungen geliefert, ideal sowohl für Anfänger als auch für Fortgeschrittene.'
  },
  {
    emoji: '💰',
    title: 'Zusätzliches Einkommen generieren',
    description: 'Verkaufen Sie Ihre fertigen Produkte oder nehmen Sie individuelle Bestellungen an und machen Sie Ihr Talent zu Geld.'
  },
  {
    emoji: '📈',
    title: 'Wachsender Trend',
    description: 'Amigurumi-Hausschuhe und Babyschuhe sind in den sozialen Medien ein großer Erfolg und verkaufen sich online sehr gut.'
  },
  {
    emoji: '🤝',
    title: 'Support und Community',
    description: 'Treten Sie der exklusiven Gruppe von Kunsthandwerkern bei und erhalten Sie Tipps, Inspiration und Hilfe, wann immer Sie diese benötigen.'
  }
];

function Benefits() {
  return (
    <section className="py-20 px-5 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-[32px] font-bold text-cinza-dark text-center mb-6">
          Warum ist das E-Book „Amigurumi-Hausschuhe & Babyschuhe“ genau das Richtige für Sie?
        </h2>

        <p className="text-lg text-cinza-medium text-center mb-12 max-w-3xl mx-auto">
          Alles, was Sie brauchen, um die Kunst des Amigurumi zu meistern und Ihr Hobby in ein Geschäft zu verwandeln.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-bege-light to-[#F5F0E8] p-10 rounded-2xl border-2 border-transparent transition-all duration-300 hover:-translate-y-2 hover:border-azul-primary hover:shadow-xl hover:shadow-azul-primary/20"
            >
              <div className="text-5xl mb-4">{benefit.emoji}</div>
              <h3 className="text-xl font-semibold text-cinza-dark mb-3">
                {benefit.title}
              </h3>
              <p className="text-base text-cinza-medium leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Benefits);
