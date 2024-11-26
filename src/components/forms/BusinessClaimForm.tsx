import React, { useState } from 'react';
import { Building2, Mail, MapPin, Phone, Globe, ArrowRight } from 'lucide-react';
import PlacesAutocomplete from '../PlacesAutocomplete';

interface BusinessClaimFormProps {
  existingBusiness?: any;
  onBack: () => void;
}

export default function BusinessClaimForm({
  existingBusiness,
  onBack
}: BusinessClaimFormProps) {
  const [formData, setFormData] = useState({
    businessName: existingBusiness?.name || '',
    contactName: '',
    email: '',
    phone: existingBusiness?.contact?.phone || '',
    website: existingBusiness?.contact?.website || '',
    address: existingBusiness?.address?.street || '',
    description: existingBusiness?.description || '',
    logo: null as File | null
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-patriot-navy mb-2">
          {existingBusiness ? 'Complete Your Business Profile' : 'Add Your Business'}
        </h2>
        <p className="text-patriot-blue">
          Provide your business details to join our community
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        <PlacesAutocomplete
          onSelect={(address) => setFormData(prev => ({ ...prev, address }))}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Business Description
        </label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
          rows={4}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Business Logo
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            if (e.target.files?.[0]) {
              setFormData(prev => ({ ...prev, logo: e.target.files![0] }));
            }
          }}
          className="w-full"
        />
      </div>

      <div className="flex justify-between pt-6">
        <button
          type="button"
          onClick={onBack}
          className="px-6 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
        >
          Back
        </button>
        <button
          type="submit"
          className="px-8 py-3 rounded-full bg-patriot-red text-white font-semibold hover:bg-patriot-crimson transition-colors flex items-center gap-2"
        >
          Complete Registration <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
}