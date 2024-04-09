export interface IPayloadRegister {
  email: string;
  password: string;
  country: string;
  nickname: string;
}


export interface  SessionResp {
  accessToken:string;
  refreshToken:string;
}
