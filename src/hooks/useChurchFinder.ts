import { useState } from 'react';
import { Church } from '../types/church';
import { useGoogleMaps } from './useGoogleMaps';

export function useChurchFinder() {
  const [churches, setChurches] = useState<Church[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { geocodeAddress, isLoaded } = useGoogleMaps();

  const searchChurches = async (name: string, location: string, radius: number) => {
    if (!isLoaded) {
      setError('Maps service not ready');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const coordinates = await geocodeAddress(location);
      if (!coordinates) {
        throw new Error('Location not found');
      }

      // Create a Places Service instance
      const service = new google.maps.places.PlacesService(document.createElement('div'));
      
      // Search for churches near the location
      const request: google.maps.places.PlaceSearchRequest = {
        location: coordinates,
        radius: radius * 1609.34, // Convert miles to meters
        keyword: name || 'church',
        type: 'church'
      };

      const results = await new Promise<google.maps.places.PlaceResult[]>((resolve, reject) => {
        service.nearbySearch(request, (results, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK && results) {
            resolve(results);
          } else {
            reject(new Error('Failed to find churches'));
          }
        });
      });

      const churchResults: Church[] = results.map(place => ({
        id: place.place_id || Math.random().toString(),
        name: place.name || 'Unknown Church',
        address: place.vicinity || 'Address unavailable',
        members: Math.floor(Math.random() * 300) + 50, // Mock data
        coordinates: place.geometry?.location ? {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng()
        } : undefined,
        distance: place.geometry?.location ? 
          google.maps.geometry.spherical.computeDistanceBetween(
            new google.maps.LatLng(coordinates),
            place.geometry.location
          ) / 1609.34 : // Convert meters to miles
          undefined
      }));

      setChurches(churchResults);
    } catch (err) {
      console.error('Church search failed:', err);
      setError(err instanceof Error ? err.message : 'Failed to search churches');
      setChurches([]);
    } finally {
      setLoading(false);
    }
  };

  const claimChurch = async (churchId: string) => {
    // Implementation for claiming church would go here
    console.log('Claiming church:', churchId);
  };

  return {
    churches,
    loading,
    error,
    searchChurches,
    claimChurch
  };
}