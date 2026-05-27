import { create } from 'zustand';

const useAuthStore = create((set) => ({
    user: null,
    token: localStorage.getItem('niyat_token') || null,
    role: null,
    isAuthenticated: !!localStorage.getItem('niyat_token'),

    login: (userData, token, role) => {
        localStorage.setItem('niyat_token', token);
        set({ user: userData, token, role, isAuthenticated: true });
    },

    logout: () => {
        localStorage.removeItem('niyat_token');
        set({ user: null, token: null, role: null, isAuthenticated: false });
    }
}));

export default useAuthStore;
