import React from 'react';
import { MapPin, Phone, Globe, Clock } from 'lucide-react';
import { Business } from '../../types/business';
import BusinessBadges from './BusinessBadges';

interface BusinessCardProps {
  business: Business;
  isFavorite?: boolean;
  onToggleFavorite?: (businessId: string) => void;
}

export default function BusinessCard({ 
  business,
  isFavorite,
  onToggleFavorite 
}: BusinessCardProps) {
  const today = new Date().getDay();
  const todayHours = business.hours?.[today];

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative h-48">
        <img
          src={business.logo}
          alt={business.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2">
          <BusinessBadges badges={business.badges} />
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-bold text-patriot-navy mb-2">{business.name}</h3>
        <p className="text-sm text-patriot-gray mb-4">{business.description}</p>
        
        <div className="space-y-2">
          {business.address && (
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-patriot-red flex-shrink-0 mt-1" />
              <div className="text-sm text-patriot-blue">
                <p>{business.address.street}</p>
                <p>{business.address.city}, {business.address.state} {business.address.zip}</p>
              </div>
            </div>
          )}
          
          {business.contact?.phone && (
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-patriot-red" />
              <a 
                href={`tel:${business.contact.phone}`}
                className="text-sm text-patriot-blue hover:text-patriot-red transition-colors"
              >
                {business.contact.phone}
              </a>
            </div>
          )}
          
          {business.contact?.website && (
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-patriot-red" />
              <a 
                href={business.contact.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-patriot-blue hover:text-patriot-red transition-colors"
              >
                Visit Website
              </a>
            </div>
          )}
          
          {todayHours && (
            <div className="flex items-start gap-2">
              <Clock className="w-4 h-4 text-patriot-red flex-shrink-0 mt-1" />
              <div className="text-sm text-patriot-blue">
                {todayHours.closed ? (
                  <p>Closed Today</p>
                ) : (
                  <p>Open Today: {todayHours.open} - {todayHours.close}</p>
                )}
              </div>
            </div>
          )}
        </div>

        {onToggleFavorite && (
          <button
            onClick={() => onToggleFavorite(business.id)}
            className={`w-full mt-4 py-2 px-4 rounded-full text-sm font-medium transition-colors ${
              isFavorite
                ? 'bg-patriot-red text-white'
                : 'bg-patriot-cream text-patriot-navy hover:bg-patriot-navy hover:text-white'
            }`}
          >
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        )}
      </div>
    </div>
  );
}