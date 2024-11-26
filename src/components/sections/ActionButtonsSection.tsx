import React from 'react';
import { Church, Building2, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ActionButtonsSectionProps {
  onShareMemory: () => void;
}

export default function ActionButtonsSection({ onShareMemory }: ActionButtonsSectionProps) {
  const navigate = useNavigate();
  
  return (
    <section className="py-4 bg-gradient-to-br from-patriot-cream to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button 
            onClick={() => navigate('/church-finder')}
            className="group relative overflow-hidden bg-patriot-navy text-white p-4 rounded-xl text-senior hover:bg-patriot-blue transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-patriot-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative flex items-center justify-center gap-3">
              <Church className="w-8 h-8" />
              <span className="font-semibold">Find Your Church</span>
            </div>
          </button>

          <button 
            onClick={() => navigate('/business-support')}
            className="group relative overflow-hidden bg-patriot-red text-white p-4 rounded-xl text-senior hover:bg-patriot-crimson transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-patriot-crimson/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative flex items-center justify-center gap-3">
              <Building2 className="w-8 h-8" />
              <span className="font-semibold">Support as a Business</span>
            </div>
          </button>

          <button 
            onClick={onShareMemory}
            className="group relative overflow-hidden bg-patriot-navy text-white p-4 rounded-xl text-senior hover:bg-patriot-blue transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-patriot-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative flex items-center justify-center gap-3">
              <Heart className="w-8 h-8" />
              <span className="font-semibold">Share Memory</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}