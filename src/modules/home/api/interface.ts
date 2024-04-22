export interface PhotoName {
  file: object;
}
export interface PhotoUrl {
  url: string;
}
export interface UserProfile {
  nickname: string;
  followersCount: number;
  followingCount: number;
}

export interface IPayloadAddWish {
  name: string;
  currency: string;
  price: number;
  url: string;
  description: string;
  private: boolean;
}

export interface WishData {
  name: string;
  currency: string;
  price: number;
  url: string;
  description: string;
  private: boolean;
  createdDate: string;
}
