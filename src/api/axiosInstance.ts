import axios from 'axios';
import {BASE_URL} from '../configs/access.config.ts';
import {
  getAsyncStorage,
  setAsyncStorage,
} from '../modules/core/services/storage.services.ts';
import {SessionType} from '../modules/core/typing/enums';

const instance = axios.create({
  baseURL: `${BASE_URL}`,
});

instance.interceptors.request.use(
  async config => {
    const accessToken = await getAsyncStorage(SessionType.AccessToken);
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    if (error.response.status === 401) {
      const refreshToken = await getAsyncStorage(SessionType.RefreshToken);
      if (refreshToken) {
        try {
          // Виконуємо POST-запит для оновлення токену
          const response = await axios.post(`${BASE_URL}auth/refresh`, null, {
            headers: {Authorization: `Bearer ${refreshToken}`},
          });
          // Зберігаємо новий accessToken
          await setAsyncStorage(
            SessionType.AccessToken,
            response.data.access_token,
          );
          // Оновлюємо заголовок запиту з новим токеном
          originalRequest.headers.Authorization = `Bearer ${response.data.access_token}`;
          // Повторюємо оригінальний запит
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
