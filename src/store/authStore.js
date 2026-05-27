import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create(
    persist(
        (set) => ({
            user: null,
            token: null,
            role: null,
            isAuthenticated: false,

            login: (userData, token, role) => {
                set({ user: userData, token, role, isAuthenticated: true });
            },

            logout: () => {
                set({ user: null, token: null, role: null, isAuthenticated: false });
            }
        }),
        {
            name: 'niyat-auth-storage', // name of the item in storage (must be unique)
        }
    )
);

export default useAuthStore;
