import { create } from 'zustand';
import { User, Incident, Subscription } from '../types';

interface Store {
  user: User | null;
  incidents: Incident[];
  subscription: Subscription | null;
  setUser: (user: User | null) => void;
  setIncidents: (incidents: Incident[]) => void;
  setSubscription: (subscription: Subscription | null) => void;
  addIncident: (incident: Incident) => void;
  updateIncident: (id: string, updates: Partial<Incident>) => void;
}

const useStore = create<Store>((set) => ({
  user: null,
  incidents: [],
  subscription: null,
  setUser: (user) => set({ user }),
  setIncidents: (incidents) => set({ incidents }),
  setSubscription: (subscription) => set({ subscription }),
  addIncident: (incident) =>
    set((state) => ({ incidents: [...state.incidents, incident] })),
  updateIncident: (id, updates) =>
    set((state) => ({
      incidents: state.incidents.map((incident) =>
        incident.id === id ? { ...incident, ...updates } : incident
      ),
    })),
}));

export default useStore;