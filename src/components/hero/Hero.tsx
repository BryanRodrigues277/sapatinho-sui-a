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
              E-Book Amigurumi Hausschuhe & Babyschuhe -{' '}
              <span className="text-amarelo-destaque" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
                +100 exklusive Modelle
              </span>
            </h1>

            <h2 className="text-2xl md:text-2xl leading-tight font-semibold mb-6 text-white">
              Verwandeln Sie Ihr Garn in bewundernswerte Hausschuhe, die jeder haben möchte!
            </h2>

            <p className="text-lg text-white/95 mb-4 leading-relaxed">
              +100 exklusive Amigurumi-Modelle mit detaillierten Schritt-für-Schritt-Anleitungen.
            </p>

            <p className="text-lg text-white/95 mb-8 leading-relaxed">
              Entdecken Sie das Geheimnis für das Häkeln von Hausschuhen und Babyschuhen, die Babys, Kinder und Erwachsene gleichermaßen begeistern!
            </p>

            <a
              href="#preco"
              onClick={scrollToPrice}
              className="inline-block bg-verde-cta hover:bg-verde-hover text-white px-6 py-3 md:px-10 md:py-4 rounded-lg text-sm md:text-lg font-bold shadow-lg transition-all duration-300 hover:-translate-y-0.5 animate-pulse-shadow w-full md:w-auto text-center"
            >
              ICH WILL MEINE AMIGURUMI-HAUSSCHUHE JETZT!
            </a>
          </div>

          <div className="flex justify-center">
            <img
              src="https://image2url.com/r2/default/images/1772748476343-b129ce93-6b7f-468b-a834-d3045e07eddc.png"
              alt="E-Book Amigurumi Hausschuhe"
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
