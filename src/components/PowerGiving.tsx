import React, { useState } from 'react';
import { Star, GraduationCap } from 'lucide-react';
import PaymentModal from './PaymentModal';

const powerGivingOptions = [
  {
    amount: 250,
    impact: "Support a youth's first leadership training",
    verse: "Train up a child in the way they should go",
    featured: false
  },
  {
    amount: 500,
    impact: "Enable a full mentorship program",
    verse: "Let no man despise thy youth",
    featured: true
  },
  {
    amount: 1500,
    impact: "Fund a complete career development path",
    verse: "Study to show thyself approved unto God",
    special: true
  }
];

export default function PowerGiving() {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState<typeof powerGivingOptions[0] | null>(null);

  const handleSupport = (option: typeof powerGivingOptions[0]) => {
    setSelectedOption(option);
    setShowPaymentModal(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {powerGivingOptions.map((option, index) => (
          <div
            key={index}
            className={`rounded-2xl p-6 transform transition-all duration-300 hover:scale-105 ${
              option.special 
                ? 'bg-gradient-to-br from-patriot-navy to-patriot-blue text-white'
                : option.featured 
                  ? 'bg-patriot-red text-white' 
                  : 'bg-white border-2 border-patriot-cream'
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold">${option.amount.toLocaleString()}</h3>
                <p className={`text-sm ${option.special || option.featured ? 'text-patriot-cream' : 'text-patriot-gray'}`}>
                  One-time Support
                </p>
              </div>
              {option.special ? (
                <Star className="w-6 h-6 text-patriot-cream" />
              ) : (
                <GraduationCap className={`w-6 h-6 ${option.featured ? 'text-patriot-cream' : 'text-patriot-red'}`} />
              )}
            </div>
            <p className={`text-lg font-medium ${option.special || option.featured ? 'text-patriot-cream' : 'text-patriot-gray'} mb-4`}>
              {option.impact}
            </p>
            <p className={`text-sm italic mb-4 ${option.special || option.featured ? 'text-patriot-cream' : 'text-patriot-gray'}`}>
              {option.verse}
            </p>
            <button 
              onClick={() => handleSupport(option)}
              className={`w-full mt-4 py-3 px-4 rounded-full font-semibold transition-colors ${
                option.special || option.featured
                  ? 'bg-white text-patriot-navy hover:bg-patriot-cream'
                  : 'bg-patriot-red text-white hover:bg-patriot-crimson'
              }`}
            >
              Support Youth
            </button>
          </div>
        ))}
      </div>

      {showPaymentModal && selectedOption && (
        <PaymentModal
          isOpen={showPaymentModal}
          onClose={() => setShowPaymentModal(false)}
          defaultAmount={selectedOption.amount}
          defaultRecurring={false}
          description={selectedOption.impact}
        />
      )}
    </>
  );
}