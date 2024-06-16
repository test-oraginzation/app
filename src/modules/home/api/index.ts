import {
  IPayloadAddWish,
  patchSettingDataPR, User,
  UserListProps,
  UserProfile, Wish,
  WishData,
} from './interface.ts';
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
    const profileResponse: AxiosResponse<UserProfile> = await instance.get(
      `${BASE_URL}users/profile`,
    );

    const followersResponse: AxiosResponse<number> = await instance.get(
      `${BASE_URL}users/followers-count`,
    );

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

export const getUsers = async (search: string): Promise<UserListProps> => {
  const response = await instance.get(`${BASE_URL}users?search=${search}`);
  return response.data;
};

export const getWishes = async (search: string): Promise<Wish[]> => {
  const response = await instance.get(`${BASE_URL}wishes/all?search=${search}`);
  return response.data;
};

export const getUsersId = async (id: number): Promise<User> => {
  const response = await instance.get(`${BASE_URL}users/${id}`);
  return response.data;
};

export const getUsersIdFollowings = async (id: number) => {
  const response = await instance.get(`${BASE_URL}users/${id}/followings`);
  return response.data;
};
export const getUsersIdFollowers = async (id: number) => {
  const response = await instance.get(`${BASE_URL}users/${id}/followers`);
  return response.data;
};

export const getUsersIdWishes = async (id: number): Promise<WishData> => {
  const response = await instance.get(`${BASE_URL}users/${id}/wishes`);
  return response.data;
};
