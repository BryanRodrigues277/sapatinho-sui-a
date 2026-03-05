export default function Testimonials() {
  return (
    <section className="py-20 px-5 bg-white">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-[32px] font-bold text-cinza-dark text-center mb-6">
          Was unsere Schüler sagen:
        </h2>

        <p className="text-lg text-cinza-medium text-center mb-12">
          Mehr als 3.500 Schüler stellen bereits ihre eigenen Hausschuhe her
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-bege-light rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <img
              src="https://image2url.com/r2/default/images/1772747909413-b33b5bb1-b2a1-4a3e-be33-a6aff9105634.png"
              alt="Erfahrungsbericht 1"
              loading="lazy"
              className="w-full h-auto block"
            />
          </div>

          <div className="bg-bege-light rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <img
              src="https://image2url.com/r2/default/images/1772747963145-9121ac67-87d2-4593-a76c-dbf2484e974b.png"
              alt="Erfahrungsbericht 2"
              loading="lazy"
              className="w-full h-auto block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
