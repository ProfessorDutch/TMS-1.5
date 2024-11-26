import React, { useState } from 'react';
import { X, CreditCard, Calendar, Lock } from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultAmount: number;
  defaultRecurring: boolean;
  description: string;
}

export default function PaymentModal({
  isOpen,
  onClose,
  defaultAmount,
  defaultRecurring,
  description
}: PaymentModalProps) {
  const [amount, setAmount] = useState(defaultAmount);
  const [recurring, setRecurring] = useState(defaultRecurring);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-patriot-navy">{description}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors text-4xl leading-none"
          >
            ×
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Amount
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full pl-8 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={recurring}
                onChange={(e) => setRecurring(e.target.checked)}
                className="rounded border-gray-300 text-patriot-red focus:ring-patriot-red"
              />
              <span className="text-sm text-gray-700">Make this a monthly blessing</span>
            </label>
          </div>

          <div className="grid grid-cols-2 gap-4">
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

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expiry
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full pl-9 pr-2 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  CVC
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="123"
                    className="w-full pl-9 pr-2 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              // Handle payment processing
              onClose();
            }}
            className="w-full bg-patriot-red text-white py-3 rounded-full font-semibold hover:bg-patriot-crimson transition-colors"
          >
            Complete {recurring ? 'Monthly' : ''} Blessing of ${amount}
          </button>
        </div>
      </div>
    </div>
  );
}