import React, { useState } from 'react';
import { Heart, Star, Users, Check, ArrowRight } from 'lucide-react';

interface EnrollmentAgreementProps {
  onComplete: () => void;
  onBack: () => void;
}

const values = [
  {
    id: 'faith',
    text: "I believe in the power of faith to transform lives and am committed to supporting youth in their spiritual journey.",
    icon: <Heart className="w-8 h-8 text-patriot-red" />
  },
  {
    id: 'community',
    text: "I will strive to be an encouraging and supportive member of The Mustard Seed community.",
    icon: <Users className="w-8 h-8 text-patriot-blue" />
  },
  {
    id: 'integrity',
    text: "I will act with integrity and respect in all my interactions within the community.",
    icon: <Star className="w-8 h-8 text-amber-500" />
  }
];

export default function EnrollmentAgreement({ onComplete, onBack }: EnrollmentAgreementProps) {
  const [agreements, setAgreements] = useState<string[]>([]);

  const toggleAgreement = (id: string) => {
    setAgreements(prev => 
      prev.includes(id) 
        ? prev.filter(a => a !== id)
        : [...prev, id]
    );
  };

  const allAgreed = agreements.length === values.length;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <Heart className="w-12 h-12 text-patriot-red mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-patriot-navy mb-4">
          Our Community Values
        </h3>
        <p className="text-patriot-blue">
          Please review and agree to our core values to complete your enrollment
        </p>
      </div>

      <div className="space-y-4 mb-8">
        {values.map((value) => (
          <button
            key={value.id}
            onClick={() => toggleAgreement(value.id)}
            className={`w-full flex items-center gap-4 p-6 rounded-xl border-2 transition-all duration-300 ${
              agreements.includes(value.id)
                ? 'border-patriot-red bg-patriot-cream'
                : 'border-gray-200 hover:border-patriot-red hover:bg-patriot-cream'
            }`}
          >
            {value.icon}
            <span className="flex-1 text-left text-patriot-navy">{value.text}</span>
            {agreements.includes(value.id) && (
              <Check className="w-6 h-6 text-patriot-red flex-shrink-0" />
            )}
          </button>
        ))}
      </div>

      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="px-6 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
        >
          Back
        </button>
        <button
          onClick={onComplete}
          disabled={!allAgreed}
          className={`flex items-center gap-2 px-6 py-2 rounded-lg transition-colors ${
            allAgreed
              ? 'bg-patriot-red text-white hover:bg-patriot-crimson'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }`}
        >
          Complete Enrollment <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}