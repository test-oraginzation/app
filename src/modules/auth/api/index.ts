import {IPayloadRegister, SessionResp} from './interface.ts';
import axios from 'axios';
import {BASE_URL} from '../../../configs/access.config.ts';

export const registrationReq = (payload: IPayloadRegister) => {
  console.log(payload)
  return axios.post<SessionResp>(`${BASE_URL}auth/sign-up`, payload);
};
