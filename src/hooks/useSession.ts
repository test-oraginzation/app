import {useToken} from './useSession.store';
import {
  getAsyncStorage,
  removeItem,
  setAsyncStorage,
} from '../modules/core/services/storage.services.ts';
import {SessionType} from '../modules/core/typing/enums';

export function useSession() {
  const {accessToken, setSessionZus, clearSessionZus} = useToken();

  const setSessionTokens = async (
    accessToken: string,
    refreshToken: string,
  ) => {
    await setAsyncStorage(SessionType.AccessToken, accessToken);
    await setAsyncStorage(SessionType.RefreshToken, refreshToken);
    setSessionZus(accessToken, refreshToken);
  };

  const getTokens = async () => {
    const accessToken = await getAsyncStorage(SessionType.AccessToken);
    setSessionZus(accessToken);
  };

  const clearSessionTokens = async () => {
    await removeItem(SessionType.AccessToken);
    await removeItem(SessionType.RefreshToken);
    clearSessionZus();
  };

  return {
    accessToken,
    setSessionTokens,
    getTokens,
    clearSessionTokens,
  };
}
