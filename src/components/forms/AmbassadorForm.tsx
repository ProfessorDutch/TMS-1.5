import React, { useState } from 'react';
import { Heart, Share2, Users, ArrowRight, X, Star } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

const commitments = [
  {
    icon: <Heart className="w-6 h-6 text-patriot-red" />,
    text: "I will actively participate in sharing The Mustard Seed's mission and values"
  },
  {
    icon: <Users className="w-6 h-6 text-patriot-blue" />,
    text: "I will engage positively and supportively with our community"
  },
  {
    icon: <Share2 className="w-6 h-6 text-patriot-red" />,
    text: "I will help spread awareness through my social networks"
  },
  {
    icon: <Star className="w-6 h-6 text-amber-500" />,
    text: "I will maintain the integrity and values of The Mustard Seed"
  },
  {
    icon: <Heart className="w-6 h-6 text-patriot-red" />,
    text: "I will pray for and encourage youth in their faith journey"
  }
];

export default function AmbassadorForm({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });
  const [agreedCommitments, setAgreedCommitments] = useState<string[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleCommitmentToggle = (commitment: string) => {
    setAgreedCommitments(prev => 
      prev.includes(commitment)
        ? prev.filter(c => c !== commitment)
        : [...prev, commitment]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  const allCommitmentsAgreed = agreedCommitments.length === commitments.length;

  if (showSuccess) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-2xl w-full mx-auto p-8">
          <div className="text-center">
            <Star className="w-12 h-12 text-patriot-red mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-patriot-navy mb-4">
              Welcome to The Mustard Seed Movement!
            </h3>
            <p className="text-patriot-blue mb-6">
              Thank you for becoming an Ambassador. Together, we'll make a difference in young lives through faith, purpose, and opportunity.
            </p>
            <button
              onClick={onClose}
              className="bg-patriot-red text-white px-8 py-3 rounded-full hover:bg-patriot-crimson transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full mx-auto p-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-patriot-navy">Become an Ambassador</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {step === 1 ? (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Heart className="w-12 h-12 text-patriot-red mx-auto mb-4" />
              <h3 className="text-xl font-bold text-patriot-navy mb-2">Ambassador Commitments</h3>
              <p className="text-patriot-blue">
                Please review and agree to our community values
              </p>
            </div>

            <div className="space-y-4">
              {commitments.map((commitment, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleCommitmentToggle(commitment.text)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-300 ${
                    agreedCommitments.includes(commitment.text)
                      ? 'border-patriot-red bg-patriot-cream'
                      : 'border-gray-200 hover:border-patriot-red hover:bg-patriot-cream/50'
                  }`}
                >
                  {commitment.icon}
                  <span className="flex-1 text-left text-patriot-navy">{commitment.text}</span>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                    agreedCommitments.includes(commitment.text)
                      ? 'border-patriot-red bg-patriot-red text-white'
                      : 'border-gray-300'
                  }`}>
                    {agreedCommitments.includes(commitment.text) && '✓'}
                  </div>
                </button>
              ))}
            </div>

            <button
              onClick={() => allCommitmentsAgreed && setStep(2)}
              disabled={!allCommitmentsAgreed}
              className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition-colors ${
                allCommitmentsAgreed
                  ? 'bg-patriot-red text-white hover:bg-patriot-crimson'
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }`}
            >
              Continue <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone (Optional)
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
              />
            </div>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-6 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                Back
              </button>
              <button
                type="submit"
                className="flex items-center gap-2 px-8 py-3 rounded-full bg-patriot-red text-white hover:bg-patriot-crimson transition-colors"
              >
                Complete Registration <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}