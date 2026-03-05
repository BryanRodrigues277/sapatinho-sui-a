export default function Testimonials() {
  return (
    <section className="py-20 px-5 bg-white">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-[32px] font-bold text-cinza-dark text-center mb-6">
          Öğrencilerimiz ne diyor:
        </h2>

        <p className="text-lg text-cinza-medium text-center mb-12">
          +3.500 öğrenci zaten kendi patiklerini yapıyor
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-bege-light rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <img
              src="https://image2url.com/r2/default/images/1772743431140-10a547a3-aa58-485b-bcda-d4556677c43c.png"
              alt="Depoimento Clarice Souza"
              loading="lazy"
              className="w-full h-auto block"
            />
          </div>

          <div className="bg-bege-light rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <img
              src="https://image2url.com/r2/default/images/1772743474573-5bf5c2c0-a38b-42e5-b126-9816b50269cc.png"
              alt="Depoimento Maria Lima"
              loading="lazy"
              className="w-full h-auto block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
