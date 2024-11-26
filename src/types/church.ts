export interface Church {
  id: string;
  name: string;
  address: string;
  members: number;
  distance?: number;
  coordinates?: {
    lat: number;
    lng: number;
  };
}