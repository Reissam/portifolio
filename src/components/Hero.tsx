import React from 'react';
import { ChevronDown, Download, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="início" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold">
                <span className="text-gray-800">Olá, eu sou</span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Dayane Reis
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-light">
                Designer Criativa & Estratégica
              </p>
              <p className="text-lg text-gray-500 max-w-lg">
                Transformo ideias em experiências visuais memoráveis. Especialista em design gráfico, 
                branding e interfaces digitais que conectam marcas ao seu público.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('portfolio')}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
              >
                Ver Meu Trabalho
              </button>
              <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full font-medium hover:bg-purple-600 hover:text-white transition-all duration-200 flex items-center justify-center gap-2">
                <Download size={20} />
                Download CV
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="w-80 h-80 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl opacity-20"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full flex items-center justify-center">
                  <span className="text-4xl font-bold text-purple-600">DR</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('sobre')}
            className="p-2 rounded-full bg-white/80 shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <ChevronDown size={24} className="text-purple-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;