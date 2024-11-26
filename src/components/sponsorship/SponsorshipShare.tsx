import React, { useState } from 'react';
import { Share2, Copy, Facebook, Twitter, Linkedin, QrCode } from 'lucide-react';

interface SponsorshipShareProps {
  requestId: string;
  name: string;
  qrCodeUrl: string;
}

export default function SponsorshipShare({ requestId, name, qrCodeUrl }: SponsorshipShareProps) {
  const [showQR, setShowQR] = useState(false);
  const shareUrl = `${window.location.origin}/sponsor/${requestId}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      // Show success toast
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleShare = (platform: string) => {
    const text = `Support ${name}'s mission journey!`;
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
    };

    window.open(urls[platform as keyof typeof urls], '_blank');
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-patriot-navy">Share Your Journey</h3>
        <button
          onClick={() => setShowQR(!showQR)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-patriot-cream text-patriot-navy hover:bg-patriot-blue hover:text-white transition-colors"
        >
          <QrCode className="w-5 h-5" />
          {showQR ? 'Hide QR Code' : 'Show QR Code'}
        </button>
      </div>

      {showQR && (
        <div className="mb-6 text-center">
          <img src={qrCodeUrl} alt="QR Code" className="mx-auto mb-2 w-48 h-48" />
          <p className="text-sm text-patriot-blue">Scan to visit sponsorship page</p>
        </div>
      )}

      <div className="space-y-4">
        <button
          onClick={handleCopyLink}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 border-patriot-navy text-patriot-navy hover:bg-patriot-navy hover:text-white transition-colors"
        >
          <Copy className="w-5 h-5" />
          Copy Link
        </button>

        <div className="grid grid-cols-3 gap-4">
          <button
            onClick={() => handleShare('facebook')}
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            <Facebook className="w-5 h-5" />
            Share
          </button>
          <button
            onClick={() => handleShare('twitter')}
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-sky-500 text-white hover:bg-sky-600 transition-colors"
          >
            <Twitter className="w-5 h-5" />
            Tweet
          </button>
          <button
            onClick={() => handleShare('linkedin')}
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-blue-700 text-white hover:bg-blue-800 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            Post
          </button>
        </div>
      </div>
    </div>
  );
}