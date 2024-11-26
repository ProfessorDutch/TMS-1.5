export interface BusinessHours {
  day: string;
  open: string;
  close: string;
  closed?: boolean;
}

export interface BusinessBadge {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
}

export interface Business {
  id: string;
  name: string;
  logo: string;
  type: string[];
  description: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  contact: {
    phone: string;
    email: string;
    website: string;
  };
  hours?: BusinessHours[];
  badges: string[];
  contributionTier?: 'seed' | 'harvest' | 'legacy';
  joinedDate: string;
  featured?: boolean;
  verified?: boolean;
  socialMedia?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
  photos?: string[];
}