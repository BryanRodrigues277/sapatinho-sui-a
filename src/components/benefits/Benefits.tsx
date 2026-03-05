import { memo } from 'react';

const benefits = [
  {
    emoji: '📚',
    title: "100'den Fazla Özel Model",
    description: 'Patik ve bebek ayakkabısı temalı amigurumilerin detaylı anlatımlı eksiksiz koleksiyonu'
  },
  {
    emoji: '⚡',
    title: 'Anında ve Ömür Boyu Erişim',
    description: 'Her şeyi saniyeler içinde e-postanıza alın ve aylık ücret ödemeden sonsuza dek erişin'
  },
  {
    emoji: '📖',
    title: 'Resimli Adım Adım Anlatım',
    description: 'Her model fotoğraf ve açık açıklamalarla gelir, hem yeni başlayanlar hem de ileri seviye için mükemmel'
  },
  {
    emoji: '💰',
    title: 'Ek Gelir Elde Edin',
    description: 'Bitirdiğiniz ürünleri satın veya özel siparişler kabul edin ve yeteneğinizden kazanç sağlayın'
  },
  {
    emoji: '📈',
    title: 'Yükselen Trend',
    description: 'Amigurumi patikler ve bebek ayakkabıları sosyal medyada büyük başarı yakalıyor ve çevrimiçi çok satıyor'
  },
  {
    emoji: '🤝',
    title: 'Destek ve Topluluk',
    description: 'El sanatları ustaları için özel gruba katılın ve her ihtiyacınızda ipuçları, ilham ve yardım alın'
  }
];

function Benefits() {
  return (
    <section className="py-20 px-5 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-[32px] font-bold text-cinza-dark text-center mb-6">
          Neden "Amigurumi Patik & Bebek Ayakkabısı E-Kitabı" ihtiyacınız olan tek şey?
        </h2>

        <p className="text-lg text-cinza-medium text-center mb-12 max-w-3xl mx-auto">
          Amigurumi sanatında ustalaşmak ve hobinizi işe dönüştürmek için ihtiyacınız olan her şey
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
