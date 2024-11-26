import React from 'react';
import { Badge } from 'lucide-react';

const BADGE_CONFIGS = {
  legacy: {
    icon: '🏆',
    color: 'bg-amber-500',
    tooltip: 'Legacy Builder Partner'
  },
  harvest: {
    icon: '🌾',
    color: 'bg-emerald-500',
    tooltip: 'Harvest Partner'
  },
  seed: {
    icon: '🌱',
    color: 'bg-blue-500',
    tooltip: 'Seed Sponsor'
  },
  educator: {
    icon: '📚',
    color: 'bg-purple-500',
    tooltip: 'Course Creator'
  },
  mentor: {
    icon: '🤝',
    color: 'bg-red-500',
    tooltip: 'Youth Mentor'
  }
};

interface BusinessBadgesProps {
  badges: string[];
}

export default function BusinessBadges({ badges }: BusinessBadgesProps) {
  if (!badges.length) return null;

  return (
    <div className="flex -space-x-1">
      {badges.map((badge) => {
        const config = BADGE_CONFIGS[badge as keyof typeof BADGE_CONFIGS];
        if (!config) return null;

        return (
          <div
            key={badge}
            className={`w-6 h-6 rounded-full ${config.color} flex items-center justify-center text-white border-2 border-white`}
            title={config.tooltip}
          >
            <span className="text-xs">{config.icon}</span>
          </div>
        );
      })}
    </div>
  );
}