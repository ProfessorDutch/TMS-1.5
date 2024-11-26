import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sprout, Heart, Users, Target, BookOpen, Star, ArrowRight, Church, Building2, Share2 } from 'lucide-react';
import AmbassadorForm from '../components/forms/AmbassadorForm';

export default function About() {
  const navigate = useNavigate();
  const [showAmbassadorForm, setShowAmbassadorForm] = useState(false);

  return (
    <main className="flex-1">
      <section className="py-8 bg-gradient-to-br from-patriot-cream to-white">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-patriot-navy mb-4">
            About The Mustard Seed Project
          </h1>
          <p className="text-xl text-patriot-blue max-w-3xl">
            A movement rooted in faith, hope, and action—inspired by Jesus' words that even faith 
            the size of a mustard seed can move mountains.
          </p>
        </div>
      </section>

      <section className="py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-2xl font-bold text-patriot-navy mb-4">Our Mission</h2>
              <p className="text-patriot-blue mb-4">
                We empower the next generation by providing life-changing resources, mentorship, 
                and opportunities. In a world where young people are losing direction, community, 
                and hope, we are committed to rebuilding the fabric of faith-centered leadership.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Heart className="w-6 h-6 text-patriot-red flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-patriot-navy">Faith-Centered Growth</h3>
                    <p className="text-patriot-blue">Nurturing spiritual foundations alongside practical skills</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-patriot-red flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-patriot-navy">Community Building</h3>
                    <p className="text-patriot-blue">Creating meaningful connections that last</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-patriot-red flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-patriot-navy">Purposeful Direction</h3>
                    <p className="text-patriot-blue">Guiding youth toward their God-given calling</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
                alt="Youth Ministry"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-gradient-to-br from-patriot-cream to-white">
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
              onClick={() => navigate('/share-memory')}
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

      <section className="py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-patriot-navy mb-2">Join Our Movement</h2>
            <p className="text-xl text-patriot-blue">Two powerful ways to make an impact</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Ambassador Card */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <Sprout className="w-12 h-12 text-patriot-red mb-4" />
              <h3 className="text-xl font-bold text-patriot-navy mb-4">Ambassadors</h3>
              <p className="text-patriot-blue mb-4">
                Share the message far and wide. Every like, post, and comment helps us reach more 
                people and grow the movement.
              </p>
              <button 
                onClick={() => setShowAmbassadorForm(true)}
                className="w-full bg-patriot-red text-white px-6 py-3 rounded-full hover:bg-patriot-crimson transition-colors flex items-center justify-center gap-2"
              >
                Become an Ambassador <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Foundation Card */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <Star className="w-12 h-12 text-patriot-red mb-4" />
              <h3 className="text-xl font-bold text-patriot-navy mb-4">Foundation Members</h3>
              <p className="text-patriot-blue mb-4">
                Support the mission with a $33 monthly subscription to fund mentorships, training, 
                and life-changing resources.
              </p>
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

      {showAmbassadorForm && (
        <AmbassadorForm onClose={() => setShowAmbassadorForm(false)} />
      )}
    </main>
  );
}