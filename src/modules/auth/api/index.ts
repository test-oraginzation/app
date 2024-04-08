import {IPayloadRegister} from './interface.ts';
import axios from 'axios';
import {BASE_URL} from '../../../configs/access.config.ts';

export const registrationReq = (payload: IPayloadRegister) => {
  return axios.post(`${BASE_URL}auth/sign-up`, payload);
};
