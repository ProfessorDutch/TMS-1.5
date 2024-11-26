import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import VideoPlayer from './VideoPlayer';
import CareerPathsPreview from './CareerPathsPreview';
import DailyScripture from './DailyScripture';
import MemoryShare from './MemoryShare';
import BusinessIntakeForm from './forms/BusinessIntakeForm';
import AmbassadorForm from './forms/AmbassadorForm';
import PowerGiving from './PowerGiving';
import JourneyAhead from './JourneyAhead';
import MonthlyBlessingCircle from './subscription/MonthlyBlessingCircle';
import ActionButtonsSection from './sections/ActionButtonsSection';
import JoinMovementSection from './sections/JoinMovementSection';

export default function MainContent() {
  const navigate = useNavigate();
  const [showMemoryShare, setShowMemoryShare] = useState(false);
  const [showBusinessForm, setShowBusinessForm] = useState(false);
  const [showAmbassadorForm, setShowAmbassadorForm] = useState(false);

  return (
    <main className="flex-1">
      {/* Hero Section - Keep larger padding for visual impact */}
      <section className="py-16 bg-gradient-to-br from-patriot-cream to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-patriot-navy mb-6">
                Empowering Youth Through Faith & Purpose
              </h1>
              <p className="text-xl text-patriot-blue mb-8">
                Join our movement to nurture young minds through Christ-centered education, mentorship, and life-changing opportunities.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => setShowAmbassadorForm(true)}
                  className="bg-patriot-red text-white px-8 py-3 rounded-full font-semibold hover:bg-patriot-crimson transition-colors flex items-center gap-2"
                >
                  Become an Ambassador <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => setShowBusinessForm(true)}
                  className="bg-patriot-navy text-white px-8 py-3 rounded-full font-semibold hover:bg-patriot-blue transition-colors"
                >
                  Business Partnership
                </button>
              </div>
            </div>
            
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
              <VideoPlayer 
                url="https://www.youtube.com/watch?v=VAH-ixdFWFs"
                poster="https://images.unsplash.com/photo-1445112098124-3e76dd67983c?auto=format&fit=crop&w=2000&q=80"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="space-y-4">
        <ActionButtonsSection onShareMemory={() => setShowMemoryShare(true)} />
        
        <JoinMovementSection onBecomeAmbassador={() => setShowAmbassadorForm(true)} />

        <section className="py-4">
          <div className="max-w-6xl mx-auto px-4">
            <CareerPathsPreview />
          </div>
        </section>

        <section className="py-4 bg-patriot-cream">
          <div className="max-w-6xl mx-auto px-4">
            <JourneyAhead />
          </div>
        </section>

        <section className="py-4">
          <div className="max-w-6xl mx-auto px-4">
            <MonthlyBlessingCircle />
          </div>
        </section>

        <section className="py-4">
          <div className="max-w-6xl mx-auto px-4">
            <PowerGiving />
          </div>
        </section>

        <section className="py-4 bg-patriot-cream">
          <div className="max-w-6xl mx-auto px-4">
            <DailyScripture />
          </div>
        </section>
      </div>

      {/* Modals */}
      {showMemoryShare && (
        <MemoryShare onClose={() => setShowMemoryShare(false)} />
      )}
      {showBusinessForm && (
        <BusinessIntakeForm onClose={() => setShowBusinessForm(false)} />
      )}
      {showAmbassadorForm && (
        <AmbassadorForm onClose={() => setShowAmbassadorForm(false)} />
      )}
    </main>
  );
}