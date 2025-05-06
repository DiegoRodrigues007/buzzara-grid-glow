
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 px-4 md:px-8 mt-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">BUZZARA</h3>
            <p className="text-gray-400 text-sm">
              A melhor plataforma de classificados para acompanhantes no Brasil. 
              Anuncie seus serviços ou encontre profissionais na sua região.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-buzzara-primary transition-colors">Anunciar</a></li>
              <li><a href="#" className="text-gray-400 hover:text-buzzara-primary transition-colors">Como Funciona</a></li>
              <li><a href="#" className="text-gray-400 hover:text-buzzara-primary transition-colors">Perguntas Frequentes</a></li>
              <li><a href="#" className="text-gray-400 hover:text-buzzara-primary transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Informações Legais</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-buzzara-primary transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="text-gray-400 hover:text-buzzara-primary transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Buzzara. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
