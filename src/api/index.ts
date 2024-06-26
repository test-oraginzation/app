import axios from 'axios';
import {BASE_URL} from '../configs/access.config.ts';
import {SessionType} from '../modules/core/typing/enums';
import {SessionResp} from '../modules/auth/api/interface.ts';

export const refreshTokenRequest = () => {
  return axios.get<SessionResp>(`${BASE_URL}auth/refresh`, {
    headers: {Authorization: `Bearer ${SessionType.RefreshToken}`},
  });
};
