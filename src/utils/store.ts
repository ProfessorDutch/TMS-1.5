import { create } from 'zustand';

interface BlessingRequest {
  id: string;
  name: string | null;
  age: number;
  church: string;
  destination: string;
  startDate: string;
  endDate: string;
  goal: number;
  amountRaised: number;
  story: string;
  imageUrl: string;
  supporters: number;
  isAnonymous: boolean;
  purpose: string;
}

interface AppState {
  blessings: BlessingRequest[];
  selectedBlessing: BlessingRequest | null;
  setBlessings: (blessings: BlessingRequest[]) => void;
  setSelectedBlessing: (blessing: BlessingRequest | null) => void;
  addBlessing: (blessing: BlessingRequest) => void;
}

export const useStore = create<AppState>((set) => ({
  blessings: [],
  selectedBlessing: null,
  setBlessings: (blessings) => set({ blessings }),
  setSelectedBlessing: (blessing) => set({ selectedBlessing: blessing }),
  addBlessing: (blessing) => set((state) => ({ 
    blessings: [...state.blessings, blessing] 
  })),
}));