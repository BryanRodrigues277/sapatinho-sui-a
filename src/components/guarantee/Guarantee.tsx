export default function Guarantee() {
  return (
    <section className="py-20 px-5 bg-bege-light">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-[28px] font-bold text-cinza-dark mb-8">
          %100 Memnuniyet Garantisi veya <span className="text-azul-primary">Tam Para İadesi!</span>
        </h2>

        <div className="mb-8">
          <img
            src="https://i.postimg.cc/QtsTJqMQ/selo-de-garantia-7-dias-1.webp"
            alt="7 Günlük Garanti"
            loading="lazy"
            className="w-[200px] mx-auto"
            style={{ filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.1))' }}
          />
        </div>

        <p className="text-lg text-cinza-medium leading-relaxed max-w-2xl mx-auto">
          7 gün deneyin: beğenmediyseniz paranızı geri alın.
        </p>

        <p className="text-lg text-cinza-dark font-semibold mt-4">
          Basit, hızlı ve soru sorulmadan.
        </p>
      </div>
    </section>
  );
}
