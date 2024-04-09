import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Auth from './navigationGroup/Auth.tsx';
import User from './navigationGroup/User.tsx';
import {get} from '../core/services/storage.services.ts';
import {SessionType} from '../core/typing/enums';

const Root = () => {
  const [token, setToken] = useState('');

  const getToken = async () => {
    const existToken = await get(SessionType.AccessToken);
    setToken(existToken);
  };
  useEffect(() => {
    getToken();
  }, []);
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        {token ? <User /> : <Auth />}
      </NavigationContainer>
    </View>
  );
};

export default Root;
