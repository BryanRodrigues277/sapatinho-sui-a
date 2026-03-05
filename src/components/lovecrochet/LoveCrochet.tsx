import { memo } from 'react';

function LoveCrochet() {
  return (
    <section className="py-20 px-5 bg-bege-light">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-[32px] md:text-[32px] font-bold text-cinza-dark mb-8">
          Imaginez ceci...
        </h2>

        <p className="text-lg text-cinza-medium mb-6 leading-relaxed">
          Un bébé portant ses premiers chaussons faits par vous. Un enfant qui refuse d'enlever ses adorables pantoufles licorne. Une maison réchauffée par le confort de votre artisanat.
        </p>

        <p className="text-lg text-cinza-medium mb-6 leading-relaxed">
          <strong>Tout cela fait de vos propres mains.</strong>
        </p>

        <div className="flex justify-center mb-8">
          <img
            src="https://i.postimg.cc/6QCZZPB4/Design-sem-nome-24.webp"
            alt="Renkli Patikler ve Bebek Ayakkabıları"
            className="max-w-[700px] w-full h-auto rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>

        <p className="text-lg text-cinza-medium leading-relaxed">
          Simple. Chaleureux. <strong>Inoubliable !</strong>
        </p>
      </div>
    </section>
  );
}

export default memo(LoveCrochet);
