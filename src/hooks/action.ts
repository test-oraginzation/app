import {
  getAsyncStorage,
  removeItem,
  setAsyncStorage,
} from '../modules/core/services/storage.services.ts';
import {SessionType} from '../modules/core/typing/enums';

export const setSessionTokens = async (
  accessToken: string,
  refreshToken: string,
) => {
  await setAsyncStorage(SessionType.AccessToken, accessToken);
  await setAsyncStorage(SessionType.RefreshToken, refreshToken);
};

export const getSessionTokens = async () => {
  const accessToken = await getAsyncStorage(SessionType.AccessToken);
  const refreshToken = await getAsyncStorage(SessionType.RefreshToken);
  return {accessToken, refreshToken};
};

export const clearSessionTokens = async () => {
  await removeItem(SessionType.AccessToken);
};
