import { useState, useEffect } from 'react';
import { loadGoogleMapsScript, useGoogleMapsConfig } from '../config/google-maps';

interface PlaceDetails {
  formatted_address?: string;
  place_id?: string;
  geometry?: {
    location: {
      lat: number;
      lng: number;
    };
  };
}

export function useGoogleMaps() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { isConfigured, error: configError } = useGoogleMapsConfig();

  useEffect(() => {
    if (!isConfigured) {
      setError(configError);
      return;
    }

    const loadMaps = async () => {
      if (!isLoaded && !isLoading) {
        setIsLoading(true);
        try {
          await loadGoogleMapsScript();
          setIsLoaded(true);
          setError(null);
        } catch (err) {
          setError(err instanceof Error ? err.message : 'Failed to load Google Maps');
        } finally {
          setIsLoading(false);
        }
      }
    };

    loadMaps();
  }, [isConfigured, configError]);

  const geocodeAddress = async (address: string): Promise<google.maps.LatLngLiteral | null> => {
    if (!isLoaded) {
      setError('Google Maps API not loaded');
      return null;
    }

    try {
      const geocoder = new google.maps.Geocoder();
      const response = await new Promise<google.maps.GeocoderResult[]>((resolve, reject) => {
        geocoder.geocode({ address }, (results, status) => {
          if (status === 'OK' && results && results.length > 0) {
            resolve(results);
          } else {
            reject(new Error(`Geocoding failed: ${status}`));
          }
        });
      });

      if (response[0]?.geometry?.location) {
        return {
          lat: response[0].geometry.location.lat(),
          lng: response[0].geometry.location.lng()
        };
      }

      throw new Error('No location found');
    } catch (err) {
      console.error('Geocoding error:', err);
      setError(err instanceof Error ? err.message : 'Failed to geocode address');
      return null;
    }
  };

  return {
    isLoaded,
    isLoading,
    error,
    geocodeAddress
  };
}