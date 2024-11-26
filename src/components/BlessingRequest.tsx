import React from 'react';
import { BookOpen, Users, Calendar } from 'lucide-react';

interface BlessingRequestProps {
  id: string;
  name: string | null;
  story: string;
  startDate: string;
  endDate: string;
  goal: number;
  amountRaised: number;
  imageUrl: string;
  supporters: number;
  isAnonymous: boolean;
  onSupport?: () => void;
}

export default function BlessingRequest({
  id,
  name,
  story,
  startDate,
  endDate,
  goal = 0,
  amountRaised = 0,
  imageUrl,
  supporters = 0,
  isAnonymous,
  onSupport
}: BlessingRequestProps) {
  const progress = goal > 0 ? Math.min((amountRaised / goal) * 100, 100) : 0;
  const displayName = isAnonymous ? 'Anonymous Youth' : (name || 'Anonymous Youth');
  const formattedStartDate = new Date(startDate).toLocaleDateString();
  const formattedEndDate = new Date(endDate).toLocaleDateString();

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
      <div className="relative h-64">
        <img
          src={imageUrl}
          alt={displayName}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <h3 className="text-white text-xl font-bold">{displayName}</h3>
          <div className="flex items-center gap-2 text-patriot-cream">
            <Calendar className="w-4 h-4" />
            <p>{formattedStartDate} - {formattedEndDate}</p>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <BookOpen className="w-5 h-5 text-patriot-red flex-shrink-0 mt-1" />
          <p className="text-patriot-blue">{story}</p>
        </div>
        
        <div className="mb-6">
          <div className="flex justify-between text-sm text-patriot-blue mb-2">
            <span>${amountRaised.toLocaleString()}</span>
            <span>of ${goal.toLocaleString()}</span>
          </div>
          <div className="h-2 bg-patriot-cream rounded-full">
            <div 
              className="h-full bg-patriot-red rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-patriot-blue">
            <Users className="w-5 h-5" />
            <span>{supporters} Mentors Supporting</span>
          </div>
          <button 
            onClick={onSupport}
            className="bg-patriot-red text-white px-6 py-2 rounded-full hover:bg-patriot-crimson transition-colors"
          >
            Support Growth
          </button>
        </div>
      </div>
    </div>
  );
}