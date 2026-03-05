import { memo } from 'react';

const recipes = [
  { name: 'Hausschuh', highlight: 'Pinguin', image: 'https://i.postimg.cc/RF9HLT0K/il-794x-N-6963782567-85lw.webp' },
  { name: 'Hausschuh', highlight: 'Elch', image: 'https://i.postimg.cc/vBMVtvmn/il-794x-N-6963782485-cgbh.webp' },
  { name: 'Hausschuh', highlight: 'Giraffen', image: 'https://i.postimg.cc/5t8zzrfw/il-794x-N-2859563980-skmv.webp' },
  { name: 'Hausschuh', highlight: 'Einhorn', image: 'https://i.postimg.cc/d0GCCfJ9/il-794x-N-3338984805-tkrj.webp' },
  { name: 'Schühchen', highlight: 'Blau', image: 'https://i.postimg.cc/W3jkw74r/il-794x-N-6963782489-fiht.webp' },
  { name: 'Stiefelchen', highlight: 'Niedlich', image: 'https://i.postimg.cc/tgF66c9F/il-794x-N-2859559852-hfhe.webp' },
  { name: 'Stiefelchen', highlight: '', image: 'https://i.postimg.cc/CKb882wJ/il-794x-N-6963782477-5dkn.webp' },
  { name: 'Schühchen', highlight: 'Grün', image: 'https://i.postimg.cc/7LSzzRqV/il-794x-N-6915810376-83sb.webp' },
  { name: 'Ballerinas', highlight: '', image: 'https://i.postimg.cc/CKb882ws/il-794x-N-3338984759-iubh.webp' },
];

function Gallery() {
  return (
    <section className="py-20 px-5 bg-gradient-to-b from-[#E3F2FD] to-bege-light">
      <div className="container mx-auto max-w-6xl">
        <h2
          className="text-[32px] font-bold text-center mb-12"
          style={{
            background: 'linear-gradient(135deg, #2196F3, #1976D2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Sehen Sie sich die Anleitungen an, die Sie erhalten werden!
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recipes.map((recipe, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl hover:shadow-azul-primary/25 transition-all duration-300 hover:-translate-y-2"
            >
              <img
                src={recipe.image}
                alt={`${recipe.name} ${recipe.highlight}`}
                loading="lazy"
                className="w-full aspect-square object-cover rounded-xl mb-3"
              />

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Gallery);
