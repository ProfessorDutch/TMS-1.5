import React, { useState } from 'react';
import { Heart, Users, Star } from 'lucide-react';
import EnrollmentForm from '../components/forms/EnrollmentForm';
import EnrollmentAgreement from '../components/forms/EnrollmentAgreement';
import BusinessIntakeForm from '../components/forms/BusinessIntakeForm';

export default function JoinMovement() {
  const [step, setStep] = useState(1);
  const [showBusinessForm, setShowBusinessForm] = useState(false);
  const [formData, setFormData] = useState<any>(null);

  const handleEnrollmentComplete = (data: any) => {
    setFormData(data);
    setStep(2);
  };

  const handleAgreementComplete = () => {
    // Here you would typically send the enrollment data to your backend
    console.log('Enrollment completed:', formData);
    setStep(3);
  };

  if (step === 3) {
    return (
      <main className="flex-1">
        <section className="py-16 bg-gradient-to-br from-patriot-cream to-white">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <Star className="w-16 h-16 text-patriot-red mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-patriot-navy mb-6">
              Welcome to The Movement!
            </h1>
            <p className="text-xl text-patriot-blue mb-8 max-w-2xl mx-auto">
              Thank you for joining The Mustard Seed community. Together, we'll make a difference 
              in young lives through faith, purpose, and opportunity.
            </p>
            <p className="text-lg text-patriot-red italic">
              "Faith in Action: Changing Lives, One Seed at a Time."
            </p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="flex-1">
      <section className="py-16 bg-gradient-to-br from-patriot-cream to-white">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-patriot-navy mb-6">
            Join The Movement
          </h1>
          <p className="text-xl text-patriot-blue mb-8 max-w-3xl">
            Choose your path to make a difference in young lives through faith and purpose.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-2xl mx-auto px-4">
          {step === 1 ? (
            <EnrollmentForm onComplete={handleEnrollmentComplete} />
          ) : (
            <EnrollmentAgreement 
              onComplete={handleAgreementComplete}
              onBack={() => setStep(1)}
            />
          )}
        </div>
      </section>

      {showBusinessForm && (
        <BusinessIntakeForm onClose={() => setShowBusinessForm(false)} />
      )}
    </main>
  );
}