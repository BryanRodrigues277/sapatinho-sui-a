import { memo } from 'react';

function Hero() {
  const scrollToPrice = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const priceSection = document.getElementById('preco');
    if (priceSection) {
      priceSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-azul-gradient-start to-azul-gradient-end py-20 px-5">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-[36px] md:text-[40px] leading-tight font-bold mb-4">
              E-book Chaussons Amigurumi & Chaussures pour Bébé -{' '}
              <span className="text-amarelo-destaque" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
                +100 modèles exclusifs
              </span>
            </h1>

            <h2 className="text-2xl md:text-2xl leading-tight font-semibold mb-6 text-white">
              Transformez vos fils en chaussons admirables que tout le monde voudra !
            </h2>

            <p className="text-lg text-white/95 mb-4 leading-relaxed">
              +100 modèles amigurumi exclusifs avec des explications détaillées étape par étape.
            </p>

            <p className="text-lg text-white/95 mb-8 leading-relaxed">
              Découvrez le secret pour créer des chaussons au crochet et des chaussures de bébé qui enchantent les bébés, os enfants et les adultes !
            </p>

            <a
              href="#preco"
              onClick={scrollToPrice}
              className="inline-block bg-verde-cta hover:bg-verde-hover text-white px-6 py-3 md:px-10 md:py-4 rounded-lg text-sm md:text-lg font-bold shadow-lg transition-all duration-300 hover:-translate-y-0.5 animate-pulse-shadow w-full md:w-auto text-center"
            >
              JE VEUX MES CHAUSSONS AMIGURUMI MAINTENANT !
            </a>
          </div>

          <div className="flex justify-center">
            <img
              src="https://image2url.com/r2/default/images/1772746755702-2de62fc3-aabd-4687-83be-2bac8dfb5943.png"
              alt="E-book Chaussons Amigurumi"
              className="max-w-[450px] w-full h-auto rounded-lg animate-float"
              style={{ filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.3))' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Hero);
