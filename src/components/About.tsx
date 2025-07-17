import React from 'react';
import { Award, Coffee, Heart, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Award className="w-8 h-8" />, number: '50+', label: 'Projetos Concluídos' },
    { icon: <Coffee className="w-8 h-8" />, number: '3', label: 'Anos de Experiência' },
    { icon: <Heart className="w-8 h-8" />, number: '100%', label: 'Satisfação do Cliente' },
    { icon: <Zap className="w-8 h-8" />, number: '24h', label: 'Tempo de Resposta' }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Sobre <span className="text-purple-600">Mim</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sou uma designer apaixonada por criar experiências visuais que fazem a diferença
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Com mais de 3 anos de experiência em design, dedico-me a criar soluções visuais 
              que não apenas impressionam, mas também geram resultados reais para negócios e marcas.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Minha abordagem combina criatividade com estratégia, sempre buscando entender 
              profundamente as necessidades do cliente e do público-alvo para criar designs 
              que realmente conectam e convertem.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Especializo-me em identidade visual, design gráfico, interfaces digitais e 
              materiais de marketing que elevam marcas e criam experiências memoráveis.
            </p>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Minha Jornada</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-purple-600 rounded-full mt-2"></div>
                    <div>
                      <p className="font-semibold text-gray-800">2021 - Início da Carreira</p>
                      <p className="text-gray-600">Primeiros passos no design gráfico</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-pink-600 rounded-full mt-2"></div>
                    <div>
                      <p className="font-semibold text-gray-800">2022 - Especialização</p>
                      <p className="text-gray-600">Foco em branding e identidade visual</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <p className="font-semibold text-gray-800">2023 - Expansão</p>
                      <p className="text-gray-600">Inclusão de UI/UX Design</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-purple-600 rounded-full mt-2"></div>
                    <div>
                      <p className="font-semibold text-gray-800">2024 - Freelancer</p>
                      <p className="text-gray-600">Carreira independente consolidada</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl hover:shadow-lg transition-shadow duration-200">
              <div className="text-purple-600 mb-4 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;