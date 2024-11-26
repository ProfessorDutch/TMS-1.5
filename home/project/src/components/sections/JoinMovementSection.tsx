import React from 'react';
import { ArrowRight, Sprout, Star, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface JoinMovementSectionProps {
  onBecomeAmbassador: () => void;
}

export default function JoinMovementSection({ onBecomeAmbassador }: JoinMovementSectionProps) {
  const navigate = useNavigate();

  const ambassadorBenefits = [
    'Access to exclusive training and resources',
    'Monthly virtual meetups with other ambassadors',
    'Early access to new programs and initiatives',
    'Recognition on our website and social media',
    'Opportunity to mentor and guide others',
    'Special event invitations and networking'
  ];

  const foundationBenefits = [
    'Monthly impact reports and updates',
    'VIP access to ministry events',
    'Direct connection with supported youth',
    'Recognition in annual report',
    'Tax-deductible contributions',
    'Quarterly strategy sessions'
  ];

  return (
    <section className="py-12 bg-patriot-cream">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-patriot-navy mb-4">Join Our Movement</h2>
          <p className="text-xl text-patriot-blue">Two powerful ways to make an impact</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <Sprout className="w-12 h-12 text-patriot-red mb-4" />
            <h3 className="text-xl font-bold text-patriot-navy mb-4">Ambassadors</h3>
            <p className="text-patriot-blue mb-6">
              Share the message far and wide. Every like, post, and comment helps us reach more 
              people and grow the movement.
            </p>
            <div className="space-y-3 mb-6">
              {ambassadorBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-patriot-red" />
                  <span className="text-patriot-gray">{benefit}</span>
                </div>
              ))}
            </div>
            <button 
              onClick={onBecomeAmbassador}
              className="w-full bg-patriot-red text-white px-6 py-3 rounded-full hover:bg-patriot-crimson transition-colors flex items-center justify-center gap-2"
            >
              Become an Ambassador <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <Users className="w-12 h-12 text-patriot-red mb-4" />
            <h3 className="text-xl font-bold text-patriot-navy mb-4">Foundation Members</h3>
            <p className="text-patriot-blue mb-6">
              Support the mission with a $33 monthly subscription to fund mentorships, training, 
              and life-changing resources.
            </p>
            <div className="space-y-3 mb-6">
              {foundationBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-patriot-red" />
                  <span className="text-patriot-gray">{benefit}</span>
                </div>
              ))}
            </div>
            <button 
              onClick={() => navigate('/support')}
              className="w-full bg-patriot-red text-white px-6 py-3 rounded-full hover:bg-patriot-crimson transition-colors flex items-center justify-center gap-2"
            >
              Become a Member <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}