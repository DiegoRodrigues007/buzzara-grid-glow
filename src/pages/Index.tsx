
import React from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import FeaturedSection from '@/components/FeaturedSection';
import AdGrid from '@/components/AdGrid';
import Footer from '@/components/Footer';
import PopularSection from '@/components/PopularSection';
import MostViewedSection from '@/components/MostViewedSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-buzzara-background">
      <Header />
      <Navigation />
      <main className="flex-1">
        <FeaturedSection />
        <PopularSection />
        <MostViewedSection />
        <AdGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
