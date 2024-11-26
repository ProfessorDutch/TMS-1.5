import React from 'react';
import { Business } from '../../types/business';
import BusinessCard from './BusinessCard';

interface BusinessListProps {
  businesses: Business[];
  favorites: string[];
  onToggleFavorite: (businessId: string) => void;
  loading: boolean;
}

export default function BusinessList({
  businesses,
  favorites,
  onToggleFavorite,
  loading
}: BusinessListProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-lg h-72 animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (businesses.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-patriot-blue">No businesses found matching your criteria.</p>
      </div>
    );
  }

  // Sort businesses: contributors first, then by rating
  const sortedBusinesses = [...businesses].sort((a, b) => {
    if (a.contributionTier && !b.contributionTier) return -1;
    if (!a.contributionTier && b.contributionTier) return 1;
    if (a.contributionTier && b.contributionTier) {
      const tiers = { legacy: 3, harvest: 2, seed: 1 };
      return tiers[b.contributionTier] - tiers[a.contributionTier];
    }
    return 0;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {sortedBusinesses.map((business) => (
        <BusinessCard
          key={business.id}
          business={business}
          isFavorite={favorites.includes(business.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}