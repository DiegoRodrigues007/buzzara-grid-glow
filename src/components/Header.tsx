
import React, { useState } from 'react';
import { Search, MapPin, User } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [location, setLocation] = useState('São Paulo');

  return (
    <header className="w-full py-4 px-4 md:px-8 bg-buzzara-background border-b border-gray-800">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            <span className="text-buzzara-primary">BUZZ</span>
            <span className="text-white">ARA</span>
          </h1>
        </div>

        {/* Search and Location selector */}
        <div className="flex flex-1 max-w-xl w-full gap-2">
          <div className="relative flex-1">
            <Input 
              type="text" 
              placeholder="Buscar..." 
              className="w-full pl-10 bg-gray-800 border-gray-700 text-white"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          </div>
          <div className="flex bg-gray-800 rounded-md px-3 items-center cursor-pointer border border-gray-700">
            <MapPin className="h-4 w-4 text-gray-400 mr-1" />
            <span className="text-sm text-gray-200">{location}</span>
          </div>
        </div>

        {/* Login button */}
        <div>
          <Button variant="outline" className="border-buzzara-primary text-buzzara-primary hover:bg-buzzara-primary hover:text-white">
            <User className="h-4 w-4 mr-2" />
            Entrar
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
