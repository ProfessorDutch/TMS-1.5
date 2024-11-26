import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CreditCard, Calendar, Lock } from 'lucide-react';

interface LocationState {
  amount?: string;
  isRecurring?: boolean;
  description?: string;
}

export default function DonationPage() {
  const location = useLocation();
  const state = location.state as LocationState;
  
  const [amount, setAmount] = useState(state?.amount || '100');
  const [isRecurring, setIsRecurring] = useState(state?.isRecurring || false);
  const [description, setDescription] = useState(state?.description || '');

  useEffect(() => {
    if (state?.amount) {
      setAmount(state.amount);
    }
    if (state?.isRecurring !== undefined) {
      setIsRecurring(state.isRecurring);
    }
    if (state?.description) {
      setDescription(state.description);
    }
  }, [state]);

  const predefinedAmounts = [
    { value: '25', label: '$25' },
    { value: '50', label: '$50' },
    { value: '100', label: '$100' },
    { value: '250', label: '$250' },
    { value: '500', label: '$500' },
    { value: 'custom', label: 'Custom' }
  ];

  return (
    <main className="flex-1">
      <section className="py-16 bg-gradient-to-br from-patriot-cream to-white">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-patriot-navy mb-6">
            Make a Donation
          </h1>
          <p className="text-xl text-patriot-blue mb-8 max-w-3xl">
            {description || "Your generosity helps support youth ministry and spreads God's love."}
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-patriot-navy mb-4">Select Amount</h3>
              <div className="grid grid-cols-3 gap-4 mb-4">
                {predefinedAmounts.map(({ value, label }) => (
                  <button
                    key={value}
                    onClick={() => setAmount(value)}
                    className={`py-2 rounded-lg font-medium transition-colors ${
                      amount === value
                        ? 'bg-patriot-red text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
              {amount === 'custom' && (
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    className="w-full pl-8 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
                    placeholder="Enter amount"
                    min="1"
                  />
                </div>
              )}
            </div>

            <div className="mb-8">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={isRecurring}
                  onChange={(e) => setIsRecurring(e.target.checked)}
                  className="rounded border-gray-300 text-patriot-red focus:ring-patriot-red"
                />
                <span className="text-gray-700">Make this a monthly donation</span>
              </label>
            </div>

            <div className="space-y-4 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Card Number
                </label>
                <div className="relative">
                  <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expiry Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    CVC
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-patriot-red text-white py-3 rounded-full font-semibold hover:bg-patriot-crimson transition-colors"
            >
              Complete {isRecurring ? 'Monthly' : ''} Donation of ${amount === 'custom' ? '0' : amount}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}