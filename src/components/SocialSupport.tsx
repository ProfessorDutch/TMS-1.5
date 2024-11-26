import React, { useState } from 'react';
import { Share2, MessageCircle, Bell, Heart, Youtube, Instagram, Facebook, Twitter } from 'lucide-react';
import PaymentModal from './PaymentModal';
import MemoryShare from './MemoryShare';
import WarriorCard from './warriors/WarriorCard';
import WarriorStats from './warriors/WarriorStats';
import WarriorImpact from './warriors/WarriorImpact';

interface SocialPlatform {
  name: string;
  icon: React.ReactNode;
  url: string;
  color: string;
}

const socialPlatforms: SocialPlatform[] = [
  {
    name: 'Instagram',
    icon: <Instagram className="w-6 h-6" />,
    url: 'https://instagram.com/mustardseedministry',
    color: 'bg-gradient-to-r from-purple-500 via-pink-500 to-red-500'
  },
  {
    name: 'TikTok',
    icon: <span className="text-xl">󰫃</span>,
    url: 'https://tiktok.com/@mustardseedministry',
    color: 'bg-black'
  },
  {
    name: 'YouTube',
    icon: <Youtube className="w-6 h-6" />,
    url: 'https://youtube.com/@mustardseedministry',
    color: 'bg-red-600'
  },
  {
    name: 'X',
    icon: <Twitter className="w-6 h-6" />,
    url: 'https://x.com/mustardseedmin',
    color: 'bg-black'
  },
  {
    name: 'Facebook',
    icon: <Facebook className="w-6 h-6" />,
    url: 'https://facebook.com/mustardseedministry',
    color: 'bg-blue-600'
  }
];

export default function SocialSupport() {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showMemoryShare, setShowMemoryShare] = useState(false);
  const [commitments, setCommitments] = useState<any[]>([]);
  const [showWarriorStats, setShowWarriorStats] = useState(false);
  const [warriorStats, setWarriorStats] = useState({
    shares: 0,
    likes: 0,
    comments: 0,
    referrals: 0,
    level: 1
  });

  const handleCommitment = (type: string) => {
    const existing = commitments.find(c => c.type === type);
    if (existing) {
      setCommitments(commitments.map(c => 
        c.type === type ? { ...c, count: c.count + 1 } : c
      ));
    } else {
      setCommitments([...commitments, { type, count: 1 }]);
    }

    if (type === 'warrior') {
      setShowWarriorStats(true);
    }
  };

  const handleSocialFollow = (platform: SocialPlatform) => {
    window.open(platform.url, '_blank');
    handleCommitment('social');
  };

  return (
    <div className="bg-gradient-to-br from-patriot-cream to-white rounded-2xl p-8">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold text-patriot-navy mb-4 text-center">
          Support Through Faith & Community
        </h3>
        <p className="text-center text-patriot-gray italic mb-8">
          "I have shewed you all things, how that so labouring ye ought to support the weak, and to remember the words of the Lord Jesus, how he said, It is more blessed to give than to receive." - Acts 20:35
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <WarriorCard onJoin={() => handleCommitment('warrior')} />

          {showWarriorStats ? (
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="text-xl font-semibold mb-6 text-patriot-navy">Follow & Share</h4>
              <div className="grid grid-cols-2 gap-4">
                {socialPlatforms.map((platform) => (
                  <button
                    key={platform.name}
                    onClick={() => handleSocialFollow(platform)}
                    className={`${platform.color} text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity`}
                  >
                    {platform.icon}
                    {platform.name}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl p-6 shadow-md transform transition-all duration-300 hover:scale-105">
              <Heart className="w-12 h-12 text-patriot-red mb-4" />
              <h4 className="text-xl font-semibold mb-4 text-patriot-navy">Prayer Warriors</h4>
              <p className="text-patriot-gray mb-4">
                "Every man according as he purposeth in his heart, so let him give; not grudgingly, or of necessity: for God loveth a cheerful giver." - 2 Corinthians 9:7
              </p>
              <button
                onClick={() => handleCommitment('prayer')}
                className="w-full flex items-center justify-center gap-2 bg-patriot-cream text-patriot-navy px-6 py-3 rounded-full hover:bg-patriot-navy hover:text-white transition-colors"
              >
                <Heart className="w-5 h-5" />
                Commit to Prayer
              </button>
            </div>
          )}
        </div>

        {showWarriorStats && <WarriorStats stats={warriorStats} />}
        
        <WarriorImpact commitments={commitments} />

        <div className="text-center">
          <p className="text-patriot-gray mb-4">
            "And he arose, and stood forth." - Luke 6:8
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setShowMemoryShare(true)}
              className="inline-flex items-center gap-2 bg-patriot-red text-white px-8 py-3 rounded-full hover:bg-patriot-crimson transition-colors"
            >
              Share Your Story
              <MessageCircle className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleCommitment('share')}
              className="inline-flex items-center gap-2 bg-patriot-navy text-white px-8 py-3 rounded-full hover:bg-patriot-blue transition-colors"
            >
              Share Ministry
              <Share2 className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleCommitment('notify')}
              className="inline-flex items-center gap-2 bg-patriot-red text-white px-8 py-3 rounded-full hover:bg-patriot-crimson transition-colors"
            >
              Get Updates
              <Bell className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {showPaymentModal && (
        <PaymentModal
          isOpen={showPaymentModal}
          onClose={() => setShowPaymentModal(false)}
          defaultAmount={25}
          defaultRecurring={true}
          description="Join Our Community of Supporters"
        />
      )}

      {showMemoryShare && (
        <MemoryShare onClose={() => setShowMemoryShare(false)} />
      )}
    </div>
  );
}