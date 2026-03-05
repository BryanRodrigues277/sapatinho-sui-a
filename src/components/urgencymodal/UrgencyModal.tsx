import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function UrgencyModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const modalShown = sessionStorage.getItem('urgencyModalShown');
    if (modalShown) {
      setHasShown(true);
      return;
    }

    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      if (scrollPercent >= 80 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('urgencyModalShown', 'true');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasShown]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const scrollToPrice = () => {
    const priceSection = document.getElementById('preco');
    if (priceSection) {
      priceSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    handleClose();
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 z-[9999] flex items-center justify-center p-4 animate-fade-in"
      onClick={handleClickOutside}
    >
      <div className="bg-white rounded-2xl max-w-[500px] w-full p-10 relative shadow-2xl">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Fermer"
        >
          <X className="w-8 h-8" />
        </button>

        <h2 className="text-[28px] font-bold text-cinza-dark mb-4 text-center">
          Offre Exclusive pour un{' '}
          <span className="text-azul-primary">Temps Limité !</span>
        </h2>

        <p className="text-base text-cinza-medium mb-4 text-center leading-relaxed">
          <strong>Seulement aujourd'hui</strong>, vous pouvez garantir ce contenu complet avec une{' '}
          <strong>réduction spéciale</strong>.
        </p>

        <p className="text-base text-cinza-dark mb-6 text-center">
          <span className="text-2xl">⏳</span> Attention : Il reste peu de places disponibles ! Ne manquez pas cette opportunité de transformer vos créations.
        </p>

        <button
          onClick={scrollToPrice}
          className="w-full bg-verde-cta hover:bg-verde-hover text-white px-6 py-4 rounded-lg text-lg font-bold shadow-lg transition-all duration-300"
        >
          Garantissez Maintenant !
        </button>

        <div className="mt-6 pt-6 border-t border-gray-200 text-sm text-cinza-medium text-center space-y-1">
          <p>
            📦 Recevez <strong>immédiatement</strong> par e-mail et WhatsApp après l'achat.
          </p>
          <p>
            💳 Paiement <strong>unique</strong> et accès <strong>à vie</strong> garanti.
          </p>
        </div>
      </div>
    </div>
  );
}
