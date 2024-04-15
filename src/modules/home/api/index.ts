import {UserProfile} from './interface.ts';
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

export const fetchUserProfile = async (): Promise<UserProfile> => {
  try {
    // Отримуємо accessToken з локального сховища
    const accessToken = await AsyncStorage.getItem('accessToken');

    if (!accessToken) {
      throw new Error('AccessToken не знайдений');
    }

    // Виконуємо запит на отримання профілю користувача
    const profileResponse: AxiosResponse<UserProfile> = await http.get(
      `${BASE_URL}users/profile`,
    );

    // Отримуємо дані про кількість фоловерів
    const followersResponse: AxiosResponse<number> = await http.get(
      `${BASE_URL}follows/followers-count`,
    );

    // Отримуємо дані про кількість користувачів, яких користувачі стежать
    const followingResponse: AxiosResponse<number> = await http.get(
      `${BASE_URL}follows/following-count`,
    );

    // Об'єднуємо отримані дані та повертаємо
    return {
      ...profileResponse.data,
      followersCount: followersResponse.data,
      followingCount: followingResponse.data,
    };
  } catch (error) {
    console.error('Помилка отримання даних з сервера:', error);
    throw error;
  }
};
