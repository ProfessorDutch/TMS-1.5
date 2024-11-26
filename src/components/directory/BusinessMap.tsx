import React, { useEffect, useRef } from 'react';
import { Business } from '../../types/business';
import BusinessBadges from './BusinessBadges';
import { useGoogleMaps } from '../../hooks/useGoogleMaps';

interface BusinessMapProps {
  businesses: Business[];
  favorites: string[];
  onToggleFavorite: (businessId: string) => void;
}

const mapContainerStyle = {
  width: '100%',
  height: '600px'
};

const defaultCenter = {
  lat: 33.7490,
  lng: -84.3880
};

export default function BusinessMap({
  businesses,
  favorites,
  onToggleFavorite
}: BusinessMapProps) {
  const [selectedBusiness, setSelectedBusiness] = React.useState<Business | null>(null);
  const mapRef = useRef<google.maps.Map | null>(null);
  const { isLoaded } = useGoogleMaps();

  useEffect(() => {
    if (mapRef.current && businesses.length > 0) {
      const bounds = new google.maps.LatLngBounds();
      businesses.forEach(business => {
        if (business.address.coordinates) {
          bounds.extend(new google.maps.LatLng(
            business.address.coordinates.lat,
            business.address.coordinates.lng
          ));
        }
      });
      mapRef.current.fitBounds(bounds);
    }
  }, [businesses]);

  if (!isLoaded) {
    return (
      <div className="w-full h-[600px] bg-gray-100 flex items-center justify-center">
        <p className="text-patriot-blue">Loading map...</p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[600px] rounded-lg overflow-hidden shadow-lg">
      <div id="map" className="w-full h-full" ref={(node) => {
        if (node && !mapRef.current) {
          mapRef.current = new google.maps.Map(node, {
            center: defaultCenter,
            zoom: 12,
            styles: [
              {
                featureType: "all",
                elementType: "geometry",
                stylers: [{ color: "#f5f2e9" }]
              },
              {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#7a9bba" }]
              }
            ]
          });

          // Add markers for businesses
          businesses.forEach(business => {
            if (business.address.coordinates) {
              const marker = new google.maps.Marker({
                position: {
                  lat: business.address.coordinates.lat,
                  lng: business.address.coordinates.lng
                },
                map: mapRef.current,
                icon: {
                  path: google.maps.SymbolPath.CIRCLE,
                  fillColor: business.contributionTier ? '#A94442' : '#4A5568',
                  fillOpacity: 1,
                  strokeWeight: 0,
                  scale: 8
                }
              });

              marker.addListener('click', () => {
                setSelectedBusiness(business);
              });
            }
          });
        }
      }} />

      {selectedBusiness && (
        <div className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-lg max-w-sm">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-lg text-patriot-navy">{selectedBusiness.name}</h3>
            <button
              onClick={() => setSelectedBusiness(null)}
              className="text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </div>
          <BusinessBadges badges={selectedBusiness.badges} />
          <p className="text-sm text-patriot-blue my-2">{selectedBusiness.description}</p>
          <button
            onClick={() => onToggleFavorite(selectedBusiness.id)}
            className={`w-full px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              favorites.includes(selectedBusiness.id)
                ? 'bg-patriot-red text-white'
                : 'bg-patriot-cream text-patriot-navy hover:bg-patriot-navy hover:text-white'
            }`}
          >
            {favorites.includes(selectedBusiness.id) ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        </div>
      )}
    </div>
  );
}