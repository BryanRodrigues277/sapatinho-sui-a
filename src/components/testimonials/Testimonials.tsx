export default function Testimonials() {
  return (
    <section className="py-20 px-5 bg-white">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-[32px] font-bold text-cinza-dark text-center mb-6">
          Ce que disent nos élèves :
        </h2>

        <p className="text-lg text-cinza-medium text-center mb-12">
          +3.500 élèves fabriquent déjà leurs propres chaussons
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-bege-light rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <img
              src="https://image2url.com/r2/default/images/1772746429204-7d964c87-8c80-46ce-93db-6a81b8a287f3.png"
              alt="Témoignage Clarice Souza"
              loading="lazy"
              className="w-full h-auto block"
            />
          </div>

          <div className="bg-bege-light rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <img
              src="https://image2url.com/r2/default/images/1772746464311-a8ab4a5d-40a6-4636-9f76-a92eea32cb78.png"
              alt="Témoignage Maria Lima"
              loading="lazy"
              className="w-full h-auto block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
