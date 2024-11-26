import { useState, useEffect } from 'react';

const GOOGLE_MAPS_CONFIG = {
  apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  libraries: ['places', 'geometry', 'geocoding'],
  region: 'US',
  language: 'en'
};

let isLoading = false;
let isLoaded = false;
let loadError: Error | null = null;
let loadPromise: Promise<void> | null = null;

export function loadGoogleMapsScript(): Promise<void> {
  if (isLoaded) return Promise.resolve();
  if (loadError) return Promise.reject(loadError);
  if (loadPromise) return loadPromise;

  const SCRIPT_ID = 'google-maps-script';
  const CALLBACK_NAME = 'initGoogleMaps';

  // Check if script already exists
  const existingScript = document.getElementById(SCRIPT_ID);
  if (existingScript) {
    return Promise.resolve();
  }

  if (!GOOGLE_MAPS_CONFIG.apiKey) {
    const error = new Error('Google Maps API key is required');
    loadError = error;
    return Promise.reject(error);
  }

  isLoading = true;
  loadPromise = new Promise((resolve, reject) => {
    try {
      // Create callback function
      (window as any)[CALLBACK_NAME] = () => {
        isLoaded = true;
        isLoading = false;
        delete (window as any)[CALLBACK_NAME];
        resolve();
      };

      const script = document.createElement('script');
      script.id = SCRIPT_ID;
      script.type = 'text/javascript';
      script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_CONFIG.apiKey}&libraries=${GOOGLE_MAPS_CONFIG.libraries.join(',')}&region=${GOOGLE_MAPS_CONFIG.region}&language=${GOOGLE_MAPS_CONFIG.language}&callback=${CALLBACK_NAME}`;
      script.async = true;
      script.defer = true;
      script.onerror = (event) => {
        const error = new Error('Failed to load Google Maps script');
        loadError = error;
        isLoading = false;
        reject(error);
      };

      document.head.appendChild(script);
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Failed to load Google Maps script');
      loadError = error;
      isLoading = false;
      reject(error);
    }
  });

  return loadPromise;
}

export function useGoogleMapsConfig() {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!GOOGLE_MAPS_CONFIG.apiKey) {
      setError('Google Maps API key is required. Please check your environment configuration.');
    }
  }, []);

  return {
    config: GOOGLE_MAPS_CONFIG,
    error,
    isConfigured: Boolean(GOOGLE_MAPS_CONFIG.apiKey)
  };
}