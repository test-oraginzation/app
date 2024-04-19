import {create} from 'zustand';
import {setSessionTokens, getSessionTokens, clearSessionTokens} from './action';

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  setSessionZus: (accessToken: string, refreshToken: string) => void;
  getSessionZus: () => void;
  handleLogout: () => void;
}

export const useToken = create<AuthState>(set => ({
  accessToken: null,
  refreshToken: null,

  setSessionZus: async (accessToken, refreshToken) => {
    set({accessToken, refreshToken});
    await setSessionTokens(accessToken, refreshToken);
  },

  getSessionZus: async () => {
    const {accessToken, refreshToken} = await getSessionTokens();
    set({accessToken, refreshToken});
  },

  handleLogout: async () => {
    await clearSessionTokens();
    set({accessToken: null, refreshToken: null});
  },
}));
