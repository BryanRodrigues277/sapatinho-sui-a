export default function AboutTeacher() {

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Lernen Sie Ihre Lehrerin kennen!
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative w-full max-w-md mx-auto">
                <img
                  src="https://i.postimg.cc/VkJKQK4f/Tapetes-Arts-1024x1024.webp"
                  alt="Heloísa Santos - Lehrerin"
                  loading="lazy"
                  className="w-full rounded-xl shadow-2xl"
                />
              </div>
            </div>

            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Hallo! Mein Name ist <strong>Heloísa Santos</strong> und ich bin seit über 5 Jahren leidenschaftliche Amigurumi-Künstlerin. Ich habe dieses E-Book über Hausschuhe erstellt, um Ihnen zu zeigen, dass auch Sie mit den richtigen Techniken <strong>wunderschöne Hausschuhe und Babyschuhe kreieren können, die jeden verzaubern</strong>.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
