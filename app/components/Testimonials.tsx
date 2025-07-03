'use client';
import React from 'react';
import { User } from 'lucide-react';

const testimonials = [
  {
    name: 'Maria Silva',
    company: 'Lava Rápido MG',
    photo: '',
    text: 'O CarFlow revolucionou meu negócio! Agora tenho controle total e meus clientes adoram o agendamento online.',
  },
  {
    name: 'Carlos Pereira',
    company: 'LavaJato Express',
    photo: '',
    text: 'O sistema é muito intuitivo e o suporte é excelente. Recomendo para qualquer lava-jato que queira crescer!',
  },
  {
    name: 'Ana Costa',
    company: 'Lava Clean',
    photo: '',
    text: 'A automação via WhatsApp facilitou demais o atendimento. Estou muito satisfeito com o CarFlow.',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          O que nossos clientes dizem
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow"
            >
              <p className="text-gray-700 mb-6">"{t.text}"</p>
              <div className="flex items-center gap-4">
                {t.photo ? (
                  <img
                    src={t.photo}
                    alt={`${t.name} photo`}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    <User className="w-6 h-6" />
                  </div>
                )}
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-gray-600 text-sm">{t.company}</p>
                </div>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
