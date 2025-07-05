'use client';
import React, { useRef, useEffect } from 'react';
import { 
  Calendar, 
  BarChart3, 
  MessageSquare, 
  CreditCard, 
  Users, 
  Search,
  CheckCircle2,
  Zap,
  Star
} from 'lucide-react';

const features = [
  {
    icon: Calendar,
    title: 'Agendamento Inteligente Online',
    description: 'Sistema completo de agendamentos com confirmação automática, lembretes e integração WhatsApp',
    details: [
      'Interface intuitiva para clientes',
      'Confirmação automática via WhatsApp', 
      'Lembretes automáticos',
      'Reagendamento fácil'
    ],
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200'
  },
  {
    icon: BarChart3,
    title: 'Dashboard Analytics Avançado',
    description: 'Visualize métricas em tempo real: receita, pedidos, performance da equipe e tendências',
    details: [
      'Receita total e por período',
      'Status de todos os pedidos',
      'Performance da equipe',
      'Relatórios exportáveis'
    ],
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200'
  },
  {
    icon: Search,
    title: 'Rastreamento de Pedidos',
    description: 'Acompanhe status em tempo real: aguardando, em andamento, concluído ou cancelado',
    details: [
      'Status em tempo real',
      'Busca por código/cliente',
      'Histórico completo',
      'Notificações automáticas'
    ],
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200'
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp Automático',
    description: 'Automação completa: confirmações, lembretes, atualizações de status e pesquisas de satisfação',
    details: [
      'Mensagens personalizadas',
      'Envio automático por status',
      'Templates profissionais',
      'Histórico de conversas'
    ],
    color: 'from-green-400 to-green-500',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200'
  },
  {
    icon: CreditCard,
    title: 'Pagamentos Integrados',
    description: 'Aceite PIX e cartões diretamente no sistema com confirmação automática',
    details: [
      'PIX instantâneo',
      'Cartão de crédito/débito',
      'Confirmação automática',
      'Relatórios financeiros'
    ],
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200'
  },
  {
    icon: Users,
    title: 'Gestão Completa da Equipe',
    description: 'Controle funcionários, produtividade, agendamentos e performance individual',
    details: [
      'Controle de acesso',
      'Produtividade individual',
      'Agendamentos por funcionário',
      'Relatórios de performance'
    ],
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200'
  },
 
];

const Features = () => {
  const featuresRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = entry.target.querySelectorAll('.feature-card');
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('animate-slide-up');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" ref={featuresRef} className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-white px-6 py-3 rounded-full text-sm font-medium text-blue-700 mb-6 border border-blue-200 shadow-sm">
            <Zap className="w-4 h-4" />
            <span>Recursos desenvolvidos especificamente para lava-jatos</span>
            <Star className="w-4 h-4 fill-current" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Tudo que você precisa para 
            <span className="block bg-gradient-to-r from-blue-600  to-blue-800 bg-clip-text text-transparent mt-2">
              dominar o mercado
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Recursos poderosos baseados nas necessidades reais de mais de <strong> lava-jatos</strong>. 
            Cada funcionalidade foi pensada para <strong>maximizar sua eficiência e receita</strong>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <article 
              key={index} 
              className={`feature-card opacity-0 translate-y-8 p-8 ${feature.bgColor} rounded-2xl hover:shadow-2xl transition-all duration-500 group border-2 ${feature.borderColor} hover:border-opacity-50 hover:-translate-y-2`}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                {feature.description}
              </p>

              <ul className="space-y-3">
                {feature.details.map((detail, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="font-medium">{detail}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

      </div>

      <style jsx>{`
        .animate-slide-up {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

export default Features;