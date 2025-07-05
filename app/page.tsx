'use client'

import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

const CheckoutModal = dynamic(() => import('./components/CheckoutModal'), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
        <p className="mt-2 text-gray-900">Carregando...</p>
      </div>
    </div>
  )
})

export interface Plan {
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

const CarFlowLanding = () => {
  const [showCheckout, setShowCheckout] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null)

  const handleSelectPlan = (plan: Plan) => {
    setSelectedPlan(plan)
    setShowCheckout(true)
  }

  const handleCloseCheckout = () => {
    setShowCheckout(false)
    setSelectedPlan(null)
  }

  const handleStartTrial = () => {
    const professionalPlan: Plan = {
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
      popular: true,
      color: 'green',
    }
    setSelectedPlan(professionalPlan)
    setShowCheckout(true)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onStartTrial={handleStartTrial} />
      
      <main className="overflow-x-hidden">
        <Hero onStartTrial={handleStartTrial} />

        <div className="w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1200 200"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            className="block w-full h-24 md:h-40 opacity-20"
          >
            <path
              d="M0,100 C300,200 900,0 1200,100 L1200,00 L0,0 Z"
              fill="#3B82F6"
            >
              <animate
                attributeName="d"
                dur="6s"
                repeatCount="indefinite"
                values="
                  M0,100 C300,200 900,0 1200,100 L1200,00 L0,0 Z;
                  M0,100 C200,0 1000,200 1200,100 L1200,00 L0,0 Z;
                  M0,100 C300,200 900,0 1200,100 L1200,00 L0,0 Z;
                "
              />
            </path>
          </svg>
        </div>

        <Features />
        
        <Pricing onSelectPlan={handleSelectPlan} />
        
        <Testimonials />
        
        <CTA onClick={handleStartTrial} />
        
        <Footer />
        
        {showCheckout && (
          <CheckoutModal
            plan={selectedPlan}
            onClose={handleCloseCheckout}
          />
        )}
      </main>
    </div>
  )
}

export default CarFlowLanding