'use client';
import React, { useState } from 'react';
import { Car, BarChart3, Users, CheckCircle, Gift, Zap } from 'lucide-react';

const plans = [
  {
    id: 'freemium',
    name: 'Freemium',
    description: '7 dias grátis com funcionalidades básicas',
    monthlyPrice: 0,
    annualPrice: 0,
    originalPrice: 0,
    features: [
      'Teste grátis por 7 dias',
      'Controle básico de pedidos',
      'Dashboard simples',
      'Até 10 pedidos no período',
      '1 usuário',
      'Suporte básico por email',
    ],
    icon: Gift,
    color: 'green',
    isFree: true,
  },
  {
    id: 'basic',
    name: 'Básico',
    description: 'Ideal para pequenos lava-jatos',
    monthlyPrice: 29.9,
    annualPrice: 299.0,
    originalPrice: 358.8, // 29.9 * 12
    features: [
      'Controle de pedidos completo',
      'Acompanhamento de status',
      'Dashboard com relatórios básicos',
      'Até 100 pedidos por mês',
      '1 usuário',
      'Suporte por email',
    ],
    icon: Car,
    color: 'blue',
  },
  {
    id: 'professional',
    name: 'Profissional',
    description: 'Para lava-jatos em crescimento',
    monthlyPrice: 79.9,
    annualPrice: 799.0,
    originalPrice: 958.8, // 79.9 * 12
    features: [
      'Tudo do plano Básico',
      'Dashboard avançado com relatórios',
      'WhatsApp automático',
      'Controle de funcionários',
      'Relatórios em PDF',
      'Pedidos ilimitados',
      'Agendamento online',
      'Até 3 usuários',
    ],
    icon: BarChart3,
    color: 'purple',
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Empresarial',
    description: 'Para redes e grandes operações',
    monthlyPrice: 149.9,
    annualPrice: 1499.0,
    originalPrice: 1798.8, // 149.9 * 12
    features: [
      'Tudo do plano Profissional',
      'Sistema de pagamentos (PIX/Cartão)',
      'Programa de fidelidade',
      'API para integrações',
      'Múltiplas unidades',
      'Usuários ilimitados',
      'Suporte prioritário 24/7',
      'Treinamento personalizado',
    ],
    icon: Users,
    color: 'indigo',
  },
];

interface PricingProps {
  onSelectPlan: (plan: typeof plans[0]) => void;
}

const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const [isAnnual, setIsAnnual] = useState(false);

  const calculateDiscount = (monthly: number, annual: number) => {
    if (monthly === 0) return 0;
    const monthlyTotal = monthly * 12;
    return Math.round(((monthlyTotal - annual) / monthlyTotal) * 100);
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-white px-4 py-2 rounded-full text-sm font-medium text-green-700 mb-6 border border-green-200/50 shadow-sm">
            <Zap className="w-4 h-4" />
            <span>Comece grátis hoje mesmo</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Planos que se adaptam ao seu negócio
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Teste grátis por 7 dias, sem cartão de crédito
          </p>

          <div className="flex items-center justify-center mb-8">
            <span className={`mr-3 ${!isAnnual ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
              Mensal
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              aria-label="Alternar plano anual/mensal"
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isAnnual ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`ml-3 ${isAnnual ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
              Anual
            </span>
            {isAnnual && (
              <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                Economize até 17%
              </span>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => {
            const discount = calculateDiscount(plan.monthlyPrice, plan.annualPrice);
            const currentPrice = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            const displayPrice = isAnnual ? plan.annualPrice / 12 : plan.monthlyPrice;
            
            return (
              <div
                key={plan.id}
                className={`relative bg-white rounded-2xl shadow-lg border-2 p-6 transition-all duration-300 ${
                  plan.popular
                    ? 'border-purple-500 scale-105 shadow-xl'
                    : plan.isFree
                    ? 'border-green-500 shadow-xl'
                    : 'border-gray-200 hover:scale-[1.02] hover:shadow-xl'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      ⭐ Mais Popular
                    </span>
                  </div>
                )}

                {plan.isFree && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      🎁 Grátis
                    </span>
                  </div>
                )}

                <div
                  className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r ${
                    plan.color === 'blue'
                      ? 'from-blue-500 to-blue-600'
                      : plan.color === 'purple'
                      ? 'from-purple-500 to-purple-600'
                      : plan.color === 'green'
                      ? 'from-green-500 to-green-600'
                      : 'from-indigo-500 to-indigo-600'
                  } flex items-center justify-center`}
                >
                  <plan.icon className="w-6 h-6 text-white" aria-hidden="true" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{plan.name}</h3>
                <p className="text-gray-600 mb-4 text-center text-sm">{plan.description}</p>

                <div className="mb-6 text-center">
                  {plan.isFree ? (
                    <div className="text-3xl font-bold text-green-600">
                      GRÁTIS
                    </div>
                  ) : (
                    <>
                      {isAnnual && discount > 0 && (
                        <div className="text-sm text-gray-500 line-through mb-1">
                          R$ {(plan.originalPrice / 12).toFixed(2)}
                        </div>
                      )}
                      <div className="text-3xl font-bold text-gray-900">
                        R$ {displayPrice.toFixed(2)}
                      </div>
                      <div className="text-gray-500 text-sm">
                        {isAnnual ? 'por mês (cobrado anualmente)' : 'por mês'}
                      </div>
                      {isAnnual && discount > 0 && (
                        <div className="text-green-600 text-sm font-medium mt-1">
                          Economize {discount}% no plano anual
                        </div>
                      )}
                    </>
                  )}
                </div>

                <button
                  onClick={() => onSelectPlan(plan)}
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 text-sm ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                      : plan.isFree
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                  aria-label={`Escolher plano ${plan.name}`}
                >
                  {plan.isFree ? 'Começar Grátis' : 'Escolher Plano'}
                </button>

                <ul className="mt-6 space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-700 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 text-sm">
            Todos os planos incluem suporte técnico e atualizações gratuitas
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;