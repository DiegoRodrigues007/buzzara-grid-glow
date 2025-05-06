
import React from 'react';
import AdCard from './AdCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface PopularSectionProps {
  activeCategory: string | null;
}

// Sample data for popular ads
const popularAds = [
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
    id: '10',
    name: 'Miguel e Laura',
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
    rating: 4.7,
    reviews: 29,
    views: 980,
    price: { current: 500, original: 600 },
    tag: { text: 'HOT', type: 'hot' as const },
    category: 'Casais'
  }
];

const PopularSection: React.FC<PopularSectionProps> = ({ activeCategory }) => {
  // Filter ads based on active category
  const filteredAds = activeCategory 
    ? popularAds.filter(ad => ad.category === activeCategory)
    : popularAds;
  
  // If no ads match the filter, return null or empty component
  if (filteredAds.length === 0) {
    return null;
  }

  return (
    <section className="py-8 px-4 md:px-8 relative">
      <div className="container mx-auto">
        <h2 className="featured-section-title text-white">Mais Populares</h2>
        
        <div className="relative mt-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {filteredAds.map((ad) => (
                <CarouselItem key={ad.id} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <div className="p-1">
                    <AdCard {...ad} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 border-none" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 border-none" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PopularSection;
