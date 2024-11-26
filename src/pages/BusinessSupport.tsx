import React from 'react';
import { Building2, ArrowRight, Heart, Star, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function BusinessSupport() {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: <Heart className="w-8 h-8 text-patriot-red" />,
      title: "Community Impact",
      description: "Join a network of businesses making a real difference in young lives through faith-based education."
    },
    {
      icon: <Star className="w-8 h-8 text-patriot-red" />,
      title: "Business Recognition",
      description: "Get featured in our business directory and connect with like-minded community members."
    },
    {
      icon: <Target className="w-8 h-8 text-patriot-red" />,
      title: "Flexible Support",
      description: "Contribute in ways that align with your business values and capabilities."
    }
  ];

  return (
    <main className="flex-1">
      <section className="py-12 bg-gradient-to-br from-patriot-cream to-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex items-center gap-4 mb-6">
            <Building2 className="w-12 h-12 text-patriot-red" />
            <div>
              <h1 className="text-4xl font-bold text-patriot-navy">Business Partnership</h1>
              <p className="text-xl text-patriot-blue">Join a community of businesses committed to youth impact</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-patriot-navy mb-4">Claim Your Business for Free</h2>
              <p className="text-patriot-blue mb-8 max-w-2xl mx-auto">
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="bg-patriot-cream rounded-xl p-6 transform transition-all duration-300 hover:scale-105"
                >
                  <div className="mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-patriot-navy mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-patriot-blue">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center bg-gradient-to-br from-patriot-cream to-white rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-patriot-navy mb-4">Ready to Make an Impact?</h2>
              <p className="text-patriot-blue mb-6">
                Join our growing network of faith-driven businesses supporting the next generation.
              </p>
              <button
                onClick={() => navigate('/claim-business')}
                className="bg-patriot-red text-white px-8 py-3 rounded-full hover:bg-patriot-crimson transition-colors flex items-center gap-2 mx-auto"
              >
                Claim Your Business <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="text-center max-w-3xl mx-auto">
              <p className="text-patriot-blue">
                Our business partnership is built on a simple principle: be helpful where you can, when you can. 
                There are no mandatory commitments or forced obligations – just a community of businesses willing 
                to make a difference in their own way.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}