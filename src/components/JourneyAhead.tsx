import React from 'react';
import { Target, Sprout, BookOpen, Star } from 'lucide-react';

export default function JourneyAhead() {
  return (
    <div>
      <div className="text-center mb-12">
        <Target className="w-12 h-12 text-patriot-red mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-patriot-navy mb-4">The Journey Ahead</h2>
        <p className="text-xl text-patriot-blue">Building a future of faith, purpose, and opportunity</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gradient-to-br from-patriot-red/10 to-patriot-crimson/10 rounded-xl p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <Sprout className="w-8 h-8 text-patriot-red" />
            <h3 className="text-xl font-bold text-patriot-navy">Phase 1: Foundation</h3>
          </div>
          <h4 className="text-lg font-semibold text-patriot-blue mb-4">Building our community and establishing core programs</h4>
          <p className="text-patriot-gray">
            The Foundation phase is where it all begins. We focus on growing a community of believers who share a passion for making a difference. We're establishing core programs including life skills training, faith-based mentorship, and leadership development, while recruiting Ambassadors and Foundation Members to help spread our message.
          </p>
        </div>

        <div className="bg-gradient-to-br from-patriot-blue/10 to-blue-600/10 rounded-xl p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-patriot-blue" />
            <h3 className="text-xl font-bold text-patriot-navy">Phase 2: Growth</h3>
          </div>
          <h4 className="text-lg font-semibold text-patriot-blue mb-4">Expanding course offerings and partner networks</h4>
          <p className="text-patriot-gray">
            In the Growth phase, we scale our impact by developing broader courses focusing on practical skills, personal development, and spiritual growth. We create partnerships with local businesses, churches, and organizations to amplify our reach and provide more resources for young people.
          </p>
        </div>

        <div className="bg-gradient-to-br from-amber-500/10 to-amber-700/10 rounded-xl p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <Star className="w-8 h-8 text-amber-600" />
            <h3 className="text-xl font-bold text-patriot-navy">Phase 3: Impact</h3>
          </div>
          <h4 className="text-lg font-semibold text-patriot-blue mb-4">Full-scale career development and job placement</h4>
          <p className="text-patriot-gray">
            The Impact phase delivers on our promise of lasting change. We transition to full-scale career development, offering job placement, apprenticeships, and mentorship programs. With our network of partners and thriving community, we help young people achieve their dreams.
          </p>
        </div>
      </div>
    </div>
  );
}