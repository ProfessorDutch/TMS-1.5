import React from 'react';
import MonthlyBlessingCircle from '../components/subscription/MonthlyBlessingCircle';
import ImpactDashboard from '../components/subscription/ImpactDashboard';
import { Heart, Star, Users, Church } from 'lucide-react';

const mockMetrics = {
  totalSeeds: 1234,
  studentsSupported: 89,
  coursesEnabled: 45,
  communityMembers: 567
};

const foundationPoints = [
  {
    icon: <Church className="w-6 h-6 text-patriot-red" />,
    title: "Church-Rooted Values",
    text: "Most Foundation Members grew up in the church—it shaped their lives, taught them resilience, and revealed God's unwavering faithfulness."
  },
  {
    icon: <Heart className="w-6 h-6 text-patriot-red" />,
    title: "Called to Give Back",
    text: "Now, they feel called to do something bigger: to give today's youth opportunities they never had, or to pass on the same life-changing blessings they received."
  },
  {
    icon: <Star className="w-6 h-6 text-patriot-red" />,
    title: "Historic Mission",
    text: "They understand this moment is historic—a chance to take action, to ensure our children grow up rooted in faith, surrounded by a powerful community, and guided by Jesus."
  },
  {
    icon: <Users className="w-6 h-6 text-patriot-red" />,
    title: "First Seed Planters",
    text: "This is more than a movement; it's a mission. Foundation Members are the ones bold enough to plant the first seeds."
  }
];

export default function Support() {
  return (
    <main className="flex-1">
      <section className="py-8 bg-gradient-to-br from-patriot-cream to-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <Heart className="w-10 h-10 text-patriot-red mb-3" />
              <h2 className="text-2xl font-bold text-patriot-navy mb-3">
                Foundation Members: Our First Seed Planters
              </h2>
              <div className="space-y-4">
                {foundationPoints.map((point, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="flex-shrink-0 mt-1">{point.icon}</div>
                    <div>
                      <h3 className="font-semibold text-patriot-navy mb-1">{point.title}</h3>
                      <p className="text-patriot-blue text-sm">{point.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1609234656388-0ff363383899?auto=format&fit=crop&w=800&q=80"
                alt="Foundation Members"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-4">
        <div className="max-w-6xl mx-auto px-5">
          <MonthlyBlessingCircle />
        </div>
      </section>
      
      <section className="py-4">
        <div className="max-w-6xl mx-auto px-5">
          <ImpactDashboard metrics={mockMetrics} />
        </div>
      </section>
    </main>
  );
}