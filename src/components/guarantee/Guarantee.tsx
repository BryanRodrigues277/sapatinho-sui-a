export default function Guarantee() {
  return (
    <section className="py-20 px-5 bg-bege-light">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-[28px] font-bold text-cinza-dark mb-8">
          Garantie de Satisfaction à 100% ou <span className="text-azul-primary">Remboursement Intégral !</span>
        </h2>

        <div className="mb-8">
          <img
            src="https://i.postimg.cc/QtsTJqMQ/selo-de-garantia-7-dias-1.webp"
            alt="Garantie de 7 Jours"
            loading="lazy"
            className="w-[200px] mx-auto"
            style={{ filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.1))' }}
          />
        </div>

        <p className="text-lg text-cinza-medium leading-relaxed max-w-2xl mx-auto">
          Essayez pendant 7 jours : si vous n'aimez pas, récupérez votre argent.
        </p>

        <p className="text-lg text-cinza-dark font-semibold mt-4">
          Simple, rapide et sans questions.
        </p>
      </div>
    </section>
  );
}
