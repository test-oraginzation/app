import axios from 'axios';
import {BASE_URL} from '../configs/access.config.ts';
import {SessionType} from '../modules/core/typing/enums';
import {get, set} from '../modules/core/services/storage.services.ts';

const instance = axios.create({
  baseURL: `${BASE_URL}`,
});

// Додаємо інтерцептор для обробки відповіді перед тим, як вона буде передана обробнику успіху або помилки
instance.interceptors.response.use(
  response => response, // Успішна відповідь без змін
  async error => {
    const originalRequest = error.config;

    // Перевіряємо, чи статусні код 401 і чи маємо refreshToken у AsyncStorage
    if (error.response.status === 401) {
      originalRequest._retry = true;

      // Отримуємо refreshToken з AsyncStorage
      const refreshToken = await get(SessionType.RefreshToken);

      // Отримуємо новий accessToken за допомогою refreshToken
      if (refreshToken) {
        try {
          const response = await axios.get(`${BASE_URL}auth/refresh`, {
            headers: {Authorization: `Bearer ${refreshToken}`},
          });

          // Оновлюємо accessToken в AsyncStorage та в об'єкті запиту
          await set(SessionType.AccessToken, response.data.accessToken);
          originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;

          // Повторно виконуємо оригінальний запит з оновленим accessToken
          return instance(originalRequest);
        } catch (refreshError) {
          // Обробляємо помилку оновлення accessToken
          // console.log('refreshToken', refreshToken , 'accesToken', await AsyncStorage.getItem('accessToken');
          console.error('Failed to refresh access token:', refreshError);
          return Promise.reject(error);
        }
      }
    }
    // Якщо немає refreshToken або не вдалося оновити accessToken, повертаємо помилку
    return Promise.reject(error);
  },
);

export default instance;
