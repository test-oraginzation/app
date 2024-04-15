export interface IPayloadRegister {
  email: string;
  password: string;
  country: string;
  nickname: string;
}
export interface IPayloadSignIn {
  nickname: string;
  password: string;
}
export interface SessionResp {
  accessToken: string;
  refreshToken: string;
}
