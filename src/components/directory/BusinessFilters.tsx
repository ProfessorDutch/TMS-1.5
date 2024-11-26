import React, { useState } from 'react';
import { Search, Filter, MapPin } from 'lucide-react';

export default function BusinessFilters() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    city: '',
    state: '',
    type: '',
    contributionTier: ''
  });

  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search businesses..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
          />
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-patriot-cream text-patriot-navy hover:bg-patriot-navy hover:text-white transition-colors"
        >
          <Filter className="w-5 h-5" />
          Filters
        </button>
      </div>

      {showFilters && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-white rounded-xl shadow-lg">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
            <input
              type="text"
              value={filters.city}
              onChange={(e) => setFilters({ ...filters, city: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
              placeholder="Enter city"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
            <select
              value={filters.state}
              onChange={(e) => setFilters({ ...filters, state: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
            >
              <option value="">All States</option>
              <option value="GA">Georgia</option>
              <option value="FL">Florida</option>
              <option value="AL">Alabama</option>
              <option value="SC">South Carolina</option>
              <option value="NC">North Carolina</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Business Type</label>
            <select
              value={filters.type}
              onChange={(e) => setFilters({ ...filters, type: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
            >
              <option value="">All Types</option>
              <option value="Technology">Technology</option>
              <option value="Construction">Construction</option>
              <option value="Professional Services">Professional Services</option>
              <option value="Retail">Retail</option>
              <option value="Healthcare">Healthcare</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Partner Level</label>
            <select
              value={filters.contributionTier}
              onChange={(e) => setFilters({ ...filters, contributionTier: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
            >
              <option value="">All Levels</option>
              <option value="legacy">Legacy Builder</option>
              <option value="harvest">Harvest Partner</option>
              <option value="seed">Seed Sponsor</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
}