
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Star, Eye } from 'lucide-react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

// Mock data for the profile - in a real app would come from API
const profilesData = {
  '1': {
    id: '1',
    name: 'Ana Luiza',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
    gallery: [
      'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
      'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1',
      'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952'
    ],
    rating: 4.8,
    reviews: 42,
    views: 1205,
    price: { current: 350, original: 450 },
    tag: { text: 'HOT', type: 'hot' as const },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
    location: 'São Paulo, Centro',
    services: ['Massagem', 'Acompanhante', 'Encontros'],
    category: 'Mulheres'
  },
  '2': {
    id: '2',
    name: 'Bruno Silva',
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
    gallery: [
      'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
      'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952'
    ],
    rating: 4.5,
    reviews: 28,
    views: 890,
    price: { current: 300 },
    tag: { text: 'NEW', type: 'new' as const },
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    location: 'São Paulo, Vila Madalena',
    services: ['Acompanhante', 'Encontros'],
    category: 'Homens'
  },
  '3': {
    id: '3',
    name: 'Carla Mendes',
    image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1',
    gallery: [
      'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1',
      'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9'
    ],
    rating: 4.9,
    reviews: 56,
    views: 1580,
    price: { current: 280, original: 350 },
    tag: { text: 'SALE', type: 'sale' as const },
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.',
    location: 'São Paulo, Moema',
    services: ['Massagem', 'Acompanhante', 'Encontros'],
    category: 'Mulheres'
  }
};

const ProfilePage = () => {
  const { id } = useParams<{ id: string }>();
  const profile = id ? profilesData[id as keyof typeof profilesData] : null;

  if (!profile) {
    return (
      <div className="min-h-screen flex flex-col bg-buzzara-background">
        <Header />
        <Navigation />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white">Perfil não encontrado</h1>
            <Link 
              to="/" 
              className="mt-4 inline-flex items-center text-buzzara-primary hover:underline"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Voltar para a página inicial
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const getTagColor = (type: 'new' | 'hot' | 'sale') => {
    const colors = {
      new: 'bg-buzzara-tag-new',
      hot: 'bg-buzzara-tag-hot',
      sale: 'bg-buzzara-tag-sale'
    };
    return colors[type];
  };

  return (
    <div className="min-h-screen flex flex-col bg-buzzara-background">
      <Header />
      <Navigation />
      <main className="flex-1 py-8 px-4 md:px-8">
        <div className="container mx-auto">
          {/* Back button */}
          <Link 
            to="/" 
            className="inline-flex items-center text-buzzara-primary hover:underline mb-6"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Voltar para a página inicial
          </Link>

          <div className="bg-buzzara-card rounded-lg overflow-hidden shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Left column - Images */}
              <div className="md:col-span-1">
                <div className="relative mb-4">
                  {profile.tag && (
                    <div className={`absolute top-2 right-2 py-1 px-3 text-xs font-semibold rounded-full text-white z-10 ${getTagColor(profile.tag.type)}`}>
                      {profile.tag.text}
                    </div>
                  )}
                  <img 
                    src={profile.image} 
                    alt={profile.name} 
                    className="w-full h-auto rounded-lg"
                  />
                </div>

                {/* Gallery */}
                <div className="grid grid-cols-3 gap-2">
                  {profile.gallery.map((image, index) => (
                    <div key={index} className="aspect-square overflow-hidden rounded-lg">
                      <img 
                        src={image} 
                        alt={`${profile.name} gallery ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Right column - Details */}
              <div className="md:col-span-2">
                <div className="flex items-center justify-between mb-4">
                  <h1 className="text-3xl font-bold text-white">{profile.name}</h1>
                  {profile.price && (
                    <div className="flex items-center">
                      <span className="text-2xl font-bold text-buzzara-primary">
                        R${profile.price.current}
                      </span>
                      
                      {profile.price.original && (
                        <span className="ml-2 text-sm text-gray-400 line-through">
                          R${profile.price.original}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Rating and Stats */}
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={i < Math.floor(profile.rating) ? "text-buzzara-secondary fill-buzzara-secondary h-4 w-4" : "text-gray-400 h-4 w-4"}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-white ml-2">{profile.rating} ({profile.reviews} avaliações)</span>
                  </div>
                  
                  <div className="flex items-center text-gray-300">
                    <Eye className="h-4 w-4 mr-1" />
                    <span className="text-sm">{profile.views} visualizações</span>
                  </div>
                  
                  <Badge className="bg-gray-700 text-gray-200">
                    {profile.category}
                  </Badge>
                </div>

                {/* Location */}
                <div className="mb-6">
                  <h2 className="text-lg font-semibold text-white mb-2">Localização</h2>
                  <p className="text-gray-300">{profile.location}</p>
                </div>

                {/* Services */}
                <div className="mb-6">
                  <h2 className="text-lg font-semibold text-white mb-2">Serviços</h2>
                  <div className="flex flex-wrap gap-2">
                    {profile.services.map((service, index) => (
                      <Badge key={index} className="bg-buzzara-neutral text-white">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h2 className="text-lg font-semibold text-white mb-2">Descrição</h2>
                  <p className="text-gray-300">{profile.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProfilePage;
