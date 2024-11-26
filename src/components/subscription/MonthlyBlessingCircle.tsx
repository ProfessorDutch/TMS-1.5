import React, { useState } from 'react';
import { BookOpen, Users, Star, Heart } from 'lucide-react';
import PaymentModal from '../PaymentModal';

const tiers = [
  {
    id: 'seed-planter',
    name: 'Seed Planter',
    price: 11,
    icon: <Heart className="w-8 h-8 text-emerald-500" />,
    features: [
      'Fund 11 Mustard Seeds monthly',
      'Monthly impact report',
      'Community updates',
      'Prayer circle access'
    ]
  },
  {
    id: 'growth-nurturer',
    name: 'Growth Nurturer',
    price: 33,
    icon: <Users className="w-8 h-8 text-blue-500" />,
    features: [
      'Fund 33 Mustard Seeds monthly',
      'Detailed impact tracking',
      'Quarterly virtual meetups',
      'Mentorship opportunities',
      'Recognition on website'
    ]
  },
  {
    id: 'harvest-champion',
    name: 'Harvest Champion',
    price: 77,
    icon: <Star className="w-8 h-8 text-amber-500" />,
    features: [
      'Fund 77 Mustard Seeds monthly',
      'VIP impact events',
      'Direct student connections',
      'Leadership circle access',
      'Custom impact report',
      'Featured supporter story'
    ]
  }
];

export default function MonthlyBlessingCircle() {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedTier, setSelectedTier] = useState<typeof tiers[0] | null>(null);

  const handleJoinCircle = (tier: typeof tiers[0]) => {
    setSelectedTier(tier);
    setShowPaymentModal(true);
  };

  return (
    <section id="monthly-blessing" className="bg-gradient-to-br from-patriot-cream to-white">
      <div className="text-center mb-6">
        <BookOpen className="w-10 h-10 text-patriot-red mx-auto mb-2" />
        <h2 className="text-2xl font-bold text-patriot-navy mb-2">
          Monthly Blessing Circles
        </h2>
        <p className="text-lg text-patriot-blue max-w-2xl mx-auto">
          Join our community of monthly supporters and help nurture young minds through education and mentorship.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={`bg-white rounded-2xl p-8 shadow-lg transform transition-all duration-300 hover:scale-105 ${
              tier.id === 'growth-nurturer' ? 'border-2 border-patriot-red' : ''
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              {tier.icon}
              <h3 className="text-xl font-bold text-patriot-navy">{tier.name}</h3>
            </div>

            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-3xl font-bold text-patriot-red">${tier.price}</span>
              <span className="text-patriot-gray">/month</span>
            </div>

            <div className="space-y-4 mb-8">
              {tier.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-patriot-red" />
                  <span className="text-sm text-patriot-blue">{feature}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => handleJoinCircle(tier)}
              className={`w-full py-3 px-6 rounded-full font-semibold transition-colors ${
                tier.id === 'growth-nurturer'
                  ? 'bg-patriot-red text-white hover:bg-patriot-crimson'
                  : 'bg-patriot-cream text-patriot-navy hover:bg-patriot-navy hover:text-white'
              }`}
            >
              Join the Circle
            </button>
          </div>
        ))}
      </div>

      {showPaymentModal && selectedTier && (
        <PaymentModal
          isOpen={showPaymentModal}
          onClose={() => setShowPaymentModal(false)}
          defaultAmount={selectedTier.price}
          defaultRecurring={true}
          description={`Monthly ${selectedTier.name} Subscription - Plant Seeds of Faith`}
        />
      )}
    </section>
  );
}