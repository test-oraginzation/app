import {create} from 'zustand';
import {
  getAsyncStorage,
  setAsyncStorage,
} from '../modules/core/services/storage.services.ts';
import {SessionType} from '../modules/core/typing/enums';

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
    await setAsyncStorage(SessionType.AccessToken, accessToken);
    await setAsyncStorage(SessionType.RefreshToken, refreshToken);
  },

  getSessionZus: async () => {
    const accessToken = await getAsyncStorage(SessionType.AccessToken);
    const refreshToken = await getAsyncStorage(SessionType.RefreshToken);
    set({accessToken, refreshToken});
  },

  handleLogout: async () => {
    await setAsyncStorage(SessionType.AccessToken, null);
    await setAsyncStorage(SessionType.RefreshToken, null);
    set({accessToken: null, refreshToken: null});
  },
}));
