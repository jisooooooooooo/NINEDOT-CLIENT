import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import type { AuthStoreType, UserType } from '@/store/types/authTypes';

const defaultUser: UserType = {
  name: '',
  email: '',
  profileImageUrl: '',
};
const token = localStorage.getItem('accessToken');

export const useAuthStore = create<AuthStoreType>()(
  persist(
    (set) => ({
      user: defaultUser,
      isLoggedIn: !!token,
      setUser: (newUser) => set({ user: newUser, isLoggedIn: true }),
      resetUser: () => set({ user: defaultUser, isLoggedIn: false }),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => ({
        getItem: (name) => localStorage.getItem(name),
        setItem: (name, value) => {
          const { state } = JSON.parse(value) as { state: AuthStoreType };
          if (!state.isLoggedIn) {
            localStorage.removeItem(name);
            return;
          }
          localStorage.setItem(name, value);
        },
        removeItem: (name) => localStorage.removeItem(name),
      })),
    },
  ),
);
