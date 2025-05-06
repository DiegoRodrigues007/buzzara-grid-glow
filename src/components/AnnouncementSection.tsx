
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Eye, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

// Types for announcements
interface Announcement {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  location: string;
  category: string;
  postedDate: string;
  rating: number;
  reviews: number;
  views: number;
  tag?: {
    text: string;
    type: 'new' | 'hot' | 'sale';
  };
}

// Sample announcement data
const announcements: Announcement[] = [
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
  }
];

const getTagColor = (type: 'new' | 'hot' | 'sale') => {
  const colors = {
    new: 'bg-buzzara-tag-new',
    hot: 'bg-buzzara-tag-hot',
    sale: 'bg-buzzara-tag-sale'
  };
  return colors[type];
};

const AnnouncementCard: React.FC<{ announcement: Announcement }> = ({ announcement }) => {
  return (
    <Link to={`/profile/${announcement.id}`} className="block hover:no-underline">
      <Card className="h-full bg-buzzara-card border-none text-white hover:shadow-lg transition-shadow">
        <div className="relative">
          {announcement.tag && (
            <div className={`absolute top-2 right-2 py-1 px-3 text-xs font-semibold rounded-full text-white z-10 ${getTagColor(announcement.tag.type)}`}>
              {announcement.tag.text}
            </div>
          )}
          <img 
            src={announcement.image} 
            alt={announcement.title}
            className="w-full aspect-[4/3] object-cover"
          />
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold text-white">{announcement.title}</CardTitle>
        </CardHeader>
        <CardContent className="pb-2">
          <p className="text-sm text-gray-300 line-clamp-2 mb-2">{announcement.description}</p>
          
          <div className="flex items-center justify-between mt-2 mb-1">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-buzzara-secondary fill-buzzara-secondary" />
              <span className="text-sm text-white ml-1">{announcement.rating}</span>
              <span className="text-xs text-gray-400 ml-1">({announcement.reviews})</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Eye className="h-4 w-4 mr-1" />
              <span className="text-xs">{announcement.views}</span>
            </div>
          </div>
          
          <div className="text-xs text-gray-400 mb-1">
            <span>{announcement.location}</span>
          </div>
          
          <Badge className="bg-gray-700 text-xs font-normal">
            {announcement.category}
          </Badge>
        </CardContent>
        <CardFooter className="pt-0 flex justify-between items-center">
          <div className="flex items-center text-xs text-gray-400">
            <Clock className="h-3 w-3 mr-1" />
            <span>Publicado: {announcement.postedDate}</span>
          </div>
          <span className="text-lg font-bold text-buzzara-primary">R${announcement.price}</span>
        </CardFooter>
      </Card>
    </Link>
  );
};

const AnnouncementSection = () => {
  return (
    <section className="py-8 px-4 md:px-8">
      <div className="container mx-auto">
        <h2 className="featured-section-title text-white">Anúncios Recentes</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
          {announcements.map(announcement => (
            <AnnouncementCard key={announcement.id} announcement={announcement} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnnouncementSection;
