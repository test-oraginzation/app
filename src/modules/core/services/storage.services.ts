import AsyncStorage from '@react-native-async-storage/async-storage';

export const setAsyncStorage = async (key: string, value: any) => {
  return await AsyncStorage.setItem(key, value);
};
export const getAsyncStorage = async (key: string) => {
  return await AsyncStorage.getItem(key);
};
export const removeItem = async (key: string) => {
  return await AsyncStorage.removeItem(key);
};
