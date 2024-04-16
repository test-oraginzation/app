import {create} from 'zustand';

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  saveSessionZus: (accessToken: string, refreshToken: string) => void;
}

export const useAuthStore = create<AuthState>(set => ({
  accessToken: null,
  refreshToken: null,
  saveSessionZus: (accessToken, refreshToken) => set({accessToken, refreshToken}),
}));
