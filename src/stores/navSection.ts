import { create } from 'zustand';

type State = {
  active: string;
  setActive: (active: string) => void;
};

export const useActive = create<State>((set) => ({
  active: 'Home',
  setActive: (active: string) =>
    set(() => ({
      active,
    })),
}));
