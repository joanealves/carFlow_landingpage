'use client';
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Play, CheckCircle, Star, Zap, TrendingUp } from 'lucide-react';

interface HeroProps {
  onStartTrial: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartTrial }) => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative pt-20 pb-16 lg:pt-24 lg:pb-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full text-sm font-medium text-blue-700 mb-8 border border-blue-200/50 shadow-sm">
            <Zap className="w-4 h-4" />
            <span>Pronto para alavancar o seu negócio</span>
            <TrendingUp className="w-4 h-4" />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="block">Transforme seu</span>
            <span className="text-indigo-700">
              Lava-Jato Digital
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Sistema completo de gestão com <strong>agendamento online</strong>, 
            <strong> dashboard analítico</strong>, <strong>WhatsApp automático</strong> e 
            <strong> pagamentos integrados</strong>. Aumente seu faturamento.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6 mb-10 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Teste grátis por 07 dias</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Sem cartão de crédito</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Suporte</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={onStartTrial}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              aria-label="Começar Teste Grátis por 14 dias"
            >
              Começar Teste Grátis
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              className="group flex items-center text-gray-700 hover:text-blue-600 transition-colors px-6 py-4 rounded-xl hover:bg-white/50 backdrop-blur-sm" 
              aria-label="Ver demonstração do sistema"
            >
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg mr-3 group-hover:shadow-xl transition-shadow">
                <Play className="w-5 h-5 ml-0.5 text-blue-600" />
              </div>
              <span className="font-medium">Ver Demonstração</span>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute top-1/4 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-10 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-green-200 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '3s' }} />
    </section>
  );
};

export default Hero;