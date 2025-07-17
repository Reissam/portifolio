import React from 'react';
import { Palette, Code, Zap, Users, Eye, Lightbulb } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Design Gráfico',
      skills: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'Figma'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Web Design',
      skills: ['HTML/CSS', 'Responsive Design', 'WordPress', 'Webflow'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'UI/UX Design',
      skills: ['Prototipagem', 'Wireframing', 'Pesquisa de Usuário', 'Testes de Usabilidade'],
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Branding',
      skills: ['Identidade Visual', 'Logotipos', 'Manual de Marca', 'Estratégia de Marca'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const tools = [
    { name: 'Adobe Creative Suite', level: 95 },
    { name: 'Figma', level: 90 },
    { name: 'Sketch', level: 85 },
    { name: 'HTML/CSS', level: 80 },
    { name: 'WordPress', level: 85 },
    { name: 'Webflow', level: 75 }
  ];

  const softSkills = [
    { icon: <Users className="w-6 h-6" />, title: 'Comunicação', description: 'Excelente comunicação com clientes e equipes' },
    { icon: <Zap className="w-6 h-6" />, title: 'Criatividade', description: 'Pensamento inovador e soluções criativas' },
    { icon: <Eye className="w-6 h-6" />, title: 'Atenção aos Detalhes', description: 'Precisão e cuidado em cada projeto' },
    { icon: <Lightbulb className="w-6 h-6" />, title: 'Resolução de Problemas', description: 'Capacidade de encontrar soluções eficientes' }
  ];

  return (
    <section id="habilidades" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Minhas <span className="text-purple-600">Habilidades</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Domínio em ferramentas e técnicas essenciais para criar designs excepcionais
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center text-white mb-4`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-gray-600 flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Ferramentas & Tecnologias</h3>
            {tools.map((tool, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">{tool.name}</span>
                  <span className="text-sm text-gray-500">{tool.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${tool.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Soft Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Habilidades Interpessoais</h3>
            {softSkills.map((skill, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-200">
                <div className="flex items-start gap-4">
                  <div className="text-purple-600 mt-1">
                    {skill.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">{skill.title}</h4>
                    <p className="text-gray-600">{skill.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;