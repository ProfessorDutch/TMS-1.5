import React from 'react';
import { Quote } from 'lucide-react';

interface ImpactStoryProps {
  image: string;
  name: string;
  quote: string;
  date?: string;
}

export default function ImpactStory({ image, name, quote, date }: ImpactStoryProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105">
      <div className="h-48 relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white text-xl font-bold mb-1">{name}</h3>
          {date && (
            <p className="text-amber-200 text-sm">{date}</p>
          )}
        </div>
      </div>
      <div className="p-6">
        <div className="flex gap-4">
          <Quote className="w-8 h-8 text-amber-600 flex-shrink-0" />
          <p className="text-gray-700 italic">
            {quote}
          </p>
        </div>
      </div>
    </div>
  );
}