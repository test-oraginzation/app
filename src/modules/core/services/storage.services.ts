import AsyncStorage from '@react-native-async-storage/async-storage';

export const set = async (key: string, value: any) => {
  return await AsyncStorage.setItem(key, value);
};
export const get = async (key: string) => {
  return await AsyncStorage.getItem(key);
};
export const removeItem = async (key: string) => {
  return await AsyncStorage.removeItem(key);
};
