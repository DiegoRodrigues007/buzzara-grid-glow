
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [activeCategory, setActiveCategory] = useState('Mulheres');
  
  const categories = [
    { id: 'anuncie', name: 'Anuncie agora', highlight: true },
    { id: 'mulheres', name: 'Mulheres' },
    { id: 'homens', name: 'Homens' },
    { id: 'trans', name: 'Trans' },
    { id: 'casais', name: 'Casais' }
  ];

  return (
    <nav className="w-full bg-gray-800 py-3 px-4 md:px-8 sticky top-0 z-20">
      <div className="container mx-auto flex items-center overflow-x-auto">
        {categories.map((category) => (
          <a 
            key={category.id}
            href={`#${category.id}`}
            className={cn(
              "whitespace-nowrap px-4 py-1 mx-1 rounded-md font-medium text-sm transition-colors duration-200",
              category.highlight 
                ? "bg-buzzara-accent text-white hover:bg-red-600" 
                : activeCategory === category.name
                  ? "bg-gray-700 text-white"
                  : "text-gray-300 hover:text-white hover:bg-gray-700"
            )}
            onClick={(e) => {
              e.preventDefault();
              setActiveCategory(category.name);
            }}
          >
            {category.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
