import React, { useState } from 'react';
import { Search } from 'lucide-react';
import PlacesAutocomplete from '../PlacesAutocomplete';

interface BusinessSearchProps {
  onSearch: (
    query: string,
    name: string,
    location: string,
    radius: number,
    filters: { donorsOnly: boolean; type?: string }
  ) => void;
}

const radiusOptions = [
  { value: 5, label: '5 miles' },
  { value: 10, label: '10 miles' },
  { value: 25, label: '25 miles' },
  { value: 50, label: '50 miles' }
];

export default function BusinessSearch({ onSearch }: BusinessSearchProps) {
  const [businessName, setBusinessName] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [locationValue, setLocationValue] = useState('');
  const [radius, setRadius] = useState(10);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    donorsOnly: false,
    type: ''
  });

  const handleLocationSelect = (address: string) => {
    setLocationValue(address);
  };

  const handleSearch = () => {
    if (!locationValue) return;
    onSearch(businessType, businessName, locationValue, radius, filters);
  };

  const canSearch = locationValue.trim() !== '';

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            placeholder="Search by business name"
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
          />
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
            placeholder="Search by business type (e.g., plumber)"
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <PlacesAutocomplete
          onSelect={(address) => handleLocationSelect(address)}
          placeholder="Enter location or ZIP code (required)"
        />

        <select
          value={radius}
          onChange={(e) => setRadius(Number(e.target.value))}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
        >
          {radiusOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {showFilters && (
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={filters.donorsOnly}
                onChange={(e) => setFilters(prev => ({ ...prev, donorsOnly: e.target.checked }))}
                className="rounded border-gray-300 text-patriot-red focus:ring-patriot-red"
              />
              <span className="text-patriot-navy">Show Mustard Seed contributors only</span>
            </label>
          </div>
        </div>
      )}

      <div className="flex justify-end gap-4">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="px-4 py-2 rounded-lg bg-patriot-cream text-patriot-navy hover:bg-patriot-navy hover:text-white transition-colors"
        >
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>

        <button
          onClick={handleSearch}
          disabled={!canSearch}
          className={`px-8 py-2 rounded-full font-semibold transition-colors ${
            canSearch 
              ? 'bg-patriot-red text-white hover:bg-patriot-crimson' 
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Search Businesses
        </button>
      </div>

      <div className="text-center text-xs text-gray-500">
        Powered by Google
      </div>
    </div>
  );
}