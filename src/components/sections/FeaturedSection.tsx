
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

interface FeaturedSectionProps {
  activeCategory: string | null;
}

const ads: IAd[] = [
  {
    id: '1',
    name: 'Ana Luiza',
    image: 'https://plus.unsplash.com/premium_photo-1676488643746-b7e4da5312c5?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.8,
    reviews: 42,
    views: 1205,
    price: { 
      current: 350,
      original: 450
    },
    tag: {
      text: 'HOT',
      type: 'hot'
    },
    category: 'Mulheres'
  },
  {
    id: '2',
    name: 'Bruno Silva',
    image: '',
    rating: 4.5,
    reviews: 28,
    views: 890,
    price: { 
      current: 300
    },
    tag: {
      text: 'NEW',
      type: 'new'
    },
    category: 'Homens'
  },
  {
    id: '3',
    name: 'Carla Mendes',
    image: '',
    rating: 4.9,
    reviews: 56,
    views: 1580,
    price: { 
      current: 280, 
      original: 350
    },
    tag: {
      text: 'SALE',
      type: 'sale'
    },
    category: 'Mulheres'
  },
  {
    id: '4',
    name: 'Diana Costa',
    image: '',
    rating: 4.7,
    reviews: 34,
    views: 950,
    price: { 
      current: 320
    },
    category: 'Trans'
  },
  {
    id: '9',
    name: 'Ricardo e Julia',
    image: '',
    rating: 4.8,
    reviews: 27,
    views: 1120,
    price: { 
      current: 550
    },
    category: 'Casais'
  }
];

const FeaturedSection: React.FC<FeaturedSectionProps> = ({ activeCategory }) => {
  // Filter ads based on active category
  const filteredAds = activeCategory 
    ? ads.filter(ad => ad.category === activeCategory)
    : ads;
    
  // If no ads match the filter, return null or empty component
  if (filteredAds.length === 0) {
    return null;
  }

  return (
    <section className="py-8 px-4 md:px-8 relative">
      <div className="container mx-auto">
        <h2 className="featured-section-title text-white">Em Destaques</h2>
        
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

export default FeaturedSection;
