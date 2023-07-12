import { create } from 'zustand';

type State = {
  active: string;
  setActive: (active: string) => void;
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
};

// TODO: add translation to active initial state
export const useActive = create<State>((set) => ({
  active: 'Home',
  setActive: (active: string) =>
    set(() => ({
      active,
    })),
  darkMode: true,
  setDarkMode: (darkMode: boolean) =>
    set(() => ({
      darkMode,
    })),
}));
