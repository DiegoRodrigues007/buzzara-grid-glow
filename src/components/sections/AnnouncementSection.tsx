
import React from 'react';
import AnnouncementCard from '@/components/cards/AnnouncementCard';
import { IAnnouncement } from '@/types';

interface AnnouncementSectionProps {
  activeCategory: string | null;
}

// Sample announcement data
const announcements: IAnnouncement[] = [
  {
    id: '101',
    title: 'Acompanhante Premium',
    description: 'Serviços exclusivos de acompanhante para eventos sociais e privados.',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
    price: 450,
    location: 'São Paulo, Centro',
    category: 'Mulheres',
    postedDate: '2023-05-01',
    rating: 4.9,
    reviews: 37,
    views: 1250,
    tag: { text: 'HOT', type: 'hot' }
  },
  {
    id: '102',
    title: 'Massagista Profissional',
    description: 'Massagem relaxante e terapêutica com técnicas exclusivas.',
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
    price: 320,
    location: 'Rio de Janeiro, Copacabana',
    category: 'Homens',
    postedDate: '2023-05-03',
    rating: 4.7,
    reviews: 28,
    views: 980,
    tag: { text: 'NEW', type: 'new' }
  },
  {
    id: '103',
    title: 'Encontros Especiais',
    description: 'Momentos inesquecíveis com acompanhante de alto nível.',
    image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1',
    price: 380,
    location: 'São Paulo, Moema',
    category: 'Trans',
    postedDate: '2023-04-25',
    rating: 4.8,
    reviews: 45,
    views: 1560,
    tag: { text: 'SALE', type: 'sale' }
  },
  {
    id: '104',
    title: 'Companhia para Eventos',
    description: 'Acompanhante sofisticada para eventos sociais, jantares e viagens.',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
    price: 500,
    location: 'Brasília, Asa Sul',
    category: 'Mulheres',
    postedDate: '2023-05-02',
    rating: 5.0,
    reviews: 22,
    views: 890,
  },
  {
    id: '105',
    title: 'Casal Experiente',
    description: 'Casal oferece momentos inesquecíveis para casais e solteiros.',
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
    price: 600,
    location: 'São Paulo, Pinheiros',
    category: 'Casais',
    postedDate: '2023-05-05',
    rating: 4.9,
    reviews: 18,
    views: 760,
    tag: { text: 'NEW', type: 'new' }
  }
];

const AnnouncementSection: React.FC<AnnouncementSectionProps> = ({ activeCategory }) => {
  // Filter announcements based on active category
  const filteredAnnouncements = activeCategory 
    ? announcements.filter(announcement => announcement.category === activeCategory)
    : announcements;

  // If no announcements match the filter, return null or empty component
  if (filteredAnnouncements.length === 0) {
    return null;
  }

  return (
    <section className="py-8 px-4 md:px-8">
      <div className="container mx-auto">
        <h2 className="featured-section-title text-white">Anúncios Recentes</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
          {filteredAnnouncements.map(announcement => (
            <AnnouncementCard key={announcement.id} announcement={announcement} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnnouncementSection;
