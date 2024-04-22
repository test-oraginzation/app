import {create} from 'zustand';

interface AuthState {
  accessToken: string | null;
  setSessionZus: (accessToken: string, refreshToken: string) => void;
  clearSessionZus: () => void;
}

export const useToken = create<AuthState>(set => ({
  accessToken: null,
  setSessionZus: accessToken => set({accessToken}),
  clearSessionZus: () => set({accessToken: null}),
}));
