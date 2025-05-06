
import React, { useState, useEffect } from 'react';
import AdCard from './AdCard';

interface AdGridProps {
  activeCategory: string | null;
}

// Sample data - in a real app this would come from an API
const allAds = [
  {
    id: '1',
    name: 'Ana Luiza',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
    rating: 4.8,
    reviews: 42,
    views: 1205,
    price: { current: 350, original: 450 },
    tag: { text: 'HOT', type: 'hot' as const },
    category: 'Mulheres'
  },
  {
    id: '2',
    name: 'Bruno Silva',
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
    rating: 4.5,
    reviews: 28,
    views: 890,
    price: { current: 300 },
    tag: { text: 'NEW', type: 'new' as const },
    category: 'Homens'
  },
  {
    id: '3',
    name: 'Carla Mendes',
    image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1',
    rating: 4.9,
    reviews: 56,
    views: 1580,
    price: { current: 280, original: 350 },
    tag: { text: 'SALE', type: 'sale' as const },
    category: 'Mulheres'
  },
  {
    id: '4',
    name: 'Diana Costa',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
    rating: 4.7,
    reviews: 34,
    views: 950,
    price: { current: 320 },
    category: 'Mulheres'
  },
  {
    id: '5',
    name: 'Eduardo Nunes',
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
    rating: 4.6,
    reviews: 22,
    views: 780,
    price: { current: 290, original: 340 },
    category: 'Homens'
  },
  {
    id: '6',
    name: 'Fernanda Lima',
    image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1',
    rating: 5.0,
    reviews: 48,
    views: 1870,
    price: { current: 400 },
    tag: { text: 'HOT', type: 'hot' as const },
    category: 'Mulheres'
  },
  {
    id: '7',
    name: 'Gabriel Santos',
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
    rating: 4.3,
    reviews: 19,
    views: 620,
    price: { current: 260 },
    category: 'Homens'
  },
  {
    id: '8',
    name: 'Helena Soares',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
    rating: 4.5,
    reviews: 31,
    views: 1450,
    price: { current: 310, original: 380 },
    tag: { text: 'SALE', type: 'sale' as const },
    category: 'Trans'
  },
  {
    id: '13',
    name: 'Rafael e Amanda',
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
    rating: 4.6,
    reviews: 25,
    views: 950,
    price: { current: 570 },
    tag: { text: 'NEW', type: 'new' as const },
    category: 'Casais'
  }
];

const AdGrid: React.FC<AdGridProps> = ({ activeCategory }) => {
  const [localCategory, setLocalCategory] = useState<string | null>(null);
  
  // Sync the local state with the prop from parent
  useEffect(() => {
    setLocalCategory(activeCategory);
  }, [activeCategory]);
  
  // Filter ads based on active category
  const filteredAds = localCategory 
    ? allAds.filter(ad => ad.category === localCategory)
    : allAds;
    
  // Categories for filtering
  const categories = ['Mulheres', 'Homens', 'Trans', 'Casais'];

  return (
    <section className="py-8 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="mb-6 flex flex-wrap gap-2">
          <button
            onClick={() => setLocalCategory(null)}
            className={`px-4 py-1 rounded-full text-sm font-medium transition-colors
                      ${!localCategory ? 'bg-buzzara-primary text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
          >
            Todos
          </button>
          
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setLocalCategory(category)}
              className={`px-4 py-1 rounded-full text-sm font-medium transition-colors
                        ${localCategory === category ? 'bg-buzzara-primary text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredAds.map(ad => (
            <AdCard key={ad.id} {...ad} />
          ))}
        </div>
        
        {filteredAds.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-gray-400">Nenhum anúncio encontrado nesta categoria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AdGrid;
