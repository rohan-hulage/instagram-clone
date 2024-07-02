import { useState } from 'react';
import { create } from 'zustand';

interface AuthStore {
    user: string | null;
    login: (user: string) => void;
    logout: () => void;
    setUser: (user: string | null) => void;
}

const useAuthStore = create<AuthStore>((set) => ({
    user: JSON.stringify(localStorage.getItem("user-info")),
    login: (user) => set({ user }),
    logout: () => set({ user: null }),
    setUser: (user) => set({ user }),
}));

export default useAuthStore;