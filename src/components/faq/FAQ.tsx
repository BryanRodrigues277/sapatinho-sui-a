import { useState } from 'react';
import { Plus } from 'lucide-react';

const faqs = [
  {
    question: 'E-kitap tığ işine yeni başlayanlar için uygun mu?',
    answer: 'Kesinlikle! E-kitap; adım adım açıklamalar, açık şemalar ve pek çok ipucuyla kolay anlaşılır şekilde hazırlandı. Amigurumiye sıfırdan başlıyor olsunuz bile takıp edebilir ve harika ürünler yapabilirsiniz.'
  },
  {
    question: 'Kaç patik ve bebek ayakkabısı modeli dahil edilmiştir?',
    answer: 'Toplam 16 eksiksiz tarif alacaksınız: yetişkin, çocuk ve uniseks modeller. Tüm bunlar açık şemalar ve detaylı ipucuçlarıyla birlikte gelir.'
  },
  {
    question: 'Soru sormak için herhangi bir destek var mı?',
    answer: 'Evet. Pazartesi-Cuma 09:00-18:00 saatleri arasında, resmi tatiller hariç.'
  },
  {
    question: 'Bu siteden alışveriş yapmak güvenli mi?',
    answer: 'Evet, alışverişiniz %100 güvende olacaktır. Güvenli ödeme işemcimiz aracılığıyla https protokolü kullanıyoruz.'
  },
  {
    question: 'Erişim ömrüm boyunca devam eder mi?',
    answer: 'Evet, ödeme tek seferlik yapılır ve e-kitaba erişim ömrümüz boyu devam eder!'
  },
  {
    question: 'Neden bu kadar ucuz? Bu gerçek mi?',
    answer: 'Evet, promosyon fiyatı kitabı mümkün olduğunca fazla kişiye ulaştırmak için belirlenmiştir. Ancak dikkat: bu sınırlı bir tekliftir ve her an sona erebilir.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-5 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-[32px] font-bold text-cinza-dark text-center mb-12">
          Sıkça Sorulan Sorular
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-5 py-5 flex items-center justify-between text-left bg-bege-light hover:bg-[#F0E6E0] transition-colors"
              >
                <span className="font-semibold text-base text-cinza-dark pr-4">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-azul-primary flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''
                    }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 bg-white ${openIndex === index ? 'max-h-[500px]' : 'max-h-0'
                  }`}
              >
                <div className="px-5 py-5 text-cinza-medium leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
