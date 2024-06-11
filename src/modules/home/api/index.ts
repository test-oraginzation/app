import {IPayloadAddWish, patchSettingDataPR, UserProfile, WishData} from './interface.ts';
import axios, {AxiosResponse} from 'axios';
import {BASE_URL} from '../../../configs/access.config.ts';
import instance from '../../../api/axiosInstance.ts';

export const getSignedUrl = async (photoName: string) => {
  return await instance.get(`${BASE_URL}users/upload-photo?name=${photoName}`);
};
export const uploadPhoto = async (file: any, url: string) => {
  return await axios.put(file, url);
};
export const finishUpload = async () => {
  return await instance.get(`${BASE_URL}users/finish-upload`);
};

export const fetchUserProfile = async (): Promise<UserProfile> => {
  try {
    // Виконуємо запит на отримання профілю користувача
    const profileResponse: AxiosResponse<UserProfile> = await instance.get(
      `${BASE_URL}users/profile`,
    );

    // Отримуємо дані про кількість фоловерів
    const followersResponse: AxiosResponse<number> = await instance.get(
      `${BASE_URL}users/followers-count`,
    );

    // Отримуємо дані про кількість користувачів, яких користувачі стежать
    const followingResponse: AxiosResponse<number> = await instance.get(
      `${BASE_URL}users/following-count`,
    );
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

export const addWishReq = (payload: IPayloadAddWish) => {
  return instance.post(`${BASE_URL}wishes`, payload);
};

export const wishesResponse = async (): Promise<WishData> => {
  const response = await instance.get(`${BASE_URL}wishes`);
  return response.data as WishData;
};

export const getDataUser = async (): Promise<UserProfile> => {
  const response = await instance.get(`${BASE_URL}users/profile`);
  return response.data;
};

export const patchSettingData = async (payload: patchSettingDataPR) => {
  const response = await instance.patch(`${BASE_URL}users`, payload);
  return response.data;
};
