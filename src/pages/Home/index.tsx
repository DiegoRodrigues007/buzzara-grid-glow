
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Navigation from '@/components/layout/Navigation';
import FeaturedSection from '@/components/sections/FeaturedSection';
import AdGrid from '@/components/sections/AdGrid';
import Footer from '@/components/layout/Footer';
import PopularSection from '@/components/sections/PopularSection';
import MostViewedSection from '@/components/sections/MostViewedSection';
import AnnouncementSection from '@/components/sections/AnnouncementSection';

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  // Handler for category changes from navigation
  const handleCategoryChange = (category: string | null) => {
    setActiveCategory(category);
  };

  return (
    <div className="min-h-screen flex flex-col bg-buzzara-background">
      <Header />
      <Navigation onCategoryChange={handleCategoryChange} activeCategory={activeCategory} />
      <main className="flex-1">
        <FeaturedSection activeCategory={activeCategory} />
        <AnnouncementSection activeCategory={activeCategory} />
        <PopularSection activeCategory={activeCategory} />
        <MostViewedSection activeCategory={activeCategory} />
        <AdGrid activeCategory={activeCategory} />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
