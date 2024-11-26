import React, { useState } from 'react';
import { Building2, MapPin, Heart } from 'lucide-react';
import BusinessSearch from '../components/directory/BusinessSearch';
import BusinessList from '../components/directory/BusinessList';
import BusinessMap from '../components/directory/BusinessMap';
import { useBusinessDirectory } from '../hooks/useBusinessDirectory';
import { Business } from '../types/business';

export default function BusinessDirectory() {
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');
  const [favorites, setFavorites] = useState<string[]>([]);
  const { 
    businesses,
    loading,
    error,
    searchBusinesses,
    currentLocation,
    searchRadius
  } = useBusinessDirectory();

  const toggleFavorite = (businessId: string) => {
    setFavorites(prev => 
      prev.includes(businessId)
        ? prev.filter(id => id !== businessId)
        : [...prev, businessId]
    );
  };

  const handleSearch = async (
    query: string,
    name: string,
    location: string,
    radius: number,
    filters: { donorsOnly: boolean; type?: string }
  ) => {
    await searchBusinesses(query, name, location, radius, filters);
  };

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen text-patriot-red">
        {error}
      </div>
    );
  }

  return (
    <main className="flex-1">
      <section className="py-6 bg-gradient-to-br from-patriot-cream to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Building2 className="w-12 h-12 text-patriot-red" />
            <div>
              <h1 className="text-4xl font-bold text-patriot-navy">Business Directory</h1>
              <p className="text-xl text-patriot-blue">Find faith-driven businesses in your area</p>
            </div>
          </div>
          
          <BusinessSearch onSearch={handleSearch} />
        </div>
      </section>

      <section className="py-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-4">
              <p className="text-patriot-blue">
                {loading ? 'Searching...' : `${businesses.length} businesses found`}
              </p>
              {currentLocation && (
                <p className="text-patriot-gray">
                  within {searchRadius} miles of your location
                </p>
              )}
            </div>
            
            <div className="flex gap-4">
              <button
                onClick={() => setViewMode(viewMode === 'list' ? 'map' : 'list')}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-patriot-cream text-patriot-navy hover:bg-patriot-navy hover:text-white transition-colors"
              >
                <MapPin className="w-5 h-5" />
                {viewMode === 'list' ? 'Show Map' : 'Show List'}
              </button>
              
              <button
                onClick={() => setViewMode('favorites')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  viewMode === 'favorites'
                    ? 'bg-patriot-red text-white'
                    : 'bg-patriot-cream text-patriot-navy hover:bg-patriot-navy hover:text-white'
                }`}
              >
                <Heart className="w-5 h-5" />
                Favorites ({favorites.length})
              </button>
            </div>
          </div>

          {viewMode === 'map' ? (
            <BusinessMap 
              businesses={businesses}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
            />
          ) : (
            <BusinessList
              businesses={viewMode === 'favorites' 
                ? businesses.filter(b => favorites.includes(b.id))
                : businesses
              }
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
              loading={loading}
            />
          )}
        </div>
      </section>
    </main>
  );
}