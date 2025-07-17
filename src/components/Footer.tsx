import React from 'react';
import { Heart, Instagram, Linkedin, Dribbble, Bean as Behance } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Dribbble className="w-5 h-5" />, href: '#', label: 'Dribbble' },
    { icon: <Behance className="w-5 h-5" />, href: '#', label: 'Behance' }
  ];

  const quickLinks = [
    { name: 'Início', href: '#início' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Habilidades', href: '#habilidades' },
    { name: 'Contato', href: '#contato' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Dayane Reis
            </h3>
            <p className="text-gray-400 max-w-sm">
              Designer criativa especializada em transformar ideias em experiências visuais 
              memoráveis que conectam marcas ao seu público.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Serviços</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Identidade Visual</li>
              <li>Web Design</li>
              <li>Design Gráfico</li>
              <li>UI/UX Design</li>
              <li>Branding</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Dayane Reis. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Feito com <Heart className="w-4 h-4 text-red-500" /> por Dayane Reis
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;