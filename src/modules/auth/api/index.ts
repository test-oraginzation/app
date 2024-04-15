import {IPayloadRegister, IPayloadSignIn, SessionResp} from './interface.ts';
import axios from 'axios';
import {BASE_URL} from '../../../configs/access.config.ts';

export const registrationReq = (payload: IPayloadRegister) => {
  return axios.post<SessionResp>(`${BASE_URL}auth/sign-up`, payload);
};

export const signIn = (payload: IPayloadSignIn) => {
  return axios.post(`${BASE_URL}auth/sign-in`, payload);
};
