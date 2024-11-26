import React, { useState } from 'react';
import { Building2, Mail, MapPin, Phone, Globe, Heart, ArrowRight, X, Star, Users } from 'lucide-react';
import BusinessQuestionnaire from './BusinessQuestionnaire';
import PlacesAutocomplete from '../PlacesAutocomplete';
import { useGoogleMaps } from '../../hooks/useGoogleMaps';

interface FormData {
  businessName: string;
  contactName: string;
  email: string;
  phone: string;
  address: string;
  website: string;
}

export default function BusinessIntakeForm({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    address: '',
    website: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const { getPlaceDetails } = useGoogleMaps();

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleQuestionnaireComplete = (answers: Record<string, string[]>) => {
    setStep(3);
  };

  const handleAddressSelect = async (address: string, placeId: string) => {
    const details = await getPlaceDetails(placeId);
    if (details?.formatted_address) {
      setFormData(prev => ({ ...prev, address: details.formatted_address }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  if (showSuccess) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-2xl w-full mx-auto p-8">
          <div className="text-center">
            <Star className="w-12 h-12 text-patriot-red mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-patriot-navy mb-4">
              Welcome to The Mustard Seed Community!
            </h3>
            <p className="text-patriot-blue mb-6">
              Thank you for joining our mission to support and empower youth through faith-based education and mentorship.
            </p>
            <button
              onClick={onClose}
              className="bg-patriot-red text-white px-8 py-3 rounded-full hover:bg-patriot-crimson transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full mx-auto p-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-patriot-navy">Business Partnership</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {step === 1 && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Building2 className="w-4 h-4 inline-block mr-2" />
                Business Name
              </label>
              <input
                type="text"
                value={formData.businessName}
                onChange={(e) => setFormData(prev => ({ ...prev, businessName: e.target.value }))}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contact Name
              </label>
              <input
                type="text"
                value={formData.contactName}
                onChange={(e) => setFormData(prev => ({ ...prev, contactName: e.target.value }))}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Mail className="w-4 h-4 inline-block mr-2" />
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Phone className="w-4 h-4 inline-block mr-2" />
                Phone
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Globe className="w-4 h-4 inline-block mr-2" />
                Website
              </label>
              <input
                type="url"
                value={formData.website}
                onChange={(e) => setFormData(prev => ({ ...prev, website: e.target.value }))}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MapPin className="w-4 h-4 inline-block mr-2" />
                Business Address
              </label>
              <PlacesAutocomplete onSelect={handleAddressSelect} />
            </div>

            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="flex items-center gap-2 px-6 py-2 rounded-lg bg-patriot-red text-white hover:bg-patriot-crimson transition-colors"
              >
                Next <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <BusinessQuestionnaire
            onComplete={handleQuestionnaireComplete}
            onBack={handleBack}
            onClose={onClose}
          />
        )}

        {step === 3 && (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-patriot-cream rounded-xl p-6">
              <h3 className="text-xl font-bold text-patriot-navy mb-4">Final Step</h3>
              <p className="text-patriot-blue mb-4">
                Review your information and confirm your commitment to supporting youth through faith-based education and mentorship.
              </p>
              <div className="space-y-2">
                <p><strong>Business Name:</strong> {formData.businessName}</p>
                <p><strong>Contact:</strong> {formData.contactName}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Phone:</strong> {formData.phone}</p>
                <p><strong>Address:</strong> {formData.address}</p>
                {formData.website && <p><strong>Website:</strong> {formData.website}</p>}
              </div>
            </div>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={handleBack}
                className="px-6 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                Back
              </button>
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-2 rounded-lg bg-patriot-red text-white hover:bg-patriot-crimson transition-colors"
              >
                Complete Registration <Heart className="w-5 h-5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}