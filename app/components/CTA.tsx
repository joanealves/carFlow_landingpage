'use client';
import React from 'react';

interface CTAProps {
  onClick: () => void;
}

const CTA: React.FC<CTAProps> = ({ onClick }) => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Pronto para transformar seu lava-jato?</h2>
        <p className="mb-8 text-lg max-w-xl mx-auto">
          Comece seu teste grátis hoje mesmo e veja como o CarFlow pode impulsionar seu negócio.
        </p>
        <button
          onClick={onClick}
          className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition"
          aria-label="Começar teste grátis"
        >
          Começar Teste Grátis
        </button>
      </div>
    </section>
  );
};

export default CTA;
