import { useEffect } from 'react';
import { loadGoogleMapsScript } from '../config/google-maps';

let scriptLoaded = false;

export default function GoogleMapsLoader() {
  useEffect(() => {
    if (scriptLoaded) {
      return;
    }

    const loadMaps = async () => {
      try {
        await loadGoogleMapsScript();
        scriptLoaded = true;
      } catch (error) {
        console.error('Failed to load Google Maps:', error);
      }
    };

    loadMaps();
  }, []);

  return null;
}