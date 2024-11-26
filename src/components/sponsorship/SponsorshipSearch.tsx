import React, { useState } from 'react';
import { Search, Filter, MapPin } from 'lucide-react';

interface SearchFilters {
  location: string;
  minAmount: string;
  maxAmount: string;
  tripType: string;
}

export default function SponsorshipSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<SearchFilters>({
    location: '',
    minAmount: '',
    maxAmount: '',
    tripType: '',
  });

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center gap-4 mb-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by name, location, or purpose..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
          />
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
        >
          <Filter className="w-5 h-5" />
          Filters
        </button>
      </div>

      {showFilters && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <MapPin className="w-4 h-4 inline-block mr-2" />
              Location
            </label>
            <input
              type="text"
              value={filters.location}
              onChange={(e) => setFilters({ ...filters, location: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
              placeholder="Any location"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Min Amount</label>
            <input
              type="number"
              value={filters.minAmount}
              onChange={(e) => setFilters({ ...filters, minAmount: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
              placeholder="$0"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Max Amount</label>
            <input
              type="number"
              value={filters.maxAmount}
              onChange={(e) => setFilters({ ...filters, maxAmount: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
              placeholder="Any amount"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Trip Type</label>
            <select
              value={filters.tripType}
              onChange={(e) => setFilters({ ...filters, tripType: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
            >
              <option value="">All Types</option>
              <option value="mission">Mission Trip</option>
              <option value="youth-camp">Youth Camp</option>
              <option value="retreat">Retreat</option>
              <option value="outreach">Outreach</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
}