import React from 'react';
import { Trophy, Share2, Heart, Bell, Users } from 'lucide-react';

interface Commitment {
  type: 'prayer' | 'share' | 'advocate' | 'notify' | 'warrior';
  count: number;
}

interface WarriorImpactProps {
  commitments: Commitment[];
}

export default function WarriorImpact({ commitments }: WarriorImpactProps) {
  if (commitments.length === 0) return null;

  return (
    <div className="bg-white rounded-xl p-6 shadow-md mb-8">
      <h4 className="text-lg font-semibold mb-4 text-patriot-navy">Your Impact</h4>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {commitments.map((commitment) => (
          <div key={commitment.type} className="text-center">
            {getCommitmentIcon(commitment.type)}
            <span className="block text-2xl font-bold text-gray-900">{commitment.count}</span>
            <span className="text-sm text-gray-600 capitalize">{commitment.type}s</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function getCommitmentIcon(type: string) {
  const iconClass = "w-8 h-8 mx-auto mb-2";
  
  switch (type) {
    case 'prayer':
      return <Heart className={`${iconClass} text-amber-600`} />;
    case 'share':
      return <Share2 className={`${iconClass} text-blue-600`} />;
    case 'advocate':
      return <Users className={`${iconClass} text-green-600`} />;
    case 'notify':
      return <Bell className={`${iconClass} text-purple-600`} />;
    case 'warrior':
      return <Trophy className={`${iconClass} text-amber-600`} />;
    default:
      return null;
  }
}