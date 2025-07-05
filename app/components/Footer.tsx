'use client';
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-bold text-xl mb-4">CarFlow</h3>
          <p>O sistema completo para lava-jatos que querem crescer.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Links úteis</h4>
          <ul className="space-y-2">
            <li><Link href="#features" className="hover:text-white">Recursos</Link></li>
            <li><Link href="#pricing" className="hover:text-white">Planos</Link></li>
            <li><Link href="#testimonials" className="hover:text-white">Depoimentos</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contato</h4>
          <p>Email: schemadesenvolvimentoweb@gmail.com</p>
          <p>Telefone: (31) 98520-1743</p>
          <p>Endereço: Belo Horizonte, MG - Brasil</p>
        </div>
      </div>

      <div className="text-center mt-12 text-sm text-gray-500">
        © {new Date().getFullYear()} CarFlow. Todos os direitos reservados. Desenvolvido por Schema Desenvolvimento Web.
      </div>
    </footer>
  );
};

export default Footer;