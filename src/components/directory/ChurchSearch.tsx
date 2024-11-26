import React, { useState } from 'react';
import { Search } from 'lucide-react';
import PlacesAutocomplete from '../PlacesAutocomplete';

interface ChurchSearchProps {
  onSearch: (
    name: string,
    location: string,
    radius: number
  ) => void;
}

const radiusOptions = [
  { value: 5, label: '5 miles' },
  { value: 10, label: '10 miles' },
  { value: 25, label: '25 miles' },
  { value: 50, label: '50 miles' }
];

export default function ChurchSearch({ onSearch }: ChurchSearchProps) {
  const [churchName, setChurchName] = useState('');
  const [locationValue, setLocationValue] = useState('');
  const [radius, setRadius] = useState(10);

  const handleLocationSelect = (address: string) => {
    setLocationValue(address);
  };

  const handleSearch = () => {
    if (!locationValue) return;
    onSearch(churchName, locationValue, radius);
  };

  const canSearch = locationValue.trim() !== '';

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={churchName}
            onChange={(e) => setChurchName(e.target.value)}
            placeholder="Search by church name"
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
          />
        </div>

        <PlacesAutocomplete
          onSelect={(address) => handleLocationSelect(address)}
          placeholder="Enter location or ZIP code (required)"
        />
      </div>

      <div className="flex gap-4">
        <select
          value={radius}
          onChange={(e) => setRadius(Number(e.target.value))}
          className="w-full md:w-48 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
        >
          {radiusOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <button
          onClick={handleSearch}
          disabled={!canSearch}
          className={`flex-1 md:flex-none px-8 py-2 rounded-full font-semibold transition-colors ${
            canSearch 
              ? 'bg-patriot-red text-white hover:bg-patriot-crimson' 
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Search Churches
        </button>
      </div>

      <div className="text-center text-xs text-gray-500">
        Powered by Google
      </div>
    </div>
  );
}