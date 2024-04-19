import axios from 'axios';
import {BASE_URL} from '../configs/access.config.ts';
import {SessionType} from '../modules/core/typing/enums';
import {getAsyncStorage, setAsyncStorage} from '../modules/core/services/storage.services.ts';

const instance = axios.create({
  baseURL: `${BASE_URL}`,
});

instance.interceptors.response.use(
  response => response, // Успішна відповідь без змін
  async error => {
    const originalRequest = error.config;
    if (error.response.status === 401) {
      originalRequest._retry = true;
      const refreshToken = await getAsyncStorage(SessionType.RefreshToken);
      if (refreshToken) {
        try {
          const response = await axios.get(`${BASE_URL}auth/refresh`, {
            headers: {Authorization: `Bearer ${refreshToken}`},
          });
          await setAsyncStorage(SessionType.AccessToken, response.data.accessToken);
          originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;
          return instance(originalRequest);
        } catch (refreshError) {
          console.error('Failed to refresh access token:', refreshError);
          return Promise.reject(error);
        }
      }
    }
    return Promise.reject(error);
  },
);

export default instance;
