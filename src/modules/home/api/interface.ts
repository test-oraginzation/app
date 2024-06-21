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
  count: number;
  items: WishDataItem[];
}

export interface WishDataItem {
  id: number;
  name: string;
  currency: string;
  price: number;
  url: string;
  description: string;
  private: boolean;
  createdDate: string;
  photo: string | null;
  userId: number;
  updatedDate: string;
}

export interface UserProfile {
  id: number;
  name: string | null;
  surname: string | null;
  nickname: string;
  email: string;
  password: string;
  phone: string | null;
  birthday: string | null;
  photo: string | null;
  gender: string | null;
  country: string;
  updatedDate: string;
  createdDate: string;
}

export interface patchSettingDataPR {
  name: string;
  surname: string;
  nickname: string;
  email: string;
  phone: number;
}
export interface UserListProps {
  count: number;
  items: User[];
}

export interface User {
  id: number;
  name: string | null;
  surname: string | null;
  nickname: string;
  email: string;
  password: string;
  phone: string | null;
  birthday: string | null;
  photo: string | null;
  gender: string | null;
  country: string;
  updatedDate: string;
  createdDate: string;
}

export interface Wish {
  id: number;
  name: string;
  currency: string;
  price: string;
  url: string | null;
  description: string;
  photo: string | null;
  private: boolean;
  userId: number;
  updatedDate: string;
  createdDate: string;
}
