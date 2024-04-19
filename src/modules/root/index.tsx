import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Auth from './navigationGroup/Auth.tsx';
import {UserNavigationGroup} from './navigationGroup/UserNavigationGrup.tsx';
import {useToken} from '../../hooks/auth.ts';

const Root = () => {
  const [token, setToken] = useState('');
  const {getSessionZus, accessToken} = useToken();

  useEffect(() => {
    getSessionZus();
  }, []);
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        {accessToken ? <UserNavigationGroup /> : <Auth />}
        {/*{accessToken || token ? <UserNavigationGroup /> : <Auth />}*/}
        {/*<UserNavigationGroup />*/}
        {/*<Auth />*/}
        {/*<AddWith />*/}
      </NavigationContainer>
    </View>
  );
};

export default Root;
