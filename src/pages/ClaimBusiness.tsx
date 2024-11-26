import React, { useState } from 'react';
import { Building2, Search, Phone, Mail, Shield, ArrowRight } from 'lucide-react';
import { useGoogleMaps } from '../hooks/useGoogleMaps';
import BusinessSearch from '../components/directory/BusinessSearch';
import VerificationForm from '../components/forms/VerificationForm';
import BusinessClaimForm from '../components/forms/BusinessClaimForm';

type ClaimStep = 'search' | 'verify' | 'details';

interface BusinessResult {
  id: string;
  name: string;
  address: string;
  contact?: {
    phone?: string;
    email?: string;
  };
}

export default function ClaimBusiness() {
  const [step, setStep] = useState<ClaimStep>('search');
  const [selectedBusiness, setSelectedBusiness] = useState<BusinessResult | null>(null);
  const [searchResults, setSearchResults] = useState<BusinessResult[]>([]);
  const { isLoaded, error } = useGoogleMaps();

  const handleSearch = async (query: string, name: string, location: string, radius: number) => {
    if (!isLoaded) return;

    const service = new google.maps.places.PlacesService(document.createElement('div'));
    const geocoder = new google.maps.Geocoder();

    try {
      const geocodeResult = await new Promise<google.maps.LatLngLiteral>((resolve, reject) => {
        geocoder.geocode({ address: location }, (results, status) => {
          if (status === 'OK' && results && results[0]?.geometry?.location) {
            resolve({
              lat: results[0].geometry.location.lat(),
              lng: results[0].geometry.location.lng()
            });
          } else {
            reject(new Error('Could not find location'));
          }
        });
      });

      const request = {
        location: geocodeResult,
        radius: radius * 1609.34, // Convert miles to meters
        keyword: query || name,
        type: 'establishment'
      };

      const places = await new Promise<google.maps.places.PlaceResult[]>((resolve, reject) => {
        service.nearbySearch(request, (results, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK && results) {
            resolve(results);
          } else {
            reject(new Error('Place search failed'));
          }
        });
      });

      const businesses = places
        .filter(place => {
          if (name) {
            return place.name?.toLowerCase().includes(name.toLowerCase());
          }
          return true;
        })
        .map(place => ({
          id: place.place_id!,
          name: place.name!,
          address: place.vicinity!,
          contact: {
            phone: place.formatted_phone_number,
          }
        }));

      setSearchResults(businesses);
    } catch (err) {
      console.error('Search error:', err);
    }
  };

  const handleBusinessSelect = (business: BusinessResult) => {
    setSelectedBusiness(business);
    setStep('verify');
  };

  if (error) {
    return (
      <main className="flex-1">
        <section className="py-12 bg-gradient-to-br from-patriot-cream to-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <Shield className="w-12 h-12 text-patriot-red mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-patriot-navy mb-4">Service Unavailable</h1>
            <p className="text-patriot-blue">
              We're experiencing technical difficulties. Please try again later.
            </p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="flex-1">
      <section className="py-12 bg-gradient-to-br from-patriot-cream to-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Building2 className="w-12 h-12 text-patriot-red" />
            <div>
              <h1 className="text-4xl font-bold text-patriot-navy">Claim Your Business</h1>
              <p className="text-xl text-patriot-blue">Join our community of faith-driven businesses</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            {/* Progress Steps */}
            <div className="flex justify-between items-center mb-8">
              {['search', 'verify', 'details'].map((s, index) => (
                <div
                  key={s}
                  className={`flex-1 relative ${index < 2 ? 'after:content-[""] after:absolute after:top-1/2 after:left-1/2 after:w-full after:h-0.5 after:bg-gray-200' : ''}`}
                >
                  <div className={`relative z-10 flex items-center justify-center ${
                    step === s 
                      ? 'text-patriot-red'
                      : index < ['search', 'verify', 'details'].indexOf(step)
                        ? 'text-patriot-blue'
                        : 'text-gray-400'
                  }`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step === s
                        ? 'bg-patriot-red text-white'
                        : index < ['search', 'verify', 'details'].indexOf(step)
                          ? 'bg-patriot-blue text-white'
                          : 'bg-gray-200'
                    }`}>
                      {index + 1}
                    </div>
                    <span className="ml-2 font-medium capitalize hidden md:inline">
                      {s}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {step === 'search' && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-patriot-navy mb-4">Find Your Business</h2>
                  <p className="text-patriot-blue">
                    Search for your business to begin the claiming process
                  </p>
                </div>

                <BusinessSearch onSearch={handleSearch} />

                {searchResults.length > 0 && (
                  <div className="mt-8 space-y-4">
                    <h3 className="font-semibold text-patriot-navy">Search Results</h3>
                    {searchResults.map((business) => (
                      <button
                        key={business.id}
                        onClick={() => handleBusinessSelect(business)}
                        className="w-full text-left p-4 rounded-lg border-2 border-gray-200 hover:border-patriot-red hover:bg-patriot-cream transition-colors"
                      >
                        <h4 className="font-semibold text-patriot-navy">{business.name}</h4>
                        <p className="text-sm text-patriot-blue">{business.address}</p>
                      </button>
                    ))}
                  </div>
                )}

                <div className="text-center mt-8">
                  <p className="text-sm text-patriot-gray mb-4">
                    Can't find your business?
                  </p>
                  <button
                    onClick={() => setStep('details')}
                    className="text-patriot-red hover:text-patriot-crimson transition-colors"
                  >
                    Add your business manually
                  </button>
                </div>
              </div>
            )}

            {step === 'verify' && selectedBusiness && (
              <VerificationForm
                business={selectedBusiness}
                onVerificationSuccess={() => setStep('details')}
                onBack={() => setStep('search')}
              />
            )}

            {step === 'details' && (
              <BusinessClaimForm
                existingBusiness={selectedBusiness}
                onBack={() => setStep(selectedBusiness ? 'verify' : 'search')}
              />
            )}
          </div>
        </div>
      </section>
    </main>
  );
}