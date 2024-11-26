import React from 'react';
import { Trophy, Target } from 'lucide-react';

interface WarriorCardProps {
  onJoin: () => void;
}

export default function WarriorCard({ onJoin }: WarriorCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md transform transition-all duration-300 hover:scale-105">
      <Trophy className="w-12 h-12 text-patriot-navy mb-4" />
      <h4 className="text-xl font-semibold mb-4 text-patriot-navy">Social Media Warriors</h4>
      <p className="text-patriot-gray mb-6">
        Join our dedicated team of social media warriors spreading hope and inspiration through likes, shares, and engagement.
      </p>
      <button
        onClick={onJoin}
        className="w-full flex items-center justify-center gap-2 bg-patriot-red text-white px-6 py-3 rounded-full hover:bg-patriot-crimson transition-colors"
      >
        <Target className="w-5 h-5" />
        Become a Warrior
      </button>
    </div>
  );
}