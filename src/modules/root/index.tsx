import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Auth from './navigationGroup/Auth.tsx';
import {UserNavigationGroup} from './navigationGroup/UserNavigationGrup.tsx';
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
        <UserNavigationGroup />
        {/*: <Auth />}*/}
      </NavigationContainer>
    </View>
  );
};

export default Root;
