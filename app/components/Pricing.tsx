'use client';
import React, { useState } from 'react';
import { Car, BarChart3, Users, CheckCircle, } from 'lucide-react';


const plans = [
  {
    id: 'basic',
    name: 'Básico',
    description: 'Ideal para pequenos lava-jatos iniciantes',
    monthlyPrice: 49.9,
    annualPrice: 29.9,
    originalPrice: 49.9,
    features: [
      'Controle de pedidos básico',
      'Acompanhamento de status',
      'Dashboard simples',
      'Até 50 pedidos por mês',
      'Suporte por email',
    ],
    icon: Car,
    color: 'blue',
  },
  {
    id: 'professional',
    name: 'Profissional',
    description: 'Para lava-jatos em crescimento',
    monthlyPrice: 129.9,
    annualPrice: 79.9,
    originalPrice: 129.9,
    features: [
      'Tudo do plano Básico',
      'Dashboard avançado com relatórios',
      'WhatsApp automático',
      'Controle de funcionários',
      'Relatórios em PDF',
      'Pedidos ilimitados',
      'Agendamento online',
    ],
    icon: BarChart3,
    color: 'green',
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Empresarial',
    description: 'Para redes e grandes operações',
    monthlyPrice: 249.9,
    annualPrice: 149.9,
    originalPrice: 249.9,
    features: [
      'Tudo do plano Profissional',
      'Sistema de pagamentos (PIX/Cartão)',
      'Programa de fidelidade',
      'Agendamento online',
      'API para integrações',
      'Múltiplas unidades',
      'Suporte prioritário 24/7',
      'Treinamento personalizado',
    ],
    icon: Users,
    color: 'purple',
  },
];

interface PricingProps {
  onSelectPlan: (plan: typeof plans[0]) => void;
}

const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Planos que se adaptam ao seu negócio
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Escolha o plano ideal para o seu lava-jato
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
                -40%
              </span>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 transition-transform duration-200 ${
                plan.popular
                  ? 'border-blue-500 scale-105'
                  : 'border-gray-200 hover:scale-[1.02]'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    ⭐ Mais Popular
                  </span>
                </div>
              )}

              <div
                className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${
                  plan.color === 'blue'
                    ? 'from-blue-500 to-blue-600'
                    : plan.color === 'green'
                    ? 'from-green-500 to-green-600'
                    : 'from-purple-500 to-purple-600'
                } flex items-center justify-center`}
              >
                <plan.icon className="w-8 h-8 text-white" aria-hidden="true" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-6">{plan.description}</p>

              <div className="mb-6">
                {isAnnual && (
                  <div className="text-sm text-gray-500 line-through mb-1">
                    R$ {plan.originalPrice.toFixed(2)}
                  </div>
                )}
                <div className="text-4xl font-bold text-gray-900">
                  R$ {isAnnual ? plan.annualPrice.toFixed(2) : plan.monthlyPrice.toFixed(2)}
                </div>
                <div className="text-gray-500">por mês</div>
              </div>

              <button
                onClick={() => onSelectPlan(plan)}
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
                aria-label={`Escolher plano ${plan.name}`}
              >
                Escolher Plano
              </button>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
