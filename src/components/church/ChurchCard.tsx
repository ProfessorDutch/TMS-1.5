import React from 'react';
import { MapPin, Users, Heart } from 'lucide-react';
import { Church } from '../../types/church';

interface ChurchCardProps {
  church: Church;
  onClaim: (churchId: string) => void;
}

export default function ChurchCard({ church, onClaim }: ChurchCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
      <h3 className="text-xl font-bold text-patriot-navy mb-3">{church.name}</h3>
      <div className="flex items-start gap-2 text-patriot-blue mb-3">
        <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
        <div>
          <p>{church.address}</p>
          {church.distance && (
            <p className="text-sm text-patriot-gray">
              {church.distance.toFixed(1)} miles away
            </p>
          )}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-patriot-blue">
          <Users className="w-5 h-5" />
          <span>{church.members} members</span>
        </div>
        <button
          onClick={() => onClaim(church.id)}
          className="px-4 py-2 bg-patriot-red text-white rounded-full hover:bg-patriot-crimson transition-colors flex items-center gap-2"
        >
          <Heart className="w-4 h-4" />
          Claim as My Church
        </button>
      </div>
    </div>
  );
}