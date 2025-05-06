
import React from 'react';
import AdCard from './AdCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ads = [
  {
    id: '1',
    name: 'Ana Luiza',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
    rating: 4.8,
    reviews: 42,
    price: { 
      current: 350,
      original: 450
    },
    tag: {
      text: 'HOT',
      type: 'hot' as const
    }
  },
  {
    id: '2',
    name: 'Bruno Silva',
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
    rating: 4.5,
    reviews: 28,
    price: { 
      current: 300
    },
    tag: {
      text: 'NEW',
      type: 'new' as const
    }
  },
  {
    id: '3',
    name: 'Carla Mendes',
    image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1',
    rating: 4.9,
    reviews: 56,
    price: { 
      current: 280, 
      original: 350
    },
    tag: {
      text: 'SALE',
      type: 'sale' as const
    }
  },
  {
    id: '4',
    name: 'Diana Costa',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
    rating: 4.7,
    reviews: 34,
    price: { 
      current: 320
    }
  }
];

const FeaturedSection = () => {
  const scrollContainer = React.useRef<HTMLDivElement>(null);
  
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainer.current) {
      const { current } = scrollContainer;
      const scrollAmount = 300;
      const to = direction === 'left' 
        ? current.scrollLeft - scrollAmount 
        : current.scrollLeft + scrollAmount;
      
      current.scrollTo({
        left: to,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-8 px-4 md:px-8 relative">
      <div className="container mx-auto">
        <h2 className="featured-section-title text-white">Em Destaques</h2>
        
        <div className="relative mt-8">
          {/* Navigation arrows */}
          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 rounded-full p-2 text-white hover:bg-black/70 transition-all"
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 rounded-full p-2 text-white hover:bg-black/70 transition-all"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          
          {/* Scrollable container */}
          <div 
            ref={scrollContainer}
            className="flex overflow-x-auto pb-4 gap-4 scrollbar-none snap-x"
          >
            {ads.map((ad) => (
              <div key={ad.id} className="min-w-[250px] md:min-w-[280px] snap-start">
                <AdCard {...ad} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
