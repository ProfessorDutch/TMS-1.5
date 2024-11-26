import React from 'react';
import { Users } from 'lucide-react';
import ChurchCard from './ChurchCard';
import { Church } from '../../types/church';

interface ChurchListProps {
  churches: Church[];
  loading: boolean;
  onClaimChurch: (churchId: string) => void;
}

export default function ChurchList({ churches, loading, onClaimChurch }: ChurchListProps) {
  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-patriot-red border-t-transparent mx-auto"></div>
        <p className="mt-4 text-patriot-blue">Searching for churches...</p>
      </div>
    );
  }

  if (churches.length === 0) {
    return (
      <div className="text-center py-8">
        <Users className="w-16 h-16 text-patriot-blue mx-auto mb-4" />
        <h3 className="text-xl font-bold text-patriot-navy mb-2">Find Your Church</h3>
        <p className="text-patriot-blue max-w-md mx-auto">
          Search for your church to connect with your faith community and see how many others attend.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {churches.map((church) => (
        <ChurchCard
          key={church.id}
          church={church}
          onClaim={onClaimChurch}
        />
      ))}
    </div>
  );
}