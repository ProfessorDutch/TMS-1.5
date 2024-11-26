import { useState, useCallback } from 'react';
import { Business } from '../types/business';
import { useGoogleMaps } from './useGoogleMaps';

export function useBusinessDirectory() {
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentLocation, setCurrentLocation] = useState<string | null>(null);
  const [searchRadius, setSearchRadius] = useState<number>(10);
  const { isLoaded, geocodeAddress } = useGoogleMaps();

  const searchBusinesses = useCallback(async (
    query: string,
    name: string,
    location: string,
    radius: number,
    filters: { donorsOnly: boolean; type?: string }
  ) => {
    if (!isLoaded) {
      setError('Google Maps API not loaded');
      return;
    }

    setLoading(true);
    setError(null);
    
    try {
      // Get location coordinates
      const coordinates = await geocodeAddress(location);
      if (!coordinates) {
        throw new Error('Could not find location');
      }

      // Initialize Places Service
      const service = new google.maps.places.PlacesService(
        document.createElement('div')
      );

      setCurrentLocation(location);
      setSearchRadius(radius);

      // Search for businesses
      const searchRequest: google.maps.places.PlaceSearchRequest = {
        location: coordinates,
        radius: radius * 1609.34, // Convert miles to meters
        keyword: query || name,
        type: filters.type || 'establishment'
      };

      const places = await new Promise<google.maps.places.PlaceResult[]>((resolve, reject) => {
        service.nearbySearch(searchRequest, (results, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK && results) {
            resolve(results);
          } else {
            reject(new Error('Places search failed'));
          }
        });
      });

      // Transform places into businesses
      const transformedBusinesses: Business[] = places
        .filter(place => {
          if (name) {
            return place.name?.toLowerCase().includes(name.toLowerCase());
          }
          return true;
        })
        .map(place => ({
          id: place.place_id!,
          name: place.name!,
          logo: place.photos?.[0].getUrl() || 'https://via.placeholder.com/150',
          type: place.types || [],
          description: place.vicinity || '',
          address: {
            street: place.vicinity || '',
            city: '', // Would need additional API call to get detailed address
            state: '',
            zip: '',
            coordinates: {
              lat: place.geometry?.location?.lat() || 0,
              lng: place.geometry?.location?.lng() || 0
            }
          },
          contact: {
            phone: '',
            email: '',
            website: place.website || ''
          },
          hours: [],
          badges: [],
          contributionTier: undefined,
          joinedDate: new Date().toISOString(),
          verified: place.business_status === 'OPERATIONAL'
        }));

      // Filter for donors if requested
      const filteredBusinesses = filters.donorsOnly
        ? transformedBusinesses.filter(b => b.contributionTier)
        : transformedBusinesses;

      setBusinesses(filteredBusinesses);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setBusinesses([]);
    } finally {
      setLoading(false);
    }
  }, [isLoaded, geocodeAddress]);

  return {
    businesses,
    loading,
    error,
    searchBusinesses,
    currentLocation,
    searchRadius
  };
}