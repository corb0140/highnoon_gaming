import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { createThemeSlice } from './themeSlice'
import type { ThemeSlice } from './themeSlice'
import type { StateStorage } from 'zustand/middleware'

type AppState = ThemeSlice

const localStorageState: StateStorage = {
  getItem: (theme) => window.localStorage.getItem(theme),
  setItem: (theme, value) => window.localStorage.setItem(theme, value),
  removeItem: (theme) => window.localStorage.removeItem(theme),
}

export const useAppStore = create<AppState>()(
  persist(
    (...a) => ({
      ...createThemeSlice(...a),
    }),
    {
      name: 'app-storage',
      storage: createJSONStorage(() => localStorageState),
      partialize: (state) => ({
        theme: state.theme,
      }),
    },
  ),
)
