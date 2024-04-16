import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Auth from './navigationGroup/Auth.tsx';
import {UserNavigationGroup} from './navigationGroup/UserNavigationGrup.tsx';
import {get} from '../core/services/storage.services.ts';
import {SessionType} from '../core/typing/enums';
import AddWith from "../home/screens/addWith/AddWith.tsx";
import {useAuthStore} from "../../hooks/auth.ts";

const Root = () => {
  const [token, setToken] = useState('');
  const {accessToken} = useAuthStore();
  console.log('accessToken',accessToken)
  const getToken = async () => {
    const existToken: any = await get(SessionType.AccessToken);
    setToken(existToken);
  };
  useEffect(() => {
    getToken();
  }, []);
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        {token ? <UserNavigationGroup /> : <Auth />}
        {/*<UserNavigationGroup />*/}
        {/*<Auth />*/}
        {/*<AddWith />*/}
      </NavigationContainer>
    </View>
  );
};

export default Root;
