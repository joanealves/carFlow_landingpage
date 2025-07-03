'use client';
import React, { useState, useEffect } from 'react';
import { Car, Menu, X } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link 
            href="/" 
            className="flex items-center gap-3 hover:opacity-80 transition-opacity" 
            aria-label="CarFlow - Página inicial"
          >
            <div className="w-10 h-10 bg-indigo-700 rounded-lg flex items-center justify-center shadow-lg">
              <Car className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              CarFlow
            </span>
          </Link>

          <nav className="hidden md:flex space-x-8" role="navigation">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Recursos
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Preços
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Depoimentos
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/login"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-4 py-2 rounded-lg hover:bg-gray-50"
            >
              Entrar
            </Link>
            <Link
              href="/register"
              className="bg-indigo-700 text-white px-6 py-2 rounded-lg hover:from-blue-200 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Começar Grátis
            </Link>
          </div>

          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors" 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            <button 
              onClick={() => scrollToSection('features')}
              className="block w-full text-left py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg px-3 transition-colors"
            >
              Recursos
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg px-3 transition-colors"
            >
              Preços
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="block w-full text-left py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg px-3 transition-colors"
            >
              Depoimentos
            </button>
            <Link 
              href="/blog"
              className="block py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg px-3 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <div className="border-t pt-3 mt-3 space-y-2">
              <Link 
                href="/login"
                className="block w-full text-center py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Entrar
              </Link>
              <Link
                href="/register"
                className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 text-center rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Começar Grátis
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;