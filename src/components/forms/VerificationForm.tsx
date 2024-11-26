import React, { useState } from 'react';
import { Phone, Mail, Shield, ArrowRight } from 'lucide-react';

interface VerificationFormProps {
  business: any;
  onVerificationSuccess: () => void;
  onBack: () => void;
}

export default function VerificationForm({
  business,
  onVerificationSuccess,
  onBack
}: VerificationFormProps) {
  const [method, setMethod] = useState<'phone' | 'email'>('phone');
  const [contact, setContact] = useState('');
  const [verificationSent, setVerificationSent] = useState(false);
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const validateContact = () => {
    if (method === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(contact)) {
        setError('Please enter a valid email address');
        return false;
      }
    } else {
      const phoneRegex = /^\+?[\d\s-]{10,}$/;
      if (!phoneRegex.test(contact)) {
        setError('Please enter a valid phone number');
        return false;
      }
    }
    setError('');
    return true;
  };

  const handleSendVerification = () => {
    if (!validateContact()) return;
    // Here you would typically send the verification code
    setVerificationSent(true);
    setError('');
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim()) {
      setError('Please enter the verification code');
      return;
    }
    // Here you would verify the code
    onVerificationSuccess();
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="text-center mb-8">
        <Shield className="w-12 h-12 text-patriot-red mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-patriot-navy mb-2">
          Verify Business Ownership
        </h2>
        <p className="text-patriot-blue">
          We'll send a verification code to confirm you own or manage this business
        </p>
      </div>

      {!verificationSent ? (
        <div className="space-y-6">
          <div className="flex gap-4">
            <button
              onClick={() => setMethod('phone')}
              className={`flex-1 p-4 rounded-lg border-2 transition-colors ${
                method === 'phone'
                  ? 'border-patriot-red bg-patriot-cream'
                  : 'border-gray-200 hover:border-patriot-red'
              }`}
            >
              <Phone className={`w-6 h-6 mx-auto mb-2 ${
                method === 'phone' ? 'text-patriot-red' : 'text-gray-400'
              }`} />
              <div className={method === 'phone' ? 'text-patriot-navy' : 'text-gray-500'}>
                Text Message
              </div>
            </button>

            <button
              onClick={() => setMethod('email')}
              className={`flex-1 p-4 rounded-lg border-2 transition-colors ${
                method === 'email'
                  ? 'border-patriot-red bg-patriot-cream'
                  : 'border-gray-200 hover:border-patriot-red'
              }`}
            >
              <Mail className={`w-6 h-6 mx-auto mb-2 ${
                method === 'email' ? 'text-patriot-red' : 'text-gray-400'
              }`} />
              <div className={method === 'email' ? 'text-patriot-navy' : 'text-gray-500'}>
                Email
              </div>
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {method === 'phone' ? 'Phone Number' : 'Email Address'}
            </label>
            <input
              type={method === 'phone' ? 'tel' : 'email'}
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder={method === 'phone' ? '+1 (555) 555-5555' : 'you@example.com'}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
            />
            {error && (
              <p className="mt-2 text-sm text-patriot-red">{error}</p>
            )}
          </div>

          <button
            onClick={handleSendVerification}
            className="w-full bg-patriot-red text-white py-3 rounded-full font-semibold hover:bg-patriot-crimson transition-colors flex items-center justify-center gap-2"
          >
            Send Verification <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      ) : (
        <form onSubmit={handleVerify} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Enter Verification Code
            </label>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
              placeholder="Enter 6-digit code"
              maxLength={6}
              required
            />
            {error && (
              <p className="mt-2 text-sm text-patriot-red">{error}</p>
            )}
            <p className="mt-2 text-sm text-patriot-blue">
              Code sent to {method === 'phone' ? 
                contact.replace(/(\+\d{1})(\d{3})(\d{3})(\d{4})/, '$1 ($2) $3-$4') : 
                contact
              }
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-patriot-red text-white py-3 rounded-full font-semibold hover:bg-patriot-crimson transition-colors"
          >
            Verify Code
          </button>

          <button
            type="button"
            onClick={() => setVerificationSent(false)}
            className="w-full text-patriot-blue hover:text-patriot-navy transition-colors"
          >
            Didn't receive the code? Try again
          </button>
        </form>
      )}

      <div className="mt-6">
        <button
          onClick={onBack}
          className="text-patriot-blue hover:text-patriot-navy transition-colors"
        >
          ← Back to search
        </button>
      </div>
    </div>
  );
}