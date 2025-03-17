import { create } from 'zustand'

export const useStore = create((set) => ({
  globalLanguage: 'en',
  setGlobalLanguage: (language) => set({ globalLanguage: language }),
}))