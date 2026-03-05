import { memo } from 'react';

function LoveCrochet() {
  return (
    <section className="py-20 px-5 bg-bege-light">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-[32px] md:text-[32px] font-bold text-cinza-dark mb-8">
          Stellen Sie sich Folgendes vor...
        </h2>

        <p className="text-lg text-cinza-medium mb-6 leading-relaxed">
          Ein Baby, das seine ersten von Ihnen handgefertigten Schühchen trägt. Ein Kind, das seine entzückenden Einhorn-Hausschuhe gar nicht mehr ausziehen möchte. Ein Zuhause, das durch die Gemütlichkeit Ihrer Handarbeit erwärmt wird.
        </p>

        <p className="text-lg text-cinza-medium mb-6 leading-relaxed">
          <strong>All das mit Ihren eigenen Händen erschaffen.</strong>
        </p>

        <div className="flex justify-center mb-8">
          <img
            src="https://i.postimg.cc/6QCZZPB4/Design-sem-nome-24.webp"
            alt="Bunte Hausschuhe und Babyschuhe"
            className="max-w-[700px] w-full h-auto rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>

        <p className="text-lg text-cinza-medium leading-relaxed">
          Einfach. Herzlich. <strong>Unvergesslich!</strong>
        </p>
      </div>
    </section>
  );
}

export default memo(LoveCrochet);
