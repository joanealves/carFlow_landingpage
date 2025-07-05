'use client';
import React, { useState } from 'react';
import { X, CreditCard, Smartphone, CheckCircle, ArrowRight, Shield } from 'lucide-react';

interface Plan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  originalPrice: number;
  features: string[];
  popular?: boolean;
  color: string;
}

interface CheckoutModalProps {
  plan: Plan | null;
  onClose: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ plan, onClose }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    paymentMethod: 'pix'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!plan) return null;

  const currentPrice = billingCycle === 'annual' ? plan.annualPrice : plan.monthlyPrice;
  const originalPrice = billingCycle === 'annual' ? plan.originalPrice : plan.monthlyPrice;
  const discount = billingCycle === 'annual' ? Math.round((1 - plan.annualPrice / plan.originalPrice) * 100) : 0;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.businessName) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    setIsSubmitting(true);

    // Simular processamento
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Gerar mensagem para WhatsApp
    const message = `🚀 *Novo Pedido CarFlow*
    
👤 *Cliente:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Telefone:* ${formData.phone}
🏢 *Empresa:* ${formData.businessName}

📋 *Plano:* ${plan.name}
💰 *Valor:* R$ ${currentPrice.toFixed(2)}/${billingCycle === 'annual' ? 'mês (anual)' : 'mês'}
${discount > 0 ? `💸 *Desconto:* ${discount}% OFF` : ''}

💳 *Forma de Pagamento:* ${formData.paymentMethod === 'pix' ? 'PIX' : 'Cartão de Crédito'}

---
Cliente interessado em contratar o CarFlow!`;

    const whatsappUrl = `https://wa.me/5531985207143?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    
    setIsSubmitting(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 rounded-t-2xl flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Finalizar Pedido</h2>
            <p className="text-gray-600">Plano {plan.name}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} className="text-gray-500" />
          </button>
        </div>

        <div className="p-6">
          {/* Resumo do Plano */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-6 border border-blue-200">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
                <p className="text-gray-600">{plan.description}</p>
              </div>
              {plan.popular && (
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  ⭐ Popular
                </span>
              )}
            </div>

            {/* Seletor de Período */}
            <div className="flex items-center gap-4 mb-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="billing"
                  value="monthly"
                  checked={billingCycle === 'monthly'}
                  onChange={() => setBillingCycle('monthly')}
                  className="w-4 h-4 text-blue-600"
                />
                <span className="text-gray-700">Mensal - R$ {plan.monthlyPrice.toFixed(2)}</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="billing"
                  value="annual"
                  checked={billingCycle === 'annual'}
                  onChange={() => setBillingCycle('annual')}
                  className="w-4 h-4 text-blue-600"
                />
                <span className="text-gray-700">Anual - R$ {plan.annualPrice.toFixed(2)}</span>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                  -{discount}% OFF
                </span>
              </label>
            </div>

            {/* Preço */}
            <div className="flex items-center gap-4">
              {discount > 0 && (
                <span className="text-gray-500 line-through text-lg">
                  R$ {originalPrice.toFixed(2)}
                </span>
              )}
              <span className="text-3xl font-bold text-gray-900">
                R$ {currentPrice.toFixed(2)}
              </span>
              <span className="text-gray-600">por mês</span>
            </div>
          </div>

          {/* Formulário */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="(31) 99999-9999"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome do Lava-Jato *
                </label>
                <input
                  type="text"
                  name="businessName"
                  required
                  value={formData.businessName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Nome da sua empresa"
                />
              </div>
            </div>

            {/* Forma de Pagamento */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Forma de Pagamento Preferida
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="pix"
                    checked={formData.paymentMethod === 'pix'}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-600 mr-3"
                  />
                  <Smartphone className="w-5 h-5 text-green-600 mr-3" />
                  <div>
                    <div className="font-medium">PIX</div>
                    <div className="text-sm text-gray-600">Pagamento instantâneo</div>
                  </div>
                </label>

                <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={formData.paymentMethod === 'card'}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-600 mr-3"
                  />
                  <CreditCard className="w-5 h-5 text-blue-600 mr-3" />
                  <div>
                    <div className="font-medium">Cartão</div>
                    <div className="text-sm text-gray-600">Crédito ou débito</div>
                  </div>
                </label>
              </div>
            </div>

            {/* Benefícios */}
            <div className="bg-gray-50 rounded-xl p-4">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                Incluso no seu plano:
              </h4>
              <ul className="space-y-2">
                {plan.features.slice(0, 4).map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Garantia */}
            <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
              <Shield className="w-6 h-6 text-blue-600" />
              <div>
                <div className="font-medium text-blue-900">Teste Grátis por 7 dias</div>
                <div className="text-sm text-blue-700">Sem compromisso, cancele a qualquer momento</div>
              </div>
            </div>

            {/* Botão de Envio */}
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Processando...
                </>
              ) : (
                <>
                  Finalizar via WhatsApp
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>

            <p className="text-center text-sm text-gray-600">
              Ao continuar, você será redirecionado para nosso WhatsApp para finalizar o pedido
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;