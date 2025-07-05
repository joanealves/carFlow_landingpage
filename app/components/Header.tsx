'use client';
import React, { useState } from 'react';
import { Car, Menu, X } from 'lucide-react';

interface HeaderProps {
  onStartTrial: () => void;
}

const Header: React.FC<HeaderProps> = ({ onStartTrial }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
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
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg">
              <Car className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-blue-700">CarFlow</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Recursos
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Planos
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Depoimentos
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onStartTrial}
              className="bg-gradient-to-r from-blue-600 to-blue-900 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Começar Grátis
            </button>
          </div>

          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            <button onClick={() => scrollToSection('features')} className="block w-full text-left py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg px-3 transition-colors">
              Recursos
            </button>
            <button onClick={() => scrollToSection('pricing')} className="block w-full text-left py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg px-3 transition-colors">
              Planos
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg px-3 transition-colors">
              Depoimentos
            </button>
            <div className="border-t pt-3 mt-3">
              <button
                onClick={onStartTrial}
                className="block w-full bg-gradient-to-r from-blue-600 to-blue-900 text-white py-3 text-center rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-semibold"
              >
                Começar Grátis
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;