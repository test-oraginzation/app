import {User} from './interface.ts';
import axios, {AxiosResponse} from 'axios';
import {BASE_URL} from '../../../configs/access.config.ts';
import http from '../../../api/axiosInstance.ts';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getSignedUrl = (photoName: string) => {
  return http.get(`${BASE_URL}files/presigned?name=${Date.now()}${photoName}`);
};
export const uploadPhoto = (file: any, url: string) => {
  return axios.put(url, file);
};

export const finishUpload = () => {
  return http.get(`${BASE_URL}files/finish`);
};

export const fetchUserProfile = async (): Promise<User> => {
  try {
    // Отримуємо accessToken з локального сховища
    const accessToken = await AsyncStorage.getItem('accessToken');

    if (!accessToken) {
      throw new Error('AccessToken не знайдений');
    }

    // Встановлюємо accessToken у заголовках запиту
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    const response: AxiosResponse<User> = await http.get(
      `${BASE_URL}users/profile`,
      {headers},
    );

    // Отримали дані успішно, розпарсимо JSON та повернемо їх
    return response.data;
  } catch (error) {
    console.error('Помилка отримання даних з сервера:', error);
    throw error;
  }
};

// export const putTest = (name: string) => {
//   return http.put(`${BASE_URL}users`, {
//     name,
//   });
// };
