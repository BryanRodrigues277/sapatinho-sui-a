import { memo } from 'react';

const benefits = [
  {
    emoji: '📚',
    title: "Plus de 100 Modèles Exclusifs",
    description: 'Collection complète de modèles amigurumi sur le thème des chaussons et chaussures de bébé avec des explications détaillées.'
  },
  {
    emoji: '⚡',
    title: 'Accès Immédiat et à Vie',
    description: 'Recevez tout par e-mail en quelques secondes et accédez-y pour toujours sans frais mensuels.'
  },
  {
    emoji: '📖',
    title: 'Pas à Pas Illustré',
    description: 'Chaque modèle est accompagné de photos et d\'explications claires, idéales tant pour les débutants que pour les confirmés.'
  },
  {
    emoji: '💰',
    title: 'Générez un Revenu Supplémentaire',
    description: 'Vendez vos produits finis ou acceptez des commandes personnalisées e rentabilisez votre talent.'
  },
  {
    emoji: '📈',
    title: 'Tendance en Hausse',
    description: 'Les chaussons et chaussures amigurumi connaissent un grand succès sur les réseaux sociaux et se vendent très bien en ligne.'
  },
  {
    emoji: '🤝',
    title: 'Support et Communauté',
    description: 'Rejoignez le groupe exclusif d\'artisans et recevez des conseils, de l\'inspiration et de l\'aide dès que vous en avez besoin.'
  }
];

function Benefits() {
  return (
    <section className="py-20 px-5 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-[32px] font-bold text-cinza-dark text-center mb-6">
          Pourquoi l'e-book "Chaussons & Chaussures Bébé Amigurumi" est-il tout ce dont vous avez besoin ?
        </h2>

        <p className="text-lg text-cinza-medium text-center mb-12 max-w-3xl mx-auto">
          Tout ce dont vous avez besoin pour maîtriser l'art de l'amigurumi et transformer votre hobby en entreprise.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-bege-light to-[#F5F0E8] p-10 rounded-2xl border-2 border-transparent transition-all duration-300 hover:-translate-y-2 hover:border-azul-primary hover:shadow-xl hover:shadow-azul-primary/20"
            >
              <div className="text-5xl mb-4">{benefit.emoji}</div>
              <h3 className="text-xl font-semibold text-cinza-dark mb-3">
                {benefit.title}
              </h3>
              <p className="text-base text-cinza-medium leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Benefits);
