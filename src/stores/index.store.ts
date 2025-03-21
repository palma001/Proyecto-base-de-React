/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand'

export const useStore = create((set) => ({
  globalLanguage: 'en',
  setGlobalLanguage: (language: any) => set({ globalLanguage: language }),
}))