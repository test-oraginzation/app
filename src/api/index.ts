import {IPayloadRegister, SessionResp} from './interface.ts';
import axios from 'axios';
import {BASE_URL} from '../../../configs/access.config.ts';
import {SessionType} from "../modules/core/typing/enums";

export const refreshTokenRequest = () => {
  return axios.get<SessionResp>(`${BASE_URL}auth/refresh`,
    {headers: { Authorization: `Bearer ${SessionType.RefreshToken}` },
);}
