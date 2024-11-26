import React from 'react';
import { Trophy } from 'lucide-react';

interface WarriorStats {
  shares: number;
  likes: number;
  comments: number;
  referrals: number;
  level: number;
}

interface WarriorStatsProps {
  stats: WarriorStats;
}

export function getWarriorLevel(level: number) {
  if (level <= 2) return 'Bronze Warrior';
  if (level <= 4) return 'Silver Warrior';
  if (level <= 6) return 'Gold Warrior';
  return 'Diamond Warrior';
}

export default function WarriorStats({ stats }: WarriorStatsProps) {
  const totalActions = stats.shares + stats.likes + stats.comments + stats.referrals;
  const progressToNextLevel = ((totalActions % 10) * 10);
  const actionsToNextLevel = (stats.level * 10) - totalActions;

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-lg font-semibold text-patriot-navy">Your Warrior Stats</h4>
        <span className="px-4 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
          {getWarriorLevel(stats.level)}
        </span>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <StatItem label="Shares" value={stats.shares} />
        <StatItem label="Likes" value={stats.likes} />
        <StatItem label="Comments" value={stats.comments} />
        <StatItem label="Referrals" value={stats.referrals} />
      </div>

      <div className="bg-gray-100 rounded-lg p-4">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Level {stats.level}</span>
          <span>Next Level: {actionsToNextLevel} actions</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full">
          <div 
            className="h-full bg-amber-600 rounded-full transition-all duration-500"
            style={{ width: `${progressToNextLevel}%` }}
          />
        </div>
      </div>
    </div>
  );
}

function StatItem({ label, value }: { label: string; value: number }) {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold text-amber-600">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}