import {PhotoName, PhotoUrl} from './interface.ts';
import axios from 'axios';
import {BASE_URL} from '../../../configs/access.config.ts';
import http from '../../../api/axiosInstance.ts';

export const getSignedUrl = (photoName: string, accessToken: string) => {
  return axios.get<PhotoUrl>(
    `${BASE_URL}files/signed-create?name=${photoName}`,
    {headers: {Authorization: `Bearer ${accessToken}`}},
  );
};
export const uploadPhoto = (file: object, url: string) => {
  return axios.put(url, file);
};

export const putTest = (name: string) => {
  return http.put(`${BASE_URL}users`, {
    name,
  });
};
