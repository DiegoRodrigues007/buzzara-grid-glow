
import React from 'react';
import AdCard from '@/components/cards/AdCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { IAd } from '@/types';

interface PopularSectionProps {
  activeCategory: string | null;
}

// Sample data for popular ads
const popularAds: IAd[] = [
  {
    id: '6',
    name: 'Fernanda Lima',
    image: 'https://images.unsplash.com/photo-1746311460525-31a29b35f4c6?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 5.0,
    reviews: 48,
    views: 1870,
    price: { current: 400 },
    tag: { text: 'HOT', type: 'hot' },
    category: 'Mulheres'
  },
  {
    id: '5',
    name: 'Eduardo Nunes',
    image: 'https://plus.unsplash.com/premium_photo-1679064286417-538b9230b5ce?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.6,
    reviews: 22,
    views: 780,
    price: { current: 290, original: 340 },
    category: 'Homens'
  },
  {
    id: '3',
    name: 'Carla Mendes',
    image: 'https://images.unsplash.com/photo-1746182329975-6bf8c8643472?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.9,
    reviews: 56,
    views: 1580,
    price: { current: 280, original: 350 },
    tag: { text: 'SALE', type: 'sale' },
    category: 'Mulheres'
  },
  {
    id: '8',
    name: 'Helena Soares',
    image: 'https://images.unsplash.com/photo-1743275532243-ee04fdcd3899?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.5,
    reviews: 31,
    views: 1450,
    price: { current: 310, original: 380 },
    tag: { text: 'SALE', type: 'sale' },
    category: 'Trans'
  },
  {
    id: '10',
    name: 'Miguel e Laura',
    image: 'https://plus.unsplash.com/premium_photo-1719955772986-a9d426f1448b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.7,
    reviews: 29,
    views: 980,
    price: { current: 500, original: 600 },
    tag: { text: 'HOT', type: 'hot' },
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
