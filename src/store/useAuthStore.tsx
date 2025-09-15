import { create } from 'zustand';
import { persist } from 'zustand/middleware';

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
    },
  ),
);
