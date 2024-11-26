import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, BookOpen, Users, GraduationCap } from 'lucide-react';

interface MonthlyTierProps {
  name: string;
  amount: number;
  verse: string;
  description: string;
  benefits?: string[];
  featured?: boolean;
}

export default function MonthlyTier({ 
  name, 
  amount, 
  verse, 
  description,
  benefits = [],
  featured = false
}: MonthlyTierProps) {
  const navigate = useNavigate();
  const dailyAmount = (amount / 30).toFixed(2);
  
  const handleSupport = () => {
    navigate('/support', { 
      state: { 
        amount: amount.toString(), 
        isRecurring: true,
        description: `Monthly ${name} Support`
      } 
    });
  };

  return (
    <div className={`rounded-2xl p-6 transform transition-all duration-300 hover:scale-105 ${
      featured 
        ? 'bg-patriot-red text-white scale-105 shadow-xl'
        : 'bg-white text-patriot-navy shadow-lg'
    }`}>
      <div className="flex items-center gap-2 mb-2">
        {featured ? (
          <GraduationCap className="w-6 h-6 text-patriot-cream" />
        ) : (
          <BookOpen className="w-6 h-6 text-patriot-red" />
        )}
        <h3 className="text-2xl font-bold">{name}</h3>
      </div>
      <div className="flex items-baseline gap-2 mb-4">
        <span className="text-3xl font-bold">${amount}</span>
        <span className="text-sm opacity-80">/month</span>
      </div>
      <p className={`text-sm ${
        featured ? 'text-patriot-cream' : 'text-patriot-gray'
      } mb-6`}>
        Just ${dailyAmount} per day to support youth education
      </p>
      <div className="space-y-4 mb-6">
        <div className="flex items-start gap-2">
          <Check className={`w-5 h-5 ${
            featured ? 'text-patriot-cream' : 'text-patriot-red'
          }`} />
          <span className="text-sm">Support youth mentorship programs</span>
        </div>
        <div className="flex items-start gap-2">
          <Check className={`w-5 h-5 ${
            featured ? 'text-patriot-cream' : 'text-patriot-red'
          }`} />
          <span className="text-sm">Fund educational resources</span>
        </div>
        <div className="flex items-start gap-2">
          <Check className={`w-5 h-5 ${
            featured ? 'text-patriot-cream' : 'text-patriot-red'
          }`} />
          <span className="text-sm">Enable skills training workshops</span>
        </div>
        <div className="flex items-start gap-2">
          <Check className={`w-5 h-5 ${
            featured ? 'text-patriot-cream' : 'text-patriot-red'
          }`} />
          <span className="text-sm">Inspired by {verse}</span>
        </div>
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start gap-2">
            <Check className={`w-5 h-5 ${
              featured ? 'text-patriot-cream' : 'text-patriot-red'
            }`} />
            <span className="text-sm">{benefit}</span>
          </div>
        ))}
      </div>
      <button 
        onClick={handleSupport}
        className={`w-full py-3 px-4 rounded-full font-semibold transition-colors ${
          featured 
            ? 'bg-white text-patriot-red hover:bg-patriot-cream'
            : 'bg-patriot-red text-white hover:bg-patriot-crimson'
        }`}
      >
        Support Youth Education
      </button>
    </div>
  );
}