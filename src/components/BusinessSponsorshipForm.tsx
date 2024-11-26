import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, ArrowRight } from 'lucide-react';

export default function BusinessSponsorshipForm() {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <div className="text-center mb-8">
        <Building2 className="w-12 h-12 text-patriot-red mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-patriot-navy mb-4">Join as a Business</h2>
        <p className="text-patriot-blue mb-6">
          Partner with us to support youth through faith-based education and mentorship. 
          Claim your business listing or add your business to our directory.
        </p>
        <button
          onClick={() => navigate('/claim-business')}
          className="bg-patriot-red text-white px-8 py-3 rounded-full hover:bg-patriot-crimson transition-colors flex items-center gap-2 mx-auto"
        >
          Get Started <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}