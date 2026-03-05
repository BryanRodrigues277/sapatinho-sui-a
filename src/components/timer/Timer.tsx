import { useState, useEffect } from 'react';

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState({
    minutes: 22,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          return { minutes: 22, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 px-5 bg-bege-light">
      <div className="container mx-auto max-w-4xl text-center">
        <p className="text-xl md:text-2xl font-bold text-cinza-dark mb-4">
          <span className="text-4xl">⭐</span> Vollständiges digitales Handbuch (PDF) mit über 100 exklusiven Anleitungen.
        </p>

        <h2 className="text-2xl md:text-[24px] font-bold text-cinza-dark mb-6">
          <span className="text-2xl">⏳</span> Unglaubliches Angebot für <span className="text-vermelho-urgencia">begrenzte Zeit!</span>
        </h2>

        <div className="flex justify-center gap-8 mb-6">
          <div className="flex flex-col items-center">
            <div className="text-5xl md:text-6xl font-bold text-vermelho-urgencia mb-2">
              {String(timeLeft.minutes).padStart(2, '0')}
            </div>
            <div className="text-sm text-cinza-medium uppercase tracking-wider">Minuten</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-5xl md:text-6xl font-bold text-vermelho-urgencia mb-2">
              {String(timeLeft.seconds).padStart(2, '0')}
            </div>
            <div className="text-sm text-cinza-medium uppercase tracking-wider">Sekunden</div>
          </div>
        </div>

        <p className="text-base text-cinza-dark mb-6">
          <span className="text-2xl">⏳</span> Achtung: Nur noch <strong>4 Plätze</strong> mit diesem Rabatt und Bonus verfügbar.
        </p>

        <div className="max-w-[600px] mx-auto">
          <div className="bg-gray-300 rounded-full h-8 relative overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-1000"
              style={{
                width: '99%',
                background: 'linear-gradient(90deg, #4CAF50, #45a049)'
              }}
            ></div>
          </div>
          <p className="text-base text-cinza-medium mt-2">Plätze zu 99% belegt</p>
        </div>
      </div>
    </section>
  );
}
