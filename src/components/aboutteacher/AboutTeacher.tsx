export default function AboutTeacher() {

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Faites connaissance avec votre professeur !
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative w-full max-w-md mx-auto">
                <img
                  src="https://i.postimg.cc/VkJKQK4f/Tapetes-Arts-1024x1024.webp"
                  alt="Heloísa Santos - Professeure"
                  loading="lazy"
                  className="w-full rounded-xl shadow-2xl"
                />
              </div>
            </div>

            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Salut ! Je m'appelle <strong>Heloísa Santos</strong> et je suis passionnée par l'amigurumi depuis plus de 5 ans. J'ai créé cet e-book de chaussons pour vous montrer qu'avec les bonnes techniques, <strong>vous pouvez vous aussi créer de magnifiques chaussons et chaussures qui enchantent tout le monde</strong>.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
