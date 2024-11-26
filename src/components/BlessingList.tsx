import React, { useState, useEffect } from 'react';
import BlessingRequest from './BlessingRequest';
import PaymentModal from './PaymentModal';
import { generateSystemRequests } from '../utils/generateRequests';

export default function BlessingList() {
  const [blessings, setBlessings] = useState<any[]>([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [searchTerm, setSearchTerm] = useState('');
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedBlessing, setSelectedBlessing] = useState<any>(null);

  useEffect(() => {
    const systemBlessings = generateSystemRequests(0);
    setBlessings(systemBlessings);
  }, []);

  const handleSupport = (blessing: any) => {
    setSelectedBlessing(blessing);
    setShowPaymentModal(true);
  };

  const handleShare = async (blessing: any) => {
    const shareUrl = `${window.location.origin}/blessing/${blessing.id}`;
    try {
      await navigator.share({
        title: `Support ${blessing.isAnonymous ? 'a Youth' : blessing.name}`,
        text: blessing.story,
        url: shareUrl
      });
    } catch (err) {
      navigator.clipboard.writeText(shareUrl);
      alert('Share link copied to clipboard!');
    }
  };

  const filteredBlessings = blessings.filter(blessing => {
    const searchLower = searchTerm.toLowerCase();
    const displayName = blessing.isAnonymous ? 'Anonymous Youth' : blessing.name;
    return displayName.toLowerCase().includes(searchLower) ||
           blessing.story.toLowerCase().includes(searchLower);
  });

  const visibleBlessings = filteredBlessings.slice(0, visibleCount);

  return (
    <div>
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search blessings..."
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {visibleBlessings.map((blessing) => (
          <BlessingRequest
            key={blessing.id}
            {...blessing}
            onSupport={() => handleSupport(blessing)}
            onShare={() => handleShare(blessing)}
          />
        ))}
      </div>

      {visibleCount < filteredBlessings.length && (
        <div className="text-center">
          <button
            onClick={() => setVisibleCount(prev => prev + 6)}
            className="bg-patriot-navy text-white px-8 py-3 rounded-full hover:bg-patriot-blue transition-colors"
          >
            Load More Blessings
          </button>
        </div>
      )}

      {showPaymentModal && selectedBlessing && (
        <PaymentModal
          isOpen={showPaymentModal}
          onClose={() => {
            setShowPaymentModal(false);
            setSelectedBlessing(null);
          }}
          defaultAmount={Math.min(50, selectedBlessing.goal - selectedBlessing.amountRaised)}
          defaultRecurring={false}
          description={`Support ${selectedBlessing.isAnonymous ? 'a Youth' : selectedBlessing.name}'s Journey`}
        />
      )}
    </div>
  );
}