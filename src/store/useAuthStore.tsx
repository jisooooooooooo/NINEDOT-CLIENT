import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { AuthStoreType, UserType } from '@/store/types/authTypes';

const defaultUser: UserType = {
  name: '',
  email: '',
  birthday: '',
  job: '',
  profileImageUrl: '',
  answers: [],
};

export const useAuthStore = create<AuthStoreType>()(
  persist(
    (set) => ({
      user: defaultUser,
      setUser: (newUser) => set({ user: newUser }),
      resetUser: () => set({ user: defaultUser }),
    }),
    {
      name: 'auth-storage',
    },
  ),
);
