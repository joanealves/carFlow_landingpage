'use client';
import React from 'react';
import { X } from 'lucide-react';

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
  if (!plan) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-modal-title"
    >
      <div className="bg-white text-gray-900 rounded-xl w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          aria-label="Fechar modal"
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          <X size={24} />
        </button>

        <h2 id="checkout-modal-title" className="text-2xl font-bold mb-4">
          Escolha seu plano: {plan.name}
        </h2>

        <p className="mb-6">{plan.description}</p>

        <div className="mb-6">
          <p className="text-lg">
            <strong>Preço mensal:</strong> R$ {plan.monthlyPrice.toFixed(2)}
          </p>
          <p className="text-lg">
            <strong>Preço anual:</strong> R$ {plan.annualPrice.toFixed(2)} (40% OFF)
          </p>
        </div>


        <button
          onClick={() => alert(`Você selecionou o plano ${plan.name}. Implementar checkout.`)}
          className={`w-full py-3 rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition`}
        >
          Finalizar Compra
        </button>
      </div>
    </div>
  );
};

export default CheckoutModal;
