import React, { useState } from 'react';
import { Upload, PlusCircle, ArrowRight, Eye, EyeOff } from 'lucide-react';
import RichTextEditor from './RichTextEditor';

interface FormData {
  name: string;
  age: string;
  church: string;
  destination: string;
  startDate: string;
  endDate: string;
  goal: string;
  email: string;
  phone: string;
  story: string;
  purpose: string;
  isAnonymous: boolean;
  image?: File;
}

export default function SponsorshipForm({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    age: '',
    church: '',
    destination: '',
    startDate: '',
    endDate: '',
    goal: '',
    email: '',
    phone: '',
    story: '',
    purpose: '',
    isAnonymous: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFormData(prev => ({ ...prev, image: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Submitting form data:', formData);
    onClose();
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-patriot-navy mb-6">Personal Information</h3>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Profile Picture
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="profile-picture"
                />
                <label
                  htmlFor="profile-picture"
                  className="cursor-pointer text-patriot-blue hover:text-patriot-red"
                >
                  Click to upload photo
                </label>
              </div>
            </div>

            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <input
                  type="checkbox"
                  checked={formData.isAnonymous}
                  onChange={(e) => setFormData(prev => ({ ...prev, isAnonymous: e.target.checked }))}
                  className="rounded border-gray-300 text-patriot-red focus:ring-patriot-red"
                />
                Keep my identity anonymous
              </label>
              {formData.isAnonymous ? (
                <EyeOff className="w-5 h-5 text-patriot-red" />
              ) : (
                <Eye className="w-5 h-5 text-patriot-blue" />
              )}
            </div>

            {!formData.isAnonymous && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Age
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Church/Organization
              </label>
              <input
                type="text"
                name="church"
                value={formData.church}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
                required
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-patriot-navy mb-6">Event Details</h3>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Purpose
              </label>
              <select
                name="purpose"
                value={formData.purpose}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
                required
              >
                <option value="">Select purpose</option>
                <option value="mission">Mission Trip</option>
                <option value="camp">Youth Camp</option>
                <option value="retreat">Spiritual Retreat</option>
                <option value="conference">Youth Conference</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Destination
              </label>
              <input
                type="text"
                name="destination"
                value={formData.destination}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Start Date
                </label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  End Date
                </label>
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Funding Goal
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                <input
                  type="number"
                  name="goal"
                  value={formData.goal}
                  onChange={handleInputChange}
                  className="w-full pl-8 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
                  required
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-patriot-navy mb-6">Your Story</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Share your journey and how this opportunity will impact your faith
              </label>
              <RichTextEditor
                value={formData.story}
                onChange={(value) => setFormData(prev => ({ ...prev, story: value }))}
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full mx-auto p-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-patriot-navy">Request Sponsorship</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex justify-between items-center mb-8">
            {[1, 2, 3].map((stepNumber) => (
              <div
                key={stepNumber}
                className={`h-2 flex-1 mx-1 rounded-full ${
                  stepNumber <= step ? 'bg-patriot-red' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>

          {renderStep()}

          <div className="flex justify-between mt-8">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="flex items-center gap-2 px-6 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                Previous
              </button>
            )}
            
            {step < 3 ? (
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                className="flex items-center gap-2 px-6 py-2 rounded-lg bg-patriot-red text-white hover:bg-patriot-crimson transition-colors ml-auto"
              >
                Next <ArrowRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-2 rounded-lg bg-patriot-red text-white hover:bg-patriot-crimson transition-colors ml-auto"
              >
                Submit Request <PlusCircle className="w-5 h-5" />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}